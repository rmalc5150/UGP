'use client';

import { useMemo, useState } from 'react';

const silhouettes = [
  { label: 'Boxers', icon: '▭' },
  { label: 'Boxer Briefs', icon: '◧' },
  { label: 'Briefs', icon: '◒' },
  { label: 'Undershirts', icon: '▱' },
  { label: 'T-Shirts', icon: '◻' },
];

const brands = [
  { label: 'None', icon: '' },
  { label: 'Nike', icon: '✓' },
  { label: 'Adidas', icon: '▲' },
  { label: 'Victoria Secret', icon: 'VS' },
];

const colors = ['Black', 'White', 'Stone', 'Navy', 'Gray'];
const fabrics = ['Soft cotton stretch', 'Modal blend', 'Lightweight cotton', 'Performance knit'];
const fitVariations = ['Slim', 'Classic', 'Relaxed', 'Oversized'];

export default function DesignPage() {
  const [selectedSilhouette, setSelectedSilhouette] = useState(silhouettes[0].label);
  const [selectedBrand, setSelectedBrand] = useState(brands[0].label);
  const [color, setColor] = useState(colors[0]);
  const [fabric, setFabric] = useState(fabrics[0]);
  const [fitVariation, setFitVariation] = useState(fitVariations[0]);
  const [wantsMonogram, setWantsMonogram] = useState(false);
  const [monogram, setMonogram] = useState('');

  const isTShirt = selectedSilhouette === 'T-Shirts';

  const characterCountText = useMemo(() => `${monogram.length}/12 characters`, [monogram]);

  return (
    <main className="min-h-screen bg-black text-white pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <header>
          <h1 className="text-xl text-gray-300">
            Choose the silhouette, branding, details, and optional customization for your next
            design.
          </h1>
        </header>

        <section className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-300 mb-2">
              Step 1 - choose what you'd like to make
            </p>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {silhouettes.map((silhouette) => {
              const isSelected = selectedSilhouette === silhouette.label;

              return (
                <button
                  key={silhouette.label}
                  type="button"
                  onClick={() => setSelectedSilhouette(silhouette.label)}
                  className={`min-w-36 rounded-xl border px-4 py-5 text-left transition-colors ${
                    isSelected
                      ? 'bg-white text-black border-white'
                      : 'bg-gray-900 text-white border-gray-800 hover:bg-gray-100 hover:text-black'
                  }`}
                >
                  <span className="block text-3xl mb-4">{silhouette.icon}</span>
                  <span className="text-sm font-medium">{silhouette.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-300 mb-2">
              Step 2 - branding
            </p>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {brands.map((brand) => {
              const isSelected = selectedBrand === brand.label;

              return (
                <button
                  key={brand.label}
                  type="button"
                  onClick={() => setSelectedBrand(brand.label)}
                  className={`min-w-36 rounded-xl border px-4 py-5 text-left transition-colors ${
                    isSelected
                      ? 'bg-white text-black border-white'
                      : 'bg-gray-900 text-white border-gray-800 hover:bg-gray-100 hover:text-black'
                  }`}
                >
                  <span className="block text-3xl mb-4 font-bold">{brand.icon}</span>
                  <span className="text-sm font-medium">{brand.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-300 mb-2">
              Step 3 - details
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <label className="space-y-2">
              <span className="text-sm text-gray-400">Color</span>
              <select
                value={color}
                onChange={(event) => setColor(event.target.value)}
                className="w-full rounded-xl bg-gray-100 text-black px-4 py-3 text-sm outline-none"
              >
                {colors.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm text-gray-400">Fabric</span>
              <select
                value={fabric}
                onChange={(event) => setFabric(event.target.value)}
                className="w-full rounded-xl bg-gray-100 text-black px-4 py-3 text-sm outline-none"
              >
                {fabrics.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            {isTShirt && (
              <label className="space-y-2">
                <span className="text-sm text-gray-400">Fit variation</span>
                <select
                  value={fitVariation}
                  onChange={(event) => setFitVariation(event.target.value)}
                  className="w-full rounded-xl bg-gray-100 text-black px-4 py-3 text-sm outline-none"
                >
                  {fitVariations.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            )}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-300 mb-2">
              Step 4 - monogram
            </p>
          </div>

          <div className="space-y-1">
            <input
              value={monogram}
              onChange={(event) => {
                const value = event.target.value.slice(0, 12);
                setMonogram(value);
                setWantsMonogram(value.trim().length > 0);
              }}
              maxLength={12}
              placeholder="I'm a star ✨"
              className="w-full rounded-xl bg-transparent text-white placeholder:text-gray-400 border border-gray-100 px-2 py-2 text-sm outline-none"
            />
            <p className="text-xs text-gray-500">
              12 character limit, including spaces and emojis.
            </p>

            <div>
              {monogram.trim().length > 0 ? (
                <button
                  type="button"
                  onClick={() => setWantsMonogram(true)}
                  className="w-full rounded-xl bg-white text-black py-3 text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Add monogram
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setWantsMonogram(false);
                    setMonogram('');
                  }}
                  className="w-full rounded-xl bg-gray-100 text-black py-3 text-sm font-medium hover:bg-white transition-colors"
                >
                  No monogram
                </button>
              )}
            </div>
          </div>
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-gray-800 bg-black/95 px-4 py-4 backdrop-blur">
        <div className="max-w-5xl mx-auto">
          <button
            type="button"
            className="w-full rounded-xl bg-white text-black py-4 text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
