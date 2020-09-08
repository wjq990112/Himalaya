/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const Iconmute: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 128c212.074667 0 384 171.925333 384 384s-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128z m252.501333 187.413333L315.413333 764.501333A318.613333 318.613333 0 0 0 512 832c176.725333 0 320-143.274667 320-320 0-74.112-25.194667-142.357333-67.498667-196.586667zM512 192C335.274667 192 192 335.274667 192 512c0 79.573333 29.034667 152.362667 77.098667 208.341333l451.242666-451.242666A318.741333 318.741333 0 0 0 512 192z m54.442667 381.802667v111.658666c0 27.264-33.664 40.490667-52.522667 20.629334l-41.685333-38.08 94.208-94.208z m153.429333-153.386667A192.426667 192.426667 0 0 1 746.666667 518.656a193.28 193.28 0 0 1-99.157334 168.896l-29.589333-56.810667A129.28 129.28 0 0 0 682.666667 518.677333c0-18.005333-3.669333-35.157333-10.325334-50.730666l47.530667-47.530667z m-153.429333-76.266667v18.474667L311.445333 617.664a63.978667 63.978667 0 0 1-32.32-55.637333V477.013333a64 64 0 0 1 64-64l84.437334 1.408 86.357333-90.922666c18.858667-19.84 52.522667-6.613333 52.522667 20.650666z m87.616 142.08a106.602667 106.602667 0 0 1-47.445334 122.752l-25.770666-49.557333 73.216-73.194667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconmute.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconmute) : Iconmute;