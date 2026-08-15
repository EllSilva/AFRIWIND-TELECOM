import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            currentStep: 1,
        form: {
          proprietario: {
            nome: '',
            telefone: '',
            email: '',
            documentoId: '',
            provincia: '',
            municipio: '',
            endereco: ''
          },
          imovel: {
            finalidade: 'Venda',
            tipoImovel: 'Apartamento',
            provincia: '',
            municipio: '',
            zona: '',
            enderecoCompleto: '',
            localizacaoMapa: '',
            preco: null
          },
          caracteristicas: {
            area: null,
            quartos: null,
            suites: null,
            banheiros: null,
            salas: null,
            cozinha: null,
            garagem: null,
            piscina: false,
            jardim: false,
            anexos: false,
            estado: 'Usado',
            anoConstrucao: null
          },
          documentos: {
            direitoSuperficie: false,
            escrituraPublica: false,
            certidaoPredial: false,
            plantaImovel: false,
            licencaUtilizacao: false
          },
          midia: {
            fotosArquivos: [],
            fotosNomes: [],
            linkVideo: ''
          },
          comercial: {
            disponivelImediato: 'Sim',
            aceitaFinanciamento: 'Sim',
            precoNegociavel: 'Sim',
            temExclusividade: 'Não',
            dataVisita: ''
          },
          declaracao: false
        }
        }
    },

    methods: {
        handleFileUpload(event) {
          const files = Array.from(event.target.files);
          this.form.midia.fotosArquivos = files;
          this.form.midia.fotosNomes = files.map(f => f.name);
        },
        nextStep() {
          if (this.currentStep === 1) {
            if (!this.form.proprietario.nome || !this.form.proprietario.telefone || !this.form.proprietario.email || !this.form.proprietario.provincia || !this.form.proprietario.municipio) {
              alert('Por favor, preencha todos os campos obrigatórios (*) do proprietário.');
              return;
            }
            if (!this.form.imovel.provincia) this.form.imovel.provincia = this.form.proprietario.provincia;
            if (!this.form.imovel.municipio) this.form.imovel.municipio = this.form.proprietario.municipio;
          }
          if (this.currentStep === 2) {
            if (!this.form.imovel.preco || !this.form.imovel.provincia || !this.form.imovel.municipio || !this.form.imovel.zona) {
              alert('Por favor, preencha a localização e o preço pretendido (*).');
              return;
            }
          }
          if (this.currentStep < 5) {
            this.currentStep++;
          }
        },
        prevStep() {
          if (this.currentStep > 1) {
            this.currentStep--;
          }
        },
        handleSubmit() {
          if (!this.form.declaracao) {
            alert('Você precisa aceitar a declaração de autorização para prosseguir.');
            return;
          }
          alert('🚀 Imóvel enviado com sucesso para a Patrimónios & Lar!');
          console.log('Dados Enviados:', this.form);
        }
      },

    async mounted() {


        AOS.init({
            duration: 1000,
        });
    },

    template: await get_template('./assets/js/view/solicitacao/vender')
}