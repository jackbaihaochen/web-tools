import React, { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import jaJP from 'antd/locale/ja_JP';
import i18n, { Lang } from '@/i18n';

type Mode = 'dark' | 'light';

type ThemeCtx = {
  mode: Mode;
  isDark: boolean;
  toggle: () => void;
  setMode: (m: Mode) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
};

const Ctx = createContext<ThemeCtx | null>(null);

export function useThemeMode() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useThemeMode must be used within ThemeProvider');
  return ctx;
}

const THEME_KEY = 'theme-mode';
const LANG_KEY = 'lang';

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<Mode>('dark');
  const [lang, setLang] = useState<Lang>('zh');

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

  // init lang from URL (?lang=) or localStorage or detector
  useEffect(() => {
    const url = new URL(window.location.href);
    const qsLang = url.searchParams.get('lang') as Lang | null;
    const saved = (localStorage.getItem(LANG_KEY) as Lang | null);
    const initial = (qsLang || saved || (i18n.language as Lang) || 'zh');
    if (['zh', 'en', 'ja'].includes(initial)) {
      setLang(initial as Lang);
      i18n.changeLanguage(initial);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [lang]);

  const value = useMemo<ThemeCtx>(() => ({ mode, isDark, toggle: () => setMode(prev => prev === 'dark' ? 'light' : 'dark'), setMode, lang, setLang }), [mode, lang]);

  const antdLocale = lang === 'zh' ? zhCN : lang === 'ja' ? jaJP : enUS;

  return (
    <Ctx.Provider value={value}>
      <ConfigProvider locale={antdLocale} theme={{ algorithm }}>
        {children}
      </ConfigProvider>
    </Ctx.Provider>
  );
}
