// src/components/TabBar.jsx
import React, { useState } from 'react';
import './tab.css';

const TabBar = ({ tabs, initialIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const activeTab = tabs[activeIndex];

  return (
    <div className="tab-bar-container">
      <div className="tab-bar" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
            className={`tab-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.icon && <span className="tab-icon">{tab.icon}</span>}
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab && activeTab.content && (
        <div className="tab-content">
          {activeTab.content}
        </div>
      )}
    </div>
  );
};

export default TabBar;