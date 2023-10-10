exports.firstUpper = function(str) {
    let res;

    if(str == null){
        res = '';
    }
    else{
        res =  str.trim().charAt(0).toUpperCase() + str.trim().slice(1).toLowerCase();
    }
    return res;
}