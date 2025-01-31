import '../styles/globals.css';
import '@livekit/components-styles';
import '@livekit/components-styles/prefabs';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Портал звонки — аудио и видеозвонки с людьми и ИИ-агентами',
    template: '%s',
  },
  description:
    'Портал звонки — аудио и видеозвонки с людьми и ИИ-агентами',
  twitter: {
    creator: '@livekitted',
    site: '@livekitted',
    card: 'summary_large_image',
  },
  openGraph: {
    url: 'https://meet.portalos.ru',
    images: [
      {
        url: 'https://raw.githubusercontent.com/sorokinvld/portal-brandpack/refs/heads/main/Portal_224.png',
        width: 2000,
        height: 1000,
        type: 'image/png',
      },
    ],
    siteName: 'Portal Meet',
  },
  icons: {
    icon: {
      rel: 'icon',
      url: 'https://raw.githubusercontent.com/sorokinvld/portal-brandpack/refs/heads/main/favicon.ico',
    },
    apple: [
      {
        rel: 'apple-touch-icon',
        url: '/images/livekit-apple-touch.png',
        sizes: '180x180',
      },
      { rel: 'mask-icon', url: '/images/livekit-safari-pinned-tab.svg', color: '#070707' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#070707',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
