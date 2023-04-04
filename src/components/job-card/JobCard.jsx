import { Link } from 'react-router-dom';

import './JobCard.scss';

function JobCard({ img, url, name }) {
    
    return (
        <li className="portfolio__item">
            <img className="portfolio__img" src={img} alt="Portfolio Elem" loading="lazy" />
            <Link className="portfolio__link" to={url} target="_blank">{name ?? url}</Link>
        </li>
    );
}

export default JobCard;
