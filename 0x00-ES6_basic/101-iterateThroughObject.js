export default function iterateThroughObject(reportWithIterator) {
  const items = [];
  for (const item of reportWithIterator) {
    items.push(item);
  }
  return items.join(' | ');
}
