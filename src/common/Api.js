export async function fetchCategories() {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/categories`, {
    method: "get",
  });

  return await response.json();
}

export async function fetchGames() {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/games`, {
    method: "get",
  });

  return await response.json();
}

export async function userLogin(username, password) {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/login`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return await response.json();
}

export async function userLogout(username) {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/logout`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
    }),
  });

  return await response.json();
}

export function readUserFromStorage() {
  return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
}

export function removeUserFromStorage() {
  localStorage.removeItem("user");
}

export function saveUserToStorage(user) {
  localStorage.user = JSON.stringify(user);
}
