import React from 'react';
import './LegendItem.css';

const LegendItem = ({ legend }) => {
  const renderStats = (stats) => {
    const keys = Object.keys(stats);
    return keys.map((key) => {
      return (
        <div>
          <div className="header" style={{ verticalAlign: 'center' }}>
            {key} : {stats[key].value}{' '}
          </div>
        </div>
      );
    });
  };
  if (!legend.stats) return null;
  return (
    <div className="item legend-item ">
      <img
        className="ui image"
        src={legend.metadata.imageUrl}
        alt={legend.metadata.name}
      />
      <div className="content">
        <div className="header">{legend.metadata.name}</div>
        <div className="header">{renderStats(legend.stats)}</div>
      </div>
    </div>
  );
};
export default LegendItem;
