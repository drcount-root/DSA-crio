// reverse the number

const num = 1575698;

const reverseNumFunc = n => {
	let r = 0;
	let sum = 0;
	
	while(n > 0){
		r = n % 10;
		sum = sum * 10 + r
		n = Math.trunc(n / 10);
	}
	
	return sum;
}

console.log(reverseNumFunc(num));