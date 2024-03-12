// // @ts-nocheck

// "use client";

// import React from "react";

// export default function DesktopCursor() {
//   const cursorDotOutline = React.useRef();
//   const cursorDot = React.useRef();
//   const requestRef = React.useRef();
//   const previousTimeRef = React.useRef();
//   let [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
//   const [width, setWidth] = React.useState(1024);
//   const [height, setHeight] = React.useState(768);
//   let cursorVisible = React.useState(true);
//   let cursorEnlarged = React.useState(false);

//   /**
//    * Mouse Moves
//    */
//   const onMouseMove = (event) => {
//     const { pageX: x, pageY: y } = event;
//     setMousePosition({ x, y });
//     positionDot(event);
//   };
//   const onMouseEnter = () => {
//     cursorVisible.current = true;
//     toggleCursorVisibility();
//   };
//   const onMouseLeave = () => {
//     cursorVisible.current = false;
//     toggleCursorVisibility();
//   };
//   const onMouseDown = () => {
//     cursorEnlarged.current = true;
//     toggleCursorSize();
//   };
//   const onMouseUp = () => {
//     cursorEnlarged.current = false;
//     toggleCursorSize();
//   };
//   const onResize = (event) => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   };

//   /**
//    * Hooks
//    */
//   React.useEffect(() => {
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseenter", onMouseEnter);
//     document.addEventListener("mouseleave", onMouseLeave);
//     document.addEventListener("mousedown", onMouseDown);
//     document.addEventListener("mouseup", onMouseUp);
//     window.addEventListener("resize", onResize);
//     requestRef.current = requestAnimationFrame(animateDotOutline);

//     // Handle Link Hovers
//     handleLinkHovers();

//     return () => {
//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mouseenter", onMouseEnter);
//       document.removeEventListener("mouseleave", onMouseLeave);
//       document.removeEventListener("mousedown", onMouseDown);
//       document.removeEventListener("mouseup", onMouseUp);
//       window.removeEventListener("resize", onResize);
//       cancelAnimationFrame(requestRef.current);
//     };
//   }, []);

//   let { x, y } = mousePosition;
//   const winDimensions = { width, height };
//   let endX = winDimensions.width / 2;
//   let endY = winDimensions.height / 2;

//   /**
//    * Position Dot (cursor)
//    * @param {event}
//    */
//   function positionDot(e) {
//     cursorVisible.current = true;
//     toggleCursorVisibility();
//     // Position the dot
//     endX = e.pageX;
//     endY = e.pageY;
//     cursorDot.current.style.top = endY + "px";
//     cursorDot.current.style.left = endX + "px";
//   }

//   /**
//    * Toggle Cursor Visiblity
//    */
//   function toggleCursorVisibility() {
//     if (cursorVisible.current) {
//       cursorDot.current.style.opacity = 1;
//       cursorDotOutline.current.style.opacity = 1;
//     } else {
//       cursorDot.current.style.opacity = 0;
//       cursorDotOutline.current.style.opacity = 0;
//     }
//   }

//   /**
//    * Toggle Cursor Size
//    */
//   function toggleCursorSize() {
//     if (cursorEnlarged.current) {
//       cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
//       cursorDotOutline.current.style.transform =
//         "translate(-50%, -50%) scale(1.5)";
//     } else {
//       cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
//       cursorDotOutline.current.style.transform =
//         "translate(-50%, -50%) scale(1)";
//     }
//   }

//   /**
//    * Handle LInks
//    * Applies mouseover/out hooks on all links
//    * to trigger cursor animation
//    */
//   function handleLinkHovers() {
//     document.querySelectorAll("a").forEach((el) => {
//       el.addEventListener("mouseover", () => {
//         cursorEnlarged.current = true;
//         toggleCursorSize();
//       });
//       el.addEventListener("mouseout", () => {
//         cursorEnlarged.current = false;
//         toggleCursorSize();
//       });
//     });
//   }

//   /**
//    * Animate Dot Outline
//    * Aniamtes cursor outline with trailing effect.
//    * @param {number} time
//    */
//   const animateDotOutline = (time) => {
//     if (previousTimeRef.current !== undefined) {
//       x += (endX - x) / 8;
//       y += (endY - y) / 8;
//       cursorDotOutline.current.style.top = y + "px";
//       cursorDotOutline.current.style.left = x + "px";
//     }
//     previousTimeRef.current = time;
//     requestRef.current = requestAnimationFrame(animateDotOutline);
//   };

//   return (
//     <>
//       <div ref={cursorDotOutline} id="cursor-dot-outline"></div>
//       <div ref={cursorDot} id="cursor-dot"></div>
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

const DesktopCursor: React.FC = () => {
  const isClient = typeof window !== "undefined";
  const cursorDotOutline = useRef<HTMLDivElement>(null);
  const cursorDot = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(true); // Set initial state to true
  const [cursorEnlarged, setCursorEnlarged] = useState(false);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const { pageX: x, pageY: y } = event;
      setMousePosition({ x, y });
      positionDot(event);
    };

    const onMouseEnter = () => {
      setCursorVisible(true);
    };

    const onMouseLeave = () => {
      setCursorVisible(false);
    };

    const onMouseDown = () => {
      setCursorEnlarged(true);
    };

    const onMouseUp = () => {
      setCursorEnlarged(false);
    };

    const onResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    if (isClient) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      window.addEventListener("resize", onResize);
      requestRef.current = requestAnimationFrame(animateDotOutline);

      // Ensure cursor is initially visible if width is greater than 1024px
      if (window.innerWidth > 1024) {
        toggleCursorVisibility();
      }
    }

    return () => {
      if (isClient) {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(requestRef.current!);
      }
    };
  }, []);

  let { x, y } = mousePosition;
  const winDimensions = { width, height };
  let endX = winDimensions.width / 2;
  let endY = winDimensions.height / 2;

  function positionDot(e: MouseEvent) {
    setCursorVisible(true);
    endX = e.pageX;
    endY = e.pageY;
    cursorDot.current!.style.top = endY + "px";
    cursorDot.current!.style.left = endX + "px";
  }

  function toggleCursorVisibility() {
    if (cursorVisible) {
      cursorDot.current!.style.opacity = "1";
      cursorDotOutline.current!.style.opacity = "1";
    } else {
      cursorDot.current!.style.opacity = "0";
      cursorDotOutline.current!.style.opacity = "0";
    }
  }

  function toggleCursorSize() {
    if (cursorEnlarged) {
      cursorDot.current!.style.transform = "translate(-50%, -50%) scale(0.7)";
      cursorDotOutline.current!.style.transform =
        "translate(-50%, -50%) scale(1.5)";
    } else {
      cursorDot.current!.style.transform = "translate(-50%, -50%) scale(1)";
      cursorDotOutline.current!.style.transform =
        "translate(-50%, -50%) scale(1)";
    }
  }

  function handleLinkHovers() {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => {
        setCursorEnlarged(true);
      });
      el.addEventListener("mouseout", () => {
        setCursorEnlarged(false);
      });
    });
  }

  const animateDotOutline = (time: number) => {
    if (previousTimeRef.current !== null) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      cursorDotOutline.current!.style.top = y + "px";
      cursorDotOutline.current!.style.left = x + "px";
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  useEffect(() => {
    if (isClient && window.innerWidth > 1024) {
      handleLinkHovers();
    }
  }, [isClient]);

  return (
    <>
      <div ref={cursorDotOutline} id="cursor-dot-outline"></div>
      <div ref={cursorDot} id="cursor-dot"></div>
    </>
  );
};

export default DesktopCursor;
