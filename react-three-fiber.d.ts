import { ThreeElements } from "@react-three/fiber";
import ThreeGlobe from "three-globe";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ReactThreeFiber.Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}
