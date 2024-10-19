# Interagindo com o DOM

## Sumário
1. [Acessando o DOM](#acessando-o-dom)
3. [Acessando elementos](#acessando-elementos)
4. [Referências](#referências)

## Acessando o DOM
O objeto do DOM é exposto pelo navegador por intermédio da palavra chave `document` e é a partir deste objeto que teremos acesso ao métodos e atributos que compõem o DOM.
## Acessando elementos
Para acessar um elemento ou uma coleção de elementos, o navegador utiliza algum atributo do elemento para identificá-lo na árvore que representa o documento. Para isso, existem alguns métodos:
* `document.getElementById("id-do-elemento")`: retorna o elemento cujo atributo `id` tenha o valor especificado. Por exemplo, `document.getElementById("foo")` retorna o elemento que possua o atributo `id` igual a `foo`.
* `document.getElementsByClassName("classe-do-elemento")`: identifica todos os elementos com a classe especificada e retorna uma coleção de elementos. Por exemplo, `document.getElementsByClassName("bar")` retorna uma coleção com todos os elementos cujo atributo `class` tenha o valor `bar`
* `document.getElementsByTagName("tag-do-elemento")`: identifica todos os elementos com a tag especificada e retorna uma coleção de elementos. Por exemplo, `document.getElementsByTagName("p")` retorna uma coleção com todos os elementos que representam um parágrafo (`<p>`) na página.
* `document.querySelector("seletor-css")`: identifica e retorna o primeiro elemento da página que corresponda ao seletor css espeficado.
* `document.querySelectorAll("seletor-css")`: identifica e retorna uma coleção de elementos da página que correspondam ao seletor escolhido.

> [!NOTE]
> [Seletores CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_selectors) são responsáveis por informar ao navegador a quais elementos da página determinadas regras de estilo devem ser aplicadas. Por exemplo, o seletor CSS que identifica um elemento com id `foo`, é o seletor `#foo`. Da mesma form, para identificar os elementos da classe `bar`, pode-se utilizar o seletor `.bar` e elementos da tag `h1` podem ser identificados pelo seletor `h1`.
> Para identificar elementos por qualquer outro valor de atributo pode-se utilizar o seletor `[atributo="valor"]`. Desta forma, para identificar uma caixa de seleção de uma página, pode-se utilizar o seletor `[type="checkbox"]`.  

## Referências
[CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)
[Resumo: métodos de acesso DOM](https://pt.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-access/a/summary-dom-access-methods)