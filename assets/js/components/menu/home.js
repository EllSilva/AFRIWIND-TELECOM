import get_template from "../../components/get_template.js";
import { bus } from "../../components/bus.js"; // ajuste caminho

export default {
  data: function () {
    return {
      isMenuOpen: false,

      menuItems: [
        { label: "Home", link: "#/" },
        { label: "Serviços", link: "#/servicos" }, 
        { label: "Sobre nós", link: "#/sobre" },
        { label: "Contactos", link: "#/contato" },
      ],
    };
  },

  mounted() {
    // Adiciona ouvinte global para capturar cliques fora do menu
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    // Remove ouvinte para evitar vazamento de memória
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleClickOutside(event) {
      const menu = this.$refs.mobileMenu;
      const toggleBtn = this.$refs.toggleBtn;

      // Se o menu estiver aberto e o clique NÃO for dentro do menu nem no botão de alternar, fecha o menu
      if (
        this.isMenuOpen &&
        menu &&
        !menu.contains(event.target) &&
        !toggleBtn.contains(event.target)
      ) {
        this.closeMenu();
      }
    },
  },

  template: await get_template("./assets/js/components/menu/home"),
};
