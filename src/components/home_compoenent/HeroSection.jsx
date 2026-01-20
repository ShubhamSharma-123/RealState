



// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   MapPin,
//   SlidersHorizontal,
//   ChevronDown,
// } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// export function HeroSection() {
//   const navigate = useNavigate();

//   const [activeTab, setActiveTab] = useState('rent');
//   const [showAdvanced, setShowAdvanced] = useState(false);
//   const [typeOpen, setTypeOpen] = useState(false);

//   /* ---------- IMAGE CAROUSEL ---------- */
//   const images = [
//     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
//     'https://images.unsplash.com/photo-1599423300746-b62533397364',
//   ];
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   /* ---------- TYPING EFFECT ---------- */
//   const words = ['Perfectly', 'Your Life', 'Your Budget'];
//   const [wordIndex, setWordIndex] = useState(0);
//   const [text, setText] = useState('');
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const word = words[wordIndex];
//     const speed = deleting ? 60 : 120;

//     const timer = setTimeout(() => {
//       if (!deleting) {
//         setText(word.slice(0, text.length + 1));
//         if (text === word) setTimeout(() => setDeleting(true), 900);
//       } else {
//         setText(word.slice(0, text.length - 1));
//         if (text.length === 1) {
//           setDeleting(false);
//           setWordIndex((prev) => (prev + 1) % words.length);
//         }
//       }
//     }, speed);

//     return () => clearTimeout(timer);
//   }, [text, deleting, wordIndex]);

//   const handleSearch = () => navigate('/properties');

//   return (
//     <section className="relative bg-white overflow-visible">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-20 items-center relative">

//         {/* ================= LEFT ================= */}
//         <div className="relative z-20">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//             Find A Home That <br />
//             <span className="text-red-600">
//               Fits {text}
//               <span className="ml-1 border-r-2 border-red-600 animate-pulse" />
//             </span>
//           </h1>

//           <p className="text-lg text-gray-600 max-w-xl mb-8">
//             We are a real estate agency that will help you find the best
//             residence you dream of.
//           </p>

//           {/* FOR RENT / SALE */}
//           <div className="flex mb-4">
//             {['rent', 'sale'].map((t) => (
//               <button
//                 key={t}
//                 onClick={() => setActiveTab(t)}
//                 className={`px-6 py-3 font-semibold border ${
//                   activeTab === t
//                     ? 'bg-white shadow text-gray-900'
//                     : 'bg-gray-100 text-gray-500'
//                 } ${t === 'rent' ? 'rounded-l-lg' : 'rounded-r-lg border-l-0'}`}
//               >
//                 FOR {t.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           {/* SEARCH BAR */}
//           <div className="bg-white shadow-xl rounded-2xl p-4 flex flex-col lg:flex-row gap-4 w-full lg:w-[130%] relative">
//             {/* Location */}
//             <div className="relative w-full">
//               <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search Location"
//                 className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"
//               />
//             </div>

//             {/* Type Dropdown */}
//             <div className="relative w-full">
//               <select
//                 onFocus={() => setTypeOpen(true)}
//                 onBlur={() => setTypeOpen(false)}
//                 className="w-full px-4 py-3 border rounded-lg appearance-none focus:ring-2 focus:ring-red-500"
//               >
//                 <option>All Types</option>
//                 <option>Apartment</option>
//                 <option>Villa</option>
//                 <option>Studio</option>
//                 <option>House</option>
//               </select>
//               <ChevronDown
//                 className={`absolute right-3 top-3 transition-transform ${
//                   typeOpen ? 'rotate-180' : ''
//                 }`}
//               />
//             </div>

//             {/* Advanced */}
//             <button
//               onClick={() => setShowAdvanced((p) => !p)}
//               className="flex items-center gap-2 px-4 py-3 border rounded-lg font-medium text-gray-700 hover:bg-gray-50"
//             >
//               <SlidersHorizontal size={18} /> Advanced
//             </button>

//             <button
//               onClick={handleSearch}
//               className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
//             >
//               Find Properties
//             </button>
//           </div>

