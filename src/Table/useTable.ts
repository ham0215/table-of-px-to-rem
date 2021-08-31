import { useCallback, useState } from "react";

export default function useTable() {
  const [index, setIndex] = useState<number>(1);
  const [fontSize, setFontSize] = useState<number>(16);
  const [error, setError] = useState<string | null>(null);

  const handleChangeIndex = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
    setIndex(page);
  }, []);

  const handleChangeFontSize = useCallback(({ fontSize }: { fontSize: number }) => {
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
