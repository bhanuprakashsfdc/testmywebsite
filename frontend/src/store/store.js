import { create } from 'zustand';

const useStore = create(set => ({
  url: '',
  device: null,
  setUrl: (url) => set(() => ({ url })),
  setDevice: (device) => set(() => ({ device })),
}));

export default useStore;
