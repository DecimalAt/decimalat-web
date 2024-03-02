export async function callApi(method: string, url: string, path: string, data?: any) {
    // const res = await fetch(`${url}/api${path}`, {
    const res = await fetch(`${url}/${path}`, {
        method,
        headers: {
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}

export interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string,
    error?: string
}


/* TODO: try with fetch instead if GQL

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "__cf_bm=hh1zDU2_jjRlJaDPMkG1hN8OkmboW_N8HuxjCt22uMg-1694446839-0-AUD9KvMOoGQrgRbBEG7PN6+FzTEFwbcdWW/Bx/yJ/8zV3SFyvcpIHgpoyKvQcSwQ+HUsEfSYeGiaZ6AslsQk5c8=");

var graphql = JSON.stringify({
  query: "{\n    jobs(first: 5) {\n      id\n      creator\n      params {\n        id\n      }\n      paymentPerExecution\n    }\n    validations(first: 5) {\n      id\n      job {\n        id\n
var graphql = JSON.stringify({
  query: "{\n    jobs(first: 5) {\n      id\n      creator\n      params {\n        id\n      }\n      paymentPerExecution\n    }\n    validations(first: 5) {\n      id\n      job {\n        id\n      }\n      index\n      params {\n        id\n      }\n    }\n  }",
  variables: {}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};
fetch("https://api.thegraph.com/subgraphs/name/decimalat/decimal-testnet", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

*/