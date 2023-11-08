import React, { useState } from 'react';
import './styles/tailwind.css'; // Import Tailwind CSS
import ApartmentList from './components/Apartments/ApartmentList.tsx';
import FilterForm from './components/FilterForm/FilterForm.tsx';

import ResultCounter from './components/ResultCounter/ResultCounter.tsx';
import { apartments } from './components/Apartments/apartments.tsx';
import {
  isAvailableNextMonth,
  isAvailableNextWeek,
} from './utils/utils.js';

function App() {
  const [filteredApartments, setFilteredApartments] = useState(apartments);

  const cities = [...new Set(apartments.map((apartment) => apartment.city))];

  const handleFilter = (filters) => {
    const filteredResults = apartments.filter((apartment) => {
      return (
        (!filters.city || apartment.city === filters.city) &&
        (!filters.priceRange[1] || apartment.price <= filters.priceRange[1]) &&
        (!filters.priceRange[0] || apartment.price >= filters.priceRange[0]) &&
        (!filters.availableNextMonth || isAvailableNextMonth(apartment.availability)) &&
        (!filters.availableNextWeek || isAvailableNextWeek(apartment.availability))
      );
    });

    setFilteredApartments(filteredResults);
  };

  return (
    <div className="container mx-auto p-4 text-cozy-ochre bg-gray-100 body-font font-groteske">
      <h1 className="text-3xl font-bold mb-4">Apartment Hunter</h1>
      <FilterForm onFilter={handleFilter} cities={cities} apartments={apartments} />
      <ResultCounter filteredCount={filteredApartments.length} totalCount={apartments.length} />
      <ApartmentList apartments={filteredApartments} />
    </div>
  );
}

export default App;
