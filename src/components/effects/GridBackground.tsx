import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useRobotStore } from '@/hooks/useRobotStore';

const GridBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { mouseX, mouseY } = useRobotStore();

    // Refs for animation
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const gridHelperRef = useRef<THREE.GridHelper | null>(null);
    const frameRef = useRef<number>(0);

    useEffect(() => {
        if (!containerRef.current) return;

        // Setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#050505'); // Almost black
        sceneRef.current = scene;

        // Fog for depth
        scene.fog = new THREE.FogExp2('#050505', 0.03);

        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 10;
        camera.position.y = 3;
        camera.rotation.x = -0.2;
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Grid
        const size = 60;
        const divisions = 60;
        const colorCenter = '#00FF41'; // Neon green
        const colorGrid = '#004411'; // Darker green

        const gridHelper = new THREE.GridHelper(size, divisions, colorCenter, colorGrid);
        gridHelper.position.y = -2;
        scene.add(gridHelper);
        gridHelperRef.current = gridHelper;

        // Particle system (Network nodes)
        const particleCount = 100;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 40;
            positions[i + 1] = (Math.random() - 0.5) * 20 + 5; // Floating above grid
            positions[i + 2] = (Math.random() - 0.5) * 40;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: '#00FF41',
            size: 0.15,
            transparent: true,
            opacity: 0.6,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Handle resize
        const handleResize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };

        window.addEventListener('resize', handleResize);

        // Animation
        const animate = () => {
            frameRef.current = requestAnimationFrame(animate);

            if (gridHelperRef.current) {
                // Subtle warping based on mouse
                // Map mouse range [0, 1] to [-1, 1]
                const targetX = (mouseX / window.innerWidth - 0.5) * 2;
                const targetY = (mouseY / window.innerHeight - 0.5) * 2;

                // Smooth interpolation
                gridHelperRef.current.rotation.y += (targetX * 0.1 - gridHelperRef.current.rotation.y) * 0.05;
                gridHelperRef.current.position.z = (targetY * 2);

                // Constant movement effect
                gridHelperRef.current.position.z = (gridHelperRef.current.position.z + 0.02) % 1;
            }

            // Floating particles
            const positions = particles.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < particleCount * 3; i += 3) {
                positions[i + 1] += Math.sin(Date.now() * 0.001 + positions[i]) * 0.01;
            }
            particles.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameRef.current);
            if (rendererRef.current && containerRef.current) {
                containerRef.current.removeChild(rendererRef.current.domElement);
            }
            // Cleanup Three.js resources
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []); // Run once on mount

    // Effect to update mouse warping externally (optimization)
    // We read from store in the animation loop usually, but here we can just let the ref update handle it

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at center, rgba(0,20,0,0.2) 0%, rgba(0,0,0,1) 100%)' }}
        />
    );
};

export default GridBackground;
