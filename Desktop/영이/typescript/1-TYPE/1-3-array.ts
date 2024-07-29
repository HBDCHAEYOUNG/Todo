{
  //Array
  const anmials: string[] = ["🦊", "🐮", "🐷"];
  const scores: Array<number> = [1, 2, 3];
  //   const scores: number[] = [1, 2, 3]; 같음
  function printArry(animals: readonly string[]) {} //string[]에서만 불변성 사용가능(Array<string>은 안돼)

  //Tuple 💩 비추천 =>interface, type alias, class
  let student: [string, number];
  student = ["name", 123];
  student[0]; //name
  student[1]; //123
  const [name, age] = student; //->정의해서 가독성있게 사용해라~
}
