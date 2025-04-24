import React, { useState } from "react";
import { Box } from "@mui/material";
import { DragIndicator } from "@mui/icons-material";
import { RxCornerBottomRight } from "react-icons/rx";

const ResBox = (props) => {
  const [dimensions, setDimensions] = useState({ width: 200, height: 300 });

  React.useEffect(() => {
    if (props.width && props.height) {
        setDimensions({ width: props.width, height: props.height });
    }
    else{
        setDimensions({ width: 200, height: 300 });

    }
  }, [props.width, props.height]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = dimensions.width;
    const startHeight = dimensions.height;

    const handleMouseMove = (moveEvent) => {
      const newWidth = startWidth + (moveEvent.clientX - startX);
      const newHeight = startHeight + (moveEvent.clientY - startY);
      setDimensions({
        width: Math.max(100, newWidth), // Minimum width of 100px
        height: Math.max(100, newHeight), // Minimum height of 100px
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <Box
        sx={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ padding: "16px" }}>{props.children}</Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            cursor: "nwse-resize",
            padding: "8px",
          }}
          onMouseDown={handleMouseDown}
        >
          <RxCornerBottomRight />
        </Box>
      </Box>
    </>
  );
};

export default ResBox;