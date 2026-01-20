// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { Home, Search, PlusCircle, ListChecks, LogOut, User } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useState } from 'react';

// export function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [showProfileMenu, setShowProfileMenu] = useState(false);

//   const handleLogout = () => {
//     logout();
//     setShowProfileMenu(false);
//     navigate('/');
//   };

//   const canManageProperties = user && (user.role === 'Agent' || user.role === 'Owner');

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center space-x-2">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center space-x-2"
//             >
//               <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
//                 <Home className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-2xl font-bold text-gray-900">
//                 Prime<span className="text-red-600">Estate</span>
//               </span>
//             </motion.div>
//           </Link>

//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/">
//               <motion.span
//                 whileHover={{ color: '#dc2626' }}
//                 className="text-gray-700 font-medium cursor-pointer"
//               >
//                 Home
//               </motion.span>
//             </Link>
//             <Link to="/properties">
//               <motion.span
//                 whileHover={{ color: '#dc2626' }}
//                 className="text-gray-700 font-medium cursor-pointer"
//               >
//                 Buy
//               </motion.span>
//             </Link>
//             <Link to="/properties">
//               <motion.span
//                 whileHover={{ color: '#dc2626' }}
//                 className="text-gray-700 font-medium cursor-pointer"
//               >
//                 Rent
//               </motion.span>
//             </Link>
//             {canManageProperties && (
//               <>
//                 <Link to="/add-property">
//                   <motion.span
//                     whileHover={{ color: '#dc2626' }}
//                     className="text-gray-700 font-medium cursor-pointer flex items-center space-x-1"
//                   >
//                     <PlusCircle className="w-4 h-4" />
//                     <span>Add Property</span>
//                   </motion.span>
//                 </Link>
//                 <Link to="/manage-properties">
//                   <motion.span
//                     whileHover={{ color: '#dc2626' }}
//                     className="text-gray-700 font-medium cursor-pointer flex items-center space-x-1"
//                   >
//                     <ListChecks className="w-4 h-4" />
//                     <span>Manage</span>
//                   </motion.span>
//                 </Link>
//               </>
//             )}
//           </div>

//           <div className="flex items-center space-x-4">
//             {user ? (
//               <div className="relative">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setShowProfileMenu(!showProfileMenu)}
//                   className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
//                 >
//                   <User className="w-4 h-4" />
//                   <span className="font-medium">{user.name}</span>
//                 </motion.button>
//                 {showProfileMenu && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
//                   >
//                     <div className="px-4 py-2 border-b border-gray-200">
//                       <p className="text-sm font-medium text-gray-900">{user.name}</p>
//                       <p className="text-xs text-gray-500">{user.role}</p>
//                     </div>
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
//                     >
//                       <LogOut className="w-4 h-4" />
//                       <span>Logout</span>
//                     </button>
//                   </motion.div>
//                 )}
//               </div>
//             ) : (
//               <div className="flex items-center space-x-3">
//                 <Link to="/login">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="text-gray-700 font-medium hover:text-red-600 transition"
//                   >
//                     Login
//                   </motion.button>
//                 </Link>
//                 <Link to="/register">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium"
//                   >
//                     Register
//                   </motion.button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }



import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Home, Search, PlusCircle, ListChecks, LogOut, User, Compass, Store } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import logo from '../assets/main-logo.webp'

