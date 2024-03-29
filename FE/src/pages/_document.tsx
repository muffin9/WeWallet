import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        defer
      ></script>
      <body>
        <div id="modal-root" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
