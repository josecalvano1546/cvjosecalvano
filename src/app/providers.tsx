"use client";

// NextJS
import { ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

// Transaltions
import { BrowserLanguageProvider } from "@/app/hooks/contexts/useBrowserLanguage";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextThemeProvider>
      <BrowserLanguageProvider>{children}</BrowserLanguageProvider>
    </NextThemeProvider>
  );
}
