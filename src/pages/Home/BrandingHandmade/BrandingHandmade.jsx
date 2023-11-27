import { Link } from 'react-router-dom';
import branding from '../../../assets/home/branding/banner31.jpg'
import handmade from '../../../assets/home/branding/banner32.jpg'

const BrandingHandmade = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:gap-4'>
            <div className='h-[450px] sm:h-[250px] overflow-hidden'>
                <img src={branding} alt="Branding" className='h-full w-full hover:scale-110 duration-700' />
                <div className='flex flex-row-reverse px-10'>
                    <div className='text-white absolute transform -translate-y-72 sm:-translate-y-44'>
                        <h1 className='text-4xl sm:text-xl font-serif font-bold'>BRANDING</h1>
                        <h1 className='text-xl sm:text-sm font-serif font-bold mb-10 sm:mb-5'>& DESIGN</h1>
                        <Link className='border-2 border-white text-white px-5 py-2 bg-transparent hover:bg-[#dec6ab] duration-700'>Shop Now</Link>
                    </div>
                </div>
            </div>

            <div className='h-[450px] sm:h-[250px] overflow-hidden'>
                <img src={handmade} alt="Branding" className='h-full w-full hover:scale-110 duration-700' />
                <div className=' px-10'>
                    <div className='text-white absolute transform -translate-y-72 sm:-translate-y-44'>
                        <h1 className='text-4xl sm:text-xl font-serif font-bold'>HANDMADE</h1>
                        <h1 className='text-xl font-serif font-bold mb-10 sm:mb-5'>Sell Up to 50 % Off</h1>
                        <Link className='border-2 border-white text-white px-5 py-2 bg-transparent hover:bg-[#dec6ab] duration-700'>Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandingHandmade;