import React, { useState } from "react";

const Tabs: React.FC<{
  updateInfoComponent: any;
  verifyAccountComponent: any;
}> = ({ updateInfoComponent, verifyAccountComponent }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="bg-white flex xitems-center h-16 px-3 pt-3 space-x-4">
        <button
          className={`px-4 py-2 roundelg ${
            activeTab === 1 ? "bg-gray-200" : "bg-blue-500 text-white"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Option 1
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 2 ? "bg-gray-200" : "bg-blue-500 text-white"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Option 2
        </button>
      </div>
      {activeTab === 1 && <div>{updateInfoComponent}</div>}
      {activeTab === 2 && <div>{verifyAccountComponent}</div>}
    </div>
  );
};

export default Tabs;
