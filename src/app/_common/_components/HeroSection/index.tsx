import * as THREE from 'three';
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, Text } from '@react-three/drei';
import HeroPage from './_components/HeroSubPage';
import Loader from '../Loader'

useGLTF.preload('./assets/3dModel/mac-draco.glb');

type ModelProps = JSX.IntrinsicElements['group'];

interface GLTFResult {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
}

function Model(props: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF('./assets/3dModel/mac-draco.glb', '/draco-gltf/') as unknown as GLTFResult;

  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.cos(t / 2) / 20 + 0.25,
        0.1
      );
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1);
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            <Html className="content" rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} transform occlude>
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <HeroPage />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  );
}

export default function HeroSection() {
  const [textPositions, setTextPositions] = useState<{
    left: [number, number, number];
    right: [number, number, number];
  }>({
    left: [-10, 1, 0],
    right: [10, 1, 0],
  });

  const [modelScale, setModelScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setTextPositions({ left: [0, 5, 0], right: [0, -5, 0] });
        setModelScale(0.75);
      } else {
        setTextPositions({ left: [-10, 1, 0], right: [10, 1, 0] });
        setModelScale(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Canvas dpr={[1, 1.5]} camera={{ position: [-5, 0, -15], fov: 55 }}   gl={{ antialias: false, powerPreference: "low-power" }}>
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={<Loader />}>
          <group rotation={[0, Math.PI, 0]}>
            <Model position={[0, 1, 0]} scale={[modelScale, modelScale, modelScale]} />
            <Text position={textPositions.left} fontSize={1} color="white" anchorX="center" anchorY="middle">
              Greetings
            </Text>
            <Text position={textPositions.right} fontSize={1} color="white" anchorX="center" anchorY="middle">
              Traveler
            </Text>
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
      </Canvas>

      <div className='absolute xs:bottom-10 bottom-32 mt-5 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </>
  );
}
