
import React, { useState } from 'react';
import { LOTTERIES } from '../constants';
import { generateLuckyNumbers } from '../services/gemini';
import { GeneratedNumbers } from '../types';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';

const LuckyGenerator: React.FC = () => {
  const [selectedId, setSelectedId] = useState(LOTTERIES[0].id);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedNumbers | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    const lottery = LOTTERIES.find(l => l.id === selectedId);
    if (!lottery) return;
    try {
      const data = await generateLuckyNumbers(lottery.name, lottery.format);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text">Gerador da Sorte IA</h2>
        <p className="text-slate-400 max-w-xl mx-auto">Selecione a sua lotaria favorita e deixe o nosso Guru da Sorte calcular os seus próximos números vencedores.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
            <label className="block text-sm font-medium text-slate-400 mb-2">Escolha a Lotaria</label>
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              {LOTTERIES.map(l => (
                <option key={l.id} value={l.id}>{l.name} ({l.country})</option>
              ))}
            </select>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full mt-6 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-800 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
              {loading ? 'Consultando Astas...' : 'Gerar Números'}
            </button>
          </div>
        </div>

        <div className="md:col-span-2">
          {result ? (
            <div className="bg-slate-800/40 border border-amber-500/30 rounded-2xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 blur-3xl rounded-full"></div>
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-200">Seus Números da Sorte</h3>
                <button onClick={handleGenerate} className="text-amber-500 hover:text-amber-400 p-2">
                  <RefreshCw size={18} />
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {result.main.map((num, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center text-lg font-bold text-amber-500 shadow-inner">
                    {num}
                  </div>
                ))}
                {result.special.map((num, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-lg font-bold text-slate-900 shadow-lg shadow-amber-500/30">
                    {num}
                  </div>
                ))}
              </div>

              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">Visão do Guru</p>
                <p className="text-slate-300 italic leading-relaxed">"{result.explanation}"</p>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[300px] border-2 border-dashed border-slate-700/50 rounded-2xl flex flex-col items-center justify-center p-8 text-center text-slate-500">
              <Sparkles size={48} className="mb-4 opacity-20" />
              <p>Carregue no botão para visualizar a sua fortuna.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LuckyGenerator;
