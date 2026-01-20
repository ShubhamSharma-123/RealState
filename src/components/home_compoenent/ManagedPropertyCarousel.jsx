// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// import {
//   MapPin,
//   BedDouble,
//   Bath,
//   Ruler,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   ShieldCheck,
//   ShieldX,
// } from "lucide-react";

// /* ---------------- MOCK DATA (ADMIN / AGENT / MANAGER) ---------------- */
// const managedProperties = [
//   {
//     id: 1,
//     title: "3 BHK Premium Apartment",
//     type: "Apartment",
//     purpose: "For Sale",
//     address: "Vaishali Nagar, Jaipur",
//     bedrooms: 3,
//     bathrooms: 2,
//     size: 1500,
//     price: "₹85 Lakh",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//     approved: true,
//     listedBy: "Admin",
//   },
//   {
//     id: 2,
//     title: "4 BHK Luxury Villa",
//     type: "Villa",
//     purpose: "For Sale",
//     address: "Malviya Nagar, Jaipur",
//     bedrooms: 4,
//     bathrooms: 4,
//     size: 2800,
//     price: "₹1.95 Cr",
//     image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
//     approved: false,
//     listedBy: "Agent",
//   },
//   {
//     id: 3,
//     title: "2 BHK Rental Flat",
//     type: "Apartment",
//     purpose: "For Rent",
//     address: "Jagatpura, Jaipur",
//     bedrooms: 2,
//     bathrooms: 2,
//     size: 1000,
//     price: "₹20,000 / month",
//     image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
//     approved: true,
//     listedBy: "Manager",
//   },
//   {
//     id: 4,
//     title: "3 BHK Modern House",
//     type: "House",
//     purpose: "For Sale",
//     address: "Mansarovar, Jaipur",
//     bedrooms: 3,
//     bathrooms: 3,
//     size: 1850,
//     price: "₹1.05 Cr",
//     image: "https://images.unsplash.com/photo-1605146768851-eda79da39897",
//     approved: false,
//     listedBy: "Admin",
//   },
// ];

// export function ManagedPropertyCarousel() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center mb-14">
//           <p className="text-sm text-red-600 font-semibold uppercase mb-2">
//             Managed Listings
//           </p>
//           <h2 className="text-4xl font-bold text-gray-900 max-w-3xl mx-auto">
//             Latest Properties Listed by Admin & Agents
//           </h2>
//         </div>

//         <div className="relative">
//           {/* NAVIGATION */}
//           <button className="managed-prev hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white p-3 rounded-xl">
//             <ChevronLeft />
//           </button>
//           <button className="managed-next hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white border p-3 rounded-xl">
//             <ChevronRight />
//           </button>

//           <Swiper
//             modules={[Navigation, Autoplay]}
//             navigation={{
//               prevEl: ".managed-prev",
//               nextEl: ".managed-next",
//             }}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: false,
//             }}
//             spaceBetween={24}
//             loop
//             breakpoints={{
//               0: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             {managedProperties.map((item, index) => (
//               <SwiperSlide key={item.id}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.05 }}
//                   className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
//                 >
//                   {/* IMAGE */}
//                   <div className="relative">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="h-56 w-full object-cover"
//                     />

//                     {/* PURPOSE + TYPE */}
//                     <div className="absolute top-4 left-4 flex gap-2">
//                       <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-md">
//                         {item.purpose}
//                       </span>
//                       <span className="bg-white text-gray-900 text-xs px-3 py-1 rounded-md font-semibold">
//                         {item.type}
//                       </span>
//                     </div>

//                     {/* APPROVAL BADGE */}
//                     <span
//                       className={`absolute top-4 right-4 flex items-center gap-1 text-xs px-3 py-1 rounded-md font-semibold ${
//                         item.approved
//                           ? "bg-green-600 text-white"
//                           : "bg-yellow-500 text-white"
//                       }`}
//                     >
//                       {item.approved ? (
//                         <ShieldCheck size={14} />
//                       ) : (
//                         <ShieldX size={14} />
//                       )}
//                       {item.approved ? "Approved" : "Not Approved"}
//                     </span>

//                     {/* LISTED BY */}
//                     <span className="absolute bottom-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-md">
//                       Listed by {item.listedBy}
//                     </span>
//                   </div>

//                   {/* CONTENT */}
//                   <div className="p-5">
//                     <h3 className="text-lg font-bold text-gray-900 mb-2">
//                       {item.title}
//                     </h3>

