{
  //변수 선언 방식
  let name = "hello";
  name = "hi";

  const age = 5; //재선언불가

  /*
   *JavaScript
   *Primitive: number, string, boolean, bigint, symbol, null, undefined
   *Object :function, array ...
   */

  //number
  const num: number = 5;

  //string
  const str: string = "hello";

  //boolean
  const boal: boolean = false;

  //undefined
  let weight: undefined; //💩
  let height: number | undefined;
  height = undefined;
  height = 1;

  function find(): number | undefined {
    return undefined;
  }

  //null
  let person: null; //💩
  let person2: string | null;

  //unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any💩
  let anything: any = 0;
  anything = "hello";

  //void 함수에서 어떤 것도 리턴하지 않는 경우
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; //💩변수에는 선언하지 않는다

  //never 함수에서 절대 리턴하지 않는 경우
  function throwError(message: string): never {
    //message -> server (log)
    throw new Error(message);
    while (true) {}
  }

  //object
  let obj: object; //💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "young" });
  acceptSomeObject({ animal: "cat" });
}
