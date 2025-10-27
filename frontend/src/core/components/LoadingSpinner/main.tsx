import { getLoadingSpinnerClassName } from './variants';
import type { LoadingSpinnerProps } from './types';

/**
 * @component LoadingSpinner
 * @summary Loading spinner component for async operations
 * @domain core
 * @type ui-component
 * @category feedback
 */
export const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const { size = 'md', className } = props;

  return (
    <div className={getLoadingSpinnerClassName({ size, className })}>
      <div className="animate-spin rounded-full border-4 border-gray-200 border-t-primary-600" />
    </div>
  );
};
