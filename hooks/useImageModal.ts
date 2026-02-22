import { useReducer } from "react"

export type ModalImage = { image: string; title: string }

type ModalState = ModalImage | null;

type ModalAction =
  | { type: "OPEN"; payload: ModalImage }
  | { type: "CLOSE" }

function modalReducer(
  state: ModalState,
  action: ModalAction
): ModalState {
  switch (action.type) {
    case "OPEN":
      return action.payload;
    case "CLOSE":
      return null;
    default:
      return state;
  }
}

export function useImageModal() {
  const [state, dispatch] = useReducer(modalReducer, null)

  const open = (image: ModalImage) => dispatch({ type: "OPEN", payload: image })

  const close = () => dispatch({ type: "CLOSE" })

  return {
    activeImage: state,
    openImageModal: open,
    closeImageModal: close,
  }
}
