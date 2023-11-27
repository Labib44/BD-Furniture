import Banner from "./Banner/Banner";
import BrandingHandmade from "./BrandingHandmade/BrandingHandmade";
import Brands from "./Brands/Brands";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import NewArrivals from "./NewArrivals/NewArrivals";
import ProductsMiniature from "./ProductsMiniature/ProductsMiniature";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <BrandingHandmade></BrandingHandmade>
            <NewArrivals></NewArrivals>
            <ProductsMiniature></ProductsMiniature>
            <Brands></Brands>
        </div>
    );
};

export default Home;