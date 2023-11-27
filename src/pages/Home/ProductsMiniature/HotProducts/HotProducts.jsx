import Stars from "../../../../component/Shared/Stars/Stars";
import img1 from "../../../../assets/home/ProductsMiniature/hotProducts/bed-table.jpg"
import img2 from "../../../../assets/home/ProductsMiniature/hotProducts/Wooden Luxury Divan.jpg"
import img3 from "../../../../assets/home/ProductsMiniature/hotProducts/tv.jpg"
import img4 from "../../../../assets/home/ProductsMiniature/hotProducts/Oven Shelf.jpg"
import img5 from "../../../../assets/home/ProductsMiniature/hotProducts/Display Rack.jpg"
import img6 from "../../../../assets/home/ProductsMiniature/hotProducts/easy-stool.jpg"

const HotProducts = () => {
    const hotProducts = [
        {
            id: 1,
            title: "Bed Side Table",
            img: img1,
            reviews: 2,
            price: 145.00,
        },
        {
            id: 2,
            title: "Wooden Luxury Divan",
            img: img2,
            reviews: 1,
            price: 45.00,
        },
        {
            id: 3,
            title: "TV Trolley",
            img: img3,
            reviews: 3,
            price: 335.00,
        },
        {
            id: 4,
            title: "Oven Shelf",
            img: img4,
            reviews: 2,
            price: 400.00,
        },
        {
            id: 5,
            title: " Display Rack",
            img: img5,
            reviews: 1,
            price: 99.00,
        },
        {
            id: 6,
            title: "Easy Stool",
            img: img6,
            reviews: 3,
            price: 225.00,
        },
    ]
    return (
        <div className=' grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {
                hotProducts.map((hotProduct) => <div
                    key={hotProduct.id}
                >
                    <div className='flex'>
                        <div className='h-32 w-32'>
                            <img src={hotProduct.img} alt="Suspendisse Urna" className='h-full w-full' />
                        </div>
                        <div className='m-5'>
                            <h1 className='text-xl font-serif font-semibold'>{hotProduct.title}</h1>
                            <Stars review={hotProduct.reviews}></Stars>
                            <p>${hotProduct.price}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default HotProducts;