'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useEffect } from 'react';

// Fix for default marker icons in Leaflet with Next.js
const defaultIcon = new Icon({
    iconUrl: '/images/marker-icon.png',
    shadowUrl: '/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

interface MapProps {
    center: [number, number];
    zoom: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export default function Map({ center, zoom, style, children }: MapProps) {
    useEffect(() => {
        // Fix for Leaflet marker icons in Next.js
        delete (Icon.Default.prototype as any)._getIconUrl;
        Icon.Default.mergeOptions({
            iconRetinaUrl: '/images/marker-icon-2x.png',
            iconUrl: '/images/marker-icon.png',
            shadowUrl: '/images/marker-shadow.png',
        });
    }, []);

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            style={style}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {children}
        </MapContainer>
    );
}

export { Marker, Popup }; 