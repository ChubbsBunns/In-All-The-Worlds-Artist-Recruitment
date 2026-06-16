'use client';

import { useState } from 'react';
import { Modal, Stack, Text, Button } from '@mantine/core';

export function WelcomePopup() {
  const [opened, setOpened] = useState(true);

  return (
    <Modal
      opened={opened}
      onClose={() => {}}
      closeOnClickOutside={false}
      closeOnEscape={false}
      withCloseButton={false}
      title="Notice for Visiting Artists"
      centered
      size="md"
      ta="center"
      styles={{ title: { width: '100%', textAlign: 'center', fontWeight: 700 } }}
    >
      <Stack gap="md">
<Stack gap="md" ta="center">
  <Text>
    Welcome to In All The Worlds, so happy to have you here!
  </Text>

  <Text>
    A quick, honest note before you explore: (some of) the images on this page are
    AI-generated, and all of them are placeholders. They're here to convey the feeling of the
    worlds,{" "}<Text component="span" fw={900}>not</Text>{" "}to set the art style.
  </Text>

  <Text>
    The final game won't use AI art. The real visual identity will be made by
    a human artist, and that's exactly the person I'm hoping to find. The
    characters, the environments, the whole look. None of it is decided yet.
    That's yours to shape.
  </Text>

  <Text>
    What you see is a mood, not a mandate. 
  </Text>
  <Text>
    I hope the project excites you as
    much as it does me :)
  </Text>
</Stack>

<Button onClick={() => setOpened(false)} fullWidth mt="lg">
  Enter
</Button>
      </Stack>
    </Modal>
  );
}
