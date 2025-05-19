export const products = [
  {
    id: 1,
    pheading: "Latest Drops",
    pname: "Audio Arrogance Aural Elite",
    discount: 0,
    price: 249,
    pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&w=828&q=50",
    description: "Immerse in audio with the Audio Arrogance AuralElite Bluetooth headphones. Enjoy Active Noise Cancellation (ANC) for immersive experience. Indulge in flawless sound.",
    options: {
      color: ["Black", "Silver"],
      noise_canceling: ["ANC", "None"]
    },
    info: {},
    route: "bluetooth-headphones",
    collection: "latest-drops"
  },
  {
    id: 2,
    pheading: "Latest Drops",
    pname: "Pinnacle Posh Pack",
    discount: 0,
    price: 405,
    pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&w=828&q=50",
    description: "Elevate your travel experience with the luxurious Pinnacle Posh Pack. Crafted from genuine leather, this stylish backpack is tailor-made for modern adventurers. It's handmade, durable, and exudes a touch of sophistication. Upgrade your travel game today!",
    options: {
      color: ["Black", "White"],
    },
    info: {
      material: "Leather"
    },
    route: "leather-backpack",
    collection: "latest-drops"
  },
  {
    id: 3,
    pheading: "Latest Drops",
    pname: "Vinyl Virtuoso Opulenza",
    discount: 0,
    price: 899,
    pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&w=828&q=50",
    description: "Immerse in authentic sound and timeless charm with the Vinyl Virtuoso Opulenza. Elevate your listening experience with this vintage-inspired Analog Turntable. Rediscover music's essence now.",
    options: {
      Plug: ["EU", "US", "UK"]
    },
    info: {
      material: "Aluminium",
      weight: "80 g",
      Country_of_origin: "DK",
      Dimensions: "33L x 65W x 16H"
    },
    route: "analog-turntable",
    collection: "latest-drops"

  },

  {
    id: 4,
    pheading: "Weekly Picks",
    pname: "Nebula Noir Hoodie",
    discount: 0,
    price: 199,
    pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&w=828&q=50",
    description: "Immerse yourself in cosmic fashion. Unveil the enigmatic allure of the Nebula Noir Hoodie. Embrace its cozy and durable charm. Elevate your style to celestial heights. Get yours today!",
    options: {
      size: ["S", "M", "L", "XL"],
    },
    info: {},
    route: "nebula-noir-hoodie",
    collection: "weekly-picks"
  },
  {
    id: 5,
    pheading: "Weekly Picks",
    pname: "Exorbita Elegence Elite",
    discount: 0,
    price: 1199,
    pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&w=828&q=50",
    description: "Introducing the Exorbita Elegance Elite watch, now available with the option of kinetic movement technology. Immerse yourself in timeless elegance and never worry about battery changes again. Discover the perfect blend of style and innovation.",
    options: {
      Wristband: ["Leather", "Aluminium"],
      Power: ["Battery", "Kinetic"],
    },
    info: {},
    route: "exorbita-elegence-elite",
    collection: "weekly-picks"
  },
  {
    id: 6,
    pheading: "Weekly Picks",
    pname: "Metallic Majesty Illuminator",
    discount: 0,
    price: 399,
    pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&w=828&q=75",
    description: "Exquisite steel design lamp. Sleek construction exudes elegance and modernity. Illuminate with style and sophistication. Elevate your decor effortlessly. Perfect for warm and inviting ambiance. Unleash your creativity. Experience steel in a new light.",
    options: {
      color: ["Black", "White"]
    },
    info: {
      material: "Steel"
    },
    route: "metallic-majesty-illuminator",
    collection: "weekly-picks"

  },
  {
    id: 7,
    pheading: "Sale",
    pname: "BlendMaster Elite Fusionator",
    discount: 33,
    price: 299,
    pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&w=828&q=50",
    description: "Because ordinary blenders are for the common folk. With the BlendMaster, you can effortlessly mix your pretentious smoothies and soups while feeling like a culinary genius. It's not just a blender; it's a status symbol in the world of haute cuisine.",
    options: {
      Plug: ["EU", "US", "UK"]
    },
    info: {},
    route: "blend-master-elite-fusionator",
    collection: "sale"
  },
  {
    id: 8,
    pheading: "Sale",
    pname: "Corporate Commando Throne",
    discount: 8,
    price: 600,
    pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&w=828&q=50",
    description: "Introducing the Exorbita Elegance Elite watch, now available with the option of kinetic movement technology. Immerse yourself in timeless elegance and never worry about battery changes again. Discover the perfect blend of style and innovation.",
    options: {
      Adjustability: ["Height", "Height + Tilt"],
    },
    info: {},
    route: "corporate-commando-throne",
    collection: "sale"
  },
  {
    id: 9,
    pheading: "Sale",
    pname: "Decibel Dominator Deluxe",
    discount: 20,
    price: 249,
    pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&w=828&q=75",
    description: "Introducing the mighty Decibel Dominator Deluxe clock radio alarm! Experience its seamless Bluetooth connectivity and crystal-clear DAB+ radio. Rise and shine in style!",
    options: {
      color: ["Black", "White", "Yellow"],
    },
    info: {},
    route: "decibel-dominator-deluxe",
    collection: "sale"

  },


];
