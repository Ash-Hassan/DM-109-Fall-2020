var taInput, divOutput;
var btnRun;
var n;
var x=[];
var y=[];

window.onload = function() {
	console.log("Hooray! Its working");
  taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
  TESTER = document.getElementById('tester');
} //end window.onload

function runFwAlgo(){
	console.log("Running Floyd Warshall")
	divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"
  n=taInput.value;
  while(x.length) {
    x.pop();
    y.pop();
}
	FwAlgo(random100());
	//Get Input from 
}//end run

function random100(){
  var graph = []; // Initialize array
  for (var i = 0 ; i < n; i++) {
      graph[i] = []; // Initialize inner array
      for (var j = 0; j < n; j++) { // i++ needs to be j++
          graph[i][j] = Math.round(Math.random());
      }
  }
  return graph;
}
function FwAlgo(graph){
  for (var i = 4 ; i <= n; i++) {
     divOutput.innerHTML+="<br> For "+i+"x"+i+" Matrix: <br>";
    var matrix=arrayy(i,graph);
    algo(matrix);
  }
}
function algo(matrix){
  var start = performance.now();
  //Here Starts The Algorithm
    var size = matrix.length;
    var output= matrix;
    for (var k = 0; k < size; ++k) {
      for (var i = 0; i < size; ++i) {
        for (var j = 0; j < size; ++j) {
          output[i][j] = ( output[i][j] || ( output[i][k] && output[k][j] ) );
          }
        }
      if (k==size-1){
        var end = performance.now();
        var timeTaken = end - start;
        display(output,timeTaken);}
      }   
}
function arrayy(rows,matrix) {
var arr = []; // Initialize array
for (var i = 0 ; i < rows; i++) {
    arr[i] = []; // Initialize inner array
    for (var j = 0; j < rows; j++) { // i++ needs to be j++
        var a=matrix[i][j];
        arr[i][j] = a;
    }
}
  return arr;
}
    function display(output,timeTaken){
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
    divOutput.innerHTML+="] <br> TimeTaken= "+timeTaken+"<br>";
    x.push(size);
    y.push(timeTaken);
   
    Plotly.newPlot( TESTER, [{
  	x,
    y}], {
	  margin: { t: 0 } } );
	//Mention reference where you got the solution
	//Ref: http://www.codezclub.com/c-find-path-matrix-warshalls-algorithm/
	//Ref: https://stackoverflow.com/questions/14512251/convert-string-into-2d-int-array
}//end sol1