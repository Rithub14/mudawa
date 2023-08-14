import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Image,
} from "@mantine/core";

import { Link } from "react-router-dom";

import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  Box: {
    backgroundColor: "transparent",
    width: "100%",
    borderBottom: "0px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "light" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      textDecoration: "none",
    }),
  },
  drawerlink: {
    display: "flex",
    height: "50px",

    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.black : theme.black,

    ...theme.fn.hover({
      textDecoration: "none",
    }),
  },
  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <div>
      <Header height={60} width={60} px="md" className={classes.Box}>
        <Group position="apart" spacing={0}>
          <Image maw={240} radius="md" src="./mudawalogo.png" />
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            
            <Anchor  className={classes.link}>
            <Link className="nav-link active fs-6 fw-light"  to="/">HOME</Link>
              
            </Anchor>
            <Anchor  className={classes.link}>
            <Link className="nav-link active fs-6 fw-light"  to="/about">About Us</Link>
              
            </Anchor>
            <Anchor className={classes.link}>
            <Link className="nav-link active fs-6 fw-light"  to="/gethelp">Get Help</Link>
              
            </Anchor>
            <Anchor  className={classes.link}>
            <Link className="nav-link active fs-6 fw-light"  to="/offerhelp">Offer Help</Link>
            </Anchor>
            <Anchor href="#" className={classes.link}>
            <Link className="nav-link active fs-6 fw-light"  to="/contact">Contact Us</Link>
            </Anchor>
          </Group>

          <Group className={classes.hiddenMobile}>
<<<<<<< HEAD
            <Link to='login' ><Button color="lime" variant="filled">
              Login
            </Button>
            </Link>
            <Link to='signup'>
            <Button color="lime" variant="filled">
              Sign Up
            </Button>
            </Link>
=======
            <LInk><Button color="lime" variant="filled">
              Login
            </Button>
            </LInk>
            <Button color="lime" variant="filled">
              Sign Up
            </Button>
>>>>>>> e688a57dd8934500f217f4804685e52e83fb012b
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "light" ? "light" : "gray.1"}
          />

          <Anchor href="#" className={classes.drawerlink}>
            Home
          </Anchor>
          <UnstyledButton className={classes.drawerlink}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
            </Center>
          </UnstyledButton>

          <Anchor href="#" className={classes.drawerlink}>
            Learn
          </Anchor>
          <Anchor href="#" className={classes.drawerlink}>
            Academy
          </Anchor>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </div>
  );
}
export default Navbar;
