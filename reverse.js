const reverse = function(arr) {
	var newArr = [];
	const Arr_Lenght = arr.length;
	var xx = Arr_Lenght-1;
	for(ii = 0; ii < Arr_Lenght; ++ii){
		newArr[ii]=arr[xx];
		--xx;
	}
	return newArr;
};