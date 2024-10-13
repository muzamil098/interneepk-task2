import { PostContextProvider } from "@/store/store-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <PostContextProvider>
      <Component {...pageProps} />
    </PostContextProvider>
  );
}
