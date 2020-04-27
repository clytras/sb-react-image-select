import fetchMock from 'fetch-mock';

fetchMock.mock({
  url: 'express:/api/folders/:theme',
  method: 'GET'
}, (url, opts, req) => {
  const theme = url.match(/api\/folders\/(\w+)/)[1];
  console.log('fetch-mock', url, theme);

  let files;

  switch (theme) {
    case 'folder1':
      files = ['A.jpg', 'B.jpg'];
      break;
    case 'folder2':
      files = ['X.jpg', 'Y.jpg'];
      break;
  }

  return {
    status: 200,
    body: files
  }
}, {
  overwriteRoutes: false,
  sendAsJson: true
});
