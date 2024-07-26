const divideFunction = (numerator, denominator) => {
  try {
    if (denominator === 0) {
      throw Error();
    }
    return numerator / denominator;
  } catch (error) {
    // console.error(error)
    throw new Error('cannot divide by 0');
  }
};

export default divideFunction;
