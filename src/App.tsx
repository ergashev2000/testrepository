import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div style={{ maxWidth: 1400, marginInline: 'auto', paddingInline: 80, paddingBlock: 20 }}>
      <Navbar />
      <Hero />
    </div>
  )
}
