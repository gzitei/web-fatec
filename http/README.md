# HTTP

## 1. Introdução

    Protocolo de Transferência de HiperTexto (HTTP) é um protocolo de comunicação 
    (como o próprio nome sugere) intimamente relacionado com a internet, desde a sua 
    concepção, de que seria utilizado para a transferência de HyperText, porém,
    não se limitou apenas à transferências desses. Também, é utilizado para a 
    transferência de arquivos de mídia, música, imagens, vídeos, etc.

    Nesta resenha não será discutido sobre HiperTexto e nem sobre os outros protocolos 
    de comunicação, porém, tais conceitos são fundamentais para o entendimento acerca 
    do HTTP.

    Algumas características do protocolo são:

    - Estrutura simples: estruturado de forma textual (o cabeçalho por exemplo é escrito
    na forma de chave-valor);
    - Extensível: devido a sua estrutura é relativamente fácil criar novas itens no cabe
    çalho, desde que o servidor esteja preparado para receber esses novos itens, ou passar
    elementos de diferentes formatos sendo devidamente codificado;
    - "*Stateless*": o protocolo não mantém o estado da aplicação, dessa forma não há
    a necessidade um vínculo entre uma requisição e outra;
    - "*Sessionful*": mesmo que não mantenha o estado da aplicação, ainda há a manutenção
    da sessão do cliente através de cookies e tokens;
    
## 2. Estrutura

    Há dois tipos de mensagens neste tipo de protocolo: REQUISIÇÕES e RESPOSTAS, ambos
    podem ser separados 3 partes:
    1. "Identificação";
    2. Cabeçalho (HEADERS);
    3. Corpo (Body, Payload);

### 2.1. Requisição:

    [Cabeçalho da requisição](./img/request_get.png)

    Na identificação é indicado o **MÉTODO** ou **VERBO** requisitado ao servidor, o 
    caminho de onde se encontra o recurso e a versão do protocolo utilizado.
    - verbo: GET
    - caminho: /
    - versão: HTTP 2

    O cabeçalho é composto por informações referentes ao conteúdo do recurso: tamanho,
    tipo de codificação utilizada, etc.

    Quando o cliente requisita o envio de alguma coisa para o servidor, o conteúdo do 
    que é requisitado se encontra no corpo da requisição. Como no exemplo abaixo, o corpo
    da requisição ou *payload* é "alguma coisa"

    [Corpo da requisição](./img/request_post.png)

### 2.2. Resposta:

    [Cabeçalho da resposta](./img/response_get.png)

    Na identificação há a indicação da versão do protocolo utilizado, o código da resposta
    e a mensagem de resposta

    O cabeçalho possui a mesma lógica da requisição

    No corpo se encontra o conteúdo do que foi requisitado pelo cliente (a grosso modo)
    
    [Corpo da resposta](./img/response_get_body.png)

## 3. Funcionamento

    O protocolo é construído sobre uma arquitetura Cliente-Servidor. Assim, o 
    funcionmento pode ser entendido através de uma visão de mais alto nível conforme
    o seguinte:

    [Cliente-Servidor](./img/cliente_servidor.png)

    1. O cliente realiza uma **REQUISIÇÃO (REQUEST)** de algum recurso ao servidor
    2. O servidor avalia a requisição enviando ao cliente uma **RESPOSTA (RESPONSE)** a sua
    requisição

    No protocolo HTTP há 9 métodos, porém os mais recorrentes são:
    - GET - requisita acesso a um recurso;
    - POST - requisita a inserção de um dado ao servidor;
    - PUT - requisita alteração de algum dado ao servidor;
    - DELETE - requisita que o servidor apague alguma coisa;

    Nesse processo ocorre os outros processos de comunicação entre computadores: forma-se
    uma conexão TCP (ou qualquer outro protocolo de transporte), os nós de rede, roteadores
    etc., etc...

## 4. Projeto
    
    O intuito desse projeto é cobrir os principais verbos e status do protocolo, assim,
    algo que cobre tais pontos é uma CRUD API (criar, ler, atualizar e apagar dados).
    Não há a necessidade do uso de dados persistentes, manipulando dados que estão em 
    memória já denota entedimento acerca do assunto.

### 4.1 Requisitos

    1. GET - Responde com algum dado (200); Responde com um erro de pedido (400)
    2. POST - Responde com sucesso (200) (certifique-se de que o servidor está recebendo
    o valor e o armazenando de alguma forma); Responde com falha de servidor (500) 
    (crie alguma situação na qual o servidor não consiga processar a requisição, dividir
    por 0 por exemplo)
    3. UPDATE - Responde com sucesso (200) (certificar se o servidor recebe o dado);
    Responde com erro de requisição de cliente (404) (crie uma situação na qual o cliente
    requere alteração de algo que não existe)
    4. DELETE - Responde com sucesso (200) (certificar que o dado é apagado); Procure por
    um status e dê seus pulos

    "Mesmo que não seja o ideal, as vezes é melhor ensinar algo 80% correto e a pessoa
    entender algo e se engajar com esse conhecimento do que entender 10% tentando ensinar
    algo 100% correto e desengajar com esse conhecimento"

    Implementar um servidor HTTP é um excelente projeto didático, porém, a implementação
    de tal está um pouco além, tendo em vista que a ideia aqui apresentada é apenas 
    introdutória. Assim, fica livre a escolha da linguagem e das tecnologias que serão
    escolhida. Caso a pessoa não saiba o que usar, use Node.JS e express, tá bom demais
    já.

    Há diversas implementações e exemplos na internet a fora, não vejo necessidade em 
    fornecer um. Ainda mais que os próprios tutoriais das ferramentas implementam um 
    servidor básico que atende os principais verbos.

    Se tiver muito no pique implemente um servidor de páginas para servir um formulário.
    Caso esteja extremamente no pique implemente o seu próprio servidor HTTP do zero
