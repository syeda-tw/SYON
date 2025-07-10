'use client';

import { useState } from 'react';
import Link from 'next/link';

// Minimal Switch Component
const Switch = ({ active, onChange, label }: { active: boolean; onChange: () => void; label: string }) => (
  <div className="flex items-center gap-3">
    <div className={`switch ${active ? 'active' : ''}`} onClick={onChange}>
      <div className="switch-thumb"></div>
    </div>
    <span>{label}</span>
  </div>
);

// Minimal Select Component
const Select = ({ options, value, onChange }: { options: string[]; value: string; onChange: (value: string) => void }) => (
  <select 
    className="select" 
    value={value} 
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map(option => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
);

export default function Styleguide() {
  const [switchState, setSwitchState] = useState(false);
  const [selectValue, setSelectValue] = useState('Option 1');

  return (
    <main className="min-h-screen bg-background text-text p-4">
      <div className="max-w-4xl mx-auto py-8 space-y-12">
        
        {/* Navigation */}
        <nav className="flex justify-between items-center py-4 border-b border-accent/20">
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors font-medium">
            Home
          </Link>
          <Link href="/styleguide" className="text-primary hover:text-primary/80 transition-colors font-medium">
            Styleguide
          </Link>
        </nav>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            SYON Styleguide
          </h1>
          <p className="text-lg text-text/70">
            Design system for minimal decision-making
          </p>
        </div>

        {/* Colors */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="w-full h-16 bg-primary rounded-default"></div>
              <p className="text-sm font-medium">Primary</p>
              <p className="text-xs text-text/60">#4F5D75</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-secondary rounded-default"></div>
              <p className="text-sm font-medium">Secondary</p>
              <p className="text-xs text-text/60">#FFB997</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-accent rounded-default"></div>
              <p className="text-sm font-medium">Accent</p>
              <p className="text-xs text-text/60">#AEE0F4</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-background border border-text/20 rounded-default"></div>
              <p className="text-sm font-medium">Background</p>
              <p className="text-xs text-text/60">#FAF9F6</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-text rounded-default"></div>
              <p className="text-sm font-medium">Text</p>
              <p className="text-xs text-text/60">#1A1A1A</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Typography
          </h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Heading Large (Sora)
              </h1>
              <p className="text-sm text-text/60">Font: Sora, Weight: Bold, Size: 36px</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Heading Medium (Sora)
              </h2>
              <p className="text-sm text-text/60">Font: Sora, Weight: Semibold, Size: 24px</p>
            </div>
            <div>
              <p className="text-lg mb-2">
                Body Text Large (Work Sans)
              </p>
              <p className="text-sm text-text/60">Font: Work Sans, Weight: Regular, Size: 18px</p>
            </div>
            <div>
              <p className="text-base mb-2">
                Body Text Regular (Work Sans)
              </p>
              <p className="text-sm text-text/60">Font: Work Sans, Weight: Regular, Size: 16px</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">Primary Button</button>
            <button className="btn btn-secondary">Secondary Button</button>
            <button className="btn btn-ghost">Ghost Button</button>
          </div>
        </section>

        {/* Switch */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Switch
          </h2>
          <div className="space-y-4">
            <Switch 
              active={switchState} 
              onChange={() => setSwitchState(!switchState)} 
              label="Toggle Setting"
            />
          </div>
        </section>

        {/* Select */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Select
          </h2>
          <div className="max-w-xs">
            <Select 
              options={['Option 1', 'Option 2', 'Option 3']}
              value={selectValue}
              onChange={setSelectValue}
            />
          </div>
        </section>

        {/* Spacing & Borders */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Spacing & Effects
          </h2>
          <div className="space-y-4">
            <div className="p-6 bg-accent/20 rounded-default border-default">
              <p className="font-medium">Default Border</p>
              <p className="text-sm text-text/60">Subtle definition for cards and buttons</p>
            </div>
            <div className="p-6 bg-accent/20 rounded-default border-heavy">
              <p className="font-medium">Heavy Border</p>
              <p className="text-sm text-text/60">Strong emphasis for interactive elements</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
} 