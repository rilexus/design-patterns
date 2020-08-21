const Phone = function ({ram = 2, size = 2}) {
  return {
    type: 'Phone',
    ram,
    size,
  }
}

export { Phone }