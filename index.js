//***************************Task1********************************** */

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, ,...z] = arr;
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // [Bob]

//***************************Task2********************************** */


// let data = {
//    names: ["Sam", "Tom", "Ray", "Bob"],
//    ages: [20, 24, 22, 26],
// };
// let {names:[ ,name2, , name4], ages:[ ,age2, ,age4]} = data;
// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26

//***************************Task3********************************** */


// function mul(...value) {
//     let arr = value;
//     let sum = 1;
//     arr.forEach(element => {
//         if(isNaN(element)|| element=== true){
//             return 0;
//         }else{
//             return sum*=element ;
//         }      
//     });
//     console.log(sum);
// }

//  console.log(mul(1, "str", 2, 3, true)); // 6
//  console.log(mul(null, "str", false, true,true)); // 0

// ***************************Task4********************************** */

// let server = {
//     data: 0,
//     convertToString: function (callback) {
//        callback(() => {
//           return this.data + "";
//        });
//     }
//  };
//  let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//        this.server.data = data;
//        this.server.convertToString(this.notification());
//     },
//     notification: function () {
//        return (callback => {
//           this.result = callback();
//        });
//     }
//  };
//  client.calc(123);
//  console.log(client.result); // "123"
//  console.log(typeof client.result); // "string"

//***************************Task5********************************** */


// function mapBuilder(keysArray, valuesArray){
//     let map = new Map();
//     (keysArray, valuesArray).forEach((value, key) => {
//          map.set(key+1,value);
//     });
//     return map;
// }
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"

//або так

// function mapBuilder(keysArray, valuesArray){
//     let map = new Map();
//     for (let i = 0; i < keysArray.length; i++) {
//         for (let j = 0; j < valuesArray.length; j++) {
//             valuesArray[j];          
//         }
//          map.set(keysArray[i], valuesArray[i]); 
//     }
//    return map;
// };

// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"

