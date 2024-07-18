const addNumers=(...args)=>{
    let sum=0;
    args.forEach((a)=>sum+=a);
    return sum;
}

console.log(addNumers(1,2,3,4,-5,6));