import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Github, Linkedin } from "lucide-react";

import { navLinks, portfolio } from "@/data/portfolio";

interface StaggeredMobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function StaggeredMobileMenu({
  open,
  onClose,
}: StaggeredMobileMenuProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const layerOneRef = useRef<HTMLDivElement>(null);
  const layerTwoRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLAnchorElement[]>([]);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const layerOne = layerOneRef.current;
    const layerTwo = layerTwoRef.current;
    const panel = panelRef.current;

    if (!wrapper || !layerOne || !layerTwo || !panel) return;

    const layers = [layerOne, layerTwo, panel];

    if (open) {
      // Make the menu interactive first
      gsap.set(wrapper, {
        visibility: "visible",
        pointerEvents: "auto",
      });

      // Reset positions
      gsap.set(layers, {
        xPercent: 100,
      });

      gsap.set(itemRefs.current, {
        y: 60,
        opacity: 0,
      });

      gsap.set(socialRef.current, {
        y: 20,
        opacity: 0,
      });

      const timeline = gsap.timeline();

      timeline
        .to(layerOne, {
          xPercent: 0,
          duration: 0.45,
          ease: "power4.out",
        })
        .to(
          layerTwo,
          {
            xPercent: 0,
            duration: 0.5,
            ease: "power4.out",
          },
          0.07,
        )
        .to(
          panel,
          {
            xPercent: 0,
            duration: 0.55,
            ease: "power4.out",
          },
          0.14,
        )
        .to(
          itemRefs.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.07,
            ease: "power3.out",
          },
          0.3,
        )
        .to(
          socialRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          0.5,
        );

      document.body.style.overflow = "hidden";

      return () => {
        timeline.kill();
      };
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.set(wrapper, {
          visibility: "hidden",
          pointerEvents: "none",
        });
      },
    });

    timeline
      .to(panel, {
        xPercent: 100,
        duration: 0.3,
        ease: "power3.in",
      })
      .to(
        layerTwo,
        {
          xPercent: 100,
          duration: 0.3,
          ease: "power3.in",
        },
        0.05,
      )
      .to(
        layerOne,
        {
          xPercent: 100,
          duration: 0.3,
          ease: "power3.in",
        },
        0.1,
      );

    document.body.style.overflow = "";

    return () => {
      timeline.kill();
    };
  }, [open]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-40 invisible pointer-events-none md:hidden"
      aria-hidden={!open}
    >
      {/* Click outside */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
      />

      {/* First animated layer */}
      <div
        ref={layerOneRef}
        className="absolute inset-y-0 right-0 w-[88%] max-w-[430px] bg-primary/25"
      />

      {/* Second animated layer */}
      <div
        ref={layerTwoRef}
        className="absolute inset-y-0 right-0 w-[85%] max-w-[420px] bg-primary/50"
      />

      {/* Main panel */}
      <aside
        ref={panelRef}
        className="
          absolute inset-y-0 right-0
          flex w-[82%] max-w-[410px] flex-col
          border-l border-border
          bg-background
          px-7 pb-8 pt-28
          shadow-2xl
        "
      >
        <nav aria-label="Mobile navigation">
          <div className="flex flex-col">
            {navLinks.map((item, index) => (
              <a
                key={item.label}
                ref={(element) => {
                  if (element) {
                    itemRefs.current[index] = element;
                  }
                }}
                href={item.href}
                onClick={handleLinkClick}
                className="
                  group flex items-start justify-between
                  border-b border-border/60
                  py-4
                  text-3xl font-semibold tracking-tight
                  text-foreground
                  transition-colors
                  hover:text-primary
                "
              >
                <span>{item.label}</span>

                <span
                  className="
                    mt-1 text-xs font-normal
                    text-muted-foreground
                    transition-colors
                    group-hover:text-primary
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </div>
        </nav>

        {/* Social links */}
        <div ref={socialRef} className="mt-auto">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Let's connect
          </p>

          <div className="flex items-center gap-3">
            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-border
                text-muted-foreground
                transition-all
                hover:border-primary hover:text-primary
              "
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-border
                text-muted-foreground
                transition-all
                hover:border-primary hover:text-primary
              "
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
