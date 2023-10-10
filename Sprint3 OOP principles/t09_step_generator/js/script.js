let res = 1;

function generator(res) {

    while(true){
        if(Number.isInteger(res)){
            let number = Number(prompt(`Previous result: ${res}. Enter a new number:`));

            if(!Number.isInteger(number)){
                console.log("Invalid number!");
                break;
            }
            
            else{

                if(res < 10000){
                    res += number;
                }

                else{
                    res = 1;
                }  
            }
        }
    }
}

generator(res);