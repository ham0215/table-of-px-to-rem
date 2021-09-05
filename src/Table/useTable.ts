import React, { useEffect } from "react";
import { useCallback, useState } from "react";

export const PAGINATION_MAX_COUNT = 15;
export const MAX_FONT_SIZE = 32;

function validateFontSize(fontSize: number) {
  return (
    Number.isInteger(fontSize) && fontSize > 0 && fontSize <= MAX_FONT_SIZE
  );
}

export default function useTable() {
  const [index, setIndex] = useState<number>(1);
  const [fontSize, setFontSize] = useState<number>(16);
  const [error, setError] = useState<string | null>(null);

  const handleChangeIndex = useCallback(
    (event: React.ChangeEvent<unknown>, page: number) => {
      if (!Number.isInteger(page) || page <= 0 || page > PAGINATION_MAX_COUNT) {
        setError(
          `Please set an integer from 1 to ${PAGINATION_MAX_COUNT} on the page.`
        );
        return;
      }

      setError("");
      setIndex(page);
    },
    []
  );

  const handleChangeFontSize = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const fontSize = parseInt(event.target.value);

      if (!validateFontSize(fontSize)) {
        setError(
          `Please set an integer from 1 to ${MAX_FONT_SIZE} on the font-size.`
        );
        return;
      }

      setError("");
      setFontSize(fontSize);
      localStorage.setItem("fontSize", String(fontSize));
    },
    [setFontSize]
  );

  useEffect(() => {
    const savedFontSize = localStorage.getItem("fontSize");
    if (!savedFontSize || !parseInt(savedFontSize)) return;

    const parseFontSize = parseInt(savedFontSize);
    if (validateFontSize(parseFontSize)) setFontSize(parseFontSize);
  }, [setFontSize]);

  return {
    index,
    handleChangeIndex,
    fontSize,
    handleChangeFontSize,
    error,
  };
}
