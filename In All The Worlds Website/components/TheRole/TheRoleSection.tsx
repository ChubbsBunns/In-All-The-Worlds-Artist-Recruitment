import { Box, Container, Stack, Title, Text } from '@mantine/core';
import { theRoleBlocks } from '@/data/characters';

export function TheRoleSection() {
  return (
    <Box component="section" id="the-role" py="5rem">
      <Container size="sm">
        <Stack gap="xl">
          <Title order={2} ta="center">
            [ROLE HEADING TODO] The Role
          </Title>
          {theRoleBlocks.map(({ label, text }, i) => (
            <Stack key={i} gap="xs">
              <Text
                size="sm"
                fw={700}
                c="dimmed"
                tt="uppercase"
                style={{ letterSpacing: '0.06em' }}
              >
                {label}
              </Text>
              <Text size="lg" lh={1.7}>
                {text}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
