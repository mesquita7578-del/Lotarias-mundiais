
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedNumbers } from "../types";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLotteryImage = async (prompt: string): Promise<string> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: `${prompt}. It should look like a collector's item in a museum showcase. High quality, realistic macro photography, beautiful lighting.`,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("Não foi possível gerar a imagem");
};

export const generateLuckyNumbers = async (lotteryName: string, lotteryFormat: string): Promise<GeneratedNumbers> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Gerar números históricos para a peça de coleção ${lotteryName}. 
    Explica por que estes números poderiam ser considerados "icónicos" para este bilhete específico.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          main: {
            type: Type.ARRAY,
            items: { type: Type.INTEGER },
            description: "Números"
          },
          special: {
            type: Type.ARRAY,
            items: { type: Type.INTEGER },
            description: "Números especiais"
          },
          explanation: {
            type: Type.STRING,
            description: "Uma breve descrição da importância estética ou histórica destes números no contexto da coleção."
          }
        },
        required: ["main", "special", "explanation"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const chatWithAdvisor = async (history: { role: 'user' | 'model', text: string }[]) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'És o "Curador do Arquivo", um especialista mundial em design de bilhetes de lotaria e história postal. O teu objetivo é ajudar os visitantes a apreciar a beleza, a história e os detalhes técnicos dos bilhetes de lotaria dos 5 continentes. Não incentivas o jogo, mas sim a apreciação da coleção como arte e documento histórico. Fala sempre em Português de Portugal com um tom educado e culto.',
    }
  });

  const lastMessage = history[history.length - 1].text;
  const response = await chat.sendMessage({ message: lastMessage });
  return response.text;
};
