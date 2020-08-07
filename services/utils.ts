export const uniqueProductsById = (items: any[]) =>
  Array.from(new Set(items.map((a) => a.id))).map((id) => {
    return items.find((a) => a.id === id);
  });

export const objectToQueryString = (obj: any) => {
  return Object.keys(obj)
    .map((key) => key + '=' + obj[key])
    .join('&');
};

export const mergeArrayByProperty = (arr1: any[], arr2: any[]) => {
 return arr1.map((i) => {
    if (arr2.map((j) => j.id).includes(i.id)) {
      i.selected = true;
    } else {
      i.selected = false;
    }
    return i;
  });
};
