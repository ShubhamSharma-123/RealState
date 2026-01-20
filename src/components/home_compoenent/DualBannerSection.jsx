import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function DualBannerSection() {
  return (
    <section className="py-20 bg-[#F6F6F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ================= LEFT BANNER ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-red-500 text-white"
          >
            <div className="p-10 relative z-10">
              <p className="uppercase text-sm tracking-wide mb-2">
                Apna Awas
              </p>
              <h3 className="text-3xl font-bold mb-4 leading-snug">
                Buy Your Dream Home <br /> With Confidence
              </h3>
              <p className="text-white/90 mb-6 max-w-sm">
                Discover verified properties, best prices, and trusted guidance
                to make your home buying journey simple and secure.
              </p>

              <button className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Explore Properties <ArrowRight size={18} />
              </button>
            </div>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Apna Awas Home"
              className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-20 md:opacity-30"
            />
          </motion.div>

          {/* ================= RIGHT BANNER ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-white border shadow-sm"
          >
            <div className="p-10 relative z-10">
              <p className="uppercase text-sm tracking-wide text-red-600 mb-2">
                Apna Awas
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
                Rent or Invest <br /> Smartly in India
              </h3>
              <p className="text-gray-600 mb-6 max-w-sm">
                From affordable rentals to premium investments, find properties
                that match your lifestyle and budget.
              </p>

              <button className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                View Listings <ArrowRight size={18} />
              </button>
            </div>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
              alt="Apna Awas Property"
              className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-10 md:opacity-20"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
