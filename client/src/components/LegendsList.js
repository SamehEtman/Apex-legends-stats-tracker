import React from 'react';
import LegendItem from './LegendItem';
const LegendsList = ({ legendsList }) => {
  if (legendsList.errors) {
    return (
      <div className="ui relaxed divided list container">
        {legendsList.errors[0].message}
      </div>
    );
  }
  const renderedItems = legendsList.map((legend) => {
    return <LegendItem legend={legend}  />;
  });

  return (
    <div className="ui relaxed divided list container">{renderedItems}</div>
  );

};

export default LegendsList;
