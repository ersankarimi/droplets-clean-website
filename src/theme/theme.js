import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    // custom colors
    colors: {
        darkColors: {
            black1: 'rgba(12,22,35,0.6)',
            black2: 'rgba(12,22,35,0.8)',
            black3: 'rgba(12,22,35,1)',
        },
        lightColors: {
            white1: '#ffffff',
            white2: '#f8f8f8',
            blue1: {
                50: '#e4f2ff',
                100: '#bcd4f7',
                200: '#93b7ec',
                300: '#699ae3',
                400: '#407dda',
                500: '#2764c0',
                600: '#1c4e96',
                700: '#12376c',
                800: '#062143',
                900: '#000b1c',
            },
            blue2: '#4475F2',
        },
        linierColors: {
            linier1:
                'linear-gradient(90deg, rgba(223,233,243,1) 0%, rgba(255,255,255,1) 100%);',
            linier2:
                'background: linear-gradient(90deg, rgba(242,245,249,1) 0%, rgba(255,255,255,1) 100%);',
        },
    },
    // custom font
    fonts: {
        openSans: "'Open Sans', sans-serif",
        poppins: "'Poppins', sans-serif;",
    },
    fontSizes: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        md: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 22px
        '3xl': '1.875rem', // 30px
        '3.5xl': '2rem', // 32px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '5.5xl': '3.5rem',
        '6xl': '3.75rem', // 60px
    },
})

const customTheme = extendTheme({ theme })

export default customTheme
