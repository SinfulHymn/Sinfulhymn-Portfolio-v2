const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const acidGreen = {
  50: '#FAFFEE',
  100: '#F1FFD1',
  200: '#E2FFA3',
  300: '#CFFF70',
  400: '#A6FF4D',
  500: '#8DF22F',
  600: '#70D51D',
  700: '#55A918',
  800: '#447F1D',
  900: '#37671D',
  950: '#193408',
}

const pastelLime = {
  50: '#FDFFF6',
  100: '#F7FFE1',
  200: '#EDFFC2',
  300: '#DFFF9B',
  400: '#D2FF7A',
  500: '#BAF35D',
  600: '#98D83D',
  700: '#74AA2D',
  800: '#5B8329',
  900: '#4B6A27',
  950: '#263A10',
}

const lavender = {
  50: '#FCF8FF',
  100: '#F6EAFF',
  200: '#ECD3FF',
  300: '#DFB5FF',
  400: '#CE91FF',
  500: '#B96AF1',
  600: '#9B47D2',
  700: '#7D35A9',
  800: '#662F87',
  900: '#54286E',
  950: '#341343',
}

const blush = {
  50: '#FFF5F8',
  100: '#FFE7EF',
  200: '#FFCDDD',
  300: '#FFA9C4',
  400: '#FF82A8',
  500: '#F45D8D',
  600: '#D93B70',
  700: '#B72A5A',
  800: '#95264D',
  900: '#7D2545',
  950: '#470F23',
}

const storm = {
  50: '#F3F9FC',
  100: '#E3F1F7',
  200: '#C6E2EE',
  300: '#9DCADE',
  400: '#76B3D0',
  500: '#5297BB',
  600: '#3E789A',
  700: '#355F79',
  800: '#304F63',
  900: '#2C4352',
  950: '#182A36',
}

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },

  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    './layouts/**/*.{js,jsx,ts,tsx,md,mdx}',
    './lib/**/*.{js,jsx,ts,tsx}',
    './data/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },

      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },

      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],

        mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono],

        display: ['var(--font-share-tech-mono)', ...defaultTheme.fontFamily.mono],
      },

      colors: {
        primary: {
          ...acidGreen,
          DEFAULT: acidGreen[400],
        },

        lime: {
          ...pastelLime,
          DEFAULT: pastelLime[400],
        },

        lavender: {
          ...lavender,
          DEFAULT: lavender[400],
        },

        blush: {
          ...blush,
          DEFAULT: blush[400],
        },

        storm: {
          ...storm,
          DEFAULT: storm[500],
        },

        // Light theme
        'background-light': '#F7F9F5',
        whiteBackground: '#FFFFFF',
        background: '#F7F9F5',
        surface: '#FFFFFF',
        surfaceAlt: '#EEF3EC',

        primaryText: '#162018',
        secondaryText: '#667168',
        fgTextLight: '#1A211C',
        mutedLight: '#DCE5DB',

        // Dark theme
        purpleBackground: '#110F19',
        backgroundDark: '#0B0F14',
        bgDark: '#111A21',
        surfaceDark: '#111A21',
        surfaceAltDark: '#18242D',

        fgTextDark: '#E5EEE8',
        fgMutedDark: '#91A09A',

        borderDark: '#26363E',
        borderDarkSoft: '#1C2930',

        // Brand accents
        greenAccent: acidGreen[400],
        greenAccentLines: pastelLime[400],

        primaryAccent: '#FF2E9A',
        secondaryAccent: lavender[500],
        secondaryAccentDark: lavender[300],

        neonblush: blush[400],

        violet: {
          ...colors.violet,
          30: '#FBF8FF',
          950: '#241735',
          1000: '#170D24',
        },

        gray: colors.neutral,
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),

            a: {
              color: theme('colors.primary.700'),
              textDecorationColor: theme('colors.primary.300'),
              transitionProperty: 'color, text-decoration-color',
              transitionDuration: '150ms',

              '&:hover': {
                color: `${theme('colors.primary.800')} !important`,
                textDecorationColor: theme('colors.primary.500'),
              },

              code: {
                color: theme('colors.primary.700'),
              },
            },

            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },

            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },

            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },

            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },

            pre: {
              backgroundColor: theme('colors.storm.950'),
              borderColor: theme('colors.storm.800'),
              borderWidth: '1px',
            },

            code: {
              color: theme('colors.lavender.700'),
              backgroundColor: theme('colors.lavender.50'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },

            'code::before': {
              content: 'none',
            },

            'code::after': {
              content: 'none',
            },

            details: {
              backgroundColor: theme('colors.surfaceAlt'),
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              borderRadius: '0.5rem',
            },

            hr: {
              borderColor: theme('colors.lime.300'),
            },

            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.primary.700'),
            },

            'ul li::marker': {
              color: theme('colors.primary.500'),
            },

            strong: {
              color: theme('colors.gray.900'),
            },

            blockquote: {
              color: theme('colors.gray.800'),
              borderLeftColor: theme('colors.primary.300'),
            },
          },
        },

        dark: {
          css: {
            '--tw-prose-body': theme('colors.gray.300'),
            '--tw-prose-headings': theme('colors.gray.100'),
            '--tw-prose-lead': theme('colors.gray.300'),
            '--tw-prose-links': theme('colors.primary.300'),
            '--tw-prose-bold': theme('colors.gray.100'),
            '--tw-prose-counters': theme('colors.primary.400'),
            '--tw-prose-bullets': theme('colors.primary.400'),
            '--tw-prose-hr': theme('colors.borderDark'),
            '--tw-prose-quotes': theme('colors.gray.100'),
            '--tw-prose-quote-borders': theme('colors.primary.500'),
            '--tw-prose-captions': theme('colors.gray.400'),
            '--tw-prose-code': theme('colors.lavender.300'),
            '--tw-prose-pre-code': theme('colors.gray.200'),
            '--tw-prose-pre-bg': theme('colors.storm.950'),
            '--tw-prose-th-borders': theme('colors.storm.700'),
            '--tw-prose-td-borders': theme('colors.storm.800'),

            color: theme('colors.gray.300'),

            a: {
              color: theme('colors.primary.300'),
              textDecorationColor: theme('colors.primary.700'),
              transitionProperty: 'color, text-decoration-color',
              transitionDuration: '150ms',

              '&:hover': {
                color: `${theme('colors.primary.200')} !important`,
                textDecorationColor: theme('colors.primary.400'),
              },

              code: {
                color: theme('colors.primary.300'),
              },
            },

            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },

            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },

            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },

            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },

            pre: {
              backgroundColor: theme('colors.storm.950'),
              borderColor: theme('colors.storm.800'),
              borderWidth: '1px',
            },

            code: {
              color: theme('colors.lavender.300'),
              backgroundColor: theme('colors.surfaceAltDark'),
            },

            details: {
              backgroundColor: theme('colors.surfaceDark'),
              borderColor: theme('colors.borderDark'),
              borderWidth: '1px',
            },

            hr: {
              borderColor: theme('colors.greenAccentLines'),
            },

            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.primary.300'),
            },

            'ul li::marker': {
              color: theme('colors.primary.400'),
            },

            strong: {
              color: theme('colors.gray.100'),
            },

            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
            },

            tbody: {
              tr: {
                borderBottomColor: theme('colors.borderDark'),
              },
            },

            blockquote: {
              color: theme('colors.gray.200'),
              borderLeftColor: theme('colors.primary.500'),
            },
          },
        },
      }),
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}