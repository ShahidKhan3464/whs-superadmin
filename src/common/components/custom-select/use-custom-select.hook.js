import { useEffect, useRef, useState, useCallback } from 'react';

function useSelect({ name, formik }) {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState('bottom');

  const error = formik.errors[name];
  const touched = formik.touched[name];

  const borderColor = error && touched ? 'border-red-500' : '';

  // Memoized function to handle clicks outside the dropdown
  const handleOutsideClick = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    // Add click event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);

  useEffect(() => {
    const dropdownElement = dropdownRef.current;
    if (!dropdownElement) return;

    const { bottom } = dropdownElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if there's enough space below the dropdown, otherwise set the position to "top"
    setDropdownPosition(bottom + 200 > windowHeight ? 'top' : 'bottom');
  }, [isOpen]);

  return {
    isOpen,
    setIsOpen,
    dropdownRef,
    borderColor,
    dropdownPosition
  };
}

export default useSelect;
