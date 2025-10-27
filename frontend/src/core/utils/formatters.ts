/**
 * @utility formatters
 * @summary Common formatting utilities
 * @domain core
 * @type utility
 * @category formatting
 */

export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('pt-BR');
};

export const formatDateTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('pt-BR');
};

export const formatScore = (score: number): string => {
  return score.toFixed(1);
};
