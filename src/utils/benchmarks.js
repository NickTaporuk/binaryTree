const bench = (func, input, iterations) => {
  /* any boilerplate code you want to have happen before the timer starts, perhaps copying a variable so it isn't mutated */
  const start = new Date;
  for (let i = 0; i < iterations; i++) {
    func(input);
  }
  const finish = new Date;
  return (finish - start);
};

export default bench;
