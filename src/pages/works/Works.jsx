import { useState, useEffect } from 'react';
import { Link }     from 'react-router-dom';

import works from '../../db-works/works';

import JobCard from '../../components/job-card/JobCard';
import Select  from '../../components/select/Select';

import './Works.scss';

function Works() {
    const [value, setValue] = useState('all');

    const handleChange = event => {
        setValue(event.target.value);
    }

    const filtered = works.filter(elem => {
        if (value === 'all') {
            return elem
        }

        return elem.type === value;
    })

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='container'>

            <header className='header works__header'>
                <Link to='/' className='go-back-link' >Go Back</Link>
                <Select value={value} handleChange={handleChange}/>
            </header>

            <section className='portfolio works__portfolio'>
                <h2 className='section-title works__section-title'>My works</h2>
                <ul className='portfolio-list'>
                    {
                        filtered.map(work => {
                            return <JobCard key={work.id} img={work.img} url={work.url} name={work.name} />
                        })
                    }
                </ul>
                <div className="all-work">
                    <Link className="all-works__link" to='https://github.com/Vadim-Savchuk?tab=repositories'>More works</Link>
                    <span>&gt;</span>
                    <span>&gt;</span>
                </div>
            </section>
        </div>
    );
}

export default Works;
