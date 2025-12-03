
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { globSync } from 'glob';

// Obtém o diretório do módulo atual (a pasta 'frontend')
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Encontra todos os arquivos .html na pasta 'frontend'
const htmlFiles = globSync(resolve(__dirname, '*.html'));

// Cria o objeto de entrada para o Rollup, mapeando cada arquivo HTML
// Ex: { index: '/caminho/para/frontend/index.html', contato: '/caminho/para/frontend/contato.html' }
const input = Object.fromEntries(
  htmlFiles.map(file => [
    // Extrai o nome do arquivo sem a extensão para usar como chave
    // Ex: 'index' de '/caminho/para/frontend/index.html'
    file.split('/').pop().slice(0, -5), // .html tem 5 caracteres
    file,
  ])
);

export default defineConfig({
  // Define a raiz do projeto como a pasta 'frontend'
  root: __dirname,

  // Configurações do processo de build
  build: {
    // Define o diretório de saída para 'dist' DENTRO da pasta root ('frontend')
    // O resultado final será 'frontend/dist', que corresponde ao firebase.json
    outDir: 'dist',

    // Limpa o diretório de saída antes de cada build
    emptyOutDir: true,

    // Configura o Rollup para uma Aplicação de Múltiplas Páginas (MPA)
    rollupOptions: {
      input: input,
    },
  },
});
