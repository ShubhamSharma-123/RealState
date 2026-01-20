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
} from "lucide-react";

/* ---------------- MOCK DATA (API ready) ---------------- */
const properties = [
  {
    id: 1,
    title: "3 BHK Luxury Apartment",
    type: "Apartment",
    purpose: "For Sale",
    status: "Ready To Move",
    address: "Mansarovar, Jaipur",
    bedrooms: 3,
    bathrooms: 2,
    size: 1450,
    price: "₹72 Lakh",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "4 BHK Independent Villa",
    type: "Villa",
    purpose: "For Sale",
    status: "Under Construction",
    address: "Vaishali Nagar, Jaipur",
    bedrooms: 4,
    bathrooms: 3,
    size: 2400,
    price: "₹1.45 Cr",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    id: 3,
    title: "2 BHK Affordable Flat",
    type: "Apartment",
    purpose: "For Rent",
    status: "Ready To Move",
    address: "Jagatpura, Jaipur",
    bedrooms: 2,
    bathrooms: 2,
    size: 980,
    price: "₹18,000 /month",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
  {
    id: 4,
    title: "3 BHK Modern House",
    type: "House",
    purpose: "For Sale",
    status: "Ready To Move",
    address: "Malviya Nagar, Jaipur",
    bedrooms: 3,
    bathrooms: 3,
    size: 1800,
    price: "₹98 Lakh",
    image:
      "https://images.unsplash.com/photo-1605146768851-eda79da39897",
  },
];

export function PropertyListingCarousel() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------------- HEADER ---------------- */}
        <div className="text-center mb-14">
          <p className="text-sm text-red-600 font-semibold uppercase mb-2">
            Featured Properties
          </p>
          <h2 className="text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-snug">
            {/* Discover Premium Properties For Your Dream Home */}
            Explore Owner-Listed Properties for Your Dream Home
          </h2>
        </div>

        {/* ---------------- CAROUSEL ---------------- */}
        <div className="relative">
          {/* Navigation */}
          <button className="prop-prev hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white p-3 rounded-xl">
            <ChevronLeft />
          </button>
          <button className="prop-next hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white border p-3 rounded-xl">
            <ChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".prop-prev",
              nextEl: ".prop-next",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {properties.map((item, index) => (
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

                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-md">
                        {item.purpose}
                      </span>
                      <span className="bg-white text-gray-900 text-xs px-3 py-1 rounded-md font-semibold">
                        {item.type}
                      </span>
                    </div>

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

                    {/* INFO */}
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

                    {/* PRICE & BUTTON */}
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
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/properties')}
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold text-lg"
            >
              View All Properties
            </motion.button>
          </motion.div>
      </div>
    </section>
  );
}
