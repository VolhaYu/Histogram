import React from 'react';
import './HistogramBlok.css';
import MySelect from '../select/MySelect';
import Histogram from '../histogram/histogram';

function HistogramBlok() {
  return (
    <div className="histogram-blok">
      <div className="wrap-select-h1">
        <h1 className="h1">Динамика дохода</h1>
        <MySelect />
      </div>
      <Histogram />
    </div>
  );
}

export default HistogramBlok;
