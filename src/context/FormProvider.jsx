import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const FormContext = createContext();

function FormProvider({ children }) {
  const [searchText, setSearchText] = useState('');
  const [numericFilters, setNumericFilters] = useState([]);

  const values = useMemo(() => ({
    searchText, setSearchText, numericFilters, setNumericFilters,
  }), [searchText, setSearchText, numericFilters, setNumericFilters]);

  return (
    <FormContext.Provider value={ values }>
      { children }
    </FormContext.Provider>
  );
}

export default FormProvider;

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
