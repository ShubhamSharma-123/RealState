import { createContext, useContext, useState, ReactNode } from 'react';



const PropertyContext = createContext(undefined);

const dummyProperties = [
  {
    id: '1',
    title: 'Luxurious 3BHK Apartment in Prime Location',
    city: 'Mumbai',
    price: 12500000,
    propertyType: 'Flat',
    description: 'Spacious 3BHK apartment with modern amenities, parking, and 24/7 security. Perfect for families looking for comfort and convenience.',
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    verified: true,
    ownerId: '2',
    ownerName: 'Sarah Agent',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Modern Villa with Swimming Pool',
    city: 'Bangalore',
    price: 28000000,
    propertyType: 'Villa',
    description: 'Stunning 4BHK villa with private swimming pool, garden, and premium interiors. Located in a gated community with world-class facilities.',
    imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    verified: true,
    ownerId: '3',
    ownerName: 'Mike Owner',
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '3',
    title: 'Commercial Plot in Business District',
    city: 'Delhi',
    price: 45000000,
    propertyType: 'Plot',
    description: 'Prime commercial plot in the heart of business district. Ideal for building office complexes or commercial establishments.',
    imageUrl: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800',
    verified: false,
    ownerId: '2',
    ownerName: 'Sarah Agent',
    createdAt: new Date('2024-02-01'),
  },
  {
    id: '4',
    title: 'Cozy 2BHK Flat Near Metro Station',
    city: 'Pune',
    price: 6500000,
    propertyType: 'Flat',
    description: 'Well-maintained 2BHK flat near metro station. Perfect for working professionals. Easy access to IT parks and shopping centers.',
    imageUrl: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    verified: false,
    ownerId: '3',
    ownerName: 'Mike Owner',
    createdAt: new Date('2024-02-10'),
  },
  {
    id: '5',
    title: 'Premium Commercial Office Space',
    city: 'Hyderabad',
    price: 18000000,
    propertyType: 'Commercial',
    description: 'Grade A commercial office space with modern infrastructure, high-speed elevators, and ample parking. Ready to move in.',
    imageUrl: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    verified: true,
    ownerId: '2',
    ownerName: 'Sarah Agent',
    createdAt: new Date('2024-02-15'),
  },
  {
    id: '6',
    title: 'Spacious 4BHK Penthouse with Terrace',
    city: 'Mumbai',
    price: 35000000,
    propertyType: 'Flat',
    description: 'Luxurious penthouse with private terrace, panoramic city views, and premium fittings. Experience luxury living at its finest.',
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    verified: true,
    ownerId: '3',
    ownerName: 'Mike Owner',
    createdAt: new Date('2024-02-20'),
  },
];

export function PropertyProvider({ children }) {
  const [properties, setProperties] = useState(dummyProperties);

  const addProperty = (property) => {
    const newProperty = {
      ...property,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setProperties([newProperty, ...properties]);
  };

  const updateProperty = (id, updatedData) => {
    setProperties(properties.map(p => p.id === id ? { ...p, ...updatedData } : p));
  };

  const deleteProperty = (id) => {
    setProperties(properties.filter(p => p.id !== id));
  };

  const getPropertyById = (id) => {
    return properties.find(p => p.id === id);
  };

  return (
    <PropertyContext.Provider value={{ properties, addProperty, updateProperty, deleteProperty, getPropertyById }}>
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperty() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
}
