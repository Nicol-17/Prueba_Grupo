import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import styles from "./ProductPage.module.css";
import Button from "@/components/ui/Button/Button";

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <article className={styles.product}>
      <Image
        src={product.image}
        alt={product.name}
        width={530}
        height={360}
        className={styles.image}
      />

      <h1 className={styles.title}>{product.name}</h1>
      <p className={styles.category}>{product.category}</p>
      <p className={styles.description}>{product.description}</p>

      <form className={styles.form}>
        <div className={styles.price}>${product.price}</div>
        <Button type="link" destinity="/payout" className={styles.button}>
          Comprar ahora
        </Button>
      </form>
    </article>
  );
}
