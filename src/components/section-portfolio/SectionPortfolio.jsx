import { Link } from 'react-router-dom';

import JobCard from '../job-card/JobCard';

import './SectionPortfolio.scss';

import lnd1 from './img/lnd1.jpg';
import lnd2 from './img/lnd2.jpg';
import lnd3 from './img/lnd3.jpg';

function SectionPortfolio() {
    return (
        <section className="portfolio" id="Portfolio">
            <h2 className="section-title portfolio__title">Portfolio</h2>

            <ul className="portfolio__list">
                <JobCard img={lnd1} url={"https://vadim-savchuk.github.io/demoPage/"} />
                <JobCard img={lnd2} url={"https://vadim-savchuk.github.io/loveCalculator/"} />
                <JobCard img={lnd3} url={"https://vadim-savchuk.github.io/landing-SpaceX/"} />
            </ul>

            <div className="all-work">
                <Link className="all-works__link" to='/works' rel="preconnect">All works</Link>
                <span>&gt;</span>
                <span>&gt;</span>
            </div>
        </section>
    );
}

export default SectionPortfolio;