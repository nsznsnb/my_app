import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import SideBar from "./components/SideBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const menus = [
  { title: "単語帳", path: "/wordbook" },
  { title: "テスト", path: "/quiz" },
  { title: "学習記録", path: "/learning_record" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Header menus={menus} />
          <Box sx={{ display: "flex" }} height={"100vh"}>
            <SideBar menus={menus} />
            <Container>{children}</Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
