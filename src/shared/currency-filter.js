export default function (amount, symbol) {
  if (!symbol) {
    symbol = '$';
  }
  return `${symbol}${amount.toFixed(2)}`;
}
