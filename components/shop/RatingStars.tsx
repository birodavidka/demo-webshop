// components/shop/rating-stars.tsx
import { Star } from "lucide-react";

export default function RatingStars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < full ? "fill-current" : "opacity-30"}`}
        />
      ))}
    </div>
  );
}
