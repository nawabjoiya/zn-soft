import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import AnimateIn from '../components/animation/AnimateIn';

// 🔥 static contact info (NO backend)
const CONTACT_INFO = {
  address: 'Karachi, Pakistan',
  phone: '+92 300 1234567',
  email: 'info@example.com',
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔥 frontend-only fake submit (no API)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Message sent successfully (frontend demo)!',
      });

      setForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setLoading(false);
    }, 800);
  };

  return (
    <>
      <PageHero title="Contact" />

      <section className="py-20">
        <div className="container-site grid gap-12 lg:grid-cols-2">

          {/* CONTACT INFO */}
          <AnimateIn variant="fadeInLeft">
            <h2 className="text-2xl font-bold text-dark">
              Get in touch
            </h2>

            <ul className="mt-8 space-y-4 text-gray-600">
              <li>
                <strong>Address:</strong> {CONTACT_INFO.address}
              </li>
              <li>
                <strong>Phone:</strong> {CONTACT_INFO.phone}
              </li>
              <li>
                <strong>Email:</strong> {CONTACT_INFO.email}
              </li>
            </ul>
          </AnimateIn>

          {/* FORM */}
          <AnimateIn variant="fadeInRight" delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-8"
            >

              {/* INPUTS */}
              {['name', 'email', 'phone'].map((field) => (
                <motion.input
                  key={field}
                  required={field !== 'phone'}
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={
                    field === 'name'
                      ? 'Your Name'
                      : field === 'email'
                      ? 'Email Address'
                      : 'Phone'
                  }
                  className="w-full rounded border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand transition-colors"
                  value={form[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                  whileFocus={{ scale: 1.01 }}
                />
              ))}

              {/* SUBJECT */}
              <select
                className="w-full rounded border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
              >
                <option value="">Select Subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Quote Request">Quote Request</option>
                <option value="Support">Support</option>
              </select>

              {/* MESSAGE */}
              <textarea
                required
                rows={5}
                placeholder="Message"
                className="w-full rounded border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              {/* STATUS */}
              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm ${
                    status.type === 'success'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {status.message}
                </motion.p>
              )}

              {/* BUTTON */}
              <motion.button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'Sending...' : 'Submit Now'}
              </motion.button>
            </motion.form>
          </AnimateIn>

        </div>
      </section>
    </>
  );
}