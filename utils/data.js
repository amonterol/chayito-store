//import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Adrian",
      email: "admin@test.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Alba",
      email: "user@test.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Free Shirt",
      slug: "free-shirt",
      category: "Shirts",
      image: "/images/shirtBlancaMangaLarga.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Shirts",
      image: "/images/shirtCuadrosMangaLarga.jpg",
      price: 80,
      brand: "Adidas",
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Slim Shirt",
      slug: "slim-shirt",
      category: "Shirts",
      image: "/images/shirtRosadaMangaLarga.jpg",
      price: 90,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Golf Pants",
      slug: "golf-pants",
      category: "Pants",
      image: "/images/pantsHombreBlanco.jpg",
      price: 90,
      brand: "Oliver",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      name: "Fit Pants",
      slug: "fit-pants",
      category: "Pants",
      image: "/images/pantsHombreNegro.jpg",
      price: 95,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      name: "Classic Pants",
      slug: "classic-pants",
      category: "Pants",
      image: "/images/pantalon2.png",
      price: 75,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      name: "Vestido Casual Amarillo",
      slug: "vestido-casual-amarillo",
      category: "Vestido",
      image: "/images/VestidoCasualAmarillo1.png",
      price: 75,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Vestido casual amarillo para toda ocasion",
    },
    {
      name: "Vestido Casual Verde",
      slug: "vestido-casual-verde",
      category: "Vestido",
      image: "/images/VestidoLinoVerde1.png",
      price: 75,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Vestido casual verde para toda ocasion",
    },
    {
      name: "Vestido Casual Azul",
      slug: "vestido-casual-azul",
      category: "Vestido",
      image: "/images/VestidoCasualAzul1.png",
      price: 75,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Vestido casual azul para toda ocasion",
    },
    {
      name: "Vestido Casual Negro",
      slug: "vestido-casual-negro",
      category: "Vestido",
      image: "/images/VestidoCasualNegro1.png",
      price: 75,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Vestido casual negro para toda ocasion",
    },
    {
      name: "Vestido Playa Amarillo",
      slug: "vestido-playa-amarillo",
      category: "Vestido",
      image: "/images/VestidoPlayaAmarillo1.png",
      price: 75,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Vestido playa amarillo para toda ocasion",
    },
    {
      name: "Vestido Playa Rosado",
      slug: "vestido-playa-rosado",
      category: "Vestido",
      image: "/images/VestidoPlayaRosado1.png",
      price: 75,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Vestido playa rosado para toda ocasion",
    },
    {
      name: "Vestido Bohemio Blue Floral",
      slug: "vestido-bohemio-blue-floral",
      category: "Vestido",
      image: "/images/VestidoBohemioBlueFloral1.png",
      price: 75,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Vestido playa rosado para toda ocasion",
    },
    {
      name: "Vestido Bohemio Blanco",
      slug: "vestido-bohemio-blanco",
      category: "Vestido",
      image: "/images/VestidoBohemioBlanco1.png",
      price: 75,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Vestido playa rosado para toda ocasion",
    },
    {
      name: "Vestido Merry Azul",
      slug: "vestido-merry-azul",
      category: "Vestido",
      image: "/images/VestidoMerryAzul1.png",
      price: 75,
      brand: "Merry",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Vestido casual merry azul para toda ocasion",
    },
    {
      name: "Vestido Midi Rojo",
      slug: "vestido-midi-rojo",
      category: "Vestido",
      image: "/images/VestidoMidiRojo1.png",
      price: 75,
      brand: "Midi",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Vestido casual midi rojo para toda ocasion",
    },
    {
      name: "Vestido Feynan Negro",
      slug: "vestido-feynan-negro",
      category: "Vestido",
      image: "/images/VestidoFeynanNegro1.png",
      price: 75,
      brand: "Feynan",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Vestido casual feynan negro para toda ocasion",
    },
  ],
};
export default data;
