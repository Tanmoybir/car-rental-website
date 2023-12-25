import { NavLink } from "react-router-dom";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
    const {themeChanced, mode} = useTheme()


    const navLinks = [
        {
            id: 1,
            link: '/',
            name: 'HOME'
        },
        {
            id: 2,
            link: '/cars',
            name: 'CARS'
        },
        {
            id: 3,
            link: '/about',
            name: 'ABOUT'
        },
        {
            id: 4,
            link: '/booking',
            name: 'BOOKING'
        }
    ]
    return (
        <nav className="shadow-md bg-white dark:bg-dark dark:text-white">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-3xl font-bold font-serif">
                        <h1>Cars Rental</h1>
                    </div>
                    {/* NavLinks */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-5">
                            {
                                navLinks.map(data => (
                                    <li className="py-4" key={data.id}>
                                        <NavLink
                                            to={data.link}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ?
                                                    "py-2 border-b-2 text-blue-00 border-blue-200 transition-colors duration-500 text-lg font-medium" :
                                                    "py-2 hover:border-b-2 hover:text-yellow-200 hover:border-yellow-200 transition-colors duration-500 text-lg font-medium"
                                            }
                                        >
                                            {data.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Mood */}
                    <div className="" onClick={themeChanced}>
                    {
                        mode === 'dark'? <IoMdSunny/> : <IoMdMoon/>
                    }
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;