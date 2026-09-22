import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Select = forwardRef(({
  label,
  options = [],
  error,
  className = '',
  id,
  ...rest
}, ref) => {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={selectId} className="block text-sm text-gray-400 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          className={`block w-full appearance-none bg-dark-700 border rounded-xl px-4 py-3 pr-10 text-white transition-colors duration-200
            focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50
            ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' : 'border-white/10'}`}
          {...rest}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
