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

const IconRfqWordFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 234.666667a64 64 0 0 1 64 64v426.666666a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V298.666667a64 64 0 0 1 64-64h597.333334z m-120.490667 168.874666a97.6 97.6 0 0 0-39.424 8.704 93.333333 93.333333 0 0 0-32 24.32 109.845333 109.845333 0 0 0-20.224 37.888 154.048 154.048 0 0 0-4.864 36.352c0 12.288 1.536 24.32 4.608 36.096 4.096 13.994667 10.666667 26.624 19.712 37.888 8.704 10.069333 19.2 18.005333 31.488 23.808a105.621333 105.621333 0 0 0 39.68 8.704c3.754667 9.386667 8.448 18.432 14.08 27.136l55.04-0.256c-8.533333-12.117333-15.957333-24.832-22.272-38.144a91.157333 91.157333 0 0 0 37.888-39.936 123.52 123.52 0 0 0 12.288-55.296 174.08 174.08 0 0 0-4.864-36.352 108.650667 108.650667 0 0 0-19.712-37.888 91.477333 91.477333 0 0 0-31.488-24.32c-12.8-5.632-26.112-8.533333-39.936-8.704z m-339.2 5.12H263.68v203.52h51.456V538.453333h22.016c6.144 15.189333 13.056 29.952 20.736 44.288 5.632 10.069333 11.946667 19.882667 18.944 29.44h62.72a835.285333 835.285333 0 0 1-30.464-42.496 464.170667 464.170667 0 0 1-23.296-38.656 71.68 71.68 0 0 0 27.392-24.576c6.144-9.898667 9.301333-20.821333 9.472-32.768-0.512-19.626667-8.277333-35.754667-23.296-48.384a73.813333 73.813333 0 0 0-25.344-13.312 97.557333 97.557333 0 0 0-23.04-3.328z m232.448 0h-136.192v203.52h51.2v-76.8h73.984v-39.68h-73.984v-46.08h84.992v-40.96z m106.752 39.424c6.314667 0.170667 12.288 1.706667 17.92 4.608 5.973333 3.413333 10.922667 7.936 14.848 13.568 4.437333 6.826667 7.594667 14.250667 9.472 22.272 1.536 7.338667 2.389333 14.762667 2.56 22.272a123.093333 123.093333 0 0 1-2.56 22.528 69.973333 69.973333 0 0 1-9.472 22.016 50.261333 50.261333 0 0 1-14.848 13.312 38.592 38.592 0 0 1-17.92 4.352c-6.485333 0-12.629333-1.450667-18.432-4.352a45.098667 45.098667 0 0 1-15.104-13.312A69.973333 69.973333 0 0 1 647.168 533.333333a109.653333 109.653333 0 0 1 0-44.544c1.877333-8.021333 5.034667-15.445333 9.472-22.272 4.096-5.632 9.130667-10.154667 15.104-13.568 5.802667-3.072 11.946667-4.693333 18.432-4.864z m-348.672 1.536c7.850667 0.170667 14.848 2.645333 20.992 7.424 5.802667 4.949333 8.789333 11.093333 8.96 18.432a24.96 24.96 0 0 1-8.448 18.688 32.426667 32.426667 0 0 1-21.76 7.424h-26.112v-51.968h26.368z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRfqWordFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconRfqWordFill) : IconRfqWordFill;