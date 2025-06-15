'use client';

import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { FACEMESH_TESSELATION } from '@mediapipe/face_mesh';

interface MediaPipeComponentsProps {
    videoRef: React.RefObject<HTMLVideoElement>;
    canvasRef: React.RefObject<HTMLCanvasElement>;
}

export default function MediaPipeComponents({ videoRef, canvasRef }: MediaPipeComponentsProps) {
    const drawFaceMesh = (landmarks: any[]) => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);
        if (videoRef.current) {
            context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        }

        drawConnectors(context, landmarks, FACEMESH_TESSELATION, {
            color: '#C0C0C070',
            lineWidth: 1
        });
        drawLandmarks(context, landmarks, {
            color: '#FF0000',
            lineWidth: 1,
            radius: 2
        });
    };

    return null; // Ce composant ne rend rien visuellement, il fournit juste les fonctions
}

export { drawFaceMesh }; 