/**
 * ModalContext — replaces the fragile data-modal-open DOM attribute
 * polling pattern with React's declarative context model.
 *
 * Before: ProjectList sets document.body.setAttribute('data-modal-open'),
 *         and 3 components poll it via setInterval at 50-100ms.
 * After:  ProjectList calls useModal().open(), consumers read useModal().isOpen.
 */

import {
 createContext,
 useContext,
 useState,
 useCallback,
 type ReactNode,
} from "react";

interface ModalContextValue {
 isOpen: boolean;
 open: () => void;
 close: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
 const [isOpen, setIsOpen] = useState(false);
 const open = useCallback(() => setIsOpen(true), []);
 const close = useCallback(() => setIsOpen(false), []);

 return (
  <ModalContext.Provider value={{ isOpen, open, close }}>
   {children}
  </ModalContext.Provider>
 );
}

const DEFAULT_MODAL: ModalContextValue = {
 isOpen: false,
 open: () => {},
 close: () => {},
};

/**
 * Returns modal state. Falls back to a no-op default when no provider exists
 * (e.g. during SSR or in Astro islands rendered outside the provider).
 */
export function useModal(): ModalContextValue {
 return useContext(ModalContext) ?? DEFAULT_MODAL;
}
