export const deepCopy = (target) => {
  if (target === null) {
    return target;
  }
  if (target instanceof Date) {
    return new Date(target.getTime());
  }
  if (target instanceof Array) {
    const cp = [];
    target.forEach((v) => {
      cp.push(v);
    });
    return cp.map((n) => deepCopy(n));
  }
  if (typeof target === "object" && target !== {}) {
    const cp = { ...target };
    Object.keys(cp).forEach((k) => {
      cp[k] = deepCopy(cp[k]);
    });
    return cp;
  }
  return target;
};
