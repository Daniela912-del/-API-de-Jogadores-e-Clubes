⚽ API de Jogadores e Clubes


Esta é uma API simples para gerenciar informações de jogadores e clubes de futebol, com um foco em dados de jogadores e clubes para a Liga dos Campeões. A API permite visualizar, adicionar, atualizar e excluir dados de jogadores e clubes.

Arquitetura
O projeto segue uma arquitetura em camadas (n-layer) para separar as responsabilidades, o que facilita a manutenção e o desenvolvimento. As principais informações são:

Controladores : Lidam com as requisições HTTP e as respostas, chamando os serviços esperados.
Serviços : Contêm a lógica de negócio da aplicação.
Repositórios : Responsáveis ​​pela interação com a fonte de dados (neste caso, arquivos JSON).
Modelos : Definem-se como interfaces e a estrutura dos dados utilizados.
Órfão Utilizado
Node.js : Ambiente de execução.
Express.js : Framework para construção da API REST.
TypeScript : Linguagem de programação para garantir tipagem estática e um código mais robusto.
tsup : Para compilar o código TypeScript em JavaScript.
tsx : Para executar arquivos TypeScript diretamente.
cors : Middleware para habilitar o Cross-Origin Resource Sharing.
