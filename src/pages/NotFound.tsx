import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <div
        style={{
          width: "min(90vw, 440px)",
          height: "min(90vw, 440px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
      <h1 style={{ marginTop: 32, fontSize: 24, color: "#333" }}>
        Página não encontrada
      </h1>
    </div>
  );
};

export default App;
