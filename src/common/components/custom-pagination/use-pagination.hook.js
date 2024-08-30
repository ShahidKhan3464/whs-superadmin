function usePagination({ currentPage, onPageChange }) {
  const handleClick = (page) => {
    if (currentPage !== page) {
      onPageChange((prevData) => ({ ...prevData, page }));
    }
  };

  return {
    handleClick
  };
}

export default usePagination;
