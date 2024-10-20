# Manipulando elementos do DOM
## Sumário
1. [Manipulando elementos do DOM](#acessando-elementos-do-dom)
2. [Modificar elementos existentes](#modificar-elementos-existentes)
3. [Referências](#referências)
## Manipulando elementos do DOM
Pode-se definir manipulação do DOM como o processo de interagir e modificar a estrutura de um documento em tempo real, utilizando linguagens de programação. A linguagem mais comum para este propósito é o JavaScript, porém é possível realizar as mesmas ações utilizando outras linguagens utilizando [WebAssembly](https://developer.mozilla.org/pt-BR/docs/WebAssembly).
Este processo é fundamental para a criação de páginas interativas, que sejam capazes de responder a ações do usuário de forma dinâmica, sem que seja necessário carregar uma página completamente nova a cada interação.

> [!TIP]
> Nos nossos exemplos utilizaremos o [Codepen](https://codepen.io/). Lá, será possível observar 4 janelas, conforme a imagem abaixo:
> ![](./img/codepen.webp)
> Na janela 1, é exibido o código HTML do `body` da página, na janela 2 o CSS responsável pela estilização da página e na janela 3 o código JavaScript que é executado na página. A janela 4 exibe o resultado final da página combinando o conteúdo das demais janelas.
> 
> __Recomendação:__ Para explorar o comportamento da página, você pode apagar o código JavaScript, para ver o ponto de partida a página e depois voltar o código linha a linha para entender como ele interage com o conteúdo.
 
## Modificar elementos existentes
Existem recursos para modificar o conteúdo ou estilo de elementos já existentes no documento. A seguir veremos exemplos de algumas funcionalidades para manipulação do conteúdo do documento.
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

O [exemplo 1](https://codepen.io/gzitei/pen/abeyWoj) demonstra o comportamento ilustrado acima.
Outra possibilidade é alterar o estilo aplicado a um determinado elemento, utilizando os atributos `style` e `className`. Em nosso [exemplo 2](https://codepen.io/gzitei/pen/mdNMmYR) iniciamos nossa página com um quadrado vermelho e um círculo azul, definidos conforme apresentado pelo código HTML:

```html
<div class="square red"></div>
<div class="circle blue"></div>
```

E CSS:

```css
.square {
  width: 100px;
  height: 100px;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}
```

Utilizando a propriedade `style` modificamos o `backgroud-color` do círculo, para que que ele passe a ser verde:

```javascript
const circle = document.querySelector(".circle");
circle.style.backgroundColor = "green";
```

Alteramos o estilo do quadrado utilizando a propriedade `className` para deixá-lo roxo:

```javascript
const square = document.querySelector(".square");
square.className = "square purple"
```

> [!IMPORTANT]
> JavaScript não oferece suporte ao uso de `kebab-case`, por isso `background-color` é usado em sua versão `camelCase`: `backgroundColor`.
> Além disso, `class` é uma palavra reservada em JavaScript, por isso para alterar o atributo `class` de um elemento, é necessário modificar a propriedade `className`. 

Além disso, é possível também remover elementos da página, utilizando o método `remove`. No [exemplo 3](https://codepen.io/gzitei/pen/RwXZgwK) por exemplo, temos uma tabela que é removida utilizando:

```javascript
const table = document.querySelector("table");
table.remove();
```

Vale observar que o `table.remove()` remove toda a sub-árvore a partir do elemento `<table>`. Existe a possibilidade também de ocultar o elemento do documento, utilizando:

```javascript
const table = document.querySelector("table");
table.style.display = "none";
```

O DOM também oferece recursos para a criação e inserção de novos elementos em uma página. O método `createElement` permite a criação de novos elementos. No exemplo abaixo, criamos um elemento `<p>` e um elemento `<img>`:

```javascript
const firstParagraph = document.createElement("p");
firstParagraph.textContent = "A tabela abaixo apresenta alguns modelos de carros fabricados na década de 1990:";

const img = document.createElement("img");
img.setAttribute("src", "https://ateliedocarro.com.br/wp-content/uploads/2022/08/Escort-1.8I-GL-1994-site-1.jpg");
```

No entanto, a simples criação de elementos não os torna visíveis na página, para isso é necessários que os novos elementos sejam inseridos na árvore do documento. Para isso, o DOM disponibiliza outros métodos:
+ `appendChild`: Este método permite anexar um novo elemento `child` ao elemento indicado. Por exemplo, o código abaixo utiliza os métodos `createElement` e `appendChild` para criar os cabeçalhos de uma tabela:

```javascript
const table = document.createElement("table");
const thead = document.createElement("thead");
const headers = document.createElement("tr");
thead.appendChild(headers);
table.appendChild(thead);

const columns = ["Marca", "Modelo", "Fabricação"];
for (let i = 0; i < columns.length; i++) {
  let th = document.createElement("th");
  th.textContent = columns[i];
  headers.appendChild(th);
}
```
> [!TIP]
> Em JavaScript, podemos iterar por um `array` utilizando o `for` com uma sintaxe muito parecida com a sintaxe do laço `for` em C. O critério de parada para o laço `for` é `columns.length`, que é uma propriedade de `arrays` em JavaScript que representa o número de elementos contidos no `array`.

+ `insertBefore`: Para oferecer mais controle ao inserir novos elementos no DOM, é possível especificar ao elemento `parent` onde antes de qual `sibling` o novo elemento deve ser inserido. No exemplo abaixo, inserimos uma tabela no elemento `content` e logo em seguida, estamos criando um parágrafo, que precisa ser inserido antes da tabela para que o conteúdo faça sentido:

```javascript
const content = document.querySelector("#content");

content.appendChild(table);

const firstParagraph = document.createElement("p");
firstParagraph.textContent = "A tabela abaixo apresenta alguns modelos de carros fabricados na década de 1990:";

content.insertBefore(firstParagraph, table);
```

`append`: Permite a criação de um elemento `sibling`, ou seja, no mesmo nível de hierarquia do elemento especificado. No exemplo a seguir, estamos criando uma imagem no mesmo nível de hierarquia do elemento `content`:

```javascript
const img = document.createElement("img");
img.setAttribute("src", "https://ateliedocarro.com.br/wp-content/uploads/2022/08/Escort-1.8I-GL-1994-site-1.jpg");

content.append(img);
```

Os exemplos acima, bem como o resultado final obtido, podem ser observados em nosso [exemplo 4](https://codepen.io/gzitei/pen/BaXdZdV).
## Referências
+ [WebAssembly | MDN](https://developer.mozilla.org/pt-BR/docs/WebAssembly)
+ [JavaScript e CSS - Aprendendo desenvolvimento web | MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
+ [Node.textContent](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
+ [HTMLElement: style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
+ [Element: className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
+ [Element: remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove)
+ [display: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
+ [Node: insertBefore](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore)
+ [Node.appendChild](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
+ [Element: append](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)