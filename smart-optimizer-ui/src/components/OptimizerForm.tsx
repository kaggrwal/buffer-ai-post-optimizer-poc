'use client'

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { OPTIMIZE_POST } from '@/lib/graphql';

const OptimizerForm = () => {
  const [baseText, setBaseText] = useState('');
  const [platformInput, setPlatformInput] = useState(''); // text input like "TWITTER, LINKEDIN"
  const [tone, setTone] = useState('');

  const [optimizePost, { loading, error, data }] = useMutation(OPTIMIZE_POST);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Ensure platforms are split and converted to uppercase
    const platforms = platformInput
      .split(',')
      .map(p => p.trim().toUpperCase())
      .filter(p => p); // remove empty values

    const input = {
      baseText,
      platforms,
      tone,
    };

    console.log("Sending to GraphQL:", input);

    try {
      const response = await optimizePost({
        variables: { input }
      });
      console.log("Response:", response.data);
    } catch (err) {
      console.error("GraphQL Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Base Text</label>
        <textarea
          value={baseText}
          onChange={(e) => setBaseText(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Platforms (comma-separated)</label>
        <input
          type="text"
          value={platformInput}
          onChange={(e) => setPlatformInput(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="e.g., TWITTER, LINKEDIN"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Tone</label>
        <input
          type="text"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Optimizing...' : 'Optimize'}
      </button>

      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Optimized Results:</h3>
          {data.optimizePost.map((item: any, idx: number) => (
            <div key={idx} className="border p-2 rounded mt-2">
              <p><strong>Platform:</strong> {item.platform}</p>
              <p><strong>Text:</strong> {item.optimizedText}</p>
              <p><strong>Hashtags:</strong> {item.hashtags.join(', ')}</p>
              <p><strong>Character Count:</strong> {item.characterCount}</p>
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default OptimizerForm;

