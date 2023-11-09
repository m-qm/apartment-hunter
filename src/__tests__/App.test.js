import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App.tsx';
import FilterForm from '../components/FilterForm/FilterForm.tsx';

describe('App component', () => {
  it('renders the component', () => {
    render(<App />);
    expect(screen.getByText('Apartment Hunter')).toBeInTheDocument();
  });

  it('filters apartments based on FilterForm', () => {
    const cities = ['Barcelona', 'Madrid', 'Valencia', 'Lisbon'];
    const apartments = [{
      name: "Historic Old Town Loft",
      availability: "2023-11-30",
      city: "Valencia",
      price: 4920,
      bedrooms: 1,
      bathrooms: 1,
      picture: "https://www.datocms-assets.com/31543/1658922625-03.jpg?auto=format&dpr=2&fit=clip&h=384&q=60",
  },
  {
      name: "Luxury Madrid Condo",
      availability: "2023-12-05",
      city: "Madrid",
      price: 3830,
      bedrooms: 3,
      bathrooms: 2,
      picture: "https://www.datocms-assets.com/31543/1653405821-15.jpg?auto=format&dpr=2&fit=clip&h=384&q=60",
    }];
    render(<FilterForm cities={cities} apartments={apartments} />);
  });
  
});
