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

const Iconconfirm: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.333333 213.333333v64h21.312H234.666667v469.333334h512V511.978667L810.666667 512v-64.042667V746.666667a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64h490.666666z m105.152 41.6l45.696 44.8-315.626666 322.090667-156.842667-161.365333 45.909333-44.608 111.125334 114.346666L830.485333 254.933333z m-41.173333-25.301333c0.896 0.789333 1.749333 1.6 2.581333 2.432l-2.56 2.581333v-5.013333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconconfirm.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconconfirm) : Iconconfirm;