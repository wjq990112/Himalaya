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

const IconconsumptionFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m84.053333 169.386667L512 402.730667l-84.053333-84.053334-45.226667 45.269334 84.032 84.010666L352 448v64h128v53.333333h-128v64h128v85.333334h64v-85.333334h128v-64h-128V512h128v-64h-114.752l84.053333-84.053333-45.269333-45.226667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconconsumptionFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconconsumptionFill) : IconconsumptionFill;