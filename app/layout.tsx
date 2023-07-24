import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">
          <div className={`min-h-screen`}>
            {/* <Navbar /> */}
            <div className="min-h-screen w-full">{children}</div>
            {/* <Footer /> */}
            {/* <CookieConsent /> */}
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
