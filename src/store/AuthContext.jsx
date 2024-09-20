import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
// custom hook
export const useAuth = () => {
  const ctxValue = useContext(AuthContext);
  return ctxValue;
};

// {_id , username , password ,token}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const userDataLocal = localStorage.getItem("user");
    if (!!userDataLocal) {
      return JSON.parse(userDataLocal);
    }
    return null;
  });

  const login = (loginData) => {
    setUser(loginData);
    localStorage.setItem("user", JSON.stringify(loginData));
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
