const sizes = {
  sm: {
    fontSize: 14,
  },
  md: {
    fontSize: 28,
  },
  lg: {
    fontSize: 42,
  },
  xl: {
    fontSize: 56,
  },
}

const weights = {
  normal: {
    fontWeight: "400",
  },
  bold: {
    fontWeight: "500",
  },
}

const fonts = {
  mono: {
    fontFamily: 'Hack',
  },
  sans: {
    fontFamily: 'nimbus-sans',
  },
  serif: {
    fontFamily: 'Times',
  },
}

export const text = {
  headline: {
    ...sizes.xl,
    ...weights.normal,
    ...fonts.sans,
    textTransform: 'uppercase',
  },
  title: {
    ...sizes.md,
    ...weights.normal,
    ...fonts.sans,
    textTransform: 'uppercase',
  },
  largeTitle: {
    ...sizes.lg,
    ...weights.normal,
    ...fonts.sans,
    textTransform: 'uppercase',
  },
  body: {
    ...sizes.sm,
    ...weights.normal,
    ...fonts.sans,
  },
  bold: {
    ...sizes.sm,
    ...weights.bold,
    ...fonts.sans,
  },
  item: {
    ...sizes.sm,
    ...weights.normal,
    ...fonts.sans,
    textTransform: 'uppercase',
  },
}