// import Image from 'next/image';
// import { Anchor, Group } from '@mantine/core';
// import { socialLinks } from '@/data/characters';
import { Box, Stack, Text } from '@mantine/core';

export function Footer() {
  return (
    <Box
      component="footer"
      py="xl"
      style={{
        borderTop: '1px solid light-dark(rgba(0,0,0,0.08), rgba(255,255,255,0.08))',
      }}
    >
      <Stack align="center" gap="lg">
        {/* Social links — uncomment to restore
        <Group gap="md">
          {socialLinks.map((profile) => (
            <Anchor
              key={profile.id}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--mantine-radius-md)',
                border: '1px solid light-dark(rgba(0,0,0,0.12), rgba(255,255,255,0.12))',
                backdropFilter: 'blur(8px)',
                backgroundColor: 'light-dark(rgba(255,255,255,0.6), rgba(0,0,0,0.4))',
                flexShrink: 0,
              }}
              aria-label={profile.name}
            >
              {profile.imgSrc ? (
                <Image src={profile.imgSrc} alt={profile.name} width={20} height={20} />
              ) : (
                <Text size="xs" fw={700} c="dimmed">
                  {profile.name.slice(0, 2).toUpperCase()}
                </Text>
              )}
            </Anchor>
          ))}
        </Group>
        */}

        <Text size="sm" c="dimmed">
          © {new Date().getFullYear()} In All The Worlds. All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
}
