function addWords(obj, wrds){
    let arr = ((obj.words + ' ' + wrds).trim()).split(/\s+/); 
    arr = arr.filter(function(item, pos, self){ 
        return self.indexOf(item) == pos; 
    });
    obj.words = arr.join(' '); 
    return obj;
}

function removeWords(obj, wrds){
    let arr = ((obj.words + ' ' + wrds).trim()).split(/\s+/);
    let rem = ((wrds + ' ' + wrds).trim()).split(/\s+/);
    arr = arr.filter(function(item, pos, self){ 
        return self.indexOf(item) == pos; 
    });
    rem = rem.filter(function(item, pos, self){ 
        return self.indexOf(item) == pos; 
    });

    for(let element of rem) {
        if(arr.indexOf(element) === -1) {
            element = 0;
        }
        else {
            element = arr.splice(arr.indexOf(element), 1);
        }
    }

    obj.words = arr.join(" ");  
    return obj;
}

function changeWords(obj, oldWrds, newWrds){
    let arr = ((obj.words + ' ' + oldWrds).trim()).split(/\s+/);
    let old = ((oldWrds + ' ' + oldWrds).trim()).split(/\s+/);
    let replace = ((newWrds + ' ' + newWrds).trim()).split(/\s+/);

    arr = arr.filter(function(item, pos, self){
        return self.indexOf(item) == pos; 
    });
    old = old.filter(function(item, pos, self){ 
        return self.indexOf(item) == pos; 
    });
    replace = replace.filter(function(item, pos, self){ 
        return self.indexOf(item) == pos; 
    });

    for(let element of old) {
        if(arr.indexOf(element) === -1) {
            element = 0;
        }
        else {
            element = arr.splice(arr.indexOf(element), 1);
        }
    }
    obj.words = replace.join(" ");
}

const obj = {
    words: 'newspapers newspapers  books magazines'
  };
  
  console.log(obj); // {words: "newspapers newspapers  books magazines"}
  
  addWords(obj, 'radio newspapers   ');
  console.log(obj); // {words: "newspapers books magazines radio"}
  
  removeWords(obj, 'newspapers   radio');
  console.log(obj); // {words: "books magazines"}
  
  changeWords(obj, 'books radio  magazines', 'tv internet');
  console.log(obj); // {words: "tv internet"}