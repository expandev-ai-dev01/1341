/**
 * @utility validators
 * @summary Common validation utilities
 * @domain core
 * @type utility
 * @category validation
 */

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidScore = (score: number): boolean => {
  return score >= 0 && score <= 10;
};
