import Cards from '@/components/Cards/Card';
import { products } from '@/lib/products';
function ShopPage() {
  return (
    <section className="">
      <section className="">
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
  )
}

export default ShopPage;