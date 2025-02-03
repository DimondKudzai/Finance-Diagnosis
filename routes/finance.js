const express = require('express');
const router = express.Router();
const financeController = require('../controllers/finance');

router.get('/', financeController.getFinanceData);
router.post('/diagnosis', financeController.getFinanceDiagnosis);

module.exports = router;