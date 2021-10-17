import React from 'react';

const LegendItem = ({ legend }) => {
  const renderStats = (stats) => {
    const keys = Object.keys(stats);
    console.log(keys);
    return keys.map((key) => {
      return (
        <div>
          <div className="header" style = {{verticalAlign : 'center'}}>{key} : {stats[key].value} </div>
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
        style = {{width : '100px', height :'100px'}}
      />
      <div className="content">
        <div className="header">{legend.metadata.name}</div>
        <div className="header">{renderStats(legend.stats)}</div>
      </div>
    </div>
  );
};
export default LegendItem;
