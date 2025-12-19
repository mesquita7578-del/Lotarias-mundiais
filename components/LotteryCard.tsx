
import React from 'react';
import { Lottery } from '../types';
import { MapPin, Calendar, Layout } from 'lucide-react';

interface LotteryCardProps {
  lottery: Lottery;
}

const LotteryCard: React.FC<LotteryCardProps> = ({ lottery }) => {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-500 overflow-hidden shadow-lg">
      <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full blur-3xl opacity-10 ${lottery.color}`}></div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{lottery.name}</h3>
          <p className="text-slate-500 text-xs flex items-center gap-1 mt-1">
            <MapPin size={12} /> {lottery.country}
          </p>
        </div>
        <div className="px-2 py-1 bg-slate-800 rounded text-[10px] font-bold tracking-wider text-amber-500/80 uppercase border border-amber-500/20">
          {lottery.region}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Status da Peça</p>
        <p className="text-xl font-serif font-bold text-slate-200">{lottery.jackpot}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-[10px] uppercase tracking-tighter">
        <div className="bg-slate-950 rounded-lg p-2 border border-slate-800">
          <p className="text-slate-500 mb-1 flex items-center gap-1"><Calendar size={10}/> Período</p>
          <p className="font-semibold text-slate-300">{lottery.nextDraw}</p>
        </div>
        <div className="bg-slate-950 rounded-lg p-2 border border-slate-800">
          <p className="text-slate-500 mb-1 flex items-center gap-1"><Layout size={10}/> Estilo</p>
          <p className="font-semibold text-slate-300">{lottery.odds}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500 leading-relaxed italic border-t border-slate-800 pt-4">
        {lottery.description}
      </p>
    </div>
  );
};

export default LotteryCard;
