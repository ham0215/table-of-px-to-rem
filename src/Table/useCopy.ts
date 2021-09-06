import { useCallback, useState } from 'react';

export default function useCopy() {
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleCopy = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const text = event.currentTarget.firstElementChild?.textContent;
      if (!text) return;

      navigator.clipboard.writeText(text.split(' ')[2]).then(() => {
        setOpenSnackBar(true);
      });
    },
    [setOpenSnackBar]
  );

  const closeSnackBar = useCallback(() => {
    setOpenSnackBar(false);
  }, [setOpenSnackBar]);

  return {
    handleCopy,
    openSnackBar,
    closeSnackBar,
  };
}
