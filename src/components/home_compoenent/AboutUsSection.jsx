import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function AboutUsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="About Apna Awas"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-6 py-4 hidden sm:block">
              <p className="text-3xl font-bold text-red-600">10+</p>
              <p className="text-sm text-gray-600 font-medium">
                Years Experience
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm text-red-600 font-semibold uppercase mb-3 tracking-wider">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Your Trusted Partner <br />
              in Finding the <span className="text-red-600">Perfect Home</span>
            </h2>

            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              <strong>Apna Awas</strong> is a trusted real estate platform
              dedicated to helping families and investors find the right
              property across India. We focus on transparency, verified
              listings, and expert guidance at every step.
            </p>

            <p className="text-gray-600 mb-8 max-w-xl">
              Whether you are buying your first home, renting a comfortable
              space, or investing in property, our mission is to make your
              journey smooth, safe, and rewarding.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Verified & Trusted Properties",
                "Expert Local Guidance",
                "Transparent Pricing",
                "Customer First Approach",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-red-600 mt-1" size={20} />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg">
              Learn More About Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
