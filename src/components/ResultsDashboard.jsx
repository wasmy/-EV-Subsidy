import React from 'react';

const ResultsDashboard = ({ data, onBack }) => {
  return (
    <div className="px-4 py-6 space-y-6">
      {/* Yearly Cost Section */}
      <section className="space-y-4 animate-in">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-sm font-medium text-slate-400">Yearly Cost: Gas vs. EV</h2>
            <p className="text-3xl font-bold text-primary">$2,350 Savings</p>
          </div>
          <span className="text-xs font-semibold px-2 py-1 bg-eco-green/20 text-eco-green rounded-full uppercase tracking-wider font-display">Annualized</span>
        </div>
        
        <div className="glass-card rounded-xl p-6 flex items-end justify-around gap-4 h-48">
          <div className="flex flex-col items-center gap-3 w-full max-w-[100px]">
            <div className="w-full bg-slate-700 rounded-t-lg relative group h-32">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold opacity-60">$3,200</div>
            </div>
            <span className="text-xs font-medium text-slate-500">Gas Engine</span>
          </div>
          <div className="flex flex-col items-center gap-3 w-full max-w-[100px]">
            <div className="w-full bg-eco-green rounded-t-lg relative h-12">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-eco-green">$850</div>
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-t-lg"></div>
            </div>
            <span className="text-xs font-medium text-eco-green font-display">Electric</span>
          </div>
        </div>
      </section>

      {/* Rebates Section */}
      <section className="space-y-3 animate-in" style={{animationDelay: '0.1s'}}>
        <div className="flex items-center justify-between">
          <h3 className="text-md font-bold">Eligible Government Rebates</h3>
          <span className="text-xs text-primary font-medium">View All</span>
        </div>
        <div className="space-y-2">
          <div className="glass-card p-4 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <div>
                <p className="font-bold text-base">$7,500 Federal Tax Credit</p>
                <p className="text-xs text-slate-400">Clean Vehicle Credit (Form 8936)</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-400 font-display">chevron_right</span>
          </div>
          <div className="glass-card p-4 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-eco-green/20 flex items-center justify-center text-eco-green">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <div>
                <p className="font-bold text-base">$2,000 State Rebate</p>
                <p className="text-xs text-slate-400">California Clean Vehicle Project</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-400 font-display">chevron_right</span>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="space-y-3 animate-in" style={{animationDelay: '0.2s'}}>
        <h3 className="text-md font-bold">Estimated EV Insurance Premium</h3>
        <div className="bg-primary rounded-xl p-5 text-white flex justify-between items-center relative overflow-hidden shadow-lg shadow-primary/20">
          <div className="relative z-10">
            <p className="text-white/80 text-sm">Monthly estimated rate</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">$145</span>
              <span className="text-sm font-display">/mo</span>
            </div>
          </div>
          <div className="relative z-10 bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm font-display">
            Based on Profile
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* ADMOB SPONSORED CARD (Native Ad Placeholder) */}
      <section className="animate-in" style={{animationDelay: '0.3s'}}>
        <div className="glass-card rounded-xl p-4 border-dashed border-primary/30 relative overflow-hidden">
          <span className="absolute top-3 right-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest font-display">Sponsored</span>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-lg bg-slate-800 flex items-center justify-center overflow-hidden">
              <img 
                alt="Ad logo"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2lL_vdkMxg8vm5s8tQra3YwQmezJOZ2AephCkk-xUw6R4TsY-TBduoNvlgxKXNdky7ihXtTgen4ESY48RVBOmkBTiZxQD8keZoA7ChDulWHp0HaknpRgBzpYvabOxY33DM1dWgYvqBEdlQuH3QisOrwYZ8tagQR35n-g86Dtq96BXbQUrUgX4dsTqBLec8XUMOANxV-mrtlahXNomeTuUuihsbcPmlHLdIrNmGoO5-6kBvUPFJZ5vMLawuHASrbGBROfFgwwYLEA" 
              />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm">Switch to BlueShield Auto</p>
              <p className="text-xs text-slate-400">Save up to 15% more on EV policies.</p>
            </div>
            <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary/20 transition-colors">
              Apply
            </button>
          </div>
        </div>
      </section>

      <button 
        onClick={onBack}
        className="w-full border border-slate-700 text-slate-400 font-semibold py-3 rounded-xl hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-lg font-display">arrow_back</span>
        Recalculate
      </button>
    </div>
  );
};

export default ResultsDashboard;
