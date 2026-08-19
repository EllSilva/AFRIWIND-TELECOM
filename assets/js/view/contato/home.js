import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
      // Objeto do formulário reativo
      form: {
        nome: "",
        email: "",
        whatsapp: "",
        assunto: "",
        mensagem: "",
      },

      // Lista de opções de assunto
      assuntos: [
        "Suporte Técnico",
        "Planos e Vendas",
        "Financeiro / 2ª Via",
        "Cancelamento / Mudança de Endereço",
        "Outros Assuntos",
      ],

      // Dados cadastrais da empresa
      company: {
        name: "INFORMAÇÕES DE CONTACTO", 
        address: "Bairro Golfe1, Rua 28 de Agosto ",
        cityStateCep: "Luanda, Angola",
        phone: "+244 933 741 797",
        email: "geral@afriwind-telecom.com",
          email2: "comercial@afriwind-telecom.com",
      },

      // Horários de atendimento
      schedules: [" Todos os dias das 8h às 21h"],
    };
  },

  methods: {
    handleSubmit() {
      alert(
        `Obrigado, ${this.form.nome}! Sua mensagem sobre "${this.form.assunto}" foi enviada com sucesso.`,
      );

      // Limpar formulário
      this.form = {
        nome: "",
        email: "",
        whatsapp: "",
        assunto: "",
        mensagem: "",
      };
    },
  },

  template: await get_template("./assets/js/view/contato/home"),
};
