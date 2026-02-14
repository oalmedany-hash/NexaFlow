import { X, Loader } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { parseSupabaseError, retryOperation, ErrorType } from '../utils/errorHandling';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    problem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await retryOperation(async () => {
        const { error: supabaseError } = await supabase
          .from('leads')
          .insert([
            {
              full_name: formData.full_name,
              email: formData.email,
              phone: formData.phone,
              problem: formData.problem,
            },
          ]);

        if (supabaseError) throw supabaseError;
      }, 3, 1000);

      setSuccess(true);
      setTimeout(() => {
        setFormData({ full_name: '', email: '', phone: '', problem: '' });
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      const parsedError = parseSupabaseError(err as Error);
      console.error('Lead submission error:', parsedError);

      // Set user-friendly error message
      setError(parsedError.userMessage);

      // Additional context for network errors
      if (parsedError.type === ErrorType.NETWORK) {
        setError(`${parsedError.userMessage} We'll automatically retry if you submit again.`);
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-md bg-gradient-to-br from-n8n-navy to-n8n-navy-dark rounded-2xl shadow-2xl border border-n8n-orange/20 animate-fadeIn">
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute top-0 left-0 w-40 h-40 bg-n8n-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-n8n-purple/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-n8n-orange to-n8n-orange-light bg-clip-text text-transparent">
            Get Started Today
          </h2>
          <p className="text-gray-400 mb-6">
            Tell us about your automation needs and we'll get back to you soon.
          </p>

          {success && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-green-400 font-medium">Thank you! We'll be in touch soon.</p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="full_name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-n8n-orange focus:ring-1 focus:ring-n8n-orange transition-all"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-n8n-orange focus:ring-1 focus:ring-n8n-orange transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-n8n-orange focus:ring-1 focus:ring-n8n-orange transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="problem" className="block text-sm font-medium text-gray-300 mb-2">
                What problem are you looking to solve?
              </label>
              <textarea
                id="problem"
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                placeholder="Describe the automation challenges you're facing..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-n8n-orange to-n8n-orange-light text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-n8n-orange/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <span>Send My Details</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
