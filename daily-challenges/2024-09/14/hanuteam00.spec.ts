// Javascript
function calculateBMI(height, weight) {
  // Tính toán BMI
  let BMI = weight / (height * height);
  let result = "";

  // Kiểm tra các điều kiện BMI
  if (BMI < 18.5) {
    result = "Gầy";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    result = "Bình thường";
  } else if (BMI >= 25 && BMI < 29.9) {
    result = "Thừa cân";
  } else {
    result = "Béo phì";
  }

  // In ra kết quả
  console.log(result);
  return result;
}
