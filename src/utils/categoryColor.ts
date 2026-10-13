// Cor do chip por categoria (texto branco por cima: todas passam de 4.5:1).
const COLORS: Record<string, string> = {
  "Ferramentas de IA": '#6d28d9',
  "Prompts": '#a21caf',
  "Tutoriais": '#0f766e',
  "Chatbots": '#2563eb',
  "Estudos de Caso": '#b45309',
  "Carreira": '#15803d',
};

export const categoryColor = (category: string): string => COLORS[category] ?? '#6d28d9';
