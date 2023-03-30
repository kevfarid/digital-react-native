export interface Theme {
  colors: {
    primary: string;
    background: string;
    text: {
      main: string;
      secondary: string;
      white: string;
      black: string;
    };
    status: {
      success: string;
      error: string;
    };
    header: {
      background: string;
    };
  };
  components: {
    [key: string]: {
      [key: string]: string | number | boolean | undefined;
    };
  };
}
