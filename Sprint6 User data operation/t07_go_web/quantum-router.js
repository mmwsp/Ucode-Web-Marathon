const express = require('express');
const router = express.Router();


function calculateQuantumTime() {
    let startDate = new Date(1939, 1, 1);
    let endDate = new Date();
    let quantum = new Date(Number(startDate) + Number( (Math.abs(startDate) + Number(endDate))/7 ));    
    let result = []
    
    const years = quantum.getFullYear() - startDate.getFullYear();
    const months = quantum.getMonth() - startDate.getMonth();
    const days = quantum.getDate() - startDate.getDate();
    
    return `${years} years, ${months} months, ${days} days`;
}


router.get('/', (req, res) => {
  const quantumTime = calculateQuantumTime();
  res.render('quantum', { quantumTime });
});

module.exports = router;