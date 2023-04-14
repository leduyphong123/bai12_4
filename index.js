let numbers = [-3, 5, 1, 3, 2, 10];
let result=numbers[0];
for(let i=1;i<numbers.length;i++){
    if(result <numbers[i]){
        result=numbers[i];
    }
}
document.write(result);