//                     <p className="flex items-center text-sm text-gray-500 mb-4">
//                       <MapPin size={16} className="mr-1" />
//                       {item.address}
//                     </p>

//                     <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
//                       <span className="flex items-center gap-1">
//                         <BedDouble size={16} /> {item.bedrooms} Bed
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Bath size={16} /> {item.bathrooms} Bath
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Ruler size={16} /> {item.size} sq.ft
//                       </span>
//                     </div>

//                     <div className="flex items-center justify-between border-t pt-4">
//                       <p className="text-lg font-bold text-gray-900">
//                         {item.price}
//                       </p>
//                       <button className="flex items-center gap-2 text-red-600 font-semibold hover:underline">
//                         View Details <ArrowRight size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
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
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ShieldX,
} from "lucide-react";

/* ---------------- MOCK DATA (ADMIN / AGENT / MANAGER) ---------------- */
const managedProperties = [
  {
    id: 1,
    title: "3 BHK Premium Apartment",
    type: "Apartment",
    purpose: "For Sale",
    status: "Ready To Move",
    address: "Vaishali Nagar, Jaipur",
    bedrooms: 3,
    bathrooms: 2,
    size: 1500,
    price: "₹85 Lakh",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    approved: true,
    listedBy: "Admin",
  },
  {
    id: 2,
    title: "4 BHK Luxury Villa",
    type: "Villa",
    purpose: "For Sale",
    status: "Under Construction",
    address: "Malviya Nagar, Jaipur",
    bedrooms: 4,
    bathrooms: 4,
    size: 2800,
    price: "₹1.95 Cr",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    approved: false,
    listedBy: "Agent",
  },
  {
    id: 3,
    title: "2 BHK Rental Flat",
    type: "Apartment",
    purpose: "For Rent",
    status: "Ready To Move",
    address: "Jagatpura, Jaipur",
    bedrooms: 2,
    bathrooms: 2,
    size: 1000,
    price: "₹20,000 / month",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    approved: true,
    listedBy: "Manager",
  },
  {
    id: 4,
    title: "3 BHK Modern House",
    type: "House",
    purpose: "For Sale",
    status: "Ready To Move",
    address: "Mansarovar, Jaipur",
    bedrooms: 3,
    bathrooms: 3,
    size: 1850,
    price: "₹1.05 Cr",
    image: "https://images.unsplash.com/photo-1605146768851-eda79da39897",
    approved: false,
    listedBy: "Admin",
  },
];

export function ManagedPropertyCarousel() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-sm text-red-600 font-semibold uppercase mb-2">
            Managed Listings
          </p>
          <h2 className="text-4xl font-bold text-gray-900 max-w-3xl mx-auto">
            Latest Properties Listed by Admin & Agents
          </h2>
        </div>

        <div className="relative">
          {/* NAVIGATION */}
          <button className="managed-prev hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white p-3 rounded-xl">
            <ChevronLeft />
          </button>
          <button className="managed-next hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white border p-3 rounded-xl">
            <ChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".managed-prev",
              nextEl: ".managed-next",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {managedProperties.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* IMAGE */}
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-56 w-full object-cover"
                    />

                    {/* PURPOSE + TYPE */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-md">
                        {item.purpose}
                      </span>
                      <span className="bg-white text-gray-900 text-xs px-3 py-1 rounded-md font-semibold">
                        {item.type}
                      </span>
                    </div>

                    {/* APPROVAL BADGE */}
                    <span
                      className={`absolute top-4 right-4 flex items-center gap-1 text-xs px-3 py-1 rounded-md font-semibold ${
                        item.approved
                          ? "bg-green-600 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {item.approved ? (
                        <ShieldCheck size={14} />
                      ) : (
                        <ShieldX size={14} />
                      )}
                      {item.approved ? "Approved" : "Not Approved"}
                    </span>

                    {/* READY / UNDER CONSTRUCTION */}
                    <span className="absolute bottom-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-md">
                      {item.status}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin size={16} className="mr-1" />
                      {item.address}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <BedDouble size={16} /> {item.bedrooms} Bed
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath size={16} /> {item.bathrooms} Bath
                      </span>
                      <span className="flex items-center gap-1">
                        <Ruler size={16} /> {item.size} sq.ft
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t pt-4">
                      <p className="text-lg font-bold text-gray-900">
                        {item.price}
                      </p>
                      <button className="flex items-center gap-2 text-red-600 font-semibold hover:underline">
                        View Details <ArrowRight size={16} />
                      </button>
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
