import React from 'react';
import './glitch.css';

interface GlitchTextProps {
  text: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  return (
    <div className="glitch" data-text={text}>
      {text}
     
    </div>
  );
};

export default GlitchText;

