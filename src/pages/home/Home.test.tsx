import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home page should', () => {
  test('render correctly', () => {
    renderWithProviders(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const headingElement = screen.getByRole('heading', {
      level: 1,
      name: /password generator/i,
    });

    expect(headingElement).toBeInTheDocument();
  });
});
