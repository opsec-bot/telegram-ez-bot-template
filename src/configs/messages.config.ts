const brandsConfig = {
  appName: 'A very cool app name.',
  description: 'An intresting description.',
  features: ['Feature one...', 'Feature two...'],
};

type MessagesType = {
  [lang: string]: {
    start: {
      welcome: string;
      menu: string;
      accountInfo: string;
      redeem: string;
      purchase: string;
      languageSelect: string;
    };
    accountInfo: {
      title: string;
      fields: {
        creationDate: string;
        expirationDate: string;
        creatorID: string;
        license: string;
        telegramID: string;
        total: string;
      };
      returnToStart: string;
    };
    errors: {
      licenseNotFound: string;
      invalidLicense: string;
      alreadyRedeemed: string;
      licenseExpired: string;
      purchaseFailed: string;
    };
    purchase: {
      please: string;
      chooseOption: string;
      week: string;
      month: string;
      lifetime: string;
      backToStart: string;
      selectedPlan: string;
    };
    redeem: {
      enterCode: string;
      cancel: string;
    };
    menu: {
      title: string;
      create: string;
      delete: string;
      lookupLicense: string;
      lookupTelegramID: string;
      languageTitle: string;
      languageSet: string;
    };
    invoice: {
      update: string;
      statusPaid: string;
      statusExpired: string;
      statusDefault: string;
    };
  };
};

