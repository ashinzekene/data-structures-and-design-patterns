const fetchAdapter = (function () {
  const options = {
    type: 'GET',
    payload: null
  };
  // eslint-disable-next-line no-undef
  if (window.fetch) {
    // eslint-disable-next-line no-undef
    return window.fetch;
  }
  // eslint-disable-next-line no-undef
  const xhr = new XMLHttpRequest();
  function addHeaders(headers) {
    Object.keys(headers).forEach(header => {
      xhr.setRequestHeader(header, headers[header]);
    });
  }
  function listenForResponse(resolve) {
    if (xhr.readyState === 4) {
      resolve({
        ok: (xhr.status > 199) && (xhr.status < 300),
        status: xhr.status,
        statusText: xhr.statusText,
        text: () => Promise.resolve(xhr.responseText),
        json: () => Promise.resolve(xhr.responseText).then(x => JSON.parse(x)),
        url: xhr.responseURL
      });
    }
  }
  return function (url, reqObj = {}) {
    options.url = url;
    return new Promise(resolve => {
      if (reqObj.headers) {
        addHeaders(reqObj.headers);
      }
      if (reqObj.method === 'POST') {
        options.type = 'POST';
        options.payload = reqObj.body;
      }
      xhr.addEventListener('readystatechange', () => listenForResponse(resolve));
      xhr.open(options.type, url, true);
      xhr.send(options.payload);
    });
  };
})();

async function getTodos() {
  const todos = await fetchAdapter('https://jsonplaceholder.typicode.com/todos').then(res => res.json());
  console.log(todos);
}

getTodos();
