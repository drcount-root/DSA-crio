const pastSevenDays = [...Array(7).keys()].map((index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
  
    return date.toLocaleDateString();
  });
  
  console.log(pastSevenDays);
  
  // Array(7) is creating an array of 7 elements
  // console.log(...Array(7).keys());
  
  // Returns an iterable of keys in the array
  // [0, 1, 2, 3, 4, 5, 6]
  
  // Then using map iterate all keys and set date accordingly
  