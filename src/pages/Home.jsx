// import { motion } from 'framer-motion';
// import { Search, MapPin, Home, TrendingUp } from 'lucide-react';
// import { useState } from 'react';
// import { useProperty } from '../contexts/PropertyContext';
// import { PropertyCard } from '../components/PropertyCard';
// import { useNavigate } from 'react-router-dom';

// export function HomePage() {
//   const { properties } = useProperty();
//   const navigate = useNavigate();
//   const [searchCity, setSearchCity] = useState('');
//   const [searchType, setSearchType] = useState('');
//   const [searchBudget, setSearchBudget] = useState('');

//   const featuredProperties = properties.slice(0, 6);

//   const handleSearch = () => {
//     navigate('/properties');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-yellow-50 opacity-50"></div>

//         <div className="relative max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
//               Find Your <span className="text-red-600">Perfect Home</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Discover premium properties that match your dreams. Your journey to the perfect home starts here.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="City"
//                   value={searchCity}
//                   onChange={(e) => setSearchCity(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                 />
//               </div>

//               <select
//                 value={searchType}
//                 onChange={(e) => setSearchType(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               >
//                 <option value="">Property Type</option>
//                 <option value="Flat">Flat</option>
//                 <option value="Villa">Villa</option>
//                 <option value="Plot">Plot</option>
//                 <option value="Commercial">Commercial</option>
//               </select>

