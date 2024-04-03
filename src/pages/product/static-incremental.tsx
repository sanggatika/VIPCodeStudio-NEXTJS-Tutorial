import ProductView from "@/views/Product";
import { ProductType } from "@/types/product.type";

const StaticIncrementalProductPage = (props:{products:ProductType[]}) => {
    const { products } = props

    return (
        <div>
            <ProductView products={products} />
        </div>  
    );
}

export default StaticIncrementalProductPage;

export async function getStaticProps() {
    // fetch data
    const res = await fetch("http://localhost:3000/api/product");
    const response = await res.json();
    
    // console.log(response);

    return {
        props: {
            products: response.data
        },
        // Incremental Static Regeneration
        // revalidate: 10
    }
}