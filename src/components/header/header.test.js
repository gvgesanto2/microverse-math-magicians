import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from './header.component';

let component;

describe('Header component', () => {
  beforeEach(() => {
    component = render(<Header />, { wrapper: BrowserRouter });
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should navigate to the homepage when clicking the header\'s logo', () => {
    const LogoLink = screen.getByRole('link', { name: /math magician/i });

    userEvent.click(LogoLink);

    expect(window.location.pathname).toBe('/');
  });

  it('should navigate to the homepage when clicking the home navigation link', () => {
    const HomeNavLink = screen.getByRole('link', { name: 'home' });

    userEvent.click(HomeNavLink);

    expect(window.location.pathname).toBe('/');
  });

  it('should navigate to the calculator page when clicking the calculator navigation link', () => {
    const CalculatorNavLink = screen.getByRole('link', { name: 'calculator' });

    userEvent.click(CalculatorNavLink);

    expect(window.location.pathname).toBe('/calculator');
  });

  it('should navigate to the quote page when clicking the quote navigation link', () => {
    const QuoteNavLink = screen.getByRole('link', { name: 'quote' });

    userEvent.click(QuoteNavLink);

    expect(window.location.pathname).toBe('/quote');
  });
});
