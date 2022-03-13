// function evenify(num){
//     if(num % 2 == 0){
//         console.log(num, 'is even number');
//     }
//     else{
//         console.log(num, 'is odd number');
//     }
// }

function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num % 2 == 0){
            console.log(num, 'is even number');
        }
        else{
            console.log(num, 'is odd number');
        }
    }
}


var nums = [21, 45, 78, 5, 48, 54];
evenify_all(nums);