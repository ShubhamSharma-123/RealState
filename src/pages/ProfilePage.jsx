// import { motion } from "framer-motion";
// import {
//   User,
//   Mail,
//   Phone,
//   ShieldCheck,
//   Home,
//   LogOut,
//   Edit,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export function ProfilePage({ user, handleLogout }) {
//   // fallback demo user (in case props not passed)
//   const profile = user || {
//     name: "Rahul Sharma",
//     email: "rahul@example.com",
//     phone: "+91 98765 43210",
//     role: "Agent",
//   };

//   return (
//     <section className="min-h-screen bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-10"
//         >
//           <h1 className="text-3xl font-bold text-gray-900">
//             My Profile
//           </h1>
//           <p className="text-gray-600 mt-1">
//             Manage your personal information and settings
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//           {/* ================= LEFT PROFILE CARD ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="bg-white rounded-2xl shadow-lg p-8"
//           >
//             {/* Avatar */}
//             <div className="flex flex-col items-center text-center">
//               <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mb-4">
//                 <User className="w-12 h-12 text-red-600" />
//               </div>

//               <h2 className="text-xl font-bold text-gray-900">
//                 {profile.name}
//               </h2>

//               <span className="mt-2 inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
//                 <ShieldCheck size={16} />
//                 {profile.role}
//               </span>
//             </div>

//             {/* Actions */}
//             <div className="mt-8 space-y-5">
//               <Link to="#">
//                 <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
//                   <Edit size={18} />
//                   Edit Profile
//                 </button>
//               </Link>

//               <Link to="#">
//                 <button className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">
//                   <Home size={18} />
//                   My Properties
//                 </button>
//               </Link>

//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-red-50 hover:text-red-600 transition"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </div>
//           </motion.div>

//           {/* ================= RIGHT DETAILS ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8"
//           >
//             <h3 className="text-xl font-bold text-gray-900 mb-6">
//               Personal Information
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Name */}
//               <div>
//                 <label className="text-sm text-gray-500">Full Name</label>
//                 <div className="mt-2 flex items-center gap-3 border rounded-lg px-4 py-3">
//                   <User className="text-gray-400" size={18} />
//                   <span className="text-gray-900 font-medium">
//                     {profile.name}
//                   </span>
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="text-sm text-gray-500">Email Address</label>
//                 <div className="mt-2 flex items-center gap-3 border rounded-lg px-4 py-3">
//                   <Mail className="text-gray-400" size={18} />
//                   <span className="text-gray-900 font-medium">
//                     {profile.email}
//                   </span>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="text-sm text-gray-500">Phone Number</label>
//                 <div className="mt-2 flex items-center gap-3 border rounded-lg px-4 py-3">
//                   <Phone className="text-gray-400" size={18} />
//                   <span className="text-gray-900 font-medium">
//                     {profile.phone}
//                   </span>
//                 </div>
//               </div>

//               {/* Role */}
//               <div>
//                 <label className="text-sm text-gray-500">Account Role</label>
//                 <div className="mt-2 flex items-center gap-3 border rounded-lg px-4 py-3">
//                   <ShieldCheck className="text-gray-400" size={18} />
//                   <span className="text-gray-900 font-medium">
//                     {profile.role}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Divider */}
//             <div className="my-10 border-t"></div>

//             {/* Info Box */}
//             <div className="bg-red-50 border border-red-100 rounded-xl p-6">
//               <p className="text-sm text-red-700 leading-relaxed">
//                 Your profile information is securely stored. If you need to
//                 update any details, click on <strong>Edit Profile</strong>.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Home,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= PAGE TITLE ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
        >
          My Profile
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* ================= SIDEBAR ================= */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md p-6 lg:col-span-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                <User className="text-red-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Rahul Sharma</p>
                <p className="text-sm text-gray-500">rahul@email.com</p>
              </div>
            </div>

            <nav className="space-y-3">
              <SidebarItem icon={User} label="Profile" active />
              <SidebarItem icon={Home} label="My Properties" />
              <SidebarItem icon={Heart} label="Saved Properties" />
              <SidebarItem icon={Settings} label="Settings" />
              <SidebarItem icon={LogOut} label="Logout" />
            </nav>
          </motion.aside>

          {/* ================= MAIN CONTENT ================= */}
          <motion.main
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <InputField icon={User} label="Full Name" value="Rahul Sharma" />
              <InputField icon={Mail} label="Email Address" value="rahul@email.com" />
              <InputField icon={Phone} label="Phone Number" value="+91 98765 43210" />
              <InputField icon={MapPin} label="City" value="Jaipur, Rajasthan" />

            </div>

            {/* ================= BUTTON ================= */}
            <div className="mt-8">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Update Profile
              </button>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SidebarItem({ icon: Icon, label, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition
        ${
          active
            ? "bg-red-50 text-red-600"
            : "text-gray-700 hover:bg-gray-100"
        }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}

function InputField({ icon: Icon, label, value }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <Icon
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          defaultValue={value}
          className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
        />
      </div>
    </div>
  );
}
