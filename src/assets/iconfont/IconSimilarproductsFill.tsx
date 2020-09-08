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

const IconSimilarproductsFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 832v64H597.333333v-64h298.666667zM192 355.477333l300.373333 132.672-1.621333 375.978667a64.064 64.064 0 0 1-2.346667-1.002667l-258.389333-114.730666A64 64 0 0 1 192 689.898667V355.477333zM896 725.333333v64H597.333333v-64h298.666667z m0-106.666666v64H597.333333v-64h298.666667z m-59.264-259.626667V576h-280.746667l0.362667-86.122667 280.384-130.837333zM540.352 160.853333l258.346667 114.752c9.834667 4.373333 18.197333 11.008 24.533333 19.157334l-297.002667 139.114666-318.784-141.482666a63.914667 63.914667 0 0 1 22.570667-16.789334l258.389333-114.730666a64 64 0 0 1 51.946667 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSimilarproductsFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconSimilarproductsFill) : IconSimilarproductsFill;