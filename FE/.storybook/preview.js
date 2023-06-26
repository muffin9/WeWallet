import QueryProvider from '../src/utils/QueryProvider';
import { Global } from '@emotion/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { worker } from '../src/mocks/browsers/server';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});

if (typeof global.process === 'undefined') {
  worker.start();
}

initialize();

export const parameters = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  mswDecorator,
  (Story) => (
    <>
      <QueryProvider>
        <Global styles={{}} />
        <Story />
      </QueryProvider>
    </>
  ),
];
