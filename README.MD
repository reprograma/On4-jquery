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



```jquery

$('seletor').ação();

```
---

## Principais Eventos e Efeitos


