import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type AvatarProps = {
  name: string;
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function Avatar({ name, src, size = 'md' }: AvatarProps) {
  return (
    <div className={cn(styles.avatar, styles[`avatar--${size}`])} aria-label={name}>
      {src ? <img src={src} alt={name} className={styles.avatar__image} /> : <span>{name.slice(0, 2).toUpperCase()}</span>}
    </div>
  );
}
