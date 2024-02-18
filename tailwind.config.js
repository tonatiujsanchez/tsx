/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        javascript: {
          600: '#f7df1e'
        },
        typescript: {
          600: '#2F74C0'
        },
        react: {
          600: '#0FD2F4'
        },
        next: {
          600: '#000000'
        },
        node: {
          600: '#026E00'
        },
        sql: {
          600: '#015E88'
        },
        mongo: {
          600: '#07AC4F'
        },
        github: {
          600: '#1C1F24'
        },
        git: {
          600: '#F05030'
        },
        sass: {
          600: '#CD669A'
        },
        tailwind: {
          600: '#38BDF8'
        },
        figma: {
          600: '#F34E1C'
        },
        emotion: {
          600: '#D26AC2'
        },
        redux: {
          600: '#764ABC'
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
