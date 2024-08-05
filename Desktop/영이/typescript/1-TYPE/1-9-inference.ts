// 🔴 Type Inference
let text = "hello"; //너무 뻔한 타입을 제외한 경우 타입명시하는 습관 들이기
function print(message = "hello") {
  console.log(message);
}
print("hello");

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
