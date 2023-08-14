import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
  rem,
} from "@mantine/core";
import Navbar from "./Navbar";

import {Link} from 'react-router-dom'
const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    // paddingTop: rem(180),
    height: "500px",
    paddingBottom: rem(130),
    backgroundImage:
      "url(https://www.gatesfoundation.org/-/media/gfo/5ideas_articles/articles/20230717-womens-health-economic-power/hero_women-deliver_ga12229068_ha601294_07172023_1600x1000.jpg?w=800&hash=31E943CA7D9A9AECE8C7A99EA53CBCB7)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingTop: "170px",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xl,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "center",
    },
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "center",
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    height: rem(42),
    width: "150px",
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.green,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export function Hero() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Navbar />
        <Container size={870}>
          <Title className={classes.title}>
            “The believer’s shade on the Day of Resurrection will be his
            charity.”
          </Title>
        </Container>
        <Container size={640}>
          <Text size="lg" className={classes.description}>
            It's about the origins of the foundation and the values that drive
            our work.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Link to='/offerhelp' >  
          <Button
            className={classes.control}
            color="lime"
            variant="outline"
            size="lg"
          >
            Donate
          </Button>
          </Link>
          {/* <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            Live demo
          </Button> */}
        </div>
      </div>
    </div>
  );
}
export default Hero;
