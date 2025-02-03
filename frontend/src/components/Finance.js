import React from 'react';

function Finance({ financeData, onDiagnosis }) {
  const handleDiagnosis = () => {
    const data = { /* TO DO: collect user input data */ };
    onDiagnosis(data);
  };

  return (
    <div>
      <h2>Finance Data</h2>
      <ul>
        {financeData.map((item) => (
          <li key={item.id}>{item.name}: {item.value}</li>
        ))}
      </ul>
      <button onClick={handleDiagnosis}>Get Diagnosis</button>
    </div>
  );
}

export default Finance;