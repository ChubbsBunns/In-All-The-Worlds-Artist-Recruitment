'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardSection, Box, Text, Badge, Stack } from '@mantine/core';
import type { Character } from '@/data/characters';
import { CharacterModal } from './CharacterModal';

export function CharacterCard({ character }: { character: Character }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Card
        shadow="sm"
        padding="md"
        radius="md"
        withBorder
        onClick={() => setOpened(true)}
        style={{ cursor: 'pointer' }}
      >
        <CardSection>
          <Box
            style={{
              aspectRatio: '3/4',
              position: 'relative',
              backgroundColor: 'light-dark(#e0e0e0, #1e1e2e)',
              overflow: 'hidden',
            }}
          >
            <Image
              src={character.cardImage}
              alt={character.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(min-width: 1200px) 20vw, (min-width: 768px) 50vw, 100vw"
            />
          </Box>
        </CardSection>

        <Stack gap={4} mt="sm">
          <Text fw={600}>{character.name}</Text>
          <Badge size="sm" variant="light">
            {character.role}
          </Badge>
          <Text size="sm" c="dimmed">
            {character.shortDescription}
          </Text>
        </Stack>
      </Card>

      <CharacterModal
        character={character}
        opened={opened}
        onClose={() => setOpened(false)}
      />
    </>
  );
}
