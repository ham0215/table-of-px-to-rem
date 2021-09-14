import { createContext, Dispatch, ReactNode, useState } from 'react';
import { PaletteMode } from '@mui/material';

export const PaletteModeContext = createContext<PaletteMode>('light');
export const SetPaletteModeContext = createContext<Dispatch<PaletteMode> | undefined>(undefined);

export default function PaletteModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('light');

  return (
    <PaletteModeContext.Provider value={mode}>
      <SetPaletteModeContext.Provider value={setMode}>{children}</SetPaletteModeContext.Provider>
    </PaletteModeContext.Provider>
  );
}
