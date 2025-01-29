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
        expirationDate: 'Fecha de vencimiento',
        creatorID: 'ID del creador',
        license: 'Licencia',
        telegramID: 'ID de Telegram',
        total: 'Total',
      },
      returnToStart: '🔙 Volver al inicio',
    },
    errors: {
      licenseNotFound: 'La licencia no existe.',
      invalidLicense: 'Clave de licencia inválida.',
      alreadyRedeemed: 'La licencia ya ha sido canjeada.',
      licenseExpired: 'Tu licencia ha expirado.',
      purchaseFailed: 'La compra falló. Por favor, inténtalo de nuevo más tarde.',
    },
    purchase: {
      please: 'Por favor, compra una licencia',
      chooseOption: 'Por favor, elija una opción de compra:',
      week: 'Semana - ${{priceWEEK}} USD',
      month: 'Mes - ${{priceMONTH}} USD',
      lifetime: 'De por vida - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Volver al inicio',
      selectedPlan:
        'Has seleccionado el plan {{plan}}.\n\nPor favor, sigue el enlace para completar tu compra: [Pagar ahora]({{payLink}})\n\nEsta factura expirará el: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Para canjear tu licencia, ingresa el código a continuación:',
      cancel: 'Cancelar',
    },
    menu: {
      title: 'Elige una opción de las siguientes:',
      create: 'Crear Licencia',
      delete: 'Eliminar Licencia',
      lookupLicense: 'Buscar Licencia',
      lookupTelegramID: 'Buscar ID de Telegram',
      languageTitle: 'Selecciona tu idioma preferido de la lista siguiente:',
      languageSet: 'Idioma establecido en español.',
    },
    invoice: {
      update: 'Actualización de factura:',
      statusPaid:
        'Actualización de factura:\n\nEstado: {{status}}\nMensaje: Pago recibido con éxito para el pedido #{{trackId}}.\nAquí está tu licencia: `{{license}}`',
      statusExpired: '⌛️ Tu factura #{{trackId}} ha expirado. ❌❌',
      statusDefault:
        "Actualización de factura:\n\nEstado: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nCantidad debida: $' + amount + ' ' + currency : ''}}",
    },
  },
  zh: {
    start: {
      welcome: '▶️ 欢迎来到 {{appName}}\n\n{{description}}\n\n**功能**\n {{features}}',
      menu: '📜 主菜单',
      accountInfo: '🔍 帐户信息',
      redeem: '🎟️ 兑换',
      purchase: '🪪 购买',
      languageSelect: '🌐 选择语言',
    },
    accountInfo: {
      title: '这是您的信息：',
      fields: {
        creationDate: '创建日期',
        expirationDate: '到期日期',
        creatorID: '创建者 ID',
        license: '许可证',
        telegramID: 'Telegram ID',
        total: '总计',
      },
      returnToStart: '🔙 返回开始',
    },
    errors: {
      licenseNotFound: '许可证不存在。',
      invalidLicense: '无效的许可证密钥。',
      alreadyRedeemed: '许可证已兑换。',
      licenseExpired: '您的许可证已过期。',
      purchaseFailed: '购买失败。请稍后再试。',
    },
    purchase: {
      please: '请购买许可证',
      chooseOption: '请选择购买选项：',
      week: '一周 - ${{priceWEEK}} USD',
      month: '一个月 - ${{priceMONTH}} USD',
      lifetime: '终身 - ${{priceLIFETIME}} USD',
      backToStart: '🔙 返回开始',
      selectedPlan:
        '您已选择 {{plan}} 计划。\n\n请点击以下链接完成购买：[立即支付]({{payLink}})\n\n此发票将于 {{expiryDate}} 过期。',
    },
    redeem: {
      enterCode: '要兑换您的许可证，请输入以下代码：',
      cancel: '取消',
    },
    menu: {
      title: '从以下选项中选择：',
      create: '创建许可证',
      delete: '删除许可证',
      lookupLicense: '查找许可证',
      lookupTelegramID: '查找 Telegram ID',
      languageTitle: '从下面选择您的首选语言：',
      languageSet: '语言已设置为中文。',
    },
    invoice: {
      update: '发票更新：',
      statusPaid:
        '发票更新：\n\n状态：{{status}}\n消息：成功收到订单 #{{trackId}} 的付款。\n这是您的许可证：`{{license}}`',
      statusExpired: '⌛️ 您的发票 #{{trackId}} 已过期。❌❌',
      statusDefault:
        "发票更新：\n\n状态：{{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\n金额：$' + amount + ' ' + currency : ''}}",
    },
  },
  fr: {
    start: {
      welcome:
        '▶️ Bienvenue sur {{appName}}\n\n{{description}}\n\n**Fonctionnalités**\n {{features}}',
      menu: '📜 Menu principal',
      accountInfo: '🔍 Informations sur le compte',
      redeem: '🎟️ Utiliser',
      purchase: '🪪 Acheter',
      languageSelect: '🌐 Sélectionnez la langue',
    },
    accountInfo: {
      title: 'Voici vos informations :',
      fields: {
        creationDate: 'Date de création',
        expirationDate: "Date d'expiration",
        creatorID: 'ID du créateur',
        license: 'Licence',
        telegramID: 'ID Telegram',
        total: 'Total',
      },
      returnToStart: '🔙 Retour au début',
    },
    errors: {
      licenseNotFound: 'Licence introuvable.',
      invalidLicense: 'Clé de licence invalide.',
      alreadyRedeemed: 'Licence déjà utilisée.',
      licenseExpired: 'Votre licence a expiré.',
      purchaseFailed: "Échec de l'achat. Veuillez réessayer plus tard.",
    },
    purchase: {
      please: 'Veuillez acheter une licence',
      chooseOption: "Veuillez choisir une option d'achat :",
      week: 'Semaine - ${{priceWEEK}} USD',
      month: 'Mois - ${{priceMONTH}} USD',
      lifetime: 'À vie - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Retour au début',
      selectedPlan:
        'Vous avez sélectionné le plan {{plan}}.\n\nVeuillez suivre le lien pour finaliser votre achat : [Payer maintenant]({{payLink}})\n\nCette facture expirera le : {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Pour utiliser votre licence, veuillez saisir le code ci-dessous :',
      cancel: 'Annuler',
    },
    menu: {
      title: 'Choisissez une option ci-dessous :',
      create: 'Créer une licence',
      delete: 'Supprimer une licence',
      lookupLicense: 'Rechercher une licence',
      lookupTelegramID: 'Rechercher un ID Telegram',
      languageTitle: 'Sélectionnez votre langue préférée ci-dessous :',
      languageSet: 'Langue définie sur le français.',
    },
    invoice: {
      update: 'Mise à jour de la facture :',
      statusPaid:
        'Mise à jour de la facture :\n\nStatut : {{status}}\nMessage : Paiement reçu avec succès pour la commande #{{trackId}}.\nVoici votre licence : `{{license}}`',
      statusExpired: '⌛️ Votre facture #{{trackId}} a expiré. ❌❌',
      statusDefault:
        "Mise à jour de la facture :\n\nStatut : {{status}}\n{{trackId ? 'ID : ' + trackId : ''}}{{amount && currency ? '\\nMontant : $' + amount + ' ' + currency : ''}}",
    },
  },
  hi: {
    start: {
      welcome:
        '▶️ {{appName}} में आपका स्वागत है\n\n{{description}}\n\n**विशेषताएं**\n {{features}}',
      menu: '📜 मुख्य मेनू',
      accountInfo: '🔍 खाता जानकारी',
      redeem: '🎟️ रिडीम करें',
      purchase: '🪪 खरीदें',
      languageSelect: '🌐 भाषा का चयन करें',
    },
    accountInfo: {
      title: 'यहां आपकी जानकारी दी गई है:',
      fields: {
        creationDate: 'निर्माण तिथि',
        expirationDate: 'समाप्ति तिथि',
        creatorID: 'निर्माता आईडी',
        license: 'लाइसेंस',
        telegramID: 'टेलीग्राम आईडी',
        total: 'कुल',
      },
      returnToStart: '🔙 प्रारंभ पर लौटें',
    },
    errors: {
      licenseNotFound: 'लाइसेंस मौजूद नहीं है।',
      invalidLicense: 'अमान्य लाइसेंस कुंजी।',
      alreadyRedeemed: 'लाइसेंस पहले ही रिडीम किया जा चुका है।',
      licenseExpired: 'आपका लाइसेंस समाप्त हो चुका है।',
      purchaseFailed: 'खरीद विफल रही। कृपया बाद में पुनः प्रयास करें।',
    },
    purchase: {
      please: 'कृपया एक लाइसेंस खरीदें',
      chooseOption: 'कृपया एक खरीद विकल्प चुनें:',
      week: 'सप्ताह - ${{priceWEEK}} USD',
      month: 'महीना - ${{priceMONTH}} USD',
      lifetime: 'आजीवन - ${{priceLIFETIME}} USD',
      backToStart: '🔙 प्रारंभ पर लौटें',
      selectedPlan:
        'आपने {{plan}} योजना चुनी है।\n\nकृपया अपनी खरीद पूरी करने के लिए लिंक पर जाएं: [अभी भुगतान करें]({{payLink}})\n\nयह चालान {{expiryDate}} को समाप्त हो जाएगा।',
    },
    redeem: {
      enterCode: 'अपना लाइसेंस रिडीम करने के लिए कृपया नीचे कोड दर्ज करें:',
      cancel: 'रद्द करें',
    },
    menu: {
      title: 'नीचे दिए गए विकल्पों में से चुनें:',
      create: 'लाइसेंस बनाएं',
      delete: 'लाइसेंस हटाएं',
      lookupLicense: 'लाइसेंस खोजें',
      lookupTelegramID: 'टेलीग्राम आईडी खोजें',
      languageTitle: 'नीचे से अपनी पसंदीदा भाषा का चयन करें:',
      languageSet: 'भाषा हिंदी में सेट की गई है।',
    },
    invoice: {
      update: 'चालान अपडेट:',
      statusPaid:
        'चालान अपडेट:\n\nस्थिति: {{status}}\nसंदेश: ऑर्डर #{{trackId}} के लिए भुगतान सफलतापूर्वक प्राप्त हुआ।\nयहां आपका लाइसेंस है: `{{license}}`',
      statusExpired: '⌛️ आपका चालान #{{trackId}} समाप्त हो गया है। ❌❌',
      statusDefault:
        "चालान अपडेट:\n\nस्थिति: {{status}}\n{{trackId ? 'आईडी: ' + trackId : ''}}{{amount && currency ? '\\nराशि: $' + amount + ' ' + currency : ''}}",
    },
  },
  ar: {
    start: {
      welcome: '▶️ مرحبًا بك في {{appName}}\n\n{{description}}\n\n**الميزات**\n {{features}}',
      menu: '📜 القائمة الرئيسية',
      accountInfo: '🔍 معلومات الحساب',
      redeem: '🎟️ استرداد',
      purchase: '🪪 شراء',
      languageSelect: '🌐 اختر اللغة',
    },
    accountInfo: {
      title: 'إليك معلوماتك:',
      fields: {
        creationDate: 'تاريخ الإنشاء',
        expirationDate: 'تاريخ الانتهاء',
        creatorID: 'معرف المنشئ',
        license: 'الترخيص',
        telegramID: 'معرف تيليجرام',
        total: 'المجموع',
      },
      returnToStart: '🔙 العودة إلى البداية',
    },
    errors: {
      licenseNotFound: 'الترخيص غير موجود.',
      invalidLicense: 'مفتاح الترخيص غير صالح.',
      alreadyRedeemed: 'تم استرداد الترخيص بالفعل.',
      licenseExpired: 'انتهت صلاحية الترخيص الخاص بك.',
      purchaseFailed: 'فشل الشراء. حاول مرة أخرى لاحقًا.',
    },
    purchase: {
      please: 'يرجى شراء ترخيص',
      chooseOption: 'يرجى اختيار خيار شراء:',
      week: 'أسبوع - ${{priceWEEK}} USD',
      month: 'شهر - ${{priceMONTH}} USD',
      lifetime: 'مدى الحياة - ${{priceLIFETIME}} USD',
      backToStart: '🔙 العودة إلى البداية',
      selectedPlan:
        'لقد اخترت خطة {{plan}}.\n\nيرجى اتباع الرابط لإكمال عملية الشراء: [ادفع الآن]({{payLink}})\n\nستنتهي صلاحية هذه الفاتورة في: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'للاسترداد، أدخل الكود أدناه:',
      cancel: 'إلغاء',
    },
    menu: {
      title: 'اختر خيارًا مما يلي:',
      create: 'إنشاء ترخيص',
      delete: 'حذف ترخيص',
      lookupLicense: 'البحث عن ترخيص',
      lookupTelegramID: 'البحث عن معرف تيليجرام',
      languageTitle: 'اختر لغتك المفضلة من القائمة أدناه:',
      languageSet: 'تم تعيين اللغة إلى العربية.',
    },
    invoice: {
      update: 'تحديث الفاتورة:',
      statusPaid:
        'تحديث الفاتورة:\n\nالحالة: {{status}}\nالرسالة: تم استلام الدفع بنجاح للطلب #{{trackId}}.\nها هو الترخيص الخاص بك: `{{license}}`',
      statusExpired: '⌛️ انتهت صلاحية الفاتورة #{{trackId}}. ❌❌',
      statusDefault:
        "تحديث الفاتورة:\n\nالحالة: {{status}}\n{{trackId ? 'المعرف: ' + trackId : ''}}{{amount && currency ? '\\nالمبلغ: $' + amount + ' ' + currency : ''}}",
    },
  },
  pt: {
    start: {
      welcome: '▶️ Bem-vindo ao {{appName}}\n\n{{description}}\n\n**Recursos**\n {{features}}',
      menu: '📜 Menu Principal',
      accountInfo: '🔍 Informações da Conta',
      redeem: '🎟️ Resgatar',
      purchase: '🪪 Comprar',
      languageSelect: '🌐 Selecionar Idioma',
    },
    accountInfo: {
      title: 'Aqui estão suas informações:',
      fields: {
        creationDate: 'Data de Criação',
        expirationDate: 'Data de Expiração',
        creatorID: 'ID do Criador',
        license: 'Licença',
        telegramID: 'ID do Telegram',
        total: 'Total',
      },
      returnToStart: '🔙 Voltar ao Início',
    },
    errors: {
      licenseNotFound: 'Licença não encontrada.',
      invalidLicense: 'Chave de licença inválida.',
      alreadyRedeemed: 'Licença já resgatada.',
      licenseExpired: 'Sua licença expirou.',
      purchaseFailed: 'Falha na compra. Por favor, tente novamente mais tarde.',
    },
    purchase: {
      please: 'Por favor, compre uma licença',
      chooseOption: 'Por favor, escolha uma opção de compra:',
      week: 'Semana - ${{priceWEEK}} USD',
      month: 'Mês - ${{priceMONTH}} USD',
      lifetime: 'Vitalícia - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Voltar ao início',
      selectedPlan:
        'Você selecionou o plano {{plan}}.\n\nSiga o link para concluir sua compra: [Pagar Agora]({{payLink}})\n\nEsta fatura expirará em: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Para resgatar sua licença, insira o código abaixo:',
      cancel: 'Cancelar',
    },
    menu: {
      title: 'Escolha uma opção abaixo:',
      create: 'Criar Licença',
      delete: 'Excluir Licença',
      lookupLicense: 'Consultar Licença',
      lookupTelegramID: 'Consultar ID do Telegram',
      languageTitle: 'Selecione seu idioma preferido abaixo:',
      languageSet: 'Idioma definido para Português.',
    },
    invoice: {
      update: 'Atualização de Fatura:',
      statusPaid:
        'Atualização de Fatura:\n\nStatus: {{status}}\nMensagem: Pagamento recebido com sucesso para o pedido #{{trackId}}.\nAqui está sua licença: `{{license}}`',
      statusExpired: '⌛️ Sua fatura #{{trackId}} expirou. ❌❌',
      statusDefault:
        "Atualização de Fatura:\n\nStatus: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nValor devido: $' + amount + ' ' + currency : ''}}",
    },
  },
  ru: {
    start: {
      welcome: '▶️ Добро пожаловать в {{appName}}\n\n{{description}}\n\n**Функции**\n {{features}}',
      menu: '📜 Главное меню',
      accountInfo: '🔍 Информация об аккаунте',
      redeem: '🎟️ Активировать',
      purchase: '🪪 Купить',
      languageSelect: '🌐 Выберите язык',
    },
    accountInfo: {
      title: 'Ваша информация:',
      fields: {
        creationDate: 'Дата создания',
        expirationDate: 'Дата окончания',
        creatorID: 'ID создателя',
        license: 'Лицензия',
        telegramID: 'Telegram ID',
        total: 'Всего',
      },
      returnToStart: '🔙 Вернуться к началу',
    },
    errors: {
      licenseNotFound: 'Лицензия не найдена.',
      invalidLicense: 'Неверный лицензионный ключ.',
      alreadyRedeemed: 'Лицензия уже активирована.',
      licenseExpired: 'Срок действия вашей лицензии истёк.',
      purchaseFailed: 'Не удалось выполнить покупку. Попробуйте позже.',
    },
    purchase: {
      please: 'Пожалуйста, купите лицензию',
      chooseOption: 'Выберите вариант покупки:',
      week: 'Неделя - ${{priceWEEK}} USD',
      month: 'Месяц - ${{priceMONTH}} USD',
      lifetime: 'Пожизненно - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Вернуться к началу',
      selectedPlan:
        'Вы выбрали план {{plan}}.\n\nПерейдите по ссылке для завершения покупки: [Оплатить сейчас]({{payLink}})\n\nЭтот счет истекает: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Для активации лицензии введите код ниже:',
      cancel: 'Отмена',
    },
    menu: {
      title: 'Выберите опцию ниже:',
      create: 'Создать Лицензию',
      delete: 'Удалить Лицензию',
      lookupLicense: 'Найти Лицензию',
      lookupTelegramID: 'Найти Telegram ID',
      languageTitle: 'Выберите предпочитаемый язык ниже:',
      languageSet: 'Язык установлен на Русский.',
    },
    invoice: {
      update: 'Обновление счета:',
      statusPaid:
        'Обновление счета:\n\nСтатус: {{status}}\nСообщение: Оплата успешно получена для заказа #{{trackId}}.\nВаша лицензия: `{{license}}`',
      statusExpired: '⌛️ Срок действия счета #{{trackId}} истёк. ❌❌',
      statusDefault:
        "Обновление счета:\n\nСтатус: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nСумма к оплате: $' + amount + ' ' + currency : ''}}",
    },
  },
  bn: {
    start: {
      welcome: '▶️ {{appName}}-এ স্বাগতম\n\n{{description}}\n\n**বৈশিষ্ট্য**\n {{features}}',
      menu: '📜 প্রধান মেনু',
      accountInfo: '🔍 অ্যাকাউন্ট তথ্য',
      redeem: '🎟️ রিডিম',
      purchase: '🪪 কিনুন',
      languageSelect: '🌐 ভাষা নির্বাচন করুন',
    },
    accountInfo: {
      title: 'এখানে আপনার তথ্য:',
      fields: {
        creationDate: 'তৈরির তারিখ',
        expirationDate: 'মেয়াদ শেষের তারিখ',
        creatorID: 'স্রষ্টার আইডি',
        license: 'লাইসেন্স',
        telegramID: 'টেলিগ্রাম আইডি',
        total: 'মোট',
      },
      returnToStart: '🔙 শুরুতে ফিরে যান',
    },
    errors: {
      licenseNotFound: 'লাইসেন্স পাওয়া যায়নি।',
      invalidLicense: 'অবৈধ লাইসেন্স কী।',
      alreadyRedeemed: 'লাইসেন্স ইতিমধ্যেই রিডিম করা হয়েছে।',
      licenseExpired: 'আপনার লাইসেন্সের মেয়াদ শেষ হয়ে গেছে।',
      purchaseFailed: 'ক্রয় ব্যর্থ হয়েছে। পরে আবার চেষ্টা করুন।',
    },
    purchase: {
      please: 'অনুগ্রহ করে একটি লাইসেন্স কিনুন',
      chooseOption: 'একটি ক্রয় বিকল্প নির্বাচন করুন:',
      week: 'সপ্তাহ - ${{priceWEEK}} USD',
      month: 'মাস - ${{priceMONTH}} USD',
      lifetime: 'আজীবন - ${{priceLIFETIME}} USD',
      backToStart: '🔙 শুরুতে ফিরে যান',
      selectedPlan:
        'আপনি {{plan}} পরিকল্পনা নির্বাচন করেছেন।\n\nআপনার ক্রয় সম্পন্ন করতে লিঙ্কটি অনুসরণ করুন: [এখনই পরিশোধ করুন]({{payLink}})\n\nএই ইনভয়েসটির মেয়াদ শেষ হবে: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'আপনার লাইসেন্স রিডিম করতে নিচের কোডটি লিখুন:',
      cancel: 'বাতিল',
    },
    menu: {
      title: 'নিচের অপশন থেকে একটি নির্বাচন করুন:',
      create: 'লাইসেন্স তৈরি করুন',
      delete: 'লাইসেন্স মুছুন',
      lookupLicense: 'লাইসেন্স সন্ধান করুন',
      lookupTelegramID: 'টেলিগ্রাম আইডি সন্ধান করুন',
      languageTitle: 'নিচের তালিকা থেকে আপনার পছন্দের ভাষা নির্বাচন করুন:',
      languageSet: 'ভাষা বাংলা সেট করা হয়েছে।',
    },
    invoice: {
      update: 'ইনভয়েস আপডেট:',
      statusPaid:
        'ইনভয়েস আপডেট:\n\nঅবস্থা: {{status}}\nবার্তা: আদেশ #{{trackId}} এর জন্য সফলভাবে অর্থপ্রদান করা হয়েছে।\nএখানে আপনার লাইসেন্স: `{{license}}`',
      statusExpired: '⌛️ আপনার ইনভয়েস #{{trackId}} মেয়াদ শেষ হয়ে গেছে। ❌❌',
      statusDefault:
        "ইনভয়েস আপডেট:\n\nঅবস্থা: {{status}}\n{{trackId ? 'আইডি: ' + trackId : ''}}{{amount && currency ? '\\nবকেয়া: $' + amount + ' ' + currency : ''}}",
    },
  },
  id: {
    start: {
      welcome: '▶️ Selamat datang di {{appName}}\n\n{{description}}\n\n**Fitur**\n {{features}}',
      menu: '📜 Menu Utama',
      accountInfo: '🔍 Informasi Akun',
      redeem: '🎟️ Tukarkan',
      purchase: '🪪 Beli',
      languageSelect: '🌐 Pilih Bahasa',
    },
    accountInfo: {
      title: 'Berikut adalah informasi Anda:',
      fields: {
        creationDate: 'Tanggal Pembuatan',
        expirationDate: 'Tanggal Kedaluwarsa',
        creatorID: 'ID Pembuat',
        license: 'Lisensi',
        telegramID: 'ID Telegram',
        total: 'Total',
      },
      returnToStart: '🔙 Kembali ke Awal',
    },
    errors: {
      licenseNotFound: 'Lisensi tidak ditemukan.',
      invalidLicense: 'Kunci lisensi tidak valid.',
      alreadyRedeemed: 'Lisensi sudah ditukarkan.',
      licenseExpired: 'Lisensi Anda telah kedaluwarsa.',
      purchaseFailed: 'Pembelian gagal. Silakan coba lagi nanti.',
    },
    purchase: {
      please: 'Silakan beli lisensi',
      chooseOption: 'Pilih opsi pembelian:',
      week: 'Minggu - ${{priceWEEK}} USD',
      month: 'Bulan - ${{priceMONTH}} USD',
      lifetime: 'Seumur Hidup - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Kembali ke Awal',
      selectedPlan:
        'Anda telah memilih paket {{plan}}.\n\nIkuti tautan ini untuk menyelesaikan pembelian Anda: [Bayar Sekarang]({{payLink}})\n\nFaktur ini akan kedaluwarsa pada: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Untuk menukarkan lisensi Anda, masukkan kode di bawah ini:',
      cancel: 'Batal',
    },
    menu: {
      title: 'Pilih opsi di bawah:',
      create: 'Buat Lisensi',
      delete: 'Hapus Lisensi',
      lookupLicense: 'Cari Lisensi',
      lookupTelegramID: 'Cari ID Telegram',
      languageTitle: 'Pilih bahasa pilihan Anda di bawah:',
      languageSet: 'Bahasa diatur ke Bahasa Indonesia.',
    },
    invoice: {
      update: 'Pembaruan Faktur:',
      statusPaid:
        'Pembaruan Faktur:\n\nStatus: {{status}}\nPesan: Pembayaran berhasil diterima untuk pesanan #{{trackId}}.\nBerikut adalah lisensi Anda: `{{license}}`',
      statusExpired: '⌛️ Faktur Anda #{{trackId}} telah kedaluwarsa. ❌❌',
      statusDefault:
        "Pembaruan Faktur:\n\nStatus: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nJumlah yang Harus Dibayar: $' + amount + ' ' + currency : ''}}",
    },
  },
  ja: {
    start: {
      welcome: '▶️ {{appName}}へようこそ\n\n{{description}}\n\n**特徴**\n {{features}}',
      menu: '📜 メインメニュー',
      accountInfo: '🔍 アカウント情報',
      redeem: '🎟️ 引き換え',
      purchase: '🪪 購入',
      languageSelect: '🌐 言語を選択',
    },
    accountInfo: {
      title: '以下があなたの情報です:',
      fields: {
        creationDate: '作成日',
        expirationDate: '有効期限',
        creatorID: '作成者ID',
        license: 'ライセンス',
        telegramID: 'Telegram ID',
        total: '合計',
      },
      returnToStart: '🔙 初めに戻る',
    },
    errors: {
      licenseNotFound: 'ライセンスが見つかりません。',
      invalidLicense: '無効なライセンスキー。',
      alreadyRedeemed: 'ライセンスは既に引き換え済みです。',
      licenseExpired: 'ライセンスの有効期限が切れています。',
      purchaseFailed: '購入に失敗しました。後でもう一度お試しください。',
    },
    purchase: {
      please: 'ライセンスを購入してください',
      chooseOption: '購入オプションを選択してください:',
      week: '1週間 - ${{priceWEEK}} USD',
      month: '1か月 - ${{priceMONTH}} USD',
      lifetime: '永久 - ${{priceLIFETIME}} USD',
      backToStart: '🔙 初めに戻る',
      selectedPlan:
        '{{plan}}プランを選択しました。\n\n購入を完了するには以下のリンクをクリックしてください: [今すぐ支払う]({{payLink}})\n\nこの請求書の有効期限は: {{expiryDate}}です。',
    },
    redeem: {
      enterCode: 'ライセンスを引き換えるには、以下のコードを入力してください:',
      cancel: 'キャンセル',
    },
    menu: {
      title: '以下のオプションから選択してください:',
      create: 'ライセンスを作成',
      delete: 'ライセンスを削除',
      lookupLicense: 'ライセンスを検索',
      lookupTelegramID: 'Telegram IDを検索',
      languageTitle: '以下から希望する言語を選択してください:',
      languageSet: '言語が日本語に設定されました。',
    },
    invoice: {
      update: '請求書更新:',
      statusPaid:
        '請求書更新:\n\nステータス: {{status}}\nメッセージ: 注文 #{{trackId}} の支払いが正常に完了しました。\nこちらがライセンスです: `{{license}}`',
      statusExpired: '⌛️ 請求書 #{{trackId}} の有効期限が切れました。 ❌❌',
      statusDefault:
        "請求書更新:\n\nステータス: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\n支払額: $' + amount + ' ' + currency : ''}}",
    },
  },
  ko: {
    start: {
      welcome:
        '▶️ {{appName}}에 오신 것을 환영합니다\n\n{{description}}\n\n**기능**\n {{features}}',
      menu: '📜 메인 메뉴',
      accountInfo: '🔍 계정 정보',
      redeem: '🎟️ 코드 입력',
      purchase: '🪪 구매',
      languageSelect: '🌐 언어 선택',
    },
    accountInfo: {
      title: '다음은 귀하의 정보입니다:',
      fields: {
        creationDate: '생성 날짜',
        expirationDate: '만료 날짜',
        creatorID: '생성자 ID',
        license: '라이센스',
        telegramID: '텔레그램 ID',
        total: '합계',
      },
      returnToStart: '🔙 처음으로 돌아가기',
    },
    errors: {
      licenseNotFound: '라이센스를 찾을 수 없습니다.',
      invalidLicense: '유효하지 않은 라이센스 키입니다.',
      alreadyRedeemed: '이미 사용된 라이센스입니다.',
      licenseExpired: '라이센스가 만료되었습니다.',
      purchaseFailed: '구매에 실패했습니다. 나중에 다시 시도하십시오.',
    },
    purchase: {
      please: '라이센스를 구매하십시오',
      chooseOption: '구매 옵션을 선택하십시오:',
      week: '주 - ${{priceWEEK}} USD',
      month: '월 - ${{priceMONTH}} USD',
      lifetime: '평생 - ${{priceLIFETIME}} USD',
      backToStart: '🔙 처음으로 돌아가기',
      selectedPlan:
        '{{plan}} 플랜을 선택하셨습니다.\n\n구매를 완료하려면 링크를 따라가십시오: [지금 결제하기]({{payLink}})\n\n이 청구서는 {{expiryDate}}에 만료됩니다.',
    },
    redeem: {
      enterCode: '라이센스를 활성화하려면 아래 코드를 입력하십시오:',
      cancel: '취소',
    },
    menu: {
      title: '아래에서 옵션을 선택하십시오:',
      create: '라이센스 생성',
      delete: '라이센스 삭제',
      lookupLicense: '라이센스 조회',
      lookupTelegramID: '텔레그램 ID 조회',
      languageTitle: '아래에서 선호하는 언어를 선택하십시오:',
      languageSet: '언어가 한국어로 설정되었습니다.',
    },
    invoice: {
      update: '송장 업데이트:',
      statusPaid:
        '송장 업데이트:\n\n상태: {{status}}\n메시지: 주문 #{{trackId}}의 결제가 성공적으로 완료되었습니다.\n여기 라이센스가 있습니다: `{{license}}`',
      statusExpired: '⌛️ 송장 #{{trackId}}이 만료되었습니다. ❌❌',
      statusDefault:
        "송장 업데이트:\n\n상태: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\n결제 금액: $' + amount + ' ' + currency : ''}}",
    },
  },
  pa: {
    start: {
      welcome:
        '▶️ {{appName}} ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ\n\n{{description}}\n\n**ਖੂਬੀਆਂ**\n {{features}}',
      menu: '📜 ਮੁੱਖ ਮੀਨੂ',
      accountInfo: '🔍 ਖਾਤਾ ਜਾਣਕਾਰੀ',
      redeem: '🎟️ ਰੀਡਮ ਕਰੋ',
      purchase: '🪪 ਖਰੀਦੋ',
      languageSelect: '🌐 ਭਾਸ਼ਾ ਚੁਣੋ',
    },
    accountInfo: {
      title: 'ਇਹ ਰਿਹਾ ਤੁਹਾਡਾ ਵੇਰਵਾ:',
      fields: {
        creationDate: 'ਬਣਾਉਣ ਦੀ ਮਿਤੀ',
        expirationDate: 'ਮਿਆਦ ਖ਼ਤਮ ਹੋਣ ਦੀ ਮਿਤੀ',
        creatorID: 'ਬਣਾਉਣ ਵਾਲੇ ਦੀ ID',
        license: 'ਲਾਇਸੰਸ',
        telegramID: 'ਟੈਲੀਗ੍ਰਾਮ ID',
        total: 'ਕੁੱਲ',
      },
      returnToStart: '🔙 ਮੁੜ ਸ਼ੁਰੂ ਤੇ ਜਾਓ',
    },
    errors: {
      licenseNotFound: 'ਲਾਇਸੰਸ ਨਹੀਂ ਮਿਲਿਆ।',
      invalidLicense: 'ਗਲਤ ਲਾਇਸੰਸ ਕੁੰਜੀ।',
      alreadyRedeemed: 'ਲਾਇਸੰਸ ਪਹਿਲਾਂ ਹੀ ਵਰਤਿਆ ਜਾ ਚੁੱਕਾ ਹੈ।',
      licenseExpired: 'ਤੁਹਾਡਾ ਲਾਇਸੰਸ ਮੁਕੰਮਲ ਹੋ ਗਿਆ ਹੈ।',
      purchaseFailed: 'ਖਰੀਦਣ ਵਿੱਚ ਨਾਕਾਮੀ। ਬਾਅਦ ਵਿੱਚ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
    },
    purchase: {
      please: 'ਕਿਰਪਾ ਕਰਕੇ ਲਾਇਸੰਸ ਖਰੀਦੋ',
      chooseOption: 'ਖਰੀਦਦਾਰੀ ਵਿਕਲਪ ਚੁਣੋ:',
      week: 'ਹਫ਼ਤਾ - ${{priceWEEK}} USD',
      month: 'ਮਹੀਨਾ - ${{priceMONTH}} USD',
      lifetime: 'ਜੀਵਨ ਭਰ ਲਈ - ${{priceLIFETIME}} USD',
      backToStart: '🔙 ਮੁੜ ਸ਼ੁਰੂ ਤੇ ਜਾਓ',
      selectedPlan:
        'ਤੁਸੀਂ {{plan}} ਯੋਜਨਾ ਚੁਣੀ ਹੈ।\n\nਤੁਹਾਡੀ ਖਰੀਦ ਪੂਰੀ ਕਰਨ ਲਈ ਲਿੰਕ ਫੋਲੋ ਕਰੋ: [ਹੁਣੇ ਭੁਗਤਾਨ ਕਰੋ]({{payLink}})\n\nਇਹ ਚਲਾਣ {{expiryDate}} ਨੂੰ ਮੁਕੰਮਲ ਹੋ ਜਾਵੇਗਾ।',
    },
    redeem: {
      enterCode: 'ਆਪਣੀ ਲਾਇਸੰਸ ਨੂੰ ਰੀਡਮ ਕਰਨ ਲਈ ਹੇਠਾਂ ਕੋਡ ਦਾਖਲ ਕਰੋ:',
      cancel: 'ਰੱਦ ਕਰੋ',
    },
    menu: {
      title: 'ਹੇਠਾਂ ਦਿੱਤੇ ਵਿਕਲਪਾਂ ਵਿੱਚੋਂ ਚੁਣੋ:',
      create: 'ਲਾਇਸੰਸ ਬਣਾਓ',
      delete: 'ਲਾਇਸੰਸ ਮਿਟਾਓ',
      lookupLicense: 'ਲਾਇਸੰਸ ਲੱਭੋ',
      lookupTelegramID: 'ਟੈਲੀਗ੍ਰਾਮ ID ਲੱਭੋ',
      languageTitle: 'ਹੇਠਾਂ ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਚੁਣੋ:',
      languageSet: 'ਭਾਸ਼ਾ ਪੰਜਾਬੀ ਵਿੱਚ ਸੈੱਟ ਹੋਈ ਹੈ।',
    },
    invoice: {
      update: 'ਚਲਾਣ ਅੱਪਡੇਟ:',
      statusPaid:
        'ਚਲਾਣ ਅੱਪਡੇਟ:\n\nਸਥਿਤੀ: {{status}}\nਸੁਨੇਹਾ: ਆਰਡਰ #{{trackId}} ਲਈ ਭੁਗਤਾਨ ਸਫਲਤਾਪੂਰਵਕ ਪ੍ਰਾਪਤ ਹੋਇਆ।\nਇਹ ਲਾਇਸੰਸ ਹੈ: `{{license}}`',
      statusExpired: '⌛️ ਤੁਹਾਡਾ ਚਲਾਣ #{{trackId}} ਮਿਆਦ ਪੂਰੀ ਹੋ ਗਿਆ। ❌❌',
      statusDefault:
        "ਚਲਾਣ ਅੱਪਡੇਟ:\n\nਸਥਿਤੀ: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nਬਕਾਇਆ: $' + amount + ' ' + currency : ''}}",
    },
  },
  ta: {
    start: {
      welcome:
        '▶️ {{appName}} இற்கு வரவேற்கிறோம்\n\n{{description}}\n\n**சிறப்பம்சங்கள்**\n {{features}}',
      menu: '📜 முதன்மை மெனு',
      accountInfo: '🔍 கணக்கு தகவல்',
      redeem: '🎟️ மீட்பது',
      purchase: '🪪 வாங்குதல்',
      languageSelect: '🌐 மொழியை தேர்வு செய்க',
    },
    accountInfo: {
      title: 'உங்கள் தகவல்:',
      fields: {
        creationDate: 'உருவாக்க தேதி',
        expirationDate: 'முடிவு தேதி',
        creatorID: 'உருவாக்கியவரின் ID',
        license: 'உரிமம்',
        telegramID: 'டெலிகிராம் ID',
        total: 'மொத்தம்',
      },
      returnToStart: '🔙 முதலில் திரும்பவும்',
    },
    errors: {
      licenseNotFound: 'உரிமம் கிடைக்கவில்லை.',
      invalidLicense: 'தவறான உரிம விசை.',
      alreadyRedeemed: 'உரிமம் ஏற்கனவே மீட்கப்பட்டது.',
      licenseExpired: 'உங்கள் உரிமம் காலாவதியானது.',
      purchaseFailed: 'வாங்கல் தோல்வியடைந்தது. தயவுசெய்து பின்னர் முயற்சிக்கவும்.',
    },
    purchase: {
      please: 'உரிமம் வாங்கவும்',
      chooseOption: 'வாங்கும் விருப்பத்தைத் தேர்ந்தெடுக்கவும்:',
      week: 'வாரம் - ${{priceWEEK}} USD',
      month: 'மாதம் - ${{priceMONTH}} USD',
      lifetime: 'காலமுறையாக - ${{priceLIFETIME}} USD',
      backToStart: '🔙 முதலில் திரும்பவும்',
      selectedPlan:
        'நீங்கள் {{plan}} திட்டத்தைத் தேர்ந்தெடுத்துள்ளீர்கள்.\n\nதயவுசெய்து உங்கள் வாங்கலை முடிக்க இணைப்பைச் செல்லவும்: [இப்போது செலுத்தவும்]({{payLink}})\n\nஇந்த செலுத்துதல் {{expiryDate}} அன்று காலாவதியாகும்.',
    },
    redeem: {
      enterCode: 'உங்கள் உரிமத்தை மீட்க கீழே உள்ள குறியீட்டை உள்ளிடவும்:',
      cancel: 'ரத்து செய்க',
    },
    menu: {
      title: 'கீழே உள்ள விருப்பங்களில் ஒன்றைத் தேர்ந்தெடுக்கவும்:',
      create: 'உரிமம் உருவாக்கவும்',
      delete: 'உரிமம் நீக்கவும்',
      lookupLicense: 'உரிமம் தேடுக',
      lookupTelegramID: 'டெலிகிராம் ID தேடுக',
      languageTitle: 'கீழே இருந்து உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்:',
      languageSet: 'மொழி தமிழில் அமைக்கப்பட்டுள்ளது.',
    },
    invoice: {
      update: 'விலைப்பட்டியல் புதுப்பிப்பு:',
      statusPaid:
        'விலைப்பட்டியல் புதுப்பிப்பு:\n\nநிலை: {{status}}\nசெய்தி: ஆர்டர் #{{trackId}} க்கான கட்டணம் வெற்றிகரமாக பெறப்பட்டது.\nஉங்கள் உரிமம்: `{{license}}`',
      statusExpired: '⌛️ உங்கள் விலைப்பட்டியல் #{{trackId}} காலாவதியானது. ❌❌',
      statusDefault:
        "விலைப்பட்டியல் புதுப்பிப்பு:\n\nநிலை: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nதொகை: $' + amount + ' ' + currency : ''}}",
    },
  },
  te: {
    start: {
      welcome: '▶️ {{appName}} కు స్వాగతం\n\n{{description}}\n\n**ఫీచర్లు**\n {{features}}',
      menu: '📜 ప్రధాన మెనూ',
      accountInfo: '🔍 ఖాతా సమాచారం',
      redeem: '🎟️ రిడీమ్',
      purchase: '🪪 కొనుగోలు',
      languageSelect: '🌐 భాషను ఎంచుకోండి',
    },
    accountInfo: {
      title: 'మీ సమాచారం:',
      fields: {
        creationDate: 'తేదీ సృష్టించబడింది',
        expirationDate: 'గడువు తేదీ',
        creatorID: 'క్రియేటర్ ID',
        license: 'లైసెన్స్',
        telegramID: 'టెలిగ్రామ్ ID',
        total: 'మొత్తం',
      },
      returnToStart: '🔙 మొదటికి తిరిగి వెళ్లండి',
    },
    errors: {
      licenseNotFound: 'లైసెన్స్ కనుగొనబడలేదు.',
      invalidLicense: 'చెల్లని లైసెన్స్ కీ.',
      alreadyRedeemed: 'లైసెన్స్ ఇప్పటికే రిడీమ్ చేయబడింది.',
      licenseExpired: 'మీ లైసెన్స్ గడువు ముగిసింది.',
      purchaseFailed: 'కొనుగోలు విఫలమైంది. దయచేసి తర్వాత మళ్లీ ప్రయత్నించండి.',
    },
    purchase: {
      please: 'దయచేసి లైసెన్స్ కొనుగోలు చేయండి',
      chooseOption: 'కొనుగోలు ఎంపికను ఎంచుకోండి:',
      week: 'వారము - ${{priceWEEK}} USD',
      month: 'నెల - ${{priceMONTH}} USD',
      lifetime: 'జీవితకాలం - ${{priceLIFETIME}} USD',
      backToStart: '🔙 మొదటికి తిరిగి వెళ్లండి',
      selectedPlan:
        'మీరు {{plan}} ప్లాన్ ఎంచుకున్నారు.\n\nమీ కొనుగోలు పూర్తిచేయడానికి ఈ లింక్‌ను అనుసరించండి: [ఇప్పుడే చెల్లించండి]({{payLink}})\n\nఈ చెల్లింపు {{expiryDate}} నాటికి ముగుస్తుంది.',
    },
    redeem: {
      enterCode: 'మీ లైసెన్స్‌ను రిడీమ్ చేయడానికి క్రింది కోడ్‌ను నమోదు చేయండి:',
      cancel: 'రద్దు',
    },
    menu: {
      title: 'క్రింద ఉన్న ఎంపికలలో ఒకదాన్ని ఎంచుకోండి:',
      create: 'లైసెన్స్ సృష్టించండి',
      delete: 'లైసెన్స్ తొలగించండి',
      lookupLicense: 'లైసెన్స్ వెతకండి',
      lookupTelegramID: 'టెలిగ్రామ్ ID వెతకండి',
      languageTitle: 'క్రింద నుండి మీకు ఇష్టమైన భాషను ఎంచుకోండి:',
      languageSet: 'భాష తెలుగులో అమర్చబడింది.',
    },
    invoice: {
      update: 'ఇన్వాయిస్ అప్‌డేట్:',
      statusPaid:
        'ఇన్వాయిస్ అప్‌డేట్:\n\nస్థితి: {{status}}\nసందేశం: ఆర్డర్ #{{trackId}} కోసం చెల్లింపు విజయవంతంగా అందుకుంది.\nఇది మీ లైసెన్స్: `{{license}}`',
      statusExpired: '⌛️ మీ ఇన్వాయిస్ #{{trackId}} గడువు ముగిసింది. ❌❌',
      statusDefault:
        "ఇన్వాయిస్ అప్‌డేట్:\n\nస్థితి: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nబకాయి మొత్తం: $' + amount + ' ' + currency : ''}}",
    },
  },
  mr: {
    start: {
      welcome:
        '▶️ {{appName}} मध्ये आपले स्वागत आहे\n\n{{description}}\n\n**वैशिष्ट्ये**\n {{features}}',
      menu: '📜 मुख्य मेनू',
      accountInfo: '🔍 खाते माहिती',
      redeem: '🎟️ रिडीम करा',
      purchase: '🪪 खरेदी करा',
      languageSelect: '🌐 भाषा निवडा',
    },
    accountInfo: {
      title: 'आपली माहिती:',
      fields: {
        creationDate: 'निर्मिती तारीख',
        expirationDate: 'समाप्ती तारीख',
        creatorID: 'निर्मिती करणाऱ्याचा ID',
        license: 'परवाना',
        telegramID: 'टेलीग्राम ID',
        total: 'एकूण',
      },
      returnToStart: '🔙 पुन्हा सुरुवातीला जा',
    },
    errors: {
      licenseNotFound: 'परवाना सापडला नाही.',
      invalidLicense: 'अवैध परवाना की.',
      alreadyRedeemed: 'परवाना आधीच रिडीम केला गेला आहे.',
      licenseExpired: 'आपला परवाना संपला आहे.',
      purchaseFailed: 'खरेदी अयशस्वी झाली. कृपया नंतर पुन्हा प्रयत्न करा.',
    },
    purchase: {
      please: 'कृपया परवाना खरेदी करा',
      chooseOption: 'कृपया खरेदी पर्याय निवडा:',
      week: 'आठवडा - ${{priceWEEK}} USD',
      month: 'महिना - ${{priceMONTH}} USD',
      lifetime: 'आजीवन - ${{priceLIFETIME}} USD',
      backToStart: '🔙 पुन्हा सुरुवातीला जा',
      selectedPlan:
        'आपण {{plan}} योजना निवडली आहे.\n\nखरेदी पूर्ण करण्यासाठी कृपया दुवा अनुसरा: [आता भरा]({{payLink}})\n\nहे बिल {{expiryDate}} रोजी संपेल.',
    },
    redeem: {
      enterCode: 'आपला परवाना रिडीम करण्यासाठी खाली कोड टाका:',
      cancel: 'रद्द करा',
    },
    menu: {
      title: 'खालील पर्यायांमधून एक निवडा:',
      create: 'परवाना तयार करा',
      delete: 'परवाना हटवा',
      lookupLicense: 'परवाना शोधा',
      lookupTelegramID: 'टेलीग्राम ID शोधा',
      languageTitle: 'खाली दिलेल्या यादीतून आपली आवडती भाषा निवडा:',
      languageSet: 'भाषा मराठीत सेट केली आहे.',
    },
    invoice: {
      update: 'इन्व्हॉइस अद्यतन:',
      statusPaid:
        'इन्व्हॉइस अद्यतन:\n\nस्थिती: {{status}}\nसंदेश: ऑर्डर #{{trackId}} साठी पैसे यशस्वीरित्या मिळाले.\nहा आपला परवाना आहे: `{{license}}`',
      statusExpired: '⌛️ आपला इन्व्हॉइस #{{trackId}} कालबाह्य झाला आहे. ❌❌',
      statusDefault:
        "इन्व्हॉइस अद्यतन:\n\nस्थिती: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nदेय रक्कम: $' + amount + ' ' + currency : ''}}",
    },
  },
  gu: {
    start: {
      welcome:
        '▶️ {{appName}} માં આપનું સ્વાગત છે\n\n{{description}}\n\n**વિશેષતાઓ**\n {{features}}',
      menu: '📜 મુખ્ય મેનુ',
      accountInfo: '🔍 એકાઉન્ટ માહિતી',
      redeem: '🎟️ રિડીમ કરો',
      purchase: '🪪 ખરીદી',
      languageSelect: '🌐 ભાષા પસંદ કરો',
    },
    accountInfo: {
      title: 'આ રહ્યુ તમારું ડેટા:',
      fields: {
        creationDate: 'બનાવવાની તારીખ',
        expirationDate: 'સમાપ્ત થવાની તારીખ',
        creatorID: 'બનાવનાર ID',
        license: 'લાઇસન્સ',
        telegramID: 'ટેલિગ્રામ ID',
        total: 'કુલ',
      },
      returnToStart: '🔙 શરૂઆત પર પાછા જાઓ',
    },
    errors: {
      licenseNotFound: 'લાઇસન્સ મળ્યું નથી.',
      invalidLicense: 'અમાન્ય લાઇસન્સ કી.',
      alreadyRedeemed: 'લાઇસન્સ પહેલેથી જ રિડીમ કરવામાં આવ્યું છે.',
      licenseExpired: 'તમારું લાઇસન્સ સમાપ્ત થઈ ગયું છે.',
      purchaseFailed: 'ખરીદી નિષ્ફળ ગઈ. કૃપા કરીને થોડી વાર પછી પ્રયત્ન કરો.',
    },
    purchase: {
      please: 'કૃપા કરીને લાઇસન્સ ખરીદો',
      chooseOption: 'ખરીદી માટેની વિકલ્પ પસંદ કરો:',
      week: 'અઠવાડિયું - ${{priceWEEK}} USD',
      month: 'મહિનો - ${{priceMONTH}} USD',
      lifetime: 'જીવનભર - ${{priceLIFETIME}} USD',
      backToStart: '🔙 પાછા શરૂ કરો',
      selectedPlan:
        'તમે {{plan}} યોજના પસંદ કરી છે.\n\nતમારી ખરીદી પૂરી કરવા માટે કૃપા કરીને લિંક અનુસરો: [હવે ચુકવણી કરો]({{payLink}})\n\nઆ બીલ {{expiryDate}} પર સમાપ્ત થશે.',
    },
    redeem: {
      enterCode: 'તમારું લાઇસન્સ રિડીમ કરવા માટે કૃપા કરીને નીચે કોડ દાખલ કરો:',
      cancel: 'રદ કરો',
    },
    menu: {
      title: 'નીચેના વિકલ્પોમાંથી પસંદ કરો:',
      create: 'લાઇસન્સ બનાવો',
      delete: 'લાઇસન્સ કાઢી નાખો',
      lookupLicense: 'લાઇસન્સ શોધો',
      lookupTelegramID: 'ટેલિગ્રામ ID શોધો',
      languageTitle: 'તમારી પસંદગીની ભાષા નીચેથી પસંદ કરો:',
      languageSet: 'ભાષા ગુજરાતીમાં સેટ કરવામાં આવી છે.',
    },
    invoice: {
      update: 'ઇનવૉઇસ અપડેટ:',
      statusPaid:
        'ઇનવૉઇસ અપડેટ:\n\nસ્થિતિ: {{status}}\nસંદેશ: ઓર્ડર #{{trackId}} માટે પેમેન્ટ સફળતાપૂર્વક પ્રાપ્ત થયું છે.\nઆ છે તમારું લાઇસન્સ: `{{license}}`',
      statusExpired: '⌛️ તમારું ઇનવૉઇસ #{{trackId}} સમાપ્ત થઈ ગયું છે. ❌❌',
      statusDefault:
        "ઇનવૉઇસ અપડેટ:\n\nસ્થિતિ: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nબાકી રકમ: $' + amount + ' ' + currency : ''}}",
    },
  },
  kn: {
    start: {
      welcome: '▶️ {{appName}} ಗೆ ಸ್ವಾಗತ\n\n{{description}}\n\n**ವೈಶಿಷ್ಟ್ಯಗಳು**\n {{features}}',
      menu: '📜 ಮುಖ್ಯ ಮೆನು',
      accountInfo: '🔍 ಖಾತೆ ಮಾಹಿತಿ',
      redeem: '🎟️ ರೀಡೀಮ್',
      purchase: '🪪 ಖರೀದಿ',
      languageSelect: '🌐 ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ',
    },
    accountInfo: {
      title: 'ಇದು ನಿಮ್ಮ ಮಾಹಿತಿ:',
      fields: {
        creationDate: 'ಸೃಷ್ಟಿ ದಿನಾಂಕ',
        expirationDate: 'ಅವಧಿ ಮುಗಿಯುವ ದಿನಾಂಕ',
        creatorID: 'ರಚನೆ ಮಾಡಿದ ID',
        license: 'ಲೈಸೆನ್ಸ್',
        telegramID: 'ಟೆಲಿಗ್ರಾಮ್ ID',
        total: 'ಒಟ್ಟು',
      },
      returnToStart: '🔙 ಪ್ರಾರಂಭಕ್ಕೆ ಹಿಂದಿರುಗಿ',
    },
    errors: {
      licenseNotFound: 'ಲೈಸೆನ್ಸ್ ಸಿಕ್ಕಿಲ್ಲ.',
      invalidLicense: 'ಅಮಾನ್ಯವಾದ ಲೈಸೆನ್ಸ್ ಕೀ.',
      alreadyRedeemed: 'ಲೈಸೆನ್ಸ್ ಈಗಾಗಲೇ ರೀಡೀಮ್ ಮಾಡಲಾಗಿದೆ.',
      licenseExpired: 'ನಿಮ್ಮ ಲೈಸೆನ್ಸ್ ಅವಧಿ ಮುಗಿದಿದೆ.',
      purchaseFailed: 'ಖರೀದಿ ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
    },
    purchase: {
      please: 'ದಯವಿಟ್ಟು ಲೈಸೆನ್ಸ್ ಖರೀದಿಸಿ',
      chooseOption: 'ಖರೀದಿ ಆಯ್ಕೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:',
      week: 'ವಾರ - ${{priceWEEK}} USD',
      month: 'ತಿಂಗಳು - ${{priceMONTH}} USD',
      lifetime: 'ಜೀವನಾವಧಿ - ${{priceLIFETIME}} USD',
      backToStart: '🔙 ಪ್ರಾರಂಭಕ್ಕೆ ಹಿಂದಿರುಗಿ',
      selectedPlan:
        'ನೀವು {{plan}} ಯೋಜನೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿದ್ದೀರಿ.\n\nನಿಮ್ಮ ಖರೀದಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಈ ಲಿಂಕ್ ಅನ್ನು ಅನುಸರಿಸಿ: [ಈಗ ಪಾವತಿ ಮಾಡಿ]({{payLink}})\n\nಈ ಬೀಲ್ {{expiryDate}} ರಂದು ಮುಗಿಯುತ್ತದೆ.',
    },
    redeem: {
      enterCode: 'ನಿಮ್ಮ ಲೈಸೆನ್ಸ್ ಅನ್ನು ರೀಡೀಮ್ ಮಾಡಲು ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಕೋಡ್ ಅನ್ನು ನಮೂದಿಸಿ:',
      cancel: 'ರದ್ದುಗೊಳಿಸಿ',
    },
    menu: {
      title: 'ಕೆಳಗಿನ ಆಯ್ಕೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಆಯ್ಕೆಮಾಡಿ:',
      create: 'ಲೈಸೆನ್ಸ್ ರಚಿಸಿ',
      delete: 'ಲೈಸೆನ್ಸ್ ಅಳಿಸಿ',
      lookupLicense: 'ಲೈಸೆನ್ಸ್ ಹುಡುಕಿ',
      lookupTelegramID: 'ಟೆಲಿಗ್ರಾಮ್ ID ಹುಡುಕಿ',
      languageTitle: 'ನೀವು ಇಚ್ಛಿಸುವ ಭಾಷೆಯನ್ನು ಕೆಳಗೆ ಆಯ್ಕೆಮಾಡಿ:',
      languageSet: 'ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಸೆಟ್ ಮಾಡಲಾಗಿದೆ.',
    },
    invoice: {
      update: 'ಬಿಲ್ ನವೀಕರಣ:',
      statusPaid:
        'ಬಿಲ್ ನವೀಕರಣ:\n\nಸ್ಥಿತಿ: {{status}}\nಸಂದೇಶ: ಆದೇಶ #{{trackId}} ಗೆ ಪಾವತಿ ಯಶಸ್ವಿಯಾಗಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ.\nಇದು ನಿಮ್ಮ ಲೈಸೆನ್ಸ್: `{{license}}`',
      statusExpired: '⌛️ ನಿಮ್ಮ ಬಿಲ್ #{{trackId}} ಅವಧಿ ಮುಗಿದಿದೆ. ❌❌',
      statusDefault:
        "ಬಿಲ್ ನವೀಕರಣ:\n\nಸ್ಥಿತಿ: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ: $' + amount + ' ' + currency : ''}}",
    },
  },
  ml: {
    start: {
      welcome: '▶️ {{appName}} ലേക്ക് സ്വാഗതം\n\n{{description}}\n\n**സവിശേഷതകൾ**\n {{features}}',
      menu: '📜 പ്രാഥമിക മെനു',
      accountInfo: '🔍 അക്കൗണ്ട് വിവരം',
      redeem: '🎟️ വീണ്ടെടുക്കുക',
      purchase: '🪪 വാങ്ങുക',
      languageSelect: '🌐 ഭാഷ തിരഞ്ഞെടുക്കുക',
    },
    accountInfo: {
      title: 'ഇതാണ് നിങ്ങളുടെ വിവരം:',
      fields: {
        creationDate: 'ഉൽപ്പത്തി തീയതി',
        expirationDate: 'കാലഹരണപ്പെടുന്ന തീയതി',
        creatorID: 'സ്രഷ്ടാവിന്റെ ഐഡി',
        license: 'ലൈസൻസ്',
        telegramID: 'ടെലിഗ്രാം ഐഡി',
        total: 'മൊത്തം',
      },
      returnToStart: '🔙 ആദ്യത്തേക്ക് മടങ്ങുക',
    },
    errors: {
      licenseNotFound: 'ലൈസൻസ് കണ്ടെത്തിയില്ല.',
      invalidLicense: 'അസാധുവായ ലൈസൻസ് കീ.',
      alreadyRedeemed: 'ലൈസൻസ് ഇതിനകം വീണ്ടെടുത്തിട്ടുണ്ട്.',
      licenseExpired: 'നിങ്ങളുടെ ലൈസൻസ് കാലഹരണപ്പെട്ടു.',
      purchaseFailed: 'വാങ്ങൽ പരാജയപ്പെട്ടു. ദയവായി പിന്നീട് ശ്രമിക്കുക.',
    },
    purchase: {
      please: 'ദയവായി ലൈസൻസ് വാങ്ങുക',
      chooseOption: 'വാങ്ങൽ ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക:',
      week: 'ആഴ്ച - ${{priceWEEK}} USD',
      month: 'മാസം - ${{priceMONTH}} USD',
      lifetime: 'ജീവിതകാലം - ${{priceLIFETIME}} USD',
      backToStart: '🔙 തുടക്കത്തിലേക്ക് മടങ്ങുക',
      selectedPlan:
        'നിങ്ങൾ {{plan}} പദ്ധതി തിരഞ്ഞെടുക്കുകയുണ്ടായി.\n\nനിങ്ങളുടെ വാങ്ങൽ പൂർത്തിയാക്കാൻ ദയവായി ലിങ്ക് പിന്തുടരുക: [ഇപ്പോൾ പോക്കുക]({{payLink}})\n\nഈ ബിൽ {{expiryDate}} ന് കാലഹരണപ്പെടും.',
    },
    redeem: {
      enterCode: 'നിങ്ങളുടെ ലൈസൻസ് വീണ്ടെടുക്കാൻ ദയവായി ചുവടെയുള്ള കോഡ് നൽകുക:',
      cancel: 'റദ്ദാക്കുക',
    },
    menu: {
      title: 'താഴെ നൽകിയിരിക്കുന്നവയിൽ നിന്ന് ഒരു ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക:',
      create: 'ലൈസൻസ് സൃഷ്ടിക്കുക',
      delete: 'ലൈസൻസ് നീക്കംചെയ്യുക',
      lookupLicense: 'ലൈസൻസ് തിരയുക',
      lookupTelegramID: 'ടെലിഗ്രാം ഐഡി തിരയുക',
      languageTitle: 'താഴെ നിന്ന് നിങ്ങളുടെ ഇഷ്ടഭാഷ തിരഞ്ഞെടുക്കുക:',
      languageSet: 'ഭാഷ മലയാളത്തിലേക്ക് ക്രമീകരിക്കപ്പെട്ടിരിക്കുന്നു.',
    },
    invoice: {
      update: 'ഇൻവോയ്സ് അപ്‌ഡേറ്റ്:',
      statusPaid:
        'ഇൻവോയ്സ് അപ്‌ഡേറ്റ്:\n\nനില: {{status}}\nസന്ദേശം: ഓർഡർ #{{trackId}} ന് പണമടച്ചത് വിജയകരമായി ലഭിച്ചിരിക്കുന്നു.\nഇതാണ് നിങ്ങളുടെ ലൈസൻസ്: `{{license}}`',
      statusExpired: '⌛️ നിങ്ങളുടെ ഇൻവോയ്സ് #{{trackId}} കാലഹരണപ്പെട്ടു. ❌❌',
      statusDefault:
        "ഇൻവോയ്സ് അപ്‌ഡേറ്റ്:\n\nനില: {{status}}\n{{trackId ? 'ഐഡി: ' + trackId : ''}}{{amount && currency ? '\\nഅടയ്ക്കാനിരിക്കുന്ന തുക: $' + amount + ' ' + currency : ''}}",
    },
  },
  ur: {
    start: {
      welcome: '▶️ {{appName}} میں خوش آمدید\n\n{{description}}\n\n**خصوصیات**\n {{features}}',
      menu: '📜 مرکزی مینو',
      accountInfo: '🔍 اکاؤنٹ کی معلومات',
      redeem: '🎟️ ریڈیم کریں',
      purchase: '🪪 خریداری کریں',
      languageSelect: '🌐 زبان منتخب کریں',
    },
    accountInfo: {
      title: 'یہ آپ کی معلومات ہیں:',
      fields: {
        creationDate: 'تخلیق کی تاریخ',
        expirationDate: 'خاتمے کی تاریخ',
        creatorID: 'تخلیق کار کا آئی ڈی',
        license: 'لائسنس',
        telegramID: 'ٹیلیگرام آئی ڈی',
        total: 'کل',
      },
      returnToStart: '🔙 آغاز پر واپس جائیں',
    },
    errors: {
      licenseNotFound: 'لائسنس نہیں ملا۔',
      invalidLicense: 'غلط لائسنس کلید۔',
      alreadyRedeemed: 'لائسنس پہلے ہی ریڈیم کیا جا چکا ہے۔',
      licenseExpired: 'آپ کا لائسنس ختم ہو چکا ہے۔',
      purchaseFailed: 'خریداری ناکام ہوگئی۔ براہ کرم بعد میں دوبارہ کوشش کریں۔',
    },
    purchase: {
      please: 'براہ کرم ایک لائسنس خریدیں',
      chooseOption: 'براہ کرم خریداری کا اختیار منتخب کریں:',
      week: 'ہفتہ - ${{priceWEEK}} USD',
      month: 'مہینہ - ${{priceMONTH}} USD',
      lifetime: 'تاحیات - ${{priceLIFETIME}} USD',
      backToStart: '🔙 آغاز پر واپس جائیں',
      selectedPlan:
        'آپ نے {{plan}} منصوبہ منتخب کیا ہے۔\n\nبراہ کرم اپنی خریداری مکمل کرنے کے لیے لنک پر جائیں: [ابھی ادائیگی کریں]({{payLink}})\n\nیہ انوائس {{expiryDate}} پر ختم ہو جائے گا۔',
    },
    redeem: {
      enterCode: 'اپنا لائسنس ریڈیم کرنے کے لیے نیچے کوڈ درج کریں:',
      cancel: 'منسوخ کریں',
    },
    menu: {
      title: 'نیچے دیے گئے اختیارات میں سے کسی ایک کا انتخاب کریں:',
      create: 'لائسنس بنائیں',
      delete: 'لائسنس حذف کریں',
      lookupLicense: 'لائسنس تلاش کریں',
      lookupTelegramID: 'ٹیلیگرام آئی ڈی تلاش کریں',
      languageTitle: 'نیچے سے اپنی پسندیدہ زبان منتخب کریں:',
      languageSet: 'زبان اردو میں سیٹ کر دی گئی ہے۔',
    },
    invoice: {
      update: 'انوائس کی تازہ کاری:',
      statusPaid:
        'انوائس کی تازہ کاری:\n\nحالت: {{status}}\nپیغام: آرڈر #{{trackId}} کی ادائیگی کامیابی سے موصول ہو گئی ہے۔\nیہ ہے آپ کا لائسنس: `{{license}}`',
      statusExpired: '⌛️ آپ کا انوائس #{{trackId}} ختم ہو گیا ہے۔ ❌❌',
      statusDefault:
        "انوائس کی تازہ کاری:\n\nحالت: {{status}}\n{{trackId ? 'آئی ڈی: ' + trackId : ''}}{{amount && currency ? '\\nواجب الادا رقم: $' + amount + ' ' + currency : ''}}",
    },
  },
  vi: {
    start: {
      welcome:
        '▶️ Chào mừng đến với {{appName}}\n\n{{description}}\n\n**Tính năng**\n {{features}}',
      menu: '📜 Menu chính',
      accountInfo: '🔍 Thông tin tài khoản',
      redeem: '🎟️ Đổi mã',
      purchase: '🪪 Mua hàng',
      languageSelect: '🌐 Chọn ngôn ngữ',
    },
    accountInfo: {
      title: 'Đây là thông tin của bạn:',
      fields: {
        creationDate: 'Ngày tạo',
        expirationDate: 'Ngày hết hạn',
        creatorID: 'ID người tạo',
        license: 'Giấy phép',
        telegramID: 'ID Telegram',
        total: 'Tổng cộng',
      },
      returnToStart: '🔙 Quay lại trang chính',
    },
    errors: {
      licenseNotFound: 'Không tìm thấy giấy phép.',
      invalidLicense: 'Mã giấy phép không hợp lệ.',
      alreadyRedeemed: 'Giấy phép đã được sử dụng.',
      licenseExpired: 'Giấy phép của bạn đã hết hạn.',
      purchaseFailed: 'Giao dịch thất bại. Vui lòng thử lại sau.',
    },
    purchase: {
      please: 'Vui lòng mua giấy phép',
      chooseOption: 'Vui lòng chọn tùy chọn mua:',
      week: 'Tuần - ${{priceWEEK}} USD',
      month: 'Tháng - ${{priceMONTH}} USD',
      lifetime: 'Trọn đời - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Quay lại trang chính',
      selectedPlan:
        'Bạn đã chọn gói {{plan}}.\n\nVui lòng nhấp vào liên kết để hoàn thành giao dịch: [Thanh toán ngay]({{payLink}})\n\nHóa đơn này sẽ hết hạn vào: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Nhập mã bên dưới để đổi giấy phép của bạn:',
      cancel: 'Hủy',
    },
    menu: {
      title: 'Chọn một tùy chọn bên dưới:',
      create: 'Tạo giấy phép',
      delete: 'Xóa giấy phép',
      lookupLicense: 'Tra cứu giấy phép',
      lookupTelegramID: 'Tra cứu ID Telegram',
      languageTitle: 'Chọn ngôn ngữ bạn muốn:',
      languageSet: 'Ngôn ngữ đã được đặt thành Tiếng Việt.',
    },
    invoice: {
      update: 'Cập nhật hóa đơn:',
      statusPaid:
        'Cập nhật hóa đơn:\n\nTrạng thái: {{status}}\nTin nhắn: Thanh toán thành công cho đơn hàng #{{trackId}}.\nĐây là giấy phép của bạn: `{{license}}`',
      statusExpired: '⌛️ Hóa đơn #{{trackId}} của bạn đã hết hạn. ❌❌',
      statusDefault:
        "Cập nhật hóa đơn:\n\nTrạng thái: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nSố tiền còn lại: $' + amount + ' ' + currency : ''}}",
    },
  },
  tl: {
    start: {
      welcome:
        '▶️ Maligayang pagdating sa {{appName}}\n\n{{description}}\n\n**Mga Tampok**\n {{features}}',
      menu: '📜 Pangunahing Menu',
      accountInfo: '🔍 Impormasyon ng Account',
      redeem: '🎟️ I-redeem',
      purchase: '🪪 Bumili',
      languageSelect: '🌐 Pumili ng Wika',
    },
    accountInfo: {
      title: 'Narito ang iyong impormasyon:',
      fields: {
        creationDate: 'Petsa ng Paglikha',
        expirationDate: 'Petsa ng Pag-expire',
        creatorID: 'ID ng Lumikha',
        license: 'Lisensya',
        telegramID: 'Telegram ID',
        total: 'Kabuuan',
      },
      returnToStart: '🔙 Bumalik sa Simula',
    },
    errors: {
      licenseNotFound: 'Hindi natagpuan ang lisensya.',
      invalidLicense: 'Hindi wastong lisensya.',
      alreadyRedeemed: 'Ang lisensya ay na-redeem na.',
      licenseExpired: 'Ang iyong lisensya ay nag-expire na.',
      purchaseFailed: 'Nabigo ang pagbili. Subukang muli sa ibang pagkakataon.',
    },
    purchase: {
      please: 'Mangyaring bumili ng lisensya',
      chooseOption: 'Pumili ng isang pagpipilian sa pagbili:',
      week: 'Linggo - ${{priceWEEK}} USD',
      month: 'Buwan - ${{priceMONTH}} USD',
      lifetime: 'Habambuhay - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Bumalik sa Simula',
      selectedPlan:
        'Pinili mo ang {{plan}} na plano.\n\nPakisundan ang link upang makumpleto ang iyong pagbili: [Magbayad Ngayon]({{payLink}})\n\nMag-e-expire ang invoice na ito sa: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Upang i-redeem ang iyong lisensya, ilagay ang code sa ibaba:',
      cancel: 'Kanselahin',
    },
    menu: {
      title: 'Pumili mula sa mga opsyon sa ibaba:',
      create: 'Gumawa ng Lisensya',
      delete: 'Tanggalin ang Lisensya',
      lookupLicense: 'Hanapin ang Lisensya',
      lookupTelegramID: 'Hanapin ang Telegram ID',
      languageTitle: 'Pumili ng nais na wika sa ibaba:',
      languageSet: 'Ang wika ay na-set sa Filipino/Tagalog.',
    },
    invoice: {
      update: 'Pag-update ng Invoice:',
      statusPaid:
        'Pag-update ng Invoice:\n\nStatus: {{status}}\nMensahe: Matagumpay na natanggap ang pagbabayad para sa order #{{trackId}}.\nNarito ang iyong lisensya: `{{license}}`',
      statusExpired: '⌛️ Nag-expire na ang iyong invoice #{{trackId}}. ❌❌',
      statusDefault:
        "Pag-update ng Invoice:\n\nStatus: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nNatitirang Halaga: $' + amount + ' ' + currency : ''}}",
    },
  },
  th: {
    start: {
      welcome: '▶️ ยินดีต้อนรับสู่ {{appName}}\n\n{{description}}\n\n**คุณสมบัติ**\n {{features}}',
      menu: '📜 เมนูหลัก',
      accountInfo: '🔍 ข้อมูลบัญชี',
      redeem: '🎟️ แลกรหัส',
      purchase: '🪪 ซื้อ',
      languageSelect: '🌐 เลือกภาษา',
    },
    accountInfo: {
      title: 'นี่คือข้อมูลของคุณ:',
      fields: {
        creationDate: 'วันที่สร้าง',
        expirationDate: 'วันหมดอายุ',
        creatorID: 'ID ผู้สร้าง',
        license: 'ใบอนุญาต',
        telegramID: 'Telegram ID',
        total: 'รวมทั้งหมด',
      },
      returnToStart: '🔙 กลับไปที่เริ่มต้น',
    },
    errors: {
      licenseNotFound: 'ไม่พบใบอนุญาต',
      invalidLicense: 'รหัสใบอนุญาตไม่ถูกต้อง',
      alreadyRedeemed: 'ใบอนุญาตถูกแลกไปแล้ว',
      licenseExpired: 'ใบอนุญาตของคุณหมดอายุแล้ว',
      purchaseFailed: 'การซื้อไม่สำเร็จ กรุณาลองอีกครั้งในภายหลัง',
    },
    purchase: {
      please: 'กรุณาซื้อใบอนุญาต',
      chooseOption: 'กรุณาเลือกตัวเลือกการซื้อ:',
      week: 'สัปดาห์ - ${{priceWEEK}} USD',
      month: 'เดือน - ${{priceMONTH}} USD',
      lifetime: 'ตลอดชีพ - ${{priceLIFETIME}} USD',
      backToStart: '🔙 กลับไปที่เริ่มต้น',
      selectedPlan:
        'คุณได้เลือกแผน {{plan}}.\n\nกรุณาติดตามลิงก์เพื่อทำการซื้อให้เสร็จสิ้น: [จ่ายเงินตอนนี้]({{payLink}})\n\nใบแจ้งหนี้นี้จะหมดอายุในวันที่: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'เพื่อแลกรหัสใบอนุญาต กรุณากรอกโค้ดด้านล่าง:',
      cancel: 'ยกเลิก',
    },
    menu: {
      title: 'เลือกตัวเลือกด้านล่าง:',
      create: 'สร้างใบอนุญาต',
      delete: 'ลบใบอนุญาต',
      lookupLicense: 'ค้นหาใบอนุญาต',
      lookupTelegramID: 'ค้นหา Telegram ID',
      languageTitle: 'เลือกภาษาที่ต้องการด้านล่าง:',
      languageSet: 'ตั้งค่าภาษาเป็นภาษาไทยแล้ว',
    },
    invoice: {
      update: 'อัปเดตใบแจ้งหนี้:',
      statusPaid:
        'อัปเดตใบแจ้งหนี้:\n\nสถานะ: {{status}}\nข้อความ: การชำระเงินสำหรับคำสั่งซื้อ #{{trackId}} เสร็จสมบูรณ์\nนี่คือใบอนุญาตของคุณ: `{{license}}`',
      statusExpired: '⌛️ ใบแจ้งหนี้ #{{trackId}} หมดอายุแล้ว ❌❌',
      statusDefault:
        "อัปเดตใบแจ้งหนี้:\n\nสถานะ: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nจำนวนเงินที่ค้างชำระ: $' + amount + ' ' + currency : ''}}",
    },
  },
  my: {
    start: {
      welcome:
        '▶️ {{appName}} တွင်ကြိုဆိုပါသည်\n\n{{description}}\n\n**အင်္ဂါရပ်များ**\n {{features}}',
      menu: '📜 မူလမီနူး',
      accountInfo: '🔍 အကောင့်အချက်အလက်',
      redeem: '🎟️ Redeem',
      purchase: '🪪 ဝယ်ယူပါ',
      languageSelect: '🌐 ဘာသာစကားရွေးချယ်ပါ',
    },
    accountInfo: {
      title: 'သင်၏အချက်အလက်များ',
      fields: {
        creationDate: 'ဖန်တီးသည့်နေ့စွဲ',
        expirationDate: 'သက်တမ်းကုန်ဆုံးနေ့',
        creatorID: 'ဖန်တီးသူ ID',
        license: 'လိုင်စင်',
        telegramID: 'Telegram ID',
        total: 'စုစုပေါင်း',
      },
      returnToStart: '🔙 မူလနေရာသို့ပြန်သွားရန်',
    },
    errors: {
      licenseNotFound: 'လိုင်စင်မတွေ့ပါ။',
      invalidLicense: 'မမှန်ကန်သောလိုင်စင်။',
      alreadyRedeemed: 'လိုင်စင်ကိုမှ Redeemed လုပ်ပြီးသားဖြစ်သည်။',
      licenseExpired: 'သင်၏လိုင်စင် သက်တမ်းကုန်ဆုံးသွားပါပြီ။',
      purchaseFailed: 'ဝယ်ယူမှု မအောင်မြင်ပါ။ ကျေးဇူးပြု၍ နောက်မှ ပြန်လည်ကြိုးစားပါ။',
    },
    purchase: {
      please: 'ကျေးဇူးပြု၍ လိုင်စင်ဝယ်ယူပါ',
      chooseOption: 'ဝယ်ယူမှု ရွေးချယ်စရာရွေးပါ:',
      week: 'တစ်ပတ် - ${{priceWEEK}} USD',
      month: 'တစ်လ - ${{priceMONTH}} USD',
      lifetime: 'သက်တမ်းတစ်သက် - ${{priceLIFETIME}} USD',
      backToStart: '🔙 မူလနေရာသို့ပြန်သွားရန်',
      selectedPlan:
        'သင်သည် {{plan}} အစီအစဉ်ကို ရွေးချယ်ထားသည်။\n\nဝယ်ယူမှုကို ပြီးမြောက်ရန် ဒီလင့်ခ်ကို အောင်မြင်စွာဖွင့်ပါ: [ယခုပေးဆောင်ပါ]({{payLink}})\n\nဒီလက်ခံငွေစာရင်း {{expiryDate}} မှာ သက်တမ်းကုန်ဆုံးပါမည်။',
    },
    redeem: {
      enterCode: 'သင်၏လိုင်စင်ကို Redeem ပြုလုပ်ရန်၊ အောက်ပါကုဒ်ကို ရိုက်ထည့်ပါ:',
      cancel: 'ဖျက်သိမ်းပါ',
    },
    menu: {
      title: 'အောက်ပါရွေးချယ်စရာများမှတစ်ခုကိုရွေးပါ:',
      create: 'လိုင်စင် ဖန်တီးရန်',
      delete: 'လိုင်စင် ဖျက်ရန်',
      lookupLicense: 'လိုင်စင် ရှာဖွေပါ',
      lookupTelegramID: 'Telegram ID ရှာဖွေပါ',
      languageTitle: 'အောက်မှာ သင့်အကြိုက်ဆုံး ဘာသာစကားကို ရွေးချယ်ပါ:',
      languageSet: 'ဘာသာစကားကို မြန်မာလို သတ်မှတ်ပြီးပါပြီ။',
    },
    invoice: {
      update: 'ငွေတောင်းခံလွှာ အသစ်ပြင်ဆင်မှု:',
      statusPaid:
        'ငွေတောင်းခံလွှာ အသစ်ပြင်ဆင်မှု:\n\nအခြေအနေ: {{status}}\nသတင်းစာ: မှာယူမှု #{{trackId}} အတွက် ငွေပေးချေမှုကို အောင်မြင်စွာ လက်ခံရရှိပါသည်။\nဒီမှာ သင့်လိုင်စင်: `{{license}}`',
      statusExpired: '⌛️ သင်၏ ငွေတောင်းခံလွှာ #{{trackId}} သက်တမ်းကုန်ဆုံးသွားပါပြီ ❌❌',
      statusDefault:
        "ငွေတောင်းခံလွှာ အသစ်ပြင်ဆင်မှု:\n\nအခြေအနေ: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nပေးရန် ကျန်ရှိသော ငွေ: $' + amount + ' ' + currency : ''}}",
    },
  },
  si: {
    start: {
      welcome:
        '▶️ {{appName}} වෙත සාදරයෙන් පිළිගනිමු\n\n{{description}}\n\n**විශේෂාංග**\n {{features}}',
      menu: '📜 ප්‍රධාන මෙනු',
      accountInfo: '🔍 ගිණුම් විස්තර',
      redeem: '🎟️ ගැණුම් විකුණුම්',
      purchase: '🪪 මිලදී ගැනීම',
      languageSelect: '🌐 භාෂාව තෝරන්න',
    },
    accountInfo: {
      title: 'ඔබේ විස්තර මෙන්න:',
      fields: {
        creationDate: 'නිර්මාණය වූ දිනය',
        expirationDate: 'කල් ඉකුත් වන දිනය',
        creatorID: 'නිර්මාපක ID',
        license: 'බලපත්‍රය',
        telegramID: 'Telegram ID',
        total: 'මුළු එකතුව',
      },
      returnToStart: '🔙 ආරම්භයට නැවත යන්න',
    },
    errors: {
      licenseNotFound: 'බලපත්‍රය හමු නොවීය.',
      invalidLicense: 'අවලංගු බලපත්‍ර යතුරකි.',
      alreadyRedeemed: 'මෙම බලපත්‍රය දැනටමත් භාවිතා කර ඇත.',
      licenseExpired: 'ඔබේ බලපත්‍රය කල් ඉකුත් වී ඇත.',
      purchaseFailed: 'ගනුදෙනුව අසාර්ථකයි. කරුණාකර නැවත උත්සාහ කරන්න.',
    },
    purchase: {
      please: 'කරුණාකර බලපත්‍රයක් මිලදී ගන්න',
      chooseOption: 'කරුණාකර මිලදී ගැනීමේ විකල්පය තෝරන්න:',
      week: 'සතිය - ${{priceWEEK}} USD',
      month: 'මාසය - ${{priceMONTH}} USD',
      lifetime: 'සම්පුර්ණ කාලය - ${{priceLIFETIME}} USD',
      backToStart: '🔙 ආරම්භයට නැවත යන්න',
      selectedPlan:
        'ඔබ {{plan}} සැලැස්ම තෝරා ඇත.\n\nඔබේ ගනුදෙනුව අවසන් කිරීමට, කරුණාකර මෙම සබැඳිය අනුගමනය කරන්න: [දැන් ගෙවන්න]({{payLink}})\n\nමෙම බිල්පත {{expiryDate}} දිනට කල් ඉකුත් වේ.',
    },
    redeem: {
      enterCode: 'ඔබේ බලපත්‍රය ගැණුම් විකුණුම් සඳහා පහත කේතය ඇතුළත් කරන්න:',
      cancel: 'අවලංගු කරන්න',
    },
    menu: {
      title: 'පහත විකල්පයන්ගෙන් එකක් තෝරන්න:',
      create: 'බලපත්‍රයක් සාදන්න',
      delete: 'බලපත්‍රය මකන්න',
      lookupLicense: 'බලපත්‍රය සෙවීම',
      lookupTelegramID: 'Telegram ID සෙවීම',
      languageTitle: 'පහත ඔබේ මනසකෙරුණු භාෂාව තෝරන්න:',
      languageSet: 'භාෂාව සිංහලට සකසා ඇත.',
    },
    invoice: {
      update: 'ඉන්වොයිස් යාවත්කාලීන කරන්න:',
      statusPaid:
        'ඉන්වොයිස් යාවත්කාලීන කිරීම:\n\nතත්ත්වය: {{status}}\nපණිවිඩය: ඇණවුම #{{trackId}} සඳහා ගෙවීම් සාර්ථකව ලැබී ඇත.\nමෙන්න ඔබේ බලපත්‍රය: `{{license}}`',
      statusExpired: '⌛️ ඔබේ ඉන්වොයිස් #{{trackId}} කල් ඉකුත් වී ඇත. ❌❌',
      statusDefault:
        "ඉන්වොයිස් යාවත්කාලීන කිරීම:\n\nතත්ත්වය: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nබැරැපත් මුදල: $' + amount + ' ' + currency : ''}}",
    },
  },
  ne: {
    start: {
      welcome: '▶️ {{appName}} मा स्वागत छ\n\n{{description}}\n\n**विशेषताहरू**\n {{features}}',
      menu: '📜 मुख्य मेनु',
      accountInfo: '🔍 खाता जानकारी',
      redeem: '🎟️ रिडिम गर्नुहोस्',
      purchase: '🪪 खरिद गर्नुहोस्',
      languageSelect: '🌐 भाषा चयन गर्नुहोस्',
    },
    accountInfo: {
      title: 'तपाईंको जानकारी यहाँ छ:',
      fields: {
        creationDate: 'सिर्जना मिति',
        expirationDate: 'म्याद समाप्त मिति',
        creatorID: 'सिर्जनाकर्ताको ID',
        license: 'लाइसेन्स',
        telegramID: 'Telegram ID',
        total: 'कुल',
      },
      returnToStart: '🔙 सुरुमा फर्कनुहोस्',
    },
    errors: {
      licenseNotFound: 'लाइसेन्स फेला परेन।',
      invalidLicense: 'अमान्य लाइसेन्स कुञ्जी।',
      alreadyRedeemed: 'लाइसेन्स पहिले नै रिडिम गरिसकिएको छ।',
      licenseExpired: 'तपाईंको लाइसेन्सको म्याद समाप्त भइसकेको छ।',
      purchaseFailed: 'खरिद असफल भयो। कृपया पछि फेरि प्रयास गर्नुहोस्।',
    },
    purchase: {
      please: 'कृपया लाइसेन्स खरिद गर्नुहोस्',
      chooseOption: 'कृपया खरिद विकल्प चयन गर्नुहोस्:',
      week: 'हप्ता - ${{priceWEEK}} USD',
      month: 'महिना - ${{priceMONTH}} USD',
      lifetime: 'आजीवन - ${{priceLIFETIME}} USD',
      backToStart: '🔙 सुरुमा फर्कनुहोस्',
      selectedPlan:
        'तपाईंले {{plan}} योजना चयन गर्नुभयो।\n\nकृपया खरिद पूरा गर्न यो लिङ्क अनुसरण गर्नुहोस्: [अहिले भुक्तानी गर्नुहोस्]({{payLink}})\n\nयो इनभ्वाइस {{expiryDate}} मा समाप्त हुनेछ।',
    },
    redeem: {
      enterCode: 'तपाईंको लाइसेन्स रिडिम गर्न कृपया तलको कोड प्रविष्ट गर्नुहोस्:',
      cancel: 'रद्द गर्नुहोस्',
    },
    menu: {
      title: 'तलका विकल्पहरूबाट एक चयन गर्नुहोस्:',
      create: 'लाइसेन्स सिर्जना गर्नुहोस्',
      delete: 'लाइसेन्स मेटाउनुहोस्',
      lookupLicense: 'लाइसेन्स खोज्नुहोस्',
      lookupTelegramID: 'Telegram ID खोज्नुहोस्',
      languageTitle: 'तल आफ्नो मनपर्ने भाषा चयन गर्नुहोस्:',
      languageSet: 'भाषा नेपालीमा सेट गरिएको छ।',
    },
    invoice: {
      update: 'इनभ्वाइस अद्यावधिक:',
      statusPaid:
        'इनभ्वाइस अद्यावधिक:\n\nस्थिति: {{status}}\nसन्देश: अर्डर #{{trackId}} को लागि भुक्तानी सफलतापूर्वक प्राप्त भयो।\nयहाँ तपाईंको लाइसेन्स छ: `{{license}}`',
      statusExpired: '⌛️ तपाईंको इनभ्वाइस #{{trackId}} को म्याद समाप्त भइसकेको छ। ❌❌',
      statusDefault:
        "इनभ्वाइस अद्यावधिक:\n\nस्थिति: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nभुक्तानी गर्न बाँकी रकम: $' + amount + ' ' + currency : ''}}",
    },
  },
  km: {
    start: {
      welcome:
        '▶️ សូមស្វាគមន៍មកកាន់ {{appName}}\n\n{{description}}\n\n**លក្ខណៈពិសេស**\n {{features}}',
      menu: '📜 មេនុយចម្បង',
      accountInfo: '🔍 ព័ត៌មានគណនី',
      redeem: '🎟️ ដោះលែង',
      purchase: '🪪 ទិញ',
      languageSelect: '🌐 ជ្រើសរើសភាសា',
    },
    accountInfo: {
      title: 'នេះគឺជាព័ត៌មានរបស់អ្នក៖',
      fields: {
        creationDate: 'កាលបរិច្ឆេទបង្កើត',
        expirationDate: 'កាលបរិច្ឆេទផុតកំណត់',
        creatorID: 'ID របស់អ្នកបង្កើត',
        license: 'អាជ្ញាប័ណ្ណ',
        telegramID: 'Telegram ID',
        total: 'សរុប',
      },
      returnToStart: '🔙 ត្រឡប់ទៅដើម',
    },
    errors: {
      licenseNotFound: 'រកមិនឃើញអាជ្ញាប័ណ្ណទេ។',
      invalidLicense: 'លេខកូដអាជ្ញាប័ណ្ណមិនត្រឹមត្រូវ។',
      alreadyRedeemed: 'អាជ្ញាប័ណ្ណត្រូវបានដោះលែងរួចហើយ។',
      licenseExpired: 'អាជ្ញាប័ណ្ណរបស់អ្នកផុតកំណត់ហើយ។',
      purchaseFailed: 'ការទិញបានបរាជ័យ។ សូមព្យាយាមម្តងទៀត។',
    },
    purchase: {
      please: 'សូមទិញអាជ្ញាប័ណ្ណមួយ',
      chooseOption: 'សូមជ្រើសរើសជម្រើសទិញ៖',
      week: 'សប្តាហ៍ - ${{priceWEEK}} USD',
      month: 'ខែ - ${{priceMONTH}} USD',
      lifetime: 'ជាយូរអង្វែង - ${{priceLIFETIME}} USD',
      backToStart: '🔙 ត្រឡប់ទៅដើម',
      selectedPlan:
        'អ្នកបានជ្រើសយុទ្ធសាស្រ្ត {{plan}}។\n\nសូមអនុវត្តតំណភ្ជាប់ដើម្បីបញ្ចប់ការទិញ៖ [បង់លុយឥឡូវនេះ]({{payLink}})\n\nវិក័យប័ត្រនេះនឹងផុតកំណត់នៅ៖ {{expiryDate}}',
    },
    redeem: {
      enterCode: 'ដើម្បីដោះលែងអាជ្ញាប័ណ្ណរបស់អ្នក សូមបញ្ចូលលេខកូដខាងក្រោម៖',
      cancel: 'បោះបង់',
    },
    menu: {
      title: 'ជ្រើសរើសមួយចំណុចខាងក្រោម៖',
      create: 'បង្កើតអាជ្ញាប័ណ្ណ',
      delete: 'លុបអាជ្ញាប័ណ្ណ',
      lookupLicense: 'ស្វែងរកអាជ្ញាប័ណ្ណ',
      lookupTelegramID: 'ស្វែងរក Telegram ID',
      languageTitle: 'ជ្រើសរើសភាសាចង់បាន៖',
      languageSet: 'ភាសាត្រូវបានកំណត់ជាភាសាខ្មែរ។',
    },
    invoice: {
      update: 'ការអាប់ដេតវិក្កយបត្រ៖',
      statusPaid:
        'ការអាប់ដេតវិក្កយបត្រ៖\n\nស្ថានភាព៖ {{status}}\nសារ៖ ការបង់ប្រាក់សម្រាប់ការបញ្ជាទិញ #{{trackId}} ត្រូវបានទទួលដោយជោគជ័យ។\nនេះជាអាជ្ញាប័ណ្ណរបស់អ្នក៖ `{{license}}`',
      statusExpired: '⌛️ វិក័យប័ត្រ #{{trackId}} របស់អ្នកផុតកំណត់ហើយ។ ❌❌',
      statusDefault:
        "ការអាប់ដេតវិក្កយបត្រ៖\n\nស្ថានភាព៖ {{status}}\n{{trackId ? 'ID៖ ' + trackId : ''}}{{amount && currency ? '\\nចំនួនទឹកប្រាក់ដែលត្រូវបង់៖ $' + amount + ' ' + currency : ''}}",
    },
  },
  lo: {
    start: {
      welcome: '▶️ ຍິນດີຕ້ອນຮັບສູ່ {{appName}}\n\n{{description}}\n\n**ຄຸນສົມບັດ**\n {{features}}',
      menu: '📜 ເມນູຫຼັກ',
      accountInfo: '🔍 ຂໍ້ມູນບັນຊີ',
      redeem: '🎟️ ລົງທະບຽນ',
      purchase: '🪪 ຊື້',
      languageSelect: '🌐 ເລືອກພາສາ',
    },
    accountInfo: {
      title: 'ນີ້ແມ່ນຂໍ້ມູນຂອງເຈົ້າ:',
      fields: {
        creationDate: 'ວັນທີສ້າງ',
        expirationDate: 'ວັນທີໝົດອາຍຸ',
        creatorID: 'ID ຂອງຜູ້ສ້າງ',
        license: 'ໃບອະນຸຍາດ',
        telegramID: 'Telegram ID',
        total: 'ລວມທັງໝົດ',
      },
      returnToStart: '🔙 ກັບໄປທີ່ຈຸດເລີ່ມຕົ້ນ',
    },
    errors: {
      licenseNotFound: 'ບໍ່ພົບໃບອະນຸຍາດ.',
      invalidLicense: 'ລະຫັດໃບອະນຸຍາດບໍ່ຖືກຕ້ອງ.',
      alreadyRedeemed: 'ໃບອະນຸຍາດໄດ້ຖືກໃຊ້ງານແລ້ວ.',
      licenseExpired: 'ໃບອະນຸຍາດຂອງເຈົ້າໝົດອາຍຸແລ້ວ.',
      purchaseFailed: 'ການຊື້ລົ້ມເຫຼວ. ກະລຸນາລອງອີກເທື່ອ.',
    },
    purchase: {
      please: 'ກະລຸນາຊື້ໃບອະນຸຍາດ',
      chooseOption: 'ກະລຸນາເລືອກຕົວເລືອກການຊື້:',
      week: 'ອາທິດ - ${{priceWEEK}} USD',
      month: 'ເດືອນ - ${{priceMONTH}} USD',
      lifetime: 'ຖາວອນ - ${{priceLIFETIME}} USD',
      backToStart: '🔙 ກັບໄປທີ່ຈຸດເລີ່ມຕົ້ນ',
      selectedPlan:
        'ເຈົ້າໄດ້ເລືອກແຜນ {{plan}}.\n\nກະລຸນາຄລິກລິ້ງນີ້ເພື່ອສຳເລັດການຊື້: [ຊຳລະເງິນຕອນນີ້]({{payLink}})\n\nໃບຮັບເງິນນີ້ຈະໝົດອາຍຸວັນທີ {{expiryDate}}.',
    },
    redeem: {
      enterCode: 'ກະລຸນາປ້ອນລະຫັດຂ້າງລຸ່ມເພື່ອລົງທະບຽນໃບອະນຸຍາດ:',
      cancel: 'ຍົກເລີກ',
    },
    menu: {
      title: 'ເລືອກຂໍ້ເສຍລວມທີ່ມີທາງເລືອກລຸ່ມ:',
      create: 'ສ້າງໃບອະນຸຍາດ',
      delete: 'ລຶບໃບອະນຸຍາດ',
      lookupLicense: 'ຄົ້ນຫາໃບອະນຸຍາດ',
      lookupTelegramID: 'ຄົ້ນຫາ Telegram ID',
      languageTitle: 'ເລືອກພາສາທີ່ເຈົ້າຕ້ອງການຈາກລາຍການນີ້:',
      languageSet: 'ພາສາຖືກຕັ້ງໄວ້ເປັນພາສາລາວ.',
    },
    invoice: {
      update: 'ການອັບເດດໃບຮັບເງິນ:',
      statusPaid:
        'ການອັບເດດໃບຮັບເງິນ:\n\nສະຖານະ: {{status}}\nຂໍ້ຄວາມ: ການຊຳລະສໍາເລັດສໍາລັບຄໍາສັ່ງຊື້ #{{trackId}}.\nນີ້ແມ່ນໃບອະນຸຍາດຂອງເຈົ້າ: `{{license}}`',
      statusExpired: '⌛️ ໃບຮັບເງິນຂອງເຈົ້າ #{{trackId}} ໝົດອາຍຸແລ້ວ. ❌❌',
      statusDefault:
        "ການອັບເດດໃບຮັບເງິນ:\n\nສະຖານະ: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nຈໍານວນທີ່ຍັງຄ້າງ: $' + amount + ' ' + currency : ''}}",
    },
  },
  mn: {
    start: {
      welcome: '▶️ {{appName}}-д тавтай морилно уу\n\n{{description}}\n\n**Онцлог**\n {{features}}',
      menu: '📜 Үндсэн цэс',
      accountInfo: '🔍 Дансны мэдээлэл',
      redeem: '🎟️ Эрхээ идэвхжүүлэх',
      purchase: '🪪 Худалдан авах',
      languageSelect: '🌐 Хэл сонгох',
    },
    accountInfo: {
      title: 'Таны мэдээлэл энд байна:',
      fields: {
        creationDate: 'Үүсгэсэн огноо',
        expirationDate: 'Дуусах огноо',
        creatorID: 'Үүсгэсэн ID',
        license: 'Лиценз',
        telegramID: 'Telegram ID',
        total: 'Нийт',
      },
      returnToStart: '🔙 Эхлэл рүү буцах',
    },
    errors: {
      licenseNotFound: 'Лиценз олдсонгүй.',
      invalidLicense: 'Буруу лицензийн түлхүүр.',
      alreadyRedeemed: 'Энэхүү лицензийг аль хэдийн идэвхжүүлсэн байна.',
      licenseExpired: 'Таны лицензийн хугацаа дууссан байна.',
      purchaseFailed: 'Худалдан авалт амжилтгүй боллоо. Дахин оролдоно уу.',
    },
    purchase: {
      please: 'Лицензээ худалдаж авна уу',
      chooseOption: 'Худалдан авах сонголтоо сонгоно уу:',
      week: '7 хоног - ${{priceWEEK}} USD',
      month: 'Сар - ${{priceMONTH}} USD',
      lifetime: 'Бүх амьдралын турш - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Эхлэл рүү буцах',
      selectedPlan:
        'Та {{plan}} төлөвлөгөөг сонгосон байна.\n\nХудалдан авалтаа дуусгахад энэ холбоосыг дагана уу: [Одоо төлөх]({{payLink}})\n\nЭнэ төлбөрийн баримт {{expiryDate}}-д дуусна.',
    },
    redeem: {
      enterCode: 'Лицензээ идэвхжүүлэхийн тулд доорх кодыг оруулна уу:',
      cancel: 'Цуцлах',
    },
    menu: {
      title: 'Доорх сонголтуудаас сонгоно уу:',
      create: 'Лиценз үүсгэх',
      delete: 'Лиценз устгах',
      lookupLicense: 'Лиценз хайх',
      lookupTelegramID: 'Telegram ID хайх',
      languageTitle: 'Дуртай хэлээ доороос сонгоно уу:',
      languageSet: 'Хэлийг Монгол хэл рүү тохируулсан.',
    },
    invoice: {
      update: 'Төлбөрийн баримтыг шинэчлэх:',
      statusPaid:
        'Төлбөрийн баримтыг шинэчлэх:\n\nТөлөв: {{status}}\nМэдээлэл: Захиалга #{{trackId}}-ийн төлбөрийг амжилттай хүлээн авлаа.\nЭнд таны лиценз байна: `{{license}}`',
      statusExpired: '⌛️ Таны төлбөрийн баримт #{{trackId}} дууссан байна. ❌❌',
      statusDefault:
        "Төлбөрийн баримтыг шинэчлэх:\n\nТөлөв: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nТөлөх дүн: $' + amount + ' ' + currency : ''}}",
    },
  },
  wu: {
    start: {
      welcome: '▶️ {{appName}} 歡迎儂\n\n{{description}}\n\n**特點**\n {{features}}',
      menu: '📜 主要菜單',
      accountInfo: '🔍 帳戶信息',
      redeem: '🎟️ 兌換',
      purchase: '🪪 買',
      languageSelect: '🌐 選擇語言',
    },
    accountInfo: {
      title: '這是儂嘅信息:',
      fields: {
        creationDate: '創建日期',
        expirationDate: '到期日期',
        creatorID: '創建者 ID',
        license: '許可證',
        telegramID: 'Telegram ID',
        total: '總計',
      },
      returnToStart: '🔙 返回開始',
    },
    errors: {
      licenseNotFound: '無法找到許可證。',
      invalidLicense: '無效嘅許可證密鑰。',
      alreadyRedeemed: '許可證已經被兌換過了。',
      licenseExpired: '儂嘅許可證已經過期了。',
      purchaseFailed: '購買失敗。請稍後再試。',
    },
    purchase: {
      please: '請購買許可證',
      chooseOption: '請選擇購買選項:',
      week: '一周 - ${{priceWEEK}} USD',
      month: '一個月 - ${{priceMONTH}} USD',
      lifetime: '終身 - ${{priceLIFETIME}} USD',
      backToStart: '🔙 返回開始',
      selectedPlan:
        '儂已選擇 {{plan}} 計劃。\n\n請點擊以下鏈接完成購買: [立即支付]({{payLink}})\n\n此發票將於 {{expiryDate}} 過期。',
    },
    redeem: {
      enterCode: '要兌換許可證，請輸入以下代碼:',
      cancel: '取消',
    },
    menu: {
      title: '從下面選擇一個選項:',
      create: '創建許可證',
      delete: '刪除許可證',
      lookupLicense: '查找許可證',
      lookupTelegramID: '查找 Telegram ID',
      languageTitle: '從下面選擇儂想要嘅語言:',
      languageSet: '語言已設置為吳語（上海話）。',
    },
    invoice: {
      update: '發票更新:',
      statusPaid:
        '發票更新:\n\n狀態: {{status}}\n消息: 訂單 #{{trackId}} 嘅付款已成功收到。\n這是儂嘅許可證: `{{license}}`',
      statusExpired: '⌛️ 儂嘅發票 #{{trackId}} 已過期 ❌❌',
      statusDefault:
        "發票更新:\n\n狀態: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\n應付金額: $' + amount + ' ' + currency : ''}}",
    },
  },
  jv: {
    start: {
      welcome: '▶️ Sugeng rawuh ing {{appName}}\n\n{{description}}\n\n**Fitur**\n {{features}}',
      menu: '📜 Menu Utama',
      accountInfo: '🔍 Informasi Akun',
      redeem: '🎟️ Tukar',
      purchase: '🪪 Tuku',
      languageSelect: '🌐 Pilih Basa',
    },
    accountInfo: {
      title: 'Iki informasi panjenengan:',
      fields: {
        creationDate: 'Tanggal Gawe',
        expirationDate: 'Tanggal Kadaluwarsa',
        creatorID: 'ID Panggawe',
        license: 'Lisensi',
        telegramID: 'Telegram ID',
        total: 'Jumlah',
      },
      returnToStart: '🔙 Balik menyang wiwitan',
    },
    errors: {
      licenseNotFound: 'Lisensi ora ditemokake.',
      invalidLicense: 'Kunci lisensi ora sah.',
      alreadyRedeemed: 'Lisensi iki wis tau ditukar.',
      licenseExpired: 'Lisensi panjenengan wis kadaluwarsa.',
      purchaseFailed: 'Tuku gagal. Mangga nyoba maneh mengko.',
    },
    purchase: {
      please: 'Mangga tuku lisensi',
      chooseOption: 'Pilih salah siji pilihan tuku:',
      week: 'Minggu - ${{priceWEEK}} USD',
      month: 'Sasi - ${{priceMONTH}} USD',
      lifetime: 'Selawase - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Balik menyang wiwitan',
      selectedPlan:
        'Panjenengan milih rencana {{plan}}.\n\nMangga tindakake pranala iki kanggo ngrampungake tuku: [Bayar Saiki]({{payLink}})\n\nInvoice iki bakal kadaluwarsa tanggal: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Kanggo ngredek lisensi, mangga lebokake kode ing ngisor iki:',
      cancel: 'Batal',
    },
    menu: {
      title: 'Pilih salah siji pilihan ing ngisor iki:',
      create: 'Gawe Lisensi',
      delete: 'Hapus Lisensi',
      lookupLicense: 'Golèk Lisensi',
      lookupTelegramID: 'Golèk Telegram ID',
      languageTitle: 'Pilih basa favorit saka pilihan ing ngisor iki:',
      languageSet: 'Basa wis disetel dadi Basa Jawa.',
    },
    invoice: {
      update: 'Nganyari Invoice:',
      statusPaid:
        'Nganyari Invoice:\n\nStatus: {{status}}\nPesenan: Pembayaran kanggo pesanan #{{trackId}} wis sukses.\nIki lisensi sampeyan: `{{license}}`',
      statusExpired: '⌛️ Invoice sampeyan #{{trackId}} wis kadaluwarsa. ❌❌',
      statusDefault:
        "Nganyari Invoice:\n\nStatus: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nJumlah sing kudu dibayar: $' + amount + ' ' + currency : ''}}",
    },
  },
  ha: {
    start: {
      welcome:
        '▶️ Barka da zuwa {{appName}}\n\n{{description}}\n\n**Abubuwan da ke akwai**\n {{features}}',
      menu: '📜 Babban Menu',
      accountInfo: '🔍 Bayanin Asusun',
      redeem: '🎟️ Fansar lambar',
      purchase: '🪪 Sayi',
      languageSelect: '🌐 Zaɓi Yare',
    },
    accountInfo: {
      title: 'Ga bayanan ku:',
      fields: {
        creationDate: 'Ranar ƙirƙira',
        expirationDate: 'Ranar karewa',
        creatorID: 'ID na mahalicci',
        license: 'Lasisi',
        telegramID: 'Telegram ID',
        total: 'Jimla',
      },
      returnToStart: '🔙 Komawa Farko',
    },
    errors: {
      licenseNotFound: 'Ba a sami lasisi ba.',
      invalidLicense: 'Mabudin lasisi mara inganci.',
      alreadyRedeemed: 'An riga an fanshi lasisin.',
      licenseExpired: 'Lasisin ku ya ƙare.',
      purchaseFailed: 'Sayarwa ta kasa. Da fatan za a sake gwadawa daga baya.',
    },
    purchase: {
      please: 'Da fatan za a sayi lasisi',
      chooseOption: 'Da fatan za a zaɓi zaɓi na saye:',
      week: 'Mako - ${{priceWEEK}} USD',
      month: 'Wata - ${{priceMONTH}} USD',
      lifetime: 'Rayuwa - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Komawa Farko',
      selectedPlan:
        'Kun zaɓi shirin {{plan}}.\n\nDa fatan za a bi wannan hanyar don kammala sayen ku: [Biya Yanzu]({{payLink}})\n\nWannan takardar za ta ƙare a ranar: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Don fansar lasisin ku, shigar da lambar a ƙasa:',
      cancel: 'Soke',
    },
    menu: {
      title: 'Zaɓi daga zaɓuɓɓukan da ke ƙasa:',
      create: 'Ƙirƙiri Lasisi',
      delete: 'Share Lasisi',
      lookupLicense: 'Nemi Lasisi',
      lookupTelegramID: 'Nemi Telegram ID',
      languageTitle: 'Zaɓi yaren da kuka fi so daga ƙasa:',
      languageSet: 'An saita yare zuwa Hausa.',
    },
    invoice: {
      update: 'Sabunta Fature:',
      statusPaid:
        'Sabunta Fature:\n\nMatsayi: {{status}}\nSaƙo: An samu biyan kuɗi don oda #{{trackId}}.\nGa lasisin ku: `{{license}}`',
      statusExpired: '⌛️ Fature ɗinku #{{trackId}} ya ƙare. ❌❌',
      statusDefault:
        "Sabunta Fature:\n\nMatsayi: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nAdadin da ya rage: $' + amount + ' ' + currency : ''}}",
    },
  },
  yo: {
    start: {
      welcome: '▶️ Kaabọ si {{appName}}\n\n{{description}}\n\n**Awọn ẹya ara ẹrọ**\n {{features}}',
      menu: '📜 Àtòjọ Àkọ́kọ́',
      accountInfo: '🔍 Alaye Àkọọlẹ',
      redeem: '🎟️ Ràpadà',
      purchase: '🪪 Rà',
      languageSelect: '🌐 Yan Èdè',
    },
    accountInfo: {
      title: 'Eyi ni alaye rẹ:',
      fields: {
        creationDate: 'Ọjọ́ Ṣẹ̀dá',
        expirationDate: 'Ọjọ́ Iparí',
        creatorID: 'ID Ẹlẹda',
        license: 'Ẹ̀rí ìfọwọ́lẹ̀',
        telegramID: 'Telegram ID',
        total: 'Lapapọ',
      },
      returnToStart: '🔙 Pada sí Àkọ́kọ́',
    },
    errors: {
      licenseNotFound: 'Ẹ̀rí ìfọwọ́lẹ̀ kò rí.',
      invalidLicense: 'Kọ̀ódù ẹ̀rí ìfọwọ́lẹ̀ ti kò tọ̀.',
      alreadyRedeemed: 'Ẹ̀rí ìfọwọ́lẹ̀ ti jẹ́ ràpadà nígbà tẹlẹ̀.',
      licenseExpired: 'Ẹ̀rí ìfọwọ́lẹ̀ rẹ ti pari.',
      purchaseFailed: 'Ràpadà kuna. Jọwọ gbiyanju lẹ́ẹ̀kansi.',
    },
    purchase: {
      please: 'Jọwọ rà ẹ̀rí ìfọwọ́lẹ̀',
      chooseOption: 'Jọwọ yan aṣayan ìrà:',
      week: 'Ọ̀sẹ̀ - ${{priceWEEK}} USD',
      month: 'Osù - ${{priceMONTH}} USD',
      lifetime: 'Láààyè - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Pada sí Àkọ́kọ́',
      selectedPlan:
        'O ti yàn eto {{plan}}.\n\nJọwọ tẹ̀le ìjápọ̀ yìí láti parí ìrà rẹ: [San Wàyí]({{payLink}})\n\nẸ̀rí ìrà yìí máa parí ní ọjọ́: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Lati ràpadà ẹ̀rí ìfọwọ́lẹ̀ rẹ, tẹ̀ kóòdù ní isalẹ:',
      cancel: 'Fagilé',
    },
    menu: {
      title: 'Yan láti àwọn aṣayan isalẹ:',
      create: 'Ṣẹ́dá Ẹ̀rí ìfọwọ́lẹ̀',
      delete: 'Paarẹ Ẹ̀rí ìfọwọ́lẹ̀',
      lookupLicense: 'Wa Ẹ̀rí ìfọwọ́lẹ̀',
      lookupTelegramID: 'Wa Telegram ID',
      languageTitle: 'Yan èdè ti o fẹran lati inu atokọ yìí:',
      languageSet: 'Èdè ti ṣètò sí Yorùbá.',
    },
    invoice: {
      update: 'Imudojuiwọn Inifọnsi:',
      statusPaid:
        'Imudojuiwọn Inifọnsi:\n\nIpo: {{status}}\nÌkéde: Isanwo fun aṣẹ #{{trackId}} ni ṣáájú.\nẸ̀rí rẹ ni: `{{license}}`',
      statusExpired: '⌛️ Inifọnsi rẹ #{{trackId}} ti pari. ❌❌',
      statusDefault:
        "Imudojuiwọn Inifọnsi:\n\nIpo: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nOwo tó yẹ kó san: $' + amount + ' ' + currency : ''}}",
    },
  },
  sw: {
    start: {
      welcome: '▶️ Karibu {{appName}}\n\n{{description}}\n\n**Vipengele**\n {{features}}',
      menu: '📜 Menyu Kuu',
      accountInfo: '🔍 Taarifa za Akaunti',
      redeem: '🎟️ Dhamini',
      purchase: '🪪 Nunua',
      languageSelect: '🌐 Chagua Lugha',
    },
    accountInfo: {
      title: 'Hizi hapa taarifa zako:',
      fields: {
        creationDate: 'Tarehe ya Kuundwa',
        expirationDate: 'Tarehe ya Kuisha',
        creatorID: 'Kitambulisho cha Muumba',
        license: 'Leseni',
        telegramID: 'Telegram ID',
        total: 'Jumla',
      },
      returnToStart: '🔙 Rudi Mwanzo',
    },
    errors: {
      licenseNotFound: 'Leseni haikupatikana.',
      invalidLicense: 'Msimbo wa leseni si sahihi.',
      alreadyRedeemed: 'Leseni tayari imetumika.',
      licenseExpired: 'Leseni yako imekwisha muda wake.',
      purchaseFailed: 'Ununuzi umeshindikana. Tafadhali jaribu tena baadaye.',
    },
    purchase: {
      please: 'Tafadhali nunua leseni',
      chooseOption: 'Tafadhali chagua chaguo la ununuzi:',
      week: 'Wiki - ${{priceWEEK}} USD',
      month: 'Mwezi - ${{priceMONTH}} USD',
      lifetime: 'Maisha - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Rudi Mwanzo',
      selectedPlan:
        'Umechagua mpango wa {{plan}}.\n\nTafadhali fuata kiungo ili kukamilisha ununuzi wako: [Lipa Sasa]({{payLink}})\n\nAnkara hii itaisha muda wake mnamo: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Ili kudhamini leseni yako, tafadhali ingiza msimbo hapa chini:',
      cancel: 'Ghairi',
    },
    menu: {
      title: 'Chagua kutoka kwenye chaguo zilizo hapa chini:',
      create: 'Unda Leseni',
      delete: 'Futa Leseni',
      lookupLicense: 'Tafuta Leseni',
      lookupTelegramID: 'Tafuta Telegram ID',
      languageTitle: 'Chagua lugha unayopenda kutoka hapa chini:',
      languageSet: 'Lugha imewekwa kuwa Kiswahili.',
    },
    invoice: {
      update: 'Sasisho la Ankara:',
      statusPaid:
        'Sasisho la Ankara:\n\nHali: {{status}}\nUjumbe: Malipo yamepokelewa kwa mafanikio kwa agizo #{{trackId}}.\nHii hapa leseni yako: `{{license}}`',
      statusExpired: '⌛️ Ankara yako #{{trackId}} imeisha muda wake. ❌❌',
      statusDefault:
        "Sasisho la Ankara:\n\nHali: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nKiasi kinachodaiwa: $' + amount + ' ' + currency : ''}}",
    },
  },
  am: {
    start: {
      welcome: '▶️ {{appName}} እንኳን በደህና መጡ\n\n{{description}}\n\n**ባህሪዎች**\n {{features}}',
      menu: '📜 ዋና ማውጫ',
      accountInfo: '🔍 የመለያ መረጃ',
      redeem: '🎟️ ተቀበል',
      purchase: '🪪 ግዢ',
      languageSelect: '🌐 ቋንቋ ይምረጡ',
    },
    accountInfo: {
      title: 'እነሆ የእርስዎ መረጃ:',
      fields: {
        creationDate: 'የተፈጠረበት ቀን',
        expirationDate: 'የማስታወቂያ ቀን',
        creatorID: 'የፈጠራ መለያ',
        license: 'ፈቃድ',
        telegramID: 'Telegram ID',
        total: 'ጠቅላላ',
      },
      returnToStart: '🔙 ወደ መጀመሪያ ተመለስ',
    },
    errors: {
      licenseNotFound: 'ፈቃድ አልተገኘም።',
      invalidLicense: 'ልክ ያልሆነ ፈቃድ ኮድ።',
      alreadyRedeemed: 'ፈቃድ አስቀድሞ ተቀብሏል።',
      licenseExpired: 'ፈቃድዎ አስቀድሞ አልተዘረጋም።',
      purchaseFailed: 'ግዢ አልተሳካም። እባኮትን ወደፊት ደግመው ይሞክሩ።',
    },
    purchase: {
      please: 'እባኮትን ፈቃድ ይግዙ',
      chooseOption: 'እባኮትን የግዢ አማራጭ ይምረጡ:',
      week: 'ሳምንት - ${{priceWEEK}} USD',
      month: 'ወር - ${{priceMONTH}} USD',
      lifetime: 'ሕይወት ሙሉ - ${{priceLIFETIME}} USD',
      backToStart: '🔙 ወደ መጀመሪያ ተመለስ',
      selectedPlan:
        'እርስዎ {{plan}} እቅፍን መርጠዋል።\n\nግዢዎን ለማጠናቀቅ እባኮትን ይህን መያዣ ይከተሉ: [አሁን ይክፈሉ]({{payLink}})\n\nይህ ክፍያ ማስታወቂያ በ: {{expiryDate}} ይበቃል።',
    },
    redeem: {
      enterCode: 'ፈቃድዎን ለመቀበል እባኮትን በታች ኮድ ያስገቡ:',
      cancel: 'አቋርጥ',
    },
    menu: {
      title: 'ከታች ካሉት አማራጮች ውስጥ ይምረጡ:',
      create: 'ፈቃድ ይፍጠሩ',
      delete: 'ፈቃድ ይሰርዙ',
      lookupLicense: 'ፈቃድ ይፈልጉ',
      lookupTelegramID: 'Telegram ID ይፈልጉ',
      languageTitle: 'ከታች ከሚኖሩት እንቅስቃሴዎች ውስጥ ቋንቋ ይምረጡ:',
      languageSet: 'ቋንቋ ወደ አማርኛ ተይዞል።',
    },
    invoice: {
      update: 'የክፍያ ማስታወቂያ አድሱ:',
      statusPaid:
        'የክፍያ ማስታወቂያ አድስ:\n\nሁኔታ: {{status}}\nመልእክት: ለትዕዛዝ #{{trackId}} ክፍያ በሚገኝበት ሁኔታ ተቀብሏል።\nእነሆ። ይህ ፈቃድዎ ነው።: `{{license}}`',
      statusExpired: '⌛️ የክፍያ ማስታወቂያዎ #{{trackId}} አስቀድሞ አልተጠቀምም። ❌❌',
      statusDefault:
        "የክፍያ ማስታወቂያ አድሱ:\n\nሁኔታ: {{status}}\n{{trackId ? 'መታወቂያ: ' + trackId : ''}}{{amount && currency ? '\\nሚኖር ክፍያ ብር: $' + amount + ' ' + currency : ''}}",
    },
  },
  eg_ar: {
    start: {
      welcome: '▶️ أهلاً بيك في {{appName}}\n\n{{description}}\n\n**الميزات**\n {{features}}',
      menu: '📜 القائمة الرئيسية',
      accountInfo: '🔍 معلومات الحساب',
      redeem: '🎟️ استرداد',
      purchase: '🪪 شراء',
      languageSelect: '🌐 اختر اللغة',
    },
    accountInfo: {
      title: 'دي بياناتك:',
      fields: {
        creationDate: 'تاريخ الإنشاء',
        expirationDate: 'تاريخ الانتهاء',
        creatorID: 'كود المنشئ',
        license: 'الرخصة',
        telegramID: 'Telegram ID',
        total: 'الإجمالي',
      },
      returnToStart: '🔙 الرجوع للصفحة الرئيسية',
    },
    errors: {
      licenseNotFound: 'الرخصة مش موجودة.',
      invalidLicense: 'مفتاح الرخصة غير صحيح.',
      alreadyRedeemed: 'الرخصة دي استُخدمت قبل كده.',
      licenseExpired: 'مدة الرخصة خلصت.',
      purchaseFailed: 'فشل الشراء. حاول مرة تانية بعد شوية.',
    },
    purchase: {
      please: 'ياريت تشتري رخصة',
      chooseOption: 'اختار طريقة الشراء:',
      week: 'أسبوع - ${{priceWEEK}} USD',
      month: 'شهر - ${{priceMONTH}} USD',
      lifetime: 'مدى الحياة - ${{priceLIFETIME}} USD',
      backToStart: '🔙 الرجوع للصفحة الرئيسية',
      selectedPlan:
        'انت اخترت خطة {{plan}}.\n\nاتبع اللينك ده عشان تكمل عملية الشراء: [ادفع الآن]({{payLink}})\n\nالفاتورة دي هتنتهي يوم: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'عشان تسترد الرخصة، اكتب الكود هنا:',
      cancel: 'إلغاء',
    },
    menu: {
      title: 'اختار من الاختيارات اللي تحت:',
      create: 'إنشاء رخصة',
      delete: 'مسح رخصة',
      lookupLicense: 'ابحث عن رخصة',
      lookupTelegramID: 'ابحث عن Telegram ID',
      languageTitle: 'اختار اللغة اللي تناسبك من تحت:',
      languageSet: 'تم ضبط اللغة إلى العربية المصرية.',
    },
    invoice: {
      update: 'تحديث الفاتورة:',
      statusPaid:
        'تحديث الفاتورة:\n\nالحالة: {{status}}\nالرسالة: تم استلام الدفع بنجاح لطلب #{{trackId}}.\nدي الرخصة بتاعتك: `{{license}}`',
      statusExpired: '⌛️ الفاتورة رقم #{{trackId}} انتهت صلاحيتها. ❌❌',
      statusDefault:
        "تحديث الفاتورة:\n\nالحالة: {{status}}\n{{trackId ? 'الكود: ' + trackId : ''}}{{amount && currency ? '\\nالمبلغ المستحق: $' + amount + ' ' + currency : ''}}",
    },
  },
  de: {
    start: {
      welcome: '▶️ Willkommen bei {{appName}}\n\n{{description}}\n\n**Funktionen**\n {{features}}',
      menu: '📜 Hauptmenü',
      accountInfo: '🔍 Kontoinformationen',
      redeem: '🎟️ Einlösen',
      purchase: '🪪 Kaufen',
      languageSelect: '🌐 Sprache auswählen',
    },
    accountInfo: {
      title: 'Hier sind Ihre Informationen:',
      fields: {
        creationDate: 'Erstellungsdatum',
        expirationDate: 'Ablaufdatum',
        creatorID: 'Ersteller-ID',
        license: 'Lizenz',
        telegramID: 'Telegram-ID',
        total: 'Gesamt',
      },
      returnToStart: '🔙 Zurück zum Anfang',
    },
    errors: {
      licenseNotFound: 'Lizenz nicht gefunden.',
      invalidLicense: 'Ungültiger Lizenzschlüssel.',
      alreadyRedeemed: 'Lizenz wurde bereits eingelöst.',
      licenseExpired: 'Ihre Lizenz ist abgelaufen.',
      purchaseFailed: 'Kauf fehlgeschlagen. Bitte versuchen Sie es später erneut.',
    },
    purchase: {
      please: 'Bitte kaufen Sie eine Lizenz',
      chooseOption: 'Bitte wählen Sie eine Kaufoption:',
      week: 'Woche - ${{priceWEEK}} USD',
      month: 'Monat - ${{priceMONTH}} USD',
      lifetime: 'Lebenslang - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Zurück zum Anfang',
      selectedPlan:
        'Sie haben den {{plan}}-Plan ausgewählt.\n\nBitte folgen Sie diesem Link, um Ihren Kauf abzuschließen: [Jetzt bezahlen]({{payLink}})\n\nDiese Rechnung läuft am {{expiryDate}} ab.',
    },
    redeem: {
      enterCode: 'Um Ihre Lizenz einzulösen, geben Sie bitte den untenstehenden Code ein:',
      cancel: 'Abbrechen',
    },
    menu: {
      title: 'Wählen Sie eine der unten stehenden Optionen:',
      create: 'Lizenz erstellen',
      delete: 'Lizenz löschen',
      lookupLicense: 'Lizenz suchen',
      lookupTelegramID: 'Telegram-ID suchen',
      languageTitle: 'Wählen Sie Ihre bevorzugte Sprache aus der Liste unten:',
      languageSet: 'Sprache wurde auf Deutsch gesetzt.',
    },
    invoice: {
      update: 'Rechnungsaktualisierung:',
      statusPaid:
        'Rechnungsaktualisierung:\n\nStatus: {{status}}\nNachricht: Zahlung erfolgreich für Bestellung #{{trackId}} erhalten.\nHier ist Ihre Lizenz: `{{license}}`',
      statusExpired: '⌛️ Ihre Rechnung #{{trackId}} ist abgelaufen. ❌❌',
      statusDefault:
        "Rechnungsaktualisierung:\n\nStatus: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nFälliger Betrag: $' + amount + ' ' + currency : ''}}",
    },
  },
  it: {
    start: {
      welcome:
        '▶️ Benvenuto su {{appName}}\n\n{{description}}\n\n**Caratteristiche**\n {{features}}',
      menu: '📜 Menu principale',
      accountInfo: '🔍 Informazioni account',
      redeem: '🎟️ Riscatta',
      purchase: '🪪 Acquista',
      languageSelect: '🌐 Seleziona lingua',
    },
    accountInfo: {
      title: 'Ecco le tue informazioni:',
      fields: {
        creationDate: 'Data di creazione',
        expirationDate: 'Data di scadenza',
        creatorID: 'ID creatore',
        license: 'Licenza',
        telegramID: 'Telegram ID',
        total: 'Totale',
      },
      returnToStart: "🔙 Torna all'inizio",
    },
    errors: {
      licenseNotFound: 'Licenza non trovata.',
      invalidLicense: 'Chiave di licenza non valida.',
      alreadyRedeemed: 'Licenza già riscattata.',
      licenseExpired: 'La tua licenza è scaduta.',
      purchaseFailed: 'Acquisto fallito. Per favore riprova più tardi.',
    },
    purchase: {
      please: 'Per favore acquista una licenza',
      chooseOption: "Per favore scegli un'opzione di acquisto:",
      week: 'Settimana - ${{priceWEEK}} USD',
      month: 'Mese - ${{priceMONTH}} USD',
      lifetime: 'A vita - ${{priceLIFETIME}} USD',
      backToStart: "🔙 Torna all'inizio",
      selectedPlan:
        "Hai selezionato il piano {{plan}}.\n\nPer favore segui il link per completare l'acquisto: [Paga ora]({{payLink}})\n\nQuesta fattura scadrà il: {{expiryDate}}",
    },
    redeem: {
      enterCode: 'Per riscattare la tua licenza, inserisci il codice qui sotto:',
      cancel: 'Annulla',
    },
    menu: {
      title: "Scegli un'opzione qui sotto:",
      create: 'Crea licenza',
      delete: 'Elimina licenza',
      lookupLicense: 'Trova licenza',
      lookupTelegramID: 'Trova Telegram ID',
      languageTitle: 'Seleziona la tua lingua preferita qui sotto:',
      languageSet: 'Lingua impostata su Italiano.',
    },
    invoice: {
      update: 'Aggiornamento fattura:',
      statusPaid:
        "Aggiornamento fattura:\n\nStato: {{status}}\nMessaggio: Pagamento ricevuto con successo per l'ordine #{{trackId}}.\nEcco la tua licenza: `{{license}}`",
      statusExpired: '⌛️ La tua fattura #{{trackId}} è scaduta. ❌❌',
      statusDefault:
        "Aggiornamento fattura:\n\nStato: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nImporto dovuto: $' + amount + ' ' + currency : ''}}",
    },
  },
  nl: {
    start: {
      welcome: '▶️ Welkom bij {{appName}}\n\n{{description}}\n\n**Functies**\n {{features}}',
      menu: '📜 Hoofdmenu',
      accountInfo: '🔍 Accountinformatie',
      redeem: '🎟️ Inwisselen',
      purchase: '🪪 Kopen',
      languageSelect: '🌐 Taal selecteren',
    },
    accountInfo: {
      title: 'Hier zijn jouw gegevens:',
      fields: {
        creationDate: 'Aanmaakdatum',
        expirationDate: 'Vervaldatum',
        creatorID: 'Maker-ID',
        license: 'Licentie',
        telegramID: 'Telegram ID',
        total: 'Totaal',
      },
      returnToStart: '🔙 Terug naar Start',
    },
    errors: {
      licenseNotFound: 'Licentie niet gevonden.',
      invalidLicense: 'Ongeldige licentiesleutel.',
      alreadyRedeemed: 'Licentie is al ingewisseld.',
      licenseExpired: 'Je licentie is verlopen.',
      purchaseFailed: 'Aankoop mislukt. Probeer het later opnieuw.',
    },
    purchase: {
      please: 'Koop alstublieft een licentie',
      chooseOption: 'Kies een aankoopoptie:',
      week: 'Week - ${{priceWEEK}} USD',
      month: 'Maand - ${{priceMONTH}} USD',
      lifetime: 'Levenslang - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Terug naar Start',
      selectedPlan:
        'Je hebt het {{plan}}-plan geselecteerd.\n\nVolg deze link om je aankoop af te ronden: [Nu betalen]({{payLink}})\n\nDeze factuur vervalt op: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Om je licentie in te wisselen, voer de onderstaande code in:',
      cancel: 'Annuleren',
    },
    menu: {
      title: 'Kies een optie uit de onderstaande lijst:',
      create: 'Licentie aanmaken',
      delete: 'Licentie verwijderen',
      lookupLicense: 'Licentie opzoeken',
      lookupTelegramID: 'Telegram ID opzoeken',
      languageTitle: 'Selecteer je voorkeurstaal hieronder:',
      languageSet: 'Taal is ingesteld op Nederlands.',
    },
    invoice: {
      update: 'Factuurupdate:',
      statusPaid:
        'Factuurupdate:\n\nStatus: {{status}}\nBericht: Betaling succesvol ontvangen voor bestelling #{{trackId}}.\nHier is je licentie: `{{license}}`',
      statusExpired: '⌛️ Je factuur #{{trackId}} is verlopen. ❌❌',
      statusDefault:
        "Factuurupdate:\n\nStatus: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nVerschuldigd bedrag: $' + amount + ' ' + currency : ''}}",
    },
  },
  pl: {
    start: {
      welcome: '▶️ Witamy w {{appName}}\n\n{{description}}\n\n**Funkcje**\n {{features}}',
      menu: '📜 Główne menu',
      accountInfo: '🔍 Informacje o koncie',
      redeem: '🎟️ Odbierz',
      purchase: '🪪 Kup',
      languageSelect: '🌐 Wybierz język',
    },
    accountInfo: {
      title: 'Oto Twoje informacje:',
      fields: {
        creationDate: 'Data utworzenia',
        expirationDate: 'Data wygaśnięcia',
        creatorID: 'ID twórcy',
        license: 'Licencja',
        telegramID: 'Telegram ID',
        total: 'Suma',
      },
      returnToStart: '🔙 Powrót na początek',
    },
    errors: {
      licenseNotFound: 'Licencja nie została znaleziona.',
      invalidLicense: 'Nieprawidłowy klucz licencyjny.',
      alreadyRedeemed: 'Licencja została już wykorzystana.',
      licenseExpired: 'Twoja licencja wygasła.',
      purchaseFailed: 'Zakup nie powiódł się. Spróbuj ponownie później.',
    },
    purchase: {
      please: 'Proszę zakupić licencję',
      chooseOption: 'Proszę wybrać opcję zakupu:',
      week: 'Tydzień - ${{priceWEEK}} USD',
      month: 'Miesiąc - ${{priceMONTH}} USD',
      lifetime: 'Dożywotnio - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Powrót na początek',
      selectedPlan:
        'Wybrałeś plan {{plan}}.\n\nProszę kliknij ten link, aby sfinalizować zakup: [Zapłać teraz]({{payLink}})\n\nFaktura wygaśnie w dniu: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Aby odebrać licencję, wprowadź kod poniżej:',
      cancel: 'Anuluj',
    },
    menu: {
      title: 'Wybierz jedną z poniższych opcji:',
      create: 'Utwórz licencję',
      delete: 'Usuń licencję',
      lookupLicense: 'Znajdź licencję',
      lookupTelegramID: 'Znajdź Telegram ID',
      languageTitle: 'Wybierz preferowany język z poniższej listy:',
      languageSet: 'Język ustawiony na Polski.',
    },
    invoice: {
      update: 'Aktualizacja faktury:',
      statusPaid:
        'Aktualizacja faktury:\n\nStatus: {{status}}\nWiadomość: Płatność za zamówienie #{{trackId}} została pomyślnie otrzymana.\nOto Twoja licencja: `{{license}}`',
      statusExpired: '⌛️ Twoja faktura #{{trackId}} wygasła. ❌❌',
      statusDefault:
        "Aktualizacja faktury:\n\nStatus: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nKwota należna: $' + amount + ' ' + currency : ''}}",
    },
  },
  sv: {
    start: {
      welcome: '▶️ Välkommen till {{appName}}\n\n{{description}}\n\n**Funktioner**\n {{features}}',
      menu: '📜 Huvudmeny',
      accountInfo: '🔍 Kontoinformation',
      redeem: '🎟️ Lös in',
      purchase: '🪪 Köp',
      languageSelect: '🌐 Välj språk',
    },
    accountInfo: {
      title: 'Här är din information:',
      fields: {
        creationDate: 'Skapandedatum',
        expirationDate: 'Utgångsdatum',
        creatorID: 'Skapar-ID',
        license: 'Licens',
        telegramID: 'Telegram ID',
        total: 'Totalt',
      },
      returnToStart: '🔙 Tillbaka till Start',
    },
    errors: {
      licenseNotFound: 'Licensen hittades inte.',
      invalidLicense: 'Ogiltig licensnyckel.',
      alreadyRedeemed: 'Licensen har redan lösts in.',
      licenseExpired: 'Din licens har löpt ut.',
      purchaseFailed: 'Köpet misslyckades. Försök igen senare.',
    },
    purchase: {
      please: 'Vänligen köp en licens',
      chooseOption: 'Vänligen välj ett köpval:',
      week: 'Vecka - ${{priceWEEK}} USD',
      month: 'Månad - ${{priceMONTH}} USD',
      lifetime: 'Livstid - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Tillbaka till Start',
      selectedPlan:
        'Du har valt {{plan}}-planen.\n\nVänligen följ länken för att slutföra ditt köp: [Betala Nu]({{payLink}})\n\nDenna faktura kommer att förfalla den: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'För att lösa in din licens, ange koden nedan:',
      cancel: 'Avbryt',
    },
    menu: {
      title: 'Välj ett alternativ nedan:',
      create: 'Skapa licens',
      delete: 'Ta bort licens',
      lookupLicense: 'Sök efter licens',
      lookupTelegramID: 'Sök efter Telegram-ID',
      languageTitle: 'Välj ditt föredragna språk från listan nedan:',
      languageSet: 'Språk inställt till Svenska.',
    },
    invoice: {
      update: 'Faktura uppdaterad:',
      statusPaid:
        'Faktura uppdaterad:\n\nStatus: {{status}}\nMeddelande: Betalning för beställning #{{trackId}} har mottagits.\nHär är din licens: `{{license}}`',
      statusExpired: '⌛️ Din faktura #{{trackId}} har löpt ut. ❌❌',
      statusDefault:
        "Faktura uppdaterad:\n\nStatus: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nUtestående belopp: $' + amount + ' ' + currency : ''}}",
    },
  },
  uk: {
    start: {
      welcome: '▶️ Ласкаво просимо до {{appName}}\n\n{{description}}\n\n**Функції**\n {{features}}',
      menu: '📜 Головне меню',
      accountInfo: '🔍 Інформація про обліковий запис',
      redeem: '🎟️ Викупити',
      purchase: '🪪 Придбати',
      languageSelect: '🌐 Виберіть мову',
    },
    accountInfo: {
      title: 'Ось ваша інформація:',
      fields: {
        creationDate: 'Дата створення',
        expirationDate: 'Дата закінчення',
        creatorID: 'ID творця',
        license: 'Ліцензія',
        telegramID: 'Telegram ID',
        total: 'Загалом',
      },
      returnToStart: '🔙 Повернутися на початок',
    },
    errors: {
      licenseNotFound: 'Ліцензію не знайдено.',
      invalidLicense: 'Невірний ключ ліцензії.',
      alreadyRedeemed: 'Ліцензія вже використана.',
      licenseExpired: 'Термін дії вашої ліцензії закінчився.',
      purchaseFailed: 'Не вдалося завершити покупку. Спробуйте пізніше.',
    },
    purchase: {
      please: 'Будь ласка, придбайте ліцензію',
      chooseOption: 'Будь ласка, виберіть опцію покупки:',
      week: 'Тиждень - ${{priceWEEK}} USD',
      month: 'Місяць - ${{priceMONTH}} USD',
      lifetime: 'Довічно - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Повернутися на початок',
      selectedPlan:
        'Ви обрали план {{plan}}.\n\nБудь ласка, перейдіть за посиланням, щоб завершити покупку: [Сплатити зараз]({{payLink}})\n\nЦей рахунок буде дійсний до: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Щоб активувати ліцензію, введіть код нижче:',
      cancel: 'Скасувати',
    },
    menu: {
      title: 'Оберіть один із наведених нижче варіантів:',
      create: 'Створити ліцензію',
      delete: 'Видалити ліцензію',
      lookupLicense: 'Знайти ліцензію',
      lookupTelegramID: 'Знайти Telegram ID',
      languageTitle: 'Виберіть бажану мову з наведеного нижче списку:',
      languageSet: 'Мову встановлено на українську.',
    },
    invoice: {
      update: 'Оновлення рахунку:',
      statusPaid:
        'Оновлення рахунку:\n\nСтатус: {{status}}\nПовідомлення: Оплата за замовлення #{{trackId}} успішно отримана.\nОсь ваша ліцензія: `{{license}}`',
      statusExpired: '⌛️ Термін дії вашого рахунку #{{trackId}} закінчився. ❌❌',
      statusDefault:
        "Оновлення рахунку:\n\nСтатус: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nСума до сплати: $' + amount + ' ' + currency : ''}}",
    },
  },
  el: {
    start: {
      welcome:
        '▶️ Καλώς ήρθατε στο {{appName}}\n\n{{description}}\n\n**Λειτουργίες**\n {{features}}',
      menu: '📜 Κύριο Μενού',
      accountInfo: '🔍 Πληροφορίες Λογαριασμού',
      redeem: '🎟️ Εξαργύρωση',
      purchase: '🪪 Αγορά',
      languageSelect: '🌐 Επιλέξτε Γλώσσα',
    },
    accountInfo: {
      title: 'Αυτές είναι οι πληροφορίες σας:',
      fields: {
        creationDate: 'Ημερομηνία Δημιουργίας',
        expirationDate: 'Ημερομηνία Λήξης',
        creatorID: 'ID Δημιουργού',
        license: 'Άδεια',
        telegramID: 'Telegram ID',
        total: 'Σύνολο',
      },
      returnToStart: '🔙 Επιστροφή στην Αρχή',
    },
    errors: {
      licenseNotFound: 'Η άδεια δεν βρέθηκε.',
      invalidLicense: 'Μη έγκυρος κωδικός άδειας.',
      alreadyRedeemed: 'Η άδεια έχει ήδη εξαργυρωθεί.',
      licenseExpired: 'Η άδειά σας έχει λήξει.',
      purchaseFailed: 'Η αγορά απέτυχε. Δοκιμάστε ξανά αργότερα.',
    },
    purchase: {
      please: 'Παρακαλώ αγοράστε μια άδεια',
      chooseOption: 'Παρακαλώ επιλέξτε μια επιλογή αγοράς:',
      week: 'Εβδομάδα - ${{priceWEEK}} USD',
      month: 'Μήνας - ${{priceMONTH}} USD',
      lifetime: 'Δια Βίου - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Επιστροφή στην Αρχή',
      selectedPlan:
        'Έχετε επιλέξει το σχέδιο {{plan}}.\n\nΠαρακαλώ ακολουθήστε αυτόν τον σύνδεσμο για να ολοκληρώσετε την αγορά: [Πληρώστε Τώρα]({{payLink}})\n\nΑυτό το τιμολόγιο θα λήξει στις: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Για να εξαργυρώσετε την άδεια σας, εισάγετε τον παρακάτω κωδικό:',
      cancel: 'Ακύρωση',
    },
    menu: {
      title: 'Επιλέξτε μια επιλογή από τις παρακάτω:',
      create: 'Δημιουργία Άδειας',
      delete: 'Διαγραφή Άδειας',
      lookupLicense: 'Εύρεση Άδειας',
      lookupTelegramID: 'Εύρεση Telegram ID',
      languageTitle: 'Επιλέξτε την προτιμώμενη γλώσσα σας από την παρακάτω λίστα:',
      languageSet: 'Η γλώσσα έχει οριστεί στα Ελληνικά.',
    },
    invoice: {
      update: 'Ενημέρωση Τιμολογίου:',
      statusPaid:
        'Ενημέρωση Τιμολογίου:\n\nΚατάσταση: {{status}}\nΜήνυμα: Η πληρωμή για την παραγγελία #{{trackId}} ελήφθη επιτυχώς.\nΑυτή είναι η άδειά σας: `{{license}}`',
      statusExpired: '⌛️ Το τιμολόγιό σας #{{trackId}} έχει λήξει. ❌❌',
      statusDefault:
        "Ενημέρωση Τιμολογίου:\n\nΚατάσταση: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nΟφειλόμενο ποσό: $' + amount + ' ' + currency : ''}}",
    },
  },
  ro: {
    start: {
      welcome: '▶️ Bine ați venit la {{appName}}\n\n{{description}}\n\n**Funcții**\n {{features}}',
      menu: '📜 Meniu Principal',
      accountInfo: '🔍 Informații Cont',
      redeem: '🎟️ Răscumpără',
      purchase: '🪪 Cumpără',
      languageSelect: '🌐 Selectați Limba',
    },
    accountInfo: {
      title: 'Iată informațiile dvs.:',
      fields: {
        creationDate: 'Data Creării',
        expirationDate: 'Data Expirării',
        creatorID: 'ID Creator',
        license: 'Licență',
        telegramID: 'Telegram ID',
        total: 'Total',
      },
      returnToStart: '🔙 Înapoi la Start',
    },
    errors: {
      licenseNotFound: 'Licența nu a fost găsită.',
      invalidLicense: 'Cheie de licență invalidă.',
      alreadyRedeemed: 'Licența a fost deja utilizată.',
      licenseExpired: 'Licența dvs. a expirat.',
      purchaseFailed: 'Achiziția a eșuat. Încercați din nou mai târziu.',
    },
    purchase: {
      please: 'Vă rugăm să cumpărați o licență',
      chooseOption: 'Vă rugăm să alegeți o opțiune de cumpărare:',
      week: 'Săptămână - ${{priceWEEK}} USD',
      month: 'Lună - ${{priceMONTH}} USD',
      lifetime: 'Pe viață - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Înapoi la Start',
      selectedPlan:
        'Ați selectat planul {{plan}}.\n\nVă rugăm să urmați acest link pentru a finaliza achiziția: [Plătește Acum]({{payLink}})\n\nAceastă factură va expira pe: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Pentru a răscumpăra licența dvs., introduceți codul de mai jos:',
      cancel: 'Anulează',
    },
    menu: {
      title: 'Selectați una dintre opțiunile de mai jos:',
      create: 'Creează Licență',
      delete: 'Șterge Licență',
      lookupLicense: 'Caută Licență',
      lookupTelegramID: 'Caută Telegram ID',
      languageTitle: 'Selectați limba preferată din lista de mai jos:',
      languageSet: 'Limba a fost setată pe Română.',
    },
    invoice: {
      update: 'Actualizare Factură:',
      statusPaid:
        'Actualizare Factură:\n\nStare: {{status}}\nMesaj: Plata pentru comanda #{{trackId}} a fost primită cu succes.\nAceasta este licența dvs.: `{{license}}`',
      statusExpired: '⌛️ Factura dvs. #{{trackId}} a expirat. ❌❌',
      statusDefault:
        "Actualizare Factură:\n\nStare: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nSumă datorată: $' + amount + ' ' + currency : ''}}",
    },
  },
  hu: {
    start: {
      welcome: '▶️ Üdvözlünk a {{appName}}-ben\n\n{{description}}\n\n**Funkciók**\n {{features}}',
      menu: '📜 Főmenü',
      accountInfo: '🔍 Fiókinformációk',
      redeem: '🎟️ Beváltás',
      purchase: '🪪 Vásárlás',
      languageSelect: '🌐 Nyelv kiválasztása',
    },
    accountInfo: {
      title: 'Itt vannak az adataid:',
      fields: {
        creationDate: 'Létrehozás dátuma',
        expirationDate: 'Lejárati dátum',
        creatorID: 'Készítő ID',
        license: 'Licensz',
        telegramID: 'Telegram ID',
        total: 'Összesen',
      },
      returnToStart: '🔙 Vissza a kezdőlapra',
    },
    errors: {
      licenseNotFound: 'Licensz nem található.',
      invalidLicense: 'Érvénytelen licenszkulcs.',
      alreadyRedeemed: 'A licensz már beváltva.',
      licenseExpired: 'A licensz lejárt.',
      purchaseFailed: 'A vásárlás sikertelen. Kérjük, próbálja újra később.',
    },
    purchase: {
      please: 'Kérjük, vásároljon licenszt',
      chooseOption: 'Kérjük, válasszon egy vásárlási opciót:',
      week: 'Hét - ${{priceWEEK}} USD',
      month: 'Hónap - ${{priceMONTH}} USD',
      lifetime: 'Élettartam - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Vissza a kezdőlapra',
      selectedPlan:
        'A(z) {{plan}} tervet választotta.\n\nKérjük, kövesse ezt a linket a vásárlás befejezéséhez: [Fizessen Most]({{payLink}})\n\nEz a számla lejár: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Licensze beváltásához, kérjük, írja be az alábbi kódot:',
      cancel: 'Mégse',
    },
    menu: {
      title: 'Válasszon az alábbi lehetőségek közül:',
      create: 'Licensz létrehozása',
      delete: 'Licensz törlése',
      lookupLicense: 'Licensz keresése',
      lookupTelegramID: 'Telegram ID keresése',
      languageTitle: 'Válassza ki a kívánt nyelvet az alábbi listából:',
      languageSet: 'A nyelv beállítva Magyarra.',
    },
    invoice: {
      update: 'Számla Frissítése:',
      statusPaid:
        'Számla Frissítése:\n\nÁllapot: {{status}}\nÜzenet: A(z) #{{trackId}} rendelés kifizetése sikeres volt.\nEz az Ön licensze: `{{license}}`',
      statusExpired: '⌛️ Az Ön számlája #{{trackId}} lejárt. ❌❌',
      statusDefault:
        "Számla Frissítése:\n\nÁllapot: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nKifizetendő összeg: $' + amount + ' ' + currency : ''}}",
    },
  },
  cs: {
    start: {
      welcome: '▶️ Vítejte v {{appName}}\n\n{{description}}\n\n**Funkce**\n {{features}}',
      menu: '📜 Hlavní menu',
      accountInfo: '🔍 Informace o účtu',
      redeem: '🎟️ Uplatnit',
      purchase: '🪪 Koupit',
      languageSelect: '🌐 Vyberte jazyk',
    },
    accountInfo: {
      title: 'Zde jsou vaše informace:',
      fields: {
        creationDate: 'Datum vytvoření',
        expirationDate: 'Datum vypršení platnosti',
        creatorID: 'ID tvůrce',
        license: 'Licence',
        telegramID: 'Telegram ID',
        total: 'Celkem',
      },
      returnToStart: '🔙 Zpět na začátek',
    },
    errors: {
      licenseNotFound: 'Licence nebyla nalezena.',
      invalidLicense: 'Neplatný licenční klíč.',
      alreadyRedeemed: 'Licence již byla uplatněna.',
      licenseExpired: 'Platnost vaší licence vypršela.',
      purchaseFailed: 'Nákup selhal. Zkuste to prosím znovu později.',
    },
    purchase: {
      please: 'Prosím, kupte si licenci',
      chooseOption: 'Vyberte možnost nákupu:',
      week: 'Týden - ${{priceWEEK}} USD',
      month: 'Měsíc - ${{priceMONTH}} USD',
      lifetime: 'Doživotní - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Zpět na začátek',
      selectedPlan:
        'Vybrali jste plán {{plan}}.\n\nDokončete nákup na tomto odkazu: [Zaplatit nyní]({{payLink}})\n\nPlatnost této faktury vyprší: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Pro uplatnění licence zadejte kód níže:',
      cancel: 'Zrušit',
    },
    menu: {
      title: 'Vyberte jednu z níže uvedených možností:',
      create: 'Vytvořit licenci',
      delete: 'Smazat licenci',
      lookupLicense: 'Vyhledat licenci',
      lookupTelegramID: 'Vyhledat Telegram ID',
      languageTitle: 'Vyberte preferovaný jazyk ze seznamu níže:',
      languageSet: 'Jazyk nastaven na češtinu.',
    },
    invoice: {
      update: 'Aktualizace faktury:',
      statusPaid:
        'Aktualizace faktury:\n\nStav: {{status}}\nZpráva: Platba za objednávku #{{trackId}} byla úspěšně přijata.\nZde je vaše licence: `{{license}}`',
      statusExpired: '⌛️ Platnost vaší faktury #{{trackId}} vypršela. ❌❌',
      statusDefault:
        "Aktualizace faktury:\n\nStav: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nDlužná částka: $' + amount + ' ' + currency : ''}}",
    },
  },
  sk: {
    start: {
      welcome: '▶️ Vitajte v {{appName}}\n\n{{description}}\n\n**Funkcie**\n {{features}}',
      menu: '📜 Hlavné menu',
      accountInfo: '🔍 Informácie o účte',
      redeem: '🎟️ Uplatniť',
      purchase: '🪪 Kúpiť',
      languageSelect: '🌐 Vyberte jazyk',
    },
    accountInfo: {
      title: 'Tu sú vaše informácie:',
      fields: {
        creationDate: 'Dátum vytvorenia',
        expirationDate: 'Dátum vypršania',
        creatorID: 'ID tvorcu',
        license: 'Licencia',
        telegramID: 'Telegram ID',
        total: 'Celkom',
      },
      returnToStart: '🔙 Späť na začiatok',
    },
    errors: {
      licenseNotFound: 'Licencia nebola nájdená.',
      invalidLicense: 'Neplatný licenčný kľúč.',
      alreadyRedeemed: 'Licencia už bola uplatnená.',
      licenseExpired: 'Vaša licencia vypršala.',
      purchaseFailed: 'Nákup zlyhal. Skúste to neskôr.',
    },
    purchase: {
      please: 'Prosím, zakúpte si licenciu',
      chooseOption: 'Prosím, vyberte možnosť nákupu:',
      week: 'Týždeň - ${{priceWEEK}} USD',
      month: 'Mesiac - ${{priceMONTH}} USD',
      lifetime: 'Doživotná - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Späť na začiatok',
      selectedPlan:
        'Vybrali ste plán {{plan}}.\n\nDokončite nákup pomocou tohto odkazu: [Zaplatiť teraz]({{payLink}})\n\nPlatnosť tejto faktúry vyprší: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Pre uplatnenie licencie zadajte kód nižšie:',
      cancel: 'Zrušiť',
    },
    menu: {
      title: 'Vyberte jednu z možností uvedených nižšie:',
      create: 'Vytvoriť licenciu',
      delete: 'Vymazať licenciu',
      lookupLicense: 'Vyhľadať licenciu',
      lookupTelegramID: 'Vyhľadať Telegram ID',
      languageTitle: 'Vyberte si preferovaný jazyk zo zoznamu nižšie:',
      languageSet: 'Jazyk nastavený na slovenčinu.',
    },
    invoice: {
      update: 'Aktualizácia faktúry:',
      statusPaid:
        'Aktualizácia faktúry:\n\nStav: {{status}}\nSpráva: Platba za objednávku #{{trackId}} bola úspešne prijatá.\nTu je vaša licencia: `{{license}}`',
      statusExpired: '⌛️ Platnosť vašej faktúry #{{trackId}} vypršala. ❌❌',
      statusDefault:
        "Aktualizácia faktúry:\n\nStav: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nDlžná suma: $' + amount + ' ' + currency : ''}}",
    },
  },
  bg: {
    start: {
      welcome: '▶️ Добре дошли в {{appName}}\n\n{{description}}\n\n**Функции**\n {{features}}',
      menu: '📜 Основно меню',
      accountInfo: '🔍 Информация за профила',
      redeem: '🎟️ Осребряване',
      purchase: '🪪 Покупка',
      languageSelect: '🌐 Избор на език',
    },
    accountInfo: {
      title: 'Ето вашата информация:',
      fields: {
        creationDate: 'Дата на създаване',
        expirationDate: 'Дата на изтичане',
        creatorID: 'ID на създателя',
        license: 'Лиценз',
        telegramID: 'Telegram ID',
        total: 'Общо',
      },
      returnToStart: '🔙 Връщане в началото',
    },
    errors: {
      licenseNotFound: 'Лицензът не е намерен.',
      invalidLicense: 'Невалиден лицензен ключ.',
      alreadyRedeemed: 'Лицензът вече е осребрен.',
      licenseExpired: 'Вашият лиценз е изтекъл.',
      purchaseFailed: 'Покупката не бе успешна. Опитайте отново по-късно.',
    },
    purchase: {
      please: 'Моля, купете лиценз',
      chooseOption: 'Моля, изберете опция за покупка:',
      week: 'Седмица - ${{priceWEEK}} USD',
      month: 'Месец - ${{priceMONTH}} USD',
      lifetime: 'Доживотен - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Връщане в началото',
      selectedPlan:
        'Избрахте план {{plan}}.\n\nМоля, последвайте тази връзка, за да завършите покупката: [Плати сега]({{payLink}})\n\nТази фактура ще изтече на: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'За да осребрите лиценза си, въведете кода по-долу:',
      cancel: 'Отказ',
    },
    menu: {
      title: 'Изберете една от опциите по-долу:',
      create: 'Създаване на лиценз',
      delete: 'Изтриване на лиценз',
      lookupLicense: 'Намиране на лиценз',
      lookupTelegramID: 'Намиране на Telegram ID',
      languageTitle: 'Изберете предпочитания от вас език от списъка по-долу:',
      languageSet: 'Езикът е зададен на български.',
    },
    invoice: {
      update: 'Актуализация на фактурата:',
      statusPaid:
        'Актуализация на фактурата:\n\nСтатус: {{status}}\nСъобщение: Плащането за поръчка #{{trackId}} е успешно получено.\nЕто вашият лиценз: `{{license}}`',
      statusExpired: '⌛️ Вашата фактура #{{trackId}} е изтекла. ❌❌',
      statusDefault:
        "Актуализация на фактурата:\n\nСтатус: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nДължима сума: $' + amount + ' ' + currency : ''}}",
    },
  },
  hr: {
    start: {
      welcome: '▶️ Dobrodošli u {{appName}}\n\n{{description}}\n\n**Značajke**\n {{features}}',
      menu: '📜 Glavni izbornik',
      accountInfo: '🔍 Informacije o računu',
      redeem: '🎟️ Iskoristi',
      purchase: '🪪 Kupi',
      languageSelect: '🌐 Odaberite jezik',
    },
    accountInfo: {
      title: 'Evo vaših podataka:',
      fields: {
        creationDate: 'Datum kreiranja',
        expirationDate: 'Datum isteka',
        creatorID: 'ID kreatora',
        license: 'Licenca',
        telegramID: 'Telegram ID',
        total: 'Ukupno',
      },
      returnToStart: '🔙 Povratak na početak',
    },
    errors: {
      licenseNotFound: 'Licenca nije pronađena.',
      invalidLicense: 'Nevažeći licencni ključ.',
      alreadyRedeemed: 'Licenca je već iskorištena.',
      licenseExpired: 'Vaša licenca je istekla.',
      purchaseFailed: 'Kupnja nije uspjela. Pokušajte ponovno kasnije.',
    },
    purchase: {
      please: 'Molimo, kupite licencu',
      chooseOption: 'Molimo, odaberite opciju kupnje:',
      week: 'Tjedan - ${{priceWEEK}} USD',
      month: 'Mjesec - ${{priceMONTH}} USD',
      lifetime: 'Doživotno - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Povratak na početak',
      selectedPlan:
        'Odabrali ste plan {{plan}}.\n\nMolimo, slijedite ovaj link kako biste dovršili kupnju: [Plati sada]({{payLink}})\n\nOva faktura istječe: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Da biste iskoristili svoju licencu, unesite kod u nastavku:',
      cancel: 'Odustani',
    },
    menu: {
      title: 'Odaberite jednu od opcija u nastavku:',
      create: 'Kreiraj licencu',
      delete: 'Obriši licencu',
      lookupLicense: 'Pronađi licencu',
      lookupTelegramID: 'Pronađi Telegram ID',
      languageTitle: 'Odaberite željeni jezik s popisa u nastavku:',
      languageSet: 'Jezik postavljen na hrvatski.',
    },
    invoice: {
      update: 'Ažuriranje fakture:',
      statusPaid:
        'Ažuriranje fakture:\n\nStatus: {{status}}\nPoruka: Plaćanje za narudžbu #{{trackId}} uspješno primljeno.\nOvo je vaša licenca: `{{license}}`',
      statusExpired: '⌛️ Vaša faktura #{{trackId}} je istekla. ❌❌',
      statusDefault:
        "Ažuriranje fakture:\n\nStatus: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nIznos za plaćanje: $' + amount + ' ' + currency : ''}}",
    },
  },
  sl: {
    start: {
      welcome: '▶️ Dobrodošli v {{appName}}\n\n{{description}}\n\n**Funkcije**\n {{features}}',
      menu: '📜 Glavni meni',
      accountInfo: '🔍 Informacije o računu',
      redeem: '🎟️ Unovči',
      purchase: '🪪 Kupi',
      languageSelect: '🌐 Izberite jezik',
    },
    accountInfo: {
      title: 'Tukaj so vaše informacije:',
      fields: {
        creationDate: 'Datum ustvarjanja',
        expirationDate: 'Datum poteka',
        creatorID: 'ID ustvarjalca',
        license: 'Licenca',
        telegramID: 'Telegram ID',
        total: 'Skupaj',
      },
      returnToStart: '🔙 Nazaj na začetek',
    },
    errors: {
      licenseNotFound: 'Licenca ni bila najdena.',
      invalidLicense: 'Neveljaven licenčni ključ.',
      alreadyRedeemed: 'Licenca je že bila unovčena.',
      licenseExpired: 'Vaša licenca je potekla.',
      purchaseFailed: 'Nakup ni uspel. Poskusite znova kasneje.',
    },
    purchase: {
      please: 'Prosimo, kupite licenco',
      chooseOption: 'Izberite možnost nakupa:',
      week: 'Teden - ${{priceWEEK}} USD',
      month: 'Mesec - ${{priceMONTH}} USD',
      lifetime: 'Doživljenjsko - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Nazaj na začetek',
      selectedPlan:
        'Izbrali ste načrt {{plan}}.\n\nProsimo, sledite tej povezavi, da dokončate nakup: [Plačaj zdaj]({{payLink}})\n\nTa račun bo potekel dne: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Za unovčenje licence vnesite kodo spodaj:',
      cancel: 'Prekliči',
    },
    menu: {
      title: 'Izberite eno izmed spodnjih možnosti:',
      create: 'Ustvari licenco',
      delete: 'Izbriši licenco',
      lookupLicense: 'Poišči licenco',
      lookupTelegramID: 'Poišči Telegram ID',
      languageTitle: 'Izberite svoj želeni jezik iz spodnjega seznama:',
      languageSet: 'Jezik je nastavljen na slovenščino.',
    },
    invoice: {
      update: 'Posodobitev računa:',
      statusPaid:
        'Posodobitev računa:\n\nStanje: {{status}}\nSporočilo: Plačilo za naročilo #{{trackId}} je bilo uspešno prejeto.\nTukaj je vaša licenca: `{{license}}`',
      statusExpired: '⌛️ Vaš račun #{{trackId}} je potekel. ❌❌',
      statusDefault:
        "Posodobitev računa:\n\nStanje: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nZnesek za plačilo: $' + amount + ' ' + currency : ''}}",
    },
  },
  lt: {
    start: {
      welcome: '▶️ Sveiki atvykę į {{appName}}\n\n{{description}}\n\n**Funkcijos**\n {{features}}',
      menu: '📜 Pagrindinis meniu',
      accountInfo: '🔍 Paskyros informacija',
      redeem: '🎟️ Išpirkti',
      purchase: '🪪 Pirkti',
      languageSelect: '🌐 Pasirinkite kalbą',
    },
    accountInfo: {
      title: 'Čia pateikiama jūsų informacija:',
      fields: {
        creationDate: 'Sukūrimo data',
        expirationDate: 'Galiojimo data',
        creatorID: 'Kūrėjo ID',
        license: 'Licencija',
        telegramID: 'Telegram ID',
        total: 'Viso',
      },
      returnToStart: '🔙 Grįžti į pradžią',
    },
    errors: {
      licenseNotFound: 'Licencija nerasta.',
      invalidLicense: 'Netinkamas licencijos raktas.',
      alreadyRedeemed: 'Licencija jau buvo išpirkta.',
      licenseExpired: 'Jūsų licencija baigė galioti.',
      purchaseFailed: 'Nepavyko įsigyti. Bandykite dar kartą vėliau.',
    },
    purchase: {
      please: 'Prašome įsigyti licenciją',
      chooseOption: 'Pasirinkite pirkimo parinktį:',
      week: 'Savaitė - ${{priceWEEK}} USD',
      month: 'Mėnuo - ${{priceMONTH}} USD',
      lifetime: 'Gyvenimo - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Grįžti į pradžią',
      selectedPlan:
        'Jūs pasirinkote {{plan}} planą.\n\nNorėdami užbaigti pirkimą, sekite šią nuorodą: [Apmokėti dabar]({{payLink}})\n\nŠi sąskaita baigs galioti: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Norėdami išpirkti licenciją, įveskite kodą žemiau:',
      cancel: 'Atšaukti',
    },
    menu: {
      title: 'Pasirinkite vieną iš žemiau pateiktų variantų:',
      create: 'Sukurti licenciją',
      delete: 'Ištrinti licenciją',
      lookupLicense: 'Ieškoti licencijos',
      lookupTelegramID: 'Ieškoti Telegram ID',
      languageTitle: 'Pasirinkite savo pageidaujamą kalbą iš žemiau esančio sąrašo:',
      languageSet: 'Kalba nustatyta į lietuvių.',
    },
    invoice: {
      update: 'Sąskaitos atnaujinimas:',
      statusPaid:
        'Sąskaitos atnaujinimas:\n\nBūsena: {{status}}\nPranešimas: Mokėjimas už užsakymą #{{trackId}} sėkmingai gautas.\nŠtai jūsų licencija: `{{license}}`',
      statusExpired: '⌛️ Jūsų sąskaita #{{trackId}} baigė galioti. ❌❌',
      statusDefault:
        "Sąskaitos atnaujinimas:\n\nBūsena: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nSuma: $' + amount + ' ' + currency : ''}}",
    },
  },
  lv: {
    start: {
      welcome: '▶️ Laipni lūdzam {{appName}}\n\n{{description}}\n\n**Funkcijas**\n {{features}}',
      menu: '📜 Galvenā izvēlne',
      accountInfo: '🔍 Konta informācija',
      redeem: '🎟️ Izpirkt',
      purchase: '🪪 Pirkt',
      languageSelect: '🌐 Izvēlieties valodu',
    },
    accountInfo: {
      title: 'Šeit ir jūsu informācija:',
      fields: {
        creationDate: 'Izveidošanas datums',
        expirationDate: 'Derīguma termiņš',
        creatorID: 'Radītāja ID',
        license: 'Licence',
        telegramID: 'Telegram ID',
        total: 'Kopā',
      },
      returnToStart: '🔙 Atgriezties sākumā',
    },
    errors: {
      licenseNotFound: 'Licence nav atrasta.',
      invalidLicense: 'Nederīgs licences atslēga.',
      alreadyRedeemed: 'Licence jau ir izpirkta.',
      licenseExpired: 'Jūsu licence ir beigusies.',
      purchaseFailed: 'Pirkums neizdevās. Lūdzu, mēģiniet vēlāk vēlreiz.',
    },
    purchase: {
      please: 'Lūdzu, iegādājieties licenci',
      chooseOption: 'Lūdzu, izvēlieties pirkuma iespēju:',
      week: 'Nedēļa - ${{priceWEEK}} USD',
      month: 'Mēnesis - ${{priceMONTH}} USD',
      lifetime: 'Mūža - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Atgriezties sākumā',
      selectedPlan:
        'Jūs esat izvēlējies {{plan}} plānu.\n\nLai pabeigtu pirkumu, sekojiet šai saitei: [Samaksāt tagad]({{payLink}})\n\nŠis rēķins beigsies: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Lai izpirktu licenci, ievadiet kodu zemāk:',
      cancel: 'Atcelt',
    },
    menu: {
      title: 'Izvēlieties vienu no zemāk esošajām opcijām:',
      create: 'Izveidot licenci',
      delete: 'Dzēst licenci',
      lookupLicense: 'Atrast licenci',
      lookupTelegramID: 'Atrast Telegram ID',
      languageTitle: 'Izvēlieties vēlamo valodu no zemāk redzamā saraksta:',
      languageSet: 'Valoda iestatīta uz latviešu.',
    },
    invoice: {
      update: 'Rēķina atjauninājums:',
      statusPaid:
        'Rēķina atjauninājums:\n\nStatuss: {{status}}\nZiņojums: Maksājums par pasūtījumu #{{trackId}} veiksmīgi saņemts.\nŠeit ir jūsu licence: `{{license}}`',
      statusExpired: '⌛️ Jūsu rēķins #{{trackId}} ir beidzies. ❌❌',
      statusDefault:
        "Rēķina atjauninājums:\n\nStatuss: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nParāds: $' + amount + ' ' + currency : ''}}",
    },
  },
  et: {
    start: {
      welcome: '▶️ Tere tulemast {{appName}}\n\n{{description}}\n\n**Funktsioonid**\n {{features}}',
      menu: '📜 Peamenüü',
      accountInfo: '🔍 Konto teave',
      redeem: '🎟️ Lunasta',
      purchase: '🪪 Osta',
      languageSelect: '🌐 Vali keel',
    },
    accountInfo: {
      title: 'Siin on teie teave:',
      fields: {
        creationDate: 'Loomiskuupäev',
        expirationDate: 'Aegumiskuupäev',
        creatorID: 'Looja ID',
        license: 'Litsents',
        telegramID: 'Telegram ID',
        total: 'Kokku',
      },
      returnToStart: '🔙 Tagasi algusesse',
    },
    errors: {
      licenseNotFound: 'Litsentsi ei leitud.',
      invalidLicense: 'Kehtetu litsentsivõti.',
      alreadyRedeemed: 'Litsents on juba lunastatud.',
      licenseExpired: 'Teie litsents on aegunud.',
      purchaseFailed: 'Ost ebaõnnestus. Palun proovige hiljem uuesti.',
    },
    purchase: {
      please: 'Palun ostke litsents',
      chooseOption: 'Valige ostuvõimalus:',
      week: 'Nädal - ${{priceWEEK}} USD',
      month: 'Kuu - ${{priceMONTH}} USD',
      lifetime: 'Eluaegne - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Tagasi algusesse',
      selectedPlan:
        'Olete valinud {{plan}} plaani.\n\nJätkamiseks järgige seda linki: [Maksa nüüd]({{payLink}})\n\nSee arve aegub: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Litsentsi lunastamiseks sisestage allolev kood:',
      cancel: 'Tühista',
    },
    menu: {
      title: 'Valige üks allpool olevatest valikutest:',
      create: 'Loo litsents',
      delete: 'Kustuta litsents',
      lookupLicense: 'Otsi litsentsi',
      lookupTelegramID: 'Otsi Telegram ID',
      languageTitle: 'Valige oma eelistatud keel allolevast loendist:',
      languageSet: 'Keel on seatud eesti keeleks.',
    },
    invoice: {
      update: 'Arve uuendus:',
      statusPaid:
        'Arve uuendus:\n\nStaatus: {{status}}\nTeade: Maksmine tellimuse #{{trackId}} eest edukalt saadud.\nSiin on teie litsents: `{{license}}`',
      statusExpired: '⌛️ Teie arve #{{trackId}} on aegunud. ❌❌',
      statusDefault:
        "Arve uuendus:\n\nStaatus: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nVõlgnevus: $' + amount + ' ' + currency : ''}}",
    },
  },
  sq: {
    start: {
      welcome: '▶️ Mirë se vini në {{appName}}\n\n{{description}}\n\n**Veçori**\n {{features}}',
      menu: '📜 Menuja kryesore',
      accountInfo: '🔍 Informacioni i llogarisë',
      redeem: '🎟️ Shpëto',
      purchase: '🪪 Bli',
      languageSelect: '🌐 Zgjidhni gjuhën',
    },
    accountInfo: {
      title: 'Ja informacioni juaj:',
      fields: {
        creationDate: 'Data e krijimit',
        expirationDate: 'Data e skadimit',
        creatorID: 'ID e krijuesit',
        license: 'Licenca',
        telegramID: 'Telegram ID',
        total: 'Totali',
      },
      returnToStart: '🔙 Kthehu në fillim',
    },
    errors: {
      licenseNotFound: 'Licenca nuk u gjet.',
      invalidLicense: 'Çelësi i licencës është i pavlefshëm.',
      alreadyRedeemed: 'Licenca tashmë është shpëtuar.',
      licenseExpired: 'Licenca juaj ka skaduar.',
      purchaseFailed: 'Blerja dështoi. Ju lutem provoni përsëri më vonë.',
    },
    purchase: {
      please: 'Ju lutem blini një licencë',
      chooseOption: 'Ju lutem zgjidhni një opsion blerjeje:',
      week: 'Javë - ${{priceWEEK}} USD',
      month: 'Muaj - ${{priceMONTH}} USD',
      lifetime: 'Gjithë jetën - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Kthehu në fillim',
      selectedPlan:
        'Ju keni zgjedhur planin {{plan}}.\n\nJu lutemi ndiqni këtë lidhje për të përfunduar blerjen: [Paguaj Tani]({{payLink}})\n\nKjo faturë do të skadojë më: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Për të shpëtuar licencën tuaj, futni kodin më poshtë:',
      cancel: 'Anulo',
    },
    menu: {
      title: 'Zgjidhni një opsion nga më poshtë:',
      create: 'Krijo Licencë',
      delete: 'Fshij Licencën',
      lookupLicense: 'Kërko Licencën',
      lookupTelegramID: 'Kërko Telegram ID',
      languageTitle: 'Zgjidhni gjuhën e preferuar nga lista më poshtë:',
      languageSet: 'Gjuha u vendos në shqip.',
    },
    invoice: {
      update: 'Përditësimi i faturës:',
      statusPaid:
        'Përditësimi i faturës:\n\nStatusi: {{status}}\nMesazhi: Pagesa për porosinë #{{trackId}} u pranua me sukses.\nKjo është licenca juaj: `{{license}}`',
      statusExpired: '⌛️ Fatura juaj #{{trackId}} ka skaduar. ❌❌',
      statusDefault:
        "Përditësimi i faturës:\n\nStatusi: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nShuma për t'u paguar: $' + amount + ' ' + currency : ''}}",
    },
  },
  fa: {
    start: {
      welcome: '▶️ به {{appName}} خوش آمدید\n\n{{description}}\n\n**ویژگی‌ها**\n {{features}}',
      menu: '📜 منوی اصلی',
      accountInfo: '🔍 اطلاعات حساب',
      redeem: '🎟️ بازخرید',
      purchase: '🪪 خرید',
      languageSelect: '🌐 زبان را انتخاب کنید',
    },
    accountInfo: {
      title: 'اطلاعات شما:',
      fields: {
        creationDate: 'تاریخ ایجاد',
        expirationDate: 'تاریخ انقضا',
        creatorID: 'شناسه سازنده',
        license: 'مجوز',
        telegramID: 'شناسه تلگرام',
        total: 'مجموع',
      },
      returnToStart: '🔙 بازگشت به شروع',
    },
    errors: {
      licenseNotFound: 'مجوز یافت نشد.',
      invalidLicense: 'کلید مجوز نامعتبر است.',
      alreadyRedeemed: 'مجوز قبلاً بازخرید شده است.',
      licenseExpired: 'مجوز شما منقضی شده است.',
      purchaseFailed: 'خرید ناموفق بود. لطفاً بعداً دوباره امتحان کنید.',
    },
    purchase: {
      please: 'لطفاً یک مجوز خریداری کنید',
      chooseOption: 'لطفاً یک گزینه خرید انتخاب کنید:',
      week: 'هفته - ${{priceWEEK}} USD',
      month: 'ماه - ${{priceMONTH}} USD',
      lifetime: 'برای همیشه - ${{priceLIFETIME}} USD',
      backToStart: '🔙 بازگشت به شروع',
      selectedPlan:
        'شما برنامه {{plan}} را انتخاب کرده‌اید.\n\nلطفاً این لینک را دنبال کنید تا خرید را تکمیل کنید: [همین حالا پرداخت کنید]({{payLink}})\n\nاین فاکتور تا تاریخ {{expiryDate}} معتبر است.',
    },
    redeem: {
      enterCode: 'برای بازخرید مجوز خود، کد زیر را وارد کنید:',
      cancel: 'لغو',
    },
    menu: {
      title: 'یکی از گزینه‌های زیر را انتخاب کنید:',
      create: 'ایجاد مجوز',
      delete: 'حذف مجوز',
      lookupLicense: 'جستجوی مجوز',
      lookupTelegramID: 'جستجوی شناسه تلگرام',
      languageTitle: 'زبان مورد نظر خود را از لیست زیر انتخاب کنید:',
      languageSet: 'زبان به فارسی تنظیم شد.',
    },
    invoice: {
      update: 'به‌روزرسانی فاکتور:',
      statusPaid:
        'به‌روزرسانی فاکتور:\n\nوضعیت: {{status}}\nپیام: پرداخت برای سفارش #{{trackId}} با موفقیت دریافت شد.\nاین مجوز شماست: `{{license}}`',
      statusExpired: '⌛️ فاکتور شما #{{trackId}} منقضی شده است. ❌❌',
      statusDefault:
        "به‌روزرسانی فاکتور:\n\nوضعیت: {{status}}\n{{trackId ? 'شناسه: ' + trackId : ''}}{{amount && currency ? '\\nمبلغ قابل پرداخت: $' + amount + ' ' + currency : ''}}",
    },
  },
  he: {
    start: {
      welcome: '▶️ ברוכים הבאים ל-{{appName}}\n\n{{description}}\n\n**מאפיינים**\n {{features}}',
      menu: '📜 תפריט ראשי',
      accountInfo: '🔍 מידע על החשבון',
      redeem: '🎟️ פדיון',
      purchase: '🪪 רכישה',
      languageSelect: '🌐 בחר שפה',
    },
    accountInfo: {
      title: 'הנה המידע שלך:',
      fields: {
        creationDate: 'תאריך יצירה',
        expirationDate: 'תאריך תפוגה',
        creatorID: 'מזהה יוצר',
        license: 'רישיון',
        telegramID: 'מזהה טלגרם',
        total: 'סך הכול',
      },
      returnToStart: '🔙 חזרה להתחלה',
    },
    errors: {
      licenseNotFound: 'הרישיון לא נמצא.',
      invalidLicense: 'מפתח רישיון לא תקין.',
      alreadyRedeemed: 'הרישיון כבר נפדה.',
      licenseExpired: 'תוקף הרישיון שלך פג.',
      purchaseFailed: 'הרכישה נכשלה. נסה שוב מאוחר יותר.',
    },
    purchase: {
      please: 'אנא רכוש רישיון',
      chooseOption: 'אנא בחר אפשרות רכישה:',
      week: 'שבוע - ${{priceWEEK}} USD',
      month: 'חודש - ${{priceMONTH}} USD',
      lifetime: 'לכל החיים - ${{priceLIFETIME}} USD',
      backToStart: '🔙 חזרה להתחלה',
      selectedPlan:
        'בחרת בתוכנית {{plan}}.\n\nאנא עקוב אחר הקישור לסיום הרכישה: [שלם עכשיו]({{payLink}})\n\nחשבונית זו תוקפה יפוג ב-{{expiryDate}}',
    },
    redeem: {
      enterCode: 'כדי לפדות את הרישיון שלך, הזן את הקוד למטה:',
      cancel: 'ביטול',
    },
    menu: {
      title: 'בחר אחת מהאפשרויות הבאות:',
      create: 'צור רישיון',
      delete: 'מחק רישיון',
      lookupLicense: 'חפש רישיון',
      lookupTelegramID: 'חפש מזהה טלגרם',
      languageTitle: 'בחר את השפה המועדפת עליך מהרשימה למטה:',
      languageSet: 'השפה הוגדרה לעברית.',
    },
    invoice: {
      update: 'עדכון חשבונית:',
      statusPaid:
        'עדכון חשבונית:\n\nסטטוס: {{status}}\nהודעה: התשלום עבור הזמנה #{{trackId}} התקבל בהצלחה.\nזהו הרישיון שלך: `{{license}}`',
      statusExpired: '⌛️ תוקף החשבונית שלך #{{trackId}} פג. ❌❌',
      statusDefault:
        "עדכון חשבונית:\n\nסטטוס: {{status}}\n{{trackId ? 'מזהה: ' + trackId : ''}}{{amount && currency ? '\\nסכום לתשלום: $' + amount + ' ' + currency : ''}}",
    },
  },
  az: {
    start: {
      welcome:
        '▶️ {{appName}}-ə xoş gəlmisiniz\n\n{{description}}\n\n**Xüsusiyyətlər**\n {{features}}',
      menu: '📜 Əsas menyu',
      accountInfo: '🔍 Hesab Məlumatları',
      redeem: '🎟️ Endirim',
      purchase: '🪪 Satın Al',
      languageSelect: '🌐 Dili seçin',
    },
    accountInfo: {
      title: 'Budur məlumatlarınız:',
      fields: {
        creationDate: 'Yaradılma Tarixi',
        expirationDate: 'Bitmə Tarixi',
        creatorID: 'Yaradıcı ID',
        license: 'Lisenziya',
        telegramID: 'Telegram ID',
        total: 'Cəmi',
      },
      returnToStart: '🔙 Başlanğıca qayıdın',
    },
    errors: {
      licenseNotFound: 'Lisenziya tapılmadı.',
      invalidLicense: 'Etibarsız lisenziya açarı.',
      alreadyRedeemed: 'Lisenziya artıq istifadə edilib.',
      licenseExpired: 'Lisenziyanızın müddəti bitib.',
      purchaseFailed: 'Satınalma uğursuz oldu. Xahiş edirik, daha sonra yenidən cəhd edin.',
    },
    purchase: {
      please: 'Xahiş edirik, lisenziya satın alın',
      chooseOption: 'Xahiş edirik, bir satınalma seçimi seçin:',
      week: 'Həftə - ${{priceWEEK}} USD',
      month: 'Ay - ${{priceMONTH}} USD',
      lifetime: 'Ömürlük - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Başlanğıca qayıdın',
      selectedPlan:
        'Siz {{plan}} planını seçmisiniz.\n\nSatınalma əməliyyatını tamamlamaq üçün bu linkə keçin: [İndi Ödə]({{payLink}})\n\nBu faktura {{expiryDate}} tarixinədək qüvvədədir.',
    },
    redeem: {
      enterCode: 'Lisenziyanızı geri almaq üçün aşağıdakı kodu daxil edin:',
      cancel: 'Ləğv et',
    },
    menu: {
      title: 'Aşağıdakı variantlardan birini seçin:',
      create: 'Lisenziya Yaradın',
      delete: 'Lisenziyanı Silin',
      lookupLicense: 'Lisenziyanı Axtarın',
      lookupTelegramID: 'Telegram ID Axtarın',
      languageTitle: 'Aşağıdakı siyahıdan istədiyiniz dili seçin:',
      languageSet: 'Dil Azərbaycan dilinə dəyişdirildi.',
    },
    invoice: {
      update: 'Faktura Yeniləməsi:',
      statusPaid:
        'Faktura Yeniləməsi:\n\nStatus: {{status}}\nMesaj: #{{trackId}} nömrəli sifariş üçün ödəniş uğurla qəbul edildi.\nBudur lisenziyanız: `{{license}}`',
      statusExpired: '⌛️ Sizin fakturanız #{{trackId}} müddəti bitmişdir. ❌❌',
      statusDefault:
        "Faktura Yeniləməsi:\n\nStatus: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nÖdəniş Məbləği: $' + amount + ' ' + currency : ''}}",
    },
  },
  hy: {
    start: {
      welcome:
        '▶️ Բարի գալուստ {{appName}}\n\n{{description}}\n\n**Հատկություններ**\n {{features}}',
      menu: '📜 Հիմնական ընտրացանկ',
      accountInfo: '🔍 Հաշվի տվյալներ',
      redeem: '🎟️ Գործարկել',
      purchase: '🪪 Գնել',
      languageSelect: '🌐 Ընտրեք լեզուն',
    },
    accountInfo: {
      title: 'Ձեր տվյալներն են՝',
      fields: {
        creationDate: 'Ստեղծման ամսաթիվ',
        expirationDate: 'Ժամկետանցման ամսաթիվ',
        creatorID: 'Ստեղծողի ID',
        license: 'Լիցենզիա',
        telegramID: 'Telegram ID',
        total: 'Ընդհանուր',
      },
      returnToStart: '🔙 Վերադառնալ սկզբին',
    },
    errors: {
      licenseNotFound: 'Լիցենզիան չի գտնվել:',
      invalidLicense: 'Անվավեր լիցենզիայի բանալի:',
      alreadyRedeemed: 'Լիցենզիան արդեն գործարկված է:',
      licenseExpired: 'Ձեր լիցենզիան ժամկետանց է:',
      purchaseFailed: 'Գնումը ձախողվեց: Խնդրում ենք փորձել ավելի ուշ:',
    },
    purchase: {
      please: 'Խնդրում ենք գնել լիցենզիա',
      chooseOption: 'Խնդրում ենք ընտրել գնումների տարբերակ:',
      week: 'Շաբաթ - ${{priceWEEK}} USD',
      month: 'Ամիս - ${{priceMONTH}} USD',
      lifetime: 'Կյանքի ընթացքում - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Վերադառնալ սկզբին',
      selectedPlan:
        'Դուք ընտրել եք {{plan}} պլանը:\n\nԳնումը ավարտելու համար հետևեք այս հղմանը՝ [Վճարել հիմա]({{payLink}})\n\nԱյս հաշիվը կվավերացվի մինչև {{expiryDate}}:',
    },
    redeem: {
      enterCode: 'Ձեր լիցենզիան գործարկելու համար մուտքագրեք ստորև նշված կոդը:',
      cancel: 'Չեղարկել',
    },
    menu: {
      title: 'Ընտրեք ստորև նշված տարբերակներից մեկը:',
      create: 'Ստեղծել լիցենզիա',
      delete: 'Հեռացնել լիցենզիան',
      lookupLicense: 'Փնտրել լիցենզիա',
      lookupTelegramID: 'Փնտրել Telegram ID',
      languageTitle: 'Ընտրեք ձեր նախընտրած լեզուն ստորև ցուցակից:',
      languageSet: 'Լեզուն փոխվել է հայերեն:',
    },
    invoice: {
      update: 'Հաշվի թարմացում:',
      statusPaid:
        'Հաշվի թարմացում:\n\nԿարգավիճակ՝ {{status}}\nՀաղորդագրություն՝ Վճարումը #{{trackId}} պատվերի համար հաջողությամբ ստացվեց:\nՍա ձեր լիցենզիան է՝ `{{license}}`',
      statusExpired: '⌛️ Ձեր հաշիվը #{{trackId}} ժամկետանց է: ❌❌',
      statusDefault:
        "Հաշվի թարմացում:\n\nԿարգավիճակ՝ {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nՎճարման գումար: $' + amount + ' ' + currency : ''}}",
    },
  },
  ka: {
    start: {
      welcome:
        '▶️ კეთილი იყოს თქვენი მობრძანება {{appName}}-ში\n\n{{description}}\n\n**მახასიათებლები**\n {{features}}',
      menu: '📜 მთავარი მენიუ',
      accountInfo: '🔍 ანგარიშის ინფორმაცია',
      redeem: '🎟️ გამოყენება',
      purchase: '🪪 ყიდვა',
      languageSelect: '🌐 აირჩიეთ ენა',
    },
    accountInfo: {
      title: 'აქ არის თქვენი ინფორმაცია:',
      fields: {
        creationDate: 'შექმნის თარიღი',
        expirationDate: 'ვადის გასვლის თარიღი',
        creatorID: 'შემქმნელის ID',
        license: 'ლიცენზია',
        telegramID: 'Telegram ID',
        total: 'სულ',
      },
      returnToStart: '🔙 დაბრუნება დასაწყისში',
    },
    errors: {
      licenseNotFound: 'ლიცენზია ვერ მოიძებნა.',
      invalidLicense: 'არასწორი ლიცენზიის გასაღები.',
      alreadyRedeemed: 'ლიცენზია უკვე გამოყენებულია.',
      licenseExpired: 'თქვენი ლიცენზიის ვადა ამოიწურა.',
      purchaseFailed: 'შეძენა ვერ მოხერხდა. გთხოვთ, სცადეთ მოგვიანებით.',
    },
    purchase: {
      please: 'გთხოვთ, შეიძინეთ ლიცენზია',
      chooseOption: 'გთხოვთ, აირჩიეთ შეძენის ვარიანტი:',
      week: 'კვირა - ${{priceWEEK}} USD',
      month: 'თვე - ${{priceMONTH}} USD',
      lifetime: 'სამუდამოდ - ${{priceLIFETIME}} USD',
      backToStart: '🔙 დაბრუნება დასაწყისში',
      selectedPlan:
        'თქვენ აირჩიეთ {{plan}} გეგმა.\n\nშეძენის დასასრულებლად მიჰყევით ამ ბმულს: [გადაიხადეთ ახლა]({{payLink}})\n\nეს ინვოისი ვადაგასულია {{expiryDate}}-ზე.',
    },
    redeem: {
      enterCode: 'ლიცენზიის გამოსაყენებლად შეიყვანეთ ქვემოთ მოცემული კოდი:',
      cancel: 'გაუქმება',
    },
    menu: {
      title: 'აირჩიეთ ქვემოთ მოცემული ვარიანტებიდან:',
      create: 'შექმენით ლიცენზია',
      delete: 'ლიცენზიის წაშლა',
      lookupLicense: 'ლიცენზიის მოძიება',
      lookupTelegramID: 'Telegram ID მოძიება',
      languageTitle: 'აირჩიეთ სასურველი ენა ქვემოთ მოცემული სიიდან:',
      languageSet: 'ენა დაყენებულია ქართულად.',
    },
    invoice: {
      update: 'ინვოისის განახლება:',
      statusPaid:
        'ინვოისის განახლება:\n\nსტატუსი: {{status}}\nშეტყობინება: გადახდა წარმატებით დასრულდა #{{trackId}} შეკვეთაზე.\nეს არის თქვენი ლიცენზია: `{{license}}`',
      statusExpired: '⌛️ თქვენი ინვოისი #{{trackId}} ვადაგასულია. ❌❌',
      statusDefault:
        "ინვოისის განახლება:\n\nსტატუსი: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nგადასახდელი თანხა: $' + amount + ' ' + currency : ''}}",
    },
  },
  uz: {
    start: {
      welcome:
        '▶️ {{appName}} ga xush kelibsiz\n\n{{description}}\n\n**Xususiyatlar**\n {{features}}',
      menu: '📜 Asosiy menyu',
      accountInfo: '🔍 Hisob ma’lumotlari',
      redeem: '🎟️ Foydalanish',
      purchase: '🪪 Xarid qilish',
      languageSelect: '🌐 Tilni tanlang',
    },
    accountInfo: {
      title: 'Sizning ma’lumotlaringiz:',
      fields: {
        creationDate: 'Yaratilgan sana',
        expirationDate: 'Muddati tugash sanasi',
        creatorID: 'Yaratgan ID',
        license: 'Litsenziya',
        telegramID: 'Telegram ID',
        total: 'Jami',
      },
      returnToStart: '🔙 Bosh sahifaga qaytish',
    },
    errors: {
      licenseNotFound: 'Litsenziya topilmadi.',
      invalidLicense: 'Yaroqsiz litsenziya kaliti.',
      alreadyRedeemed: 'Litsenziya allaqachon foydalanilgan.',
      licenseExpired: 'Litsenziyangizning muddati tugagan.',
      purchaseFailed: 'Xarid amalga oshmadi. Iltimos, keyinroq qayta urinib ko‘ring.',
    },
    purchase: {
      please: 'Iltimos, litsenziya sotib oling',
      chooseOption: 'Iltimos, xarid variantini tanlang:',
      week: 'Hafta - ${{priceWEEK}} USD',
      month: 'Oy - ${{priceMONTH}} USD',
      lifetime: 'Umrbod - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Bosh sahifaga qaytish',
      selectedPlan:
        'Siz {{plan}} rejasini tanladingiz.\n\nXaridni yakunlash uchun ushbu havolaga o‘ting: [Hozir to‘lash]({{payLink}})\n\nUshbu hisob-faktura {{expiryDate}} sanasida tugaydi.',
    },
    redeem: {
      enterCode: 'Litsenziyangizdan foydalanish uchun quyidagi kodni kiriting:',
      cancel: 'Bekor qilish',
    },
    menu: {
      title: 'Quyidagi variantlardan birini tanlang:',
      create: 'Litsenziya yaratish',
      delete: 'Litsenziyani o‘chirish',
      lookupLicense: 'Litsenziyani qidirish',
      lookupTelegramID: 'Telegram ID qidirish',
      languageTitle: 'Quyidagi ro‘yxatdan o‘zingizga mos tilni tanlang:',
      languageSet: 'Til o‘zbek tiliga o‘rnatildi.',
    },
    invoice: {
      update: 'Hisob-faktura yangilanishi:',
      statusPaid:
        'Hisob-faktura yangilanishi:\n\nHolat: {{status}}\nXabar: #{{trackId}} buyurtma uchun to‘lov muvaffaqiyatli qabul qilindi.\nMana sizning litsenziyangiz: `{{license}}`',
      statusExpired: '⌛️ Sizning hisob-fakturangiz #{{trackId}} muddati tugagan. ❌❌',
      statusDefault:
        "Hisob-faktura yangilanishi:\n\nHolat: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nTo‘lanadigan summa: $' + amount + ' ' + currency : ''}}",
    },
  },
  kk: {
    start: {
      welcome:
        '▶️ {{appName}}-ке қош келдіңіз\n\n{{description}}\n\n**Ерекшеліктер**\n {{features}}',
      menu: '📜 Негізгі мәзір',
      accountInfo: '🔍 Аккаунт туралы ақпарат',
      redeem: '🎟️ Қайта пайдалану',
      purchase: '🪪 Сатып алу',
      languageSelect: '🌐 Тілді таңдаңыз',
    },
    accountInfo: {
      title: 'Сіздің ақпаратыңыз:',
      fields: {
        creationDate: 'Құру күні',
        expirationDate: 'Мерзімі аяқталу күні',
        creatorID: 'Құрастырушының ID',
        license: 'Лицензия',
        telegramID: 'Telegram ID',
        total: 'Барлығы',
      },
      returnToStart: '🔙 Бастауға оралу',
    },
    errors: {
      licenseNotFound: 'Лицензия табылмады.',
      invalidLicense: 'Жарамсыз лицензия кілті.',
      alreadyRedeemed: 'Лицензия бұрыннан пайдаланылған.',
      licenseExpired: 'Сіздің лицензияңыздың мерзімі аяқталды.',
      purchaseFailed: 'Сатып алу сәтсіз аяқталды. Кейінірек қайта көріңіз.',
    },
    purchase: {
      please: 'Лицензия сатып алыңыз',
      chooseOption: 'Сатып алу опциясын таңдаңыз:',
      week: 'Апта - ${{priceWEEK}} USD',
      month: 'Ай - ${{priceMONTH}} USD',
      lifetime: 'Өмір бойы - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Бастауға оралу',
      selectedPlan:
        'Сіз {{plan}} жоспарын таңдадыңыз.\n\nСатып алуды аяқтау үшін осы сілтемеге өтіңіз: [Қазір төлеу]({{payLink}})\n\nБұл шот-фактура {{expiryDate}} дейін жарамды.',
    },
    redeem: {
      enterCode: 'Лицензияңызды пайдалану үшін төмендегі кодты енгізіңіз:',
      cancel: 'Бас тарту',
    },
    menu: {
      title: 'Төмендегі опциялардың бірін таңдаңыз:',
      create: 'Лицензия жасау',
      delete: 'Лицензияны жою',
      lookupLicense: 'Лицензияны іздеу',
      lookupTelegramID: 'Telegram ID іздеу',
      languageTitle: 'Төмендегі тізімнен қалаған тілді таңдаңыз:',
      languageSet: 'Тіл қазақ тіліне орнатылды.',
    },
    invoice: {
      update: 'Шот-фактураны жаңарту:',
      statusPaid:
        'Шот-фактураны жаңарту:\n\nМәртебе: {{status}}\nХабарлама: #{{trackId}} тапсырысы үшін төлем сәтті қабылданды.\nМіне, сіздің лицензияңыз: `{{license}}`',
      statusExpired: '⌛️ Сіздің шот-фактураңыз #{{trackId}} мерзімі аяқталды. ❌❌',
      statusDefault:
        "Шот-фактураны жаңарту:\n\nМәртебе: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nТөленуі керек сома: $' + amount + ' ' + currency : ''}}",
    },
  },
  ky: {
    start: {
      welcome:
        '▶️ {{appName}} платформасына кош келиңиз\n\n{{description}}\n\n**Өзгөчөлүктөр**\n {{features}}',
      menu: '📜 Негизги меню',
      accountInfo: '🔍 Аккаунт тууралуу маалымат',
      redeem: '🎟️ Ачуу',
      purchase: '🪪 Сатып алуу',
      languageSelect: '🌐 Тилди тандаңыз',
    },
    accountInfo: {
      title: 'Сиздин маалыматтарыңыз:',
      fields: {
        creationDate: 'Түзүлгөн күнү',
        expirationDate: 'Мөөнөтү бүткөн күнү',
        creatorID: 'Түзүүчүнүн ID',
        license: 'Лицензия',
        telegramID: 'Telegram ID',
        total: 'Бардыгы',
      },
      returnToStart: '🔙 Башталышка кайтуу',
    },
    errors: {
      licenseNotFound: 'Лицензия табылган жок.',
      invalidLicense: 'Жараксыз лицензия ачкычы.',
      alreadyRedeemed: 'Лицензия буга чейин ачылган.',
      licenseExpired: 'Сиздин лицензияңыздын мөөнөтү бүткөн.',
      purchaseFailed: 'Сатып алуу ийгиликсиз болду. Кийинчерээк дагы аракет кылыңыз.',
    },
    purchase: {
      please: 'Сураныч, лицензия сатып алыңыз',
      chooseOption: 'Сураныч, сатып алуу параметрин тандаңыз:',
      week: 'Жума - ${{priceWEEK}} USD',
      month: 'Ай - ${{priceMONTH}} USD',
      lifetime: 'Жашоо бою - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Башталышка кайтуу',
      selectedPlan:
        'Сиз {{plan}} планын тандадыңыз.\n\nСатып алууну бүтүрүү үчүн бул шилтемени колдонуңуз: [Азыр төлөө]({{payLink}})\n\nБул эсеп-фактура {{expiryDate}} күнү бүтөт.',
    },
    redeem: {
      enterCode: 'Лицензияңызды ачуу үчүн төмөндөгү кодду киргизиңиз:',
      cancel: 'Жокко чыгаруу',
    },
    menu: {
      title: 'Төмөндөгү параметрлердин бирин тандаңыз:',
      create: 'Лицензия түзүү',
      delete: 'Лицензияны жок кылуу',
      lookupLicense: 'Лицензияны издеп табуу',
      lookupTelegramID: 'Telegram ID издеп табуу',
      languageTitle: 'Төмөнкү тизмеден тилди тандаңыз:',
      languageSet: 'Тил кыргыз тилине өзгөртүлдү.',
    },
    invoice: {
      update: 'Эсеп-фактура жаңыртылды:',
      statusPaid:
        'Эсеп-фактура жаңыртылды:\n\nАбалы: {{status}}\nБилдирүү: #{{trackId}} заказ үчүн төлөм ийгиликтүү кабыл алынды.\nБул сиздин лицензияңыз: `{{license}}`',
      statusExpired: '⌛️ Сиздин эсеп-фактураңыз #{{trackId}} мөөнөтү бүткөн. ❌❌',
      statusDefault:
        "Эсеп-фактура жаңыртылды:\n\nАбалы: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nТөлөнө турган сумма: $' + amount + ' ' + currency : ''}}",
    },
  },
  tk: {
    start: {
      welcome:
        '▶️ {{appName}}-a hoş geldiňiz\n\n{{description}}\n\n**Aýratynlyklar**\n {{features}}',
      menu: '📜 Esasy menu',
      accountInfo: '🔍 Hasap maglumatlary',
      redeem: '🎟️ Hyzmatdan peýdalan',
      purchase: '🪪 Satyn al',
      languageSelect: '🌐 Dili saýlaň',
    },
    accountInfo: {
      title: 'Maglumatyňyz:',
      fields: {
        creationDate: 'Döredilen senesi',
        expirationDate: 'Ýatyrýan senesi',
        creatorID: 'Döredijiniň ID',
        license: 'Lisenziýa',
        telegramID: 'Telegram ID',
        total: 'Jemi',
      },
      returnToStart: '🔙 Başlaňa gaýdyp gelmek',
    },
    errors: {
      licenseNotFound: 'Lisenziýa tapylmady.',
      invalidLicense: 'Ýalňyş lisenziýa açary.',
      alreadyRedeemed: 'Lisenziýa eýýäm ulanyldy.',
      licenseExpired: 'Lisenziýanyňyz möhleti geçen.',
      purchaseFailed: 'Satyn alyş şowsuz boldy. Täzeden synanyň.',
    },
    purchase: {
      please: 'Lisenziýa satyn alyň',
      chooseOption: 'Satyn alyş mümkinçiliklerinden birini saýlaň:',
      week: 'Hepde - ${{priceWEEK}} USD',
      month: 'Aý - ${{priceMONTH}} USD',
      lifetime: 'Ömürlik - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Başlaňa gaýdyp gelmek',
      selectedPlan:
        'Siz {{plan}} meýilnamasyny saýladyňyz.\n\nSatyn alyş üçin şu baglanyşygy ulanyň: [Indi Töle]({{payLink}})\n\nBu faktura {{expiryDate}} çenli güýjünde.',
    },
    redeem: {
      enterCode: 'Lisenziýaňyzy ulanyň, aşakdaky kody giriziň:',
      cancel: 'Ýatyrmak',
    },
    menu: {
      title: 'Aşakdaky wariantlardan birini saýlaň:',
      create: 'Lisenziýa döretmek',
      delete: 'Lisenziýany aýyrmak',
      lookupLicense: 'Lisenziýany gözläň',
      lookupTelegramID: 'Telegram ID gözläň',
      languageTitle: 'Aşakdaky sanawdan dil saýlaň:',
      languageSet: 'Dil türkmen diline sazlandy.',
    },
    invoice: {
      update: 'Faktura täzelenmesi:',
      statusPaid:
        'Faktura täzelenmesi:\n\nÝagdaýy: {{status}}\nHabar: #{{trackId}} sargyt üçin töleg üstünlikli aldy.\nIne, siziň lisenziýaňyz: `{{license}}`',
      statusExpired: '⌛️ Fakturaňyz #{{trackId}} möhleti geçen. ❌❌',
      statusDefault:
        "Faktura täzelenmesi:\n\nÝagdaýy: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nTölemeli mukdar: $' + amount + ' ' + currency : ''}}",
    },
  },
  tg: {
    start: {
      welcome: '▶️ Хуш омадед ба {{appName}}\n\n{{description}}\n\n**Хусусиятҳо**\n {{features}}',
      menu: '📜 Менюи асосӣ',
      accountInfo: '🔍 Маълумоти ҳисоб',
      redeem: '🎟️ Фоида бурдан',
      purchase: '🪪 Харидорӣ кардан',
      languageSelect: '🌐 Забонро интихоб кунед',
    },
    accountInfo: {
      title: 'Маълумоти шумо:',
      fields: {
        creationDate: 'Санаи сохт',
        expirationDate: 'Санаи анҷомёбӣ',
        creatorID: 'ID-и эҷодгар',
        license: 'Литсензия',
        telegramID: 'Telegram ID',
        total: 'Ҳамагӣ',
      },
      returnToStart: '🔙 Бозгашт ба оғоз',
    },
    errors: {
      licenseNotFound: 'Литсензия ёфт нашуд.',
      invalidLicense: 'Калиди литсензия нодуруст аст.',
      alreadyRedeemed: 'Литсензия аллакай фоида бурда шудааст.',
      licenseExpired: 'Литсензияи шумо тамом шудааст.',
      purchaseFailed: 'Харидорӣ анҷом нашуд. Лутфан баъдтар боз кӯшиш кунед.',
    },
    purchase: {
      please: 'Лутфан литсензия харидорӣ кунед',
      chooseOption: 'Лутфан имконияти харидориро интихоб кунед:',
      week: 'Ҳафта - ${{priceWEEK}} USD',
      month: 'Моҳ - ${{priceMONTH}} USD',
      lifetime: 'Ҳаётӣ - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Бозгашт ба оғоз',
      selectedPlan:
        'Шумо нақшаи {{plan}}-ро интихоб кардед.\n\nБарои анҷом додани харидорӣ, ин пайвандро истифода баред: [Ҳоло пардохт кунед]({{payLink}})\n\nИн ҳисобнома {{expiryDate}} тамом мешавад.',
    },
    redeem: {
      enterCode: 'Барои истифодаи литсензия, коди зерро ворид кунед:',
      cancel: 'Бекор кардан',
    },
    menu: {
      title: 'Яке аз имкониятҳои зеринро интихоб кунед:',
      create: 'Сохтани литсензия',
      delete: 'Тоза кардани литсензия',
      lookupLicense: 'Ҷустуҷӯи литсензия',
      lookupTelegramID: 'Ҷустуҷӯи Telegram ID',
      languageTitle: 'Забони худро аз рӯйхати зер интихоб кунед:',
      languageSet: 'Забон ба тоҷикӣ танзим шудааст.',
    },
    invoice: {
      update: 'Навсозии ҳисобнома:',
      statusPaid:
        'Навсозии ҳисобнома:\n\nМақом: {{status}}\nПаём: Пардохти фармоиши #{{trackId}} бомуваффақият қабул шуд.\nИн литсензияи шумо: `{{license}}`',
      statusExpired: '⌛️ Ҳисобномаи шумо #{{trackId}} тамом шудааст. ❌❌',
      statusDefault:
        "Навсозии ҳисобнома:\n\nМақом: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nМаблағи пардохтшаванда: $' + amount + ' ' + currency : ''}}",
    },
  },
  bo: {
    start: {
      welcome: '▶️ {{appName}} ནང་དགའ་བསུ་ཞུ།\n\n{{description}}\n\n**དོན་གནས།**\n {{features}}',
      menu: '📜 གཙོ་གནས་དོན།',
      accountInfo: '🔍 གཞུང་གྲངས་གསལ་བཤད།',
      redeem: '🎟️ འཐུལ་གྱི་དོན།',
      purchase: '🪪 ཉོ་བརྒྱུད།',
      languageSelect: '🌐 སྐད་གདམ་གསེས།',
    },
    accountInfo: {
      title: 'ཁྱེད་རང་གི་གཞུང་གྲངས་འདི་རེད།',
      fields: {
        creationDate: 'བསྐྱེད་བའི་ཚེས་གྲངས།',
        expirationDate: 'མཇུག་གྱི་ཚེས་གྲངས།',
        creatorID: 'བསྐྱེད་པའི་ཨང་རིམ།',
        license: 'གཞི་གྲུབ།',
        telegramID: 'Telegram ཨང་རིམ།',
        total: 'མང་མཐའ།',
      },
      returnToStart: '🔙 གོམ་ཐོབ་ཐོག་ལ་སླེབས།',
    },
    errors: {
      licenseNotFound: 'གཞི་གྲུབ་འདི་མ་ཐོབ།',
      invalidLicense: 'འཛིན་གྲངས་ངེས་མེད་བརྟན་མིན།',
      alreadyRedeemed: 'གཞི་གྲུབ་འདི་ཧེ་ནས་འཐུལ་བྱས་ཡོད།',
      licenseExpired: 'ཁྱེད་རང་གི་གཞི་གྲུབ་དུས་ཚོད་མཇུག་སོང་།',
      purchaseFailed: 'ཉོ་སྒོ་འབད་མ་ཐོབ། མགོ་ཡི་ལས་ཡང་མགོ་འཁོར་བྱེད།',
    },
    purchase: {
      please: 'གཞི་གྲུབ་ཉོ་དགོས།',
      chooseOption: 'ཉོ་སྒོ་བཟོད་གནས་གདམ་གསེས་བྱེད།',
      week: 'བདུན་ཕྲག་ - ${{priceWEEK}} USD',
      month: 'ཟླ་ཕྲག་ - ${{priceMONTH}} USD',
      lifetime: 'རྟག་དུ་བཅད་འདོམས་ - ${{priceLIFETIME}} USD',
      backToStart: '🔙 གོམ་ཐོབ་ཐོག་ལ་སླེབས།',
      selectedPlan:
        'ཁྱེད་རང་གིས་ {{plan}} རིམ་སྒྲིག་གདམ་གསེས་ཡིན།\n\nཉོ་སྒོ་འབད་མུར་སྤྱོད་པའི་འགྲུལ་ལམ་དེ་རྒྱུ་བྱེད། [དེ་ལས་དེ་རྒྱུ]({{payLink}})\n\nརྩིས་ཟིན་མི་དེ་རིང་སུ་ {{expiryDate}} ནང་བསྒྲུབས་ཆོག.',
    },
    redeem: {
      enterCode: 'གཞི་གྲུབ་འཐུལ་རེད་པས་རྗེས་མོལ་བྱེད་བའི་ཨང་གྲངས་བཙུགས།',
      cancel: 'ཆ་རྒྱུ་སོང་།',
    },
    menu: {
      title: 'དགའ་གདམ་གསེས་སྟེ་གདམ་བྱེད།:',
      create: 'གཞི་གྲུབ་བསྒྲུབས།',
      delete: 'གཞི་གྲུབ་བཏོན།',
      lookupLicense: 'གཞི་གྲུབ་ལྟོས།',
      lookupTelegramID: 'Telegram ID བལྟ།',
      languageTitle: 'སྐད་གདམ་སྟེར་སྟེ་གདམ་གསེས་བྱེད།:',
      languageSet: 'སྐད་བོད་ཡིག་སྒྲིག་བྱས་ཡོད།',
    },
    invoice: {
      update: 'རྩིས་བསྒྲུབས་གསར་བ།:',
      statusPaid:
        'རྩིས་བསྒྲུབས་གསར་བ།:\n\nགནས་བབས།: {{status}}\nདོན་གནས།: རྩིས་བསྒྲུབས་ #{{trackId}} གྲུབ་སྒྲུབ་སྦྱང་།\nའདི་ཁྱེད་རང་གི་གཞི་གྲུབ་རེད།: `{{license}}`',
      statusExpired: '⌛️ ཁྱེད་རང་གི་རྩིས་བསྒྲུབས་ #{{trackId}} རྒྱབ་འགྱོད་ཡོད། ❌❌',
      statusDefault:
        "རྩིས་བསྒྲུབས་གསར་བ།:\n\nགནས་བབས།: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nདངོས་གྲངས་གོ་ཆོད་ $' + amount + ' ' + currency : ''}}",
    },
  },
  tr: {
    start: {
      welcome: "▶️ {{appName}}'e hoş geldiniz\n\n{{description}}\n\n**Özellikler**\n {{features}}",
      menu: '📜 Ana Menü',
      accountInfo: '🔍 Hesap Bilgileri',
      redeem: '🎟️ Kod Kullan',
      purchase: '🪪 Satın Al',
      languageSelect: '🌐 Dil Seçimi',
    },
    accountInfo: {
      title: 'Hesap Bilgileriniz:',
      fields: {
        creationDate: 'Oluşturulma Tarihi',
        expirationDate: 'Bitiş Tarihi',
        creatorID: 'Oluşturan ID',
        license: 'Lisans',
        telegramID: 'Telegram ID',
        total: 'Toplam',
      },
      returnToStart: '🔙 Başa Dön',
    },
    errors: {
      licenseNotFound: 'Lisans bulunamadı.',
      invalidLicense: 'Geçersiz lisans anahtarı.',
      alreadyRedeemed: 'Lisans zaten kullanılmış.',
      licenseExpired: 'Lisansınızın süresi dolmuş.',
      purchaseFailed: 'Satın alma başarısız. Lütfen daha sonra tekrar deneyin.',
    },
    purchase: {
      please: 'Lütfen bir lisans satın alın',
      chooseOption: 'Lütfen bir satın alma seçeneği seçin:',
      week: 'Hafta - ${{priceWEEK}} USD',
      month: 'Ay - ${{priceMONTH}} USD',
      lifetime: 'Ömür Boyu - ${{priceLIFETIME}} USD',
      backToStart: '🔙 Başa Dön',
      selectedPlan:
        '{{plan}} planını seçtiniz.\n\nSatın alma işlemini tamamlamak için şu bağlantıyı takip edin: [Şimdi Öde]({{payLink}})\n\nBu fatura şu tarihte sona erecek: {{expiryDate}}',
    },
    redeem: {
      enterCode: 'Lisansınızı kullanmak için aşağıdaki kodu girin:',
      cancel: 'İptal',
    },
    menu: {
      title: 'Aşağıdaki seçeneklerden birini seçin:',
      create: 'Lisans Oluştur',
      delete: 'Lisans Sil',
      lookupLicense: 'Lisans Sorgula',
      lookupTelegramID: 'Telegram ID Sorgula',
      languageTitle: 'Aşağıdaki listeden tercih ettiğiniz dili seçin:',
      languageSet: 'Dil Türkçe olarak ayarlandı.',
    },
    invoice: {
      update: 'Fatura Güncellemesi:',
      statusPaid:
        'Fatura Güncellemesi:\n\nDurum: {{status}}\nMesaj: #{{trackId}} siparişi için ödeme başarıyla alındı.\nİşte lisansınız: `{{license}}`',
      statusExpired: '⌛️ #{{trackId}} numaralı faturanızın süresi doldu. ❌❌',
      statusDefault:
        "Fatura Güncellemesi:\n\nDurum: {{status}}\n{{trackId ? 'ID: ' + trackId : ''}}{{amount && currency ? '\\nÖdenmesi gereken tutar: $' + amount + ' ' + currency : ''}}",
    },
  },
};
