import { BrowserRouter, Routes, Route } from 'react-router';
import { useState } from 'react'; 
import Home from './pages/Home';
import Details from './pages/Details';
import Layout from './Layout';
import Favorites from './pages/Favorites';


const App = () => {
    // ✅ Favorites im App-State verwalten
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites')) || []
    );

    // ✅ Funktion zum Hinzufügen zu Favoriten
    const addToFavorites = (movie) => {
        setFavorites((prevFavorites) => {
            const isAlreadyFav = prevFavorites.some((fav) => fav.id === movie.id);
            if (isAlreadyFav) return prevFavorites; // Falls schon vorhanden, abbrechen

            const updatedFavorites = [...prevFavorites, movie];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // In localStorage speichern
            return updatedFavorites;
        });
    };
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}> 
                    <Route index element={<Home addToFavorites={addToFavorites} />} />
                    <Route path='details/:id' element={<Details />} />
                    <Route path="favorites" element={<Favorites />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
