import './Card.css';
import { FaRegUser } from "react-icons/fa";
export function Card({
    name='', 
    title='', 
    birthYear='', 
    extract='', 
    thumbnail=''
}) {
    
    return (
    <section className="card">
        <div className="card-img-container" style={{backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover'}}>
            {!thumbnail ? (<FaRegUser className="missing-img" />) : null}
            
        </div>
        <div className="card-content" >
            <h2>{name}</h2>
            <h3 className="transform-title-case">{title}</h3>
            {birthYear && <h4>Born {birthYear}</h4>}
            <p>{extract}</p>
        </div>
    </section>
    )
}