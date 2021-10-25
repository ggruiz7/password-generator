 // Assignment Code
var generateBtn = document.querySelector("#generate");

// define var for all characters
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
var numbersChar = '0123456789'.split("");
var symbolsChar = '"~`!@#$%^&*()_-+={[}]|\:;<,>.?/"'.split("")

// Write password to the #password input
function writePassword() {
  function userOptions() {
        var length = parseInt(prompt("Select a number betweem 8 and 128 for your password length."))
            // kill if cancel prompt is clicked
        if (!length) return;
        // kill if user doesn't comply with the criteria
        if (length < 8 || length > 128) {
            alert("Password must be between 8 and 128 characters long.")
         // returns to main prompt
            return userOptions();
        }

        //prompts
        var useLower = confirm("Do you want to include lowercase characters?")
        var useUpper = confirm("Do you want to include uppercase characters?")
        var useNumbers = confirm("Do you want to include numbers?")
        var useSymbols = confirm("Do you want to include symbols?")

        if (!useLower && !useUpper && !useNumbers && !useSymbols) {
            alert("you need to select at least one criteria.")
            // returns to main prompt
            return userOptions()
        }

        var userAnswers = {
                length: length,
                lower: useLower,
                upper: useUpper,
                number: useNumbers,
                symbols: useSymbols,
            }
            // return values
        return userAnswers;
    };

    function generatePassword() {
        var options = userOptions();
        // uses parameters from UserOptions function
        // console.log(options)

        var passwordPool = [];
        // stores results from for loops
        //console.log(passwordpool)

        // for loops to get values of the vars defined on global scope and store in passwordPool 
        if (options.lower) {
          for (let index = 0; index < lowercaseChar.length; index++) {
                passwordPool.push(lowercaseChar[index]);
            }
        }
        if (options.upper) {
            for (let index = 0; index < lowercaseChar.length; index++) {
                passwordPool.push(lowercaseChar[index]);
            }
        }
        if (options.number) {
            for (let index = 0; index < numbersChar.length; index++) {
                passwordPool.push(numbersChar[index]);
            }
        }
        if (options.symbols) {
            for (let index = 0; index < symbolsChar.length; index++) {
                passwordPool.push(symbolsChar[index]);
            }
        }

        var pooledPassword = [];
        // stores the results from passwordPool in pooledPassword var
        for (let index = 0; index < options.length; ++index) {
            var randPass = Math.floor(Math.random() * passwordPool.length);
            //console.log(randpass)
            pooledPassword.push(passwordPool[randPass])
        }
        // console.log(pooledPassword)
        // console.log(options.length)

        // result from pooledPassword joins with finalPassowrd var for password result
        var finalPassword = pooledPassword.join('')
            // console.log(finalPassword)

        // return final result of generatePassword function
        return finalPassword;
    };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
