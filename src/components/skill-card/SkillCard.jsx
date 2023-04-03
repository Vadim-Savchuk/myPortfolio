import './SkillCard.scss';

function SkillCard({ name, img, star1, star2, star3, star4, star5 }) {
    return (
        <li className="skills__card">
            <div className="card__img-offer">
                <img className="card__img" src={img} alt={name} />
            </div>

            <h3 className="card__title">{name}</h3>

            <div className="stars">
                <img src={star1} alt="Star" />
                <img src={star2} alt="Star" />
                <img src={star3} alt="Star" />
                <img src={star4} alt="Star" />
                <img src={star5} alt="Star" />
            </div>
        </li>
    );
}

export default SkillCard;
