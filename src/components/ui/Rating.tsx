import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type RatingProps = {
  value: number;
  max?: number;
};

export function Rating({ value, max = 5 }: RatingProps) {
  return (
    <div className={styles.rating} aria-label={`${value} of ${max} stars`}>
      {Array.from({ length: max }, (_, index) => (
        <span key={index} className={cn(styles.rating__item, index < value && styles['rating__item--filled'])}>
          ★
        </span>
      ))}
    </div>
  );
}
