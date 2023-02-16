const productsContainer = document.querySelector(".container-produtos");

const produtos = [
  {
    nome: "Almofada Conforto Plus",
    valor: "R$ 60, 57",
    foto: "../../assets/images/almofada.jpg",
  },
  {
    nome: "Relógio Inteligente Smartwatch D13",
    valor: "R$ 115,70",
    foto: "../../assets/images/relogio.jpg",
  },
  {
    nome: "Máscara de Dormir com Fone de Ouvido Bluetooth - SLEEPER",
    valor: "R$ 92,90",
    foto: "../../assets/images/mascara.jpg",
  },
  {
    nome: "Fone de Ouvido Bluetooth - XT91 Lenovo BT 5.0 Original",
    valor: "R$ 255,90",
    foto: "../../assets/images/fone.jpg",
  },
  {
    nome: "Mini Umidificador de Ar Portátil",
    valor: "R$ 86,90",
    foto: "../../assets/images/umidificador.jpg",
  },
  {
    nome: "Mixer 3 em 1 Power",
    valor: "R$ 277,90",
    foto: "../../assets/images/mixer.jpg",
  },
  {
    nome: "Depilador a Laser - Skin Soft",
    valor: "R$ 399,99",
    foto: "../../assets/images/depilador.jpg",
  },
  {
    nome: "Drone Profissional com Câmera Dupla 4K HD",
    valor: "R$ 399,90",
    foto: "../../assets/images/drone.jpg",
  },
  {
    nome: "Cabo USB Mágico Reutilizável",
    valor: "R$ 79,90",
    foto: "../../assets/images/cabo.jpg",
  },
];

produtos.map((produto) => {
  const cardProduto = document.createElement("div");
  cardProduto.classList.add("card-produto");

  const image = document.createElement("img");
  image.src = produto.foto;

  const p = document.createElement("p");
  p.innerText = produto.nome;

  const span = document.createElement("span");
  span.innerText = produto.valor;

  const textContent = document.createElement("div");
  textContent.classList.add("text-content");

  textContent.appendChild(p);
  textContent.appendChild(span);

  cardProduto.appendChild(image);
  cardProduto.appendChild(textContent);
  productsContainer.appendChild(cardProduto);
});
