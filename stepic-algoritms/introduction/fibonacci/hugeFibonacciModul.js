const calculatePizano = n => {
  const pizanoBuffer = [0, 1];
  let lastPizanoIteration = 6 * n;
  for (let i = 2; i < lastPizanoIteration; i++) {
    pizanoBuffer.push((pizanoBuffer[i - 2] + pizanoBuffer[i - 1]) % n);
  }

  const lastIndex = pizanoBuffer.findIndex(
    (e, i) => i !== 0 && e === 0 && pizanoBuffer[i + 1] === 1
  );

  if (lastIndex !== -1) {
    pizanoBuffer.length = lastIndex;
  }

  return pizanoBuffer;
};

const hugeFibonacciModul = (divider, position) => {
  if (divider === 1) {
    return 0;
  }
  const pizano = calculatePizano(divider);
  // при высоких position лучше BigInt, для скорости тестов убираем
  const resultPosition = position % pizano.length;
  return pizano[resultPosition];
};

module.exports.calculatePizano = calculatePizano;
module.exports.main = hugeFibonacciModul;
