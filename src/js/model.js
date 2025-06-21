export const calculateBMI = (weight, height) => {
  if (!weight || !height || weight <= 0 || height <= 0) return null;
  return (weight / height ** 2).toFixed(2);
};

export const getBmiCategory = bmi => {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 24.9) return 'normal';
  if (bmi < 29.9) return 'overweight';
  return 'Obese';
};
