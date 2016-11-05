        var resultOutput = document.getElementById("result-here");
        var resultButton = document.getElementById("button-1");

        resultButton.addEventListener("click", getTheResult);

        function getTheResult() {
            var userInput = document.getElementById("input-area").value.toString();
            var splitData = userInput.split(",");
            var findRandom = splitData[Math.floor(Math.random() * splitData.length)];
            resultOutput.innerHTML = findRandom;
        }


        window.addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
            getTheResult(e);
            }
        });

        function validate(e) {
            var text = e.value;
            //validation of the input...
        }




//Console print
console.log("Program loaded");