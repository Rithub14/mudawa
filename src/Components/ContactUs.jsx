import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
  Anchor,
} from "@mantine/core";
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react";
// import { ContactIconsList } from "../ContactIcons/ContactIcons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    width: "1300px",
    padding: `calc(${theme.spacing.xl} * 2.5)`,
    paddingLeft: "130px",

    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.black,
    lineHeight: 1,
  },

  description: {
    color: theme.black,
    maxWidth: rem(300),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.black,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

// const social = [BrandTwitter, BrandYoutube, BrandInstagram];

export function ContactUs() {
  const { classes } = useStyles();

  //   const icons = social.map((Icon, index) => (
  //     <ActionIcon
  //       key={index}
  //       size={28}
  //       className={classes.social}
  //       variant="transparent"
  //     >
  //       <Icon size="1.4rem" stroke={1.5} />
  //     </ActionIcon>
  //   ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          {/* <ContactIconsList variant="white" /> */}

          <Group mt="xl">
            <Anchor href="">
              <BrandTwitter size={28} strokeWidth={2} color={"black"} />
            </Anchor>
            <Anchor href="">
              <BrandInstagram ize={28} strokeWidth={2} color={"black"} />
            </Anchor>
            <Anchor href="">
              <BrandYoutube size={28} strokeWidth={2} color={"black"} />
            </Anchor>
          </Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            <Button color="lime" variant="filled">
              Send message
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
export default ContactUs;
