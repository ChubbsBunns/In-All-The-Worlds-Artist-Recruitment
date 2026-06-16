import { Box, Container, Stack, Title, Text, Button } from '@mantine/core';

export function ContactSection() {
  return (
    <Box component="section" id="contact" py="5rem">
      <Container size="sm">
        <Stack align="center" gap="lg" style={{ textAlign: 'center' }}>
          <Title order={2}>
            [CONTACT HEADING TODO] Let&apos;s Make Something
          </Title>
          <Text size="lg" c="dimmed">
            [CONTACT SUBTEXT TODO] Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. If this world resonates with you, get in touch.
          </Text>
          <Button
            component="a"
            href="mailto:troskproductions@gmail.com"
            size="lg"
          >
            [CONTACT BUTTON TODO] Get in Touch
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
