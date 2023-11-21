import Banner from "./Banner/Banner";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import NewArrivals from "./NewArrivals/NewArrivals";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <NewArrivals></NewArrivals>
        </div>
    );
};

export default Home;