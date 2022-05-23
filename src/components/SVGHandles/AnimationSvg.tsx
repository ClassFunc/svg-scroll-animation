import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../Wrapper";
import styles from "../../styles/SVGHandle.module.css";
import { checkDisplay } from "../../utils/AnimationUtil";
import isFunction from "lodash/isFunction";

interface Props {
  data: any[],
  height: string,
  contentStyle?: any,
  topConnect?: boolean,
  bottomConnect?: boolean,
  show?: any,
  viewBox?: string
}

interface ContentProps {
  percent: number,
  data: any[],
  contentStyle?: any,
  show?: any,
  viewBox?: string
}

const textTranslate = ["text", "textCenter", "textEnd"];
const fadeAnimation = ["fadeIn", "fadeOut", "fadeInOut"];

function mergeTransforms(transformOld: string, newEf: string) {
  let transforms = [newEf];
  const newPrefix = newEf.split("(")[0].trim();
  if (transformOld) {
    const data = transformOld.split(" ");
    for (const transformData of data) {
      const oldPrefix = transformData.split("(")[0].trim();
      if (newPrefix !== oldPrefix) {
        transforms.push(transformData);
      }
    }
  }

  return transforms.join(" ");
}

const apply = (action: any, element: any, percent: number, position: any, item: any) => {
  const type = action.type;
  const range: [number, number] = action.range;
  const options: any = action.options;

  percent = range ? percent < range[0] ? range[0] : (percent > range[1] ? range[1] : percent) : percent;
  const rangePercent = range ? range[1] - range[0] : 0;
  const progressGlobal = range ? percent - range[0] : percent;

  switch (type) {
    case "scale":
      const rangeScale = options.end - options.start;
      const value = options.start + rangeScale / rangePercent * progressGlobal;
      element.style.transform = `scale(${value})`;
      break;
    case "translate":
      const xMove = options.x / rangePercent * progressGlobal;
      const yMove = options.y / rangePercent * progressGlobal;
      if (textTranslate.includes(item.type)) {
        element.setAttribute("transform", `translate(${xMove},${yMove})`);
      } else {
        element.setAttribute("x", `${position?.x + options.x / rangePercent * progressGlobal}`);
        element.setAttribute("y", `${position?.y + options.y / rangePercent * progressGlobal}`);
      }
      break;
    case "translate2":
      const xMoveC = options.x / rangePercent * progressGlobal;
      const yMoveC = options.y / rangePercent * progressGlobal;
      if (textTranslate.includes(item.type)) {
        element.style.transform = `translate(${xMoveC}px,${yMoveC}px)`;
      } else {
        element.style.transform = `translate(${position?.x + xMoveC}px,${position?.y + yMoveC}px)`;
      }
      break;
    case "translateTime":
      if ( percent < range[0] + 1 ) {
        element.style.transition = `${ action.time ? action.time : 1000 }ms`;
        element.style.transform = `translate(${options.x}px,${options.y}px)`;
      } else {
        element.style.transform = `translate(0px,0px)`;
      }
      break;
    case "opacity":
      const rangeOpacity = options.end - options.start;
      const opacity = options.start + rangeOpacity / rangePercent * progressGlobal;
      element.style.opacity = `${opacity}`;
      break;
    case "opacity2":
      const rangeOpacity2 = options.end - options.start;
      const opacity2 = options.start + rangeOpacity2 / rangePercent * progressGlobal;

      if (opacity2 > 0.5) {
        element.style.transition = "500ms";
        element.style.opacity = 1;
      } else {
        element.style.opacity = 0;
      }
      break;
    case "moveTo":
      const progressMove = progressGlobal / rangePercent;
      action.from?.x !== void 0 && action.to?.x !== void 0 && element.setAttribute("x", `${action.from.x + (action.to.x - action.from.x) * progressMove}`);
      action.from?.y !== void 0 && action.to?.y && element.setAttribute("y", `${action.from.y + (action.to.y - action.from.y) * progressMove}`);
      break;
    case "translateTo":
      const progressTranslateTo = progressGlobal / rangePercent;
      element.setAttribute("transform", mergeTransforms(element.getAttribute("transform"), `translate(${action.from.x + (action.to.x - action.from.x) * progressTranslateTo},${action.from.y + (action.to.y - action.from.y) * progressTranslateTo})`));
      break;
    case "scaleTo":
      element.setAttribute("transform", mergeTransforms(element.getAttribute("transform"), `scale(${action.from + (action.to - action.from) / rangePercent * progressGlobal})`));
      break;
    case "display":
      if (action.expression !== void 0 && action.value !== void 0 && action.display !== void 0) {
        checkDisplay(element, percent, action);
      }

      if (action.expressions !== void 0) {
        action.expressions.forEach((expression: any) => {
          checkDisplay(element, percent, expression);
        });
      }

      break;
    default:

  }

};

