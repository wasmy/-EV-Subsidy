import React, { useState } from 'react';
import InputDashboard from './components/InputDashboard';
import ResultsDashboard from './components/ResultsDashboard';

function App() {
  const [currentScreen, setCurrentScreen] = useState('input');
  const [calculationData, setCalculationData] = useState(null);

  const handleCalculate = (data) => {
    setCalculationData(data);
    setCurrentScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentScreen('input');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background-dark text-slate-100 font-display pb-28">
      {/* Header */}
      <header className="flex items-center justify-between px-6 pt-8 pb-4 sticky top-0 bg-background-dark/80 backdrop-blur-md z-30">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-eco-green bg-clip-text text-transparent">
            VoltCalc
          </h1>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">Smart EV Savings</p>
        </div>
        <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center bg-slate-800">
          <span className="material-symbols-outlined text-primary">person</span>
        </div>
      </header>

      {/* Managed Screens */}
      {currentScreen === 'input' && <InputDashboard onCalculate={handleCalculate} />}
      {currentScreen === 'results' && <ResultsDashboard data={calculationData} onBack={handleBack} />}

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-slate-700 px-6 py-3 flex justify-between items-center z-50">
        <button 
          onClick={handleBack}
          className={`flex flex-col items-center gap-1 ${currentScreen === 'input' ? 'text-primary' : 'text-slate-500'}`}
        >
          <span className={`material-symbols-outlined ${currentScreen === 'input' ? 'nav-icon-fill' : ''}`}>dashboard</span>
          <span className="text-[10px] font-medium">Input</span>
        </button>
        <button 
          onClick={() => currentScreen === 'input' && handleCalculate({})}
          className={`flex flex-col items-center gap-1 ${currentScreen === 'results' ? 'text-primary' : 'text-slate-500'}`}
        >
          <span className={`material-symbols-outlined ${currentScreen === 'results' ? 'nav-icon-fill' : ''}`}>calculate</span>
          <span className="text-[10px] font-medium">Calculator</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">sell</span>
          <span className="text-[10px] font-medium">Subsidies</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">shield_with_heart</span>
          <span className="text-[10px] font-medium">Insurance</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
