import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import "remixicon/fonts/remixicon.css";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
