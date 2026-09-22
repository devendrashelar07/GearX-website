import React from 'react';

const Badge = ({
  children,
  variant = 'default',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium';
  
  const variants = {
    default: 'bg-accent/10 text-accent',
    success: 'bg-ev/10 text-ev',
    warning: 'bg-yellow-500/10 text-yellow-500',
    info: 'bg-blue-500/10 text-blue-500'
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
