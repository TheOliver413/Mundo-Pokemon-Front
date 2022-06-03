import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import LandingPage from './components/LandingPage';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Pokemons from './components/Pokemons/Pokemons';



configure({ adapter: new Adapter() });


describe('App', () => {
    let store
    const middlewares = []
    const mockStore = configureStore(middlewares);
  
    beforeEach(() => {
      store = mockStore([]);
    });

    describe('The component Landing Page should be render on the route /', () => {
        it('Debería renderizarse en la ruta "/"', () => {
            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/']}>
                        <App />
                    </MemoryRouter>
                </Provider>
            );
            expect(wrapper.find(LandingPage)).toHaveLength(1);
        })
        it('THe component pokemons must be render on the route"/pokemons")', () => {
            const wrapper = mount(
                <Provider store={store}>
                  <MemoryRouter initialEntries={[ '/pokemon' ]}>
                    <App />
                  </MemoryRouter>
                </Provider>
            );
              expect(wrapper.find(Pokemons)).toHaveLength(0);
          });
    })
})