import React from 'react';
import './result.scss';


const Results = ({ loading, response }) => {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{response ? JSON.stringify(response, null, 2) : ''}</pre>
      )}
    </div>
  );
};

export default Results;