import { findMonth } from "../utils/getMonth";
import { Data } from "../utils/types";

// Used in Form and Edit mode to check the input's value
const handleChangeNumber = (
  e: React.ChangeEvent<HTMLInputElement>,
  prop: string,
  periodical: Data,
  setPeriodical: (periodical: Data) => void,
  minLength?: number,
  maxLength?: number,
  isMonth?: boolean
): void => {
  let newValue: number | string;

  if (!Number(e.target.value) && e.target.value !== "0") {
    e.target.value = "";
    return;
  }

  // Length check
  if (minLength && e.target.value.length < minLength) {
    return;
  }

  if (maxLength && e.target.value.length > maxLength) {
    return;
  }

  if (isMonth) {
    newValue = findMonth(Number(e.target.value));
  } else {
    newValue = Math.abs(Number(e.target.value));
  }

  setPeriodical({
    ...periodical,
    [prop]: newValue,
  });
};

export default handleChangeNumber;
