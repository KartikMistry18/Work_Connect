import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbars";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
