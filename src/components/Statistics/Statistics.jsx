import PropTypes from 'prop-types'
import css from './Statistics.module.css';

export default function Statistics({title, information }) { 
  return (
  <section className={css.statistics}>
      <h2 className={css.title}>{ title}</h2>
    <ul className={css.statList}>
        {information.map(({id, label, percentage}) => { 
          return (
            <li className={css.item} key={ id}>
              <span className={css.label}>{ label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>);
        } )}    
    </ul>
  </section>  
);
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.arrayOf(
    PropTypes.exact(
    {
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number
    }
  ),
  ),
}

