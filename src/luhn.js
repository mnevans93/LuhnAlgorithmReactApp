export function luhnAlgo(ccNum) {
  const ccNumArr = [...String(ccNum)];
  const valid = "Thank you for credit card. We keep it real safe.";
  const invalid = "That is not real number. Don't you trust us?";
  if (ccNumArr.length === 0) {
    return [invalid, "false"];
  }
  let i = ccNumArr.length - 2;
  while (i >= 0) {
    ccNumArr[i] = ccNumArr[i] * 2;
    i -= 2;
  }
  const sumArr = ccNumArr.reduce((total, current) => total + current);
  if (sumArr % 10 === 0) {
    return [valid, "true"];
  } else {
    return [invalid, "false"];
  }
}
