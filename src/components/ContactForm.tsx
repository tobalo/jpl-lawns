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
      const fd = new FormData(form);
      const body = new URLSearchParams();

      fd.forEach((value, key) => {
        if (typeof value === 'string') {
          body.append(key, value);
        }
      });

      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (field: keyof FormErrors) =>
    `block w-full rounded-xl border ${
      errors[field] ? 'border-red-400' : 'border-cream-300'
    } bg-cream-50 px-4 py-3.5 font-body text-bark-700 placeholder:text-bark-200 focus:outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-600/10 transition-all duration-200`;

  return (
    <form
      name="contact"
      method="POST"
      action="/__forms.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-body text-sm font-medium text-bark-500 mb-1.5">
          Name <span className="text-terra-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses('name')}
          placeholder="Your full name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-sm font-body text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block font-body text-sm font-medium text-bark-500 mb-1.5">
            Email <span className="text-terra-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses('email')}
            placeholder="Your email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm font-body text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block font-body text-sm font-medium text-bark-500 mb-1.5">
            Phone <span className="text-terra-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses('phone')}
            placeholder="(555) 123-4567"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm font-body text-red-500">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-body text-sm font-medium text-bark-500 mb-1.5">
          Project Details <span className="text-terra-400">*</span>
        </label>
        <p id="message-hint" className="font-body text-xs text-bark-400 mb-2">
          Include details like area size, current condition, desired features, and timeline.
        </p>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={inputClasses('message')}
          placeholder="Tell us about your landscape project..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-hint message-error' : 'message-hint'}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm font-body text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-body font-medium text-base transition-all duration-300 ${
          status === 'submitting'
            ? 'bg-bark-200 text-bark-400 cursor-not-allowed'
            : 'bg-terra-400 hover:bg-terra-500 active:bg-terra-600 text-white hover:shadow-lg hover:shadow-terra-300/25 active:scale-[0.98]'
        }`}
      >
        {status === 'submitting' ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Status messages — live regions so assistive tech announces them */}
      {status === 'success' && (
        <div
          role="status"
          aria-live="polite"
          className="p-4 bg-sage-50 border border-sage-200 text-forest-700 rounded-xl font-body text-sm"
        >
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl font-body text-sm"
        >
          There was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
}
