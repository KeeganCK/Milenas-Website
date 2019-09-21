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
