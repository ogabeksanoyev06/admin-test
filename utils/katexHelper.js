export const prepareMathView = (string) => {
    if (string) {
      let clearedFromFigures = string.replace(/<figure .*?>.*?<\/figure>/g, '');
      let clearedFromDelimiters = clearedFromFigures.replace(/\$/g, '');
      let preparedSpaces = clearedFromDelimiters.replace(/\s/g, ' \\space ');
      let nbspRemoved = preparedSpaces.replace(/&nbsp;/gi, '');
      let pStartRemoved = nbspRemoved.replace(/<p>/gi, '');
      let pEndRemoved = pStartRemoved.replace(/<\/p>/gi, '');
      return pEndRemoved.replace(/<[^>]*>/g, '');
    }
    return '';
  };
  