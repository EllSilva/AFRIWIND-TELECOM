import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
      autoplayTimer: null,
      autoplayInterval: 5000,
 
      currentSlideIndex: 0,
      slides: [
        {
          bgImage: "./assets/images/slider1.jpg",
          cardTitle: "Sempre ",
          cardHighlight: "Online",
          cardDescription:
            "A internet à medida da sua residência<br>ou empresa",
          linkAdira: "#",
          linkPlanos: "#",
          mainTitlePrefix: "POR TODO",
          mainTitleHighlight: "LADO",
          subtitle: "Não importa aonde esteja, Internet ? Só aqui",
          linkTambemQuero: "#",
        },
        {
          bgImage: "./assets/images/slider2.jpg",
          cardTitle: "Velocidade  ",
          cardHighlight: "Certa",
          cardDescription:
            "Conexão dedicada e máxima estabilidade<br>para os seus negócios",
          linkAdira: "#",
          linkPlanos: "#",
          mainTitlePrefix: "ULTRA",
          mainTitleHighlight: "VELOZ",
          subtitle: "A melhor fibra óptica  para impulsionar a sua empresa",
          linkTambemQuero: "#",
        },
        {
          bgImage: "./assets/images/slider3.jpg",
          cardTitle: "Conectividade ",
          cardHighlight: "Exclusiva",
          cardDescription:
            "Sua casa e seu negócio merecem uma conexão sem falhas.",
          linkAdira: "#",
          linkPlanos: "#",
          mainTitlePrefix: "SEM",
          mainTitleHighlight: "LIMITES",
          subtitle:
            "Desfrute de uma internet rápida, estável e 100% sem limites de dados",
          linkTambemQuero: "#",
        },
      ],

      whatsappNumber: "244933741797", // Altere para o seu número com DDD
      plans: [
        {
          name: "PLANO 6",
          speed: "6",
          priceReais: "12",
          priceCents: "000",
          featured: false,
          features: ["APP STANDART", "CANAIS DIGITAIS", "100% FIBRA ÓPTICA"],
        },
        {
          name: "PLANO 8",
          speed: "8",
          priceReais: "20",
          priceCents: "000",
          featured: false,
          features: [
            "APP STANDART",
            "CANAIS DIGITAIS",
            "WIFI HIGH PERFORMANCE",
          ],
        },
        {
          name: "PLANO 10",
          speed: "10",
          priceReais: "28",
          priceCents: "000",
          featured: true, // Adiciona destaque ao plano
          features: ["APP PREMIUM", "CANAIS EXCLUSIVOS", "ROOTEADOR DUAL BAND"],
        },
        {
          name: "PLANO 12",
          speed: "12",
          priceReais: "36",
          priceCents: "000",
          featured: false,
          features: ["APP PREMIUM VIP", "CANAIS LIBERADOS", "ULTRABROAD-BAND"],
        },
      ],

      subtitle:
        "Tenha acesso aos seus programas preferidos quando e onde quiser.<br>Esportes, filmes, séries, yoga, meditação e conteúdos de saúde para agradar todos os estilos!",

      // Lista de Aplicativos Standard
      standardApps: [
        {
          name: "Looke",
          isWhiteBg: true,
          imageUrl: "https://placehold.co/100x100/ffffff/004080?text=Looke",
        },
        {
          name: "CurtaOn",
          styleObj: {
            backgroundColor: "#000000",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "10px",
          },
          imageUrl: "https://placehold.co/100x100/ffffff/004080?text=Looke",
        },
        {
          name: "PK+",
          styleObj: {
            backgroundColor: "#00bcd4",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          },
        },
        {
          name: "TopLingo",
          styleObj: { backgroundColor: "#2f54eb" },
        },
        {
          name: "Reforço",
          styleObj: { backgroundColor: "#2b6cb0" },
        },
        {
          name: "Ubook PLUS",
          styleObj: {
            backgroundColor: "#ff5722",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "10px",
            textAlign: "center",
          },
        },
        {
          name: "Hube Revistas",
          styleObj: { backgroundColor: "#8a2be2" },
        },
        {
          name: "HUB",
          isWhiteBg: true,
           imageUrl: "./assets/images/icon/icons8-hbo-max-100.png",
        },
        {
          name: "HUB",
          isWhiteBg: true,
           imageUrl: "./assets/images/icon/prime-video.png",
        },
        {
          name: "HUB",
          isWhiteBg: true,
           imageUrl: "./assets/images/icon/instagram-100.png",
        },
       {
          name: "HUB",
          isWhiteBg: true,
           imageUrl: "./assets/images/icon/icons8-netflix-100.png",
        },
        {
          name: "HUB",
          isWhiteBg: true,
           imageUrl: "./assets/images/icon/icons8-hbo-100.png",
        },
      ],

      // Lista de Aplicativos Premium
      premiumApps: [
        {
          name: "Max",
          isWhiteBg: true,
          imageUrl: "./assets/images/icon/youtube.png",
        },
          {
          name: "Max",
          isWhiteBg: true,
          imageUrl: "./assets/images/icon/youtube.png",
        },
          {
          name: "Max",
          isWhiteBg: true,
          imageUrl: "./assets/images/icon/youtube.png",
        },
        {
          name: "HOTGO",
          isWhiteBg: true,
          imageUrl: "./assets/images/icon/icons8-tiktok-100.png",
        },
      
        {
          name: "Docway",
          isWhiteBg: true,
          imageUrl: "./assets/images/icon/icons8-facebook-100.png",
        },
        
      ],

      title: "Porque escolher<br>a Afriwind ?",
      features: [
        {
          icon: "fa-solid fa-gauge-high",
          title: "Mais velocidade",
          description:
            "Tenha uma navegação mais rápida, e uma internet mais estável",
        },
        {
          icon: "fa-solid fa-network-wired",
          title: "100% Fibra Ótica",
          description:
            "Mais estabilidade, alta velocidade e total confiança na sua conexão",
        },
        {
          icon: "fa-solid fa-cloud-arrow-up",
          title: "Velocidade de Upload",
          description:
            "Compartilhe fotos e vídeos com rapidez graças à alta velocidade de upload.",
        },
        {
          icon: "fa-solid fa-cloud-arrow-down",
          title: "Downloads rápidos",
          description:
            "Baixe arquivos, assista a vídeos em 4K e jogue online com máxima performance.",
        },
      ],

      mainTitle: "Contrate agora",
      whatsappText: "Chame no WhatsApp",
      whatsappNumber: "244933741797",
      phoneText: "Ligue agora 244933741797",
      phoneFormatted: "08003663636",
      selfServiceTitle: "Autoatendimento<br>para clientes",
      selfServiceSubtitle: "Com poucos cliques você resolve o que precisa",

      selfServiceItems: [
        {
          icon: "fa-solid fa-file-signature",
          label: "Central do<br>assinante",
          link: "#",
        },
        {
          icon: "fa-solid fa-file-invoice-dollar",
          label: "2ª via do<br>boleto/PIX",
          link: "#",
        },
        {
          icon: "fa-brands fa-whatsapp",
          label: "Atendimento<br>via WhatsApp",
          link: "#",
        },
        {
          icon: "fa-solid fa-headset",
          label: "Solicitar<br>suporte",
          link: "#",
        },
      ],

         parceiros: [
          {  logo: './assets/images/icon/logo1.jpeg' },
          {  logo: './assets/images/icon/logo2.jpeg' },
          {  logo: './assets/images/icon/logo3.jpeg' },
          {  logo: './assets/images/icon/logo4.jpeg' },
          {  logo: './assets/images/icon/logo6.jpeg' }
        ]
    };
  },

  computed: {
    currentSlide() {
      return this.slides[this.currentSlideIndex];
    },

    whatsappUrl() {
      const text = encodeURIComponent(
        "Olá! Gostaria de contratar os serviços.",
      );
      return `https://wa.me/${this.whatsappNumber}?text=${text}`;
    },

        // Duplica a lista de parceiros dinamicamente no Vue para alimentar a animação do loop CSS
        logosDuplicados: function() {
          return [...this.parceiros, ...this.parceiros];
        }
  },

  mounted() {
    this.startAutoplay();
  },
  beforeDestroy() {
    this.stopAutoplay();
  },
  methods: {
    nextSlide() {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    },
    nextSlideManual() {
      this.nextSlide();
      this.resetAutoplay();
    },
    prevSlideManual() {
      this.prevSlide();
      this.resetAutoplay();
    },
    startAutoplay() {
      this.autoplayTimer = setInterval(() => {
        this.nextSlide();
      }, this.autoplayInterval);
    },
    stopAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
      }
    },
    resetAutoplay() {
      this.stopAutoplay();
      this.startAutoplay();
    },

    contratar(plan) {
      const texto = `Olá! Gostaria de contratar o plano *${plan.name}* de *${plan.speed} Mega* por *R$ ${plan.priceReais},${plan.priceCents}/mês*.`;
      const mensagemFormatada = encodeURIComponent(texto);
      const url = `https://wa.me/${this.whatsappNumber}?text=${mensagemFormatada}`;
      window.open(url, "_blank");
    },
  },

  template: await get_template("./assets/js/view/home/home"),
};
