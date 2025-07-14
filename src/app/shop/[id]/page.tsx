import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';

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
    <article className="">
      <Image
        src={product.image}
        alt={product.name}
        width={640}
        height={360}
        className=""
      />

      <h1 className="">{product.name}</h1>
      <p className="">{product.category}</p>

      <p className="">{product.description}</p>

      <form className="space-y-4">
        <div className="">${product.price}</div>
        <button
          type="submit"
          className=""
        >
          Comprar ahora
        </button>
      </form>
    </article>
  );
}
