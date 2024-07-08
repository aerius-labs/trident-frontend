'use client';
import React, { memo, useEffect, useRef } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!container.current) return;
    const existingScript = container.current.querySelector(
      'script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]'
    );
    if (existingScript) return;
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        {
          "width": "638",
          "height": "404",
          "symbol": "BINANCE:MINAUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "backgroundColor": "rgba(0, 0, 0, 1)",
          "hide_legend": true,
          "allow_symbol_change": true,
          "details": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className='tradingview-widget-container' ref={container as any}>
      <div className='tradingview-widget-container__widget'></div>
    </div>
  );
}

export default memo(TradingViewWidget);
