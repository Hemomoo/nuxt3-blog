module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#439A97",
          "secondary": "#CBEDD5",
          "accent": "#97DECE", // 加重
          "neutral": "#62B6B7",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      
    ],
  },
  theme:{
    colors:{
      "red":"#FF6262",
      "white":"#FFFFFF"
    }
  },
  variants: {
   
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp'),
  ],
  //...
}  