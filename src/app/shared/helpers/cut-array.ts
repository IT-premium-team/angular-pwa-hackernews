interface IResponse {
  list: any[];
  totalPages: number;
}

export function cutArray(data: any, page: number, itemsPerPage: number): any {
  const start = itemsPerPage * ((page == undefined || page === 1 ? 2 : page) - 1) - 1;
  const restIndexes = data.length - start;
  const end = restIndexes > itemsPerPage
    ? start + itemsPerPage
    : restIndexes === itemsPerPage
      ? -1
      : undefined;
  const cutList = data.slice(start, end);
  const result: IResponse = {
    list: data.length < itemsPerPage ? data : cutList,
    totalPages: Math.ceil(data.length / itemsPerPage),
  };
  return result;
}