const financeModel = require('../models/finance');

exports.getFinanceData = async (req, res) => {
  try {
    const financeData = await financeModel.getFinanceData();
    res.json(financeData);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching finance data' });
  }
};

exports.getFinanceDiagnosis = async (req, res) => {
  try {
    const financeDiagnosis = await financeModel.getFinanceDiagnosis(req.body);
    res.json(financeDiagnosis);
  } catch (err) {
    res.status(500).json({ message: 'Error generating finance diagnosis' });
  }
};