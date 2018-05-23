    var arr = [33, 10, 12, 35, 1, 34, 41];
    for (i=0; i < arr.length; i++){
        for (j=0; j < arr.length-i; j++){
            if (arr[j] > arr[j+1]){
                var fVal = arr[j];
				        arr[j] = arr[j+1];
				        arr[j+1] = fVal;
            }
        }
    }
    console.log(arr);
    // [1, 10, 12, 33, 34, 35, 41]
