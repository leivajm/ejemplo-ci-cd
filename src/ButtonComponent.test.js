import { render, screen, fireEvent } from '@testing-library/react';
import ButtonComponent from './ButtonComponent';

test('Mensaje que se muestra al dar click', () => {
  render(<ButtonComponent />);
  
  const buttonElement = screen.getByText(/click/i);
  fireEvent.click(buttonElement);
  
  const messageElement = screen.getByText(/Usted dio click al boton!/i);
  expect(messageElement).toBeInTheDocument();
});
