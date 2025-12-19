
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { LOTTERIES } from '../constants';

const OddsVisualizer: React.FC = () => {
  // We need to parse the odds string to a comparable number for the chart
  // Odds are "1 in X", so we chart X. Higher is harder.
  const data = LOTTERIES.map(l => ({
    name: l.name,
    difficulty: parseInt(l.odds.replace(/[^0-9]/g, ''), 10),
    oddsStr: l.odds,
    color: l.color.includes('red') ? '#ef4444' : l.color.includes('blue') ? '#3b82f6' : l.color.includes('indigo') ? '#6366f1' : l.color.includes('green') ? '#22c55e' : l.color.includes('yellow') ? '#eab308' : '#f97316'
  })).sort((a, b) => b.difficulty - a.difficulty);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text">Análise de Dificuldade</h2>
        <p className="text-slate-400 max-w-xl mx-auto">Comparação visual da probabilidade de ganhar o prémio principal em diferentes lotarias globais.</p>
      </div>

      <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              stroke="#94a3b8" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const item = payload[0].payload;
                  return (
                    <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
                      <p className="text-white font-bold mb-1">{item.name}</p>
                      <p className="text-amber-400 text-sm">Odds: {item.oddsStr}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="difficulty" radius={[0, 4, 4, 0]} barSize={30}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
          <h4 className="text-lg font-bold text-white mb-2">Sabia que?</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            A SuperEnalotto da Itália é tecnicamente a mais difícil de ganhar, com odds de 1 em 622 milhões. 
            Isso acontece porque os jogadores precisam de acertar 6 números de um conjunto de 90.
          </p>
        </div>
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
          <h4 className="text-lg font-bold text-white mb-2">O Equilíbrio Europeu</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            A EuroMillions e EuroJackpot têm odds quase idênticas (1 em ~140 milhões), 
            mas a EuroMillions costuma ter jackpots significativamente maiores devido ao maior número de países participantes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OddsVisualizer;
