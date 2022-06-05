import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/signup" || router.pathname === "/" ? false : true;
  return (
    <>
      {showHeader && <Navbar />}
      {/* <Navbar/> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
