import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          :root {
            --theme-font-family: ${theme.fontFamily};
            --theme-text: ${theme.colors.white};
            --theme-primary: ${theme.colors.primary};
            --theme-navy-dark: ${theme.colors.navy.dark};
            --theme-navy-darker: ${theme.colors.navy.darker};
          }
          body {
            font-family: var(--theme-font-family);
            color: var(--theme-text);
            background-color: var(--theme-navy-dark);
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
