# ⚖️ Calculadora de IMC

Este é um projeto prático de uma **Calculadora de Índice de Massa Corporal (IMC)**, desenvolvido para fornecer uma classificação rápida da condição física do usuário com base no peso e altura.



## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando o trio fundamental do desenvolvimento Web:

* **HTML5:** Para a estrutura semântica dos inputs e botões.
* **CSS3:** Para o layout moderno, centralização com Flexbox e efeitos de sombra.
* **JavaScript (ES6+):** Para a lógica de cálculo, validação de dados e manipulação de elementos da página (DOM).

## 📋 Funcionalidades

- **Validação:** Verifica se todos os campos (Nome, Altura e Peso) foram preenchidos antes de calcular.
- **Cálculo Preciso:** Utiliza a fórmula matemática oficial do IMC.
- **Feedback Visual:** Exibe o resultado com uma classificação personalizada (Peso ideal, Obesidade, etc.).
- **Design Responsivo:** Interface limpa e centralizada para facilitar o uso.

## ⚙️ Como Executar o Projeto

Como este projeto não depende de compiladores ou servidores complexos, ele pode ser executado facilmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-seu-repositorio.git](https://github.com/seu-usuario/nome-do-seu-repositorio.git)
    ```
2.  **Acesse a pasta:**
    ```bash
    cd seu-repositorio
    ```
3.  **Abra o arquivo principal:**
    Basta dar um duplo clique no arquivo `index.html` ou arrastá-lo para dentro do seu navegador.

---

## 📊 Tabela de Classificação

O sistema utiliza os seguintes parâmetros para o resultado:

| IMC | Classificação |
| :--- | :--- |
| Menor que 18.5 | Abaixo do peso |
| Entre 18.5 e 24.9 | Peso ideal |
| Entre 25.0 e 29.9 | Levemente acima do peso |
| Entre 30.0 e 34.9 | Obesidade Grau I |
| Entre 35.0 e 39.9 | Obesidade Grau II |
| Acima de 40.0 | Obesidade Grau III (Mórbida) |

---

## 🛠️ Estrutura de Arquivos

```text
├── index.html   # Estrutura da página
├── style.css    # Estilização e cores
└── index.js     # Lógica e cálculos em JavaScript
