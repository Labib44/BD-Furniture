import img1 from '../../../assets/home/featuredProducts/banner21.jpg'
import img2 from '../../../assets/home/featuredProducts/viverra-non-semper.jpg'
import img3 from '../../../assets/home/featuredProducts/one-shoulder-bow-top (7).jpg'
import img4 from '../../../assets/home/featuredProducts/banner22.jpg'
import img5 from '../../../assets/home/featuredProducts/posuere-a-pede (3).jpg'
import img6 from '../../../assets/home/featuredProducts/tuer-adipiscing-elit (3).jpg'

const FeaturedProducts = () => {
    return (
        <div className=" container mx-auto my-20 p-5">
            <h1 className="text-center text-3xl font-serif font-bold mt-10">FEATURED PRODUCTS</h1>
            <p className="text-center p-5 mb-5">Lorem ipsuet adipisicing elit, sed det adipisicing elit, sed sed det adipisicing elit.</p>

            <div className="grid grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5">
                <div className=''>
                    <img src={img1} alt="" className='w-full' />
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                    <div>
                        <img src={img2} alt="" className=' h-[370px] w-full' />
                        <h1 className='text-xl font-bold p-3'>Table Lamps</h1>
                        <div className='flex justify-between mx-3'>
                            <p className=''>$130.00 <span className='pl-5 line-through'>$140.00</span></p>
                            <p className=''>Review: 4.3</p>
                        </div>
                    </div>
                    <div>
                        <img src={img3} alt="" className='h-[370px] w-full' />
                        <h1 className='text-xl font-bold p-3'>Chairs</h1>
                        <div className='flex justify-between mx-3'>
                            <p className=''>$230.00 <span className='pl-5 line-through'>$270.00</span></p>
                            <p className=''>Review: 4.3</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1  md:grid-cols-1 sm:grid-cols-1 gap-5 mt-5">

                <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                    <div>
                        <img src={img5} alt="" className=' h-[370px] w-full' />
                        <h1 className='text-xl font-bold p-3'>Table Lamps</h1>
                        <div className='flex justify-between mx-3'>
                            <p className=''>$130.00</p>
                            <p className=''>Review: 4.3</p>
                        </div>
                    </div>
                    <div>
                        <img src={img6} alt="" className='h-[370px] w-full' />
                        <h1 className='text-xl font-bold p-3'>Chairs</h1>
                        <div className='flex justify-between mx-3'>
                            <p className=''>$230.00</p>
                            <p className=''>Review: 4.3</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img src={img4} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;