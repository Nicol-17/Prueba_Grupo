import Cards from '@/components/Cards/Card';
import { products } from '@/lib/products';
import styles from './ShopPage.module.css';

function ShopPage() {
  return (
    <section className={styles.wrapper}>
      <section className={styles.grid}>
        {products.map(prod => (
          <Cards
            key={prod.id}
            id={prod.id}
            name={prod.name}
            comment={prod.tagline}
            avatar={prod.image}
            rating={prod.rating}
          />
        ))}
      </section>
    </section>
  );
}

export default ShopPage;
