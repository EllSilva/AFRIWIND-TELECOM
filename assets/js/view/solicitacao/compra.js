import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {
          currentStep: 1,
        form: {
          nome: '',
          telefone: '',
          email: '',
          profissao: '',
          provincia: 'Luanda',
          tipoCliente: '',
          preferencias: {
            finalidade: 'Compra',
            tipoImovel: 'Apartamento',
            precoMin: null, precoMax: null,
            municipio: '', quartos: null, area: null
          },
          imovel: {
            titulo: '', tipoImovel: 'Apartamento', finalidade: 'Venda',
            preco: null, municipio: '', quartos: null, garagem: null
          }
        }
        }
    },


       methods: {
        nextStep() {
          // Validação simples antes de prosseguir
          if (this.currentStep === 1) {
            if (!this.form.nome || !this.form.telefone || !this.form.email || !this.form.tipoCliente) {
              alert('Por favor, preencha os campos obrigatórios.');
              return;
            }
          }
          if (this.currentStep === 2 && this.form.tipoCliente === 'Proprietário') {
            if (!this.form.imovel.titulo || !this.form.imovel.preco || !this.form.imovel.municipio) {
              alert('Por favor, preencha os dados obrigatórios do imóvel.');
              return;
            }
          }
          if (this.currentStep < 3) this.currentStep++;
        },
        prevStep() {
          if (this.currentStep > 1) this.currentStep--;
        },
        handleSubmit() {
          // Animação sutil de feedback no envio
          alert('🚀 Sucesso! Obrigado ' + this.form.nome + ', recebemos o seu cadastro.');
          console.log('Dados enviados:', JSON.stringify(this.form, null, 2));
          // Resetar formulário ou redirecionar aqui
        }
      },
    async mounted() {


        AOS.init({
            duration: 1000,
        });
    },

    template: await get_template('./assets/js/view/solicitacao/compra')
}