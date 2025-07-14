import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import styles from './ProductPage.module.css';

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return products.map(p => ({ id: p.id }));
}

export default function ProductPage({ params }: Props) {
  const product = products.find(p => p.id === params.id);
  if (!product) return notFound();

  return (
    <article className={styles.product}>
      <Image
        src={product.image}
        alt={product.name}
        width={640}
        height={360}
        className={styles.image}
      />

      <h1 className={styles.title}>{product.name}</h1>
      <p className={styles.category}>{product.category}</p>
      <p className={styles.description}>{product.description}</p>

      <form className={styles.form}>
        <div className={styles.price}>${product.price}</div>
        <button type="submit" className={styles.button}>
          Comprar ahora
        </button>
      </form>
    </article>
  );
}
