import React from 'react';

export const NovaDiagramSVG: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        viewBox="0 0 800 500"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Background Grid */}
        <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Global Connection Arrows (Simplified) */}
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#cbd5e1" />
            </marker>
        </defs>

        {/* Vision Queries Loop */}
        <path d="M 150 130 H 450 H 750" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
        <path d="M 750 130 V 150" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Interaction Layer (GPT-OSS) */}
        <rect x="50" y="150" width="200" height="120" rx="12" fill="white" stroke="#64748b" strokeWidth="2" />
        <rect x="50" y="150" width="200" height="30" rx="12" fill="#f1f5f9" />
        <text x="150" y="170" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e293b" className="font-mono">INTERACTION LAYER</text>
        <text x="150" y="195" textAnchor="middle" fontSize="10" fill="#64748b">(Groq LLM)</text>
        <text x="150" y="210" textAnchor="middle" fontSize="10" fill="#64748b">(GPT-OSS 20B)</text>

        {/* Main Interaction Hub */}
        <rect x="350" y="150" width="250" height="180" rx="12" fill="white" stroke="#64748b" strokeWidth="2" />
        <rect x="350" y="150" width="250" height="30" rx="12" fill="#f1f5f9" />
        <text x="475" y="170" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e293b" className="font-mono">INTERACTION LAYER</text>
        <text x="475" y="190" textAnchor="middle" fontSize="10" fill="#64748b">(Groq LLM)</text>
        <text x="475" y="220" textAnchor="middle" fontSize="10" fill="#1e293b">• (GPT-OSS 20B)</text>
        <text x="475" y="240" textAnchor="middle" fontSize="10" fill="#1e293b">• Handles regular queries</text>
        <text x="475" y="260" textAnchor="middle" fontSize="10" fill="#1e293b">and generates responses</text>

        {/* Gemini 2.0 Vision */}
        <rect x="650" y="150" width="130" height="150" rx="12" fill="white" stroke="#3b82f6" strokeWidth="2" />
        <rect x="650" y="150" width="130" height="30" rx="12" fill="#eff6ff" />
        <text x="715" y="170" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e3a8a" className="font-mono">GEMINI 2.0 VISION</text>
        <text x="715" y="185" textAnchor="middle" fontSize="8" fill="#1e3a8a">(VLM)</text>
        <text x="665" y="210" fontSize="9" fill="#1e293b">• Object Detection</text>
        <text x="665" y="230" fontSize="9" fill="#1e293b">• Face Recognition</text>
        <text x="665" y="250" fontSize="9" fill="#1e293b">• Spatial Memory</text>

        {/* Inputs Block */}
        <rect x="50" y="350" width="150" height="100" rx="12" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
        <text x="125" y="375" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155" className="font-mono">INPUTS</text>
        <text x="70" y="400" fontSize="10" fill="#64748b">• Mic</text>
        <text x="70" y="415" fontSize="10" fill="#64748b">• Speech-to-Text</text>
        <text x="70" y="430" fontSize="10" fill="#64748b">• LLM Query Agent</text>

        {/* Sensors Block */}
        <rect x="630" y="350" width="150" height="100" rx="12" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
        <text x="705" y="375" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155" className="font-mono">SENSORS</text>
        <text x="645" y="400" fontSize="10" fill="#64748b">• Cameras</text>
        <text x="645" y="415" fontSize="10" fill="#64748b">• Force Sensors</text>
        <text x="645" y="430" fontSize="10" fill="#64748b">• Encoders</text>
    </svg>
);

export const AssistiveTechDiagramSVG: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        viewBox="0 0 800 300"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Background Grid */}
        <rect width="100%" height="100%" fill="#f9fafb" rx="20" />

        {/* Connection Path */}
        <path d="M 50 150 H 750" stroke="#e5e7eb" strokeWidth="4" />

        {/* Nodes */}
        <g transform="translate(100, 100)">
            <rect width="140" height="100" rx="12" fill="white" stroke="#3b82f6" strokeWidth="2" />
            <text x="70" y="40" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e3a8a">PERCEPTION</text>
            <text x="70" y="65" textAnchor="middle" fontSize="10" fill="#64748b">Gemini 2.0 Vision</text>
        </g>

        <g transform="translate(330, 100)">
            <rect width="140" height="100" rx="12" fill="white" stroke="#10b981" strokeWidth="2" />
            <text x="70" y="40" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#064e3b">SPATIAL MEMORY</text>
            <text x="70" y="65" textAnchor="middle" fontSize="10" fill="#64748b">SQLite DB</text>
        </g>

        <g transform="translate(560, 100)">
            <rect width="140" height="100" rx="12" fill="white" stroke="#f59e0b" strokeWidth="2" />
            <text x="70" y="40" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#78350f">3D AUDIO</text>
            <text x="70" y="65" textAnchor="middle" fontSize="10" fill="#64748b">HRTF Engine</text>
        </g>

        {/* Arrows */}
        <path d="M 240 150 L 330 150" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#blue-arrow)" />
        <path d="M 470 150 L 560 150" stroke="#10b981" strokeWidth="2" markerEnd="url(#green-arrow)" />

        <defs>
            <marker id="blue-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
            </marker>
            <marker id="green-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
            </marker>
        </defs>
    </svg>
);
