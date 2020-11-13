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
     var dist = [];
      var size = matrix.length;
      for (var i = 0; i < size; i += 1) {
        dist[i] = [];
        for (var j = 0; j < size; j += 1) {
          if (i === j) {
            dist[i][j] = 0;
          } else if (!isFinite(matrix[i][j])) {
            dist[i][j] = Infinity;
          } else {
            dist[i][j] = matrix[i][j];
          }
        }
      }
      var size = matrix.length;
      for (var k = 0; k < size; k += 1) {
        for (var i = 0; i < size; i += 1) {
          for (var j = 0; j < size; j += 1) {
            if (dist[i][j] > dist[i][k] + dist[k][j]) {
              dist[i][j] = dist[i][k] + dist[k][j];
            }
          }
        }
      }
      //Sorting the Output
    var output= dist;

    console.log(output);
    
    
   //Output to be displayed on Html Page 
    divOutput.textContent+="\n[";
    for (var i=0;i<4;i++){
      divOutput.textContent+="\n[";
      for (var j=0;j<4;j++){
        divOutput.textContent+=output[i][j];
        divOutput.textContent+=",";
      }
      divOutput.textContent+="]\n";
    }
    divOutput.textContent+="]\n";
	//Mention reference where you got the solution
	//Ref: https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/
	//Ref: If you found any paper
}//end sol1