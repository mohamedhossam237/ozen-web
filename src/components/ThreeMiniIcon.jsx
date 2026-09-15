'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeMiniIcon({ 
  type = 'dermo', 
  className = 'w-16 h-16', 
  isHovered = false 
}) {
  const mountRef = useRef(null);
  const hoverRef = useRef(isHovered);

  // Keep hoverRef synchronized with isHovered prop without re-mounting
  useEffect(() => {
    hoverRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 64;
    const height = container.clientHeight || 64;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true, 
      powerPreference: 'high-performance' 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Luxury Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.4);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xd4af37, 4.0, 30);
    goldLight.position.set(5, 5, 8);
    scene.add(goldLight);

    const bronzeLight = new THREE.PointLight(0x73554a, 2.5, 30);
    bronzeLight.position.set(-5, -5, 5);
    scene.add(bronzeLight);

    // 3. Materials
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x3d2b24,
      emissiveIntensity: 0.2
    });

    const softGoldMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      metalness: 0.85,
      roughness: 0.25
    });

    const ivoryMat = new THREE.MeshStandardMaterial({
      color: 0xf9f8f6,
      metalness: 0.2,
      roughness: 0.2
    });

    // 4. 3D Icon Geometries
    const group = new THREE.Group();
    scene.add(group);
    let updateFn = () => {};

    if (type === 'dermo') {
      // 3D Mini DNA Helix & Laser Sparkle
      const helixGroup = new THREE.Group();
      const nodeGeo = new THREE.SphereGeometry(0.24, 12, 12);
      const bridgeGeo = new THREE.CylinderGeometry(0.05, 0.05, 2.2, 8);

      for (let i = -4; i <= 4; i++) {
        const angle = i * 0.7;
        const y = i * 0.45;
        
        const n1 = new THREE.Mesh(nodeGeo, goldMat);
        n1.position.set(Math.cos(angle) * 1.1, y, Math.sin(angle) * 1.1);
        helixGroup.add(n1);

        const n2 = new THREE.Mesh(nodeGeo, ivoryMat);
        n2.position.set(Math.cos(angle + Math.PI) * 1.1, y, Math.sin(angle + Math.PI) * 1.1);
        helixGroup.add(n2);

        if (i % 2 === 0) {
          const br = new THREE.Mesh(bridgeGeo, softGoldMat);
          br.position.set(0, y, 0);
          br.rotation.z = Math.PI / 2;
          br.rotation.y = -angle;
          helixGroup.add(br);
        }
      }

      // Sparkle halo ring
      const ringGeo = new THREE.TorusGeometry(1.9, 0.08, 12, 40);
      const ring = new THREE.Mesh(ringGeo, goldMat);
      ring.rotation.x = Math.PI / 3;
      helixGroup.add(ring);

      group.add(helixGroup);
      updateFn = (time, speed) => {
        helixGroup.rotation.y += 0.02 * speed;
        ring.rotation.z += 0.03 * speed;
      };

    } else if (type === 'dental') {
      // 3D Mini Faceted Diamond Tooth & Radiant Arc
      const toothGroup = new THREE.Group();
      
      const crownGeo = new THREE.CylinderGeometry(1.2, 0.8, 1.3, 8);
      const crown = new THREE.Mesh(crownGeo, ivoryMat);
      crown.position.y = 0.4;
      toothGroup.add(crown);

      // Gold cusp caps
      const cuspGeo = new THREE.ConeGeometry(0.4, 0.6, 6);
      const c1 = new THREE.Mesh(cuspGeo, goldMat);
      c1.position.set(0.45, 1.1, 0.45);
      toothGroup.add(c1);

      const c2 = new THREE.Mesh(cuspGeo, goldMat);
      c2.position.set(-0.45, 1.1, -0.45);
      toothGroup.add(c2);

      // Root stems
      const rootGeo = new THREE.ConeGeometry(0.35, 1.4, 6);
      const r1 = new THREE.Mesh(rootGeo, ivoryMat);
      r1.rotation.z = Math.PI - 0.2;
      r1.position.set(0.35, -0.8, 0);
      toothGroup.add(r1);

      const r2 = new THREE.Mesh(rootGeo, ivoryMat);
      r2.rotation.z = Math.PI + 0.2;
      r2.position.set(-0.35, -0.8, 0);
      toothGroup.add(r2);

      // Orbiting smile arc
      const arcGeo = new THREE.TorusGeometry(2.0, 0.09, 12, 40, Math.PI * 1.4);
      const arc = new THREE.Mesh(arcGeo, goldMat);
      arc.rotation.x = Math.PI / 2.3;
      toothGroup.add(arc);

      group.add(toothGroup);
      updateFn = (time, speed) => {
        toothGroup.rotation.y += 0.022 * speed;
        arc.rotation.z += 0.03 * speed;
      };

    } else if (type === 'cardio') {
      // 3D Mini Pulsing Heart Rhythm Node
      const cardioGroup = new THREE.Group();
      const heartGeo = new THREE.DodecahedronGeometry(1.4, 1);
      const heartMat = new THREE.MeshStandardMaterial({
        color: 0xa84136,
        metalness: 0.85,
        roughness: 0.2,
        emissive: 0x573f36,
        emissiveIntensity: 0.3
      });
      const heart = new THREE.Mesh(heartGeo, heartMat);
      cardioGroup.add(heart);

      const pRingGeo = new THREE.TorusGeometry(2.0, 0.07, 12, 40);
      const pRing = new THREE.Mesh(pRingGeo, goldMat);
      pRing.rotation.x = Math.PI / 2.5;
      cardioGroup.add(pRing);

      group.add(cardioGroup);
      updateFn = (time, speed) => {
        const beat = Math.pow(Math.sin(time * 5), 14) * 0.25 + 0.95;
        heart.scale.set(beat, beat * 1.06, beat);
        cardioGroup.rotation.y += 0.02 * speed;
        pRing.rotation.z += 0.025 * speed;
      };

    } else if (type === 'pedia') {
      // 3D Mini Protective Celestial Sphere & Satellite Stars
      const pediaGroup = new THREE.Group();
      const coreGeo = new THREE.SphereGeometry(1.1, 16, 16);
      const core = new THREE.Mesh(coreGeo, ivoryMat);
      pediaGroup.add(core);

      const ringGeo = new THREE.TorusGeometry(1.9, 0.08, 12, 40);
      const ring = new THREE.Mesh(ringGeo, goldMat);
      ring.rotation.x = Math.PI / 3;
      pediaGroup.add(ring);

      const satGeo = new THREE.IcosahedronGeometry(0.32, 0);
      const sat = new THREE.Mesh(satGeo, goldMat);
      sat.position.set(1.9, 0, 0);
      pediaGroup.add(sat);

      group.add(pediaGroup);
      updateFn = (time, speed) => {
        pediaGroup.rotation.y += 0.02 * speed;
        ring.rotation.z += 0.03 * speed;
        sat.position.x = Math.cos(time * 2.5 * speed) * 1.9;
        sat.position.z = Math.sin(time * 2.5 * speed) * 1.9;
      };

    } else if (type === 'ortho') {
      // 3D Mini Vertebrae & Joint Pivots
      const orthoGroup = new THREE.Group();
      const vGeo = new THREE.CylinderGeometry(0.9, 1.0, 0.4, 12);
      const dGeo = new THREE.CylinderGeometry(0.75, 0.75, 0.2, 12);

      for (let i = -1; i <= 1; i++) {
        const v = new THREE.Mesh(vGeo, ivoryMat);
        v.position.y = i * 0.9;
        orthoGroup.add(v);

        if (i < 1) {
          const d = new THREE.Mesh(dGeo, goldMat);
          d.position.y = i * 0.9 + 0.45;
          orthoGroup.add(d);
        }
      }

      const ringGeo = new THREE.TorusGeometry(1.9, 0.08, 12, 40);
      const ring = new THREE.Mesh(ringGeo, goldMat);
      ring.rotation.x = Math.PI / 2;
      orthoGroup.add(ring);

      group.add(orthoGroup);
      updateFn = (time, speed) => {
        orthoGroup.rotation.y += 0.025 * speed;
        ring.position.y = Math.sin(time * 3 * speed) * 0.6;
      };

    } else if (type === 'ent') {
      // 3D Mini Acoustic Resonance Waves
      const entGroup = new THREE.Group();
      const waves = [];
      for (let i = 0; i < 3; i++) {
        const wGeo = new THREE.TorusGeometry(0.9 + i * 0.55, 0.07, 12, 36);
        const w = new THREE.Mesh(wGeo, i % 2 === 0 ? goldMat : softGoldMat);
        w.rotation.x = Math.PI / 2.2;
        entGroup.add(w);
        waves.push(w);
      }

      const coreGeo = new THREE.OctahedronGeometry(0.65, 0);
      const core = new THREE.Mesh(coreGeo, ivoryMat);
      entGroup.add(core);

      group.add(entGroup);
      updateFn = (time, speed) => {
        entGroup.rotation.y += 0.02 * speed;
        core.rotation.x += 0.03 * speed;
        waves.forEach((w, idx) => {
          const s = 1.0 + Math.sin(time * 4 * speed + idx * 0.8) * 0.12;
          w.scale.set(s, s, s);
        });
      };

    } else if (type === 'internal') {
      // 3D Mini Molecular Glucose Cluster
      const internalGroup = new THREE.Group();
      const atomGeo = new THREE.SphereGeometry(0.45, 14, 14);
      const bondGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.4, 8);

      const centerAtom = new THREE.Mesh(atomGeo, goldMat);
      internalGroup.add(centerAtom);

      const offsets = [
        [1.2, 0.8, 0],
        [-1.2, -0.8, 0],
        [0, 1.1, 0.9]
      ];

      offsets.forEach((pos) => {
        const sat = new THREE.Mesh(atomGeo, ivoryMat);
        sat.position.set(...pos);
        internalGroup.add(sat);

        const bond = new THREE.Mesh(bondGeo, softGoldMat);
        bond.position.set(pos[0] / 2, pos[1] / 2, pos[2] / 2);
        bond.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          new THREE.Vector3(...pos).normalize()
        );
        internalGroup.add(bond);
      });

      group.add(internalGroup);
      updateFn = (time, speed) => {
        internalGroup.rotation.y += 0.022 * speed;
        internalGroup.rotation.x += 0.015 * speed;
      };

    } else {
      // 3D Mini Biometric Radar Scanner
      const checkupGroup = new THREE.Group();
      const r1Geo = new THREE.TorusGeometry(1.8, 0.09, 12, 40);
      const r1 = new THREE.Mesh(r1Geo, goldMat);
      checkupGroup.add(r1);

      const r2Geo = new THREE.TorusGeometry(1.3, 0.07, 12, 36);
      const r2 = new THREE.Mesh(r2Geo, softGoldMat);
      checkupGroup.add(r2);

      const coreGeo = new THREE.IcosahedronGeometry(0.6, 0);
      const core = new THREE.Mesh(coreGeo, ivoryMat);
      checkupGroup.add(core);

      group.add(checkupGroup);
      updateFn = (time, speed) => {
        r1.rotation.x += 0.025 * speed;
        r1.rotation.y += 0.015 * speed;
        r2.rotation.y += 0.035 * speed;
        core.rotation.y += 0.04 * speed;
      };
    }

    // 5. Render Loop
    let animationFrameId;
    let startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = (performance.now() - startTime) / 1000;
      const speed = hoverRef.current ? 2.5 : 1.0;

      updateFn(time, speed);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [type]);

  return (
    <div 
      ref={mountRef} 
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`} 
    />
  );
}
