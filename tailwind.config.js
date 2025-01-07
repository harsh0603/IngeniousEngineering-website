/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
            fontSize: {
                'subheading': '42px',
                'heading': '51px',
                'text': '18.1px',
              },
    		colors: {
                blacklala:"#1a1a1a",
                blueish:"#048cd6"
            }
    	}
    },
    plugins: [require("tailwindcss-animate")],
  };
