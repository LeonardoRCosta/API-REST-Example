## O que é API?

- Application Programming Interface
- Simplifica o desenvolvimento, não precisa de telas
- Fácil integração com sistemas, apenas dando respostas
- Recursos

## Tipos de API

- API pública: disponibilizada para qualquer um acessar (ex: api do github).
- API privada: quando uma API é criada para utilização entre sistemas de uma empresa, requer autenticação.
- API de terceiros: quando uma API é um produto/serviço, podendo ser integrada em um sistema, requer autenticação.

## O que é REST?

- REST (representational state transfer) é um padrão de arquitetura ligado a APIs e o protocolo HTTP
- É composto por 6 tópicos

  - [x] **Uniformidade**: todas as requisições para o mesmo endpoint, devem receber a mesma resposta, independente de onde vieram;
        A interface uniforme impõe quatro restrições arquitetônicas:
    1. As solicitações devem identificar recursos. Elas fazem isso usando um identificador de recurso uniforme.
    2. Os clientes têm informações suficientes na representação do recurso para modificar ou excluir o recurso caso queiram. O servidor atende a essa condição enviando metadados que descrevem melhor o recurso.
    3. Os clientes recebem informações sobre como processar ainda mais a representação. O servidor faz isso enviando mensagens auto-descritivas que contêm metadados sobre como o cliente pode usá-los melhor.
    4. Os clientes recebem informações sobre todos os outros recursos relacionados de que precisam para concluir uma tarefa. O servidor faz isso enviando hiperlinks na representação para que os clientes possam descobrir dinamicamente mais recursos.
  - [x] **Desacoplação**: A API deve ser independente de um client, não pode interagir com a aplicação, apenas retornar respostas, baseadas na requisição;

  - [x] **Stateless**: as requisições não tem state, ou seja, cada uma é única e essa responsabilidade de sessão é dada a aplicação que a consulta. Os clientes podem solicitar recursos em qualquer ordem, e cada solicitação é sem estado ou isolada de outras solicitações;

  - **Cache**: Quando possível as respostas devem ser cacheadas, melhorando a performance no tempo de resposta do servidor. Exemplo: quando consultamos a API dos correios em nossa API podemos guardar a resposta daquela requisição, pois provavelmente teríamos que fazer a requisição de novo, dessa maneira evitamos uma requisição desnecessária pois a resposta já estaria armazenada;

  - [x] **Arquitetura de camadas**: A arquitetura da API pode ser composta por camadas, fazendo com que um componente não possa acessar um superior, sem passar pelo intermediário. Os servidores também podem passar solicitações para outros servidores. Você pode projetar seu serviço da Web RESTful para ser executado em vários servidores com diversas camadas, como segurança, aplicação e lógica de negócios, trabalhando juntos para atender às solicitações do cliente. Essas camadas permanecem invisíveis para o cliente;

  - **Code on demand (opcional)**: Em alguns casos pode haver código que precisa ser executado para rodar (Java applets), nestes casos o código deve rodar por demanda;
  - Seguindo os princípios acima na sua API, você tem uma API RESTful

  ### Funcionamento das APIs RESTful:

<aside>create
💡 O envio e recebimento de dados são feitos por **proxies**, que executam operações diferentes e atuam como gateways (intermediários).

</aside>

### Funções dos proxies:

- cacheameto (pode ser público ou privado);
- filtragem (scanner de antivírus, controle de acesso);
- balanceamento de carga (para permitir que vários servidores possam responder a diferentes requisições);
- autenticação(controle de pessoas que tem acesso aos recursos);
- autorização(controle de pessoas que tem acesso a determinada informação);
- registro de informação (permite o armazenamento de informações de histórico).

1. Cliente envia uma solicitação ao servidor seguindo as regras para realizar a requisição impostas pela API;
2. Servidor autentica o cliente;
   - Meios de autenticação:
     ### Chaves de API
     As chaves de API são outra opção para autenticação da API REST. Nessa abordagem, o servidor atribui um valor gerado exclusivo a um cliente iniciante. Sempre que o cliente tenta acessar recursos, ele usa a chave de API exclusiva para verificar a si mesmo. As chaves de API são menos seguras porque o cliente precisa transmitir a chave, o que a torna vulnerável a roubo de rede.
     ### OAuth
     OAuth combina senhas e tokens para acesso de login altamente seguro a qualquer sistema. Primeiro, o servidor solicita uma senha e, depois, um token adicional para concluir o processo de autorização. Ele pode verificar o token a qualquer momento e também ao longo do tempo com escopo e longevidade específicos.
3. Servidor recebe a requisição e a processa internamente;
4. Servidor retorna uma resposta ao cliente (erro ou sucesso);
