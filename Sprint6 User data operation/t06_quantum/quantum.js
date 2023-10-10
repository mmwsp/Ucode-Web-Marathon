exports.calculateTime = function() {
    let startDate = new Date(1939, 1, 1);
    let endDate = new Date();
    let quantum = new Date(Number(startDate) + Number( (Math.abs(startDate) + Number(endDate))/7 ));    
    let result = []
    
    result.push(quantum.getFullYear() - startDate.getFullYear())
    result.push(quantum.getMonth() - startDate.getMonth())
    result.push(quantum.getDate() - startDate.getDate())
    return result;
}