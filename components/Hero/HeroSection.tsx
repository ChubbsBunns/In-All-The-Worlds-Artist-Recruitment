'use client';

import { useEffect, useRef } from 'react';
import { Box, Stack, Title, Text } from '@mantine/core';

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Background moves at 50% of scroll speed — slides away relatively quickly
      if (bgRef.current) bgRef.current.style.transform = `translateY(${y * 0.5}px)`;
      // Title moves at 30% of scroll speed — lingers and floats
      if (titleRef.current) titleRef.current.style.transform = `translateY(${y * 0.25}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      component="section"
      style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* [HERO IMAGE TODO] — replace backgroundColor with BackgroundImage once art exists.
          Extra height (120%) gives the parallax room to move without showing gaps. */}
      <Box
        ref={bgRef}
        style={{
          position: 'absolute',
          top: '-10%',
          left: 0,
          right: 0,
          height: '120%',
          willChange: 'transform',
          overflow: 'hidden',
        }}
      >
        {/* [HERO IMAGE TODO] — replace srcs with final art; mobile image: 1080×1920 portrait crop */}
        <picture style={{ width: '100%', height: '100%', display: 'block' }}>
          <source media="(max-width: 767px)" srcSet="/demo_hero_2_mobile.png" />
          <img
            src="/demo_hero_2.png"
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </picture>
      </Box>

      <Stack
        ref={titleRef}
        align="center"
        gap="md"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '7vh 1rem 0',
          willChange: 'transform',
        }}
      >
        <Title order={1} size="3rem" style={{ color: '#fff', textShadow: '0 2px 16px rgba(0,0,0,0.75)', fontFamily: 'var(--font-cinzel), serif', letterSpacing: '0.05em' }}>
          In All The Worlds
        </Title>
        <Text size="xl" style={{ color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 8px rgba(0,0,0,0.65)', fontFamily: 'var(--font-cinzel), serif' }}>
          The worlds are written, but not yet drawn. That's where you come in.
        </Text>
      </Stack>
    </Box>
  );
}
