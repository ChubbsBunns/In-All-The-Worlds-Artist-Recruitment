'use client';

import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  // Extend this with fonts, colours, and radius defaults once the visual direction is set.
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      {children}
    </MantineProvider>
  );
}
