
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LotteryCard from './components/LotteryCard';
import LuckyGenerator from './components/LuckyGenerator';
import AIAdvisor from './components/AIAdvisor';
import OddsVisualizer from './components/OddsVisualizer';
import ImageArchive from './components/ImageArchive';
import { LOTTERIES, FEATURES } from './constants';
import { Sparkles, ArrowRight, Library } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('explore');

  return (
    <div className="min-h-screen pb-32">
      {/* Hero Header - Estilo Galeria */}
      <header className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-amber-500 text-sm font-medium">
            <Library size={16} /> <span>Arquivo Particular e Curadoria</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">
            Coleção <span className="gradient-text">Global</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Uma viagem visual pela arte e história dos bilhetes de lotaria dos 5 continentes. 
            Uma coleção dedicada à Chloe para preservar a beleza do design mundial.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             {FEATURES.map((feature, i) => (
               <div key={i} className="flex items-center gap-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 w-64 hover:bg-slate-800/50 transition-all">
                 <div className="p-2 bg-slate-900 rounded-lg">{feature.icon}</div>
                 <div className="text-left">
                   <p className="text-sm font-bold text-slate-200">{feature.title}</p>
                   <p className="text-xs text-slate-500">{feature.description}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </header>

      {/* Main Exhibition Area */}
      <main className="max-w-7xl mx-auto px-6 mt-12">
        {activeTab === 'explore' && (
          <div className="space-y-12 animate-in fade-in duration-700">
            <div className="flex justify-between items-end border-b border-slate-800 pb-6">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-2">Exposição por Continente</h2>
                <p className="text-slate-400">Peças selecionadas do nosso arquivo mundial.</p>
              </div>
              <div className="hidden md:block">
                <button 
                  onClick={() => setActiveTab('archive')}
                  className="flex items-center gap-2 text-amber-500 font-bold hover:underline"
                >
                  Abrir Arquivo Completo <ArrowRight size={18} />
                </button>
              </div>
            </div>
            
            <div className="lottery-grid">
              {LOTTERIES.slice(0, 6).map((lottery) => (
                <LotteryCard key={lottery.id} lottery={lottery} />
              ))}
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full"></div>
               <div className="space-y-4 max-w-xl relative z-10">
                 <h2 className="text-3xl font-serif font-bold text-white">Curadoria Digital</h2>
                 <p className="text-slate-400 leading-relaxed">
                   Chloe, este arquivo foi criado para divulgar a beleza destes bilhetes que colecionamos. 
                   Cada peça conta uma história de um país diferente.
                 </p>
               </div>
               <button 
                onClick={() => setActiveTab('archive')}
                className="bg-amber-500 text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/10 relative z-10"
               >
                 <Sparkles size={20} /> Visitar o Arquivo
               </button>
            </div>
          </div>
        )}

        {activeTab === 'archive' && <ImageArchive />}
        {activeTab === 'advisor' && <AIAdvisor />}
        {activeTab === 'stats' && <OddsVisualizer />}
      </main>

      {/* Footer Galeria */}
      <footer className="mt-20 py-12 border-t border-slate-800 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-xl font-serif font-bold gradient-text">O Meu Arquivo de Lotarias</h3>
            <p className="text-slate-500 text-sm">Uma iniciativa de preservação visual e curadoria pessoal.</p>
          </div>
          <div className="flex gap-6 text-slate-400 text-sm font-medium">
            <a href="#" className="hover:text-amber-500 transition-colors">Galeria</a>
            <a href="#" className="hover:text-amber-500 transition-colors">História</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Curadoria</a>
          </div>
        </div>
      </footer>

      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
