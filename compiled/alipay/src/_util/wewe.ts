export function union<T>(prop: T) {
  if (prop) {
    return {
      property: prop,
    };
  }

  return 'we';
}
