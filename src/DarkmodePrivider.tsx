import { createContext, ReactNode, useState } from 'react';

export default function DarkmodeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const DarkContext = createContext(mode);
  const SetDarkContext = createContext(setMode);

  return (
    <DarkContext.Provider value={mode}>
      <SetDarkContext.Provider value={setMode}>{children}</SetDarkContext.Provider>
    </DarkContext.Provider>
  );
}
