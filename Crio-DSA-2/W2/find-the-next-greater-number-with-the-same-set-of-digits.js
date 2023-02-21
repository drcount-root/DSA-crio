function nextGreaterElementWithSameSetOfDigits(n) {

    let N = String(n).split("");
    let i = N.length-1
    let j = i - 1;
    let min = Infinity;

    while(i > 0){
        
        if(j < 0) {i--; j=i-1;}
        let temp;
        if(N[i] > N[j]){
            temp = N[i];
            N[i] = N[j];
            N[j] = temp;
            temp = N.splice(j+1).sort((a, b)=> a-b);
            N = N.concat(temp);

            if((temp = Number(N.join(""))) > n){
                min = Math.min(min, temp);
                N = String(n).split("");
            }
            else{
                N = String(n).split("");
                i--;
                j = 1;
            }
        }
        j--;
    }

    if(min > 2**31-1) return -1;

    return min;

}