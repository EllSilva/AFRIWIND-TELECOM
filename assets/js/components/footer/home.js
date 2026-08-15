import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "home"
        }
    },

 
       mounted: function() {
        // Manipulação direta via JS após a montagem do componente Vue
        setTimeout(function() {
          var overlay2 = document.getElementById('overlay2');
          var loader2 = document.getElementById('loader2');

          // Oculta os dois elementos
          if (overlay2) overlay2.style.display = 'none';
          if (loader2) loader2.style.display = 'none';
        }, 3000);
      },
    template: await get_template('./assets/js/components/footer/home')
}






