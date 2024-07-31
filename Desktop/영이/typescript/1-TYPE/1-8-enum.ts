{
  // 🔴 Enum
  //JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const DAYS_NUM = Object.freeze({ MONDAY: 0, TUESDAY: 2 });
  const dayOfToday = DAYS_NUM.MONDAY;

  // TypeScript
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
  }
  console.log(Days.Monday);
  const day = Days.Wednesday;
  console.log(day);
}
