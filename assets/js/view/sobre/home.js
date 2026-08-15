import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
     banner: {
          subtitulo: 'INSTITUCIONAL',
          titulo: 'SOBRE NÓS'
        },
        empresa: {
          nome: 'AFRIWIND TELECOM',
          anoFundacao: '2021',
          descricao: [
            'A AFRIWIND TELECOM é uma empresa Angolana especializada em soluções de telecomunicações e tecnologias de informação desde 2021, comprometida em fornecer serviços de alta qualidade para clientes residenciais, empresariais e institucionais.',
            'Com uma equipa técnica qualificada e uma infraestrutura em constante evolução, desenvolvemos soluções que garantem conectividade, desempenho e segurança, acompanhando as necessidades de um mercado cada vez mais digital.',
            'Mais do que fornecer Internet, o nosso objetivo é criar soluções tecnológicas que impulsionem pessoas, empresas e organizações, oferecendo serviços confiáveis, suporte técnico especializado e atendimento próximo dos nossos clientes.'
          ]
        },
        missao: 'Disponibilizar soluções de telecomunicações e tecnologia com elevados padrões de qualidade, proporcionando conectividade segura, estável e eficiente, contribuindo para o crescimento dos nossos clientes.',
        visao: 'Ser uma referência no setor das telecomunicações em Angola, reconhecida pela inovação, qualidade dos serviços e excelência no atendimento ao cliente.',
        valores: [
          { titulo: 'Compromisso', icone: 'bi-hand-thumbs-up' },
          { titulo: 'Integridade', icone: 'bi-shield-check' },
          { titulo: 'Inovação', icone: 'bi-lightbulb' },
          { titulo: 'Qualidade', icone: 'bi-award' },
          { titulo: 'Profissionalismo', icone: 'bi-briefcase' },
          { titulo: 'Transparência', icone: 'bi-eye-fill' },
          { titulo: 'Foco no Cliente', icone: 'bi-person-heart' },
          { titulo: 'Melhoria Contínua', icone: 'bi-graph-up-arrow' }
        ]
    };
  },

  methods: {},

  template: await get_template("./assets/js/view/sobre/home"),
};