export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    setShowMobileMenu(false);
    navigate('/');
  };

  const canManageProperties = user && (user.role === 'Agent' || user.role === 'Owner');

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="hidden md:block bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2"
              >
               
                <img src={logo} alt="Apna Awas Logo" className='h-12'/>
              </motion.div>
            </Link>

            <div className="flex items-center space-x-8">
              <Link to="/">
                <motion.span
                  whileHover={{ color: '#dc2626' }}
                  className="text-gray-700 font-medium cursor-pointer"
                >
                  Home
                </motion.span>
              </Link>
              <Link to="/about-us">
                <motion.span
                  whileHover={{ color: '#dc2626' }}
                  className="text-gray-700 font-medium cursor-pointer"
                >
                  About Us
                </motion.span>
              </Link>
              <Link to="/contact-us">
                <motion.span
                  whileHover={{ color: '#dc2626' }}
                  className="text-gray-700 font-medium cursor-pointer"
                >
                  Contact Us
                </motion.span>
              </Link>
              <Link to="/properties">
                <motion.span
                  whileHover={{ color: '#dc2626' }}
                  className="text-gray-700 font-medium cursor-pointer"
                >
                  Buy
                </motion.span>
              </Link>
              <Link to="/properties">
                <motion.span
                  whileHover={{ color: '#dc2626' }}
                  className="text-gray-700 font-medium cursor-pointer"
                >
                  Rent
                </motion.span>
              </Link>
              {canManageProperties && (
                <>
                  <Link to="/add-property">
                    <motion.span
                      whileHover={{ color: '#dc2626' }}
                      className="text-gray-700 font-medium cursor-pointer flex items-center space-x-1"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Add Property</span>
                    </motion.span>
                  </Link>
                  <Link to="/manage-properties">
                    <motion.span
                      whileHover={{ color: '#dc2626' }}
                      className="text-gray-700 font-medium cursor-pointer flex items-center space-x-1"
                    >
                      <ListChecks className="w-4 h-4" />
                      <span>Manage</span>
                    </motion.span>
                  </Link>
                </>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    <User className="w-4 h-4" />
                    <span className="font-medium hidden sm:inline">{user.name}</span>
                  </motion.button>
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                    >
                      <a href="/profile">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.role}</p>
                      </div>
                      </a>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link to="/login">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-700 font-medium hover:text-red-600 transition"
                    >
                      Login
                    </motion.button>
                  </Link>
                  <Link to="/register">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium"
                    >
                      Register
                    </motion.button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 pb-safe">
        <div className="flex justify-around items-center h-16">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg transition ${
                isActive('/') ? 'bg-red-100 text-red-600' : 'text-gray-600 hover:text-red-600'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Home</span>
            </motion.button>
          </Link>

          <Link to="/about-us">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg transition ${
                isActive('/about-us') ? 'bg-red-100 text-red-600' : 'text-gray-600 hover:text-red-600'
              }`}
            >
              <Store className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">About</span>
            </motion.button>
          </Link>

          <Link to="/contact-us">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg transition ${
                isActive('/contact-us') ? 'bg-red-100 text-red-600' : 'text-gray-600 hover:text-red-600'
              }`}
            >
              <Store className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Contact</span>
            </motion.button>
          </Link>

          <Link to="/properties">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg transition ${
                isActive('/properties') ? 'bg-red-100 text-red-600' : 'text-gray-600 hover:text-red-600'
              }`}
            >
              <Compass className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Explore</span>
            </motion.button>
          </Link>

          {canManageProperties && (
            <Link to="/add-property">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg transition ${
                  isActive('/add-property') ? 'bg-red-100 text-red-600' : 'text-gray-600 hover:text-red-600'
                }`}
              >
                <PlusCircle className="w-6 h-6" />
                <span className="text-xs font-medium mt-1">Add</span>
              </motion.button>
            </Link>
          )}

          {canManageProperties && (
            <Link to="/manage-properties">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg transition ${
                  isActive('/manage-properties') ? 'bg-red-100 text-red-600' : 'text-gray-600 hover:text-red-600'
                }`}
              >
                <ListChecks className="w-6 h-6" />
                <span className="text-xs font-medium mt-1">Manage</span>
              </motion.button>
            </Link>
          )}

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="flex flex-col items-center justify-center w-14 h-14 rounded-lg text-gray-600 hover:text-red-600 transition"
            >
              <User className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">{user ? 'Profile' : 'Login'}</span>
            </motion.button>

            {showMobileMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-16 right-0 w-56 bg-white rounded-lg shadow-2xl border border-gray-200"
              >
                {user ? (
                  <>
                    <a href="/profile">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{user.role}</p>
                    </div>
                    </a>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-red-50 flex items-center space-x-2 border-t border-gray-200"
                    >
                      <LogOut className="w-4 h-4 text-red-600" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <div className="p-3 space-y-2">
                    <Link to="/login" onClick={() => setShowMobileMenu(false)}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-center bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition font-medium text-sm"
                      >
                        Login
                      </motion.button>
                    </Link>
                    <Link to="/register" onClick={() => setShowMobileMenu(false)}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-medium text-sm"
                      >
                        Register
                      </motion.button>
                    </Link>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </nav>

      <div className="md:hidden h-16" >
        <img src={logo} alt="" className='h-16' />
        </div>
    </>
  );
}
