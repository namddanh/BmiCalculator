import { calculateBMI, getBmiCategory } from './model';
import resultsView from './views/resultsView';

const init = function () {
  const optionOneForm = document.querySelector('.option-one');
  optionOneForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get values from input
    const weight = +document.getElementById('mass-kg-id').value;
    const height = +document.getElementById('height-m-id').value;

    // Bmi Calculation
    const bmi = calculateBMI(weight, height);
    if (!bmi) return resultsView.clear();

    const category = getBmiCategory(bmi);
    resultsView.render(bmi, category);
  });
};

init();

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
