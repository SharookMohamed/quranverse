import { create } from 'zustand';

interface CurrentAyah {
  surahId: number;
  ayahNumber: number;
}

interface AudioState {
  currentAyah: CurrentAyah | null;
  isPlaying: boolean;
  volume: number;
  play: (ayah: CurrentAyah) => void;
  setPlaying: (playing: boolean) => void;
  setVolume: (volume: number) => void;
  clear: () => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  currentAyah: null,
  isPlaying: false,
  volume: 0.8,
  play: (ayah) => set({ currentAyah: ayah, isPlaying: true }),
  setPlaying: (playing) => set({ isPlaying: playing }),
  setVolume: (volume) => set({ volume }),
  clear: () => set({ currentAyah: null, isPlaying: false }),
}));