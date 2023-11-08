import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterForm from '../components/FilterForm/FilterForm';

describe('FilterForm component', () => {
  it('renders the component', () => {
    render(
      <FilterForm
        onFilter={() => {}}
        cities={['City1', 'City2']}
        apartments={[]}
      />
    );

    // Add your assertions here to check if the component is rendered correctly.
    // For example:
    expect(screen.getByText('Filter Apartments')).toBeInTheDocument();
  });

  it('handles city filter correctly', () => {
    // You can write test cases to check if the city filter works as expected.
    // For example, simulate a click on a city button and check if the filter is set.
    // Use fireEvent to simulate user interactions.
    render(
      <FilterForm
        onFilter={() => {}}
        cities={['City1', 'City2']}
        apartments={[]}
      />
    );

    const cityButton = screen.getByText('City1');
    fireEvent.click(cityButton);

    // Add assertions to check if the filter state is updated.
    // For example, expect that the city filter is set to 'City1'.

    const cityButton2 = screen.getByText('City2');
    fireEvent.click(cityButton2);
    


  });

  // Write more test cases for other filter options.
});
