import React from 'react';

import BaseShape from './_BaseShape';
import HighlightBorder from './elements/_HighlightBorder';
import HighlightShadow from './elements/_HighlightShadow';

class StackedShape extends React.Component {
  render() {
    const { highlighted, contrastMode, renderTemplate, size } = this.props;

    const verticalDistance = size * (contrastMode ? 0.18 : 0.15);
    const verticalTranslate = t => `translate(0, ${t * verticalDistance})`;

    // Stack three shapes on top of one another pretending they are never highlighted.
    // Instead, fake the highlight of the whole stack with a vertically stretched shape
    // drawn in the background. This seems to give a good approximation of the stack
    // highlight and prevents us from needing to do some render-heavy SVG clipping magic.
    return (
      <g transform={verticalTranslate(-2.5)}>
        <g transform={`${verticalTranslate(1)} scale(${size}, ${1.14 * size})`}>
          {highlighted && HighlightBorder(renderTemplate, contrastMode)}
          {highlighted && HighlightShadow(renderTemplate, contrastMode)}
        </g>
        <g transform={verticalTranslate(2)}>
          <BaseShape
            {...this.props}
            highlighted={false}
            metricValue={undefined}
          />
        </g>
        <g transform={verticalTranslate(1)}>
          <BaseShape
            {...this.props}
            highlighted={false}
            metricValue={undefined}
          />
        </g>
        <g transform={verticalTranslate(0)}>
          <BaseShape
            {...this.props}
            highlighted={false}
            metricValue={undefined}
          />
        </g>
      </g>
    );
  }
}

export default StackedShape;
