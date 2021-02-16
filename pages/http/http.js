const URL =
  "https://3wqzdhy49h.execute-api.us-east-1.amazonaws.com/production/sendemail";

export default function post(data) {
  return new Promise((resolve, reject) => {
    fetch(URL, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}
