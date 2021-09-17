// https://forever21.hungvu.net/2021-01-23T16:10:10.184Z00419031-01.jpg
// uploads/2021-01-23T16:10:10.184Z00419031-01.jpg


export const getImage = (path) => {
  const imgName = path.replace('uploads/', '')
  return `https://forever21.hungvu.net/${imgName}`
}