import SkillCard from '../skill-card/SkillCard';

import './SectionSkills.scss';

import darkStar  from './img/dark-star.svg';
import lightStar from './img/light-star.svg';
import html      from './img/html.png';
import css       from './img/css-3.png';
import js        from './img/js.png';
import react     from './img/react.png';
import scss      from './img/sass.png';
import ts        from './img/typescript.png';
import redux     from './img/redux.png';

function SectionSkills() {
    return (
        <section className="skills" id="Skills">
            <h2 className="section-title">Skills</h2>
            <p className="info skills__info">My knowledge</p>

            <ul className="skills__list skills__list-main">
                <SkillCard
                    name={'HTML'} img={html} star1={darkStar} star2={darkStar} star3={darkStar} star4={darkStar} star5={lightStar}
                />
                <SkillCard
                    name={'CSS'} img={css} star1={darkStar} star2={darkStar} star3={darkStar} star4={darkStar} star5={lightStar}
                />
                <SkillCard
                    name={'JS'} img={js} star1={darkStar} star2={darkStar} star3={darkStar} star4={lightStar} star5={lightStar}
                />
                <SkillCard
                    name={'React'} img={react} star1={darkStar} star2={darkStar} star3={darkStar} star4={lightStar} star5={lightStar}
                />
            </ul>

            <h2 className="section-title dod-skills__title">Besides Skills</h2>

            <ul className="skills__list skills__list-dod">
                <SkillCard
                    name={'SCSS'} img={scss} star1={darkStar} star2={darkStar} star3={darkStar} star4={darkStar} star5={lightStar}
                />
                <SkillCard
                    name={'Type Script'} img={ts} star1={darkStar} star2={darkStar} star3={lightStar} star4={lightStar} star5={lightStar}
                />

                <SkillCard
                    name={'Redux'} img={redux} star1={darkStar} star2={darkStar} star3={lightStar} star4={lightStar} star5={lightStar}
                />
            </ul>

        </section>
    );
}

export default SectionSkills;
