

function myFunction(){
    let tea = "tea"
    answer = Math.floor(Math.random() * Math.floor(3))
    if(answer == 0){
        tea = "Peppermint"
    }
    else if (answer == 1){
        tea = "Chamomile"
    }
    else{
        tea = "Ginger"
    }
    document.getElementById("demo").innerHTML = tea;
}

function food(){
    // count rows each time
    let rowCount = 0;

    // Getting all options to use for adding to table
    let option1 = document.getElementById("moment1")
    let option2 = document.getElementById("moment2")
    let option3 = document.getElementById("moment3")
    let option4 = document.getElementById("last1")
    let option5 = document.getElementById("last2")
    let option6 = document.getElementById("last3")
    let option7 = document.getElementById("meal1")
    let option8 = document.getElementById("meal2")
    let option9 = document.getElementById("meal3")
    let option10 = document.getElementById("week1")
    let option11 = document.getElementById("week2")
    let option12 = document.getElementById("week3")

    // get the table
    let foodTable = document.getElementById("myFoods");
    let rows = foodTable.getElementsByTagName("tr");


    //count the rows
    for(let i = 0; i < rows.length; i++){
        rowCount ++;
    }

    if(option1.checked == true && option4.checked == true && option8.checked == true && option12.checked == true){

        let newRow = foodTable.insertRow(rowCount);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);

        cell1.innerHTML = rowCount;
        cell2.innerHTML = "Make Food";
        cell3.innerHTML = "N/A";
        cell4.innerHTML = "If you make it Vegan";

    }

    else if(option2.checked == true && option6.checked == true && option8.checked == true && option10.checked == true){

        let newRow = foodTable.insertRow(rowCount);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);

        cell1.innerHTML = rowCount;
        cell2.innerHTML = "Take out";
        cell3.innerHTML = "N/A";
        cell4.innerHTML = "If you make it Vegan";

    }





}
