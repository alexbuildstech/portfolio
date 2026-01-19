import "@testing-library/jest-dom";
import { vi } from "vitest";
import React from "react";

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => { },
    removeListener: () => { },
    addEventListener: () => { },
    removeEventListener: () => { },
    dispatchEvent: () => { },
  }),
});

// Mock Spline to avoid canvas/webgl issues in tests
vi.mock("@splinetool/react-spline", () => ({
  default: () => React.createElement("div", { "data-testid": "spline-mock" }),
}));

// Mock MatrixRain to avoid excessive DOM manipulations in tests
vi.mock("../components/effects/MatrixRain", () => ({
  default: () => React.createElement("div", { "data-testid": "matrix-rain-mock" }),
}));
