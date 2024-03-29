
import "./globals.css";
import localFont from 'next/font/local'


const localMarlin = localFont({
  src: [
    {
      path: '../assets/fonts/MarlinGeoSQ-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MarlinGeoSQ-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MarlinGeoSQ-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
  ]
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={localMarlin.className + " bg-fondo w-screen h-screen"}>
        {children}
      </body>
    </html>
  );
}
