const items = [1,2,3,4,5,6];
const cal = items
            .filter((item) => item % 2 === 0)
            .map(item => 4 * item)
            .reduce((acc,curr) => acc+curr, 0);
console.log(cal);