function terrace (arr){
	let maxInd = 0;
	let maxVal = arr[0];
	let vol = 0;
	let edge = arr[0];

	arr.forEach((val, index) => {
		if(val>maxVal){
			maxVal = val;
			maxInd = index;
		}
	})

	for(var i=1;i<maxInd;i++){
		if(edge > arr[i]){
			vol += edge-arr[i];
		} else {
			edge = arr[i];
		}
	}

	edge = arr[arr.length-1];  //reset edge since using one variable...
	
	for(var i=arr.length-1;i>maxInd;i--){
		if(edge > arr[i]){
			vol += edge-arr[i];
		} else {
			edge = arr[i];
		}
	}

	return vol;	
}

const arr = [2,0,3,1,2,1,4,0,2];  //9
console.log(terrace(arr));