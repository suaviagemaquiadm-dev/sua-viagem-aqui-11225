# Firebase Studio

Este é um projeto NextJS no Firebase Studio.

---

## Como Conectar a um Novo Repositório e Publicar (Método Definitivo)

Se o processo de `git push` falhou e o repositório está confuso, a melhor solução é começar com uma conexão limpa.

### Passo 1: Crie um Novo Repositório Vazio no GitHub

1.  Acesse [github.com/new](https://github.com/new).
2.  Dê um nome ao seu novo repositório (ex: `meu-site-viagem`).
3.  Deixe-o como **Público**.
4.  **NÃO** marque nenhuma opção como "Add a README file", "Add .gitignore", ou "Choose a license".
5.  Clique em **"Create repository"**.
6.  Na próxima página, o GitHub mostrará a URL do seu repositório. Copie a URL HTTPS. Ela será parecida com: `https://github.com/seu-usuario/nome-do-repositorio.git`.

### Passo 2: Execute os Comandos no Terminal (um de cada vez)

Abra o terminal na pasta do projeto e execute os seguintes comandos na ordem exata.

**1. Limpe a Configuração Antiga:**
Este comando remove a conexão quebrada com o repositório antigo.

```bash
git remote remove origin
```
*(Se der um erro "No such remote: origin", não se preocupe e continue).*

**2. Adicione Todos os Arquivos:**
Prepara todos os arquivos do projeto.

```bash
git add .
```

**3. Salve as Alterações (Commit):**
Cria um registro final.

```bash
git commit -m "Versao final para novo repositorio"
```
*(Se disser "nothing to commit", pode continuar).*

**4. Conecte ao Novo Repositório:**
**Substitua a URL abaixo pela URL do seu novo repositório** que você copiou no Passo 1.

```bash
git remote add origin https://github.com/suaviagemaquiadm-dev/sua-viagem-aqui-11225.git
```

**5. Envie o Código e Publique:**
Este é o comando final. A flag `-f` é necessária para forçar o envio a um repositório novo e vazio.

```bash
git push -u -f origin main
```

Após este último comando, o terminal deve pedir a autenticação via navegador com o código de 8 dígitos. Autorize, e o site será publicado.
