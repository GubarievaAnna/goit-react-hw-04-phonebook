import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onFilterSearch }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={s.input}
        value={filter}
        onChange={onFilterSearch}
        required
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterSearch: PropTypes.func.isRequired,
};

export default Filter;
