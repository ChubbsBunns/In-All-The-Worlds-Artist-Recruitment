import { Box, Container, Title, SimpleGrid, Text } from '@mantine/core';
import { characters } from '@/data/characters';
import { CharacterCard } from './CharacterCard';

export function CharactersSection() {
  return (
    <Box component="section" id="characters" py="5rem">
      <Container size="xl">
        <Title order={2} ta="center" mb="xl">
          The Characters
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }} spacing="lg">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </SimpleGrid>

        <Box ta="center" pt="6rem" pb="4rem">
          <Text
            fz={{ base: 'xl', sm: '1.5rem' }}
            fw={400}
            lh={1.4}
            maw={600}
            mx="auto"
            mb="md"
          >
            There is one more character. No design brief. No fixed appearance. That one is the player themselves.
          </Text>
          <Text
            fz="sm"
            c="dimmed"
            lh={1.6}
            maw={480}
            mx="auto"
          >
            The player is a real presence in this world. Every character in the party knows you are there.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
