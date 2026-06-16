import { Box, Container, Stack, Title, Text, Button } from '@mantine/core';

export function ContactSection() {
  return (
    <Box component="section" id="contact" py="5rem">
      <Container size="sm">
        <Stack align="center" gap="lg" style={{ textAlign: 'center' }}>
          <Title order={2}>
            Let&apos;s Make Something, Email me at dylanhoshujie@gmail.com
          </Title>
          <Text size="lg" c="dimmed">
            If something here caught you, I'd love to see what you've been making. Send a portfolio link and whatever feels relevant. <br/> My email is <b>dylanhoshujie@gmail.com</b>
          </Text>
          <Button
            component="a"
            href="mailto:dylanhoshujie@gmail.com"
            size="lg"
          >
            Get in Touch
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
