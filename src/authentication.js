import api from "./api/api";

export const doLogin = async ({email, password}) => {
  return await api.post("/api/Auth", {
    email: email,
    password: password,
  });
};
