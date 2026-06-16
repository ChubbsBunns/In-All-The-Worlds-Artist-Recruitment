'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import { Modal, Stack, Text, Box, Badge, Title } from '@mantine/core';

interface Props {
  name: string;
  tag: string;
  imageSrc: string;
  secondImageSrc?: string;
  characterText: string;
  worldText: string;
  briefText: string;
  freeform?: boolean;
  freeformText?: string;
  opened: boolean;
  onClose: () => void;
}

const CONTENT_BLOCKS = [
  { label: 'THE CHARACTER', key: 'characterText' as const },
  { label: 'THE WORLD', key: 'worldText' as const },
  { label: 'THE BRIEF', key: 'briefText' as const },
] satisfies { label: string; key: keyof Pick<Props, 'characterText' | 'worldText' | 'briefText'> }[];

export function CharacterModal({
  name,
  tag,
  imageSrc,
  secondImageSrc,
  characterText,
  worldText,
  briefText,
  freeform,
  freeformText,
  opened,
  onClose,
}: Props) {
  const textByKey = { characterText, worldText, briefText };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Stack gap={6}>
          <Title order={2} size="h3">{name}</Title>
          <Badge variant="light" size="sm">{tag}</Badge>
        </Stack>
      }
      size="lg"
      centered
      padding="md"
    >
      <Stack gap="xl">
        <Box
          style={{
            aspectRatio: '16/9',
            position: 'relative',
            backgroundColor: 'light-dark(#e0e0e0, #1e1e2e)',
            borderRadius: 'var(--mantine-radius-sm)',
            overflow: 'hidden',
          }}
        >
          <Image
            src={imageSrc}
            alt={name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </Box>

        {freeform && freeformText ? (
          <Stack gap="md">
            {freeformText.split('\n\n').map((para, i) => (
              <Text key={i} size="md" lh={1.7} ta="center">
                {para}
              </Text>
            ))}
          </Stack>
        ) : (
          <Stack gap="xl">
            {CONTENT_BLOCKS.map(({ label, key }, i) => (
              <Fragment key={label}>
                <Stack gap={6}>
                  <Text
                    size="xs"
                    fw={700}
                    tt="uppercase"
                    c="dimmed"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    {label}
                  </Text>
                  <Text size="sm" lh={1.7}>
                    {textByKey[key]}
                  </Text>
                </Stack>
                {i === 0 && secondImageSrc && (
                  <Box
                    style={{
                      aspectRatio: '16/9',
                      position: 'relative',
                      backgroundColor: 'light-dark(#e0e0e0, #1e1e2e)',
                      borderRadius: 'var(--mantine-radius-sm)',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={secondImageSrc}
                      alt={name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 672px"
                    />
                  </Box>
                )}
              </Fragment>
            ))}
          </Stack>
        )}
      </Stack>
    </Modal>
  );
}
