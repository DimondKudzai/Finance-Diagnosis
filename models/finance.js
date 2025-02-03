//TO DO: edit to get data from api or database
const financeData = [
  { id: 1, name: 'Cash', value: 1000 },
  { id: 2, name: 'Stocks', value: 5000 },
  { id: 3, name: 'Bonds', value: 2000 },
];

exports.getFinanceData = async () => {
  return financeData;
};

exports.getFinanceDiagnosis = async (data) => {
  // TO DO: implement finance diagnosis logic
  return { diagnosis: 'You have a good financial health' };
};