//           {/* ADVANCED FILTER (OVERLAY) */}
//           <AnimatePresence>
//             {showAdvanced && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute left-0 top-full mt-6 w-full lg:w-[130%] bg-white shadow-2xl rounded-2xl p-6 z-50"
//               >
//                 {/* Sliders */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   {['Price Range', 'Area Range'].map((t) => (
//                     <div key={t}>
//                       <p className="font-semibold mb-2">{t}</p>
//                       <input type="range" className="w-full accent-red-600" />
//                       <div className="flex justify-between text-red-600 text-sm">
//                         <span>0</span>
//                         <span>40000</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Dropdowns */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                   {['Rooms', 'Bathrooms', 'Bedrooms', 'Type'].map((d) => (
//                     <select key={d} className="px-4 py-3 border rounded-lg">
//                       <option>{d}</option>
//                       {[1, 2, 3, 4].map((n) => (
//                         <option key={n}>{n}</option>
//                       ))}
//                     </select>
//                   ))}
//                 </div>

//                 {/* Amenities */}
//                 <div>
//                   <p className="font-semibold mb-3">Amenities</p>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
//                     {[
//                       'Air Condition',
//                       'Elevator',
//                       'Garage',
//                       'Parking',
//                       'WiFi',
//                       'Swimming Pool',
//                       'Pet Friendly',
//                       'Garden',
//                     ].map((a) => (
//                       <label key={a} className="flex items-center gap-2">
//                         <input type="checkbox" className="accent-red-600" />
//                         {a}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* ================= RIGHT IMAGE CAROUSEL ================= */}
//         <div className="hidden lg:block relative h-[480px] rounded-3xl overflow-hidden">
//           {images.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt="Home"
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                 i === currentImage ? 'opacity-100' : 'opacity-0'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   MapPin,
//   SlidersHorizontal,
//   ChevronDown,
// } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// export function HeroSection() {
//   const navigate = useNavigate();

//   const [activeTab, setActiveTab] = useState('rent');
//   const [showAdvanced, setShowAdvanced] = useState(false);
//   const [typeOpen, setTypeOpen] = useState(false);

//   /* ---------- RANGE STATES ---------- */
//   const [price, setPrice] = useState(20000);
//   const [area, setArea] = useState(1200);

//   /* ---------- CLICK OUTSIDE ---------- */
//   const advancedRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (advancedRef.current && !advancedRef.current.contains(e.target)) {
//         setShowAdvanced(false);
//       }
//     }
//     if (showAdvanced) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [showAdvanced]);

