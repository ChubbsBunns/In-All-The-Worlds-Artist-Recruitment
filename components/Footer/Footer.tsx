import { Box, Text } from '@mantine/core';

export function Footer() {
  return (
    <Box
      component="footer"
      py="lg"
      style={{
        borderTop: '1px solid light-dark(rgba(0,0,0,0.08), rgba(255,255,255,0.08))',
        textAlign: 'center',
      }}
    >
      <Text size="sm" c="dimmed">
        © {new Date().getFullYear()} In All The Worlds. All rights reserved.
      </Text>
    </Box>
  );
}
