const Tablet = function ({ram = 1, size = 1}) {
  return {
    type: 'Tablet',
    ram,
    size,
  }
}

export { Tablet }