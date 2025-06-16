'use client';

import { useEffect } from 'react';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { FACEMESH_TESSELATION } from '@mediapipe/face_mesh';

interface MediaPipeComponentsProps {
    videoRef: React.RefObject<HTMLVideoElement>;
    canvasRef: React.RefObject<HTMLCanvasElement>;
}

export default function MediaPipeComponents({ videoRef, canvasRef }: MediaPipeComponentsProps) {
    useEffect(() => {
        const drawFaceMesh = () => {
            if (!videoRef.current || !canvasRef.current) return;

            const video = videoRef.current;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            if (!ctx) return;

            // Dessiner le visage
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Ici, vous pouvez ajouter la logique pour dessiner les points du visage
            // en utilisant les fonctions de MediaPipe
        };

        const interval = setInterval(drawFaceMesh, 100);
        return () => clearInterval(interval);
    }, [videoRef, canvasRef]);

    return null;
}

export { drawFaceMesh }; 