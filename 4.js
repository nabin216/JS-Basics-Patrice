// Odd and even number presentation with that number

function Number(num){
    for(let i=1;i<=num;i++){
    // if(i%2==0){
    //     console.log(i,"Odd");
    // }
    // else console.log(i, "Even");
    const x = i%2===0?"ODD": "Even"
    console.log(i,x);

}
}

Number(10);