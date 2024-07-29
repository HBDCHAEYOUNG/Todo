{
  //JS
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  //TS
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //JS
  function jsFetcNum(id) {
    //code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  //TS
  function tsFetcNum(id: string): Promise<number> {
    //code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //JavaScript => TypeScritp
  //Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("steve", "bob");
  printName("pop");

  //Default parameter
  function printMessage(message: string = "defalut message") {
    console.log(message);
  }
  printMessage();

  //Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
}
