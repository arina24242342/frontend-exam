function findMaxBlock(str) {
  const blocks = str.split("0");
  let maxBlock = "";
  let maxSum = -1;

  for (const block of blocks) {
    if (!block) continue;

    let sum = 0;
    for (const char of block) {
      sum += Number(char);
    }

    if (sum > maxSum) {
      maxSum = sum;
      maxBlock = block;
    }
  }

  return `${maxBlock}, ${maxSum}`;
}
