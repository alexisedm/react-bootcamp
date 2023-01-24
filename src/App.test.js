import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('prueba 1 learn react /', async () => {
  const { getByText } = render(<App />);

  const label = getByText('Holjdsjjda');
  await expect(label).toBeInTheDocument();
});
