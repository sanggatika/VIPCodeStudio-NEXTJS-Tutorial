import styles from './ProductDetail.module.scss';
import { ProductType } from "@/types/product.type";

const ProductDetailView = ({product}: {product: ProductType}) => {
    return (
        <div>
            <h1 className={styles.title}>Detail Product Page</h1>
            <div className={styles.productDetail}>
                <div className={styles.productDetail__image}>
                    <img src={product.image && product.image} alt={product.name} />
                </div>
                <h4 className={styles.productDetail__name}>
                    {product.name}
                </h4>
                <p className={styles.productDetail__category}>
                    {product.category}
                </p>
                <p className={styles.productDetail__price}>
                    {product.price && product.price.toLocaleString('id-ID', { style:'currency', currency:'IDR'})}
                </p>
            </div>
        </div>
    );
}

export default ProductDetailView;