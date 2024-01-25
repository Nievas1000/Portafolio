import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Background3D = () => {
  const containerRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const numRombos = 20;
    const spaceBetweenSpheres = 4;

    const colors = [
      new THREE.Color(8 / 255, 8 / 255, 216 / 255),
      new THREE.Color(88 / 255, 51 / 255, 136 / 255),
    ];

    for (let j = 0; j < 2; j++) {
      const offset = j * spaceBetweenSpheres;
      const sphere = new THREE.Group();

      for (let i = 0; i < numRombos; i++) {
        const phi = Math.acos(-1 + (2 * i) / numRombos);
        const theta = Math.sqrt(numRombos * Math.PI) * phi;

        const rombo = createRombo(colors[j]);
        rombo.position.setFromSphericalCoords(1, phi, theta);
        sphere.add(rombo);
      }

      sphere.position.set(offset, 0, 0);
      scene.add(sphere);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      scene.rotation.x = (mouseY.current / window.innerHeight) * 2;
      scene.rotation.y = (mouseX.current / window.innerWidth) * 2;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (event) => {
      mouseX.current = event.clientX - window.innerWidth / 2;
      mouseY.current = event.clientY - window.innerHeight / 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const createRombo = (color) => {
    const vertices = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(1, 1, 0),
      new THREE.Vector3(2, 0, 0),
      new THREE.Vector3(1, -1, 0),
      new THREE.Vector3(0, 0, 0),
    ];

    const geometry = new THREE.BufferGeometry().setFromPoints(vertices);

    // Cambios en el material para aplicar el color al rombo
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 1.0 },
        resolution: { value: new THREE.Vector2() },
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;

        void main() {
          gl_FragColor = vec4(${color.r}, ${color.g}, ${color.b}, 1.0);
        }
      `,
    });

    const rombo = new THREE.Line(geometry, material);

    return rombo;
  };

  return <div ref={containerRef} />;
};

export default Background3D;
