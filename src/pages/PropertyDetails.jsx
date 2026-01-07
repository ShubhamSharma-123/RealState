import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useProperty } from '../contexts/PropertyContext';
import { MapPin, Home, CheckCircle, XCircle, ArrowLeft, Phone, Mail } from 'lucide-react';

export function PropertyDetailsPage() {
  const { id } = useParams();
  const { getPropertyById } = useProperty();
  const navigate = useNavigate();
  const property = getPropertyById(id || '');

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Property not found</h2>
          <button
            onClick={() => navigate('/properties')}
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            Back to Properties
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Crore`;
    }
    return `₹${(price / 100000).toFixed(2)} Lac`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          onClick={() => navigate('/properties')}
          className="flex items-center space-x-2 text-gray-600 hover:text-red-600 mb-6 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Properties</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  {property.verified ? (
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Verified Property</span>
                    </div>
                  ) : (
                    <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                      <XCircle className="w-4 h-4" />
                      <span>Not Verified</span>
                    </div>
                  )}
                </div>
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-semibold">
                  {property.propertyType}
                </div>
              </div>

              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {property.title}
                </h1>

                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  <span className="text-lg">{property.city}</span>
                </div>

                <div className="mb-8">
                  <p className="text-4xl font-bold text-red-600 mb-2">
                    {formatPrice(property.price)}
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {property.description}
                  </p>
                </div>

                <div className="border-t border-gray-200 mt-6 pt-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Property Details</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Property Type</p>
                      <p className="font-semibold text-gray-900">{property.propertyType}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Location</p>
                      <p className="font-semibold text-gray-900">{property.city}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Status</p>
                      <p className="font-semibold text-gray-900">
                        {property.verified ? 'Verified' : 'Pending Verification'}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Listed By</p>
                      <p className="font-semibold text-gray-900">{property.ownerName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Owner</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Home className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Listed By</p>
                    <p className="font-semibold text-gray-900">{property.ownerName}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Owner</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white border-2 border-red-600 text-red-600 py-3 rounded-lg hover:bg-red-50 transition font-semibold flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Note:</span> Contact buttons are UI-only for this demo. Backend integration pending.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