export const messages: MessagesType = {
  en: {
    start: {
      welcome: '▶️ Welcome to {{appName}}\n\n{{description}}\n\n**Features**\n {{features}}',
      menu: '📜 Main menu',
      accountInfo: '🔍 Account info',
      redeem: '🎟️ Redeem',
      purchase: '🪪 Purchase',
      languageSelect: '🌐 Select Language',
    },
    accountInfo: {
      title: 'Here is your information:',
      fields: {
        creationDate: 'Creation Date',
        expirationDate: 'Expiration Date',
        creatorID: 'Creator ID',
        license: 'License',
        telegramID: 'Telegram ID',
        total: 'Total',
      },
      returnToStart: '🔙 Return to Start',
    },
    errors: {
      licenseNotFound: 'License does not exist.',
      invalidLicense: 'Invalid license key.',
      alreadyRedeemed: 'License already redeemed.',
      licenseExpired: 'Your license has expired.',
      purchaseFailed: 'Purchase failed. Please try again at a later time.',
    },
    purchase: {
      please: 'Please purchase a license',
      chooseOption: 'Please choose a purchase option:',
      week: 'Week - ${{priceWEEK}} USD',
      month: 'Month - ${{priceMONTH}} USD',
      lifetime: 'Lifetime - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Go back to start',
      selectedPlan:
        'You have selected the {{plan}} plan.\n\nPlease follow the link to complete your purchase: [Pay Now]({{payLink}})\n\nThis invoice will expire at: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'To redeem your license, please enter the code below:',
      cancel: 'Cancel',
    },
    menu: {
      title: 'Choose an option from down below:',
      create: 'Create License',
      delete: 'Delete License',
      lookupLicense: 'Lookup License',
      lookupTelegramID: 'Lookup Telegram ID',
      languageTitle: 'Select your preferred language from below:',
      languageSet: 'Language set to English.',
    },
    invoice: {
      update: 'Invoice update:',
      statusPaid:
        'Invoice update:\n\nStatus: {{status}}\nMessage: Payment received successfully for order #{{trackId}}.\nHere is your license: `{{license}}`',
      statusExpired: '⌛️ Your Invoice #{{trackId}} has expired. ❌❌',
      statusDefault:
        "Invoice update:\n\nStatus: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nAmount due: $' + amount + ' ' + currency : ''}}",
    },
  },

  es: {
    start: {
      welcome:
        '▶️ Bienvenido a {{appName}}\n\n{{description}}\n\n**Características**\n {{features}}',
      menu: '📜 Menú principal',
      accountInfo: '🔍 Información de la cuenta',
      redeem: '🎟️ Canjear',
      purchase: '🪪 Comprar',
      languageSelect: '🌐 Seleccionar idioma',
    },
    accountInfo: {
      title: 'Aquí está tu información:',
      fields: {
        creationDate: 'Fecha de creación',
        expirationDate: 'Fecha de expiración',
        creatorID: 'ID del creador',
        license: 'Licencia',
        telegramID: 'Telegram ID',
        total: 'Total',
      },
      returnToStart: '🔙 Volver al inicio',
    },
    errors: {
      licenseNotFound: 'La licencia no existe.',
      invalidLicense: 'Clave de licencia inválida.',
      alreadyRedeemed: 'La licencia ya ha sido canjeada.',
      licenseExpired: 'Tu licencia ha expirado.',
      purchaseFailed: 'Compra fallida. Inténtalo de nuevo más tarde.',
    },
    purchase: {
      please: 'Por favor, compra una licencia',
      chooseOption: 'Por favor, elige una opción de compra:',
      week: 'Semana - ${{priceWEEK}} USD',
      month: 'Mes - ${{priceMONTH}} USD',
      lifetime: 'De por vida - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Volver al inicio',
      selectedPlan:
        'Has seleccionado el plan {{plan}}.\n\nPor favor, sigue el enlace para completar tu compra: [Pagar ahora]({{payLink}})\n\nEsta factura expirará a las: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Para canjear tu licencia, ingresa el código a continuación:',
      cancel: 'Cancelar',
    },
    menu: {
      title: 'Elige una opción de abajo:',
      create: 'Crear Licencia',
      delete: 'Eliminar Licencia',
      lookupLicense: 'Buscar Licencia',
      lookupTelegramID: 'Buscar Telegram ID',
      languageTitle: 'Selecciona tu idioma preferido:',
      languageSet: 'Idioma establecido a Español.',
    },
    invoice: {
      update: 'Actualización de factura:',
      statusPaid:
        'Actualización de factura:\n\nEstado: {{status}}\nMensaje: Pago recibido correctamente para el pedido #{{trackId}}.\nAquí está tu licencia: `{{license}}`',
      statusExpired: '⌛️ La factura #{{trackId}} ha expirado. ❌❌',
      statusDefault:
        "Actualización de factura:\n\nEstado: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nCantidad debida: $' + amount + ' ' + currency : ''}}",
    },
  },

  ru: {
    start: {
      welcome:
        '▶️ Добро пожаловать в {{appName}}\n\n{{description}}\n\n**Особенности**\n {{features}}',
      menu: '📜 Главное меню',
      accountInfo: '🔍 Информация аккаунта',
      redeem: '🎟️ Активировать',
      purchase: '🪪 Купить',
      languageSelect: '🌐 Выбрать язык',
    },
    accountInfo: {
      title: 'Вот ваша информация:',
      fields: {
        creationDate: 'Дата создания',
        expirationDate: 'Дата окончания',
        creatorID: 'ID создателя',
        license: 'Лицензия',
        telegramID: 'Telegram ID',
        total: 'Итого',
      },
      returnToStart: '🔙 Вернуться к началу',
    },
    errors: {
      licenseNotFound: 'Лицензия не существует.',
      invalidLicense: 'Неверный ключ лицензии.',
      alreadyRedeemed: 'Лицензия уже активирована.',
      licenseExpired: 'Ваша лицензия истекла.',
      purchaseFailed: 'Покупка не удалась. Пожалуйста, попробуйте позже.',
    },
    purchase: {
      please: 'Пожалуйста, купите лицензию',
      chooseOption: 'Пожалуйста, выберите вариант покупки:',
      week: 'Неделя - ${{priceWEEK}} USD',
      month: 'Месяц - ${{priceMONTH}} USD',
      lifetime: 'Пожизненно - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Вернуться к началу',
      selectedPlan:
        'Вы выбрали план {{plan}}.\n\nПожалуйста, перейдите по ссылке для завершения покупки: [Оплатить сейчас]({{payLink}})\n\nСрок действия счета истекает: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Чтобы активировать лицензию, введите код ниже:',
      cancel: 'Отмена',
    },
    menu: {
      title: 'Выберите опцию ниже:',
      create: 'Создать лицензию',
      delete: 'Удалить лицензию',
      lookupLicense: 'Поиск лицензии',
      lookupTelegramID: 'Поиск Telegram ID',
      languageTitle: 'Выберите предпочитаемый язык:',
      languageSet: 'Язык установлен на Русский.',
    },
    invoice: {
      update: 'Обновление счета:',
      statusPaid:
        'Обновление счета:\n\nСтатус: {{status}}\nСообщение: Платеж успешно получен для заказа #{{trackId}}.\nВот ваша лицензия: `{{license}}`',
      statusExpired: '⌛️ Счет #{{trackId}} истек. ❌❌',
      statusDefault:
        "Обновление счета:\n\nСтатус: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nСумма к оплате: $' + amount + ' ' + currency : ''}}",
    },
  },
};

