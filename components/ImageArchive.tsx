
import React, { useState, useEffect } from 'react';
import { LOTTERIES } from '../constants';
import { generateLotteryImage } from '../services/gemini';
import { Loader2, Globe, ZoomIn } from 'lucide-react';

const continents = ['Todas', 'Americas', 'Europe', 'Asia', 'Africa', 'Oceania'] as const;

const ImageArchive: React.FC = () => {
  const [filter, setFilter] = useState<typeof continents[number]>('Todas');
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const filteredLotteries = filter === 'Todas' 
    ? LOTTERIES 
    : LOTTERIES.filter(l => l.region === filter);

  const fetchImage = async (id: string, prompt: string) => {
    if (images[id] || loading[id]) return;
    
    setLoading(prev => ({ ...prev, [id]: true }));
    try {
      const imgUrl = await generateLotteryImage(prompt);
      setImages(prev => ({ ...prev, [id]: imgUrl }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(prev => ({ ...prev, [id]: false }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-20 px-4">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text">Arquivo Mundial Visual</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Explore o design e a estética das maiores lotarias dos 5 continentes, 
          recriados pela nossa Inteligência Artificial.
        </p>
      </div>

      {/* Continent Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {continents.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-6 py-2 rounded-full border transition-all ${
              filter === c 
                ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-500/20' 
                : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500'
            }`}
          >
            {c === 'Todas' ? 'Mundo Inteiro' : c}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLotteries.map(lottery => (
          <div 
            key={lottery.id}
            className="group bg-slate-800/30 border border-slate-700/50 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-500 shadow-xl"
          >
            <div className="aspect-square relative overflow-hidden bg-slate-900 flex items-center justify-center">
              {images[lottery.id] ? (
                <img 
                  src={images[lottery.id]} 
                  alt={lottery.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="p-8 text-center space-y-4">
                  {loading[lottery.id] ? (
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 className="animate-spin text-amber-500 w-10 h-10" />
                      <p className="text-sm text-slate-500 italic">Desenhando bilhete...</p>
                    </div>
                  ) : (
                    <>
                      <div className="w-20 h-20 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-slate-600 mb-2">
                         <Globe size={40} />
                      </div>
                      <button 
                        onClick={() => fetchImage(lottery.id, lottery.prompt)}
                        className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-sm font-bold transition-all"
                      >
                        Visualizar Bilhete
                      </button>
                    </>
                  )}
                </div>
              )}
              
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-amber-500 border border-amber-500/30">
                {lottery.region}
              </div>
            </div>

            <div className="p-6 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">{lottery.name}</h3>
                <span className="text-xs text-slate-500 font-mono">{lottery.country}</span>
              </div>
              <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                {lottery.description}
              </p>
              <div className="pt-4 flex justify-between items-center border-t border-slate-700/50">
                <div className="flex flex-col">
                   <span className="text-[10px] uppercase tracking-tighter text-slate-500">Prémio</span>
                   <span className="text-amber-500 font-bold">{lottery.jackpot}</span>
                </div>
                <button className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white transition-colors">
                  <ZoomIn size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageArchive;
