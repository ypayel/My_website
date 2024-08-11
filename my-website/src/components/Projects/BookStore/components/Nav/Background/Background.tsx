import React from 'react';
import './Background.scss'; // Importowanie pliku SCSS

import { TranslateButtons } from '../../TranslateButtons/TranslateButtons';

export const Background: React.FC = () => {
  return (
    <div>
    <div className='button-lang'>
    <TranslateButtons />
    </div>
    <div className="background"> {/* Przypisanie klasy */}
      <img src="images/icons8-book-32.png" alt="Logo" className="logo" /> {/* Dodanie obrazka logo */}
    </div>
    </div>
  );
};

