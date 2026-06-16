'use client';

import { useState } from 'react';
import {
  Anchor,
  Box,
  Group,
  Text,
  Button,
  ActionIcon,
  Burger,
  Drawer,
  Stack,
  useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core';

const navLinks = [
  { label: 'The Game', id: 'synopsis' },
  { label: 'Characters', id: 'characters' },
  { label: 'Environment Moodboard', id: 'moodboard' },
  { label: 'The Role', id: 'the-role' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function StickyHeader() {
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme('dark');
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleNavClick(id: string) {
    setDrawerOpen(false);
    scrollTo(id);
  }

  return (
    <>
      <Drawer
        opened={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title={
          <Text fw={700} size="sm" tt="uppercase" style={{ letterSpacing: '0.08em' }}>
            In All The Worlds
          </Text>
        }
        size="xs"
        zIndex={200}
      >
        <Stack gap="sm" pt="xs">
          {navLinks.map(({ label, id }) => (
            <Anchor
              key={id}
              component="button"
              size="lg"
              c="dimmed"
              onClick={() => handleNavClick(id)}
              style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
            >
              {label}
            </Anchor>
          ))}
          <Button mt="sm" onClick={() => handleNavClick('contact')}>
            Get in touch
          </Button>
        </Stack>
      </Drawer>

      <Box
        component="header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          height: 48,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          backgroundColor:
            'light-dark(rgba(255,255,255,0.75), rgba(10,10,20,0.65))',
          borderBottom:
            '1px solid light-dark(rgba(0,0,0,0.08), rgba(255,255,255,0.08))',
        }}
      >
        <Group h="100%" px="md" justify="space-between">
          <Text fw={700} size="sm" tt="uppercase" style={{ letterSpacing: '0.08em' }}>
            In All The Worlds
          </Text>

          <Group gap="lg" visibleFrom="md">
            {navLinks.map(({ label, id }) => (
              <Anchor
                key={id}
                component="button"
                size="sm"
                c="dimmed"
                onClick={() => scrollTo(id)}
                style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                {label}
              </Anchor>
            ))}
          </Group>

          <Group gap="xs">
            <ActionIcon
              variant="subtle"
              size="md"
              onClick={() =>
                setColorScheme(computed === 'dark' ? 'light' : 'dark')
              }
              aria-label="Toggle colour scheme"
            >
              {computed === 'dark' ? '☀' : '☾'}
            </ActionIcon>
            <Button size="xs" variant="outline" visibleFrom="md" onClick={() => scrollTo('contact')}>
              Get in touch
            </Button>
            <Burger
              opened={drawerOpen}
              onClick={() => setDrawerOpen((o) => !o)}
              size="sm"
              hiddenFrom="md"
              aria-label="Open navigation"
            />
          </Group>
        </Group>
      </Box>
    </>
  );
}
