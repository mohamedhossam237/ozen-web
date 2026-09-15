'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvasBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Ambient & Luxury Accent Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xd4af37, 3, 120);
    goldPointLight.position.set(15, 20, 25);
    scene.add(goldPointLight);

    const bronzePointLight = new THREE.PointLight(0x573f36, 2.5, 100);
    bronzePointLight.position.set(-20, -15, 15);
    scene.add(bronzePointLight);

    const blueSoftLight = new THREE.PointLight(0x3b82f6, 1.2, 80);
    blueSoftLight.position.set(0, -25, -10);
    scene.add(blueSoftLight);

    // 3. 3D Objects: Medical DNA Helix Rings & Floating Golden Prisms
    const group = new THREE.Group();
    scene.add(group);

    // Gold Outer Torus Ring
    const torusGeo1 = new THREE.TorusGeometry(14, 0.28, 16, 100);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x3d2b24,
    });
    const torusRing1 = new THREE.Mesh(torusGeo1, goldMat);
    torusRing1.rotation.x = Math.PI / 3.5;
    group.add(torusRing1);

    // Inner Accent Ring
    const torusGeo2 = new THREE.TorusGeometry(9.5, 0.2, 16, 100);
    const torusRing2 = new THREE.Mesh(torusGeo2, goldMat);
    torusRing2.rotation.y = Math.PI / 3;
    group.add(torusRing2);

    // Floating 3D Gold Medical Prisms / Crystals
    const crystalGeo = new THREE.IcosahedronGeometry(0.9, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.92,
      roughness: 0.1,
    });

    const crystals = [];
    for (let i = 0; i < 35; i++) {
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      crystal.position.x = (Math.random() - 0.5) * 55;
      crystal.position.y = (Math.random() - 0.5) * 55;
      crystal.position.z = (Math.random() - 0.5) * 35;
      crystal.rotation.x = Math.random() * Math.PI;
      crystal.rotation.y = Math.random() * Math.PI;

      const scale = 0.35 + Math.random() * 0.85;
      crystal.scale.set(scale, scale, scale);

      group.add(crystal);
      crystals.push({
        mesh: crystal,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        floatOffset: Math.random() * Math.PI * 2,
        baseY: crystal.position.y
      });
    }

    // Glowing Particle Ambient Dust
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 200;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 75;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.28,
      color: 0xc5a059,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particleMesh = new THREE.Points(particlesGeo, particlesMat);
    group.add(particleMesh);

    // 4. Interactive Mouse Parallax & Scroll Journey Tracking
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 5. Animation Loop using performance.now() (Fixes THREE.Clock deprecation warning)
    let animationFrameId;
    let startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) / 1000;
      const scrollFactor = scrollY * 0.004;

      // Rotate torus rings
      torusRing1.rotation.z = elapsedTime * 0.12 + scrollFactor * 0.4;
      torusRing2.rotation.x = elapsedTime * 0.18 + scrollFactor * 0.25;

      // Camera depth and scroll journey motion
      camera.position.z = 30 + Math.sin(scrollFactor * 0.4) * 4;
      camera.position.y = -scrollFactor * 2.8;

      // Floating crystal motions
      crystals.forEach((c) => {
        c.mesh.rotation.x += c.rotSpeedX;
        c.mesh.rotation.y += c.rotSpeedY;
        c.mesh.position.y = c.baseY + Math.sin(elapsedTime * 1.4 + c.floatOffset) * 0.75 - scrollFactor * 1.8;
      });

      // Mouse Parallax smooth lerp
      group.rotation.y += (mouseX * 0.22 + scrollFactor * 0.15 - group.rotation.y) * 0.04;
      group.rotation.x += (-mouseY * 0.22 - group.rotation.x) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    // 6. Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75" 
    />
  );
}

