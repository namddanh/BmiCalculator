import { calculateBMI, getBmiCategory } from './model';
import resultsView from './views/resultsView';

const init = function () {
  const optionOneForm = document.querySelector('.option-one');
  const weightInput = document.getElementById('mass-kg-id');
  const heightInput = document.getElementById('height-m-id');

  weightInput.addEventListener('input', e => {
    if (e.target.value.length > 5) {
      e.target.value = e.target.value.slice(0, 5);
    }
  });

  heightInput.addEventListener('input', e => {
    let raw = e.target.value;

    // If empty or a single digit, don't add the dot
    if (raw.length <= 1) return;

    // Remove existing dot so we can reformat
    let value = raw.replace('.', '');

    // Insert dot after the first digit
    value = value[0] + '.' + value.slice(1);

    // Limit to max 4 chars (e.g. 1.70)
    if (value.length > 4) value = value.slice(0, 4);

    e.target.value = value;
  });

  optionOneForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get values from input
    const weightValue = +document.getElementById('mass-kg-id').value;
    const heightValue = +document.getElementById('height-m-id').value;

    // Bmi Calculation
    const bmi = calculateBMI(weightValue, heightValue);
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
