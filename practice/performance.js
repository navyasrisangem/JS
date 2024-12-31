let startTime = performance.now();

for(var i = 0; i<=100000; i++) {
    console.log("hi");
}

let endTime = performance.now();
let totalTime = endTime - startTime;
console.log(`Total time taken is ${totalTime} milliseconds`);