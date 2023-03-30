export default function formatNumbers(
  value: number,
  digits: number = 2
): string {
  return value
    .toLocaleString('es-ES', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    })
    .replace('US$', '')
    .trim();
}
