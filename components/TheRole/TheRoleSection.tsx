import Image from 'next/image';
import { Box, Container, Stack, Title, Text, Grid, GridCol } from '@mantine/core';
import { theRoleBlocks, RoleSubItem } from '@/data/characters';

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

function SubItemRow({ item, imageRight }: { item: RoleSubItem; imageRight: boolean }) {
  return (
    <Stack gap="xs">
      <Text
        size="sm"
        fw={700}
        c="dimmed"
        tt="uppercase"
        style={{ letterSpacing: '0.06em' }}
      >
        {item.label}
      </Text>
      <Grid align="center" gap="xl">
        <GridCol
          span={{ base: 12, sm: 6 }}
          order={{ base: 1, sm: imageRight ? 2 : 1 }}
        >
          {item.imageSrc ? (
            <Image
              src={item.imageSrc}
              alt={item.imageLabel}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--mantine-radius-md)', display: 'block' }}
            />
          ) : (
            <PlaceholderImage label={item.imageLabel} />
          )}
        </GridCol>
        <GridCol
          span={{ base: 12, sm: 6 }}
          order={{ base: 2, sm: imageRight ? 1 : 2 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Text size="lg" lh={1.7}>
            {item.text}
          </Text>
        </GridCol>
      </Grid>
    </Stack>
  );
}

export function TheRoleSection() {
  return (
    <Box component="section" id="the-role" py="5rem">
      <Container size="lg">
        <Stack gap="xl">
          <Title order={2} ta="center">
            The Role
          </Title>
          {theRoleBlocks.map(({ label, text, subItems }, i) => (
            <Stack key={i} gap="xl">
              {!subItems && (
                <>
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
                </>
              )}
              {subItems && (
                <Stack gap="3rem">
                  <Stack gap="sm">
                    <Text
                      size="sm"
                      fw={700}
                      c="dimmed"
                      tt="uppercase"
                      style={{ letterSpacing: '0.06em' }}
                    >
                      {label}
                    </Text>
                    {text && (
                      <Text size="lg" lh={1.7} maw={700}>
                        {text}
                      </Text>
                    )}
                  </Stack>
                  {subItems.map((item, j) => (
                    <SubItemRow key={j} item={item} imageRight={true} />
                  ))}
                </Stack>
              )}
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
