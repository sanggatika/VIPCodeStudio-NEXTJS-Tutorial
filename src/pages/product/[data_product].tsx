import { useRouter } from 'next/router';
import useSWR from "swr";
import { fetcher } from "@/libs/swr/fetcher";
import ProductDetailView from '@/views/ProductDetail';
import { ProductType } from '@/types/product.type';

const DetailProductPage = ({product} : {product: ProductType}) => {
    // const router = useRouter();
    // console.log(router);

    const { query } = useRouter();

    // Clint Side Rendering
    // const { data, error, isLoading } = useSWR(
    //     `/api/product/${query.data_product}`,
    //     fetcher
    // );

    return (
        <div>   
            {/* Clint Side Rendering        */}
            {/* <ProductDetailView product = {isLoading ? {} : data.data} /> */}

            {/* Server Side Rendering & Static Rendering        */}
            <ProductDetailView product = {product} />
        </div>
    )
}

export default DetailProductPage;

// Server Side Rendering
export async function getServerSideProps({params}: any) {
    // fetch data
    const res = await fetch(`http://localhost:3000/api/product/${params.data_product}`);
    const response = await res.json();
    
    // console.log(response);

    return {
        props: {
            product: response.data
        }
    }
}

// Static Rendering
// export async function getStaticPaths() {
//     const res = await fetch("http://localhost:3000/api/product");
//     const response = await res.json();

//     const paths = response.data.map((product: ProductType) => ({
//         params: { data_product: product.id.toString() },
        
//     }));

//     return { paths, fallback: false };
// }

// export async function getStaticProps({params}: any) {
//     const res = await fetch(`http://localhost:3000/api/product/${params.data_product}`);
//     const response = await res.json();

//     return {
//         props: {
//             product: response.data
//         }
//     }
// }