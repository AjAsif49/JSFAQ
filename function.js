// function evenify(num){
//     if(num % 2 == 0){
//         console.log(num, 'is even number');
//     }
//     else{
//         console.log(num, 'is odd number');
//     }
// }

function evenify_all(num){
    // for (let i = 0; i < nums.length; i++) {
    //     const num = nums[i];
        if(num % 2 == 0){
            result = num;
            // console.log(num, 'is even number');
        }
        else{
            result = num * 2;
            // console.log(num * 2, 'is odd number');
        }
        return result;
    }


var result = evenify_all(2);
var square = result * result;
console.log('Square', square);

// var nums = [21, 45, 78, 5, 48, 54];
// evenify_all(nums);