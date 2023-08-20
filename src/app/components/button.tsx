import React from 'react';

interface ExternalLinkButtonProps {
  url: string;
  label: string;
}

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({ url, label }) => {
  return (
    <div className="flex items-center justify-center mt-6 mb-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-300 dark:bg-gray-100 hover:bg-black hover:text-white text-black font-semibold w-72 py-3 px-14 text-center rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        style={{
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
        }}
      >
        {label}
      </a>
    </div>
  );
};

export default ExternalLinkButton;
