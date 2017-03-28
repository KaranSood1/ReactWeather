/**
 * Created by Tridev on 28-03-2017.
 */
// function getTempCallback(location, callback) {
//
//     callback('undefined',78); // Success
//     callback('City not found'); // Failure
// }
//
// getTempCallback('New Delhi',function (err, temp) {
//     if(err){
//         console.log('Error',err);
//     }else {
//         console.log('Success',temp)
//     }
//
// });
//
// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         resolve(79);
//         reject('City not found');
//     });
// }
//
// getTempPromise('New Delhi').then(function (temp) {
//     console.log('Promise success');
// }).catch(function () {
//     console.log('Promise failed');
// });


function addPromise(a,b) {

    return new Promise(function (resolve, reject) {
        if(typeof a === 'number'&& typeof b === 'number'){
           resolve(a+b);
        }else {
            reject('a & b Must be Numbers');
        }
    })
}

addPromise(5,'').then(function (sum) {
    console.log('Success',sum);
},function (err) {
    console.log('Error',err);
});