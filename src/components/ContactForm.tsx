import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form 
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6 max-w-lg mx-auto"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md shadow-sm ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:border-green-500 focus:ring focus:ring-green-200`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md shadow-sm ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:border-green-500 focus:ring focus:ring-green-200`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md shadow-sm ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          } focus:border-green-500 focus:ring focus:ring-green-200`}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Project Details *
        </label>
        <p className="text-sm text-gray-500 mb-2">
          Please provide as much detail about your landscape project as possible for streamlined quoting/estimation. Feel free to include photo links if needed.
        </p>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md shadow-sm ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } focus:border-green-500 focus:ring focus:ring-green-200`}
          placeholder="Describe your project, including details like: size of area, current condition, desired features, timeline, and any specific requirements."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full flex items-center justify-center py-3 px-4 rounded-md text-white font-medium ${
          status === 'submitting'
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700'
        } transition-colors duration-200`}
      >
        {status === 'submitting' ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="p-4 bg-green-100 text-green-700 rounded-md">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          There was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
}