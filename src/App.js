import './App.scss';
import {Home, CustomNavBar, AboutView, SearchView, MovieView} from './components';
import { Routes, Route } from 'react-router-dom';
import {useEffect, useState} from 'react';
import secrets from './secrets.json'


function App() {

    const [searchResults,setSearchResults] = useState([])
    const [searchText, setSearchText] = useState('')
    const tmdbAPI = secrets.tmdb
    useEffect(() => {


        if (searchText) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${secrets.tmdb}&query=${searchText}&page=1`)
                .then(response => response.json())
                .then(data => {
                    setSearchResults(data.results)
                })
        }

    }, [searchText])


  return (
    <div className="App">
        <CustomNavBar searchText={searchText} setSearchText={setSearchText}/>
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<AboutView />} />
            <Route path="/movies/:id" element={<MovieView />} />
            <Route path="/search" element={<SearchView keyword={searchText}  searchResults={searchResults}/>} />
        </Routes>
    </div>
  );
}

export default App;
