import React from 'react';

const SectionHeading = ({
  title,
  subtitle,
  badge,
  align = 'center',
  centered,
  className = ''
}) => {
  const effectiveAlign = centered !== undefined ? (centered ? 'center' : 'left') : align;
  const alignClasses = effectiveAlign === 'left' ? 'text-left' : 'text-center mx-auto flex flex-col items-center';

  return (
    <div className={`mb-12 ${alignClasses} ${className}`}>
      {badge && (
        <span className="inline-block uppercase text-accent bg-accent/10 px-3 py-1 rounded-full text-xs font-semibold tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 max-w-2xl mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
