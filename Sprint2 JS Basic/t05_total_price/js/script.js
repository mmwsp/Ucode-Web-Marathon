function total(count, price, totalS) {
    if (totalS === undefined || Number.isNaN(totalS)) {
        totalS = 0;
    }

    if (count === 0) {
        return totalS;
    }
    else {
        totalS += count * price;
    }

    return totalS;
}