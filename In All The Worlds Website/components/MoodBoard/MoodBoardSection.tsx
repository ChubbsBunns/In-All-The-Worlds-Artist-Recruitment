'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Container,
  Title,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { worlds } from '@/data/characters';

const world = worlds[0];

export function MoodBoardSection() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box component="section" id="moodboard" py="5rem">
      <Container size="lg">
        <Title order={2} ta="center" mb="md">
          The Worlds
        </Title>

        <Text ta="center" c="dimmed" maw={680} mx="auto" mb="xl">
          {world.description}
        </Text>

        {/* Masonry grid — explicit flex columns, round-robin distribution */}
        <Box style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
          {Array.from({ length: isMobile ? 1 : 3 }, (_, col) =>
            world.images.filter((_, i) => i % (isMobile ? 1 : 3) === col)
          ).map((colImages, colIdx) => (
            <Box key={colIdx} style={{ flex: 1, minWidth: 0 }}>
              {colImages.map((src, i) => (
                <Box
                  key={i}
                  onClick={() => setLightbox(src)}
                  style={{
                    marginBottom: '0.75rem',
                    cursor: 'zoom-in',
                    borderRadius: 'var(--mantine-radius-sm)',
                    overflow: 'hidden',
                    backgroundColor: 'light-dark(#e0e0e0, #1e1e2e)',
                  }}
                >
                  <Image
                    src={src}
                    alt=""
                    width={800}
                    height={600}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Container>

      {/* Fullscreen lightbox */}
      {lightbox && (
        <Box
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
          }}
          onClick={() => setLightbox(null)}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            style={{ lineHeight: 0 }}
          >
            <Image
              src={lightbox}
              alt=""
              width={1600}
              height={1200}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                display: 'block',
              }}
              sizes="90vw"
            />
          </Box>

          <UnstyledButton
            aria-label="Close lightbox"
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: 22,
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            ×
          </UnstyledButton>
        </Box>
      )}
    </Box>
  );
}
