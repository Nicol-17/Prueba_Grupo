import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.css';

type CardProps = {
  id: string;
  name: string;
  comment: string;
  avatar: string;
  rating?: number;
  category?: string;
};

export default function Card({
  id,
  name,
  comment,
  avatar,
  rating = 5,
  category,
}: CardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? styles.starActive : styles.starInactive}>
      ★
    </span>
  ));

  return (
    <Link href={`/shop/${id}`} className={`${styles.card}`}>
      <div className={`${styles.content}`}>
        <Image
          src={avatar}
          alt={`photo of ${name}`}
          width={96}
          height={96}
          className={`${styles.avatar}`}
        />
        <h3 className={`${styles.name}`}>{name}</h3>
        <div className={`${styles.stars}`}>{stars}</div>
        <p className={`${styles.comment}`}>{comment}</p>
        {category && <p className={`${styles.category}`}>Categoria: {category}</p>}
      </div>
    </Link>
  );
}
