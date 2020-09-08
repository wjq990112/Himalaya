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

const Iconshenqingjilu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.666667 192a64 64 0 0 1 64 64v444.586667L657.6 874.666667H298.666667a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64v618.666667h266.645333l0.021333-181.333334H746.666667V192z m-14.848 501.333333H629.333333l-0.021333 116.586667 102.506667-116.586667zM554.666667 512v64h-192v-64h192z m106.666666-128v64H362.666667v-64h298.666666z m42.666667-234.666667v106.666667h-64V149.333333h64zM402.816 149.333333v106.666667h-64V149.333333h64zM597.333333 182.72v64h-149.333333v-64h149.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshenqingjilu.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconshenqingjilu) : Iconshenqingjilu;