import { create } from "zustand";
import { persist } from "zustand/middleware";

const CACHE_LIFETIME = 30 * 60 * 1000;

type ExampleStore = {
  sources: string[];
  timestamp: number;
  setSources: (sources: string[]) => void;
  loadSources: () => void;
};

export const useExampleStore = create<ExampleStore>()(
  persist(
    (set, get) => ({
      sources: [],

      timestamp: 0,

      setSources: (sources) => {
        const currentTime = Date.now();
        set({ sources, timestamp: currentTime });
      },

      loadSources: () => {
        const { sources, timestamp } = get();
        const currentTime = Date.now();
        if (sources.length > 0 && currentTime - timestamp <= CACHE_LIFETIME) {
          return;
        }
        set({ sources: [], timestamp: currentTime });
      },
    }),
    {
      name: "example_sources",
    }
  )
);
