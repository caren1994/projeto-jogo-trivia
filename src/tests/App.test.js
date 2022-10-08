import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import  renderWithRouterAndRedux  from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('90% dos testes da tela de login',()=>{
it('inputs do componente login',()=>{
renderWithRouterAndRedux(<App/>);
const name = screen.getByTestId('input-player-name');
const email = screen.getByTestId('input-gravatar-email'); 

expect(name).toBeInTheDocument();
expect(email).toBeInTheDocument();

})
it('botao disable',()=>{
  renderWithRouterAndRedux(<App/>);
  const name = screen.getByTestId('input-player-name');
  const email = screen.getByTestId('input-gravatar-email'); 
const button = screen.getByRole('button', { name: /play/i });
const testemail = 'caren@oliveira.com';
    const testname = 'caren';
    userEvent.type(email, testemail);
    userEvent.type(name, testname);
    userEvent.click(button);
    expect(name.value).toBe(testname);
    expect(email.value).toBe(testemail);
    expect(button).toBeEnabled();

})
it('botao play',()=>{
  renderWithRouterAndRedux(<App/>);

const button = screen.getByRole('button', { name: /play/i });
userEvent.click(button);


expect(button).toBeInTheDocument();

})
it('botao configuração',()=>{
  const { history } = renderWithRouterAndRedux(<App/>);
  const buttonConfi = screen.getByRole('button', { name: /Configurações/i });
userEvent.click(buttonConfi);

const { location: { pathname } } = history;
expect(pathname).toBe('/configuration');

})
})