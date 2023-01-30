// import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithProvider from '../helpers/renderWithProvider';

describe('Sequência de testes relacionadas à página <App />', () => {
  test('Verifica se os elementos do componente <Footer /> são renderizados na página', () => {
    // Renderizar a página que o componente se encontra
    renderWithProvider(<App />);

    // Capturar os elementos da tela
    const textInput = screen.getByRole('textbox');
    const filterButton = screen.getByRole('button', {
      name: /filtrar/i
    });
    const radioButton = screen.getByRole('radio', {
      name: /asc/i
    });
    const orderButton = screen.getByRole('button', {
      name: /ordenar/i
    });
    
    // Verificar os valores, a existência, etc desses elementos da tela
    expect(textInput).toBeInTheDocument();
    userEvent.click(filterButton);

    const excludeAllFilters = screen.getByRole('button', {  name: /excluir todos/i})
    userEvent.click(excludeAllFilters);
  });
});


