import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useProperty } from '../contexts/PropertyContext';
import { Edit2, Trash2, CheckCircle, XCircle, PlusCircle } from 'lucide-react';
import { useState } from 'react';

export function ManagePropertiesPage() {
  const { user } = useAuth();
  const { properties, updateProperty, deleteProperty } = useProperty();
  const navigate = useNavigate();
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    city: '',
    price: '',
    propertyType: 'Flat' ,
    description: '',
  });

  if (!user || (user.role !== 'Agent' && user.role !== 'Owner')) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-4">Only Agents and Owners can manage properties</p>
          <button
            onClick={() => navigate('/')}
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const userProperties = properties.filter(p => p.ownerId === user.id);

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(price / 100000).toFixed(2)} Lac`;
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this property?')) {
      deleteProperty(id);
    }
  };

  const handleToggleVerification = (id, currentStatus) => {
    updateProperty(id, { verified: !currentStatus });
  };

  const startEdit = (property) => {
    setEditingId(property.id);
    setEditFormData({
      title: property.title,
      city: property.city,
      price: property.price.toString(),
      propertyType: property.propertyType,
      description: property.description,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const saveEdit = (id) => {
    const price = parseFloat(editFormData.price);
    if (isNaN(price) || price <= 0) {
      alert('Please enter a valid price');
      return;
    }

    updateProperty(id, {
      title: editFormData.title,
      city: editFormData.city,
      price: price,
      propertyType: editFormData.propertyType,
      description: editFormData.description,
    });
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Manage Properties</h1>
            <p className="text-gray-600 text-lg">
              You have {userProperties.length} properties listed
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/add-property')}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold flex items-center space-x-2"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Add New Property</span>
          </motion.button>
        </div>

        {userProperties.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-12 text-center"
          >
            <p className="text-gray-500 text-lg mb-6">You haven't listed any properties yet</p>
            <button
              onClick={() => navigate('/add-property')}
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
            >
              List Your First Property
            </button>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {userProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                {editingId === property.id ? (
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Property</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={editFormData.title}
                        onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Title"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          value={editFormData.city}
                          onChange={(e) => setEditFormData({ ...editFormData, city: e.target.value })}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="City"
                        />
                        <input
                          type="number"
                          value={editFormData.price}
                          onChange={(e) => setEditFormData({ ...editFormData, price: e.target.value })}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Price"
                        />
                      </div>
                      <select
                        value={editFormData.propertyType}
                        onChange={(e) => setEditFormData({ ...editFormData, propertyType: e.target.value  })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="Flat">Flat</option>
                        <option value="Villa">Villa</option>
                        <option value="Plot">Plot</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                      <textarea
                        value={editFormData.description}
                        onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                        placeholder="Description"
                      />
                      <div className="flex space-x-3">
                        <button
                          onClick={() => saveEdit(property.id)}
                          className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition font-semibold"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-64 h-48 md:h-auto">
                      <img
                        src={property.imageUrl}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {property.title}
                          </h3>
                          <p className="text-gray-600 mb-2">{property.city}</p>
                          <p className="text-2xl font-bold text-red-600">
                            {formatPrice(property.price)}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {property.verified ? (
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                              <CheckCircle className="w-3 h-3" />
                              <span>Verified</span>
                            </span>
                          ) : (
                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                              <XCircle className="w-3 h-3" />
                              <span>Not Verified</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>

                      <div className="flex flex-wrap gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => startEdit(property)}
                          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                        >
                          <Edit2 className="w-4 h-4" />
                          <span>Edit</span>
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleToggleVerification(property.id, property.verified)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition font-medium ${
                            property.verified
                              ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                              : 'bg-green-600 text-white hover:bg-green-700'
                          }`}
                        >
                          {property.verified ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                          <span>{property.verified ? 'Unverify' : 'Verify'}</span>
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleDelete(property.id)}
                          className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Delete</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
