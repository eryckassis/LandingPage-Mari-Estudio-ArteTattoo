import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/lovable-uploads/iphone.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: 420,
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "min(90vw, 320px)",
            height: "min(90vw, 180px)",
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
        <span style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 0 }}>
          Oops!
        </span>
        <span
          style={{
            fontSize: "6.5rem",
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
            fontSize: "1.5rem",
            fontWeight: 500,
            letterSpacing: "0.5px",
            lineHeight: 1.5,

            textAlign: "center",
            padding: "0 20px",
            maxWidth: 322,
            margin: "0 auto 15px auto",
            display: "",
            wordBreak: "break-word",
          }}
        >
          Sua Página Está em Manutenção
          <br />
          Vamos enviá-la de volta a página inicial
          <br />
          Depois de 10 segundos.
        </span>
      </div>
    </div>
  );
};

export default NotFound;
