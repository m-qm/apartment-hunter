import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FilterForm from '../components/FilterForm/FilterForm';

const mockOnFilter = jest.fn();
const mockCities = ['Madrid', 'Barcelona', 'Lisbon'];
const mockApartments = [
  {
    name: 'Cozy Beachfront Apartment',
    availability: '2023-11-01',
    city: 'Madrid',
    price: 3000,
    bedrooms: 2,
    bathrooms: 2,
    picture:
      'https://www.datocms-assets.com/31543/1698745653-02.jpg?auto=format&dpr=2&fit=clip&h=384&q=60',
  },
  {
    name: 'Downtown Penthouse',
    availability: '2023-11-30',
    city: 'Lisbon',
    price: 2790,
    bedrooms: 3,
    bathrooms: 2,
    picture:
      'https://www.datocms-assets.com/31543/1693827928-07.jpg?auto=format&dpr=2&fit=clip&h=384&q=60',
  },
];

beforeEach(() => {
  render(
    <FilterForm onFilter={mockOnFilter} cities={mockCities} apartments={mockApartments} />
  );
});

it('renders the component with default values', () => {
  expect(screen.getByText('Filter Apartments')).toBeInTheDocument();
  expect(screen.getByText('City:')).toBeInTheDocument();
  expect(screen.getByText('Price Range:')).toBeInTheDocument();
  expect(screen.getByText('Available Next Month')).toBeInTheDocument();
  expect(screen.getByText('Available Next Week')).toBeInTheDocument();
  expect(screen.getByText('Apply Filters')).toBeInTheDocument();
});
