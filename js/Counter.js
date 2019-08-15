function add1() {
    
    var inputCtrl = document.getElementById("nbr");
    var nbr = inputCtrl.value;
  

    var outputCtrl = document.getElementById("nbr");
    outputCtrl.value = Number(nbr) + 1;
}
function subtract1() {
    var inputCtrl = document.getElementById("nbr");
    var nbr = inputCtrl.value;

    var outputCtrl = document.getElementById("nbr");
    outputCtrl.value = Number(nbr) - 1;
}