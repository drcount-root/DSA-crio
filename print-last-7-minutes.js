const pastSevenMinutes = [...Array(7).keys()].map((index) => {
    const minutes = new Date();
    minutes.setMinutes(minutes.getMinutes() - index);
  
    return minutes.toLocaleTimeString();
  });
  
  console.log(pastSevenMinutes);
  