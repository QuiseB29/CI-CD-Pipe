import { render, screen } from '@testing-library/react';
import { Location } from '../components/Location';
import React from 'react';


test('List Locations Correctly', () => {
  render(<Location />)
  const textElement = screen.getByText('London')
  expect(textElement).toBeInTheDocument()
});

