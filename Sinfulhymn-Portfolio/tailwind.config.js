const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

// Contour rust — the single accent hue carrying the whole site, evoking
// burnt-sienna topographic contour lines and trail-blaze orange.
const rust = {
  50: '#FDF3EC',
  100: '#FAE3D3',
  200: '#F3C4A4',
  300: '#EA9F70',
  400: '#DD7A46',
  500: '#C65A28',
  600: '#A8451C',
  700: '#7F3316',
  800: '#5E2611',
  900: '#451B0C',
  950: '#271006',
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
          ...rust,
          DEFAULT: rust[500],
        },

        // Light theme — warm stone/parchment
        'background-light': '#EDE6D6',
        whiteBackground: '#EDE6D6',
        background: '#EDE6D6',
        surface: '#F6F1E6',
        surfaceAlt: '#E2D9C4',

        primaryText: '#221D16',
        secondaryText: '#6E6353',
        fgTextLight: '#221D16',
        mutedLight: '#D9CFB8',

        // Dark theme — near-black
        purpleBackground: '#0B0A09',
        backgroundDark: '#0B0A09',
        bgDark: '#0B0A09',
        surfaceDark: '#14120F',
        surfaceAltDark: '#1D1A15',

        fgTextDark: '#EEE7D9',
        fgMutedDark: '#9C9284',

        borderDark: '#2B2820',
        borderDarkSoft: '#221F19',

        // Brand accent — one hue (rust), four values for default/hover x light/dark
        primaryAccent: rust[600],
        secondaryAccent: rust[700],
        secondaryAccentDark: rust[400],
        neonblush: rust[300],

        violet: {
          ...colors.violet,
          30: '#FBF8FF',
          950: '#241735',
          1000: '#170D24',
        },

        gray: colors.stone,
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
              backgroundColor: theme('colors.gray.900'),
              borderColor: theme('colors.gray.700'),
              borderWidth: '1px',
            },

            code: {
              color: theme('colors.primary.700'),
              backgroundColor: theme('colors.gray.100'),
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
              borderColor: theme('colors.gray.300'),
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
            '--tw-prose-code': theme('colors.gray.300'),
            '--tw-prose-pre-code': theme('colors.gray.200'),
            '--tw-prose-pre-bg': theme('colors.gray.900'),
            '--tw-prose-th-borders': theme('colors.gray.600'),
            '--tw-prose-td-borders': theme('colors.gray.700'),

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
              backgroundColor: theme('colors.gray.900'),
              borderColor: theme('colors.gray.700'),
              borderWidth: '1px',
            },

            code: {
              color: theme('colors.gray.300'),
              backgroundColor: theme('colors.surfaceAltDark'),
            },

            details: {
              backgroundColor: theme('colors.surfaceDark'),
              borderColor: theme('colors.borderDark'),
              borderWidth: '1px',
            },

            hr: {
              borderColor: theme('colors.borderDark'),
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