import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  icon: Icon,
  ...rest
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl transition-all duration-300 outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dark-900';
  
  const variants = {
    primary: 'bg-accent text-dark-900 font-semibold hover:bg-accent-light hover:shadow-glow',
    secondary: 'bg-dark-500 text-white hover:bg-dark-400 border border-white/10',
    outline: 'border-2 border-accent text-accent hover:bg-accent/10',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className={`mr-2 ${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}`} />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
};

export default Button;