//               <select
//                 value={searchBudget}
//                 onChange={(e) => setSearchBudget(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               >
//                 <option value="">Budget</option>
//                 <option value="0-50">Under ₹50 Lac</option>
//                 <option value="50-100">₹50 Lac - ₹1 Cr</option>
//                 <option value="100-200">₹1 Cr - ₹2 Cr</option>
//                 <option value="200+">Above ₹2 Cr</option>
//               </select>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleSearch}
//                 className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold flex items-center justify-center space-x-2"
//               >
//                 <Search className="w-5 h-5" />
//                 <span>Search</span>
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Featured Properties
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Handpicked premium properties just for you
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredProperties.map((property, index) => (
//               <motion.div
//                 key={property.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <PropertyCard property={property} />
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mt-12"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate('/properties')}
//               className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold text-lg"
//             >
//               View All Properties
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-white p-8 rounded-xl shadow-md text-center"
//             >
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Home className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
//               <p className="text-gray-600">Premium Properties</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="bg-white p-8 rounded-xl shadow-md text-center"
//             >
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <TrendingUp className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">5,000+</h3>
//               <p className="text-gray-600">Happy Customers</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="bg-white p-8 rounded-xl shadow-md text-center"
//             >
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <MapPin className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
//               <p className="text-gray-600">Cities Covered</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }











// import { motion } from 'framer-motion';
// import { Search, MapPin, Home, TrendingUp, SlidersHorizontal } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { useProperty } from '../contexts/PropertyContext';
// import { PropertyCard } from '../components/PropertyCard';
// import { useNavigate } from 'react-router-dom';

// export function HomePage() {
//   const { properties } = useProperty();
//   const navigate = useNavigate();

//   const [searchCity, setSearchCity] = useState('');
//   const [searchType, setSearchType] = useState('');
//   const [typedText, setTypedText] = useState('');
//   const words = ['Perfectly', 'Your Life', 'Your Budget'];
//   const [wordIndex, setWordIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   const images = [
//     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
//     'https://images.unsplash.com/photo-1599423300746-b62533397364'
//   ];
//   const [currentImage, setCurrentImage] = useState(0);

//   const featuredProperties = properties.slice(0, 6);

//   useEffect(() => {
//     const typing = setTimeout(() => {
//       if (charIndex < words[wordIndex].length) {
//         setTypedText((prev) => prev + words[wordIndex][charIndex]);
//         setCharIndex(charIndex + 1);
//       } else {
//         setTimeout(() => {
//           setTypedText('');
//           setCharIndex(0);
//           setWordIndex((wordIndex + 1) % words.length);
//         }, 1500);
//       }
//     }, 120);
//     return () => clearTimeout(typing);
//   }, [charIndex, wordIndex]);

//   useEffect(() => {
//     const slider = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(slider);
//   }, []);

//   const handleSearch = () => {
//     navigate('/properties');
//   };

//   return (
//     <div className="min-h-screen bg-white">

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 py-20">

//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
//               Find A Home That <br />
//               <span className="text-red-600">
//                 Fits {typedText}
//                 <span className="border-r-2 border-red-600 ml-1 animate-pulse"></span>
//               </span>
//             </h1>

//             <p className="text-lg text-gray-600 max-w-xl mb-10">
//               We are a real estate agency that will help you find the best
//               residence you dream of.
//             </p>

//             {/* SEARCH BAR */}
//             <div className="bg-white shadow-xl rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 w-full">
//               <input
//                 type="text"
//                 placeholder="Keyword"
//                 className="w-full md:w-1/4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"
//               />
//               <div className="relative w-full md:w-1/4">
//                 <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Location"
//                   value={searchCity}
//                   onChange={(e) => setSearchCity(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"
//                 />
//               </div>
//               <select
//                 value={searchType}
//                 onChange={(e) => setSearchType(e.target.value)}
//                 className="w-full md:w-1/5 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"
//               >
//                 <option value="">Type</option>
//                 <option>Apartment</option>
//                 <option>Villa</option>
//                 <option>Studio</option>
//                 <option>House</option>
//               </select>

//               <button className="flex items-center gap-2 text-gray-700 font-medium">
//                 <SlidersHorizontal size={18} /> Advanced
//               </button>

//               <button
//                 onClick={handleSearch}
//                 className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
//               >
//                 Find Properties
//               </button>
//             </div>

//             <p className="mt-4 text-sm text-gray-500">
//               What are you looking for: Apartment, Villa, Studio, House
//             </p>
//           </motion.div>

//           {/* RIGHT IMAGE CAROUSEL */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative h-[480px] rounded-3xl overflow-hidden"
//           >
//             {images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt="Home"
//                 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                   index === currentImage ? 'opacity-100' : 'opacity-0'
//                 }`}
//               />
//             ))}
//           </motion.div>

//         </div>
//       </section>
//       {/* ================= HERO END ================= */}

//         <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Featured Properties
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Handpicked premium properties just for you
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredProperties.map((property, index) => (
//               <motion.div
//                 key={property.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <PropertyCard property={property} />
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mt-12"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate('/properties')}
//               className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold text-lg"
//             >
//               View All Properties
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-white p-8 rounded-xl shadow-md text-center"
//             >
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Home className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
//               <p className="text-gray-600">Premium Properties</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="bg-white p-8 rounded-xl shadow-md text-center"
//             >
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <TrendingUp className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">5,000+</h3>
//               <p className="text-gray-600">Happy Customers</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="bg-white p-8 rounded-xl shadow-md text-center"
//             >
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <MapPin className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
//               <p className="text-gray-600">Cities Covered</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }







// import { motion } from 'framer-motion';
// import { Search, MapPin, Home, TrendingUp, SlidersHorizontal } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { useProperty } from '../contexts/PropertyContext';
// import { PropertyCard } from '../components/PropertyCard';
// import { useNavigate } from 'react-router-dom';

// export function HomePage() {
//   const { properties } = useProperty();
//   const navigate = useNavigate();

//   /* ---------- HERO STATES ---------- */
//   const [activeTab, setActiveTab] = useState('rent');

//   const words = ['Perfectly', 'Your Life', 'Your Budget'];
//   const [wordIndex, setWordIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [typedText, setTypedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   const images = [
//     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
//     'https://images.unsplash.com/photo-1599423300746-b62533397364',
//   ];
//   const [currentImage, setCurrentImage] = useState(0);

//   const featuredProperties = properties.slice(0, 6);

//   /* ---------- TYPING + DELETING EFFECT ---------- */
//   useEffect(() => {
//     const currentWord = words[wordIndex];
//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         setTypedText(currentWord.slice(0, charIndex + 1));
//         setCharIndex(charIndex + 1);
//         if (charIndex === currentWord.length) {
//           setTimeout(() => setIsDeleting(true), 1200);
//         }
//       } else {
//         setTypedText(currentWord.slice(0, charIndex - 1));
//         setCharIndex(charIndex - 1);
//         if (charIndex === 0) {
//           setIsDeleting(false);
//           setWordIndex((prev) => (prev + 1) % words.length);
//         }
//       }
//     }, isDeleting ? 60 : 120);

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, wordIndex]);

//   /* ---------- IMAGE CAROUSEL ---------- */
//   useEffect(() => {
//     const slider = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(slider);
//   }, []);

//   const handleSearch = () => navigate('/properties');

//   return (
//     <div className="min-h-screen bg-[#F7F7F7]">

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-20">

//           {/* LEFT SIDE */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
//               Find A Home That <br />
//               <span className="text-red-600">
//                 Fits {typedText}
//                 <span className="ml-1 border-r-2 border-red-600 animate-pulse" />
//               </span>
//             </h1>

//             <p className="text-lg text-gray-600 max-w-xl mb-10">
//               We are a real estate agency that will help you find the best
//               residence you dream of.
//             </p>

//             {/* FOR RENT / FOR SALE */}
//             <div className="flex mb-0">
//               <button
//                 onClick={() => setActiveTab('rent')}
//                 className={`px-6 py-3 rounded-l-lg font-semibold border ${
//                   activeTab === 'rent'
//                     ? 'bg-white shadow text-gray-900'
//                     : 'bg-gray-100 text-gray-500'
//                 }`}
//               >
//                 FOR RENT
//               </button>
//               <button
//                 onClick={() => setActiveTab('sale')}
//                 className={`px-6 py-3 rounded-r-lg font-semibold border-l-0 border ${
//                   activeTab === 'sale'
//                     ? 'bg-white shadow text-gray-900'
//                     : 'bg-gray-100 text-gray-500'
//                 }`}
//               >
//                 FOR SALE
//               </button>
//             </div>

//             {/* SEARCH BOX */}
//             <div className="bg-white shadow-xl rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4">
//               <input
//                 type="text"
//                 placeholder="Keyword"
//                 className="w-full md:w-1/4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"
//               />

//               <div className="relative w-full md:w-1/4">
//                 <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Location"
//                   className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"
//                 />
//               </div>

//               <select className="w-full md:w-1/5 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500">
//                 <option>All</option>
//                 <option>Apartment</option>
//                 <option>Villa</option>
//                 <option>Studio</option>
//                 <option>House</option>
//               </select>

//               <button className="flex items-center gap-2 text-gray-700 font-medium">
//                 <SlidersHorizontal size={18} /> Advanced
//               </button>

//               <button
//                 onClick={handleSearch}
//                 className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
//               >
//                 Find Properties
//               </button>
//             </div>

//             <p className="mt-4 text-sm text-gray-500">
//               What are you looking for: Apartment, Villa, Studio, House
//             </p>
//           </motion.div>

//           {/* RIGHT IMAGE CAROUSEL */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative h-[480px] rounded-3xl overflow-hidden"
//           >
//             {images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt="Home"
//                 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                   index === currentImage ? 'opacity-100' : 'opacity-0'
//                 }`}
//               />
//             ))}
//           </motion.div>

//         </div>
//       </section>
//       {/* ================= HERO END ================= */}

//       {/* ======= REST OF YOUR SECTIONS (UNCHANGED) ======= */}
//         <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Featured Properties
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Handpicked premium properties just for you
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredProperties.map((property, index) => (
//               <motion.div
//                 key={property.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <PropertyCard property={property} />
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mt-12"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate('/properties')}
//               className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold text-lg"
//             >
//               View All Properties
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-white p-8 rounded-xl shadow-md text-center"
//             >
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Home className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
//               <p className="text-gray-600">Premium Properties</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="bg-white p-8 rounded-xl shadow-md text-center"
//             >
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <TrendingUp className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">5,000+</h3>
//               <p className="text-gray-600">Happy Customers</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="bg-white p-8 rounded-xl shadow-md text-center"
//             >
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <MapPin className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
//               <p className="text-gray-600">Cities Covered</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }











import { motion } from 'framer-motion';
import { Search, MapPin, Home, TrendingUp, SlidersHorizontal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useProperty } from '../contexts/PropertyContext';
import { PropertyCard } from '../components/PropertyCard';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/home_compoenent/HeroSection';
import { PropertyTypeCarousel } from '../components/home_compoenent/PropertyTypeCarousel';
import { PropertyListingCarousel } from '../components/home_compoenent/PropertyListingCarousel';
import { DualBannerSection } from '../components/home_compoenent/DualBannerSection';
import { CallToActionBanner } from '../components/home_compoenent/CallToActionBanner';
import { ManagedPropertyCarousel } from '../components/home_compoenent/ManagedPropertyCarousel';
import { CityWisePropertyCarousel } from '../components/home_compoenent/CityWisePropertyCarousel';
import { BestPropertyValueSection } from '../components/home_compoenent/BestPropertyValueSection';
import { AboutUsSection } from '../components/home_compoenent/AboutUsSection';
import { WhyChooseUsSection } from '../components/home_compoenent/WhyChooseUsSection';
import { TestimonialsSection } from '../components/home_compoenent/TestimonialsSection';
import { LatestGuidesSection } from '../components/home_compoenent/LatestGuidesSection';
import { AdviceToolsSection } from '../components/home_compoenent/AdviceToolsSection';
import { PropertyOptionsSection } from '../components/home_compoenent/PropertyOptionsSection';

export function HomePage() {
  const { properties } = useProperty();
  const navigate = useNavigate();



  const featuredProperties = properties.slice(0, 6);


  return (
    <div className="min-h-screen bg-[#F7F7F7]">

      <HeroSection />
      <PropertyTypeCarousel />
      <PropertyListingCarousel />
      <DualBannerSection />
      <ManagedPropertyCarousel />
      <CallToActionBanner />
      <CityWisePropertyCarousel />
      <BestPropertyValueSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <LatestGuidesSection />
      <AdviceToolsSection />
      <PropertyOptionsSection />

      {/* ======= REST OF YOUR SECTIONS (UNCHANGED) ======= */}
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-600 text-lg">
              Handpicked premium properties just for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
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
      </section> */}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Premium Properties</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Cities Covered</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
