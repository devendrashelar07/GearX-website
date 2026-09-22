import React from 'react';

const Card = ({
  children,
  className = '',
  hover = true,
  glow,
  ...rest
}) => {
  const baseClasses = 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300';
  const hoverClasses = hover ? 'hover:-translate-y-1 hover:border-accent/30 hover:shadow-glass' : '';
  
  let style = {};
  if (glow) {
    style.boxShadow = `0 0 20px -5px ${glow}`;
  }

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
