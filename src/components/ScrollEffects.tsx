"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollEffects = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Keep native scrolling for reliability; GSAP handles reveal/parallax timelines.
    const onScroll = () => ScrollTrigger.update();
    window.addEventListener("scroll", onScroll, { passive: true });

    const revealElements = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    revealElements.forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 26 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        },
      );
    });

    if (window.innerWidth >= 1024) {
      const parallaxElements = gsap.utils.toArray<HTMLElement>("[data-parallax]");
      parallaxElements.forEach((element) => {
        gsap.to(element, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
};

export default ScrollEffects;
