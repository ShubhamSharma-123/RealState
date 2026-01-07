import { motion } from 'framer-motion';
import { MapPin, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { Property } from '../contexts/PropertyContext';



export function PropertyCard({ property }) {
  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(price / 100000).toFixed(2)} Lac`;
  };

  return (
    <Link to={`/property/${property.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer"
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
          />
          <div className="absolute top-3 right-3">
            {property.verified ? (
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                <CheckCircle className="w-3 h-3" />
                <span>Verified</span>
              </div>
            ) : (
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                <XCircle className="w-3 h-3" />
                <span>Not Verified</span>
              </div>
            )}
          </div>
          <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
            {property.propertyType}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
            {property.title}
          </h3>

          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1 text-red-600" />
            <span className="text-sm">{property.city}</span>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-red-600">
              {formatPrice(property.price)}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm text-red-600 font-semibold hover:text-red-700"
            >
              View Details →
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
