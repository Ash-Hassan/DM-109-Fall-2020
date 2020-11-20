var taInput, divOutput;
var btnRun;

window.onload = function() {
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runFwAlgo(){
	console.log("Running Floyd Warshall")
	divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"
	FwAlgo();
	//Get Input from 
}//end run

function FwAlgo(){
  var INF=99999;
	//Getting Input and converting to Matrix
    console.log(taInput.value);
    var str=taInput.value;
    var tempArray = str.split('\n');
    var finalArray = [];
    for (var i = 0; i < tempArray.length; i++) {
      finalArray[i] = tempArray[i].split(',');
    }
    //Now Converting to int Matrix
    var matrix = finalArray;
    for(var i=0;i<finalArray.length;i++)
    {
      for(var j=0;j<finalArray.length;j++)
      {
        matrix[i][j] = parseInt(finalArray[i][j]);
      }
    }
    console.log("Now Function Output: ")
    //Here Starts The Algorithm
      var size = matrix.length;
      var output= matrix;
       console.log(output);
      for (var k = 0; k < size; ++k) {
        for (var i = 0; i < size; ++i) {
          for (var j = 0; j < size; ++j) {
            output[i][j] = ( output[i][j] || ( output[i][k] && output[k][j] ) );
            }
          }
        if (k==size-1){
          display(output);}
        }
      //Sorting the Output
    

    
}
    function display(output){
      var size = output.length;
   //Output to be displayed on Html Page 
    divOutput.innerHTML+="[";
    for (var i=0;i<size;i++){
      divOutput.innerHTML+="[";
      for (var j=0;j<size;j++){
        divOutput.innerHTML+=output[i][j];
        divOutput.innerHTML+=",";
      }
      divOutput.innerHTML+="]";
    }
    divOutput.innerHTML+="]<br>";
	//Mention reference where you got the solution
	//Ref: http://www.codezclub.com/c-find-path-matrix-warshalls-algorithm/
	//Ref: https://stackoverflow.com/questions/14512251/convert-string-into-2d-int-array
}//end sol1
