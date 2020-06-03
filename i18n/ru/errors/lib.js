const codes = require('../../../errors/lib');

module.exports = {
  [codes.NO_REPO]: 'Не указан репозиторий данных.',
  [codes.NO_CLASSNAME]: 'Не указано имя публикуемого класса',
  [codes.NO_DIR]: 'Не указана директория контента.',
  [codes.NO_DS]: 'Не указан источник данных репозитория мета-данных портала',
  [codes.WRONG_FILE]: 'Не удалось прочитать содержимое файла %file',
  [codes.WRONG_TYPES]: 'Запрошены ресурсы неподдерживаемого типа %type',
  [codes.WRONG_TYPE]: 'Запрошен ресурс неподдерживаемого типа %type'
};
