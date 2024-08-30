import { useRef } from 'react';

function useSearchField({ handleSearchQueryChange }) {
  const inputRef = useRef(null);

  const handleSearch = () => {
    const value = inputRef.current.value.toLowerCase();
    handleSearchQueryChange(value);
  };

  return {
    inputRef,
    handleSearch
  };
}

export default useSearchField;
