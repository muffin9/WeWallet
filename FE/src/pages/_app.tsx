import GlobalStyles from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <GlobalStyles />
        <Component {...pageProps} />
      </RecoilRoot>
    </ApolloProvider>
  );
}
