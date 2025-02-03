import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <div className='mx-auto w-full'>
            <h1 className='text-center my-4 text-6xl'>My Favorites</h1>
            <div className='p-4 grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))]  gap-6 justify-center'>
                {favorites.length > 0 ? (
                    favorites.map((movie) => <MovieCard key={movie.id} {...movie} />)
                ) : (
                    <p className='text-center text-2xl'>No favorites added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;