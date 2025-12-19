import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

function KeyboardControls() {
  const controls = useRef(null);

  useEffect(() => {
    const onKeydown = (e) => {
      if (!controls.current) return;

      const step = 0.15;

      switch (e.key.toLowerCase()) {
        case "a":
          controls.current.rotateLeft(step);
          break;
        case "d":
          controls.current.rotateLeft(-step);
          break;
        case "w":
          controls.current.rotateUp(step);
          break;
        case "s":
          controls.current.rotateUp(-step);
          break;
        default:
          return;
      }

      controls.current.update();
    };

    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  return (
    <OrbitControls
      ref={controls}
      enableDamping
      dampingFactor={0.1}
      rotateSpeed={0.6}
    />
  );
}

export default KeyboardControls;
