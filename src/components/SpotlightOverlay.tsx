import React, { useState, useEffect, useCallback } from 'react';

interface SpotlightOverlayProps {
  enabled?: boolean;
  size?: number;
  opacity?: number;
  blendMode?: 'screen' | 'multiply' | 'overlay';
}

export const SpotlightOverlay: React.FC<SpotlightOverlayProps> = ({
  enabled = true,
  size = 600,
  opacity = 0.2,
  blendMode = 'screen'
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleChange);

    return () => motionQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle mouse movement with throttling for performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!enabled || prefersReducedMotion) return;

    // Use requestAnimationFrame for smooth performance
    requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    });
  }, [enabled, prefersReducedMotion]);

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Add event listeners
  useEffect(() => {
    if (!enabled || prefersReducedMotion) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, prefersReducedMotion, handleMouseMove, handleMouseLeave]);

  // Don't render if disabled or user prefers reduced motion
  if (!enabled || prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        mixBlendMode: blendMode,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full transition-opacity duration-300 ease-out"
        style={{
          left: position.x - size / 2,
          top: position.y - size / 2,
          width: size,
          height: size,
          opacity: isVisible ? opacity : 0,
          background: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)`,
          filter: 'blur(1px)',
        }}
      />
    </div>
  );
};

// Hook for managing spotlight state
export const useSpotlightCursor = (initialEnabled = true) => {
  const [isEnabled, setIsEnabled] = useState(initialEnabled);

  const toggleSpotlight = () => setIsEnabled(!isEnabled);
  const enableSpotlight = () => setIsEnabled(true);
  const disableSpotlight = () => setIsEnabled(false);

  return {
    isEnabled,
    toggleSpotlight,
    enableSpotlight,
    disableSpotlight,
  };
}; 