import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            About <span className="text-red-600">Apna Awas</span>
          </motion.h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted real estate partner helping you find the perfect home
            with transparency, expertise, and local market knowledge.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Apna Awas"
            className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
          />

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-5 leading-relaxed">
              <strong>Apna Awas</strong> is a modern real estate platform focused
              on helping buyers, sellers, and renters make informed property
              decisions across India. We believe buying or renting a home should
              be simple, transparent, and stress-free.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              With years of experience in the real estate market, our team
              understands local areas, pricing trends, and legal processes —
              ensuring you always get the best guidance.
            </p>

            {/* POINTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Verified Properties Only",
                "Transparent Pricing",
                "Local Area Experts",
                "Customer First Approach",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is to simplify real estate for everyone by providing
            trusted listings, expert advice, and seamless digital experiences.
            We aim to become India’s most reliable real estate destination.
          </p>
        </div>
      </section>

    </div>
  );
}