const SCREEN_WIDTH = 1920;

function getRangeFade(action: any, item: any, percent: number) {
  const distance = action.distance || 2;
  const fadeIn = [item.display[0], item.display[0] + distance];
  const fadeOut = [item.display[1] - distance, item.display[1]];
  if (action.type === "fadeInOut") {
    if (percent >= fadeIn[0] && percent <= fadeIn[1]) {
      return { range: fadeIn, type: "fadeIn" };
    }
    if (percent >= fadeOut[0] && percent <= fadeOut[1]) {
      return { range: fadeOut, type: "fadeOut" };
    }
    return {
      range: null, type: null
    };

  }
  if (action.type === "fadeIn") {
    return { range: fadeIn, type: action.type };
  }
  if (action.type === "fadeOut") {
    return { range: fadeOut, type: action.type };
  }
  return { range: null, type: null };

}

function handleFade(element: any, percent: number, action: any, item: any) {
  const position = item.position;
  const { range, type }: any = getRangeFade(action, item, percent);
  if (!range || !type || percent < range[0] || percent > range[1])
    return;
  const rangePercent = range[1] - range[0];
  const moveRange = SCREEN_WIDTH * (action.lane || 0.1);
  const actionPercent = percent - range[0];
  if (rangePercent <= 0 || actionPercent < 0 || actionPercent > rangePercent)
    return;
  let from;
  let to;
  let opacity;
  let distanceCount = 0;
  switch (type) {
    case "fadeIn":
      from = {
        x: position.x - moveRange,
        y: position.y
      };
      to = { ...position };
      opacity = {
        start: 0,
        end: 1
      };
      distanceCount = (1 - actionPercent / rangePercent);
      break;
    case "fadeOut":
      to = {
        x: position.x - moveRange,
        y: position.y
      };
      from = { ...position };
      opacity = {
        start: 1,
        end: 0
      };
      distanceCount = actionPercent / rangePercent;
      break;
    default:

  }
  if (!from || !to || !opacity) return;

  const distance = (to.x - from.x) * distanceCount;
  element.setAttribute("transform", `translate(${distance},0)`);
  element.style.opacity = opacity.start + (opacity.end - opacity.start) * actionPercent / rangePercent;
}

function handleBackground(action: any, element: any, percent: number) {
  if (!action.range || !element)
    return;
  if (action.range[0] <= percent && action.range[1] >= percent) {
    element.style.backgroundSize = "cover";
    element.style.backgroundRepeat = "no-repeat";
    element.style.backgroundImage = `url(${action.url})`;
  }
  // else {
  //     element.style.backgroundImage = `none`
  // }

}

function handleActions(parent: any, percent: number, item: any, cd: boolean) {
  const actions = parent.actions || [];
  let minRange: any = null;
  let maxRange: any = null;
  actions.forEach((action: any) => {
    if (fadeAnimation.includes(action.type)) {
      handleFade(item.ref.current, percent, action, item);
      return;
    }

    if (action.type === "responsive") {
      Object.entries(action.responsive).forEach((kv: [string, any]) => {
        const [key, actions] = kv;
        const expressionAndWidth = key.split("|");
        const expression = expressionAndWidth[0];
        const width = Number(expressionAndWidth[1]);

        const offsetWidth = document.body.offsetWidth;

        if (expression === ">" && offsetWidth > width || expression === ">=" && offsetWidth >= width ||
          expression === "<" && offsetWidth < width ||
          expression === "<=" && offsetWidth <= width) {
          handleActions({ ...item, actions }, percent, item, false);
        }
      });
      return;
    }

    if (parent.type === "cd") {
      if (minRange === null) {
        minRange = action.range[0];
        maxRange = action.range[0];
      } else {
        minRange = minRange > action.range[0] ? action.range[0] : (minRange > action.range[1] ? action.range[1] : minRange);
        maxRange = maxRange < action.range[0] ? action.range[0] : (maxRange < action.range[1] ? action.range[1] : maxRange);
      }
    }
    const IS_CONTINUOUS_DETECTION = cd || action.cd; // Continuous Detection
    if (IS_CONTINUOUS_DETECTION || action.type === "display" || action.range && percent >= action.range[0] && percent <= action.range[1])
      apply(action, item.ref.current, percent, item.position, item);

    if (action.actions && action.actions.length > 0) {
      handleActions(action, percent, item, IS_CONTINUOUS_DETECTION);
    }
  });

  if (parent.type === "cd" && actions.length > 0) {
    if (minRange > percent) {
      apply(actions[0], item.ref.current, percent, item.position, item);
    }

    if (maxRange < percent) {
      apply(actions[actions.length - 1], item.ref.current, percent, item.position, item);
    }
  }
}

