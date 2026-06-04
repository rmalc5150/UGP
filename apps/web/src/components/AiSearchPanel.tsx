'use client';

import { useMemo, useState } from 'react';

type SearchResult = {
  id: string;
  title: string;
  description?: string;
  price?: string;
  imageUrl?: string;
  href?: string;
};

type AiSearchResponse = {
  answer?: string;
  results?: SearchResult[];
};

const suggestions = [
  'Blue soft cotton underwear',
  'Black lightweight t-shirt with a fitted cut',
  'Boxer briefs with no visible branding',
  'White undershirt for hot weather',
];

async function fetchAiSearchResults(query: string): Promise<AiSearchResponse> {
  const endpoint = process.env.NEXT_PUBLIC_AI_SEARCH_ENDPOINT;

  if (!endpoint) {
    throw new Error('Missing NEXT_PUBLIC_AI_SEARCH_ENDPOINT');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      source: 'web-home-ai-search',
    }),
  });

  if (!response.ok) {
    throw new Error(`AI search request failed with status ${response.status}`);
  }

  return response.json() as Promise<AiSearchResponse>;
}

export default function AiSearchPanel() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const canSearch = useMemo(() => query.trim().length > 2 && !isLoading, [query, isLoading]);

  async function runSearch(searchQuery = query) {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery.length < 3) return;

    setIsLoading(true);
    setError('');
    setAnswer('');
    setResults([]);

    try {
      const data = await fetchAiSearchResults(trimmedQuery);

      setAnswer(data.answer ?? '');
      setResults(data.results ?? []);
    } catch (err) {
      console.error(err);
      setError(
        'UGP search is unavailable right now. Check your internet connection and try again?',
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="bg-black px-4 py-6 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-5">
          <h2 className="mt-2 text-2xl font-light tracking-wide md:text-3xl">
            What are you looking for?
          </h2>
        </div>

        <form
          className="flex flex-col gap-3 md:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            void runSearch();
          }}
        >
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try: black lightweight boxers with no visible branding"
            className="min-h-12 rounded-full flex-1 border border-gray-700 bg-black px-4 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-white"
          />
          <button
            type="submit"
            disabled={!canSearch}
            className="min-h-12 rounded-full px-6 text-sm uppercase text-white hover:bg-gray-800 transition-colors hover:bg-opacity-100 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Searching' : 'Search'}
          </button>
        </form>

        {error && <p className="mt-4 text-sm text-amber-100">{error}</p>}

        {answer && (
          <div className="mt-6 border border-gray-800 p-4">
            <p className="text-sm leading-6 text-gray-300">{answer}</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {results.map((result) => (
              <a
                key={result.id}
                href={result.href ?? '#'}
                className="group rounded-full border border-gray-900 bg-black transition-colors hover:border-gray-600"
              >
                {result.imageUrl && (
                  <div className="aspect-[4/5] overflow-hidden bg-gray-950">
                    <img
                      src={result.imageUrl}
                      alt={result.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-sm uppercase tracking-[0.16em] text-white">{result.title}</h3>
                  {result.description && (
                    <p className="mt-2 text-sm leading-5 text-gray-400">{result.description}</p>
                  )}
                  {result.price && <p className="mt-3 text-sm text-gray-300">{result.price}</p>}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
