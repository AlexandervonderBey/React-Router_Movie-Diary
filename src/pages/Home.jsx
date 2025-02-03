import { useEffect, useState } from 'react';
import { getPopularMovies } from '../data/tmdb';
import MovieCard from '../components/MovieCard';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites')) || []
    );

    // Funktion zum Hinzufügen von Filmen zu den Favoriten
    const addToFavorites = (movie) => {
        setFavorites((prevFavorites) => {
            // Prüfen, ob der Film bereits in den Favoriten ist
            const isAlreadyFav = prevFavorites.some((fav) => fav.id === movie.id);
            if (isAlreadyFav) {
                return prevFavorites; // Kein Duplikat hinzufügen
            }
            const updatedFavorites = [...prevFavorites, movie];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                const popMovies = await getPopularMovies();
                console.log(popMovies);
                if (!ignore) {
                    setMovies(popMovies);
                }
            } catch (error) {
                console.error(error);
            }
        })();

        return () => {
            ignore = true;
        };
    }, []);
    return (
        <div className='mx-auto w-full'>
            <h1 className='text-center my-4 text-6xl'>React Movie Diary</h1>
            <div className='p-4 grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))]  gap-6 justify-center'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} addToFavorites={addToFavorites} />
                ))}
            </div>
        </div>
    );
};

export default Home;
