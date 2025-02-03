import React, { useState, useEffect } from 'react';
import Finance from './components/Finance';

function App() {
  const [financeData, setFinanceData] = useState([]);
  const [diagnosis, setDiagnosis] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/finance')
      .then(response => response.json())
      .then(data => setFinanceData(data))
      .catch(error => setError(error));
  }, []);

  const handleDiagnosis = async (data) => {
    try {
      const response = await fetch('/api/finance/diagnosis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const diagnosisData = await response.json();
      setDiagnosis(diagnosisData.diagnosis);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h1>Finance Diagnosis App</h1>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Finance financeData={financeData} onDiagnosis={handleDiagnosis} />
      )}
      <p>Diagnosis: {diagnosis}</p>
    </div>
  );
}

export default App;
