import React from 'react';
import './histogram.css';
import RulerVertical from '../rulerVertical/rulerVertical';
import RulerHorizontal from '../rulerHorizontal/rulerHorizontal';
import DataBlock from '../dataBlock/DataBlock';

function Histogram() {
  return (
    <div className="histogram">
      <div className="wrap-histogram-ruler">
        <RulerVertical />
        <DataBlock />
      </div>
      <RulerHorizontal />
    </div>
  );
}

export default Histogram;
