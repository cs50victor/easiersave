const getURL = () => {
  const url =
    process?.env?.URL && process.env.URL !== ""
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ""
      ? process.env.VERCEL_URL
      : "http://localhost:8080"
  //url.includes("http") ? url :
  return `https://${url}`
}

const fetchGetJSON = async (url) => {
  try {
    const data = await fetch(url).then((res) => res.json())
    return data
  } catch (err) {
    console.log(err.message)
  }
}

const postDataWithAuth = async (url, token, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json", token }),
      credentials: "same-origin",
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (err) {
    console.log(err.message)
  }
}

const postData = async (url, data) => {
  try {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    return await response.json() // parses JSON response into native JavaScript objects
  } catch (err) {
    console.log(err.message)
  }
}

export { getURL, postData, fetchGetJSON, postDataWithAuth }
