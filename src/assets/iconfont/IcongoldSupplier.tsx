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

const IcongoldSupplier: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333zM213.333333 512c0 154.133333 116.757333 281.002667 266.666667 296.96V682.666667h64v126.293333C693.930667 793.002667 810.666667 666.133333 810.666667 512s-116.757333-281.002667-266.666667-296.96V341.333333h-64v-126.293333C330.090667 230.976 213.333333 357.845333 213.333333 512z m423.104 21.333333L661.333333 618.666667H362.666667l24.896-85.333334h248.874666zM661.333333 405.333333l-24.896 85.333334H387.562667L362.666667 405.333333h298.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcongoldSupplier.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcongoldSupplier) : IcongoldSupplier;