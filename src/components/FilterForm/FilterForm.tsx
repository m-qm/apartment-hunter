import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Apartment } from '../Apartments/apartments';

interface FilterFormProps {
  onFilter: (filters: FilterCriteria) => void;
  cities: string[];
  apartments: Apartment[];
}

interface FilterCriteria {
  city: string;
  priceRange: number[] | [number, number];
  availableNextMonth: boolean;
  availableNextWeek: boolean;
}

const FilterForm: React.FC<FilterFormProps> = ({ onFilter, cities, apartments }) => {
  
  const [filters, setFilters] = useState<FilterCriteria>({
    city: '',
    priceRange: [0, 0], // Initialize with [0, 0]
    availableNextMonth: false,
    availableNextWeek: false,
  });

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    const min = Math.min(...apartments.map((apartment) => apartment.price));
    const max = Math.max(...apartments.map((apartment) => apartment.price));

    setMinPrice(min);
    setMaxPrice(max);

    // Set the price range initially based on the min and max prices
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: [min, max],
    }));
  }, [apartments]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {    const { name, type } = event.target;

    if (type === 'checkbox') {
      const { checked } = event.target as HTMLInputElement;
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: checked,
      }));
    } else {
      const { value } = event.target as HTMLInputElement | HTMLSelectElement;
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

const handleCityFilter = (city: string) => {
  if (filters.city === city) {
    // If the clicked city is the same as the currently selected city, clear the city filter
    setFilters({ ...filters, city: '' });
  } else {
    // If the clicked city is different, set it as the new city filter
    setFilters({ ...filters, city });
  }
};

  const handlePriceRangeChange = (priceRange: any) => {
    setFilters({ ...filters, priceRange });
  };

  const handleFilterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleFilterSubmit} className="bg-gray-200 p-4 rounded-md shadow">
      <h2 className="text-xl font-bold mb-2">Filter Apartments</h2>
      <div className="mb-2">
        <label>City:</label>
        <div className="flex">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => handleCityFilter(city)}
              className={`bg-outer_space-500 text-white py-1 px-2 rounded-lg mr-2 ${
                filters.city === city ? 'bg-outer_space-700' : ''
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="priceRange">Price Range:</label>

        <div className="flex justify-between">
          <div className="text-sm text-cozy-ochre">
            Min Price: {filters.priceRange[0]}
          </div>
          <div className="text-sm text-cozy-ochre">
            Max Price: {filters.priceRange[1]}
          </div>
        </div>
        <div className="mb-2">
        <Slider
          min={minPrice}
          max={maxPrice}
          value={filters.priceRange}
          onChange={handlePriceRangeChange}
          range
        />
        </div>
      </div>
      <div className="mb-2">
        <label>
          <input
            type="checkbox"
            name="availableNextMonth"
            checked={filters.availableNextMonth}
            onChange={handleFilterChange}
          />{' '}
          Available Next Month
        </label>
      </div>

      <div className="mb-2">
        <label>
          <input
            type="checkbox"
            name="availableNextWeek"
            checked={filters.availableNextWeek}
            onChange={handleFilterChange}
          />{' '}
          Available Next Week
        </label>
      </div>
      <div>
        <button type="submit" className="bg-bittersweet-500 text-white py-2 px-4 rounded-lg hover-bg-bittersweet-600">
          Apply Filters
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
