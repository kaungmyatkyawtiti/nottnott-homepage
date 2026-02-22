import { StateCreator } from "zustand";
import { BoundStore } from "../useBoundStore";

interface ImageModalData {
  image: string;
  title: string;
}

interface ImageModalState {
  activeImage: ImageModalData | null
}

interface ImageModalAction {
  openModal: (image: string, title: string) => void;
  closeModal: () => void;
}

export type ImageModalSlice = ImageModalState & ImageModalAction;

const initState: ImageModalState = {
  activeImage: null,
}

export const createImageModalSlice: StateCreator<
  BoundStore,
  [["zustand/devtools", never], ["zustand/immer", never]],
  [],
  ImageModalSlice
> = (set) => ({
  ...initState,

  openModal: (image: string, title: string) =>
    set(
      (state) => {
        state.activeImage = { image, title };
      },
      undefined,
      "imageModal/openModal"
    ),

  closeModal: () =>
    set(
      (state) => {
        state.activeImage = null;
      },
      undefined,
      "imageModal/closeModal"
    ),
});
