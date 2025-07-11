import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Para esconder a top bar apenas nessa página, você pode usar um efeito colateral
// para adicionar uma classe ao body ou algum controle/contexto de layout.
// Aqui está uma solução simples usando body, mas adapte caso use layout global.

const NotFound = () => {
  useEffect(() => {
    // Adiciona uma classe ao body para esconder a top bar
    document.body.classList.add("hide-top-bar");
    // Redirecionamento após 10 segundos
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 10000);
    return () => {
      document.body.classList.remove("hide-top-bar");
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        color: "#111",
        textAlign: "center",
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: 420,
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "min(90vw, 340px)",
            height: "min(45vw, 170px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <DotLottieReact
            src="https://lottie.host/07fd9976-3243-47a8-a0b8-3159bce9847d/FSrlo3HoXm.lottie"
            loop
            autoplay
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "clamp(1.5rem, 6vw, 2.5rem)",
            fontWeight: 700,
            marginBottom: 0,
          }}
        >
          Oops!
        </span>
        <span
          style={{
            fontSize: "clamp(4rem, 22vw, 7rem)",
            fontWeight: 900,
            letterSpacing: "2px",
            lineHeight: 1,
            marginBottom: 16,
          }}
        >
          404
        </span>
        <span
          style={{
            fontSize: "clamp(1rem, 3vw, 1.2rem)",
            fontWeight: 400,
            maxWidth: 340,
            margin: "0 auto",
            display: "block",
            wordBreak: "break-word",
          }}
        >
          Your page is currently under maintenance
          <br />
          and will guide you back to the homepage
          <br />
          after 10 seconds.
        </span>
      </div>
    </div>
  );
};

export default NotFound;
