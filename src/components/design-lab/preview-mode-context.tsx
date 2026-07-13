"use client";

import { createContext } from "react";

/**
 * "viewport": trigger reveals via IntersectionObserver (site-like scroll behaviour).
 * "mount": trigger reveals shortly after mount, regardless of scroll position —
 * used inside the preview modal, where the demo is always already in view.
 */
export type PreviewMode = "viewport" | "mount";

export const PreviewModeContext = createContext<PreviewMode>("viewport");
