import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { createImageModalSlice, ImageModalSlice } from "./features/imageModalSlice";

export type BoundStore = ImageModalSlice;

export const useBoundStore = create<BoundStore>()(
  devtools(
    immer((...args) => ({
      ...createImageModalSlice(...args),
    }))
  )
);
