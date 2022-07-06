import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  it('should render correctly with the Homepage content', () => {
    const component = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with the Calculator Page content', () => {
    const calculatorRoute = '/calculator';
    const component = render(
      <MemoryRouter initialEntries={[calculatorRoute]}>
        <App />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with the Quote Page content', () => {
    const quoteRoute = '/quote';
    const component = render(
      <MemoryRouter initialEntries={[quoteRoute]}>
        <App />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
