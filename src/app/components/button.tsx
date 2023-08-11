import React from 'react';

const ExternalLinkButton = ({ url, label }) => {
  return (
    <div className="flex items-center justify-center mt-6 mb-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white hover:bg-black hover:text-white text-black font-semibold py-3 px-14 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
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
