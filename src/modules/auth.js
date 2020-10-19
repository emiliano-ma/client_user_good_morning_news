import JtockAuth from "j-tockauth";

let apiUrl = process.env.REACT_APP_AUTH_URL;

const auth = new JtockAuth({
  host: apiUrl,
  prefixUrl: "/api/v1",
});

const getAuthHeaders = () => {
  let headers = sessionStorage.getItem("J-tockAuth-Storage");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json",
  };
};

export { auth, getAuthHeaders };
