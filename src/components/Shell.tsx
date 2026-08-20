/**
 * Shell — wraps all components that share modal state in a single
 * client:load island so they can communicate via React context.
 *
 * In Astro's island architecture, each client:* directive creates an
 * independent React root. Components in separate islands can't share
 * context. This wrapper puts TopProgress, ChapterHeader, PersistentNav,
 * ProjectList, and the page content into one island.
 */

import { ModalProvider } from "../context/ModalContext";
import TopProgress from "./react/TopProgress";
import PersistentNav from "./react/PersistentNav";
import ChapterHeader from "./react/ChapterHeader";
import StickyMobileCTA from "./react/StickyMobileCTA";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <TopProgress />
      <ChapterHeader />
      <PersistentNav />
      <StickyMobileCTA />
      {children}
    </ModalProvider>
  );
}
