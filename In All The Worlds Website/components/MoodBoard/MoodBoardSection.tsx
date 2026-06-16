import { Box, Container, Title, SimpleGrid } from '@mantine/core';

const tiles = [
  '[MOOD IMAGE: dense forest TODO]',
  '[MOOD IMAGE: ruined architecture TODO]',
  '[MOOD IMAGE: warm lantern light TODO]',
  '[MOOD IMAGE: overcast sky TODO]',
  '[MOOD IMAGE: character silhouette TODO]',
  '[MOOD IMAGE: ancient ruins TODO]',
];

export function MoodBoardSection() {
  return (
    <Box component="section" id="moodboard" py="5rem">
      <Container size="lg">
        <Title order={2} ta="center" mb="xl">
          [MOODBOARD HEADING TODO] The World
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
          {tiles.map((label, i) => (
            <Box
              key={i}
              style={{
                aspectRatio: '4/3',
                backgroundColor: 'light-dark(#e0e0e0, #1e1e2e)',
                borderRadius: 'var(--mantine-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'light-dark(#999, #555)',
                fontSize: 13,
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              {label}
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
