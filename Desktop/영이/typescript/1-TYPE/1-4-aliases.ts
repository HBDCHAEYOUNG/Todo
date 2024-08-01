{
  // 🔴 Type Aliases

  type Text = string;
  const name: Text = "young";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "hello",
    age: 12,
  };

  // 🔴 String Literal Types
  type Name = "name";
  let youngName: Name;
  youngName = "name";
  type JSON = "json";
  const json: JSON = "json";
}
