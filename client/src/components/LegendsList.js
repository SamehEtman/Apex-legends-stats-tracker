import React from 'react';
import LegendItem from './LegendItem';
const LegendsList = ({ legendsList }) => {
  const renderedItems = (legendsList) => {
    return legendsList.map((legend) => {
      return <LegendItem legend={legend} key={legend.attributes.id} />;
    });
  };
  return (
    <div className="ui relaxed divided list">{renderedItems(legendsList)}</div>
  );
};

export default LegendsList;
