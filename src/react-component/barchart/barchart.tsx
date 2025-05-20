import React from 'react';
import './barchart.css'

interface BarItem {
  label?: string;
  percentage: number;
}



const BarChart: React.FC<BarItem> = ({ label, percentage }) => {
  return (
    <div className="bar-chart">
      
    
        <div className="bar-item">
          <span className="bar-label">{label}</span>
         
            <div
              className="bar-container"
              style={{ width: `${percentage}%` }}
            />
          </div>
        

    </div>
  );
};

export default BarChart;