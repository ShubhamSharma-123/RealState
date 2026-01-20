// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// import {
//   Calculator,
//   Home,
//   IndianRupee,
//   TrendingUp,
//   ArrowRight,
// } from "lucide-react";

// /* ---------------- TOOLS DATA ---------------- */
// const tools = [
//   {
//     id: 1,
//     title: "EMI Calculator",
//     desc: "Know how much you'll have to pay every month on your loan",
//     icon: Calculator,
//   },
//   {
//     id: 2,
//     title: "Best Home Loan Offers",
//     desc: "Get the best bank offers curated just for your profile",
//     icon: IndianRupee,
//   },
//   {
//     id: 3,
//     title: "Interiors Budget Estimator",
//     desc: "Know the cost of getting your full/partial home interiors done",
//     icon: Home,
//   },
//   {
//     id: 4,
//     title: "Rates & Trends",
//     desc: "Know all about Property Rates & Trends in your city",
//     icon: TrendingUp,
//   },
// ];

// export function AdviceToolsSection() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ================= HEADER ================= */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-semibold text-gray-900 relative inline-block">
//             Advice & Tools
//             <span className="absolute left-0 -bottom-2 w-10 h-1 bg-red-600 rounded-full"></span>
//           </h2>
//         </div>

//         {/* ================= SWIPER ================= */}
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={24}
//         //   navigation
//           breakpoints={{
//             0: { slidesPerView: 1.1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {tools.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <SwiperSlide key={item.id}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.05 }}
//                   whileHover={{ scale: 1.04 }}
//                   className="h-full border rounded-2xl p-8 bg-white hover:shadow-xl transition-shadow cursor-pointer flex flex-col"
//                 >
//                   {/* ICON */}
//                   <div className="mb-6">
//                     <Icon size={40} className="text-gray-900" />
//                   </div>

//                   {/* CONTENT */}
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">
//                     {item.title}
//                   </h3>

//                   <p className="text-gray-600 mb-6 leading-relaxed">
//                     {item.desc}
//                   </p>

//                   {/* CTA */}
//                   <div className="mt-auto">
//                     <span className="inline-flex items-center gap-2 text-red-600 font-semibold">
//                       View now <ArrowRight size={16} />
//                     </span>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  Calculator,
  Home,
  IndianRupee,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

/* ---------------- TOOLS DATA ---------------- */
const tools = [
  {
    id: 1,
    title: "EMI Calculator",
    desc: "Know how much you'll have to pay every month on your loan",
    icon: Calculator,
  },
  {
    id: 2,
    title: "Best Home Loan Offers",
    desc: "Get the best bank offers curated just for your profile",
    icon: IndianRupee,
  },
  {
    id: 3,
    title: "Interiors Budget Estimator",
    desc: "Know the cost of getting your full/partial home interiors done",
    icon: Home,
  },
  {
    id: 4,
    title: "Rates & Trends",
    desc: "Know all about Property Rates & Trends in your city",
    icon: TrendingUp,
  },
];

export function AdviceToolsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 relative inline-block">
            Advice & Tools
            <span className="absolute left-0 -bottom-2 w-10 h-1 bg-red-600 rounded-full"></span>
          </h2>
        </div>

        {/* ================= SWIPER ================= */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {tools.map((item, index) => {
            const Icon = item.icon;
            return (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.04 }}
                  className="h-full border rounded-2xl p-8 bg-white hover:shadow-xl transition-shadow cursor-pointer flex flex-col"
                >
                  {/* ICON */}
                  <div className="mb-6">
                    <Icon size={40} className="text-gray-900" />
                  </div>

                  {/* CONTENT */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-red-600 font-semibold">
                      View now <ArrowRight size={16} />
                    </span>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