//   /* ---------- IMAGE CAROUSEL ---------- */
//   const images = [
//     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
//     'https://images.unsplash.com/photo-1599423300746-b62533397364',
//   ];
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((p) => (p + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   /* ---------- TYPING EFFECT ---------- */
//   const words = ['Perfectly', 'Your Life', 'Your Budget'];
//   const [wordIndex, setWordIndex] = useState(0);
//   const [text, setText] = useState('');
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const word = words[wordIndex];
//     const speed = deleting ? 60 : 120;

//     const timer = setTimeout(() => {
//       if (!deleting) {
//         setText(word.slice(0, text.length + 1));
//         if (text === word) setTimeout(() => setDeleting(true), 900);
//       } else {
//         setText(word.slice(0, text.length - 1));
//         if (text.length === 1) {
//           setDeleting(false);
//           setWordIndex((p) => (p + 1) % words.length);
//         }
//       }
//     }, speed);

//     return () => clearTimeout(timer);
//   }, [text, deleting, wordIndex]);

//   return (
//     <section className="relative bg-[#F7F7F7] overflow-visible">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-20 items-center">

//         {/* ================= LEFT ================= */}
//         <div className="relative z-20">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//             Find A Home That <br />
//             <span className="text-red-600">
//               Fits {text}
//               <span className="ml-1 border-r-2 border-red-600 animate-pulse" />
//             </span>
//           </h1>

//           <p className="text-lg text-gray-600 max-w-xl mb-8">
//             We are a real estate agency that will help you find the best
//             residence you dream of.
//           </p>

//           {/* RENT / SALE */}
//           <div className="flex">
//             {['rent', 'sale'].map((t) => (
//               <button
//                 key={t}
//                 onClick={() => setActiveTab(t)}
//                 className={`px-6 py-3 font-semibold border ${
//                   activeTab === t
//                     ? 'bg-white shadow text-gray-900'
//                     : 'bg-gray-100 text-gray-500'
//                 } ${t === 'rent' ? 'rounded-l-lg' : 'rounded-r-lg border-l-0'}`}
//               >
//                 FOR {t.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           {/* SEARCH BAR */}
//           <div className="bg-white shadow-xl rounded-2xl p-4 flex flex-col lg:flex-row gap-4 w-full lg:w-[150%]">
//             {/* Location */}
//             <div className="relative w-full">
//               <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search Location"
//                 className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"
//               />
//             </div>

//             {/* Property Type */}
//             <div className="relative w-full">
//               <select
//                 onFocus={() => setTypeOpen(true)}
//                 onBlur={() => setTypeOpen(false)}
//                 className="w-full px-4 py-3 border rounded-lg appearance-none focus:ring-2 focus:ring-red-500"
//               >
//                 <option>All Types</option>
//                 <option>Apartment</option>
//                 <option>Villa</option>
//                 <option>Studio</option>
//                 <option>House</option>
//               </select>
//               <ChevronDown
//                 className={`absolute right-3 top-3 transition-transform ${
//                   typeOpen ? 'rotate-180' : ''
//                 }`}
//               />
//             </div>

//             {/* Advanced */}
//             <button
//               onClick={() => setShowAdvanced((p) => !p)}
//               className="flex items-center gap-2 px-4 py-3 border rounded-lg text-gray-700 hover:bg-gray-50"
//             >
//               <SlidersHorizontal size={18} /> Advanced
//             </button>

//             <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
//               Find Properties
//             </button>
//           </div>

//           {/* ADVANCED POPUP */}
//           <AnimatePresence>
//             {showAdvanced && (
//               <motion.div
//                 ref={advancedRef}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute left-0 top-full mt-6 w-full lg:w-[130%] bg-white shadow-2xl rounded-2xl p-6 z-50"
//               >
//                 {/* RANGES */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <p className="font-semibold mb-1">Price Range</p>
//                     <input
//                       type="range"
//                       min="0"
//                       max="40000"
//                       value={price}
//                       onChange={(e) => setPrice(e.target.value)}
//                       className="w-full accent-red-600"
//                     />
//                     <p className="text-red-600 text-sm mt-1">${price}</p>
//                   </div>

//                   <div>
//                     <p className="font-semibold mb-1">Area Range</p>
//                     <input
//                       type="range"
//                       min="0"
//                       max="2400"
//                       value={area}
//                       onChange={(e) => setArea(e.target.value)}
//                       className="w-full accent-red-600"
//                     />
//                     <p className="text-red-600 text-sm mt-1">{area} sqft</p>
//                   </div>
//                 </div>

//                 {/* DROPDOWNS */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                   {['Rooms', 'Bathrooms', 'Bedrooms', 'Type'].map((d) => (
//                     <select key={d} className="px-4 py-3 border rounded-lg">
//                       <option>{d}</option>
//                       {[1, 2, 3, 4].map((n) => (
//                         <option key={n}>{n}</option>
//                       ))}
//                     </select>
//                   ))}
//                 </div>

//                 {/* AMENITIES */}
//                 <div>
//                   <p className="font-semibold mb-3">Amenities</p>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
//                     {[
//                       'Air Condition',
//                       'Elevator',
//                       'Garage',
//                       'Parking',
//                       'WiFi',
//                       'Swimming Pool',
//                       'Pet Friendly',
//                       'Garden',
//                     ].map((a) => (
//                       <label key={a} className="flex items-center gap-2">
//                         <input type="checkbox" className="accent-red-600" />
//                         {a}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* ================= RIGHT CAROUSEL ================= */}
//         <div className="hidden lg:block relative h-[480px] rounded-3xl overflow-hidden">
//           {images.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt="Home"
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                 i === currentImage ? 'opacity-100' : 'opacity-0'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   MapPin,
//   SlidersHorizontal,
//   ChevronDown,
// } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// export function HeroSection() {
//   const navigate = useNavigate();

//   const [activeTab, setActiveTab] = useState('rent');
//   const [showAdvanced, setShowAdvanced] = useState(false);
//   const [typeOpen, setTypeOpen] = useState(false);

//   /* ---------- RANGE STATES ---------- */
//   const [price, setPrice] = useState(20000);
//   const [area, setArea] = useState(1200);

//   /* ---------- ADVANCED POPUP REF ---------- */
//   const advancedRef = useRef(null);
//   const advancedBtnRef = useRef(null);

//   /* ---------- OUTSIDE CLICK CLOSE ---------- */
//   useEffect(() => {
//     function handleOutsideClick(e) {
//       if (
//         showAdvanced &&
//         advancedRef.current &&
//         !advancedRef.current.contains(e.target) &&
//         !advancedBtnRef.current.contains(e.target)
//       ) {
//         setShowAdvanced(false);
//       }
//     }
//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, [showAdvanced]);

//   /* ---------- IMAGE CAROUSEL ---------- */
//   const images = [
//     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
//     'https://images.unsplash.com/photo-1599423300746-b62533397364',
//   ];
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((p) => (p + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   /* ---------- TYPING EFFECT ---------- */
//   const words = ['Perfectly', 'Your Life', 'Your Budget'];
//   const [wordIndex, setWordIndex] = useState(0);
//   const [text, setText] = useState('');
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const word = words[wordIndex];
//     const speed = deleting ? 60 : 120;

//     const timer = setTimeout(() => {
//       if (!deleting) {
//         setText(word.slice(0, text.length + 1));
//         if (text === word) setTimeout(() => setDeleting(true), 900);
//       } else {
//         setText(word.slice(0, text.length - 1));
//         if (text.length === 1) {
//           setDeleting(false);
//           setWordIndex((p) => (p + 1) % words.length);
//         }
//       }
//     }, speed);

//     return () => clearTimeout(timer);
//   }, [text, deleting, wordIndex]);

//   return (
//     <section className="relative bg-[#F6F6F7] overflow-visible">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-20 items-center">

//         {/* ================= LEFT ================= */}
//         <div className="relative z-20">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//             Find A Home That <br />
//             <span className="text-red-600">
//               Fits {text}
//               <span className="ml-1 border-r-2 border-red-600 animate-pulse" />
//             </span>
//           </h1>

//           <p className="text-lg text-gray-600 max-w-xl mb-8">
//             We are a real estate agency that will help you find the best
//             residence you dream of.
//           </p>

//           {/* RENT / SALE */}
//           <div className="flex mb-4">
//             {['buy','rent', 'pg', 'commercial','plot'].map((t) => (
//               <button
//                 key={t}
//                 onClick={() => setActiveTab(t)}
//                 className={`px-6 py-3 font-semibold border ${
//                   activeTab === t
//                     ? 'bg-white shadow text-gray-900'
//                     : 'bg-gray-100 text-gray-500'
//                 } ${t === 'rent' ? 'rounded-l-lg' : 'rounded-r-lg border-l-0'}`}
//               >
//                  {t.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           {/* SEARCH BAR */}
//           <div className="bg-white shadow-xl rounded-2xl p-4 flex flex-col lg:flex-row gap-4 w-full lg:w-[130%]">
//             {/* Location */}
//             <div className="relative w-full">
//               <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search Location"
//                 className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"
//               />
//             </div>

//             {/* Property Type */}
//             <div className="relative w-full">
//               <select
//                 onFocus={() => setTypeOpen(true)}
//                 onBlur={() => setTypeOpen(false)}
//                 className="w-full px-4 py-3 border rounded-lg appearance-none focus:ring-2 focus:ring-red-500"
//               >
//                 <option>All Types</option>
//                 <option>Apartment</option>
//                 <option>Villa</option>
//                 <option>Studio</option>
//                 <option>House</option>
//               </select>
//               <ChevronDown
//                 className={`absolute right-3 top-3 transition-transform ${
//                   typeOpen ? 'rotate-180' : ''
//                 }`}
//               />
//             </div>

//             {/* Advanced Button */}
//             <button
//               ref={advancedBtnRef}
//               onClick={() => setShowAdvanced((prev) => !prev)}
//               className="flex items-center gap-2 px-4 py-3 border rounded-lg text-gray-700 hover:bg-gray-50 whitespace-nowrap"
//             >
//               <SlidersHorizontal size={18} /> Advanced
//             </button>

//             {/* Find Properties */}
//             <button
//               className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center whitespace-nowrap"
//             >
//               Find Properties
//             </button>
//           </div>

//           {/* ADVANCED POPUP */}
//           <AnimatePresence>
//             {showAdvanced && (
//               <motion.div
//                 ref={advancedRef}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute left-0 top-full mt-6 w-full lg:w-[130%] bg-white shadow-2xl rounded-2xl p-6 z-50"
//               >
//                 {/* RANGES */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <p className="font-semibold mb-1">Price Range</p>
//                     <input
//                       type="range"
//                       min="0"
//                       max="40000"
//                       value={price}
//                       onChange={(e) => setPrice(e.target.value)}
//                       className="w-full accent-red-600"
//                     />
//                     <p className="text-red-600 text-sm mt-1">₹{price}</p>
//                   </div>

//                   <div>
//                     <p className="font-semibold mb-1">Area Range</p>
//                     <input
//                       type="range"
//                       min="0"
//                       max="2400"
//                       value={area}
//                       onChange={(e) => setArea(e.target.value)}
//                       className="w-full accent-red-600"
//                     />
//                     <p className="text-red-600 text-sm mt-1">{area} sqft</p>
//                   </div>
//                 </div>

//                 {/* DROPDOWNS */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                   {['Rooms', 'Bathrooms', 'Bedrooms', 'Type'].map((d) => (
//                     <select key={d} className="px-4 py-3 border rounded-lg">
//                       <option>{d}</option>
//                       {[1, 2, 3, 4].map((n) => (
//                         <option key={n}>{n}</option>
//                       ))}
//                     </select>
//                   ))}
//                 </div>

//                 {/* AMENITIES */}
//                 <div className="mb-6">
//                   <p className="font-semibold mb-3">Amenities</p>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
//                     {[
//                       'Air Condition',
//                       'Elevator',
//                       'Garage',
//                       'Parking',
//                       'WiFi',
//                       'Swimming Pool',
//                       'Pet Friendly',
//                       'Garden',
//                     ].map((a) => (
//                       <label key={a} className="flex items-center gap-2">
//                         <input type="checkbox" className="accent-red-600" />
//                         {a}
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* APPLY BUTTON */}
//                 <div className="flex justify-end">
//                   <button
//                     onClick={() => setShowAdvanced(false)}
//                     className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
//                   >
//                     Apply Filters
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* ================= RIGHT CAROUSEL ================= */}
//         <div className="hidden lg:block relative h-[480px] rounded-3xl overflow-hidden">
//           {images.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt="Home"
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                 i === currentImage ? 'opacity-100' : 'opacity-0'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   MapPin,
//   SlidersHorizontal,
//   ChevronDown,
// } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// export function HeroSection() {
//   const navigate = useNavigate();

//   const [activeTab, setActiveTab] = useState('rent');
//   const [showAdvanced, setShowAdvanced] = useState(false);
//   const [typeOpen, setTypeOpen] = useState(false);

//   const [price, setPrice] = useState(20000);
//   const [area, setArea] = useState(1200);

//   const advancedRef = useRef(null);
//   const advancedBtnRef = useRef(null);

//   useEffect(() => {
//     function handleOutsideClick(e) {
//       if (
//         showAdvanced &&
//         advancedRef.current &&
//         !advancedRef.current.contains(e.target) &&
//         !advancedBtnRef.current.contains(e.target)
//       ) {
//         setShowAdvanced(false);
//       }
//     }
//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, [showAdvanced]);

//   const images = [
//     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
//     'https://images.unsplash.com/photo-1599423300746-b62533397364',
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((p) => (p + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const words = ['Perfectly', 'Your Life', 'Your Budget'];
//   const [wordIndex, setWordIndex] = useState(0);
//   const [text, setText] = useState('');
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const word = words[wordIndex];
//     const speed = deleting ? 60 : 120;

//     const timer = setTimeout(() => {
//       if (!deleting) {
//         setText(word.slice(0, text.length + 1));
//         if (text === word) setTimeout(() => setDeleting(true), 900);
//       } else {
//         setText(word.slice(0, text.length - 1));
//         if (text.length === 1) {
//           setDeleting(false);
//           setWordIndex((p) => (p + 1) % words.length);
//         }
//       }
//     }, speed);

//     return () => clearTimeout(timer);
//   }, [text, deleting, wordIndex]);

//   return (
//     <section className="relative bg-[#F6F6F7] overflow-hidden">
//       <div className="max-w-7xl float-end grid grid-cols-1 lg:grid-cols-2">

//         {/* ================= LEFT ================= */}
//         <div className="px-6 py-20 relative z-20">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//             Find A Home That <br />
//             <span className="text-red-600">
//               Fits {text}
//               <span className="ml-1 border-r-2 border-red-600 animate-pulse" />
//             </span>
//           </h1>

//           <p className="text-lg text-gray-600 max-w-xl mb-8">
//             We are a real estate agency that will help you find the best
//             residence you dream of.
//           </p>

//           <div className="flex mb-4">
//             {['buy','rent', 'pg', 'commercial','plot'].map((t) => (
//               <button
//                 key={t}
//                 onClick={() => setActiveTab(t)}
//                 className={`px-6 py-3 font-semibold border ${
//                   activeTab === t
//                     ? 'bg-white shadow text-gray-900'
//                     : 'bg-gray-100 text-gray-500'
//                 }`}
//               >
//                 {t.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           <div className="bg-white shadow-xl rounded-2xl p-4 flex flex-col lg:flex-row gap-4 w-full lg:w-[130%]">
//             <div className="relative w-full">
//               <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search Location"
//                 className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"
//               />
//             </div>

//             <div className="relative w-full">
//               <select
//                 onFocus={() => setTypeOpen(true)}
//                 onBlur={() => setTypeOpen(false)}
//                 className="w-full px-4 py-3 border rounded-lg appearance-none focus:ring-2 focus:ring-red-500"
//               >
//                 <option>All Types</option>
//                 <option>Apartment</option>
//                 <option>Villa</option>
//                 <option>Studio</option>
//                 <option>House</option>
//               </select>
//               <ChevronDown
//                 className={`absolute right-3 top-3 transition-transform ${
//                   typeOpen ? 'rotate-180' : ''
//                 }`}
//               />
//             </div>

//             <button
//               ref={advancedBtnRef}
//               onClick={() => setShowAdvanced((prev) => !prev)}
//               className="flex items-center gap-2 px-4 py-3 border rounded-lg text-gray-700"
//             >
//               <SlidersHorizontal size={18} /> Advanced
//             </button>

//             <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
//               Find Properties
//             </button>
//           </div>
//         </div>

//         {/* ================= RIGHT IMAGE (FULL HEIGHT / NO PADDING) ================= */}
//         <div className="hidden lg:block relative h-full min-h-[100vh]">
//           {images.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt="Home"
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                 i === currentImage ? 'opacity-100' : 'opacity-0'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import { motion, AnimatePresence } from 'framer-motion';
// import { MapPin, SlidersHorizontal, ChevronDown } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';

// export function HeroSection() {
//   const [activeTab, setActiveTab] = useState('rent');
//   const [showAdvanced, setShowAdvanced] = useState(false);
//   const [typeOpen, setTypeOpen] = useState(false);

//   const [price, setPrice] = useState(20000);
//   const [area, setArea] = useState(1200);
//   const [text, setText] = useState('');
//   const [deleting, setDeleting] = useState(false);
//   const [wordIndex, setWordIndex] = useState(0);

//   const advancedRef = useRef(null);
//   const advancedBtnRef = useRef(null);

//   useEffect(() => {
//     function handleOutsideClick(e) {
//       if (
//         showAdvanced &&
//         advancedRef.current &&
//         !advancedRef.current.contains(e.target) &&
//         !advancedBtnRef.current.contains(e.target)
//       ) {
//         setShowAdvanced(false);
//       }
//     }
//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, [showAdvanced]);

//   const images = [
//     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
//     'https://images.unsplash.com/photo-1599423300746-b62533397364',
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   const words = ['Perfectly', 'Your Life', 'Your Budget'];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((p) => (p + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);


//     useEffect(() => {
//     const word = words[wordIndex];
//     const speed = deleting ? 60 : 120;

//     const timer = setTimeout(() => {
//       if (!deleting) {
//         setText(word.slice(0, text.length + 1));
//         if (text === word) setTimeout(() => setDeleting(true), 900);
//       } else {
//         setText(word.slice(0, text.length - 1));
//         if (text.length === 1) {
//           setDeleting(false);
//           setWordIndex((p) => (p + 1) % words.length);
//         }
//       }
//     }, speed);

//     return () => clearTimeout(timer);
//   }, [text, deleting, wordIndex]);


//   return (
//     <section className="relative bg-[#F6F6F7] overflow-hidden min-h-screen">

//       {/* RIGHT IMAGE */}
//       <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2">
//         {images.map((img, i) => (
//           <img
//             key={i}
//             src={img}
//             alt="Home"
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               i === currentImage ? 'opacity-100' : 'opacity-0'
//             }`}
//           />
//         ))}
//       </div>

//       {/* LEFT CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//           Find A Home That <br />
//           <span className="ml-1 border-r-2 border-red-600  text-red-600">Fits {text}</span>
//         </h1>

//         <p className="text-lg text-gray-600 max-w-xl mb-8">
//           We are a real estate agency that will help you find the best residence you dream of.
//         </p>

//         {/* TABS */}
//         <div className="flex mb-4 flex-wrap">
//           {['buy','rent','pg','commercial','plot'].map((t) => (
//             <button
//               key={t}
//               onClick={() => setActiveTab(t)}
//               className={`px-5 py-2 font-semibold border ${
//                 activeTab === t ? 'bg-white shadow' : 'bg-gray-100'
//               }`}
//             >
//               {t.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* SEARCH BAR + ADVANCED */}
//         <div className="relative">
//           <div className="bg-white shadow-xl rounded-2xl p-4 flex flex-col lg:flex-row gap-4 flex-nowrap">

//             <div className="relative w-full min-w-0">
//               <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search Location"
//                 className="w-full pl-10 pr-4 py-3 border rounded-lg
//                 focus:outline-none focus:ring-0 focus:border-gray-300"
//               />
//             </div>

//             <div className="relative w-full min-w-0">
//               <select
//                 onFocus={() => setTypeOpen(true)}
//                 onBlur={() => setTypeOpen(false)}
//                 className="w-full px-4 py-3 border rounded-lg appearance-none
//                 focus:outline-none focus:ring-0 focus:border-gray-300"
//               >
//                 <option>All Types</option>
//                 <option>Apartment</option>
//                 <option>Villa</option>
//                 <option>Studio</option>
//                 <option>House</option>
//               </select>
//               <ChevronDown
//                 className={`absolute right-3 top-3 transition-transform ${
//                   typeOpen ? 'rotate-180' : ''
//                 }`}
//               />
//             </div>

//             {/* ADVANCED BUTTON */}
//             <button
//               ref={advancedBtnRef}
//               onClick={() => setShowAdvanced((p) => !p)}
//               className="flex items-center gap-2 px-4 py-3 border rounded-lg
//               whitespace-nowrap hover:bg-gray-50"
//             >
//               <SlidersHorizontal size={18} />
//               Advanced
//             </button>

//             <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
//               Find Properties
//             </button>
//           </div>

//           {/* ADVANCED POPUP */}
//           <AnimatePresence>
//             {showAdvanced && (
//               <motion.div
//                 ref={advancedRef}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute left-0 mt-4 w-full bg-white rounded-2xl shadow-2xl p-6 z-50"
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <p className="font-semibold mb-1">Price Range</p>
//                     <input
//                       type="range"
//                       min="0"
//                       max="40000"
//                       value={price}
//                       onChange={(e) => setPrice(e.target.value)}
//                       className="w-full accent-red-600"
//                     />
//                     <p className="text-red-600 text-sm">₹{price}</p>
//                   </div>

//                   <div>
//                     <p className="font-semibold mb-1">Area Range</p>
//                     <input
//                       type="range"
//                       min="0"
//                       max="2400"
//                       value={area}
//                       onChange={(e) => setArea(e.target.value)}
//                       className="w-full accent-red-600"
//                     />
//                     <p className="text-red-600 text-sm">{area} sqft</p>
//                   </div>
//                 </div>

//                 <div className="flex justify-end">
//                   <button
//                     onClick={() => setShowAdvanced(false)}
//                     className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
//                   >
//                     Apply Filters
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* LINKS */}
//         <div className="mt-4 text-sm text-gray-700">
//           <span className="font-semibold mr-2">What are you looking for:</span>
//           {['Apartment','Villa','Studio','House'].map((t) => (
//             <a key={t} href="#" className="mr-3 text-red-600 hover:underline">
//               {t}
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function HeroSection() {
  const [activeTab, setActiveTab] = useState('rent');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);

  const [price, setPrice] = useState(20000);
  const [area, setArea] = useState(1200);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const advancedRef = useRef(null);
  const advancedBtnRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (
        showAdvanced &&
        advancedRef.current &&
        !advancedRef.current.contains(e.target) &&
        !advancedBtnRef.current.contains(e.target)
      ) {
        setShowAdvanced(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [showAdvanced]);

  const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    'https://images.unsplash.com/photo-1599423300746-b62533397364',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const words = ['Perfectly', 'Your Life', 'Your Budget'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const word = words[wordIndex];
    const speed = deleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text === word) setTimeout(() => setDeleting(true), 900);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length === 1) {
          setDeleting(false);
          setWordIndex((p) => (p + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  return (
    <section className="relative bg-[#F6F6F7] overflow-hidden ">

      {/* RIGHT IMAGE */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Home"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Find A Home That <br />
          <span className="ml-1 border-r-2 border-red-600 text-red-600">
            Fits {text}
          </span>
        </h1>

        <p className="text-lg text-gray-600 max-w-xl mb-8">
          We are a real estate agency that will help you find the best residence you dream of.
        </p>

        {/* TABS */}
        <div className="flex mb-4 flex-wrap">
          {['buy','rent','pg','commercial','plot'].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-5 py-2 font-semibold border ${
                activeTab === t ? 'bg-white shadow' : 'bg-gray-100'
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* SEARCH BAR */}
        <div className="relative">
          <div className="bg-white border-black shadow-xl lg:w-[900px] rounded-2xl p-4 flex flex-col lg:flex-row gap-4">

            {/* SEARCH WIDTH FIXED */}
            <div className="relative w-full lg:w-[260px] ">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Location"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none"
              />
            </div>

            <div className="relative w-full lg:w-[220px]">
              <select
                onFocus={() => setTypeOpen(true)}
                onBlur={() => setTypeOpen(false)}
                className="w-full px-4 py-3 border rounded-lg appearance-none focus:outline-none"
              >
                <option>All Types</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Studio</option>
                <option>House</option>
              </select>
              <ChevronDown
                className={`absolute right-3 top-3 transition-transform ${
                  typeOpen ? 'rotate-180' : ''
                }`}
              />
            </div>

            <button
              ref={advancedBtnRef}
              onClick={() => setShowAdvanced((p) => !p)}
              className="flex items-center gap-2 px-4 py-3 border rounded-lg lg:w-[220px] whitespace-nowrap"
            >
              <SlidersHorizontal size={18} />
              Advanced
            </button>

            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
              Find Properties
            </button>
          </div>

          {/* ADVANCED POPUP FIXED FOR MOBILE */}
          <AnimatePresence>
            {showAdvanced && (
              <motion.div
                ref={advancedRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="
                  static lg:absolute
                  left-0 top-full
                  mt-4
                  w-full
                  lg:w-[900px]
                  bg-white
                  rounded-2xl
                  shadow-2xl
                  p-6
                  z-50
                "
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="font-semibold mb-1">Price Range</p>
                    <input
                      type="range"
                      min="0"
                      max="40000"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full accent-red-600"
                    />
                    <p className="text-red-600 text-sm">₹{price}</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Area Range</p>
                    <input
                      type="range"
                      min="0"
                      max="2400"
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
        <div className="mt-4 text-sm text-gray-700">
           <span className="font-semibold mr-2">What are you looking for:</span>
          {['Apartment','Villa','Studio','House'].map((t) => (
            <a key={t} href="#" className="mr-3 text-red-600 hover:underline">
              {t}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
