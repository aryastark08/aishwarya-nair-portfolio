import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./styles/globals.css";
import { ThemeProvider } from "./components/Theme-Provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

  title: "Aishwarya Nair",
  authors: {
    name: "aishwarya nair",
  },

  description:
    "I'm a passionate React frontend developer and content writer with a curiosity that knows no bounds. My journey began with crafting beautiful user experiences through frontend development, but my thirst for exploration led me to delve into backend development and ethical hacking. Now, I'm setting my sights on cybersecurity, honing my networking skills to forge a path in this dynamic field.",
  openGraph: {
    title: "Aishwarya Nair",
    description:
      "I'm a passionate React frontend developer and content writer with a curiosity that knows no bounds. My journey began with crafting beautiful user experiences through frontend development, but my thirst for exploration led me to delve into backend development and ethical hacking. Now, I'm setting my sights on cybersecurity, honing my networking skills to forge a path in this dynamic field",
    url: "https://next-supabase-vote.vercel.app/",
    siteName: "Aishwarya Nair Portfolio",
    images: "/profile-prj.png",
    type: "website",
  },
  keywords: ["aishwarya nair portfolio", "aishwarya nair", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="shortcut icon"
          href="/icon.jpg"
          type="image/x-icon"
          className="rounded-full w-10 h-10"
        />
        <SpeedInsights />
      </head>
      <body className={space_grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
