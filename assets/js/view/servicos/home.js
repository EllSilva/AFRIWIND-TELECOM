import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
     banner: {
          subtitulo: 'TECNOLOGIA & CONECTIVIDADE',
          titulo: 'OS NOSSOS SERVIÇOS'
        },
        servicosRede: [
          'Redes LAN',
          'Redes WAN',
          'Redes Metropolitanas',
          'Redes Corporativas',
          'Backbone em Fibra Óptica'
        ],
        locaisWifi: [
          'Empresas',
          'Condomínios',
          'Hotéis',
          'Hospitais',
          'Escolas',
          'Centros Comerciais'
        ],
        instalacaoFibra: [
          'Lançamento de cabos',
          'Fusões',
          'Certificação',
          'Instalação de ODF',
          'Organização de bastidores',
          'Testes e documentação'
        ],
        cctv: [
          'Instalação de câmaras IP',
          'Gravação em NVR',
          'Monitorização remota',
          'Manutenção preventiva'
        ],
        produtos: [
          { nome: 'Equipamentos de Fibra Óptica', icone: 'bi-plugin' },
          { nome: 'OLT e ONU', icone: 'bi-cpu' },
          { nome: 'Routers', icone: 'bi-router' },
          { nome: 'Switches', icone: 'bi-hdd-network' },
          { nome: 'Access Points Empresariais', icone: 'bi-wifi' },
          { nome: 'Sistemas Mesh Wi-Fi', icone: 'bi-bounding-box-circles' },
          { nome: 'Bastidores (Racks)', icone: 'bi-stack' },
          { nome: 'Patch Panels', icone: 'bi-grid-3x3-gap' },
          { nome: 'Cabos de Rede', icone: 'bi-ethernet' },
          { nome: 'Equipamentos de Videovigilância', icone: 'bi-camera-video' },
          { nome: 'Telefones IP', icone: 'bi-telephone' },
          { nome: 'Equipamentos Redes Corporativas', icone: 'bi-server' }
        ],
        motivos: [
          'Equipa técnica altamente qualificada.',
          'Soluções personalizadas para cada cliente.',
          'Equipamentos de elevada qualidade.',
          'Atendimento rápido e profissional.',
          'Suporte técnico especializado.',
          'Projetos desenvolvidos de acordo com as melhores práticas do setor.',
          'Compromisso com a inovação e a satisfação dos clientes.'
        ]
    };
    
  },
     mounted() {
        // Inicializa as animações no scroll quando o Vue carrega
        AOS.init({
          duration: 800,
          once: true,
          easing: 'ease-out-cubic'
        });
      },
 
  template: await get_template("./assets/js/view/servicos/home"),
};
