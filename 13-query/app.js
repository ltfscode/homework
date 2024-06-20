function getQueryParams(params) {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
}

console.log(getQueryParams({ search: 'Вася', take: 10 }));