import { Box, Container, Stack, Title, Text, Button } from '@mantine/core';

export function ContactSection() {
  return (
    <Box component="section" id="contact" py="5rem">
      <Container size="sm">
        <Stack align="center" gap="lg" style={{ textAlign: 'center' }}>
          <Title order={2}>
            Let&apos;s Make Something
          </Title>
          <Text size="lg" c="dimmed">
            If this world feels like yours to draw, reach out. A link to your work and a few words about what you saw here is all it takes.
          </Text>
          <Button
            component="a"
            href="mailto:troskproductions@gmail.com"
            size="lg"
          >
            Get in Touch
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
