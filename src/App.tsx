import GlitchText from "./components/GlitchText.tsx";

function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <GlitchText text="GLITCH EFFECT" />
      <a
        href="https://github.com/huamanraj/Glitch-text-component" 
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          bottom: "35px",
          right: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.578 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.836 2.807 1.305 3.49.998.108-.774.42-1.305.764-1.605-2.665-.303-5.466-1.333-5.466-5.932 0-1.31.468-2.382 1.237-3.22-.124-.303-.536-1.523.118-3.176 0 0 1.01-.322 3.31 1.23a11.545 11.545 0 013.012-.404c1.022.004 2.05.138 3.012.404 2.3-1.552 3.31-1.23 3.31-1.23.655 1.653.243 2.873.118 3.176.77.838 1.237 1.91 1.237 3.22 0 4.61-2.805 5.624-5.475 5.92.432.373.817 1.105.817 2.227 0 1.61-.014 2.91-.014 3.306 0 .32.192.694.8.576C20.565 21.796 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
