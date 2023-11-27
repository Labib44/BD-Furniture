import Stars from "../../../../component/Shared/Stars/Stars";
import img1 from "../../../../assets/home/ProductsMiniature/topRates/chair.jpg"
import img2 from "../../../../assets/home/ProductsMiniature/topRates/chair1.jpg"
import img3 from "../../../../assets/home/ProductsMiniature/topRates/chair2.jpg"
import img4 from "../../../../assets/home/ProductsMiniature/topRates/suspendisse-urna (3).jpg"
import img5 from "../../../../assets/home/ProductsMiniature/topRates/viverra-non-semper (5).jpg"
import img6 from "../../../../assets/home/ProductsMiniature/topRates/viverra-non-semper.jpg"

const TopRates = () => {
    const topRates = [
        {
            id: 1,
            title: "Chair",
            img: img1,
            reviews: 3.5,
            price: 145.00,
        },
        {
            id: 2,
            title: "Chair",
            img: img2,
            reviews: 5,
            price: 45.00,
        },
        {
            id: 3,
            title: "Chair",
            img: img3,
            reviews: 4.5,
            price: 335.00,
        },
        {
            id: 4,
            title: "Suspendisse Urna",
            img: img4,
            reviews: 5,
            price: 400.00,
        },
        {
            id: 5,
            title: "Viverra Non Semper",
            img: img5,
            reviews: 4.5,
            price: 99.00,
        },
        {
            id: 6,
            title: "Viverra Non Semper",
            img: img6,
            reviews: 3.5,
            price: 225.00,
        },
    ]
    return (
        <div className=' grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {
                topRates.map((topRate) => <div
                    key={topRate.id}
                >
                    <div className='flex'>
                        <div className='h-32 w-32'>
                            <img src={topRate.img} alt="Suspendisse Urna" className='h-full w-full' />
                        </div>
                        <div className='m-5'>
                            <h1 className='text-xl font-serif font-semibold'>{topRate.title}</h1>
                            <Stars review={topRate.reviews}></Stars>
                            <p>${topRate.price}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default TopRates;