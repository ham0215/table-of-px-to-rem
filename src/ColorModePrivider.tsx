import { createContext, Dispatch, ReactNode, useState } from 'react';
import { PaletteMode } from '@mui/material';

export const ModeContext = createContext<PaletteMode>('light');
export const SetModeContext = createContext<Dispatch<PaletteMode> | undefined>(undefined);

export default function DarkmodeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('light');

  return (
    <ModeContext.Provider value={mode}>
      <SetModeContext.Provider value={setMode}>{children}</SetModeContext.Provider>
    </ModeContext.Provider>
  );
}
