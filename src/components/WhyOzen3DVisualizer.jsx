'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WhyOzen3DVisualizer({ 
  type = 'consultants', 
  className = 'w-24 h-24 sm:w-28 sm:h-28',
  isHovered = false 
}) {
  const mountRef = useRef(null);
  const hoverRef = useRef(isHovered);

  useEffect(() => {
    hoverRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 112;
    const height = container.clientHeight || 112;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 8.5;

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
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.3);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xd4af37, 4.2, 40);
    goldLight.position.set(6, 6, 9);
    scene.add(goldLight);

    const bronzeLight = new THREE.PointLight(0x73554a, 2.5, 30);
    bronzeLight.position.set(-6, -5, 6);
    scene.add(bronzeLight);

    // 3. Materials
    const brightGoldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.96,
      roughness: 0.12,
      emissive: 0x4a342d,
      emissiveIntensity: 0.2
    });

    const warmGoldMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      metalness: 0.9,
      roughness: 0.2
    });

    const ivoryMat = new THREE.MeshStandardMaterial({
      color: 0xf9f8f6,
      metalness: 0.2,
      roughness: 0.2
    });

    // 4. Procedural 3D Sculptures
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);
    let updateFn = () => {};

    if (type === 'consultants') {
      // 3D Consultant Crest: Caduceus Staff + Crown Torus + Orbiting Starlight Satellites
      const crestGroup = new THREE.Group();

      // Central Asclepius Staff
      const staffGeo = new THREE.CylinderGeometry(0.12, 0.12, 4.2, 16);
      const staff = new THREE.Mesh(staffGeo, brightGoldMat);
      crestGroup.add(staff);

      // Staff Crown Golden Sphere
      const crownGeo = new THREE.SphereGeometry(0.45, 20, 20);
      const crown = new THREE.Mesh(crownGeo, brightGoldMat);
      crown.position.y = 2.2;
      crestGroup.add(crown);

      // Serpentine Double DNA Wings / Torus Ribbons
      const ribbon1Geo = new THREE.TorusGeometry(1.6, 0.1, 16, 60);
      const ribbon1 = new THREE.Mesh(ribbon1Geo, warmGoldMat);
      ribbon1.rotation.x = Math.PI / 3;
      crestGroup.add(ribbon1);

      const ribbon2Geo = new THREE.TorusGeometry(1.2, 0.08, 16, 50);
      const ribbon2 = new THREE.Mesh(ribbon2Geo, ivoryMat);
      ribbon2.rotation.y = Math.PI / 3;
      crestGroup.add(ribbon2);

      // Orbiting Consultant Stars
      const starGeo = new THREE.IcosahedronGeometry(0.28, 0);
      const stars = [];
      for (let i = 0; i < 3; i++) {
        const star = new THREE.Mesh(starGeo, brightGoldMat);
        crestGroup.add(star);
        stars.push({
          mesh: star,
          angleOffset: (i * Math.PI * 2) / 3,
          dist: 2.4,
          speed: 1.5 + i * 0.2
        });
      }

      rootGroup.add(crestGroup);
      updateFn = (time, speed) => {
        crestGroup.rotation.y += 0.018 * speed;
        ribbon1.rotation.z += 0.02 * speed;
        ribbon2.rotation.z -= 0.025 * speed;
        stars.forEach((s) => {
          const a = time * s.speed * speed + s.angleOffset;
          s.mesh.position.set(Math.cos(a) * s.dist, Math.sin(a * 2) * 0.6, Math.sin(a) * s.dist);
          s.mesh.rotation.x += 0.04;
          s.mesh.rotation.y += 0.05;
        });
      };

    } else if (type === 'records') {
      // 3D Digital Health Vault: Holographic Faceted Data Core + Spinning Coordinate Rings
      const recordsGroup = new THREE.Group();

      // Central Smart Medical Core (Icosahedron)
      const coreGeo = new THREE.IcosahedronGeometry(1.3, 1);
      const core = new THREE.Mesh(coreGeo, ivoryMat);
      recordsGroup.add(core);

      // Core Golden Armor Insets
      const innerCoreGeo = new THREE.OctahedronGeometry(1.6, 0);
      const innerCoreMat = new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        metalness: 0.95,
        roughness: 0.15,
        wireframe: true
      });
      const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
      recordsGroup.add(innerCore);

      // Gimbal Data Rings (X, Y, Z)
      const ring1Geo = new THREE.TorusGeometry(2.3, 0.09, 16, 60);
      const ring1 = new THREE.Mesh(ring1Geo, brightGoldMat);
      recordsGroup.add(ring1);

      const ring2Geo = new THREE.TorusGeometry(1.8, 0.07, 16, 50);
      const ring2 = new THREE.Mesh(ring2Geo, warmGoldMat);
      ring2.rotation.x = Math.PI / 2.5;
      recordsGroup.add(ring2);

      const ring3Geo = new THREE.TorusGeometry(2.8, 0.05, 16, 70);
      const ring3 = new THREE.Mesh(ring3Geo, brightGoldMat);
      ring3.rotation.y = Math.PI / 3;
      recordsGroup.add(ring3);

      rootGroup.add(recordsGroup);
      updateFn = (time, speed) => {
        core.rotation.y += 0.015 * speed;
        core.rotation.x += 0.01 * speed;
        innerCore.rotation.y -= 0.02 * speed;
        ring1.rotation.x += 0.025 * speed;
        ring1.rotation.y += 0.015 * speed;
        ring2.rotation.y += 0.03 * speed;
        ring3.rotation.z += 0.02 * speed;
      };

    } else {
      // 3D Quality & Trust Shield: Golden Multi-Layer Protective Shield + Biometric Rings
      const shieldGroup = new THREE.Group();

      // 3D Sculpted Shield Core
      const shieldShape = new THREE.Shape();
      shieldShape.moveTo(0, 1.8);
      shieldShape.quadraticCurveTo(1.6, 1.6, 1.5, 0.3);
      shieldShape.quadraticCurveTo(1.4, -1.2, 0, -2.1);
      shieldShape.quadraticCurveTo(-1.4, -1.2, -1.5, 0.3);
      shieldShape.quadraticCurveTo(-1.6, 1.6, 0, 1.8);

      const extrudeSettings = {
        depth: 0.3,
        bevelEnabled: true,
        bevelSegments: 4,
        steps: 1,
        bevelSize: 0.12,
        bevelThickness: 0.15
      };
      const shieldGeo = new THREE.ExtrudeGeometry(shieldShape, extrudeSettings);
      shieldGeo.center();
      const shield = new THREE.Mesh(shieldGeo, brightGoldMat);
      shield.scale.set(0.9, 0.9, 0.9);
      shieldGroup.add(shield);

      // Central Checkmark / Emblem Node
      const nodeGeo = new THREE.SphereGeometry(0.5, 16, 16);
      const node = new THREE.Mesh(nodeGeo, ivoryMat);
      node.position.z = 0.35;
      shieldGroup.add(node);

      // Concentric Defense Halo Rings
      const halo1Geo = new THREE.TorusGeometry(2.4, 0.08, 16, 60);
      const halo1 = new THREE.Mesh(halo1Geo, warmGoldMat);
      halo1.rotation.x = Math.PI / 2.2;
      shieldGroup.add(halo1);

      const halo2Geo = new THREE.TorusGeometry(2.8, 0.05, 16, 70);
      const halo2 = new THREE.Mesh(halo2Geo, brightGoldMat);
      halo2.rotation.y = Math.PI / 2.5;
      shieldGroup.add(halo2);

      rootGroup.add(shieldGroup);
      updateFn = (time, speed) => {
        shieldGroup.rotation.y = Math.sin(time * 1.5 * speed) * 0.35;
        shieldGroup.rotation.x = Math.cos(time * 1.2 * speed) * 0.15;
        halo1.rotation.z += 0.025 * speed;
        halo2.rotation.z -= 0.02 * speed;
        const s = 0.9 + Math.sin(time * 3 * speed) * 0.04;
        shield.scale.set(s, s, s);
      };
    }

    // 5. Interactive Drag Rotation
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      const x = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
      const y = e.clientY || (e.touches && e.touches[0]?.clientY) || 0;
      prevX = x;
      prevY = y;
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const x = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
      const y = e.clientY || (e.touches && e.touches[0]?.clientY) || 0;
      const dx = x - prevX;
      const dy = y - prevY;
      prevX = x;
      prevY = y;
      targetRotY += dx * 0.02;
      targetRotX += dy * 0.02;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', onPointerDown);
    domElem.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);

    // 6. Animation Render Loop
    let animationFrameId;
    let startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = (performance.now() - startTime) / 1000;
      const speed = hoverRef.current ? 2.2 : 1.0;

      updateFn(time, speed);

      // Smooth inertia rotation
      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.1;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElem.removeEventListener('mousedown', onPointerDown);
      domElem.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [type]);

  return (
    <div 
      ref={mountRef} 
      className={`relative flex items-center justify-center select-none cursor-grab active:cursor-grabbing ${className}`}
      title="اسحب لتدوير المجسم 3D"
    />
  );
}
