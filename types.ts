
export interface Lottery {
  id: string;
  name: string;
  country: string;
  region: 'Americas' | 'Europe' | 'Asia' | 'Oceania' | 'Africa' | 'Global';
  jackpot: string;
  nextDraw: string;
  odds: string;
  format: string; // e.g. "5/70 + 1/25"
  description: string;
  color: string;
  prompt: string; // Prompt para gerar a imagem do bilhete
}

export interface GeneratedNumbers {
  main: number[];
  special: number[];
  explanation: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
