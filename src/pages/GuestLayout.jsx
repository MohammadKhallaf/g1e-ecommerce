import { useLocation } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";

//  if "login" >> X
function GuestLayout({ children }) {
  const { pathname } = useLocation();
  // if pathname -> "login" -> X
  // if pathname -> "login" -> [/]
  console.log(pathname);
  return (
    <>
      {pathname !== "/login" && pathname !== "/register" ? (
        <CustomNavbar />
      ) : null}
      {children}
    </>
  );
}
export default GuestLayout;
