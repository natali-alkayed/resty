import React from 'react';
import './history.scss';

function History({ history, onItemClick }) { 
  return (
    <div className="history">
      <h2>API Call History:</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <button onClick={() => onItemClick(item)}>
              {item.method} - {item.url}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
