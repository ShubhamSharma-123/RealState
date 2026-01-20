// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { useProperty } from '../contexts/PropertyContext';
// import { PropertyCard } from '../components/PropertyCard';
// import { Search, SlidersHorizontal } from 'lucide-react';

// export function PropertiesPage() {
//   const { properties } = useProperty();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterType, setFilterType] = useState('');
//   const [filterCity, setFilterCity] = useState('');

//   const filteredProperties = properties.filter(property => {
//     const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          property.city.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesType = !filterType || property.propertyType === filterType;
//     const matchesCity = !filterCity || property.city.toLowerCase().includes(filterCity.toLowerCase());

//     return matchesSearch && matchesType && matchesCity;
//   });

//   const cities = Array.from(new Set(properties.map(p => p.city)));

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8"
//         >
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">
//             Explore Properties
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Find your dream property from our curated collection
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="bg-white rounded-xl shadow-md p-6 mb-8"
//         >
//           <div className="flex items-center space-x-2 mb-4">
//             <SlidersHorizontal className="w-5 h-5 text-red-600" />
//             <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search by title or location..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               />
//             </div>

//             <select
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//             >
//               <option value="">All Property Types</option>
//               <option value="Flat">Flat</option>
//               <option value="Villa">Villa</option>
//               <option value="Plot">Plot</option>
//               <option value="Commercial">Commercial</option>
//             </select>

//             <select
//               value={filterCity}
//               onChange={(e) => setFilterCity(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//             >
//               <option value="">All Cities</option>
//               {cities.map(city => (
//                 <option key={city} value={city}>{city}</option>
//               ))}
//             </select>
//           </div>
//         </motion.div>

//         <div className="mb-6">
//           <p className="text-gray-600">
//             Showing <span className="font-semibold text-gray-900">{filteredProperties.length}</span> properties
//           </p>
//         </div>

//         {filteredProperties.length === 0 ? (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-12"
//           >
//             <p className="text-gray-500 text-lg">No properties found matching your criteria</p>
//           </motion.div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProperties.map((property, index) => (
//               <motion.div
//                 key={property.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//               >
//                 <PropertyCard property={property} />
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// import { motion } from "framer-motion";
// import { useState } from "react";
// import { useProperty } from "../contexts/PropertyContext";
// import { PropertyCard } from "../components/PropertyCard";
// import { Search, SlidersHorizontal } from "lucide-react";

// export function PropertiesPage() {
//   const { properties } = useProperty();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterType, setFilterType] = useState("");
//   const [filterCity, setFilterCity] = useState("");

//   const filteredProperties = properties.filter((property) => {
//     const matchesSearch =
//       property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       property.city.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesType = !filterType || property.propertyType === filterType;
//     const matchesCity =
//       !filterCity || property.city.toLowerCase() === filterCity.toLowerCase();

//     return matchesSearch && matchesType && matchesCity;
//   });

//   const cities = Array.from(new Set(properties.map((p) => p.city)));

//   return (
//     <div className="bg-gray-50 min-h-screen">

//       {/* ================= PAGE HERO ================= */}
//       <section className="bg-white py-16 border-b">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
//           >
//             Explore Properties
//           </motion.h1>
//           <p className="text-lg text-gray-600 max-w-2xl">
//             Browse verified properties across cities and find the perfect home
//             that fits your lifestyle and budget.
//           </p>
//         </div>
//       </section>

//       {/* ================= FILTER SECTION ================= */}
//       <section className="py-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="bg-white rounded-2xl shadow-md p-6"
//           >
//             <div className="flex items-center gap-2 mb-6">
//               <SlidersHorizontal className="text-red-600" />
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Filter Properties
//               </h3>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//               {/* SEARCH */}
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search by title or city"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
//                 />
//               </div>

//               {/* TYPE */}
//               <select
//                 value={filterType}
//                 onChange={(e) => setFilterType(e.target.value)}
//                 className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
//               >
//                 <option value="">All Property Types</option>
//                 <option value="Flat">Flat</option>
//                 <option value="Villa">Villa</option>
//                 <option value="Plot">Plot</option>
//                 <option value="Commercial">Commercial</option>
//               </select>

//               {/* CITY */}
//               <select
//                 value={filterCity}
//                 onChange={(e) => setFilterCity(e.target.value)}
//                 className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
//               >
//                 <option value="">All Cities</option>
//                 {cities.map((city) => (
//                   <option key={city} value={city}>
//                     {city}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= RESULT COUNT ================= */}
//       <div className="max-w-7xl mx-auto px-6 mb-6">
//         <p className="text-gray-600">
//           Showing{" "}
//           <span className="font-semibold text-gray-900">
//             {filteredProperties.length}
//           </span>{" "}
//           properties
//         </p>
//       </div>

//       {/* ================= PROPERTY GRID ================= */}
//       <section className="pb-20">
//         <div className="max-w-7xl mx-auto px-6">

//           {filteredProperties.length === 0 ? (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-20"
//             >
//               <p className="text-gray-500 text-lg">
//                 No properties found matching your criteria.
//               </p>
//             </motion.div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProperties.map((property, index) => (
//                 <motion.div
//                   key={property.id}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.05 }}
//                 >
//                   <PropertyCard property={property} />
//                 </motion.div>
//               ))}
//             </div>
//           )}

