// import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbars";
import { AuthContextProvider } from '../../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../../src/components/ProtectedRoute'

const noAuthRequired = ['/', '/login', '/signup']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
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
    </AuthContextProvider>
  );
}

export default MyApp;
