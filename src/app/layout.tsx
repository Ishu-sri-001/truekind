import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";


const EditorialNewRegular = localFont({
  src: [
    {
      path: './fonts/EditorialNew-Regular.woff2',
      weight: '400',
      style: 'normal', 
    },
    //  {
    //   path: './fonts/EditorialNew-Italic.woff2',
    //   weight: '400',
    //   style: 'normal', 
    // },
  ],
  variable:"--font-display"
})



const PPMoriRegular = localFont({
  src: [
    {
      path: './fonts/PPMori-Regular.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
   variable:"--font-body"

})



export const metadata: Metadata = {
  title: "TrueKind",
  description: "TrueKind skincare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${EditorialNewRegular.variable} ${PPMoriRegular.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
