import Header           from '../../components/header/Header';
import SectionAbout     from '../../components/section-about/SectionAbout';
import SectionHero      from '../../components/section-hero/SectionHero';
import SectionSkills    from '../../components/section-skills/SectionSkills';
import SectionPortfolio from '../../components/section-portfolio/SectionPortfolio';
import SectionContacts  from '../../components/section-contacts/SectionContacts';

import './Home.scss';

function Home() {
    return (
        <div className="container">
            <Header />
            <SectionHero />
            <SectionAbout />
            <SectionSkills/>
            <SectionPortfolio/>
            <SectionContacts/>
        </div>
    );
}

export default Home;
