// Multi Conditions

var danish = 50;
var butterBon = 25;
var toastBiscuit = 10;
var mybudget = 420;
var packedWell = true;

// if (danish < mybudget) {
//   console.log("Danish Kheye Canada Jabo");
// } else if (butterBon < mybudget) {
//   console.log("Butter Bon diya chaa khamu");
// } else if (toastBiscuit < mybudget) {
//   console.log("toast Biscuit Khamu");
// } else {
//   console.log("Batash Khamu");
// }

//Nesting or Nested loop
if (danish < mybudget) {
  if (packedWell == true) {
    console.log("danish Khabo");
  } else {
    console.log("masi shob khaiya felse");
  }
}