//         </div>
//       </section>
//     </div>
//   );
// }






import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import {
  MapPin,
  SlidersHorizontal,
  ChevronDown,
  BedDouble,
  Bath,
  Ruler,
  ArrowRight,
} from "lucide-react";

/* ---------------- MOCK DATA ---------------- */
const properties = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  title: `Luxury Property ${i + 1}`,
  city: "Jaipur",
  type: ["Apartment", "Villa", "Studio", "House"][i % 4],
  purpose: i % 2 === 0 ? "buy" : "rent",
  bedrooms: 2 + (i % 3),
  bathrooms: 2,
  size: 900 + i * 40,
  price: i % 2 === 0 ? "₹85 Lakh" : "₹25,000 / month",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
}));

export default function PropertyPage() {
  const [activeTab, setActiveTab] = useState("rent");
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(50000);
  const [area, setArea] = useState(2000);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const advRef = useRef(null);
  const advBtnRef = useRef(null);

  /* PAGINATION */
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    function outside(e) {
      if (
        showAdvanced &&
        advRef.current &&
        !advRef.current.contains(e.target) &&
        !advBtnRef.current.contains(e.target)
      ) {
        setShowAdvanced(false);
      }
    }
    document.addEventListener("mousedown", outside);
    return () => document.removeEventListener("mousedown", outside);
  }, [showAdvanced]);

  /* FILTER LOGIC */
  const filtered = useMemo(() => {
    return properties.filter((p) => {
      return (
        p.purpose === activeTab &&
        (!type || p.type === type) &&
        p.title.toLowerCase().includes(search.toLowerCase()) &&
        p.size <= area
      );
    });
  }, [activeTab, search, type, area]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const data = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="bg-[#F6F6F7] min-h-screen">
      {/* ---------------- SEARCH SECTION ---------------- */}
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <h1 className="text-4xl font-bold text-center mb-10">
          Find Your Perfect Property
        </h1>

        {/* TABS CENTER */}
        <div className="flex justify-center mb-4 flex-wrap">
          {["buy", "rent"].map((t) => (
            <button
              key={t}
              onClick={() => {
                setActiveTab(t);
                setPage(1);
              }}
              className={`px-6 py-2 font-semibold border ${
                activeTab === t
                  ? "bg-white shadow"
                  : "bg-gray-100"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* SEARCH BAR (SAME TO SAME) */}
        <div className="relative flex justify-center">
          <div className="bg-white shadow-xl rounded-2xl p-4 flex flex-col lg:flex-row gap-4 lg:w-[940px]">
            <div className="relative w-full lg:w-[260px]">
              <MapPin className="absolute left-3 top-3 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Location"
                className="w-full pl-10 py-3 border rounded-lg"
              />
            </div>

            <div className="relative w-full lg:w-[220px]">
              <select
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg appearance-none"
              >
                <option value="">All Types</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Studio</option>
                <option>House</option>
              </select>
              <ChevronDown className="absolute right-3 top-3" />
            </div>

            <button
              ref={advBtnRef}
              onClick={() => setShowAdvanced((p) => !p)}
              className="flex items-center gap-2 px-4 py-3 border rounded-lg lg:w-[220px]"
            >
              <SlidersHorizontal size={18} />
              Advanced
            </button>

            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
              Find Properties
            </button>
          </div>

          {/* ADVANCED FILTER */}
          <AnimatePresence>
            {showAdvanced && (
              <motion.div
                ref={advRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-full mt-4 bg-white lg:w-[940px] w-full rounded-2xl shadow-2xl p-6 z-50"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="font-semibold mb-1">Max Price</p>
                    <input
                      type="range"
                      min="10000"
                      max="100000"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full accent-red-600"
                    />
                    <p className="text-red-600 text-sm">₹{price}</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Max Area</p>
                    <input
                      type="range"
                      min="500"
                      max="3000"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full accent-red-600"
                    />
                    <p className="text-red-600 text-sm">{area} sqft</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setShowAdvanced(false)}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Apply Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ---------------- PROPERTY GRID ---------------- */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={item.image}
                  className="h-56 w-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-black/70 text-white text-xs px-3 py-1 rounded">
                    {item.purpose === "rent" ? "For Rent" : "For Sale"}
                  </span>
                  <span className="bg-white text-xs px-3 py-1 rounded font-semibold">
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>

                <p className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin size={16} className="mr-1" />
                  {item.city}
                </p>

                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span className="flex gap-1 items-center">
                    <BedDouble size={16} /> {item.bedrooms}
                  </span>
                  <span className="flex gap-1 items-center">
                    <Bath size={16} /> {item.bathrooms}
                  </span>
                  <span className="flex gap-1 items-center">
                    <Ruler size={16} /> {item.size} sqft
                  </span>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <p className="text-lg font-bold">{item.price}</p>
                  <button className="flex items-center gap-1 text-red-600 font-semibold">
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-14">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-10 h-10 rounded-lg font-semibold ${
                page === i + 1
                  ? "bg-red-600 text-white"
                  : "bg-white border"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
