import { Link } from 'react-router-dom';

import './SectionContacts.scss';

import instagram from './img/instagram.png';
import telegram  from './img/telegram.png';
import facebook  from './img/facebook.png';

function SectionContacts() {
    return (
        <section className="contacts" id="Contacts">
            <h2 className="section-title">Contacts</h2>
            <p className="info contacts__info">Want to know more or just chat? You are welcome!</p>
            <Link href="mailto: abc@vadimsavcuk38@gmail.com" className="button contacts__button">Send message</Link>

            <p className="info">Like me on</p>
            <ul className="contacts__list">
                <li className="contacts__item">
                    <Link className="contacts__link" href="https://www.instagram.com/sa8chuk/" target="_blank">
                        <img src={instagram} alt="Instagram" />
                    </Link>
                </li>
                <li className="contacts__item">
                    <Link className="contacts__link" href="https://www.facebook.com/profile.php?id=100009804345281" target="_blank">
                        <img src={facebook} alt="Facebook" />
                    </Link>
                </li>
                <li className="contacts__item">
                    <Link className="contacts__link" href="https://t.me/Sa8chuk" target="_blank">
                        <img src={telegram} alt="Telegram" />
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default SectionContacts;
