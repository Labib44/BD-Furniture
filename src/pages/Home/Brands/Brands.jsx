import brandImg1 from '../../../assets/home/brands/4-fieldbrand.jpg'
import brandImg2 from '../../../assets/home/brands/5-fieldbrand.jpg'
import brandImg3 from '../../../assets/home/brands/6-fieldbrand.jpg'
import brandImg4 from '../../../assets/home/brands/7-fieldbrand.jpg'
import brandImg5 from '../../../assets/home/brands/8-fieldbrand.jpg'
import brandImg6 from '../../../assets/home/brands/9-fieldbrand.jpg'
import brandImg7 from '../../../assets/home/brands/10-fieldbrand.jpg'
import brandImg8 from '../../../assets/home/brands/3-fieldbrand.jpg'

import Accessories from '../../../assets/home/brands/14-0_thumb.jpg'
import Lifestyle from '../../../assets/home/brands/img1.jpg'
import Chairs from '../../../assets/home/brands/11-0_thumb.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';


const Brands = () => {

    const brandsData = [
        {
            id: 1,
            img: brandImg1,
        },
        {
            id: 2,
            img: brandImg2,
        },
        {
            id: 3,
            img: brandImg3,
        },
        {
            id: 4,
            img: brandImg4,
        },
        {
            id: 5,
            img: brandImg5,
        },
        {
            id: 6,
            img: brandImg6,
        },
        {
            id: 7,
            img: brandImg7,
        },
        {
            id: 8,
            img: brandImg8,
        },
        {
            id: 9,
            img: brandImg1,
        },
        {
            id: 10,
            img: brandImg2,
        },
        {
            id: 11,
            img: brandImg3,
        },
        {
            id: 12,
            img: brandImg4,
        },
        {
            id: 13,
            img: brandImg5,
        },
        {
            id: 14,
            img: brandImg6,
        },
        {
            id: 15,
            img: brandImg7,
        },
        {
            id: 16,
            img: brandImg8,
        },
    ]
    return (
        <div className="my-20 p-5 container mx-auto">
            <hr className='bg-gray-200 h-[2px] w-full mb-20' />
            <Swiper
                slidesPerView={8}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 7,

                    },
                }}

                modules={[FreeMode, Autoplay]}
                className="mySwiper"
            >

                {
                    brandsData.map((brandData) => <div
                        key={brandData.id}
                    >
                        <SwiperSlide><img src={brandData.img} alt="" /></SwiperSlide>
                    </div>)
                }
            </Swiper>
            <hr className='bg-gray-200 h-[2px] w-full mt-20' />



            <div className='mt-20 grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                <div className='h-[350px] w-[350px] sm:w-full relative  cursor-pointer '>
                    <img src={Accessories} alt="Accessories" className='w-full h-full' />
                    <div className='absolute transform -translate-y-1/2 top-1/2 left-1/4 bg-white bg-opacity-50 hover:bg-black hover:bg-opacity-50 hover:text-white duration-700'>
                        <h1 className='text-2xl font-serif font-bold p-3'>Accessories</h1>
                    </div>
                </div>
                <div className='h-[350px] w-[350px] sm:w-full  relative  cursor-pointer '>
                    <img src={Lifestyle} alt="Accessories" className='w-full h-full' />
                    <div className='absolute transform -translate-y-1/2 top-1/2 left-1/4 bg-white bg-opacity-50 hover:bg-black hover:bg-opacity-50 hover:text-white duration-700'>
                        <h1 className='text-2xl font-serif font-bold p-3'>Lifestyle</h1>
                    </div>
                </div>
                <div className='h-[350px] w-[350px] sm:w-full  relative  cursor-pointer '>
                    <img src={Chairs} alt="Accessories" className='w-full h-full' />
                    <div className='absolute transform -translate-y-1/2 top-1/2 left-1/3 bg-white bg-opacity-50 hover:bg-black hover:bg-opacity-50 hover:text-white duration-700'>
                        <h1 className='text-2xl font-serif font-bold p-3'>Chairs</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;