// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// import { Star } from "lucide-react";

// /* ---------------- TESTIMONIAL DATA ---------------- */
// const testimonials = [
//   {
//     id: 1,
//     name: "Liam Anderson",
//     role: "CEO Digital",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     message:
//       "I truly appreciate the professionalism and in-depth knowledge of the brokerage team. They not only helped me find the perfect home but also assisted with legal and financial aspects, making me feel confident and secure in my decision.",
//   },
//   {
//     id: 2,
//     name: "Adam Will",
//     role: "CEO Agency",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     message:
//       "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.",
//   },
//   {
//     id: 3,
//     name: "Adam Will",
//     role: "CEO Agency",
//     image: "https://randomuser.me/api/portraits/women/65.jpg",
//     message:
//       "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.",
//   },
// ];

// export function TestimonialsSection() {
//   return (
//     <section className="relative bg-gradient-to-b from-[#0f172a] to-[#111827] pt-28 pb-40 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ================= HEADER ================= */}
//         <div className="text-center mb-16">
//           <p className="text-sm text-red-500 uppercase tracking-widest mb-3">
//             Our Testimonials
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             What’s People Say’s
//           </h2>
//         </div>

//         {/* ================= CAROUSEL ================= */}
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//             bulletClass:
//               "swiper-pagination-bullet !bg-gray-400 !opacity-100",
//             bulletActiveClass:
//               "!bg-red-600 !w-3 !h-3",
//           }}
//           spaceBetween={32}
//           centeredSlides
//           loop
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {testimonials.map((item, index) => (
//             <SwiperSlide key={item.id}>
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-white rounded-3xl p-8 shadow-xl h-full flex flex-col justify-between"
//               >
//                 {/* STARS */}
//                 <div className="flex gap-1 mb-5">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={18}
//                       className="fill-yellow-400 text-yellow-400"
//                     />
//                   ))}
//                 </div>

//                 {/* MESSAGE */}
//                 <p className="text-gray-700 leading-relaxed mb-8">
//                   “{item.message}”
//                 </p>

//                 {/* USER */}
//                 <div className="flex items-center gap-4 mt-auto">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div>
//                     <p className="font-bold text-gray-900">
//                       {item.name}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       {item.role}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* ================= WHITE BOTTOM SPACE ================= */}
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-white rounded-t-[3rem]" />
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Star } from "lucide-react";

/* ---------------- TESTIMONIAL DATA ---------------- */
const testimonials = [
  {
    id: 1,
    name: "Liam Anderson",
    role: "CEO Digital",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "I truly appreciate the professionalism and in-depth knowledge of the brokerage team. They not only helped me find the perfect home but also assisted with legal and financial aspects, making me feel confident and secure in my decision.",
  },
  {
    id: 2,
    name: "Adam Will",
    role: "CEO Agency",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.",
  },
  {
    id: 3,
    name: "Adam Will",
    role: "CEO Agency",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden ">
      {/* ================= BLUE TOP BACKGROUND ================= */}
      <div className="absolute top-0 left-0 right-0 h-3/4 bg-gradient-to-b from-[#0f172a] to-[#111827]" />

      {/* ================= WHITE BOTTOM BACKGROUND ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-[31%] bg-white" />

      <div className="relative z-10 pt-28  ">
        <div className="max-w-7xl mx-auto px-6 ">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-16">
            <p className="text-sm text-red-500 uppercase tracking-widest mb-3">
              Our Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What’s People Say’s
            </h2>
          </div>

          {/* ================= CAROUSEL ================= */}
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={900}
            loop
            
            centeredSlides
            // pagination={{
            //   clickable: true,
            //   bulletClass:
            //     "swiper-pagination-bullet !bg-gray-400 !opacity-100",
            //   bulletActiveClass:
            //     "!bg-red-600 !w-3 !h-3",
            // }}
            spaceBetween={32}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 mb-4 shadow-lg h-full flex flex-col justify-between"
                >
                  {/* STARS */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* MESSAGE */}
                  <p className="text-gray-700 leading-relaxed mb-8">
                    “{item.message}”
                  </p>

                  {/* USER */}
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}
