// Minimal pub/sub so any component can fire a toast without prop drilling
// or a context provider wrapping the tree.
let listeners = [];
let nextId = 1;

export function toast(message, type = "info") {
  const id = nextId++;
  listeners.forEach(fn => fn({ id, message, type }));
  return id;
}

export function subscribeToast(fn) {
  listeners.push(fn);
  return () => {
    listeners = listeners.filter(l => l !== fn);
  };
}
