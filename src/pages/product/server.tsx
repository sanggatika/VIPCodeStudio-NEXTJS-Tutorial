import ProductView from "@/views/Product";
import { ProductType } from "@/types/product.type";

const ServerProductPaget = (props:{products:ProductType[]}) => {
    const { products } = props

    return (
        <div>
            <ProductView products={products} />
        </div>  
    );
}

export default ServerProductPaget;

// Dipanggil setiap melakukan request
export async function getServerSideProps() {
    // fetch data
    const res = await fetch("http://localhost:3000/api/product");
    const response = await res.json();
    
    // console.log(response);

    return {
        props: {
            products: response.data
        }
    }
}