# Projeto Trivia

Este projeto é um jogo de trivia construído com uma stack de desenvolvimento web moderna.

## Tecnologias Utilizadas (Tech Stack)

O projeto utiliza as seguintes tecnologias:

- **[React](https://react.dev/)**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **[Tailwind CSS](https://tailwindcss.com/)**: Um framework CSS utility-first para desenvolvimento rápido de UI.
- **[TanStack Query](https://tanstack.com/query/latest)**: Uma biblioteca poderosa para data-fetching e gerenciamento de estado para React.
- **[React Router](https://reactrouter.com/)**: A biblioteca padrão para roteamento em aplicações React.

## Instalação Local

Para executar o projeto em sua máquina local, siga estes passos:

1.  **Clone o repositório:**

    ```bash
    git clone <url-do-repositorio>
    cd trivia-project
    ```

2.  **Instale o Node.js e o npm:**
    Certifique-se de que você tem o Node.js e o npm instalados. É recomendável instalar um gerenciador de versão do Node como o [nvm](https://github.com/nvm-sh/nvm). Ele permite que você instale e gerencie múltiplas versões do Node.js facilmente.

    **Obs:**

    Se estiver utilizando um sistema operacional **Windows** você pode instalar seguindo o [link](https://github.com/coreybutler/nvm-windows/releases). Clique no arquivo `nvm-setup.exe` em assets e siga para a instalação. Outra opção é instalar o Node pelo [site oficial](https://nodejs.org/en/download/).

    Para garantir que a instalação correu bem use o comando a seguir. Ele deverá mostrar a versão do `nvm` que foi instalada:

    ```bash
    nvm --version
    ```

    **Instalando o Node.js com nvm:**

    a. Primeiro, instale o nvm seguindo as instruções no [repositório oficial](https://github.com/nvm-sh/nvm#installing-and-updating).

    b. Em seguida, instale a versão Long-Term Support (LTS) do Node.js, que é a versão recomendada para a maioria dos usuários e projetos por sua estabilidade.

    ```bash
    nvm install --lts
    ```

    c. Defina a versão LTS recém-instalada como a padrão.

    ```bash
    nvm use --lts
    ```

    Isso garantirá que você tenha uma versão do Node.js estável e compatível para o projeto. O npm é instalado automaticamente com o Node.js.

3.  **Instale as dependências:**
    Este projeto usa `npm ci` para garantir que todos os membros da equipe estejam usando exatamente as mesmas versões de dependência.

    ```bash
    npm ci
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173` (ou outra porta, se a 5173 estiver ocupada).

## Ambiente de Desenvolvimento (Ferramentas e Extensões)

Para garantir a consistência do código e uma melhor experiência de desenvolvimento, recomendamos a instalação das seguintes extensões no seu editor (VS Code):

- **[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)**: Ajuda a manter estilos de codificação consistentes entre diferentes editores e IDEs.
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**: Integra o ESLint no VS Code para encontrar e corrigir problemas no código JavaScript/TypeScript.
- **[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**: Formata o código automaticamente para manter um estilo consistente.

## Guia de Contribuição (GitHub Flow)

Nós seguimos o GitHub Flow para contribuições.

1.  **Sincronize sua branch `main` e crie uma nova branch para sua feature:**

    Antes de iniciar o desenvolvimento de uma nova funcionalidade ou correção, é crucial garantir que você está partindo da versão mais atualizada do código da branch `main`.

    a. Mude para a branch `main`:

    ```bash

    git checkout main

    ```

    b. Puxe as últimas alterações do repositório remoto para sua máquina local:

    ```bash

    git pull origin main

    ```

    c. Agora, crie sua nova branch a partir da `main` que acabou de ser atualizada. Nomeie sua branch de forma descritiva, seguindo o padrão de **Conventional Commits** (ex: `feat/adiciona-pagina-login` ou `fix/bug-autenticacao-usuario`).

    ```bash

    git checkout -b <nome-da-branch>

    ```

    Este processo garante que você está trabalhando sobre o código mais recente e evita potenciais conflitos de merge.

2.  **Faça suas alterações e comite:**
    Faça suas alterações no código e comite-as usando o padrão **Conventional Commits** para suas mensagens de commit. Isso ajuda a manter um histórico de commits claro e descritivo.

    Exemplos de mensagens de commit:
    - `feat: Adiciona funcionalidade de autenticação de usuário`
    - `fix: Corrige cálculo no resumo de pontuação`
    - `docs: Atualiza README com instruções de instalação`

    ```bash
    git add .
    git commit -m "feat: Descreva sua funcionalidade"
    ```

3.  **Envie para o repositório remoto:**

    ```bash
    git push origin <nome-da-branch>
    ```

4.  **Abra um Pull Request:**
    Vá para o repositório do projeto no GitHub e abra um novo Pull Request da sua branch para a branch `main`. Forneça uma descrição clara das alterações que você fez. Seu PR será revisado antes de ser mesclado.

5.  **Padronizando Mensagens de Pull Request:**
    Para manter a clareza e organização, siga o padrão abaixo para os títulos e descrições de seus Pull Requests.

    **Título do Pull Request:**
    Use o mesmo padrão dos Conventional Commits.
    - `feat: Título descritivo da funcionalidade`
    - `fix: Título descritivo da correção`
    - `docs: Título descritivo da alteração na documentação`

    **Descrição do Pull Request:**
    Use o template a seguir para detalhar as alterações:

    ### O que foi feito?

    Descreva em detalhes as alterações que você realizou.
    Ex: "Foi criada a página de login com campos de e-mail e senha e validação de formulário."

    ### Como testar?

    Forneça um passo a passo para que o revisor possa testar suas alterações.
    Ex: "1. Acesse a rota '/login'. 2. Tente submeter o formulário com campos vazios e verifique se as mensagens de erro aparecem. 3. Preencha o formulário com dados válidos e verifique se o login é efetuado."

    ### Links relevantes

    Se houver, adicione links para tarefas no Trello, Figma, etc.
