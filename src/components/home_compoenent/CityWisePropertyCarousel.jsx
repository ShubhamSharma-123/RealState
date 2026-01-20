import { useState, useMemo } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ---------------- MOCK DATA (API READY) ---------------- */
const PROPERTY_DATA = [
  {
    id: 1,
    city: "Jaipur",
    purpose: "buy",
    title: "3 BHK Luxury Apartment",
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
    city: "Jaipur",
    purpose: "rent",
    title: "2 BHK Furnished Flat",
    address: "Jagatpura, Jaipur",
    bedrooms: 2,
    bathrooms: 2,
    size: 980,
    price: "₹18,000 /month",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
  {
    id: 3,
    city: "Delhi",
    purpose: "buy",
    title: "4 BHK Independent House",
    address: "Dwarka, Delhi",
    bedrooms: 4,
    bathrooms: 3,
    size: 2200,
    price: "₹1.85 Cr",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    id: 4,
    city: "Delhi",
    purpose: "rent",
    title: "3 BHK Builder Floor",
    address: "Rohini, Delhi",
    bedrooms: 3,
    bathrooms: 2,
    size: 1600,
    price: "₹32,000 /month",
    image:
      "https://images.unsplash.com/photo-1605146768851-eda79da39897",
  },
];

/* ---------------- COMPONENT ---------------- */
export function CityWisePropertyCarousel({ city = "Jaipur" }) {
  const [activePurpose, setActivePurpose] = useState("buy");

  const filteredProperties = useMemo(() => {
    return PROPERTY_DATA.filter(
      (item) =>
        item.city.toLowerCase() === city.toLowerCase() &&
        item.purpose === activePurpose
    );
  }, [city, activePurpose]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------------- HEADER ---------------- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm text-red-600 font-semibold uppercase mb-2">
              Trending Properties
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Trending in {city}
            </h2>
          </div>

          {/* BUY / RENT CHIPS */}
          <div className="flex gap-3">
            {["buy", "rent"].map((type) => (
              <button
                key={type}
                onClick={() => setActivePurpose(type)}
                className={`px-6 py-2 rounded-full text-sm font-semibold border transition
                  ${
                    activePurpose === type
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-red-600"
                  }`}
              >
                For {type === "buy" ? "Buy" : "Rent"}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- CAROUSEL ---------------- */}
        {filteredProperties.length > 0 ? (
          <div className="relative">
            {/* Navigation */}
            <button className="city-prev hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white p-3 rounded-xl">
              <ChevronLeft />
            </button>
            <button className="city-next hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white border p-3 rounded-xl">
              <ChevronRight />
            </button>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".city-prev",
                nextEl: ".city-next",
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
              {filteredProperties.map((item, index) => (
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
                      <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-md">
                        For {item.purpose === "buy" ? "Sale" : "Rent"}
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

                      <p className="text-lg font-bold text-gray-900">
                        {item.price}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            No properties available for this selection.
          </p>
        )}
      </div>
    </section>
  );
}