const RenderContent = ({ percent, data, contentStyle, show = null, viewBox }: ContentProps) => {
  const [active, setActive] = useState("");

  const dataWidthRef = React.useMemo(() => {
    return data.map(item => ({
      ...item,
      ref: React.createRef()
    }));
  }, [data]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dataWidthRef.forEach(item => {
      if (item.type === "background") {
        handleBackground(item, contentRef.current, percent);
        return;
      }

      if (!item.ref?.current && item.type !== "trigger")
        return;

      const timeDisplay = item.display;

      if (item.cd || percent >= timeDisplay[0] && percent <= timeDisplay[1]) {
        if (timeDisplay) {
          if (percent >= timeDisplay[0] && percent <= timeDisplay[1])
            item.ref.current.style.display = "block";
          else
            item.ref.current.style.display = "none";
        }

        handleActions(item, percent, item, false);
        if (typeof item.effect === "function" && (item.type === "custom" || item.type === "trigger")) {
          item.effect(percent, item.ref.current);
        }
      } else
        item.ref.current.style.display = "none";
    });

  }, [percent, dataWidthRef]);

  useEffect(() => {
    if (!show)
      setActive("");
  }, [show]);

  const getActiveHover = (item: any) => {
    if (!active || !item?.props?.hoverId)
      return false;

    return item.props.hoverId === active;
  };

  const getPosX = (item: any, index: number) => {
    let PosX: number;
    let count: number = Math.round(item.lines.length / 2);
    if (item.lines.length % 2 !== 0) {

      if (index + 1 < Math.round(item.lines.length / 2)) {
        PosX = item.position.x + (index + 1 - count) * (item.fontSize + (Number.isNaN(item.space) ? 60 : Number(item.space)));
      } else if (index + 1 > Math.round(item.lines.length / 2)) {
        PosX = item.position.x + (index + 1 - count) * (item.fontSize + (Number.isNaN(item.space) ? 60 : Number(item.space)));
      } else {
        PosX = item.position.x;
      }
    } else {
      count += 0.5;
      if (index + 1 < (item.lines.length - 1) / 2) {
        PosX = item.position.x + (index + 1 - count) * (item.fontSize + (Number.isNaN(item.space) ? 60 : Number(item.space)));
      } else if (index + 1 > Math.round(item.lines.length / 2)) {
        PosX = item.position.x + (index + 1 - count) * (item.fontSize + (Number.isNaN(item.space) ? 60 : Number(item.space)));
      } else {
        PosX = item.position.x - 0.5 * (item.fontSize + (Number.isNaN(item.space) ? 60 : Number(item.space)));
      }
    }
    return PosX;
  };
  const content = React.useMemo(() => {
    return (
      <svg width={"100%"} height={"100%"} viewBox={viewBox}>
        {
          dataWidthRef.map((item, index) => {
            if (item.type === "image") {
              return (
                <image
                  x={item.position.x}
                  y={item.position.y}
                  href={getActiveHover(item) ? item.srcActive : item.src}
                  width={item.width}
                  height={item.height}
                  ref={item.ref}
                  key={index}
                  style={{
                    ...item.styles
                  }}
                  onClick={(event) => {
                    if (!isFunction(item.onClick))
                      return null;

                    if (getActiveHover(item) && (item.props.isButton || item.props.clickActive))
                      return item.onClick(item.props);

                    item.onClick(event);
                  }}

                  onMouseEnter={() => {
                    if (item?.props?.hoverId)
                      setActive(item.props.hoverId);
                  }}
                  onMouseDown={() => {
                    if (item?.props?.hoverId)
                      setActive(item.props.hoverId);
                  }}
                  onMouseLeave={() => {
                    if (item?.props?.hoverId && !Boolean(show))
                      setActive("");
                  }}
                  className={(getActiveHover(item) && item.props.isButton) ? styles[active] : ""}
                  {...item.props}
                />
              );
            }
            if (item.type === "text") {
              return (
                <g ref={item.ref} key={index}>
                  {
                    item.lines.map((line: string, index: number) => {
                      return (
                        <text x={item.position.x}
                              y={item.position.y + index * (item.fontSize + 10)}
                              fontWeight={item.fontWeight}
                              fontSize={item.fontSize}
                              fill={item.color}
                              style={item.styles}
                              key={index}>{line}</text>
                      );
                    })
                  }
                </g>
              );
            }
            if (item.type === "textCenter") {
              return (
                <g ref={item.ref} key={index}>
                  {
                    item.lines.map((line: string, index: number) => {
                      return (
                        <text x={item.position.x}
                              y={item.position.y + index * (item.fontSize + 10)}
                              fontWeight={item.fontWeight}
                              fontSize={item.fontSize}
                              fill={item.color}
                              key={index}
                              style={item.styles}
                              dominantBaseline="middle"
                              textAnchor="middle"
                        >{line}
                        </text>
                      );
                    })
                  }
                </g>
              );
            }
            if (item.type === "textEnd") {
              return (
                <g ref={item.ref} key={index}>
                  {
                    item.lines.map((line: string, index: number) => {
                      return (
                        <text x={item.position.x}
                              y={item.position.y + index * (item.fontSize + 10)}
                              fontWeight={item.fontWeight}
                              fontSize={item.fontSize}
                              fill={item.color}
                              key={index}
                              dominantBaseline="end"
                              textAnchor="end"
                              style={item.styles}
                        >{line}
                        </text>
                      );
                    })
                  }
                </g>
              );
            }
            if (item.type === "textBetween") {
              return (
                <g ref={item.ref} key={index}>
                  {
                    item.lines.map((line: string, index: number) => {
                      return (
                        <text x={getPosX(item, index)}
                              y={item.position.y + index}
                              fontWeight={item.fontWeight}
                              fontSize={item.fontSize}
                              fill={item.color}
                              key={index}
                              dominantBaseline="middle"
                              textAnchor="middle"
                              style={item.styles}
                        >{line}
                        </text>
                      );
                    })
                  }
                </g>
              );
            }
            if (item.type === "textGradient") {
              return (
                <g ref={item.ref} key={index}>
                  {
                    item.lines.map((line: string, index: number) => {
                      return (
                        <text x={item.position.x}
                              y={item.position.y + index * (item.fontSize + 10)}
                              fontWeight={item.fontWeight}
                              fontSize={item.fontSize}
                              key={index}
                              style={item.styles}
                              dominantBaseline="middle"
                              textAnchor="middle"
                              fill="url(#pattern)"
                        >{line}
                        </text>
                      );
                    })
                  }
                  <defs key={index}>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0"
                                    key={index}>
                      {
                        item.list.map((color: string, index: number): any => {
                          let percent = 100 / item.list.length * index;
                          return (
                            <stop key={index} offset={`${percent}%`}
                                  style={{ stopColor: color }}></stop>
                          );
                        })
                      }
                    </linearGradient>
                    <pattern id="pattern" x="0" y="0" width="300%" height="100%"
                             patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="150%" height="100%" fill="url(#gradient)">
                        <animate attributeType="XML"
                                 attributeName="x"
                                 from="0" to="150%"
                                 dur={`${item.duration}s`}
                                 repeatCount="indefinite" />
                      </rect>
                      <rect x="-150%" y="0" width="150%" height="100%"
                            fill="url(#gradient)">
                        <animate attributeType="XML"
                                 attributeName="x"
                                 from="-150%" to="0"
                                 dur={`${item.duration}s`}
                                 repeatCount="indefinite" />
                      </rect>
                    </pattern>
                  </defs>
                </g>
              );
            }
            if (item.type === "banner") {
              return (
                <g ref={item.ref} key={index}>
                  <rect style={{
                    fill: item.fill,
                    stroke: item.stroke,
                    strokeWidth: item.strokeWidth,
                    opacity: item.opacity
                  }}
                        width={item.width} height={item.height}
                        x={item.position.x} y={item.position.y} rx={item.position.rx}
                        ry={item.position.ry} />
                </g>
              );
            }
            if (item.type === "custom" && typeof item.render === "function") {
              return (
                <g ref={item.ref} key={index}>
                  {item.render()}
                </g>
              );
            }
            if (item.type === "calloutTemplate" && typeof item.render === "function") {
              return (
                <g ref={item.ref} key={index}>
                  {item.render()}
                </g>
              );
            }
            return null;
          })
        }
      </svg>
    );

  }, [dataWidthRef, active, show]);

  return (
    <div className={styles.container} style={{ ...contentStyle }} ref={contentRef}>
      {content}
    </div>
  );
};

export const ContentSVG = React.memo(RenderContent);

function AnimationSvg({
                        data,
                        height = "1000vh",
                        contentStyle,
                        topConnect = false,
                        bottomConnect = true,
                        show = null,
                        viewBox = "0 0 1920 1080"
                      }: Props) {
  return (
    <Wrapper height={height} topConnect={topConnect} bottomConnect={bottomConnect}>
      {({ percent }) => {
        return (
          <ContentSVG percent={percent} data={data} contentStyle={contentStyle} show={show}
                      viewBox={viewBox} />
        );
      }}
    </Wrapper>
  );
}

export default AnimationSvg;
