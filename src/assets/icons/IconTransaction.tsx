import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';
const IconTransaction = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="url(#pattern0_51_224)" />
    <Defs>
      <Pattern
        id="pattern0_51_224"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_51_224" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_51_224"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default IconTransaction;
