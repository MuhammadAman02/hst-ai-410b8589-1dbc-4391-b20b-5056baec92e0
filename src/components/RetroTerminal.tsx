import React, { useState, useEffect } from 'react';

const RetroTerminal: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Hello, World_';
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const handleGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-terminal-green font-mono">
      <div 
        className={`text-4xl mb-8 overflow-hidden whitespace-nowrap border-r-4 border-terminal-green ${isGlitching ? 'animate-glitch' : ''}`}
        style={{ 
          animation: `
            typing 2s steps(${fullText.length}, end),
            blink-caret .75s step-end infinite
          `
        }}
      >
        {text}
      </div>
      <button 
        onClick={handleGlitch}
        className="px-4 py-2 border border-terminal-green hover:bg-terminal-green hover:text-black transition-colors duration-300"
      >
        Glitch
      </button>
    </div>
  );
};

export default RetroTerminal;