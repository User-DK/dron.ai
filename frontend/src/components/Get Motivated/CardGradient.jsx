import { Paper, Text, ThemeIcon, rem } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";
import classes from "./CardGradient.module.css";

export function CardGradient({ title, text, author }) {
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: "pink", to: "orange" }}
      >
        <IconQuote style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
      </ThemeIcon>
      <Text size="xl" fw={500} mt="md">
        Quote
      </Text>
      <Text size="sm" mt="sm" c="dimmed">
        {text}
      </Text>
      <Text size="xs" mt="md" c="dimmed">
        {author}
      </Text>
    </Paper>
  );
}
