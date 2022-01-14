import './App.scss';
import {Home, CustomNavBar, AboutView, SearchView} from './components';
import { Routes, Route } from 'react-router-dom';
import {useEffect, useState} from 'react';


function App() {

    const [searchResults,setSearchResults] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {

        if (searchText) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=b1d8c9d11e81f0217735d4ad44a21c12&query=${searchText}&page=1`)
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
            <Route path="/search" element={<SearchView keyword={searchText}  searchResults={searchResults}/>} />
        </Routes>
    </div>
  );
}

export default App;
