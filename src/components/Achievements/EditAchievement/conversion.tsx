
export const Conversion = (filename: string) => {
  var blob = new Blob([filename], { type: 'image/svg+xml' });
  const file = new File([blob], filename, {
    type: blob.type,
  });
  return file;
};
