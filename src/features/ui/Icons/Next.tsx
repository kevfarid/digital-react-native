import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function IconNext(props: SvgProps) {
  return (
    <Svg
      width={10}
      height={10}
      viewBox='0 0 10 10'
      fill='none'
      {...props}
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 7.474V10l10-5L0 0v2.526L4.947 5 0 7.474z'
        fill='#070707'
      />
    </Svg>
  );
}

export default IconNext;
