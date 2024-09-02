import useTab from './use-custom-tabs.hook';

const CustomTabs = ({
  tabs,
  activeTab,
  setActiveTab,
  className = 'capitalize text-2xl font-semibold'
}) => {
  const { handleTabs } = useTab({ tabs, setActiveTab });

  return (
    <div className="flex gap-8">
      {tabs?.map((tab, index) => (
        <div
          key={index}
          onClick={() => handleTabs(tab)}
          className={`p-4 cursor-pointer rounded-t-lg ${className} ${
            activeTab === tab.title
              ? 'text-blue600 border-b-2 border-blue600'
              : 'text-gray600'
          }`}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default CustomTabs;
