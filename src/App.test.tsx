import { screen } from '@testing-library/react';
import { renderWithProviders } from './utils/test-utils';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import App from './App';

describe('App component should', () => {
	test('check home route', () => {
		renderWithProviders(<App />);

		const headingElement = screen.getByRole('heading', {
			level: 1,
			name: /password generator/i,
		});

		expect(headingElement).toBeInTheDocument();
	});

	test('check to show error page on nonexisting page', () => {
		const redirecttobadroute = '/bad/lost';
		renderWithProviders(
			<MemoryRouter initialEntries={[redirecttobadroute]}>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='*'
						element={<Error />}
					/>
				</Routes>
			</MemoryRouter>
		);

		expect(
			screen.getByRole('heading', {
				level: 1,
			})
		).toBeDefined();
	});
});
