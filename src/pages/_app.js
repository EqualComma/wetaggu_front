import React from "react";
import Header from "@/components/layout/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;

