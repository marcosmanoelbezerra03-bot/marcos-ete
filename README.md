<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu cartão de apresentação</title>
  <!-- Adicione o link para o arquivo CSS aqui -->
</head>
<body>
  <!-- Já com a estrutura em HTML implementada, analise o arquivo CSS e
       adicione as classes CSS corretas em cada elemento(tag html) para estilizar o cartão de apresentação.
       Junto a isso,crie o JavaScript para implementar a funcionalidade dos botões.
       Adicione os id's corretos para cada elemento HTML.
        -->
  <main>
    <p>Olá, eu sou</p>

    <h1>Nome do aluno</h1>

    <p>
      Escreva aqui uma breve apresentação sobre você.
    </p>

    <h2>Meus interesses</h2>

    <ul>
      <li>Programação</li>
      <li>Música</li>
      <li>Leitura</li>
    </ul>

    <button type="button">
      Mostrar uma mensagem
    </button>

    <button type="button">
      Ocultar mensagem
    </button>

    <p></p>
  </main>

  <!-- Escreva o Script JavaScript aqui -->
  <script>
    // Selecione os elementos HTML usando document.querySelector

    // 1. Selecione o botão "Mostrar uma mensagem" e armazene em uma variável
    
    // 2. Selecione o botão "Ocultar mensagem" e armazene em uma variável
   
    // 3. Selecione o elemento <p> onde a mensagem será exibida e armazene em uma variável
    
    // 4. Selecione o elemento <h1> com o nome do aluno e armazene em uma variável
    

    // 5. Adicione os event listeners para o botão "Mostrar uma mensagem"
    .addEventListener("click", function () {
      // 5.1 Atualize o conteúdo do elemento <p> com a mensagem desejada
       = `Prazer em conhecer você, ${}!`;
    });

    // 6. Adicione os event listeners para o botão "Ocultar mensagem"
    .addEventListener("click", function () {
      // 6.1 Limpe o conteúdo do elemento <p> para ocultar a mensagem
       = "";
    });
  </script>

</body>
