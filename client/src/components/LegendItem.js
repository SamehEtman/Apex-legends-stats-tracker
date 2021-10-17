import React from 'react';
import './LegendItem.css';

const LegendItem = ({ legend }) => {
  const renderStats = (stats) => {
    const keys = Object.keys(stats);
    return keys.map((key) => {
      return (
        <div>
          <div className="header">
            {key} : {stats[key].value}{' '}
          </div>
        </div>
      );
    });
  };

  if (Object.keys(legend.stats).length === 0) {
    return null;
  }
  return (
    <div className="item legend-item ">
      <img
        className="ui image"
        src={legend.metadata.imageUrl}
        alt={legend.metadata.name}
      />
      <div className="content">
        <div className="header">{renderStats(legend.stats)}</div>
      </div>
    </div>
  );
};
export default LegendItem;
