var arr=[1,2,3,4,5,6];
count=0;
document.write("Given array is"+[1,2,3,4,5,6]+"<br>");
for(i=0;i<arr.length;i++){
		if(arr[i]%2!=0){
			count++;
		}
}
document.write("The count of odd number in an array"+" "+count);