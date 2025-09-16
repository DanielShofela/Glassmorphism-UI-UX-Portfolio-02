
import React from 'react';

interface AnimatedBlobProps {
  className: string;
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({ className }) => {
  return (
    <div
      className={`absolute rounded-full filter blur-3xl mix-blend-lighten ${className}`}
    ></div>
  );
};

export default AnimatedBlob;
