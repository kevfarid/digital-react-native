export default function formatDate(date: string): string {
  const dateObj = new Date(date);

  const newDate = new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'long',
  })
    .format(dateObj)
    .replaceAll(' de ', ', ')
    .replace(', ', ' de ');

  return newDate;
}
