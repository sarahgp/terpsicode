const { localPhrases, scrambleEm } = require('./localPhrases')

const accumulation = () => {
  let round = 0;
  let display;

  return (currentFnIndex, imageDisplayFns) => {
        
    if (currentFnIndex == 0) { // a new round has started
      display = imageDisplayFns.slice(0, round + 1);
      round = ++round % imageDisplayFns.length;
    }
    
    return display || imageDisplayFns;
    
  }
};

const deceleration = () => {
  let round = 0;
  let display;

  return (currentFnIndex, imageDisplayFns) => {
        
    if (currentFnIndex == 0) { // a new round has started
      display = imageDisplayFns.slice(0, imageDisplayFns.length - round);
      round = ++round % imageDisplayFns.length;
    }
    
    return display || imageDisplayFns;
    
  }
}

const random = () => (currentFnIndex, imageDisplayFns) => { 
  const idx = Math.floor(Math.random() * imageDisplayFns.length);
  const imageCopy = [...imageDisplayFns]
   imageCopy[currentFnIndex] = imageDisplayFns[idx];
   return imageCopy;
}

const retrograde = () => (currentFnIndex, imageDisplayFns) => {
  return [...imageDisplayFns].reverse();
};

const rondo = () => {
  let counter = 0;
  let next;
  
  return (currentFnIndex, imageDisplayFns) => {
    next = counter + 1;
    
    if (next === imageDisplayFns.length) {
      next = 1;
      counter = 0;
    }
    
    ++counter;
      
    return [imageDisplayFns[0], imageDisplayFns[next]];;
    
  }
};


const scramble = () => {
  let scram;
  
  return (currentFnIndex, imageDisplayFns) => {
    if (currentFnIndex === 0) {
      scram = scrambleEm(imageDisplayFns);
    }
    
    return scram || imageDisplayFns;
   
  }
}

exports.globalPhrases = {
  accumulation,
  deceleration,
  retrograde,
  random,
  rondo,
  scramble,
};

exports.localPhrases = localPhrases;