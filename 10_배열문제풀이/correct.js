// Q1. make a string out of an array
{
    const fruits = ["apple", "banana", "orange"];
    const stringFruits = fruits.join();
    const stringFruitsComma = fruits.join(" + ");
  
    console.log(stringFruits);
    console.log(stringFruitsComma);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = "🍎, 🥝, 🍌, 🍒";
    const arryFruits = fruits.split();
    console.log(arryFruits);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const reverseArray = array.reverse();
    console.log(array);
    console.log(reverseArray);
    //reverse는 기존의 배열을 건든다.
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const spliceArray = array.splice(0, 2);
    console.log(array);
    console.log(spliceArray);
    //splice는 기존의 배열을 건든다.
    //기존의 배열을 건들고 싶지 않으면 slice를 사용해야한다.
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student("A", 29, true, 45),
    new Student("B", 28, false, 80),
    new Student("C", 30, true, 90),
    new Student("D", 40, false, 66),
    new Student("E", 18, true, 88)
  ];
  
  // Q5. find a student with the score 90
  {
    const result = students.find((student) => student.score === 90);
  
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
    const checkEnrolled = students.filter((student) => student.enrolled === true);
  
    console.log(checkEnrolled);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const scoreArray = students.map((s) => {
      return s.score;
    });
    console.log(scoreArray);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const failTest = students.some((student) => student.score < 50);
    console.log(failTest);
  
    const allStudentTestResult = students.every((student) => student.score < 50);
    console.log(allStudentTestResult);
    //조건에 만족되는게 있는지 없는지 체크하는것 : some
    //모든 조건이 만족하는지 체크하는것 : every
  }
  
  // Q9. compute students' average score
  {
    // const scoreArray = students.map((s) => {
    //   return s.score;
    // });
    // let sum = 0;
    // scoreArray.forEach((n) => {
    //   sum += n;
    // });
    // console.log(sum);
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const scoreArray = students
      .map((s) => s.score)
      .filter((score) => score >= 50)
      .join();
    console.log(scoreArray);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const scoreSort = students
      .map((s) => s.score)
      .sort((a, b) => b - a)
      .join();
    console.log(scoreSort);
  }
  