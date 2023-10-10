const history = document.querySelector(".history");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");
const historyArr = []

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const buttonText = button.textContent;

    switch (buttonText) {
      case "C":

          history.textContent = "";
          result.textContent = "0";
          break;
      case "=":
          try {
            let expression = history.textContent;

            let expressionCopy = expression.slice();


            if (expression.includes("%")) {

              expression = expression.replace(/(\d+)%/g, (match, num) => {
                return parseFloat(num) / 100;
              });
            }

            if (expression.includes("!")) {
              expression = expression.replace(/(\d+)!/g, (match, num) => {
                let factorial = 1;
                for (let i = 1; i <= parseInt(num); i++) {
                  factorial *= i;
                }
                return factorial;
              });
            }

            if (expression.includes("^")) {
              expression = expression.replace(/\^/g, "**");
            }
            
            if (expression.includes("√")) {
              expression = expression.replace(/√(\d+)/g, (match, num) => {
                return Math.sqrt(parseInt(num));
              });
            }

            let toArr = eval(expression);

            let historyItem = {
              expression: expressionCopy,
              answer: toArr
            };
            historyArr.push(historyItem);

            const answer = eval(expression);
            result.textContent = answer;
          } catch (error) {
            result.textContent = "Error";
          }

          break;

      case "⌫":
          console.log(historyArr);
          const expression = history.textContent;
          history.textContent = expression.slice(0, -1);
          break;
        
      default:
  
          history.textContent += buttonText;
          break;
    }
  });
});