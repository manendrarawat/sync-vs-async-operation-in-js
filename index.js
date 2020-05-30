
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



/// asynchronnous code execution example
const func2 = () => {

    setTimeout(() => {
       console.log('fun2 started..');
    }, 5000)
   
}

const func1 = () => {
        console.log('fun1 started..');
          func2();
        console.log('fun1 ended..');
}

func1();

