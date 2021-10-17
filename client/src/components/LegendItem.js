import React from 'react';

const LegendItem = (legend) => {
  const renderStats = (stats) => {
    const keys = Object.keys(stats);
    return keys.forEach((key) => {
      return (
        <div>
          <div className="header">{key}</div>
          <div className="header">{stats[key]}</div>
        </div>
      );
    });
  };
  return (
    <div className="item">
      <img
        className="ui image"
        src={legend.metadata.imageUrl}
        alt={legend.metadata.name}
      />
      <div className="content">
        <div className="header">{legend.metadata.name}</div>
        <div className="description">{renderStats(legend.stats)}</div>
      </div>
    </div>
  );
};
export default LegendItem;
