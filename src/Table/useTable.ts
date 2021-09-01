import React from "react";
import { useCallback, useState } from "react";

export const PAGINATION_MAX_COUNT = 15;
export const MAX_FONT_SIZE = 32;

export default function useTable() {
  const [index, setIndex] = useState<number>(1);
  const [fontSize, setFontSize] = useState<number>(16);
  const [error, setError] = useState<string | null>(null);

  const handleChangeIndex = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
    if (!Number.isInteger(page) || page <= 0 || page > PAGINATION_MAX_COUNT) {
      setError(`Please set an integer from 1 to ${PAGINATION_MAX_COUNT} on the page.`);
      return;
    }

    setError('');
    setIndex(page);
  }, []);

  const handleChangeFontSize = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const fontSize = parseInt(event.target.value);

    if (!Number.isInteger(fontSize) || fontSize <= 0 || fontSize > MAX_FONT_SIZE) {
      setError(`Please set an integer from 1 to ${MAX_FONT_SIZE} on the font-size.`);
      return;
    }

    setError('');
    setFontSize(fontSize);
  }, [setFontSize]);

  return {
    index,
    handleChangeIndex,
    fontSize,
    handleChangeFontSize,
    error
  };
}
