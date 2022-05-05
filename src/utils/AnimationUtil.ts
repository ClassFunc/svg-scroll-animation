export const display = (
  element: any,
  percent: number,
  expression: string,
  value: number,
  display: string
) => {
  if (expression === ">" && percent > value) {
    element.style.display = display;
  } else if (expression === ">=" && percent >= value) {
    element.style.display = display;
  } else if (expression === "<" && percent < value) {
    element.style.display = display;
  } else if (expression === "<=" && percent <= value) {
    element.style.display = display;
  }
};

export const checkDisplay = (element: any, percent: number, expression: any) => {
  if (expression.expression !== void 0 && expression.value !== void 0 && expression.display !== void 0) {
    display(element, percent, expression.expression, expression.value, expression.display);
  }
};
