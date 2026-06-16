import { Box, Container, Title, SimpleGrid } from '@mantine/core';
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
      </Container>
    </Box>
  );
}
