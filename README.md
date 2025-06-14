# FarmaNow - Farmácia Digital

![FarmaNow Main Page](https://i.postimg.cc/SxrWPh4Y/FarmaNow.png)

FarmaNow é uma aplicação web intuitiva para gerenciamento e controle de produtos de farmácia, construída com React e Spring Boot. Ela permite que os usuários cadastrem, atualizem e excluam categorias e produtos, visualizem atualizações recentes de forma simples e eficiente.

## ✨ Funcionalidades

O sistema oferece uma visão completa e detalhada da farmácia:

* **Website Interativo:** Navegação fluida e intuitiva pela aplicação:
    * **Produtos:** Gerencie os produtos da farmácia de forma prática e direta pela interface web.
    * **Categorias:** Organize os produtos em categorias personalizadas, como medicamentos, itens de higiene, medicamentos com prescrição, entre outros.
* **Listagem de Categorias:** Visualize todas as categorias em uma tabela clara e organizada com informações essenciais.
* **Cadastro de Categorias:** Adicione novas categorias à loja através de um formulário simples e direto.

![Demonstração: Adicionar Produto](https://i.postimg.cc/X73JZyMd/Anima-o.gif)

* **Edição e Exclusão:** Atualize informações de categorias ou remova aquelas que não fazem mais parte do estoque.
* **Interface Limpa e Responsiva:** Experiência agradável em diferentes dispositivos, adaptada para múltiplos tamanhos de tela.

### 🔧 Funcionalidades a Implementar

* **Exibição de Produtos no Frontend:** O cadastro de produtos já está implementado no backend, mas ainda falta integrá-lo ao frontend. Essa é a única funcionalidade pendente no momento.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com uma stack moderna, performática e escalável:

* **Frontend:**
    * [**React**](https://reactjs.org/) - Biblioteca para construção de interfaces de usuário.
    * [**Tailwind CSS**](https://tailwindcss.com/) - Framework de utilitários para estilização rápida e responsiva.
* **Backend & Banco de Dados:**
    * [**Spring Boot**](https://spring.io/projects/spring-boot) - Framework Java para aplicações web robustas e seguras.
    * [**MySQL**](https://www.mysql.com/) - Banco de dados relacional utilizado para persistência dos dados.

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local.

```bash
# 1. Clone o repositório
git clone [https://github.com/GiulioArantes/farmaNow.git](https://github.com/GiulioArantes/farmaNow.git)

# 2. Navegue até o diretório do projeto
cd farmaNow

# 3. Instale as dependências
yarn

# 4. Configure as variáveis de ambiente
# Renomeie o arquivo .env.example para .env.local
cp .env.example .env.local

# 5. Inicie o servidor de desenvolvimento
yarn dev
```
> ⚠️ **Observação:** Para que a aplicação funcione corretamente, é necessário que o backend esteja rodando.
> Você pode acessar o repositório do backend clicando [aqui](https://github.com/GiulioArantes/farmaNow-backend).

## 🤝 Contribuição

Este projeto está aberto a melhorias e sugestões. Se você tiver alguma ideia, feedback ou quiser propor alguma nova funcionalidade, será um prazer ouvir você!

Você pode contribuir de duas formas:
* **Sugestões e ideias:** Entre em contato diretamente comigo através do e-mail [giulio.arantes@icloud.com](giulio.arantes@icloud.com) ou pelo meu [LinkedIn](https://www.linkedin.com/in/giulio-arantes/).
* **Contribuição direta no código:** Sinta-se à vontade para forkar o repositório, criar suas melhorias e abrir um pull request. Toda contribuição será analisada com atenção e respeito.

A colaboração é sempre bem-vinda — seja para resolver bugs, implementar novas funcionalidades ou simplesmente melhorar a documentação.
