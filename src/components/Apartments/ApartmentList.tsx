import React from 'react';
import { Apartment } from './apartments'; // Import the Apartment type

interface ApartmentListProps {
  apartments: Apartment[];
}

const ApartmentList: React.FC<ApartmentListProps> = ({ apartments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {apartments.map((apartment, index) => (
        <div key={index} className="bg-white p-4 rounded-md shadow">
          <div className="mb-4">
            <img
              src={apartment.picture}
              alt={apartment.name}
              className="w-full h-60 object-cover rounded-md"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{apartment.name}</h3>
            <p>City: {apartment.city}</p>
          </div>
          <div className="flex justify-between">
             <div>
              <p>Bedrooms: {apartment.bedrooms}</p>
            </div>
            <div>
              <p>Bathrooms: {apartment.bathrooms}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p>Price: {apartment.price}</p>
            </div>
           
            <div>
              <p>Availability: {apartment.availability}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApartmentList;
