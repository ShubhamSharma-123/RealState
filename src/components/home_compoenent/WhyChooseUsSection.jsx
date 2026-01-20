import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Home,
  Key,
  BadgeDollarSign,
} from "lucide-react";

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-red-600 font-semibold uppercase tracking-widest mb-3">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Discover What Sets Our <br />
              Real Estate Expertise Apart
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
              At <strong>Apna Awas</strong>, our unwavering commitment lies in
              crafting seamless real estate journeys. With deep market
              knowledge and a client-first approach, we guide you through
              every step of your property journey.
            </p>

            {/* CHECK LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Transparent Partnerships",
                "Proven Expertise",
                "Customized Solutions",
                "Local Area Knowledge",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 text-red-600 font-semibold border-b-2 border-red-600 pb-1 hover:gap-3 transition-all">
              Contact Us <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* ================= RIGHT CARDS ================= */}
          <div className="space-y-8">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <Home size={42} className="text-gray-900" />
                <div>
                  <h3 className="text-2xl  text-gray-900 mb-2">
                    Buy A New Home
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Explore diverse properties and expert guidance for a
                    seamless buying experience.
                  </p>
                  <span className="inline-flex items-center gap-2 text-red-600 font-semibold">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <Key size={42} className="text-gray-900" />
                <div>
                  <h3 className="text-2xl  text-gray-900 mb-2">
                    Rent A Home
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover rental listings tailored precisely to match your
                    lifestyle and needs.
                  </p>
                  <span className="inline-flex items-center gap-2 text-red-600 font-semibold">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <BadgeDollarSign size={42} className="text-gray-900" />
                <div>
                  <h3 className="text-2xl  text-gray-900 mb-2">
                    Sell A Home
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Showcase your property’s best features to achieve the
                    best possible value.
                  </p>
                  <span className="inline-flex items-center gap-2 text-red-600 font-semibold">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
