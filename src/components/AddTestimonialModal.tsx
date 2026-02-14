import { X, Loader, Star } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { parseSupabaseError, retryOperation, ErrorType } from '../utils/errorHandling';

interface AddTestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddTestimonialModal({ isOpen, onClose }: AddTestimonialModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    content: '',
    image_url: '',
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
          .from('testimonials')
          .insert([
            {
              name: formData.name,
              role: formData.role,
              company: formData.company,
              content: formData.content,
              rating: rating,
              image_url: formData.image_url || null,
            },
          ]);

        if (supabaseError) throw supabaseError;
      }, 3, 1000);

      setSuccess(true);
      setTimeout(() => {
        setFormData({ name: '', role: '', company: '', content: '', image_url: '' });
        setRating(5);
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      const parsedError = parseSupabaseError(err as Error);
      console.error('Testimonial submission error:', parsedError);

      setError(parsedError.userMessage);

      if (parsedError.type === ErrorType.NETWORK) {
        setError(`${parsedError.userMessage} Your testimonial will be saved once connection is restored.`);
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

      <div className="relative w-full max-w-2xl bg-gradient-to-br from-n8n-navy-dark to-n8n-navy rounded-2xl shadow-2xl border border-n8n-orange/10 animate-fadeIn max-h-[90vh] overflow-y-auto">
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute top-0 left-0 w-40 h-40 bg-n8n-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-n8n-purple/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-n8n-orange-light to-n8n-orange bg-clip-text text-transparent">
            Share Your Experience
          </h2>
          <p className="text-gray-400 mb-6">
            Your testimonial will be reviewed and published on our site
          </p>

          {success && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-green-400 font-medium">Thank you! Your testimonial has been submitted for review.</p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-n8n-gray-dark/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-n8n-orange/50 focus:ring-1 focus:ring-n8n-orange/30 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-n8n-gray-dark/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-n8n-orange/50 focus:ring-1 focus:ring-n8n-orange/30 transition-all"
                  placeholder="CEO"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-n8n-gray-dark/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-n8n-orange/50 focus:ring-1 focus:ring-n8n-orange/30 transition-all"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="image_url" className="block text-sm font-medium text-gray-300 mb-2">
                Profile Image URL (Optional)
              </label>
              <input
                type="url"
                id="image_url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-n8n-gray-dark/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-n8n-orange/50 focus:ring-1 focus:ring-n8n-orange/30 transition-all"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Rating
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
                Your Testimonial
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-n8n-gray-dark/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-n8n-orange/50 focus:ring-1 focus:ring-n8n-orange/30 transition-all resize-none"
                placeholder="Tell us about your experience with NexaFlow AI..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-n8n-orange to-n8n-orange-light text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-n8n-orange/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Testimonial</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
