'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles, Compass } from 'lucide-react';

export default function Specialty3DViewer({ specialtyId = 'dermo', title = '', className = '' }) {
  const mountRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. High-End Studio Lighting (Gold, Bronze, Crisp Medical White)
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.2);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.PointLight(0xd4af37, 4.5, 60);
    goldKeyLight.position.set(10, 12, 15);
    scene.add(goldKeyLight);

    const bronzeRimLight = new THREE.PointLight(0x73554a, 3.0, 50);
    bronzeRimLight.position.set(-12, -10, 10);
    scene.add(bronzeRimLight);

    const topSpot = new THREE.DirectionalLight(0xfff8ee, 2.5);
    topSpot.position.set(0, 20, 10);
    scene.add(topSpot);

    // 3. Root Interactive 3D Model Group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // Base materials (Rich Metallic Gold & Polished Ivory Glass)
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc5a059,
      emissive: 0x3d2b24,
      metalness: 0.95,
      roughness: 0.12,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95
    });

    const brightGoldMat = new THREE.MeshPhysicalMaterial({
      color: 0xd4af37,
      emissive: 0x5a4120,
      metalness: 0.98,
      roughness: 0.08,
      clearcoat: 1.0
    });

    const ivoryMat = new THREE.MeshStandardMaterial({
      color: 0xf9f8f6,
      metalness: 0.2,
      roughness: 0.15
    });

    // Outer Gyroscope Halo Ring
    const outerHaloGeo = new THREE.TorusGeometry(6.5, 0.06, 16, 100);
    const haloMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.45
    });
    const outerHalo = new THREE.Mesh(outerHaloGeo, haloMat);
    modelGroup.add(outerHalo);

    const secondaryHaloGeo = new THREE.TorusGeometry(5.2, 0.04, 16, 80);
    const secondaryHalo = new THREE.Mesh(secondaryHaloGeo, haloMat);
    secondaryHalo.rotation.x = Math.PI / 2.5;
    modelGroup.add(secondaryHalo);

    // Ambient floating sparkle dust
    const particleCount = 70;
    const particlesGeo = new THREE.BufferGeometry();
    const posArr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArr[i] = (Math.random() - 0.5) * 14;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.16,
      color: 0xd4af37,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const dustParticles = new THREE.Points(particlesGeo, particlesMat);
    modelGroup.add(dustParticles);

    // Procedural 3D Specialty Sculptures
    const dynamicElements = [];

    if (specialtyId === 'dermo') {
      // Dermatology: 3D DNA Double Helix with Laser Rings
      const helixGroup = new THREE.Group();
      const numPoints = 32;
      const strandRadius = 2.2;
      const heightStep = 0.22;
      
      const sphereGeo = new THREE.SphereGeometry(0.18, 16, 16);
      const bridgeGeo = new THREE.CylinderGeometry(0.04, 0.04, strandRadius * 2, 8);

      for (let i = -numPoints / 2; i < numPoints / 2; i++) {
        const angle = i * 0.45;
        const y = i * heightStep;
        
        const node1 = new THREE.Mesh(sphereGeo, brightGoldMat);
        node1.position.set(Math.cos(angle) * strandRadius, y, Math.sin(angle) * strandRadius);
        helixGroup.add(node1);

        const node2 = new THREE.Mesh(sphereGeo, ivoryMat);
        node2.position.set(Math.cos(angle + Math.PI) * strandRadius, y, Math.sin(angle + Math.PI) * strandRadius);
        helixGroup.add(node2);

        if (i % 2 === 0) {
          const bridge = new THREE.Mesh(bridgeGeo, goldMaterial);
          bridge.position.set(0, y, 0);
          bridge.rotation.z = Math.PI / 2;
          bridge.rotation.y = -angle;
          helixGroup.add(bridge);
        }
      }

      const laserRingGeo = new THREE.TorusGeometry(3.6, 0.12, 16, 64);
      const laserRingMat = new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        emissive: 0x98783a,
        metalness: 0.9,
        roughness: 0.1
      });
      const laserRing = new THREE.Mesh(laserRingGeo, laserRingMat);
      helixGroup.add(laserRing);

      modelGroup.add(helixGroup);
      dynamicElements.push({
        update: (time) => {
          helixGroup.rotation.y = time * 0.8;
          laserRing.rotation.x = Math.sin(time) * 0.4 + Math.PI / 3;
          laserRing.rotation.y = time * 1.2;
        }
      });

    } else if (specialtyId === 'dental') {
      // Dental: 3D Diamond Tooth & Radiant Smile Arc
      const toothGroup = new THREE.Group();

      const crownGeo = new THREE.CylinderGeometry(1.6, 1.2, 1.8, 8, 2);
      const crownMesh = new THREE.Mesh(crownGeo, ivoryMat);
      crownMesh.position.y = 0.6;
      toothGroup.add(crownMesh);

      const cuspGeo = new THREE.ConeGeometry(0.55, 0.8, 6);
      const cusp1 = new THREE.Mesh(cuspGeo, brightGoldMat);
      cusp1.position.set(0.65, 1.6, 0.65);
      toothGroup.add(cusp1);

      const cusp2 = new THREE.Mesh(cuspGeo, brightGoldMat);
      cusp2.position.set(-0.65, 1.6, 0.65);
      toothGroup.add(cusp2);

      const cusp3 = new THREE.Mesh(cuspGeo, brightGoldMat);
      cusp3.position.set(0.65, 1.6, -0.65);
      toothGroup.add(cusp3);

      const cusp4 = new THREE.Mesh(cuspGeo, brightGoldMat);
      cusp4.position.set(-0.65, 1.6, -0.65);
      toothGroup.add(cusp4);

      const rootGeo = new THREE.ConeGeometry(0.5, 2.2, 7);
      const root1 = new THREE.Mesh(rootGeo, ivoryMat);
      root1.rotation.z = Math.PI - 0.18;
      root1.position.set(0.5, -1.2, 0);
      toothGroup.add(root1);

      const root2 = new THREE.Mesh(rootGeo, ivoryMat);
      root2.rotation.z = Math.PI + 0.18;
      root2.position.set(-0.5, -1.2, 0);
      toothGroup.add(root2);

      const smileArcGeo = new THREE.TorusGeometry(3.5, 0.14, 16, 60, Math.PI * 1.3);
      const smileArc = new THREE.Mesh(smileArcGeo, brightGoldMat);
      smileArc.rotation.x = Math.PI / 2.2;
      toothGroup.add(smileArc);

      modelGroup.add(toothGroup);
      dynamicElements.push({
        update: (time) => {
          toothGroup.rotation.y = time * 0.6;
          toothGroup.position.y = Math.sin(time * 1.8) * 0.2;
          smileArc.rotation.z = time * 0.9;
        }
      });

    } else if (specialtyId === 'cardio') {
      // Cardiology: 3D Pulsing Heart Node with Rhythm & Arterial Rings
      const cardioGroup = new THREE.Group();

      const heartCoreGeo = new THREE.DodecahedronGeometry(2.0, 1);
      const heartMat = new THREE.MeshPhysicalMaterial({
        color: 0x8a382d,
        emissive: 0x573f36,
        metalness: 0.85,
        roughness: 0.2,
        clearcoat: 1.0
      });
      const heartCore = new THREE.Mesh(heartCoreGeo, heartMat);
      cardioGroup.add(heartCore);

      const archCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.6, 1.2, 0),
        new THREE.Vector3(-0.2, 2.8, 0.3),
        new THREE.Vector3(0.8, 2.6, -0.2),
        new THREE.Vector3(1.2, 1.2, -0.1)
      ]);
      const archGeo = new THREE.TubeGeometry(archCurve, 32, 0.3, 12, false);
      const archMesh = new THREE.Mesh(archGeo, brightGoldMat);
      cardioGroup.add(archMesh);

      const pulseRingGeo = new THREE.TorusGeometry(3.2, 0.08, 16, 60);
      const pulseRing1 = new THREE.Mesh(pulseRingGeo, goldMaterial);
      pulseRing1.rotation.x = Math.PI / 2;
      cardioGroup.add(pulseRing1);

      const pulseRing2 = new THREE.Mesh(pulseRingGeo, goldMaterial);
      pulseRing2.rotation.y = Math.PI / 2.4;
      cardioGroup.add(pulseRing2);

      modelGroup.add(cardioGroup);
      dynamicElements.push({
        update: (time) => {
          const beat = Math.pow(Math.sin(time * 4.5), 16) * 0.25 + 1.0;
          heartCore.scale.set(beat, beat * 1.05, beat);
          cardioGroup.rotation.y = time * 0.5;

          const ringScale = ((time * 1.5) % 1.6) + 0.8;
          pulseRing1.scale.set(ringScale, ringScale, ringScale);
          pulseRing2.scale.set(ringScale * 0.9, ringScale * 0.9, ringScale * 0.9);
        }
      });

    } else if (specialtyId === 'pedia') {
      // Pediatrics: Gentle Protective Celestial Orbit & Starlight Orbs
      const pediaGroup = new THREE.Group();

      const centerGeo = new THREE.SphereGeometry(1.6, 32, 32);
      const centerMat = new THREE.MeshPhysicalMaterial({
        color: 0xf4ebe3,
        emissive: 0xc5a059,
        emissiveIntensity: 0.2,
        metalness: 0.1,
        roughness: 0.2,
        clearcoat: 0.9
      });
      const centerSphere = new THREE.Mesh(centerGeo, centerMat);
      pediaGroup.add(centerSphere);

      const starGeo = new THREE.IcosahedronGeometry(0.38, 0);
      const satellites = [];
      for (let i = 0; i < 5; i++) {
        const sat = new THREE.Mesh(starGeo, brightGoldMat);
        pediaGroup.add(sat);
        satellites.push({
          mesh: sat,
          angleOffset: (i * Math.PI * 2) / 5,
          dist: 3.2 + (i % 2) * 0.7,
          speed: 1.2 + i * 0.2
        });
      }

      const ribbonGeo = new THREE.TorusGeometry(3.5, 0.1, 16, 80);
      const ribbon1 = new THREE.Mesh(ribbonGeo, goldMaterial);
      ribbon1.rotation.x = Math.PI / 3;
      pediaGroup.add(ribbon1);

      const ribbon2 = new THREE.Mesh(ribbonGeo, goldMaterial);
      ribbon2.rotation.y = Math.PI / 3;
      pediaGroup.add(ribbon2);

      modelGroup.add(pediaGroup);
      dynamicElements.push({
        update: (time) => {
          pediaGroup.rotation.y = time * 0.35;
          satellites.forEach((s) => {
            const a = time * s.speed + s.angleOffset;
            s.mesh.position.set(Math.cos(a) * s.dist, Math.sin(a * 1.5) * 0.8, Math.sin(a) * s.dist);
            s.mesh.rotation.x += 0.03;
            s.mesh.rotation.y += 0.04;
          });
          ribbon1.rotation.z = time * 0.2;
          ribbon2.rotation.z = -time * 0.2;
        }
      });

    } else if (specialtyId === 'ortho') {
      // Orthopedics: 3D Articulated Spine Column & Pivots
      const orthoGroup = new THREE.Group();
      const vertebraeCount = 7;
      const vertebrae = [];

      const vGeo = new THREE.CylinderGeometry(1.4, 1.5, 0.45, 12);
      const diskGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.2, 12);

      for (let i = 0; i < vertebraeCount; i++) {
        const yPos = (i - vertebraeCount / 2) * 0.85;
        const vMesh = new THREE.Mesh(vGeo, ivoryMat);
        vMesh.position.y = yPos;
        orthoGroup.add(vMesh);

        const facetGeo = new THREE.BoxGeometry(0.3, 0.35, 0.7);
        const facetRight = new THREE.Mesh(facetGeo, brightGoldMat);
        facetRight.position.set(1.1, yPos, 0);
        orthoGroup.add(facetRight);

        const facetLeft = new THREE.Mesh(facetGeo, brightGoldMat);
        facetLeft.position.set(-1.1, yPos, 0);
        orthoGroup.add(facetLeft);

        if (i < vertebraeCount - 1) {
          const diskMesh = new THREE.Mesh(diskGeo, goldMaterial);
          diskMesh.position.y = yPos + 0.42;
          orthoGroup.add(diskMesh);
        }

        vertebrae.push(vMesh);
      }

      const spineRingGeo = new THREE.TorusGeometry(3.6, 0.12, 16, 60);
      const spineRing = new THREE.Mesh(spineRingGeo, brightGoldMat);
      spineRing.rotation.x = Math.PI / 2;
      orthoGroup.add(spineRing);

      modelGroup.add(orthoGroup);
      dynamicElements.push({
        update: (time) => {
          orthoGroup.rotation.y = time * 0.6;
          vertebrae.forEach((v, idx) => {
            v.rotation.z = Math.sin(time * 2.5 + idx * 0.5) * 0.08;
            v.position.x = Math.sin(time * 2.5 + idx * 0.4) * 0.12;
          });
          spineRing.position.y = Math.sin(time * 2) * 1.5;
        }
      });

    } else if (specialtyId === 'ent') {
      // ENT: Concentric 3D Acoustic Wave Toruses
      const entGroup = new THREE.Group();

      const waveRings = [];
      const waveCount = 5;
      for (let i = 0; i < waveCount; i++) {
        const rGeo = new THREE.TorusGeometry(1.2 + i * 0.8, 0.08, 16, 64);
        const rMesh = new THREE.Mesh(rGeo, i % 2 === 0 ? brightGoldMat : goldMaterial);
        entGroup.add(rMesh);
        waveRings.push(rMesh);
      }

      const resonatorGeo = new THREE.OctahedronGeometry(1.3, 0);
      const resonator = new THREE.Mesh(resonatorGeo, ivoryMat);
      entGroup.add(resonator);

      modelGroup.add(entGroup);
      dynamicElements.push({
        update: (time) => {
          entGroup.rotation.y = time * 0.4;
          resonator.rotation.x = time * 0.8;
          resonator.rotation.y = time * 1.1;

          waveRings.forEach((ring, idx) => {
            const freq = Math.sin(time * 4.0 + idx * 0.8);
            ring.rotation.x = Math.PI / 2 + freq * 0.2;
            ring.rotation.y = freq * 0.15;
            const waveScale = 1.0 + freq * 0.06;
            ring.scale.set(waveScale, waveScale, waveScale);
          });
        }
      });

    } else if (specialtyId === 'internal') {
      // Internal Medicine & Diabetes: 3D Molecular Crystal Bond Cluster
      const internalGroup = new THREE.Group();

      const atomPositions = [
        [0, 0, 0],
        [1.8, 1.2, 0.6],
        [-1.8, -1.2, -0.6],
        [1.4, -1.5, 1.0],
        [-1.4, 1.5, -1.0],
        [0, 2.0, 1.5],
        [0, -2.0, -1.5]
      ];

      const atomGeo = new THREE.SphereGeometry(0.55, 24, 24);
      const atomCylinderGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.2, 12);

      atomPositions.forEach((pos, idx) => {
        const atomMesh = new THREE.Mesh(atomGeo, idx === 0 ? brightGoldMat : (idx % 2 === 0 ? ivoryMat : goldMaterial));
        atomMesh.position.set(...pos);
        internalGroup.add(atomMesh);

        if (idx > 0) {
          const cylinder = new THREE.Mesh(atomCylinderGeo, goldMaterial);
          const midPoint = new THREE.Vector3(pos[0] / 2, pos[1] / 2, pos[2] / 2);
          cylinder.position.copy(midPoint);
          cylinder.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(...pos).normalize()
          );
          internalGroup.add(cylinder);
        }
      });

      const glucoseRingGeo = new THREE.TorusGeometry(3.6, 0.1, 16, 60);
      const glucoseRing = new THREE.Mesh(glucoseRingGeo, brightGoldMat);
      glucoseRing.rotation.x = Math.PI / 3;
      internalGroup.add(glucoseRing);

      modelGroup.add(internalGroup);
      dynamicElements.push({
        update: (time) => {
          internalGroup.rotation.y = time * 0.6;
          internalGroup.rotation.x = Math.sin(time * 0.5) * 0.3;
          glucoseRing.rotation.z = time * 0.8;
        }
      });

    } else {
      // Executive Checkup & Lab: 3D Multi-Axis Gyroscopic Radar Scanner
      const checkupGroup = new THREE.Group();

      const ring1Geo = new THREE.TorusGeometry(3.6, 0.14, 16, 80);
      const ring1 = new THREE.Mesh(ring1Geo, brightGoldMat);
      checkupGroup.add(ring1);

      const ring2Geo = new THREE.TorusGeometry(2.8, 0.12, 16, 70);
      const ring2 = new THREE.Mesh(ring2Geo, goldMaterial);
      checkupGroup.add(ring2);

      const ring3Geo = new THREE.TorusGeometry(2.0, 0.09, 16, 60);
      const ring3 = new THREE.Mesh(ring3Geo, ivoryMat);
      checkupGroup.add(ring3);

      const coreGeo = new THREE.IcosahedronGeometry(1.1, 0);
      const coreMesh = new THREE.Mesh(coreGeo, brightGoldMat);
      checkupGroup.add(coreMesh);

      const scanPlaneGeo = new THREE.CylinderGeometry(2.4, 2.4, 0.04, 32);
      const scanPlaneMat = new THREE.MeshPhysicalMaterial({
        color: 0xd4af37,
        emissive: 0xc5a059,
        transparent: true,
        opacity: 0.6,
        roughness: 0.1
      });
      const scanPlane = new THREE.Mesh(scanPlaneGeo, scanPlaneMat);
      checkupGroup.add(scanPlane);

      modelGroup.add(checkupGroup);
      dynamicElements.push({
        update: (time) => {
          ring1.rotation.x = time * 0.8;
          ring1.rotation.y = time * 0.4;
          ring2.rotation.y = time * 1.1;
          ring2.rotation.z = time * 0.5;
          ring3.rotation.z = time * 1.3;
          ring3.rotation.x = time * 0.7;
          coreMesh.rotation.y = time * 1.5;
          scanPlane.position.y = Math.sin(time * 3) * 1.8;
        }
      });
    }

    // 4. Interactive Drag & Orbit Handling
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0]?.clientY) || 0;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0]?.clientY) || 0;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;
      prevMouseX = clientX;
      prevMouseY = clientY;

      targetRotY += deltaX * 0.012;
      targetRotX += deltaY * 0.012;
      targetRotX = Math.max(-1.0, Math.min(1.0, targetRotX));
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', onPointerDown);
    domElem.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);

    // 5. Animation Render Loop
    let animationFrameId;
    let startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = (performance.now() - startTime) / 1000;

      dynamicElements.forEach((el) => el.update(time));

      dustParticles.rotation.y = time * 0.08;
      outerHalo.rotation.z = time * 0.15;
      secondaryHalo.rotation.y = -time * 0.12;

      if (autoRotate && !isDragging) {
        targetRotY += 0.005;
      }
      modelGroup.rotation.y += (targetRotY - modelGroup.rotation.y) * 0.1;
      modelGroup.rotation.x += (targetRotX - modelGroup.rotation.x) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 400;
      const newH = container.clientHeight || 400;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      domElem.removeEventListener('mousedown', onPointerDown);
      domElem.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [specialtyId, autoRotate]);

  return (
    <div className={`relative w-full h-full min-h-[380px] sm:min-h-[460px] flex items-center justify-center select-none overflow-hidden rounded-3xl ${className}`}>
      
      {/* Three.js WebGL Mount Canvas */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center touch-none"
      />

      {/* Holographic Luxury HUD Overlays */}
      <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between">
        
        {/* Top HUD Row */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#C5A059]/40 text-xs font-black text-[#573F36] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>مجسم طبي ثلاثي الأبعاد 360°</span>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              title={autoRotate ? 'إيقاف الدوران التلقائي' : 'تشغيل الدوران التلقائي'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border backdrop-blur-md transition-all cursor-pointer text-xs font-bold ${
                autoRotate 
                  ? 'bg-white/90 text-[#573F36] border-[#C5A059]/60 shadow-sm' 
                  : 'bg-[#573F36]/80 text-[#FFF0BD] border-[#C5A059]/40'
              }`}
            >
              <RotateCw className={`w-3.5 h-3.5 text-[#C5A059] ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '7s' }} />
              <span className="hidden sm:inline">{autoRotate ? 'دوران تلقائي' : 'دوران يدوي'}</span>
            </button>
          </div>
        </div>

        {/* Center Hint (Shows when idle) */}
        {!isInteracting && (
          <div className="self-center flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#C5A059]/35 text-[11px] font-bold text-[#573F36] shadow-md animate-pulse pointer-events-none">
            <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>اسحب بالماوس أو اللمس لتدوير المجسم بحرية 360°</span>
          </div>
        )}

        {/* Bottom Ambient Info */}
        <div className="flex items-center justify-between text-[11px] font-bold text-[#7D6D6B] bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#C5A059]/25 shadow-2xs">
          <span className="text-[#573F36] font-black">{title || 'عيادات أوزين التخصصية'}</span>
          <span className="text-[#98783A] font-mono text-[10px]">SPATIAL 3D VIEWER</span>
        </div>

      </div>

      {/* Decorative Luxury Gold Corner Brackets */}
      <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#C5A059]/50 pointer-events-none rounded-tl-lg" />
      <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#C5A059]/50 pointer-events-none rounded-tr-lg" />
      <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#C5A059]/50 pointer-events-none rounded-bl-lg" />
      <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#C5A059]/50 pointer-events-none rounded-br-lg" />

    </div>
  );
}
