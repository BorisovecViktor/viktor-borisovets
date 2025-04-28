export const isEmptyObject = (obj: object) => {
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false
    }
  }

  return true
}
