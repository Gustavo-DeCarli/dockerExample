"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const mongoose_1 = require("mongoose");
/**
 * @summary Classe abstrata para criação das models
 * @type titulo {String} título
 * @type texto {String} texto ou descrição
 * @type imagem {String} imagem default ou avatar
 * @type dataPublicacao {Date} data de publicação
 * @type tags {String} tags relacionada a model
 * @type link {String} link do conteúdo Ex.: https://conteudo.com.br
 * @type ativo {Boolean} status
 */
class Core extends mongoose_1.Document {
}
exports.Core = Core;
