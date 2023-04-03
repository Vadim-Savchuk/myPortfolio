import './Select.scss';

function Select({ value, handleChange }) {
    const variants = ['all', 'layout', 'java script', 'react'];

    return (
        <select value={value} onChange={handleChange} className='select'>
            {
                variants.map(option => {
                    return <option value={option}>{option}</option>
                })
            }
        </select>
    );
}

export default Select;
