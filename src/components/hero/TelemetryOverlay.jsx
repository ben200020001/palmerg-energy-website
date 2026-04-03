import React, { useState, useEffect } from "react";

const generateValue = (base, variance) => {
  return (base + (Math.random() - 0.5) * variance).toFixed(2);
};

export default function TelemetryOverlay() {
  const [data, setData] = useState({
    pressure: "2,847.32",
    flowRate: "14,582",
    marketPrice: "78.42",
    temperature: "187.6",
    output: "1.24M",
    depth: "3,842",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        pressure: Number(generateValue(2847, 20)).toLocaleString(),
        flowRate: Number(generateValue(14582, 200)).toLocaleString(undefined, {maximumFractionDigits: 0}),
        marketPrice: generateValue(78.4, 2),
        temperature: generateValue(187.6, 5),
        output: `${generateValue(1.24, 0.1)}M`,
        depth: Number(generateValue(3842, 10)).toLocaleString(undefined, {maximumFractionDigits: 0}),
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top-left telemetry */}
      <div
        className="absolute top-4 left-4 md:top-8 md:left-8 z-20 font-mono text-[9px] md:text-[10px] text-muted-foreground space-y-1 opacity-60"
        aria-live="polite"
        role="status"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          <span>PSI: {data.pressure}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
          <span>FLOW: {data.flowRate} bbl/d</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          <span>TEMP: {data.temperature}°F</span>
        </div>
      </div>

      {/* Top-right telemetry */}
      <div
        className="absolute top-4 right-4 md:top-8 md:right-8 z-20 font-mono text-[9px] md:text-[10px] text-muted-foreground text-right space-y-1 opacity-60"
        aria-live="polite"
        role="status"
      >
        <div>WTI CRUDE: ${data.marketPrice}/bbl</div>
        <div>OUTPUT: {data.output} bbl</div>
        <div>DEPTH: {data.depth} ft</div>
      </div>

      {/* Bottom-left timestamp */}
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20 font-mono text-[9px] md:text-[10px] text-muted-foreground opacity-40">
        SYS.MONITOR // ACTIVE
      </div>
    </>
  );
}