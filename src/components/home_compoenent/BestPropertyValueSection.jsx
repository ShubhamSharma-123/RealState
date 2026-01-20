import { motion } from "framer-motion";
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Heart,
  Eye,
  Shuffle,
} from "lucide-react";

/* ---------------- MOCK DATA (API READY – INDIA) ---------------- */
const properties = [
  {
    id: 1,
    title: "3 BHK Premium Apartment",
    address: "Mansarovar, Jaipur",
    type: "Apartment",
    purpose: "For Sale",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    bedrooms: 3,
    bathrooms: 2,
    size: 1450,
    agent: "Amit Sharma",
    price: "₹72 Lakh",
    priceUnit: "/Sq.ft",
  },
  {
    id: 2,
    title: "4 BHK Luxury Villa",
    address: "Vaishali Nagar, Jaipur",
    type: "Villa",
    purpose: "For Rent",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    bedrooms: 4,
    bathrooms: 3,
    size: 2400,
    agent: "Neha Verma",
    price: "₹45,000",
    priceUnit: "/month",
  },
  {
    id: 3,
    title: "3 BHK Independent House",
    address: "Malviya Nagar, Jaipur",
    type: "House",
    purpose: "For Sale",
    image:
      "https://images.unsplash.com/photo-1605146768851-eda79da39897",
    bedrooms: 3,
    bathrooms: 3,
    size: 1800,
    agent: "Rahul Meena",
    price: "₹95 Lakh",
    priceUnit: "/Sq.ft",
  },
  {
    id: 4,
    title: "Office Space",
    address: "C-Scheme, Jaipur",
    type: "Office",
    purpose: "For Rent",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
    bedrooms: 2,
    bathrooms: 2,
    size: 1200,
    agent: "Pooja Singh",
    price: "₹35,000",
    priceUnit: "/month",
  },
];

export function BestPropertyValueSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm text-red-600 font-semibold uppercase mb-2">
              Top Properties
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Best Property Value
            </h2>
          </div>

          <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition w-fit">
            View All
          </button>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {properties.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* IMAGE */}
              <div className="relative md:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 md:h-full object-cover"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-md">
                    {item.purpose}
                  </span>
                </div>

                <span className="absolute bottom-4 left-4 bg-white text-gray-900 text-xs px-3 py-1 rounded-md font-semibold">
                  {item.type}
                </span>

                {/* Icons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {[Shuffle, Heart, Eye].map((Icon, i) => (
                    <div
                      key={i}
                      className="bg-white/80 p-2 rounded-md cursor-pointer hover:bg-white"
                    >
                      <Icon size={16} />
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin size={16} className="mr-1" />
                    {item.address}
                  </p>

                  {/* INFO */}
                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <BedDouble size={16} /> {item.bedrooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={16} /> {item.bathrooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Ruler size={16} /> {item.size} Sq.ft
                    </span>
                  </div>
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <p className="text-sm text-gray-500">Agent</p>
                    <p className="font-semibold text-gray-900">
                      {item.agent}
                    </p>
                  </div>

                  <p className="text-lg font-bold text-gray-900">
                    {item.price}
                    <span className="text-sm font-normal text-gray-500">
                      {item.priceUnit}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
