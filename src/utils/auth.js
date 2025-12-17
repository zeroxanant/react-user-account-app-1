export const registerUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const loginUser = (email, password) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return false;

  if (user.email === email && user.password === password) {
    localStorage.setItem("loggedIn", "true");
    return true;
  }

  return false;
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const updateUser = (updatedUser) => {
  localStorage.setItem("user", JSON.stringify(updatedUser));
};

export const logoutUser = () => {
  localStorage.removeItem("loggedIn");
};


