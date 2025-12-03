// src/cache.js

/**
 * Define um valor no localStorage com um tempo de vida (TTL).
 * @param {string} key - A chave para armazenar o valor.
 * @param {any} value - O valor a ser armazenado.
 * @param {number} ttl - O tempo de vida em milissegundos.
 */
export function setWithTTL(key, value, ttl) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

/**
 * Obtém um valor do localStorage se ele não tiver expirado.
 * @param {string} key - A chave do valor a ser obtido.
 * @returns {any|null} - O valor armazenado ou null se expirado ou não existir.
 */
export function getWithTTL(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
