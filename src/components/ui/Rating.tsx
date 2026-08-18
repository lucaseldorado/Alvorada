type RatingProps = {
  value: number;
  max?: number;
};

export function Rating({ value, max = 5 }: RatingProps) {
  return (
    <div className="rating" aria-label={`${value} of ${max} stars`}>
      {Array.from({ length: max }, (_, index) => (
        <span key={index} className={`rating__star ${index < value ? 'is-filled' : ''}`.trim()}>
          ★
        </span>
      ))}
    </div>
  );
}

