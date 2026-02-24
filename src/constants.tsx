import React from 'react';
import { PromptTemplate, Framework } from './types';

export const POPULAR_TEMPLATES: PromptTemplate[] = [
  {
    id: '1',
    title: 'NEC Compliance Auditor',
    description: 'Analyzes circuit plans against the latest National Electrical Code standards.',
    content: 'Act as a Master Electrician and NEC inspector. Review the following load calculations and wiring plans for compliance with NFPA 70...',
    category: 'Code Compliance',
    author: 'VoltMaster',
    stars: 2100
  },
  {
    id: '2',
    title: 'Fault Finder / Troubleshooter',
    description: 'Step-by-step diagnostic tree for residential and industrial electrical faults.',
    content: 'I have a [symptom, e.g., tripping GFCI]. Based on a standard 120V residential split-phase system, provide a safety-first diagnostic sequence...',
    category: 'Troubleshooting',
    author: 'SparkyPro',
    stars: 1540
  },
  {
    id: '3',
    title: 'Load Calculator Pro',
    description: 'Calculates service entrance requirements and branch circuit sizing.',
    content: 'Calculate the total demand load for a {square_footage} sq ft dwelling with the following appliances: {appliances}. Use Article 220 methods...',
    category: 'Estimation',
    author: 'CurrentGen',
    stars: 980
  }
];

export const COGNITIVE_FRAMEWORKS: Framework[] = [
  {
    id: 'safety-first',
    name: 'Safety-First Protocol',
    description: 'Prioritizes OSHA standards and lockout/tagout (LOTO) procedures in every response.',
    structure: '1. Identify Hazards\n2. PPE Requirements\n3. De-energization Steps\n4. Technical Execution.'
  },
  {
    id: 'schematic-logic',
    name: 'Schematic Reasoning',
    description: 'Breaks down complex circuitry from the power source to the load.',
    structure: 'Source -> Overcurrent Protection -> Conductors -> Controls -> Load.'
  },
  {
    id: 'persona',
    name: 'Journeyman Mentor',
    description: 'Explains complex electrical theory in practical, field-ready terms.',
    structure: 'You are a Senior Journeyman with 30 years in the trade. Explain this as if we are on a job site.'
  }
];

// ⚡ Bolt: Wrapped in React.memo to prevent unnecessary re-renders
export const ElectricianGenieIcon = React.memo(() => (
  <div className="relative w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-xl shadow-lg">
    <span className="text-2xl">⚡</span>
    <span className="absolute -top-1 -right-1 text-xs">🛠️</span>
  </div>
));
