import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_common/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 1s ease-in-out',
        slideOut: 'slideOut 1s ease-in-out',
        rotateAround1: 'rotateAround1 10s linear infinite',
        rotateAround2: 'rotateAround2 10s linear infinite',
        rotateAround3: 'rotateAround3 10s linear infinite',
        rotateAround4: 'rotateAround4 10s linear infinite',
        
      },
      screens: {
        'xs': '480px',  // Custom extra small screen
        'sm': '640px',  // Small screen
        'md': '768px',  // Medium screen
        'xmd':'870px',
        'lg': '1024px', // Large screen
        'xlg':'1160px',
        'xl': '1280px', // Extra large screen
        '2xl': '1536px', // 2x extra large screen
        '3xl': '1600px', // Custom 3x extra large screen
        '4xl': '1920px', // Custom 4x extra large screen
        '5xl': '2560px', // Custom 5x extra large screen
        'print': {'raw': 'print'}, // Print
        'landscape': {'raw': '(orientation: landscape)'}, // Landscape orientation
        'portrait': {'raw': '(orientation: portrait)'}, // Portrait orientation
        // Add more custom breakpoints as needed
      },
      fontSize: {
        'xxl': '1.75rem', // Custom font size example
        'xl':'1rem'
      },

      spacing: {
        '5': '1.25rem', // Custom padding example
         '42': '42px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add 'Inter' as a custom font family
        sans: ['Inter', 'sans-serif'], // Override default sans-serif with 'Inter'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        background:{
           500:'#fcfcfd',
        },
        SecondBg:{
          500:'#12b76a'
        },
        bgBorder:{
        500:'#f2f4f7'
        },

        gray: {
          100: '#F2F4F7',
          200: '#EAECF0',
          900: '#101828',
        },
        headingColor: {
          500: '#1d2939',
          400:'#b692f6'
        },
        textColor: {
          500: '#475467',
           
          
        },
        searchTextColor:{
          500:'#98a2b3'
        },
        smallHeading:{
          500:'#344054',
          600:'#363848',
          400:'#636363'
        },
        inputFieldColor:{
          500:'#d0d5dd',   

        },
        clickableLabelColor:{
          500:'#6941c6'
        },
        buttonColor:{
          500:'#7f56d9',
        
        },
        buttonDelete:{
          500:'#D92D20',
          600:'#B42318'
        },

        buttonHover:{
            500:'#6941c6',
            400:'#53389e'
        },
        onClickButtonEffect:{
              500:'#7f56d9'
        },
        disabledButton:{
            500:'#e9d7fe'
        },
        navbarBgColor:{
        500:'#6941c6'
        },
        labelBg:{
          500:'#f9f5ff'
        },
        containerbgColor: {
          500: '#FCFAFF'
        },
        overlaybg: {
          500: '#F9FAFB'
        },
        footerMsgColor:{
          500:"#667085"
        },
        successBadge:{
            400:"#A6F4C5",
            500:"#027A48"
        },
        warningBadge:{
          400:"#FEDF89",
          500:"#B54708"
        },
        purpleBadge:{
          400:"#E9D7FE",
          500:"#6941C6"
        }

      },
    },
  },
  plugins: [],
};

export default config;
