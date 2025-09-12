const axios = require("axios");

const BASE_URL = "https://aigurulab.tech";
const generateImage = async () => {
  const result = await axios.post(
    BASE_URL + "/api/generate-image",
    {
      width: 1024,
      height: 1024,
      input:
        "Create a modern, flat-style 2D digital illustration representing React. Include UI/UX elements such as mockup screens, text blocks, icons, buttons, and creative workspace tools. Add symbolic elements related to React, like sticky notes, design components, virtual DOM representations, and component tree structures. Use a vibrant color palette (blues, purples, oranges) with a clean, professional look. The illustration should feel creative, tech-savvy, and educational, ideal for visualizing concepts in React.",
      model: "flux", //'flux'
      aspectRatio: "16:9", //Applicable to Flux model only
    },
    {
      headers: {
        "x-api-key": "18855f9a-c874-4d46-9956-78abd7b5ae8e", // Your API Key
        "Content-Type": "application/json", // Content Type
      },
    }
  );
  console.log(result.data.image); //Output Result: Base 64 Image
};

generateImage();
