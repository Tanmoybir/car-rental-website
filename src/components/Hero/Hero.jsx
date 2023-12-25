import { useTheme } from "../../hooks/useTheme";

const Hero = () => {
    const {mode} = useTheme()
    return (
        <div className="dark:bg-black dark:text-white duration-300 relative -z-20">
            <div className="container min-h-[620px] flex">
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
                    <div className="order-1 sm:order-2">
                        <img className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_2opx_6px_rgba(0,0,0,0.50)]" 
                        src={mode === 'dark'? "https://i.ibb.co/7p6CXf9/car-1.jpg" :
                            "https://i.ibb.co/WtXYQcK/car-3.jpg"
                            } alt="" />
                    </div>
                    <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
                        <p className="text-primary text-2xl font-serif">Effortless</p>
                        <h1 className="text-5xl lg:text-7xl font-bold font-serif">Car Rental</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut reiciendis inventore quas omnis molestias sequi vel itaque illum placeat, laboriosam magni at, tenetur alias rem vitae eveniet nisi voluptatem optio.</p>
                        <button className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;