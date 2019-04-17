import React from 'react';
import Odometer from 'react-odometerjs';
import ErrorBoundary from './ErrorBoundary';

const StockInfo = ({averageStock, changePercent, currentPrice}) => (
  <div id='stock-chart-company-info-container'>
    <div id='stock-chart-average-stock'>
      US$
      <ErrorBoundary>
        <Odometer 
          value={currentPrice ? currentPrice : averageStock} 
          format="(.ddd).dd"
          duration={10000} 
        />
      </ErrorBoundary>
    </div>
    <div id='stock-chart-percent-change'>
      +US$
      {changePercent}
      (
      {(changePercent/averageStock).toFixed(2)}
      %) 
      <span className="sc-percent"> Today</span>
    </div>
    <div id='stock-chart-percent-change'>
      +US$1.23 (0.52%) 
      <span className="sc-percent"> After Hours</span>
    </div>
  </div>
)

export default StockInfo;