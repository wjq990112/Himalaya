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

const Iconinsurance: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M542.72 163.84v62.8736c164.4544 15.29856 293.66272 152.12544 296.89856 319.7952L839.68 552.96H542.72v194.56a102.4 102.4 0 0 1-204.6976 4.44416L337.92 747.52v-20.48h61.44v20.48a40.96 40.96 0 0 0 81.8176 3.072l0.1024-3.072V552.96H184.32c0-170.61888 130.39616-310.784 296.96-326.2464V163.84h61.44zM512 286.72l-9.50272 0.16384a270.09024 270.09024 0 0 0-10.52672 0.57344l8.88832-0.512c-3.6864 0.16384-7.35232 0.38912-10.99776 0.67584l2.10944-0.16384c-3.09248 0.22528-6.18496 0.512-9.23648 0.86016l7.12704-0.69632c-115.97824 9.54368-210.88256 93.42976-236.97408 203.89888h518.22592l-1.51552-6.144c-28.30336-108.19584-122.94144-189.39904-237.58848-197.91872a268.9024 268.9024 0 0 0-8.8064-0.512l8.8064 0.512c-3.50208-0.26624-7.02464-0.45056-10.5472-0.57344L512 286.72z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconinsurance.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconinsurance) : Iconinsurance;