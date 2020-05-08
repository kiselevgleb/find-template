
export default function find(a, b) {
  return (x) => {
    return x[a] == b;
  };
}
