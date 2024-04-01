import { useRouter } from 'next/router';

const DetailProductPage = () => {
    // const router = useRouter();
    // console.log(router);

    const { query } = useRouter();

    return (
        <div>
            <h1>Detail Product Page</h1>
            <h2>Product : {query.data_product}</h2>
        </div>
    )
}

export default DetailProductPage;