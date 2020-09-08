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

const IconCurrencyConverter: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m86.997333 137.450667l116.117334 116.16-45.269334 45.248-61.845333-61.866667v242.709334h-64V373.546667l0.810667-5.76c1.152-7.210667 2.304-8.746667 8.64-17.024l7.168-3.925334c15.914667-8.469333 18.282667-7.168 38.378666 3.946667zM480.448 341.333333v319.488l-0.832 5.76c-1.130667 7.210667-2.282667 8.725333-8.618667 17.024l-7.168 3.904c-15.936 8.490667-18.282667 7.189333-38.4-3.925333L309.333333 567.424l45.269334-45.248 61.845333 61.866667V341.333333h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCurrencyConverter.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconCurrencyConverter) : IconCurrencyConverter;