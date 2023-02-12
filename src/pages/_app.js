// import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbars";
import { AuthContextProvider } from "../../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../../src/components/ProtectedRoute";
import Footer from "../components/footer";

const noAuthRequired = ["/login", "/signup", "/", "/about", "/customercare"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      <Navbar />

      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
      <Footer />
    </AuthContextProvider>
  );
}

export default MyApp;
