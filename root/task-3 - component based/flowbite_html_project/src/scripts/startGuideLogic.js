const sgElement = document.getElementById("sg2");

const position_obj = [
  ["100px", "100px"],
  ["300px", "300px"],
  ["500px", "500px"]
];

let sgPosIndex = 0;

NextSgPosIndex()
function NextSgPosIndex() {
  Next_guide_box();
  console.log(sgPosIndex);
  sgPosIndex += 1;
}
function Next_guide_box() {
  const [x, y] = position_obj[sgPosIndex];
  sgElement.style.top = x;
  sgElement.style.left = y;
}