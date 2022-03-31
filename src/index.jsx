import React from 'react';
import { render } from 'react-dom';
import './style.css';



import Header from './components/Header';
import MovieList from './components/MovieList';

import movies_data from './movies.js'

const App = () => (
  <>
    <Header />
    <MovieList movies={movies_data}/>
  </>
);

render(<App />, document.querySelector('#app'));
