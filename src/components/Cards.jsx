import React from 'react';
import styles from './Cards.module.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className={styles.cards}>
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
        /> )}
    </div>
  );
}
