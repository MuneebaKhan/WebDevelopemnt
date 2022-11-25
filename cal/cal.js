function result(num){

        var x = document.getElementById('txt');  //value  //5 
        x.value += num; //x.value = x.value + num;

        // x.value += num;     
}
function clear_Result(){

        var result = document.getElementById('txt');
        result.value = "";
}
function calculation(){
        var result  = document.getElementById('txt'); //2+2
        result.value = eval(result.value);    
}