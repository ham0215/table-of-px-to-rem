import { useState } from "react";

export default function useTable() {
  const [index, setIndex] = useState<number>(1);
  const [fontSize, setFontSize] = useState<number>(16);

  return {
    index,
    setIndex,
    fontSize,
    setFontSize
  };
}
