import { useEffect, useState } from "react";

const PORTRAIT_EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png"] as const;

export default function PortraitPlaceholder() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const tryNext = (i: number) => {
      if (i >= PORTRAIT_EXTENSIONS.length) {
        setSrc(null);
        return;
      }
      const ext = PORTRAIT_EXTENSIONS[i];
      const img = new Image();
      img.onload = () => setSrc(`/portrait${ext}`);
      img.onerror = () => tryNext(i + 1);
      img.src = `/portrait${ext}`;
    };
    tryNext(0);
  }, []);

  if (src) {
    const isWebP = src.endsWith(".webp");
    const alt =
      "Portrait of Muhammad Shameel KS - Full-Stack Engineer & Sysadmin from Palakkad, Kerala";

    return (
      <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
        {isWebP ? (
          <picture>
            <source srcSet={src} type="image/webp" />
            <img
              src={src.replace(".webp", ".jpg")}
              alt={alt}
              width={400}
              height={400}
              className="w-full h-auto object-cover aspect-square"
              loading="lazy"
              decoding="async"
            />
          </picture>
        ) : (
          <img
            src={src}
            alt={alt}
            width={400}
            height={400}
            className="w-full h-auto object-cover aspect-square"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center gap-3 aspect-square max-w-sm mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white font-[Silkscreen] text-xl font-bold">
        S
      </div>
      <div>
        <div className="font-[Silkscreen] text-xs tracking-widest uppercase text-fg-faint">
          Portrait coming soon
        </div>
        <p className="text-sm text-fg-muted mt-1 leading-snug">
          Add{" "}
          <code className="px-1.5 py-0.5 rounded bg-white border border-border text-xs">
            public/portrait.webp
          </code>{" "}
          to go live - auto-detected.
        </p>
      </div>
      <span className="text-xs text-fg-faint">
        Palakkad, Kerala - remote worldwide
      </span>
    </div>
  );
}
