const first = 'nhi';
const last = 'ngo';
const middle = 'slam dunk';

export function returnHi(name) {
  return `hi ${name} ${last}`;
}

// NAMED exports - we can have as many as we want
export { last, middle };
export default first;