import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state={}

  componentDidMount() { //ajax
    this._getMovies();
  }
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres = {movie.genres}
        synopsis = {movie.synopsis}/>
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()    //wait to finish
    this.setState({
      movies
    })
  }
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err)) //error 가 있다면
  }
  render() { //컴포넌트가 보여주는 기능? 모든 컴포넌트는 render을 포함하고 있음
const { movies } = this.state;
    return (
      <div className={movies ? "App":"App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
