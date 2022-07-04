import Calculator from '../../components/calculator/calculator.component';

import './calculator-page.styles.scss';

export default function CalculatorPage() {
  return (
    <section className="calculator-page">
      <h1 className="calculator-page__title">Let&apos;s do some math!</h1>
      <Calculator />
    </section>
  );
}
