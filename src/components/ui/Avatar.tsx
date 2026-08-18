type AvatarProps = {
  name: string;
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function Avatar({ name, src, size = 'md' }: AvatarProps) {
  return (
    <div className={`avatar avatar--${size}`} aria-label={name}>
      {src ? <img src={src} alt={name} className="avatar__image" /> : <span>{name.slice(0, 2).toUpperCase()}</span>}
    </div>
  );
}

