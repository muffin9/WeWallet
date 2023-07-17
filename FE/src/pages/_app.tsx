import '../styles/globals.css';
import { useEffect } from 'react';

import { AppProps } from 'next/app';

import { server } from '@/mocks/browsers/testServer';
import GlobalStore from '@/store/GlobalStore';
import QueryProvider from '@/utils/QueryProvider';

if (process.env.NODE_ENV === 'development') {
  server.listen();
}

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = GlobalStore();

  useEffect(
    () => () => {
      if (server) {
        server.close();
      }
    },
    [],
  );

  return (
    <QueryProvider>
      <main className="h-screen min-h-[50rem] flex flex-col items-center">
        <Component {...pageProps} />
      </main>
    </QueryProvider>
  );
}

export default MyApp;
