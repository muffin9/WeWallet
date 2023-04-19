import GlobalStyles from "@/styles/GlobalStyles";
import { RecoilRoot } from "recoil";
import { worker } from "../src/mocks/browser";

worker.start();

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <Story />
      </RecoilRoot>
    </>
  ),
];
export default preview;
