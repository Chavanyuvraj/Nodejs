function fibonacci(n){
    let series=[];
    series[0]=0;
    series[1]=1;
    for(let i=2;i<n;i++){
        series[i]=series[i-1]+series[i-2];

    }
    return series;

}
console.log(fibonacci(10));