exports.calculateTime = function() {
    let startDate = new Date(1939, 1, 1)
    let current = new Date()

    Date.prototype.years = () => { return current.getFullYear() - startDate.getFullYear(); }
    Date.prototype.months = () => { return current.getMonth() - startDate.getMonth(); }
    Date.prototype.days = () => { return current.getDate() - startDate.getDate(); }

    return startDate;
}