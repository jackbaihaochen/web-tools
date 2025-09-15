import React, { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import zhCN from 'antd/locale/zh_CN';

type Mode = 'dark' | 'light';

type ThemeCtx = {
  mode: Mode;
  isDark: boolean;
  toggle: () => void;
  setMode: (m: Mode) => void;
};

const Ctx = createContext<ThemeCtx | null>(null);

export function useThemeMode() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useThemeMode must be used within ThemeProvider');
  return ctx;
}

const THEME_KEY = 'theme-mode';

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<Mode>('dark');

  // hydrate from localStorage or prefers-color-scheme
  useEffect(() => {
    const saved = (localStorage.getItem(THEME_KEY) as Mode | null);
    if (saved === 'dark' || saved === 'light') {
      setMode(saved);
      return;
    }
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setMode(mq.matches ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, mode);
  }, [mode]);

  const isDark = mode === 'dark';
  const algorithm = isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm;

  const value = useMemo<ThemeCtx>(() => ({ mode, isDark, toggle: () => setMode(prev => prev === 'dark' ? 'light' : 'dark'), setMode }), [mode]);

  return (
    <Ctx.Provider value={value}>
      <ConfigProvider locale={zhCN} theme={{ algorithm }}>
        {children}
      </ConfigProvider>
    </Ctx.Provider>
  );
}

