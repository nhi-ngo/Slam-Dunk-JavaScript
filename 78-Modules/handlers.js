// import currencies from './currencies.js';

export async function handleButtonClick(event) {
  const { localCurrency, default: currency } = await import('./currencies.js');
  console.log(localCurrency, currency);

  // console.log(currenciesModule);
  // console.log(currenciesModule.default);
}

// const {localCurrency, default} = await import('./currencies.js');
// This will give you error since default is a reserved word in JavaScript like functions, const, async, etc...
// If you are destructuring a property, the property called default is not allowed to have a variable called default,
// we need to use destructuring renaming to rename it to something else.
// Here we rename variable default to currency.
