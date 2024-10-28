// tests/unit/app.test.js
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // To mock the Router
import App from '../../src/App';

describe('App Component', () => {
  test('renders Dashboard link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Photo Editor link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/Photo Editor/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Video Editor link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/Video Editor/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Clothing Change link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/Clothing Change/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Clothing Display link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/Clothing Display/i);
    expect(linkElement).toBeInTheDocument();
  });
});
