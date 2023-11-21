
import { Swiper, SwiperSlide } from 'swiper/react';

import './Banner.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import bannerImg from '../../../assets/banner/slider31-96.jpg'
import bannerImg1 from '../../../assets/banner/slider32-916.jpg'
import bannerImg2 from '../../../assets/banner/slider33-550.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=""
            >
               

                <SwiperSlide>
                    <div className=' relative text-white'>
                        <img src={bannerImg1} alt="" className='w-full'/>
                        <div className='p-5 absolute transform -translate-y-1/2 top-1/2 right-2/4'>
                            <p className='text-3xl md:text-2xl sm:text-sm font-serif'>New Style</p>
                            <h1 className='text-5xl md:text-2xl sm:text-xl font-bold font-serif my-3'>New Arrivals</h1>
                            <p className='sm:text-sm font-serif mb-10 sm:hidden'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            <Link className='border-2 border-white text-white px-5 py-2 bg-transparent hover:bg-[#dec6ab] duration-700 mt-10'>Shop Now</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative '>
                        <img src={bannerImg} alt="" className='w-full'/>
                        <div className='p-5 absolute transform -translate-y-1/2 top-1/2 right-2/4'>
                            <p className='text-3xl md:text-2xl sm:text-sm font-serif'>New Style</p>
                            <h1 className='text-5xl md:text-2xl sm:text-xl font-bold font-serif my-3'>New Arrivals</h1>
                            <p className='sm:text-sm font-serif mb-10 sm:hidden'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            <Link className='border-2 border-gray-700 text-gray-700 px-5 py-2 bg-transparent hover:bg-[#dec6ab] duration-700'>Shop Now</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative '>
                        <img src={bannerImg2} alt="" className='w-full'/>
                        <div className='p-5 absolute transform -translate-y-1/2 top-1/2 left-2/4'>
                            <p className='text-3xl md:text-2xl sm:text-sm font-serif'>New Style</p>
                            <h1 className='text-5xl md:text-2xl sm:text-xl font-bold font-serif my-3'>New Arrivals</h1>
                            <p className='sm:text-sm font-serif mb-10 sm:hidden'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            <Link className='border-2 border-gray-700 text-gray-700 px-5 py-2 bg-transparent hover:bg-[#dec6ab] duration-700'>Shop Now</Link>
                        </div>
                    </div>
                </SwiperSlide>
                


            </Swiper>
        </div>
    );
};

export default Banner;