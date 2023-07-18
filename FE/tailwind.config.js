module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        'light-black': '#2c2c3a',
        white: '#fff',
        gray: '#585858',
        yellow: '#FEE500',
        golden: '#FEC500',
        cyan: '#98FFEC',
        'light-green': '#00FF85',
        success: '#2E4FFF',
        midnight: '#121063',
        silver: '#b6c4d9',
        error: '#FF5F5F',
      },
      fontFamily: {
        pretendard: ['Pretendard'],
        spoqa: ['Spoqa Han Sans Neo'],
        GangwonEduPower: ['GangwonEduPower'],
      },
    },
  },
};
