import React from 'react';
import ExternalLinkButton from './button';

interface Link {
  url: string;
  label: string;
}

interface ExternalLinkButtonGridProps {
  links: Link[];
}

const ExternalLinkButtonGrid: React.FC<ExternalLinkButtonGridProps> = ({ links }) => {
  return (
    <div className="flex flex-wrap justify-around mx-auto max-w-7xl">
      {links.map(({ url, label }, index) => (
        <div key={index} className="mb-2 mx-5">
          <ExternalLinkButton url={url} label={label} />
        </div>
      ))}
    </div>
  );
};

export default ExternalLinkButtonGrid;
