import React from 'react';

interface SectionProps {
  largeText: string;
  mediumText: string;
}

const Section: React.FC<SectionProps> = ({ largeText, mediumText }) => {
  return (
    <section className="p-12 mt-20 flex flex-col items-center justify-center text-center clear-right">
      <h2 className="text-4xl font-bold mb-4 pb-4">{largeText}</h2>
      <p className="text-3xl  leading-relaxed">{mediumText}</p>
    </section>
  );
};

export default Section;
