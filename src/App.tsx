import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_SRC}
      />
      <Navbar />
      <main className="relative z-10 flex min-h-screen flex-col">
        <Hero />
      </main>
    </div>
  );
}

export default App;
