import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PageWrapper from '../components/page-wrapper/page-wrapper';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type PageWithLayout<P = {}, PI = P> = NextPage<P, PI> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
