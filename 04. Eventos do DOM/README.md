# Eventos do DOM
## Sumário
1. [Definição](#definição)
2. [_Event Listeners_ e _Event Handlers_](#_event-listeners_-e-_event-handlers_)
3. [Referências](#referências)
## Definição
Eventos são ações ou ocorrências que acontecem dentro do navegador. Estes eventos podem disparar gatilhos associados a estas ações e aos elementos onde eles ocorrem. Nós, desenvolvedores, podermos registrar ouvintes de eventos (_event listeners_) e associá-los a manipuladores de eventos (_event handlers_), para oferecer mais interatividade para o usuário em nossas páginas.
Existem diversos tipos de eventos, que podem estar associados a:
+ Uma ação do usuário na página: um clique do mouse, uma tecla pressionada ou até mesmo um movimento do mouse.
+ Uma ocorrência da página: o término do carregamento do conteúdo, um envio de formulário, um erro.
+ Um conteúdo da página: um vídeo sendo reproduzido ou finalizando sua execução e até mesmo interrompido.
Outros tipos de eventos podem ser consultados [aqui](https://www.w3schools.com/jsref/dom_obj_event.asp).
## _Event Listeners_ e _Event Handlers_
Um _event listener_ é um mecanismo que identifica quando um evento específico ocorre e inicia uma função, _event handler_, associada para tratar o evento.
É possível definir _event listeners_ em uma tag html, como no [exemplo](https://codepen.io/gzitei/pen/eYqEaoQ) a seguir:

```html
<script>
	function eventHandler() {
	  alert('A função event handler foi executada!');
	}
</script>
<button onclick="eventHandler()"> Clique aqui! </button>
```

Outra forma, e mais comum, de uso de _event listeners_ é definir um _event listener_ usando JavaScript. O [exemplo](https://codepen.io/gzitei/pen/oNKerzx) a seguir é equivalente ao exemplo anterior, porém utiliza o método `addEventListener`, que recebe como argumentos um string, que representa o evento, e uma função de `callback`, o _event handler_.

```html
<script>
	function eventHandler() {
	  alert('A função event handler foi executada!');
	}
	const button = document.querySelector("button");
	button.addEventListener("click", eventHandler);
</script>
<button> Clique aqui! </button>
```

Existem formas alternativas para o exemplo acima, que são mais comuns de encontrar, utilizando o conceito de `arrow functions`:

```javascript
<script>
	const eventHandler = () => alert('A função event handler foi executada!');
	const button = document.querySelector("button");
	button.addEventListener("click", eventHandler);
</script>
<button> Clique aqui! </button>
```

ou ainda, utilizando `funções anônimas`, ou seja, funções não nomeadas:

```javascript
<script>
	const button = document.querySelector("button");
	button.addEventListener("click", () => {
		alert('A função event handler foi executada!');
	});
</script>
<button> Clique aqui! </button>
```
## _Event Capturing_ e _Event Bubbling_
//TODO
## Referências
+ [Introdução aos eventos](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
+ [HTML DOM Event Object](https://www.w3schools.com/jsref/dom_obj_event.asp)
+ [Creating and triggering events](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events)