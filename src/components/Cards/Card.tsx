import Image, {StaticImageData} from "next/image";


type CardProps = {
    name: string;
    comment: string;
    avatar: string ;
    rating?: number;
    id?: string;
    
    
};

function Card ({name, comment, avatar, rating = 5, id} :CardProps){
    const stars = Array.from({length: 5}, (_, i) => (
        <span key={i} className={i < rating ? "star filled" : "star"}>
            ★
        </span>
    ))
   
    return(
        <div id={id} className="">
            <Image
                src={avatar}
                alt={`photo of ${name}`}
                width={96}
                height={96}
                className=""
            
            />

            
            <h3 className="text-black">{name}</h3>
            <div className="text-black">{stars}</div>
            <p className="text-black-100">{comment}</p>
            
        </div>



)

}

export default Card;