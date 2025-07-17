'use client';
import { useState } from 'react';
import Cards from '@/components/Cards/Card';
import { products } from '@/lib/products';
import { Navbar } from '@/components/Navbar/Navbar';
import styles from './ShopPage.module.css';

function ShopPage() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  })


  return (
    <>
      <Navbar onSearch={setSearchTerm} onCategoryChange={setSelectedCategory} />
      <section className={styles.wrapper}>
        <section className={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(prod => (
              <Cards
                key={prod.id}
                id={prod.id}
                name={prod.name}
                comment={prod.tagline}
                avatar={prod.image}
                rating={prod.rating}
                category={prod.category}
              />
            ))
          ) : (
            <p className={styles.noResults}>No se encontraron resultados</p>
          )

          }
        </section>
      </section>
    </>
  );
}

export default ShopPage;
