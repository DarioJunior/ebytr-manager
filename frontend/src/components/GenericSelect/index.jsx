import PropTypes from 'prop-types';
import { React } from 'react';
import { Select } from './styles';

export default function GenericSelect(props) {
  const { statusValue, setStatusValue } = props;

  return (
    <Select
      value={ statusValue }
      onChange={ ({ target }) => setStatusValue(target.value) }
    >
      <option value={ statusValue } hidden>
        { statusValue }
      </option>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Concluded">Concluded</option>
    </Select>
  );
}

GenericSelect.defaultProps = {
  statusValue: '',
  setStatusValue: PropTypes.func,
};

GenericSelect.propTypes = {
  statusValue: PropTypes.string,
  setStatusValue: PropTypes.func,
};
