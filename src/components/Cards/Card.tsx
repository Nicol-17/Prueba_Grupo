import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  id: string;
  name: string;
  comment: string;
  avatar: string;
  rating?: number;
};

export default function Card({
  id,
  name,
  comment,
  avatar,
  rating = 5,
}: CardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
      ★
    </span>
  ));

  return (
    <Link
      href={`/shop/${id}`}
      className=""
    >
      <Image
        src={avatar}
        alt={`photo of ${name}`}
        width={96}
        height={96}
        className=""
      />
      <h3 className="">{name}</h3>
      <div className="">{stars}</div>
      <p className="">{comment}</p>
    </Link>
  );
}
