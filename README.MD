# Introdução ao jQuery

O jQuery é uma biblioteca JavaScript capaz de adicionar interatividade e dinamismo às páginas web com objetivo de fazer isso de forma simplificada, o que é aderente ao seu lema que é Write less, do more. A biblioteca foi criada dentro dos Padrões Web estipulados pela W3C, por este motivo é uma biblioteca multi-plataforma, ou seja, é compatível com qualquer navegador de internet.Dê uma conferida na documentação oficial no site deles: [jQuery.com](https://jquery.com/).

## O que é uma Biblioteca de Javascript?

Uma biblioteca é um arquivo de JavaScript que contém um monte de funções, e essas funções realizam alguma tarefa útil para sua página web.

> “O foco principal da biblioteca jQuery é a simplicidade. Por que submeter os desenvolvedores ao martírio de escrever longos e complexos códigos para criar simples efeitos?” – *John Resig.*

## Alguns motivos para usar o jQuery na sua aplicação

1. jQuery promove simplicidade
2. Os elementos do jQuery são exibidos mesmo quando o JavaScript está desabilitado
3. O jQuery integra-se facilmente ao IDE do Visual Studio
4. jQuery faz aplicativos animados
5. As páginas do jQuery são carregadas mais rapidamente

## O que é DOM?

Um dos mais importantes aspectos do JavaScript e desse modo jQuery, é a manipulação do **DOM**. O DOM significa **Document Object Model**, em português Modelo de Objeto de Documento, e é um mecanismo para representação e interação com nossos documentos HTML, XHTML ou XML

---

## Primeiros passos com jQuery

### 1. Instalação

Adicionar o script abaixo no header do documento index.html

```script

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

````

### 2. Preparar o documento

O código abaixo deve ser adicionado logo no ínicio do código jQuery. Esse comando verifica se documento já foi carregado e é considerado uma boa prática.

```jquery

$('document').ready(function() {
    Código aqui
});

```
### 3. Sintaxe Principal 

A sintaxe do jQuery é personalizada para selecionar elementos HTML e executar alguma ação no(s) elemento(s).

```jquery

$('seletor').ação();

```

* O sinal de $ é usado para definir/acessar o jQuery.
* O seletor é usado para "consultar (ou localizar)" os elementos HTML (classes, tags ou ids).
* A ação jQuery () é o que será executado no(s) elemento(s).

---

## Principais Eventos e Efeitos

### 1. Efeitos jQuery  - Hide and Show

Os efeitos mais básicos do jQurey usados para esconder, mostrar ou mostrar/esconder um conteúdo.

* hide()
* show()
* toggle()

### 2. Efeitos de Fading

Com o jQuery, você pode diminuir ou diminuir a visibilidade de elementos.
* fadeInI()
* fadeOut()
* fadeToggle()
* fadeTo()

### 3. Principais eventos

Os métodos de evento acionam ou anexam uma função a um manipulador de eventos para os elementos selecionados. Alguns dos mais utilizados são:

* click()
* keyup()
* keydown()
* hover()
* submit()

A lista completa com os eventos disponíveis no jQuery pode ser vista aqui: [Lista de Eventos](https://www.w3schools.com/jquery/jquery_ref_events.asp).







