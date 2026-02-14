import { PostgrestError } from '@supabase/supabase-js';

export enum ErrorType {
  NETWORK = 'network',
  VALIDATION = 'validation',
  PERMISSION = 'permission',
  UNKNOWN = 'unknown',
}

export interface AppError {
  type: ErrorType;
  message: string;
  userMessage: string;
  shouldRetry: boolean;
  technicalDetails?: string;
}

export function parseSupabaseError(error: PostgrestError | Error | null): AppError {
  if (!error) {
    return {
      type: ErrorType.UNKNOWN,
      message: 'Unknown error occurred',
      userMessage: 'Something went wrong. Please try again.',
      shouldRetry: true,
    };
  }

  // PostgrestError (Supabase-specific)
  if ('code' in error && 'details' in error) {
    const pgError = error as PostgrestError;

    // Network/Connection errors
    if (pgError.message.includes('Failed to fetch') ||
        pgError.message.includes('network') ||
        pgError.code === 'PGRST301') {
      return {
        type: ErrorType.NETWORK,
        message: pgError.message,
        userMessage: 'Connection issue detected. Please check your internet and try again.',
        shouldRetry: true,
        technicalDetails: pgError.details,
      };
    }

    // Validation errors (constraint violations, etc.)
    if (pgError.code?.startsWith('23')) { // PostgreSQL constraint violation codes
      return {
        type: ErrorType.VALIDATION,
        message: pgError.message,
        userMessage: 'Please check your input and try again.',
        shouldRetry: false,
        technicalDetails: pgError.details,
      };
    }

    // Permission errors
    if (pgError.code === '42501' || pgError.message.includes('permission')) {
      return {
        type: ErrorType.PERMISSION,
        message: pgError.message,
        userMessage: 'Permission denied. Please contact support.',
        shouldRetry: false,
        technicalDetails: pgError.details,
      };
    }
  }

  // Generic JavaScript Error
  return {
    type: ErrorType.UNKNOWN,
    message: error.message || 'Unknown error',
    userMessage: 'An unexpected error occurred. Please try again.',
    shouldRetry: true,
  };
}

export async function retryOperation<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delayMs: number = 1000
): Promise<T> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      const parsedError = parseSupabaseError(lastError);

      // Don't retry if error type shouldn't be retried
      if (!parsedError.shouldRetry) {
        throw error;
      }

      // Wait before retrying (exponential backoff)
      if (attempt < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delayMs * Math.pow(2, attempt)));
      }
    }
  }

  throw lastError;
}
