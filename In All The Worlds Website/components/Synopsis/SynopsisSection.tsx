import Image from 'next/image';
import { Box, Container, Stack, Grid, GridCol, Title, Text } from '@mantine/core';

type SynopsisRow = {
  imageLabel: string;
  imageSrc?: string;
  text: string;
  imageRight: boolean;
};

const rows: SynopsisRow[] = [
  {
    imageLabel: '[SYNOPSIS IMAGE 1 TODO]',
    imageSrc: '/synopsis_images/synopsis_1_img.jpg',
    text: 'In All the Worlds is a top-down action RPG. Four characters, pulled into a void between worlds, trying to get home. One more presence traveling with them: you, by name, in the first thirty seconds. The characters know you are there. They look to you.',
    imageRight: false,
  },
  {
    imageLabel: '[SYNOPSIS IMAGE 2 TODO]',
    imageSrc: '/synopsis_images/synopsis_2_img.jpg',
    text: 'The road home passes through four worlds, one for each party member. Each world has something broken in it. The party fixes it, and then the person it belongs to stays behind. The group gets smaller with every world. By the end it is only Dew and her scarf and you. When someone leaves, their abilities leave too. Moves you have been reaching for, gone. Their presence gone too.',
    imageRight: true,
  },
  {
    imageLabel: '[SYNOPSIS IMAGE 3 TODO]',
    imageSrc: '/synopsis_images/synopsis_3_img.png',
    text: 'Four worlds. A purple void between dimensions. A warm island city built around love and lanterns. A vast frozen tundra. A gleaming city sealed under the ocean. Each one briefed, none of them drawn. That is the scope of this. The characters who carry these worlds are in the next section.',
    imageRight: false,
  },
];

function PlaceholderImage({ label }: { label: string }) {
  return (
    <Box
      style={{
        aspectRatio: '3/2',
        backgroundColor: 'light-dark(#e0e0e0, #1e1e2e)',
        borderRadius: 'var(--mantine-radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'light-dark(#999, #555)',
        fontSize: 13,
        padding: '0.5rem',
        textAlign: 'center',
      }}
    >
      {label}
    </Box>
  );
}

export function SynopsisSection() {
  return (
    <Box component="section" id="synopsis" py="xl">
      <Container size="lg">
        <Stack gap="xl">
          <Title order={2} ta="center">
            
          </Title>
          {rows.map(({ imageLabel, imageSrc, text, imageRight }, i) => (
            <Grid key={i} align="center" gap="xl">
              <GridCol
                span={{ base: 12, sm: 6 }}
                order={{ base: 1, sm: imageRight ? 2 : 1 }}
              >
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={imageLabel}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ width: '100%', height: 'auto', borderRadius: 'var(--mantine-radius-md)', display: 'block' }}
                  />
                ) : (
                  <PlaceholderImage label={imageLabel} />
                )}
              </GridCol>
              <GridCol
                span={{ base: 12, sm: 6 }}
                order={{ base: 2, sm: imageRight ? 1 : 2 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Text size="lg" lh={1.7}>
                  {text}
                </Text>
              </GridCol>
            </Grid>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
