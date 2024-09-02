import { useEffect } from 'react';

const useTab = ({ tabs, setActiveTab }) => {
  const handleTabs = (tab) => {
    setActiveTab(tab.title);
  };

  useEffect(() => {
    tabs && tabs[0] && setActiveTab(tabs[0].title);
  }, []);

  return {
    handleTabs
  };
};

export default useTab;
