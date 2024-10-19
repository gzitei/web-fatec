# Acessando elementos do DOM

## Sumário
1. [Acessando o DOM](#acessando-o-dom)
2. [Acessando elementos](#acessando-elementos)
3. [Seletores CSS](#seletores-css)
4. [Subconsultas](#subconsultas)
5. [Hierarquia entre nós](hierarquia-entre-nós)
6. [Percorrendo elementos do DOM](#percorrendo-elementos-do-dom)
7. [Referências](#referências)
## Acessando o DOM
O objeto do DOM é exposto pelo navegador por intermédio da palavra chave `document` e é a partir deste objeto que teremos acesso ao métodos e atributos que compõem o DOM.
## Acessando elementos
Para acessar um elemento ou uma coleção de elementos, o navegador utiliza algum atributo do elemento para identificá-lo na árvore que representa o documento. Para isso, existem alguns métodos:
* `document.getElementById("id-do-elemento")`: retorna o elemento, do tipo , cujo atributo `id` tenha o valor especificado. Por exemplo, `document.getElementById("foo")` retorna o elemento, do tipo [Element](https://developer.mozilla.org/pt-BR/docs/Web/API/Element), que possua o atributo `id` igual a `foo`.
* `document.getElementsByClassName("classe-do-elemento")`: identifica todos os elementos com a classe especificada e retorna uma coleção de elementos. Por exemplo, `document.getElementsByClassName("bar")` retorna uma coleção, do tipo [HTMLCollection](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCollection), com todos os elementos cujo atributo `class` tenha o valor `bar`.

> [!CAUTION]
> `document.getElementsByClassName` retorna uma coleção viva de elementos, ou seja, essa coleção é atualizada conforme as modificações no DOM.

* `document.getElementsByTagName("tag-do-elemento")`: identifica todos os elementos com a tag especificada e retorna uma coleção de elementos, do tipo [HTMLCollection](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCollection). Por exemplo, `document.getElementsByTagName("p")` retorna uma coleção com todos os elementos que representam um parágrafo (`<p>`) na página.
* `document.querySelector("seletor-css")`: identifica e retorna o primeiro elemento da página, do tipo [Element](https://developer.mozilla.org/pt-BR/docs/Web/API/Element), que corresponda ao seletor CSS especificado.
* `document.querySelectorAll("seletor-css")`: identifica e retorna uma coleção de elementos da página, do tipo [NodeList](https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList), que correspondam ao seletor escolhido. 
  
> [!TIP]
> Os tipos listados acima ([Element](https://developer.mozilla.org/pt-BR/docs/Web/API/Element), [HTMLCollection](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCollection) e  [NodeList](https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList)) fazem parte da API do DOM e são classes JavaScript e, portanto, implementam seus próprios atributos e métodos. Veremos alguns atributos e métodos ao longo do material, porém as documentações estão linkadas no material para consulta mais aprofundada.
## Seletores CSS
[Seletores CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_selectors) são responsáveis por informar ao navegador a quais elementos da página determinadas regras de estilo devem ser aplicadas. Por exemplo, o seletor CSS que identifica um elemento com id `foo`, é o seletor `#foo`. Da mesma form, para identificar os elementos da classe `bar`, pode-se utilizar o seletor `.bar` e elementos da tag `h1` podem ser identificados pelo seletor `h1`.
Para identificar elementos por qualquer outro valor de atributo pode-se utilizar o seletor `[atributo="valor"]`. Desta forma, para identificar uma caixa de seleção de uma página, pode-se utilizar o seletor `[type="checkbox"]`.
## Subconsultas
Como o DOM é uma árvore, é possível extrair sub-árvores a partir da árvore original, por exemplo, dado o documento HTML abaixo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Documento</title>
</head>
<body>
  <article>
    <h1>Documento</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil?</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam tempore voluptas reiciendis rerum
      consectetur. Quia voluptas accusamus harum tempore.</p>
    <img src="./img.png"></img>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia blanditiis magni dicta?</p>
    <table>
      <thead>
        <tr>
          <th>Campo</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>1</td>
        </tr>
        <tr>
          <td>B</td>
          <td>2</td>
        </tr>
        <tr>
          <td>C</td>
          <td>3</td>
        </tr>
      </tbody>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad neque officia obcaecati impedit eligendi
        perferendis aliquid laborum placeat pariatur!</p>
    </table>
  </article>
</body>
</html>
```

Podemos simplificar o documento representando-o pela seguinte árvore:

```mermaid
graph LR
	subgraph document
		direction LR
		A[html] --> B[head]
		A --> C[body]
		C --> D[article]
		D[article] --> E[h1] --> Titulo
		D --> F[p] --> G[Parágrafo 1]
		D --> H[p] --> I[Parágrafo 2]
		D --> J[img] --> K[Imagem]
		D --> L[p] --> M[Parágrafo 3]
		D --> N[table] --> a[table]
		D --> O[p] --> P[Parágrafo 4]
end
```

> [!NOTE]
> Em JavaScript, uma variável pode ser declarada utilizando uma das palavras chaves: `var`, `let`, `const`. De modo geral, `const` é utilizada para variáveis constantes, ou seja, que não serão redefinidas ao longo do ciclo de vida do programa, já `let` e `var` podem ser utilizadas para variáveis que poderão ser redefinidas.
> Outra diferença entre os usos é que enquanto `let` e `const` definem variáveis com escopo de bloco, `var` define variáveis com escopo de função ou global.

É possível destacar a sub-árvore que representa o artigo (`<article>`) utilizando:

```javascript
const artigo = document.querySelector("article")
```

ou

```javascript
const artigo = document.getElementsByTagName("article")[0]
```
> [!NOTE]
> A sintaxe do JavaScript é baseada nas sintaxes de C e Java.
> Da mesma forma como em C utilizamos o índice de um elemento em um vetor para retornar o elemento:
> Este exemplo em C:
> ```c
> int nums[] = {25, 50, 75, 100};
> n = nums[2];
> printf("%d", n);
> // 75
> ```
> Pode ser escrito em JavaScript como:
> ```javascript
> const nums = [25, 50, 75, 100];
> const n = nums[2];
> console.log(n);
> // 75
> ```
> HTMLCollection é __similar__ a um vetor, também chamado de _array_, portanto HTMLCollection[0] retorna o primeiro elemento da coleção.

As duas operações são equivalentes e resultarão no diagrama demonstrado abaixo, note que a raiz da sub-árvore `artigo` passa a ser a tag `article`:

```mermaid
graph LR
subgraph document
    direction LR
    subgraph artigo
        direction LR
        D[article] --> E[h1] --> Titulo
        D --> F[p] --> G[Parágrafo 1]
        D --> H[p] --> I[Parágrafo 2]
        D --> J[img] --> K[Imagem]
        D --> L[p] --> M[Parágrafo 3]
        D --> N[table] --> a[table]
        D --> O[p] --> P[Parágrafo 4]
    end
    A[html] --> B[head]
    A --> C[body]
    C --> D
end
```

Da mesma forma, partindo da sub-árvore `artigo` é possível extrair uma sub-árvore `tabela` a partir de `artigo` utilizando:

```javascript
const tabela = artigo.querySelector("table")
```

A operação acima resultaria na seguinte sub-árvore:

```mermaid
graph LR
subgraph artigo
    direction LR
        subgraph table
            direction LR
            a[table] --> b[thead] --> c[tr] --> d[th] --> Campo
            c --> p[th] --> Valor
            a --> f[tbody] --> g[tr] --> h[td] --> A
            g --> q[td] --> 1
            f --> j[tr] --> k[td] --> B
            j --> i[td] --> 2
            f --> r[tr] --> s[td] --> C
            r --> t[td] --> 3

        end
        D[article] --> E[h1] --> Titulo
        D --> F[p] --> G[Parágrafo 1]
        D --> H[p] --> I[Parágrafo 2]
        D --> J[img] --> K[Imagem]
        D --> L[p] --> M[Parágrafo 3]
        D ----> a
        D --> O[p] --> P[Parágrafo 4]
    end
```

> [!TIP]
> Também é possível extrair a sub-árvore `tabela` a partir do `document` utilizando `document.querySelector("table")`

## Hierarquia entre nós
Existe uma relação hierárquica entre os nós da árvore que pode ser descrita utilizando os termos `parent`, `child` e `sibling`, que se referem à posição relativa do nó descrito em relação ao nó de referência.
Retomando o exemplo da seção anterior, vamos tomar por referência o elemento `<article>` e classificar os nós da árvore com relação ao elemento de referência:

```mermaid
graph TD
	D[article] --> E[h1] --> Titulo
	D --> F[p] --> G[Parágrafo 1]
	D --> H[p] --> I[Parágrafo 2]
	D --> J[img] --> K[Imagem]
	D --> L[p] --> M[Parágrafo 3]
	D --> table --> Q[Tabela]
	D --> O[p] --> P[Parágrafo 4]
A[body] --> D
html --> A
style D fill:blue;
```

Com relação ao elemento `article`, pode-se dizer que:
+ `body`: é elemento `parent` de `article`, porque `article` está contido dentro de `body`.
+ `h1`, `p`, `img` e `table`: são elementos `child` de `article`, porque estão contidos dentro de `article`.
+ `article` não possui `sibling` porque não existem outros elementos contidos dentro de `body` no mesmo nível da árvore que o elemento `article`. No entanto, é possível afirmar que os elementos `h1`, `p`, `img` e `table`apresentam relação de `sibling` entre si, porque estão contidos em `article` e ocupam o mesmo nível dentro da árvore, ou seja, compartilham o mesmo nó `parent`.
## Percorrendo elementos do DOM
Utilizando-se da relação hierárquica entre nós, é possível navegar entre eles utilizando as propriedades dos nós. Para exemplificar, vamos utilizar o nó artigo:

```javascript
const artigo = document.querySelector("article");
```

+ `parentElement`: retorna o elemento `parent` do elemento indicado, neste caso, retornaria o `body`
```javascript
const body = artigo.parentElement;
```
+ `children`: retorna uma coleção _viva_ de elementos `child` do elemento especificado. No exemplo em tela, retornaria os nós `h1`, `p`, `img` e `table` contidos em `article`:
```javascript
const content = artigo.children;
```
+ `firstElementChild`: retorna o elemento do primeiro filho. No nosso exemplo, retornaria o nó do elemento `h1`;
```javascript
const h1 = artigo.firstElementChild;
```
+ `lastElementChild`:  retorna o elemento referente ao último filho. Neste caso, representado pelo último parágrafo do texto.
```javascript
const lastParagraph = artigo.lastElementChild;
```
+ `nextElementSibling`: retorna o próximo elemento irmão do elemento especificado ou `null`, caso o elemento em questão seja o último. A propriedade `nextElementSibling` aplicada ao elemento `lastParagraph` retornaria `null`.
```javascript
const firstParagraph = h1.nextElementSibling;
```
+ `previousElementSibling`: retorna o elemento anterior ao elemento especificado ou `null` caso o elemento indicado seja o primeiro. Portanto, caso aplicada ao elemento `h1`, retornaria `null`, já quando aplicada ao elemento `lastParagraph`, retornaria o elemento `table`.
```javascript
const table = lastParagraph.previousElementSibling;
```
## Referências
+ [CSS Selectors](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_selectors)
+ [Resumo: métodos de acesso DOM](https://pt.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-access/a/summary-dom-access-methods)
+ [Element](https://developer.mozilla.org/pt-BR/docs/Web/API/Element)
+ [HTMLCollection](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCollection)
+ [NodeList](https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList)
+ [var, let e const – Qual é a diferença?](https://www.freecodecamp.org/portuguese/news/var-let-e-const-qual-e-a-diferenca/)
+ [JavaScript DOM Navigation](https://www.w3schools.com/js/js_htmldom_navigation.asp)
+ [Node: parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
+ [Element: children](https://developer.mozilla.org/en-US/docs/Web/API/Element/children)
+ [Element: firstElementChild](https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild)
+ [Element: lastElementChild](https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild)
+ [Element: nextElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling)
+ [Element: previousElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling)