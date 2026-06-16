'use client';

import Image from 'next/image';
import { Modal, Stack, Text, Box, SimpleGrid, Badge } from '@mantine/core';
import type { Character } from '@/data/characters';

interface Props {
  character: Character;
  opened: boolean;
  onClose: () => void;
}

export function CharacterModal({ character, opened, onClose }: Props) {
  const imageCols = Math.min(character.detailImages.length, 2);

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={character.name}
      size="lg"
      centered
    >
      <Stack gap="md">
        <Badge variant="light">{character.role}</Badge>

        {character.detailImages.length > 0 && (
          <SimpleGrid cols={{ base: 1, sm: imageCols }}>
            {character.detailImages.map((src, i) => (
              <Box
                key={i}
                style={{
                  aspectRatio: '3/2',
                  position: 'relative',
                  backgroundColor: 'light-dark(#e0e0e0, #1e1e2e)',
                  borderRadius: 'var(--mantine-radius-sm)',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={src}
                  alt={`${character.name} detail ${i + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </Box>
            ))}
          </SimpleGrid>
        )}

        <Text>{character.detailDescription}</Text>
      </Stack>
    </Modal>
  );
}
