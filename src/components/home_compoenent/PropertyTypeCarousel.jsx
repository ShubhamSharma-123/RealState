// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// import {
//   Building2,
//   Home,
//   Warehouse,
//   Briefcase,
//   Castle,
//   Store,
//   ChevronLeft,
//   ChevronRight,
//   ArrowRight,
// } from "lucide-react";

// const types = [
//   { title: "Apartment", count: 234, icon: Building2 },
//   { title: "Villa", count: 234, icon: Home },
//   { title: "Studio", count: 234, icon: Warehouse, active: true },
//   { title: "Office", count: 234, icon: Briefcase },
//   { title: "Townhouse", count: 234, icon: Castle },
//   { title: "Commercial", count: 234, icon: Store },
// ];

// export function PropertyTypeCarousel() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ================= HEADER ================= */}
//         <div className="flex items-center justify-between mb-12">
//           <div>
//             <p className="text-sm text-red-600 font-semibold uppercase mb-2">
//               Property Type
//             </p>
//             <h2 className="text-4xl font-bold text-gray-900">
//               Try Searching For
//             </h2>
//           </div>

//           <a
//             href="#"
//             className="hidden md:flex items-center gap-2 text-gray-900 font-semibold border-b-2 border-red-600 pb-1"
//           >
//             View All Services <ArrowRight size={18} />
//           </a>
//         </div>

//         {/* ================= SWIPER ================= */}
//         <div className="relative">
//           {/* Custom Arrows */}
//           <button className="swiper-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white p-3 rounded-xl hidden md:flex">
//             <ChevronLeft />
//           </button>
//           <button className="swiper-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white border p-3 rounded-xl hidden md:flex">
//             <ChevronRight />
//           </button>

//           <Swiper
//             modules={[Navigation]}
//             navigation={{
//               prevEl: ".swiper-prev",
//               nextEl: ".swiper-next",
//             }}
//             spaceBetween={24}
//             slidesPerView={1.2}
//             breakpoints={{
//               640: { slidesPerView: 2.2 },
//               768: { slidesPerView: 3.2 },
//               1024: { slidesPerView: 5 },
//             }}
//           >
//             {types.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <SwiperSlide key={index}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: index * 0.05 }}
//                     className={`rounded-2xl p-8 text-center cursor-pointer transition-all
//                       ${
//                         item.active
//                           ? "bg-red-600 text-white"
//                           : "bg-gray-50 text-gray-900 hover:shadow-lg"
//                       }`}
//                   >
//                     <div
//                       className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl
//                         ${
//                           item.active
//                             ? "bg-white/20"
//                             : "bg-white shadow"
//                         }`}
//                     >
//                       <Icon
//                         size={32}
//                         className={item.active ? "text-white" : "text-gray-900"}
//                       />
//                     </div>

//                     <h3 className="text-xl font-bold mb-2">
//                       {item.title}
//                     </h3>
//                     <p
//                       className={`text-sm ${
//                         item.active ? "text-white/90" : "text-gray-500"
//                       }`}
//                     >
//                       {item.count} Property
//                     </p>
//                   </motion.div>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         </div>

//         {/* Mobile View All */}
//         <div className="mt-8 md:hidden">
//           <a
//             href="#"
//             className="inline-flex items-center gap-2 text-gray-900 font-semibold border-b-2 border-red-600 pb-1"
//           >
//             View All Services <ArrowRight size={18} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  Building2,
  Home,
  Warehouse,
  Briefcase,
  Castle,
  Store,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const PROPERTY_TYPES = [
  { id: 1, title: "Apartment", count: 234, icon: Building2 },
  { id: 2, title: "Villa", count: 234, icon: Home },
  { id: 3, title: "Studio", count: 234, icon: Warehouse },
  { id: 4, title: "Office", count: 234, icon: Briefcase },
  { id: 5, title: "Townhouse", count: 234, icon: Castle },
  { id: 6, title: "Commercial", count: 234, icon: Store },
];

export function PropertyTypeCarousel() {
  const [activeId, setActiveId] = useState(3); // default Studio active

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm text-red-600 font-semibold uppercase mb-2">
              Property Type
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Try Searching For
            </h2>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-gray-900 font-semibold border-b-2 border-red-600 pb-1"
          >
            View All Services <ArrowRight size={18} />
          </a>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div className="relative">
          {/* Custom Navigation */}
          <button className="swiper-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white p-3 rounded-xl hidden md:flex">
            <ChevronLeft />
          </button>
          <button className="swiper-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white border p-3 rounded-xl hidden md:flex">
            <ChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {PROPERTY_TYPES.map((item, index) => {
              const Icon = item.icon;
              const isActive = item.id === activeId;

              return (
                <SwiperSlide key={item.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setActiveId(item.id)}
                    className={`rounded-2xl p-8 text-center cursor-pointer transition-all select-none
                      ${
                        isActive
                          ? "bg-red-600 text-white"
                          : "bg-gray-50 text-gray-900 hover:shadow-lg"
                      }`}
                  >
                    <div
                      className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl
                        ${
                          isActive
                            ? "bg-white/20"
                            : "bg-white shadow"
                        }`}
                    >
                      <Icon
                        size={32}
                        className={isActive ? "text-white" : "text-gray-900"}
                      />
                    </div>

                    <h3 className="text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        isActive ? "text-white/90" : "text-gray-500"
                      }`}
                    >
                      {item.count} Property
                    </p>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Mobile View All */}
        <div className="mt-8 md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-900 font-semibold border-b-2 border-red-600 pb-1"
          >
            View All Services <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
