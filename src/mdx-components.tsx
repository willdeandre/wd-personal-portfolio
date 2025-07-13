// src/mdx-components.tsx
import type { MDXComponents } from "mdx/types";

/**
 * This hook is how MDX injects custom components.
 * For now, just return whatever it’s given.
 */
export function useMDXComponents(components: MDXComponents) {
  return { ...components };
}
