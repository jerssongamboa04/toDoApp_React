import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  onClick: () => void;
  url: string;
  className: string;
  content: string;    
}

const Button: React.FC<ButtonProps> = ({ onClick,url, className, content }) => {
  return (
    <Link to={url}>
      <button onClick={onClick} className={className}>{content}</button>
    </Link>
  );
};

export default Button;
