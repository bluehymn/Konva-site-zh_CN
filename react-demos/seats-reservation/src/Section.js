import React from "react";
import { Rect, Group, Text } from "./react-konva";
import SubSection from "./SubSection";

import {
  SECTION_TOP_PADDING,
  getSectionWidth,
  getSubsectionWidth
} from "./layout";

export default ({
  section,
  height,
  x,
  y,
  onHoverSeat,
  onSelectSeat,
  onDeselectSeat,
  selectedSeatsIds
}) => {
  const containerRef = React.useRef();
  React.useEffect(() => {
    containerRef.current.cache();
    containerRef.current.getLayer().batchDraw();
  });
  const width = getSectionWidth(section);
  let lastSubsectionX = 0;
  return (
    <Group y={y} x={x} ref={containerRef}>
      <Rect
        width={width}
        height={height}
        fill="white"
        strokeWidth={1}
        stroke="lightgrey"
        cornerRadius={5}
      />
      {section.subsections.map(subsection => {
        const subWidth = getSubsectionWidth(subsection);
        const pos = lastSubsectionX;
        lastSubsectionX += subWidth;

        return (
          <SubSection
            x={pos}
            y={SECTION_TOP_PADDING}
            key={subsection.name}
            data={subsection}
            width={subWidth}
            height={height}
            onHoverSeat={onHoverSeat}
            onSelectSeat={onSelectSeat}
            onDeselectSeat={onDeselectSeat}
            selectedSeatsIds={selectedSeatsIds}
          />
        );
      })}
      <Text
        text={section.name}
        height={SECTION_TOP_PADDING}
        width={width}
        align="center"
        verticalAlign="middle"
        fontSize={20}
      />
    </Group>
  );
};
