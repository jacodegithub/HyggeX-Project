import { Content } from "./assets/components/Content";
import { FAQ } from "./assets/components/FAQ";
import { Nav } from "./assets/components/Nav";
import { Paths } from "./assets/components/Paths";

export default function App() {
  return (
    <div>
      <Nav />
      <Paths />
      <Content />
      <FAQ />
    </div>
  )
}