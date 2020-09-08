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

const IconsimilarProduct: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M908.074667 618.666667a42.666667 42.666667 0 0 1 33.045333 69.674666l-67.2 82.197334V908.8l-63.274667-16.981333v-145.045334L863.082667 682.666667H712.96L768 746.453333v133.909334l-63.765333-17.130667V770.56l-70.165334-81.322667A42.666667 42.666667 0 0 1 666.368 618.666667h241.706667zM540.373333 160.853333l258.346667 114.752a64 64 0 0 1 38.037333 58.496V576h-64v-181.653333L556.437333 490.453333v343.893334H554.666667v22.4l-14.314667 6.357333a64 64 0 0 1-51.946667 0l-258.389333-114.730667A64 64 0 0 1 192 689.898667V334.101333a64 64 0 0 1 38.016-58.496l258.389333-114.730666a64 64 0 0 1 51.946667 0zM256 391.36v298.56l236.437333 105.002667V489.152L256 391.338667z m258.368-171.968l-244.352 108.501333 256.213333 106.026667 235.498667-104.682667-247.36-109.866666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconsimilarProduct.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconsimilarProduct) : IconsimilarProduct;