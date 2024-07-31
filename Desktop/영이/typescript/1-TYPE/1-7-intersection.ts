{
  //🔴 Intersection Types : &
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  interWork({
    name: "hello",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
