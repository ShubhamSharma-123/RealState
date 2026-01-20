import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gray-50 py-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Contact <span className="text-red-600">Us</span>
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? Looking for your dream home? We’re here to help you
            every step of the way.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT FORM */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-xl rounded-3xl p-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          {/* RIGHT INFO + MAP */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* INFO */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin className="text-red-600" />
                <p className="text-gray-700">
                  Azad Chowk, Kotputli, Rajasthan 303108
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-red-600" />
                <p className="text-gray-700">+91 9828506666</p>
              </div>
              <div className="flex gap-4">
                <Mail className="text-red-600" />
                <p className="text-gray-700">support@apnaawas.com</p>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.456010796282!2d76.2000549!3d27.703203400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x81d0cfa60f89f16f%3A0x2d76016a1f6eb733!2sApna%20Awas%20Builders%20%26%20Developers!5e0!3m2!1sen!2sin!4v1768887839051!5m2!1sen!2sin" 
              width="600" height="450" 
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
