export default function randomColor() {
  const randomHex = Math.round(Math.random() * 160000000)
    .toString(16)
    .slice(0, 6);
  console.log('randomHex', randomHex);
  return randomHex;
}
