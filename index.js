
// ///synchronnous code execution example
// const func2 = () => {
//     console.log('fun2 started..');
// }

// const func1 = () => {
//         console.log('fun1 started..');
//           func2();
//         console.log('fun1 ended..');
// }

// func1();
const checkButtonClick = () => {
  console.log('button clicked..');

    let time1 = new Date().getTime();
    console.log('time1 : ', time1);
    while(new Date().getTime() - time1 < 10000){
      
    }
}


document.getElementById('myButton').addEventListener('click', checkButtonClick);




// /// asynchronnous code execution example
// const func2 = () => {

//     setTimeout(() => {
//        console.log('fun2 started..');
//     }, 5000)
   
// }

// const func1 = () => {
//         console.log('fun1 started..');
//           func2();
//         console.log('fun1 ended..');
// }

// func1();

