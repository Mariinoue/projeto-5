# projeto_S5
Carrinho de compras-JavaScript

Com esse projeto pude colocar em prática o conteúdo estuado durante 5 semanas do curso de Back End.
Trabalhei com estuturas de repetição para validar e repetir se necessário, as perguntas.
Instalei o package.json, readline-sync e para não subir o node_modules para o Github usei o .gitignore. 
Trabalhei com array e os metodos de iteração
Criei classes para realizar calculos da compra. 


- Criei um carrinho de compras

- Com o método de interação- sort- lietei no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior)

- Utilizei a lista contida no arquivo database.js

- Recebi via terminal as entradas de id e quantidade dos produtos a serem adquiridos. Usando 

- Perguntei se a cliente possue cupom de desconto. Caso a cliente digite 10, significa que terá 10% de desconto.

-Calcular o valor do subtotal (sem considerar o desconto)

-Calcular o valor de desconto

-Calcular o valor total (considerando o desconto do cupom)

-Apresentar no console:

-a tabela contendo a lista de produtos adquiridos, incluindo a quantidade de cada produto
-o valor subtotal em Reais
-o valor do desconto em Reais
-o valor total em Reais
-a data da compra
-Regras
-Validação de produto existente pelo id. Caso não encontre o produto, apresentar uma mensagem de erro e solicitar novamente um id válido.

-Validação de quantidade para não permitir valores negativos.

-Validação de cupom de desconto. Não aceitar cupom acima de 15% de desconto.

-Criação de uma classe chamada Pedido contendo no constructor pelo menos as seguintes informações:

-a lista de produtos
-o valor de cupom
-A classe Pedido deve conter os métodos:

-que calcule a quantidade de itens totais no carrinho
-que calcule o valor subtotal (quantidade de itens multiplicado pelo preço unitário)
-que calcule o valor de desconto (subtotal multiplicado pelo desconto)
-que calcule o valor total (subtotal menos o desconto)

