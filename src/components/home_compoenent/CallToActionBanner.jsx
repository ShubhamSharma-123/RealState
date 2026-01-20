// import { motion } from "framer-motion";
// import { ArrowRight, PhoneCall } from "lucide-react";

// export function CallToActionBanner() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-red-500"
//         >
//           {/* Overlay Pattern */}
//           <div className="absolute inset-0 bg-black/10" />

//           {/* Content */}
//           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-10 md:p-16 text-white">
//             {/* LEFT CONTENT */}
//             <div>
//               <p className="uppercase text-sm tracking-wider mb-3 text-white/90">
//                 Apna Awas
//               </p>
//               <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//                 Ready to Find Your <br /> Dream Home?
//               </h2>
//               <p className="text-white/90 max-w-xl mb-8">
//                 Explore verified properties across India with trusted support,
//                 transparent pricing, and expert guidance at every step.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-7 py-4 rounded-lg font-semibold hover:bg-gray-100 transition whitespace-nowrap">
//                   Explore Properties <ArrowRight size={18} />
//                 </button>

//                 <button className="inline-flex items-center justify-center gap-2 border border-white text-white px-7 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition whitespace-nowrap">
//                   Talk to Expert <PhoneCall size={18} />
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT IMAGE */}
//             <div className="relative hidden lg:block">
//               <motion.img
//                 initial={{ opacity: 0, x: 40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//                 alt="Apna Awas CTA"
//                 className="w-full max-w-md ml-auto rounded-2xl shadow-2xl object-cover"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export function CallToActionBanner() {
  return (
    <section className="py-20 bg-[#F6F6F7]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
            }}
          />

          {/* DARK + GRADIENT OVERLAY */}
          <div className="absolute  inset-0 bg-gradient-to-r from-red-700/80 to-red-500/70" />

          {/* CONTENT */}
          <div className="relative z-10 p-10 md:p-16 text-white flex flex-col justify-center items-center">
            <p className="uppercase text-sm tracking-wider mb-3 text-white/90">
              Apna Awas
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Ready to Find Your Dream Home?
            </h2>

            <p className="text-white/90 max-w-xl mb-8">
              Explore verified properties across India with trusted support,
              transparent pricing, and expert guidance at every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-7 py-4 rounded-lg font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                Explore Properties <ArrowRight size={18} />
              </button>

              <button className="inline-flex items-center justify-center gap-2 border border-white text-white px-7 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition whitespace-nowrap">
                Talk to Expert <PhoneCall size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
