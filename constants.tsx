
import React from 'react';
import { Lottery } from './types';
import { BookOpen, Globe, Palette, History } from 'lucide-react';

export const LOTTERIES: Lottery[] = [
  {
    id: 'powerball',
    name: 'Powerball EUA',
    country: 'Estados Unidos',
    region: 'Americas',
    jackpot: 'Edição Clássica',
    nextDraw: 'Desde 1992',
    odds: 'Ícone Americano',
    format: 'Design Patriótico',
    description: 'Um pilar da cultura americana. O design foca-se na confiança e na grandiosidade do "Sonho Americano".',
    color: 'bg-red-600',
    prompt: 'A vintage, high-quality 1990s American Powerball lottery ticket, ornate guilloche patterns, red and blue ink on security paper, macro photography of textured paper.'
  },
  {
    id: 'euromillions',
    name: 'EuroMillions',
    country: 'União Europeia',
    region: 'Europe',
    jackpot: 'Arte Continental',
    nextDraw: 'Lançamento 2004',
    odds: 'Elegância Europeia',
    format: 'Multi-nacional',
    description: 'O design europeu destaca-se pelas estrelas e tons dourados, simbolizando a união e o prestígio dos estados membros.',
    color: 'bg-indigo-600',
    prompt: 'A modern, elegant EuroMillions lottery ticket, minimalist European design, holographic stars, gold foil details, luxury paper, cinematic studio lighting.'
  },
  {
    id: 'marksix',
    name: 'Mark Six HK',
    country: 'Hong Kong',
    region: 'Asia',
    jackpot: 'Tradição Oriental',
    nextDraw: 'Fundada em 1975',
    odds: 'Cultura de HK',
    format: 'Vermelho e Ouro',
    description: 'Representa a estética vibrante de Hong Kong, com padrões que remetem à prosperidade e boa fortuna oriental.',
    color: 'bg-red-500',
    prompt: 'A vibrant Hong Kong Mark Six lottery ticket, traditional red and gold Chinese motifs, vertical typography, official security patterns, sharp detail.'
  },
  {
    id: 'sapowerball',
    name: 'SA Powerball',
    country: 'África do Sul',
    region: 'Africa',
    jackpot: 'Orgulho Africano',
    nextDraw: 'Design Moderno',
    odds: 'Vibrante',
    format: 'Colorido',
    description: 'A lotaria sul-africana utiliza cores quentes e padrões geométricos que celebram a diversidade do continente.',
    color: 'bg-yellow-500',
    prompt: 'South African lottery ticket, warm earth tones, tribal-inspired geometric security borders, modern official layout, high resolution.'
  },
  {
    id: 'ozlotto',
    name: 'Oz Lotto',
    country: 'Austrália',
    region: 'Oceania',
    jackpot: 'Estilo Austral',
    nextDraw: 'Início 1994',
    odds: 'Descontraído',
    format: 'Verde e Amarelo',
    description: 'Reflete o espírito vibrante da Austrália, com um design limpo e cores que remetem à natureza e ao sol.',
    color: 'bg-green-500',
    prompt: 'Australian Oz Lotto ticket, bright green and yellow, clean modern graphic design, high-quality print mockup, professional lighting.'
  },
  {
    id: 'megasena',
    name: 'Mega-Sena BR',
    country: 'Brasil',
    region: 'Americas',
    jackpot: 'Tropical',
    nextDraw: 'Desde 1996',
    odds: 'Clássico Latino',
    format: 'Verde Esperança',
    description: 'O bilhete brasileiro é famoso pelo seu design simples e icónico, reconhecido em toda a América do Sul.',
    color: 'bg-emerald-600',
    prompt: 'Brazilian Mega-Sena lottery ticket, official green and white design, paper texture with tiny security fibers, soft shadows on a dark mahogany table.'
  }
];

export const FEATURES = [
  {
    title: 'Curadoria Global',
    description: 'Uma seleção meticulosa de bilhetes dos 5 continentes.',
    icon: <Globe className="w-6 h-6 text-blue-400" />,
  },
  {
    title: 'Análise Estética',
    description: 'Aprecie o design gráfico e as técnicas de impressão de segurança.',
    icon: <Palette className="w-6 h-6 text-amber-400" />,
  },
  {
    title: 'Contexto Histórico',
    description: 'Descubra quando e onde cada lotaria começou a fazer história.',
    icon: <History className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: 'Guia do Arquivo',
    description: 'A nossa IA ajuda a explicar os detalhes de cada peça da coleção.',
    icon: <BookOpen className="w-6 h-6 text-purple-400" />,
  },
];
