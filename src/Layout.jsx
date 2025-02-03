import { Outlet, Link } from 'react-router';
const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Movie Diary</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/favorites" className="hover:underline">
                                Favorites
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='flex-grow'>
                <Outlet />
            </div>
            <footer>Here is the footer</footer>
        </div>
    );
};

export default Layout;
