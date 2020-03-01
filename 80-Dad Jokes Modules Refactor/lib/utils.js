export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log('Ahhh we used that one last time');
    console.log(not);
    return randomItemFromArray(arr, not);
  }
  return item;
}