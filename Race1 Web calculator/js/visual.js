const histButton = document.querySelector(".historyButton");
const histWindow = document.querySelector(".historyWindow");
const histWindowContent = document.querySelector(".histWindowContent");
const main = document.querySelector(".main");
let visibilityIndicator = 0;
const copyButton = document.querySelector('.buttonCopy');


copyButton.addEventListener('click', function() {
    const historyText = historyArr.map(item => `Expression: ${item.expression} = ${item.answer}`).join('\n');
    navigator.clipboard.writeText(historyText)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch(error => {
        alert('Error copying text to clipboard:');
      });
  });
  

histButton.addEventListener("click", () => {
    if(visibilityIndicator === 1) {
        histWindow.style.visibility = 'hidden';
        main.style.visibility = 'visible';
        visibilityIndicator = 0;
        copyButton.style.visibility = 'hidden';
    }
    else {
        histWindow.style.visibility = 'visible';
        main.style.visibility = 'hidden';
        visibilityIndicator = 1;
        copyButton.style.visibility = 'visible';

        let html = '';
        if (historyArr.length > 0) {
            for (let i = 0; i < historyArr.length; i++) {
                const item = historyArr[i];
                html += `<div>Expression: ${item.expression} = ${item.answer}</div>`;
              }
        }
        else {
             html = 'Empty'
        }
      
        histWindowContent.innerHTML = html; 
  
    }
})

