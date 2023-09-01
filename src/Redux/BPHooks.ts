import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux/es/types";
import { BPDispatch, RootState } from "./BPStore";

export const useBPDispatch: () => BPDispatch = useDispatch;
export const useBPSelector: TypedUseSelectorHook<RootState> = useSelector;
 