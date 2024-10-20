# Manipulando elementos do DOM
## Sumário
1. [Manipulando elementos do DOM](#acessando-elementos-do-dom)
2. [Modificar elementos existentes](#modificar-elementos-existentes)
	1. [Modificando counteúdo](#modificando-conteúdo)
3. [Referências](#referências)
## Manipulando elementos do DOM
Pode-se definir manipulação do DOM como o processo de interagir e modificar a estrutura de um documento em tempo real, utilizando linguagens de programação. A linguagem mais comum para este propósito é o JavaScript, porém é possível realizar as mesmas ações utilizando outras linguagens utilizando [WebAssembly](https://developer.mozilla.org/pt-BR/docs/WebAssembly).
Este processo é fundamental para a criação de páginas interativas, que sejam capazes de responder a ações do usuário de forma dinâmica, sem que seja necessário carregar uma página completamente nova a cada interação.
## Modificar elementos existentes
Existem recursos para modificar o conteúdo ou estilo de elementos já existentes no documento. Os usos mais comuns são:
### Modificando conteúdo
A partir de um elemento presente no documento, pode-se utilizar o atributo `textContent` para modificar o conteúdo interno do elemento. Por exemplo, temos uma página contendo o seguinte elemento:

```html
<h1 id="greeting">Hello World!</h1>
```

Podemos alterar o texto exibido pelo elemento acima utilizando:

```javascript
const greeting = document.querySelector("#greeting");
// a operação acima é equivalente a document.getElementById("greeting")

greeting.textContent = "Olá mundo!"
```

Dessa forma, o documento passará a conter o seguinte elemento:

```html
<h1 id="greeting">Olá mundo!</h1>
```

O [exemplo 1](./Exemplos/exemplo-1.html) demonstra o comportamento citado acima.

## Referências
+[WebAssembly | MDN](https://developer.mozilla.org/pt-BR/docs/WebAssembly)