const colors: Theme['colors'] = {
  primary: '#334FFA',
  background: '#F8F8F8',
  text: {
    main: '#000000',
    secondary: '#9B9898',
    white: '#FFFFFF',
    black: '#000000',
  },
  status: {
    success: '#00B833',
    error: '#FF0000',
  },
};

const theme: Theme = {
  colors,
  components: {
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text.main,
    },
    subtitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.text.secondary,
    },
    text: {
      fontSize: 14,
      fontWeight: 'normal',
    },
    text2: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    textButton: {
      fontSize: 12,
      fontWeight: 'bold',
      color: colors.text.white,
    },
    textButton2: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text.white,
    },
  },
};

export default theme;
