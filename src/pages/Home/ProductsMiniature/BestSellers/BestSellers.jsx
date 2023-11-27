import img1 from '../../../../assets/home/ProductsMiniature/bestSeller/suspendisse-urna (2).jpg'
import img2 from '../../../../assets/home/ProductsMiniature/bestSeller/img2 (1).png'
import img3 from '../../../../assets/home/ProductsMiniature/bestSeller/chair.jpg'
import img4 from '../../../../assets/home/ProductsMiniature/bestSeller/sofa.jpg'
import img5 from '../../../../assets/home/ProductsMiniature/bestSeller/chair3.jpg'
import img6 from '../../../../assets/home/ProductsMiniature/bestSeller/table.jpg'
import Stars from '../../../../component/Shared/Stars/Stars';

const BestSellers = () => {
    const bestSellers = [
        {
            id: 1,
            title: "Suspendisse Urna",
            img: img1,
            reviews: 2.3,
            price: 145.00,
        },
        {
            id: 2,
            title: "Tools",
            img: img2,
            reviews: 3,
            price: 45.00,
        },
        {
            id: 3,
            title: "Easy Chair ",
            img: img3,
            reviews: 5,
            price: 335.00,
        },
        {
            id: 4,
            title: "Luxury Chair",
            img: img4,
            reviews: 5,
            price: 400.00,
        },
        {
            id: 5,
            title: "Chair",
            img: img5,
            reviews: 4,
            price: 99.00,
        },
        {
            id: 6,
            title: "Table",
            img: img6,
            reviews: 5,
            price: 225.00,
        },
    ]



    return (

        <div className=' grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {
                bestSellers.map((bestSeller) => <div
                    key={bestSeller.id}
                >
                    <div className='flex'>
                        <div className='h-32 w-32'>
                            <img src={bestSeller.img} alt="Suspendisse Urna" className='h-full w-full' />
                        </div>
                        <div className='m-5'>
                            <h1 className='text-xl font-serif font-semibold'>{bestSeller.title}</h1>
                            <Stars review={bestSeller.reviews}></Stars>
                            <p>${bestSeller.price}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default BestSellers;