import '../styles/globals.css';
import { useEffect } from 'react';

import { AppProps } from 'next/app';

import { server } from '@/mocks/browsers/testServer';
import GlobalStore from '@/store/GlobalStore';
import QueryProvider from '@/utils/QueryProvider';
import Modal from '@/components/molecule/Modal';
import useModalStore from '@/store/useModalStore';

if (process.env.NODE_ENV === 'development') {
  server.listen();
}

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = GlobalStore();
  const isShowModal = useModalStore((state) => state.isShowModal);

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
      {isShowModal && <Modal size="medium" />}
    </QueryProvider>
  );
}

export default MyApp;
