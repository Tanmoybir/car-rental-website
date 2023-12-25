import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = [
        {
            id: 1,
            link: '/',
            name: 'Home'
        },
        {
            id: 2,
            link: '/cars',
            name: 'Cars'
        },
        {
            id: 3,
            link: '/about',
            name: 'About'
        },
        {
            id: 4,
            link: '/booking',
            name: 'Booking'
        }
    ]
    return (
        <div>
            <nav className="flex justify-between">
                <div className="">
                    <h1>Cars Rental</h1>
                </div>
                <ul className="flex items-center gap-5">
                    {
                        navLinks.map(data => (
                            <li key={data.id}>
                                <NavLink
                                    to={data.link}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    {data.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;