import React, { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  error,
  icon: Icon,
  type = 'text',
  className = '',
  id,
  ...rest
}, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className="block text-sm text-gray-400 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={`block w-full bg-dark-700 border rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-colors duration-200
            focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' : 'border-white/10'}`}
          {...rest}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
