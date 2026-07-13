import React, { useState } from 'react';

const InputDashboard = ({ onCalculate }) => {
  const [mileage, setMileage] = useState(85);
  const [gasPrice, setGasPrice] = useState(3.45);
  const [elecRate, setElecRate] = useState(0.16);
  const [gasMpg, setGasMpg] = useState(30);
  const [evMpkwh, setEvMpkwh] = useState(3.5);
  const [country, setCountry] = useState('us');
  const [region, setRegion] = useState('california');
  const [evPrice, setEvPrice] = useState(42000);
  const [driverAge, setDriverAge] = useState(35);

  const regions = {
    us: ['California', 'Texas', 'New York', 'Colorado', 'Other'],
    canada: ['British Columbia', 'Ontario', 'Quebec', 'Other'],
    australia: ['New South Wales', 'Victoria', 'Queensland', 'Other'],
    'new zealand': ['All Regions'],
  };

  return (
    <div className="px-6 space-y-5">
      {/* Hero card */}
      <div className="relative w-full h-40 rounded-xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-eco-green/20 z-10"></div>
        <img 
          alt="EV charging"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB28Z_m5o3s6xd4ZzjzJvBTsPiqMd8aefvh4kzYS79LJLIiaOZAEA3WeDKBcmB1AIDU6D6zb9PPJVeQXcM1eSuyqvF7lchbEqiLKfzIANj43f5dOCdzpfkc4Ve4jHS5wc5C4J2HDfdoiRyBQXkL60lIoRsLQwYBg8qzGsuQTYpSFb_3dEHMiPkCa9MF0TJfHIcv7B_eK1ViuMjGUss76qnBbMx8VTV223VSXEnAhWDIcP7q8-eYwNFQxCgUAj0Wf78bDd6wjbJDVFs"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
            Live Rates
          </span>
          <p className="text-white text-lg font-bold mt-1">Ready to switch to Electric?</p>
        </div>
      </div>

      {/* Comparison Toggle */}
      <div className="glass-card p-5 rounded-xl">
        <span className="text-sm font-semibold flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary text-lg">compare_arrows</span>
          Comparison Mode
        </span>
        <div className="flex h-12 w-full items-center justify-center rounded-lg bg-slate-900/50 p-1">
          <button className="flex h-full grow items-center justify-center rounded-lg px-2 text-slate-400">
            <span className="text-sm font-medium">ICE Gasoline</span>
          </button>
          <button className="flex h-full grow items-center justify-center rounded-lg px-2 bg-primary text-white shadow-lg">
            <span className="text-sm font-medium">EV Comparison</span>
          </button>
        </div>
      </div>

      {/* Daily Mileage Slider */}
      <div className="glass-card p-5 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-eco-green text-lg">route</span>
            Average Daily Mileage
          </span>
          <span className="text-primary font-bold text-lg">
            {mileage} <span className="text-xs text-slate-400 font-normal">mi</span>
          </span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="200" 
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" 
        />
        <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-medium">
          <span>1 MI</span><span>100 MI</span><span>200 MI</span>
        </div>
      </div>

      {/* Energy Rates */}
      <div className="glass-card p-5 rounded-xl">
        <span className="text-sm font-semibold flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-yellow-500 text-lg">payments</span>
          Local Energy Rates
        </span>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 uppercase font-bold">Gas (per Gallon)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
              <input 
                type="number" 
                value={gasPrice}
                onChange={(e) => setGasPrice(e.target.value)}
                className="w-full bg-slate-900/40 border border-slate-700 rounded-lg pl-7 pr-3 py-2 text-sm outline-none focus:border-primary" 
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 uppercase font-bold">Elec (per kWh)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
              <input 
                type="number" 
                value={elecRate}
                onChange={(e) => setElecRate(e.target.value)}
                className="w-full bg-slate-900/40 border border-slate-700 rounded-lg pl-7 pr-3 py-2 text-sm outline-none focus:border-eco-green" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subsidy Region */}
      <div className="glass-card p-5 rounded-xl">
        <span className="text-sm font-semibold flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary text-lg">location_on</span>
          Subsidy Region
        </span>
        <div className="space-y-3">
          <div className="relative">
            <select 
              value={country}
              onChange={(e) => { setCountry(e.target.value); setRegion(regions[e.target.value][0].toLowerCase()); }}
              className="w-full bg-slate-900/40 border border-slate-700 rounded-lg px-3 py-2.5 text-sm appearance-none outline-none focus:border-primary"
            >
              <option value="us">United States</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="new zealand">New Zealand</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
          </div>
          <div className="relative">
            <select 
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full bg-slate-900/40 border border-slate-700 rounded-lg px-3 py-2.5 text-sm appearance-none outline-none focus:border-primary"
            >
              {regions[country].map(r => (
                <option key={r} value={r.toLowerCase()}>{r}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button 
        onClick={() => onCalculate({ mileage, gasPrice, elecRate, region, country })}
        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg glow-button flex items-center justify-center gap-2"
      >
        Calculate TCO & Find Rebates
        <span className="material-symbols-outlined">trending_up</span>
      </button>
    </div>
  );
};

export default InputDashboard;
