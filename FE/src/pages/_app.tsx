import '../styles/globals.css';

import { AppProps } from 'next/app';

import { server } from '@/mocks/browsers/testServer';
import GlobalStore from '@/store/GlobalStore';
import QueryProvider from '@/utils/QueryProvider';
import Modal from '@/components/molecule/Modal';
import useModalStore from '@/store/useModalStore';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = GlobalStore();
  const isShowModal = useModalStore((state) => state.isShowModal);

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
