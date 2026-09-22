import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({
  rating = 0,
  size = 'md',
  showValue = false
}) => {
  const sizeClasses = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= rating;
          const isHalf = !isFilled && star - 0.5 <= rating;
          
          return (
            <div key={star} className="relative">
              {/* Empty star */}
              <Star className={`${sizeClasses} text-gray-600`} />
              
              {/* Filled or half-filled star overlay */}
              {(isFilled || isHalf) && (
                <div 
                  className="absolute inset-0 overflow-hidden text-yellow-400"
                  style={{ width: isHalf ? '50%' : '100%' }}
                >
                  <Star className={`${sizeClasses} fill-current`} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {showValue && (
        <span className="text-sm font-medium text-gray-300">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;
