import { getCardClassName } from './variants';
import type { CardProps } from './types';

/**
 * @component Card
 * @summary Card container component
 * @domain core
 * @type ui-component
 * @category display
 */
export const Card = (props: CardProps) => {
  const { children, className } = props;

  return <div className={getCardClassName({ className })}>{children}</div>;
};
