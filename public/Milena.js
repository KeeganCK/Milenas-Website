(function(window, document, undefined){


window.onload = init;

  function init(){


      let header1 = document.getElementById("header1");

      let p1 = document.querySelector("#p1");

      p1.addEventListener("mouseover", function() {
          p1.style.color = "rgb(71, 225, 12)";
      });
      p1.addEventListener("mouseout", function() {
          p1.style.color = "#4885ed";
      });
      p1.addEventListener("click", function() {
          p1.innerHTML = "Actually... she can, but I can't"
      });


      if(header1 != null){

          header1.addEventListener("mouseover", function() {
              header1.style.color = "rgb(71, 225, 12)";
          });

          header1.addEventListener("mouseout", function() {
              header1.style.color = "#4885ed";
          });
      }
  }

})(window, document, undefined);

function food(){

    // make code smaller and add rows to table to see what to eat
    function rowAdder(food, vegan) {
        let newRow = foodTable.insertRow(1);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = rowCount;
        cell2.innerHTML = food;
        cell3.innerHTML = vegan;
    }

    // count rows each time
    let rowCount = 0;

    // Getting all options to use for adding to table
    let option1 = document.getElementById("moment1")
    let option2 = document.getElementById("moment2")
    let option3 = document.getElementById("moment3")
    let option4 = document.getElementById("last1")
    let option5 = document.getElementById("last2")
    let option6 = document.getElementById("last3")
    let option7 = document.getElementById("week1")
    let option8 = document.getElementById("week2")
    let option9 = document.getElementById("week3")

    // get the table
    let foodTable = document.getElementById("myFoods");
    let rows = foodTable.getElementsByTagName("tr");


    //count the rows
    for(let i = 0; i < rows.length; i++){
        rowCount ++;
    }

    // for happy
    if(option1.checked){
        //for happy -> 0-3
        if (option4.checked == true) {
            if (option7.checked == true) {
                rowAdder("Vegan Tenders and Fries", "Yes")
            }
            else if (option8.checked == true) {
                rowAdder("Cook some vegtables on the stove", "Yes")
            }
            else if (option9.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
        }
        // for happy -> 4-6
        else if (option5.checked == true) {
            if (option7.checked == true) {
                rowAdder("Tofu and rice", "Yes")
            }
            else if (option8.checked == true) {
                rowAdder("Chikken and fries", "Yes")
            }
            else if (option9.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
        }
        // for happy -> 7-12
        else if (option6.checked == true) {
            if (option7.checked == true) {
                rowAdder("Buy food", "If you make it vegan")
            }
            else if (option8.checked == true) {
                rowAdder("Vegan Tenders and Fries", "Yes")
            }
            else if (option9.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
        }

    }

    // for Hangry
    else if(option2.checked){
        //for Hangry -> 0-3
        if (option4.checked == true) {
            if (option7.checked == true) {
                rowAdder("Tacofino", "If you make it vegan")
            }
            else if (option8.checked == true) {
                rowAdder("Vegtables and Tofu", "Yes")
            }
            else if (option9.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
        }
        // for Hangry -> 4-6
        else if (option5.checked == true) {
            if (option7.checked == true) {
                rowAdder("Tacofino", "If you make it vegan")
            }
            else if (option8.checked == true) {
                rowAdder("Vegan nuggets and rice", "Yes")
            }
            else if (option9.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
        }
        // for Hangry -> 7-12
        else if (option6.checked == true) {
            if (option7.checked == true) {
                rowAdder("Tacofino", "If you make it vegan")
            }
            else if (option8.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
            else if (option9.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
        }

    }

    else if(option3.checked){
        //for Sad -> 0-3
        if (option4.checked == true) {
            if (option7.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
            else if (option8.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
            else if (option9.checked == true) {
                lrowAdder("Make Food", "If you make it vegan")
            }
        }
        // for Sad -> 4-6
        else if (option5.checked == true) {
            if (option7.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
            else if (option8.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
            else if (option9.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
        }
        // for Sad -> 7-12
        else if (option6.checked == true) {
            if (option7.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
            else if (option8.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
            else if (option9.checked == true) {
                rowAdder("Make Food", "If you make it vegan")
            }
        }

    }
}

// To change the color of the jumbotron background on mainpage
// let button = document.getElementById("but");
// let jumbo = document.getElementById("colorChange")
//
// button.addEventListener("click", function() {
//     if (jumbo.style.background == "white") {
//         jumbo.style.background = "red";
//     }
//     else {
//         jumbo.style.background = "white";
//     }
// });
