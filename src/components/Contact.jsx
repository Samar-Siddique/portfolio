import { Mail, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

// Contact Section Component
export const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('0yO8IiAwpMw0rR6t8');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear any previous errors when user types
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Samar',
        reply_to: formData.email,
      };

      await emailjs.send(
        'service_w9uf1wd',
        'template_59xyjs8',
        templateParams
      );
      
      setIsEmailSent(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsEmailSent(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send email. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">samar.sadeeq7550@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Phone className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+92-3029160095</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <MapPin className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Address</h4>
                  <p className="text-gray-600 dark:text-gray-300">Sunflower Society J1 Block<br/>Johar Town, Lahore</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fadeInRight">
            <form onSubmit={handleSendEmail} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              {error && (
                <div className="mb-4 text-center text-red-600 dark:text-red-400 font-medium animate-fadeIn">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isLoading || isEmailSent}
              >
                {isLoading ? 'Sending...' : isEmailSent ? 'Message Sent!' : 'Send Message'}
              </button>
              
              {isEmailSent && (
                <div className="mt-4 text-center text-green-600 dark:text-green-400 font-medium animate-fadeIn">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
