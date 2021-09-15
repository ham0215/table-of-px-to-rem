import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { PaletteMode } from '@mui/material';

export const PaletteModeContext = createContext<PaletteMode>('light');
export const TogglePaletteModeContext = createContext<(() => void) | undefined>(undefined);

export default function PaletteModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('paletteMode');
    if (savedMode !== 'light' && savedMode !== 'dark') return;

    setMode(savedMode);
  }, [setMode]);

  const togglePaletteMode = useCallback(() => {
    if (!setMode) return;

    const nextMode = mode === 'dark' ? 'light' : 'dark';
    setMode(nextMode);
    localStorage.setItem('paletteMode', nextMode);
  }, [mode]);

  return (
    <PaletteModeContext.Provider value={mode}>
      <TogglePaletteModeContext.Provider value={togglePaletteMode}>{children}</TogglePaletteModeContext.Provider>
    </PaletteModeContext.Provider>
  );
}
