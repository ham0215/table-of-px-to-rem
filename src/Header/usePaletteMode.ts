import { useContext, useCallback } from 'react';
import { useTheme } from '@mui/material';
import { SetPaletteModeContext } from 'PaletteModeProvider';

export default function usePaletteMode() {
  const theme = useTheme();
  const setPaletteMode = useContext(SetPaletteModeContext);

  const togglePaletteMode = useCallback(() => {
    if (!setPaletteMode) return;

    const nextMode = theme.palette.mode === 'dark' ? 'light' : 'dark';
    setPaletteMode(nextMode);
  }, [setPaletteMode, theme.palette.mode]);

  return { paletteMode: theme.palette.mode, togglePaletteMode };
}
