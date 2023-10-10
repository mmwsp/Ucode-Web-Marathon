const express = require('express');
const router = express.Router();


function calculateNormalTime() {
  const startDate = new Date(1939, 1, 1);
  const current = new Date();
  const years = current.getFullYear() - startDate.getFullYear();
  const months = current.getMonth() - startDate.getMonth();
  const days = current.getDate() - startDate.getDate();
  
  return `${years} years, ${months} months, ${days} days`;
}

router.get('/', (req, res) => {
  const normalTime = calculateNormalTime();
  res.render('normal', { normalTime });
});

module.exports = router;
