document.addEventListener('DOMContentLoaded', function () {
     const form = document.querySelector('form');
     form.addEventListener('submit', function (event) {
          event.preventDefault();

          const quantidade = parseFloat(document.getElementById('quantidade').value);
          const tamanhox = parseFloat(document.getElementById('tamanhox').value) / 100; // Convertendo cm para metros
          const tamanhoy = parseFloat(document.getElementById('tamanhoy').value) / 100; // Convertendo cm para metros

          const a = 0.5;
          const b = 0.4;

          const area = tamanhox * tamanhoy;
          const fator_base = calcularFator(quantidade, area, 100, a, b);

          if (fator_base < 0) {
               alert("Erro: Fator ajustado negativo");
               return;
          }

          const [preco_unitario, valor_total] = calcularPrecoTotal(quantidade, tamanhox, tamanhoy, fator_base, a, b);

          document.getElementById('preco_total').value = `R$ ${valor_total.toFixed(2)}`;
          document.getElementById('preco_unitario').value = `R$ ${preco_unitario.toFixed(2)}`;
     });

     function calcularFator(quantidade, area, fator_base, a, b) {
          return fator_base * Math.pow(area, -a) * Math.pow(quantidade, -b);
     }

     function calcularPrecoTotal(qnt, med_x, med_y, fator_base, a, b) {
          const area = med_x * med_y;
          const preco_unitario = area * fator_base;
          const valor_total = qnt * preco_unitario;
          return [preco_unitario, valor_total];
     }
});
