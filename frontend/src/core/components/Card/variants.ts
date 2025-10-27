import { clsx } from 'clsx';

export interface CardVariantProps {
  className?: string;
}

export function getCardClassName(props: CardVariantProps): string {
  const { className } = props;

  return clsx('bg-white rounded-lg shadow-md border border-gray-200 p-6', className);
}
