import './App.scss';
import {Home, CustomNavBar, AboutView, SearchView} from './components';
import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';


function App() {

    const [searchResults,setSearchResults] = useState([])
    const [searchText, setSearchText] = useState('')


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
