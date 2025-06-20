// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const compareBMI = () => {
//   const output =
//     mark.calcBMI() >= john.calcBMI()
//       ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//       : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`;
//   console.log(output);
// };

// compareBMI();
// console.log('TEST');

const massKgContainer = document.querySelector('.mass-kg');
const heightMContainer = document.querySelector('.height-m');

//  Food facts component

// const foodFacts = async function () {
//   try {
//     const res = await fetch(
//       'https://world.openfoodfacts.net/api/v2/product/3274080005003.json'
//     );
//     const data = await res.json();

//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);

//     console.log(res, data);
//     let;
//   } catch (err) {
//     alert(err);
//   }
// };

// foodFacts();
