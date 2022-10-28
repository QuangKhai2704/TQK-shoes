export const getImageUrl = (image) => {
  // uploads/2022-06-05T16:29:18.470Zadidas2.webp
  // http://shoes.hungvu.net/
  const fileName = image?.replace('uploads/', '');
  return `http://shoes.hungvu.net/${fileName}`;
  // ket qua: http://shoes.hungvu.net/2022-06-05T16:29:18.470Zadidas2.webp
};