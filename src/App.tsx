import React, { useEffect, useState } from 'react';
import './styles/tailwind.css'; // Import Tailwind CSS
import ApartmentList from './components/Apartments/ApartmentList.tsx';
import FilterForm from './components/FilterForm/FilterForm.tsx';
import Pagination from './components/Pagination/Pagination.tsx';

import ResultCounter from './components/ResultCounter/ResultCounter.tsx';
import { apartments } from './components/Apartments/apartments.tsx';
import {
  isAvailableNextMonth,
  isAvailableNextWeek,
} from './utils/utils.js';

function App() {
  const [filteredApartments, setFilteredApartments] = useState(apartments);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const apartmentsPerPage = 6;
  const indexOfLastApartment = currentPage * apartmentsPerPage;
  const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage;
  const currentApartments = filteredApartments.slice(indexOfFirstApartment, indexOfLastApartment);
  const cities = [...new Set(apartments.map((apartment) => apartment.city))];

  useEffect(() => {
    setCurrentPage(1);
    if(filteredApartments.length < apartmentsPerPage) {
      setTotalPages(1);
    }
    else {
      setTotalPages(Math.ceil(filteredApartments.length / apartmentsPerPage));
    }

  }, [filteredApartments]);

  const handleFilter = (filters: any) => {
    const filteredResults = apartments?.filter((apartment) => {
      return (
        (!filters.city || apartment.city === filters.city) &&
        (!filters.priceRange[1] || apartment.price <= filters.priceRange[1]) &&
        (!filters.priceRange[0] || apartment.price >= filters.priceRange[0]) &&
        // check is availablenext week or next month
        (filters.availableNextWeek
          ? isAvailableNextWeek(apartment.availability)
          : true) &&
        (filters.availableNextMonth
          ? isAvailableNextMonth(apartment.availability)
          : true)
        
      );
    });
  
    setFilteredApartments(filteredResults);
  };

  return (
    <div className="container mx-auto p-4 text-cozy-ochre bg-gray-100 body-font font-groteske">
      <h1 className="text-3xl font-bold mb-4">Apartment Hunter</h1>
      <FilterForm onFilter={handleFilter} cities={cities} apartments={apartments} />
      <ResultCounter filteredCount={filteredApartments.length} totalCount={apartments.length} />
      <ApartmentList apartments={currentApartments} />
      <Pagination currentPage={currentPage} totalPages={totalPages} 
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
