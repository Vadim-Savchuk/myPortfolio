import { Link } from 'react-router-dom';

import './SectionHero.scss'

import baner from './img/baner.png'

function SectionHero() {
    return (
        <section className="hero" id="Home">
            <div className="hero__body">
                <h1 className="title">Vadim <br /> Savchuk</h1>
                <p className="info hero__info"> Frontend developer |<br /> 23 years old, Ukraine</p>
                <div className="langs">
                    <Link className="langs__item langs__item--active" to='/'>ENG</Link>
                    {/* | <a className="langs__item" href="#">UA</a>  */}
                </div>
            </div>
            <div className="hero__baner">
                <img className="hero__baner-img" src={baner} alt="I am" />
            </div>
        </section>
    );
}

export default SectionHero;
