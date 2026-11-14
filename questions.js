window.QUESTIONS = [
  {
    "id": 1,
    "type": "multi",
    "question": "Какие из перечисленных операторов относятся к языку манипуляции данными (DML)?",
    "options": [
      {
        "text": "MERGE",
        "votes": 4,
        "against": 0
      },
      {
        "text": "ALTER TABLE",
        "votes": 0,
        "against": 4
      },
      {
        "text": "UPDATE",
        "votes": 4,
        "against": 0
      },
      {
        "text": "INSERT",
        "votes": 4,
        "against": 0
      }
    ],
    "answer": [
      0,
      2,
      3
    ],
    "verified": [
      0,
      2,
      3
    ],
    "explanation": "MERGE, UPDATE и INSERT изменяют данные; ALTER TABLE изменяет определение таблицы.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: dml",
        "url": "https://www.postgresql.org/docs/current/dml.html"
      },
      {
        "title": "PostgreSQL: sql-merge",
        "url": "https://www.postgresql.org/docs/current/sql-merge.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "MERGE/UPDATE/INSERT модифицируют строки; ALTER TABLE меняет структуру, поэтому исключён."
    }
  },
  {
    "id": 2,
    "type": "multi",
    "question": "Что требуется для использования CROSSTAB?",
    "options": [
      {
        "text": "Загрузка расширения tablefunc.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "Наличие прав суперпользователя базы данных.",
        "votes": 0,
        "against": 1
      },
      {
        "text": "Предварительное создание итоговой таблицы с нужной структурой.",
        "votes": 0,
        "against": 1
      },
      {
        "text": "SQL-запрос (source_sql), возвращающий три колонки (идентификатор, категория, значение).",
        "votes": 1,
        "against": 0
      }
    ],
    "answer": [
      0,
      3
    ],
    "verified": [
      0,
      3
    ],
    "explanation": "Для crosstab нужен модуль tablefunc и исходный SQL-запрос. Для простой формы запрос возвращает имя строки, категорию и значение.",
    "warning": "Форма crosstab(source_sql, category_sql) допускает дополнительные исходные столбцы; три колонки обязательны для простой формы crosstab(text).",
    "sources": [
      {
        "title": "PostgreSQL: tablefunc",
        "url": "https://www.postgresql.org/docs/current/tablefunc.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "tablefunc — trusted extension: суперпользователь не обязателен. Итоговую физическую таблицу создавать не нужно. Три колонки относятся к простой форме."
    }
  },
  {
    "id": 3,
    "type": "multi",
    "question": "В каких частях SQL-запроса можно использовать VALUES?",
    "options": [
      {
        "text": "В операторе INSERT для вставки нескольких строк.",
        "votes": 5,
        "against": 0
      },
      {
        "text": "В предложении WHERE для сравнения.",
        "votes": 2,
        "against": 3
      },
      {
        "text": "В рекурсивных СТЕ для задания начальных значений (анкорной части).",
        "votes": 5,
        "against": 0
      },
      {
        "text": "В качестве источника данных в предложении FROM.",
        "votes": 4,
        "against": 1
      }
    ],
    "answer": [
      0,
      2,
      3
    ],
    "verified": [
      0,
      1,
      2,
      3
    ],
    "explanation": "VALUES задаёт набор строк: применим в INSERT, FROM, начальной части рекурсивного CTE и подзапросах WHERE.",
    "warning": "Большинство не выбрало WHERE, однако в PostgreSQL допустимо, например, WHERE x IN (VALUES (1), (2)). При широкой трактовке верны все четыре варианта.",
    "sources": [
      {
        "title": "PostgreSQL: queries-values",
        "url": "https://www.postgresql.org/docs/current/queries-values.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "VALUES синтаксически заменяет SELECT: подходит для INSERT, FROM, CTE и IN/сравнения в WHERE. Все варианты подтверждены."
    }
  },
  {
    "id": 4,
    "type": "multi",
    "question": "Какие типы подзапросов существуют?",
    "options": [
      {
        "text": "Скалярный, возвращающий единственное значение.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "Векторный, возвращающий массив значений.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Процедурный, выполняющий набор команд без возврата значения.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Табличный, возвращающий значения одного или нескольких столбцов.",
        "votes": 3,
        "against": 0
      }
    ],
    "answer": [
      0,
      3
    ],
    "verified": [
      0,
      3
    ],
    "explanation": "Скалярный подзапрос возвращает одно значение (или NULL при отсутствии строки); табличный — набор строк и столбцов.",
    "warning": "«Векторный подзапрос» — не отдельная категория документации PostgreSQL. Массив можно построить через ARRAY(SELECT ...); это не означает существования процедурного подзапроса.",
    "sources": [
      {
        "title": "PostgreSQL: sql-expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Скалярный и табличный подзапросы подтверждены. Процедурный без результата — не вид подзапроса. Векторный/массив — не стандартная отдельная категория PostgreSQL."
    }
  },
  {
    "id": 5,
    "type": "single",
    "question": "Что происходит с дисковым пространством после выполнения TRUNCATE?",
    "options": [
      {
        "text": "Немедленно освобождается.",
        "votes": 7,
        "against": null
      },
      {
        "text": "Архивируется вместе с удаленными данными.",
        "votes": 0,
        "against": null
      },
      {
        "text": "Остается зарезервированным до выполнения команды VACUUM.",
        "votes": 1,
        "against": null
      },
      {
        "text": "Увеличивается за счет лог-файла операции.",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      0
    ],
    "verified": [
      0
    ],
    "explanation": "TRUNCATE освобождает пространство сразу, без последующего VACUUM.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: sql-truncate",
        "url": "https://www.postgresql.org/docs/current/sql-truncate.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Документация прямо указывает освобождение пространства без VACUUM; архивирование и обязательный рост диска не являются результатом TRUNCATE."
    }
  },
  {
    "id": 6,
    "type": "multi",
    "question": "Какие элементы связаны с механизмом обновления материализованных представлений?",
    "options": [
      {
        "text": "Опция CONCURRENTLY для обновления без блокировки.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Имя обновляемого представления.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Команда REFRESH MATERIALIZED VIEW.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Команда RECALCULATE VIEW.",
        "votes": 0,
        "against": 2
      }
    ],
    "answer": [
      0,
      1,
      2
    ],
    "verified": [
      0,
      1,
      2
    ],
    "explanation": "REFRESH MATERIALIZED VIEW принимает имя представления. CONCURRENTLY позволяет продолжать чтение при обновлении.",
    "warning": "«Без блокировки» означает без блокирования обычного SELECT; блокировки всё равно есть. CONCURRENTLY требует подходящего UNIQUE-индекса.",
    "sources": [
      {
        "title": "PostgreSQL: sql-refreshmaterializedview",
        "url": "https://www.postgresql.org/docs/current/sql-refreshmaterializedview.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "REFRESH, имя и CONCURRENTLY входят в синтаксис; RECALCULATE VIEW отсутствует. CONCURRENTLY не блокирует SELECT, но не устраняет все блокировки."
    }
  },
  {
    "id": 7,
    "type": "multi",
    "question": "Что делает команда REFRESH MATERIALIZED VIEW?",
    "options": [
      {
        "text": "Повторно выполняет запрос, на основе которого создано представление.",
        "votes": 6,
        "against": 0
      },
      {
        "text": "Удаляет определение представления из базы данных.",
        "votes": 0,
        "against": 6
      },
      {
        "text": "Добавляет новые столбцы в материализованное представление.",
        "votes": 0,
        "against": 6
      },
      {
        "text": "Заменяет старые данные в представлении новыми результатами запроса.",
        "votes": 6,
        "against": 0
      }
    ],
    "answer": [
      0,
      3
    ],
    "verified": [
      0,
      3
    ],
    "explanation": "REFRESH заново исполняет сохранённый запрос и заменяет содержимое представления его результатом.",
    "warning": "Так работает обычный REFRESH с WITH DATA по умолчанию. WITH NO DATA очищает результат без исполнения запроса и оставляет представление недоступным для чтения.",
    "sources": [
      {
        "title": "PostgreSQL: sql-refreshmaterializedview",
        "url": "https://www.postgresql.org/docs/current/sql-refreshmaterializedview.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "В обычной форме WITH DATA выполняется сохранённый запрос и заменяются данные; структура и определение сохраняются."
    }
  },
  {
    "id": 8,
    "type": "multi",
    "question": "Какие из утверждений верны?",
    "options": [
      {
        "text": "CURRENT_TIME возвращает текущее время с локальным часовым поясом.",
        "votes": 4,
        "against": 0
      },
      {
        "text": "CURRENT_DATE возвращает только текущую дату без времени.",
        "votes": 4,
        "against": 0
      },
      {
        "text": "CURRENT_TIMESTAMP возвращает только время без даты.",
        "votes": 0,
        "against": 4
      },
      {
        "text": "NOW() является генератором случайных чисел.",
        "votes": 0,
        "against": 4
      }
    ],
    "answer": [
      0,
      1
    ],
    "verified": [
      0,
      1
    ],
    "explanation": "CURRENT_TIME возвращает время с часовым поясом, CURRENT_DATE — дату. NOW() возвращает дату и время начала транзакции.",
    "warning": "«Локальный» часовой пояс здесь — TimeZone текущей сессии. Значения относятся к началу транзакции.",
    "sources": [
      {
        "title": "PostgreSQL: functions-datetime",
        "url": "https://www.postgresql.org/docs/current/functions-datetime.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Типы CURRENT_TIME/CURRENT_DATE подтверждены; CURRENT_TIMESTAMP содержит дату, NOW() не случайная функция."
    }
  },
  {
    "id": 9,
    "type": "single",
    "question": "В чем заключается основное отличие операции UNION ALL от UNION в SQL?",
    "options": [
      {
        "text": "UNION ALL позволяет объединять таблицы с разным количеством выходных столбцов",
        "votes": 0,
        "against": null
      },
      {
        "text": "UNION ALL сохраняет дубликаты строк в результирующем наборе",
        "votes": 10,
        "against": null
      },
      {
        "text": "UNION ALL работает значительно медленнее при использовании индексов",
        "votes": 0,
        "against": null
      },
      {
        "text": "UNION ALL автоматически сортирует результат по возрастанию",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      1
    ],
    "verified": [
      1
    ],
    "explanation": "UNION удаляет одинаковые строки результата; UNION ALL сохраняет их.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: queries-union",
        "url": "https://www.postgresql.org/docs/current/queries-union.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "UNION ALL сохраняет повторы. Количество столбцов должно совпадать; сортировка и замедление не гарантируются."
    }
  },
  {
    "id": 10,
    "type": "single",
    "question": "Что гарантирует требование целостности по ссылкам (referential integrity)?",
    "options": [
      {
        "text": "Все строки в таблице должны быть уникальными.",
        "votes": 0,
        "against": null
      },
      {
        "text": "Каждый столбец в таблице должен иметь уникальное имя.",
        "votes": 0,
        "against": null
      },
      {
        "text": "Все данные в базе должны быть зашифрованы.",
        "votes": 0,
        "against": null
      },
      {
        "text": "Для каждого значения внешнего ключа найдется кортеж с таким же значением первичного ключа.",
        "votes": 6,
        "against": null
      }
    ],
    "answer": [
      3
    ],
    "verified": [
      3
    ],
    "explanation": "Внешний ключ обеспечивает соответствие значения ссылочному уникальному ключу. Допустимый NULL не требует соответствующей строки.",
    "warning": "Формулировка упрощена: NULL может быть допустим, а ссылка может вести на уникальный ключ, не только на PRIMARY KEY.",
    "sources": [
      {
        "title": "PostgreSQL: ddl-constraints",
        "url": "https://www.postgresql.org/docs/current/ddl-constraints.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Это определение внешнего ключа с оговорками о NULL и UNIQUE; уникальность всех строк, имён и шифрование к ссылочной целостности не относятся."
    }
  },
  {
    "id": 11,
    "type": "multi",
    "question": "Какие утверждения о CROSSTAB верны?",
    "options": [
      {
        "text": "Требует строгого определения структуры результирующей таблицы.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "Является встроенной функцией, не требующей расширений.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Более эффективен для большого числа колонок.",
        "votes": 1,
        "against": 2
      },
      {
        "text": "Требует установки расширения tablefunc.",
        "votes": 3,
        "against": 0
      }
    ],
    "answer": [
      0,
      3
    ],
    "verified": [
      0,
      3
    ],
    "explanation": "crosstab входит в tablefunc; вызывающий запрос должен определить тип результирующих столбцов. Универсальной гарантии ускорения нет.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: tablefunc",
        "url": "https://www.postgresql.org/docs/current/tablefunc.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "tablefunc и определённый тип результата необходимы; гарантия большей эффективности без сравнения/измерений недоказуема."
    }
  },
  {
    "id": 12,
    "type": "single",
    "question": "Что относится к справочным данным?",
    "options": [
      {
        "text": "Произвольные тексты без структуры",
        "votes": 0,
        "against": null
      },
      {
        "text": "Фиксирующие факты операций",
        "votes": 0,
        "against": null
      },
      {
        "text": "Классификаторы и нормативы",
        "votes": 5,
        "against": null
      },
      {
        "text": "Данные о данных",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      2
    ],
    "verified": [
      2
    ],
    "explanation": "Справочные данные задают стандартные значения и классификации: например, коды стран, категорий и нормативы.",
    "warning": "",
    "sources": [
      {
        "title": "IBM Redbooks: Reference Data Management",
        "url": "https://www.redbooks.ibm.com/technotes/tips1016.pdf"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Справочные данные задают коды и классификации. Факты операций — транзакционные, данные о данных — метаданные."
    }
  },
  {
    "id": 13,
    "type": "multi",
    "question": "Что верно об обычном представлении (VIEW) в PostgreSQL?",
    "options": [
      {
        "text": "Представление занимает на диске столько же места, сколько и исходная таблица.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "При обращении к представлению выполняется запрос, на котором оно основано.",
        "votes": null,
        "against": null
      },
      {
        "text": "Представление хранится в виде временного файла на сервере.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "В базе данных хранится только определение представления (SQL-запрос).",
        "votes": 2,
        "against": 1
      }
    ],
    "answer": [],
    "verified": [
      1,
      3
    ],
    "explanation": "В базе хранится определение обычного VIEW. При обращении к представлению PostgreSQL выполняет его запрос.",
    "warning": "Формулировка и варианты уточнены после сверки с документацией PostgreSQL.",
    "sources": [
      {
        "title": "PostgreSQL: sql-createview",
        "url": "https://www.postgresql.org/docs/current/sql-createview.html"
      }
    ],
    "audit": {
      "date": "2026-11-14",
      "verdict": "corrected",
      "reason": "В базе хранится определение обычного VIEW. При обращении к представлению PostgreSQL выполняет его запрос."
    },
    "original": {
      "question": "Как хранится представление в базе данных?",
      "options": [
        {
          "text": "Представление занимает на диске столько же места, сколько и исходная таблица.",
          "votes": 0,
          "against": 3
        },
        {
          "text": "Для хранения представления используется только оперативная память при обращении.",
          "votes": 0,
          "against": 3
        },
        {
          "text": "Представление хранится в виде временного файла на сервере.",
          "votes": 0,
          "against": 3
        },
        {
          "text": "В базе данных хранится только определение представления (SQL-запрос).",
          "votes": 2,
          "against": 1
        }
      ],
      "answer": [
        3
      ]
    }
  },
  {
    "id": 14,
    "type": "multi",
    "question": "Каковы основные характеристики подзапроса?",
    "options": [
      {
        "text": "В подзапросе обязательно должна использоваться фраза ORDER BY.",
        "votes": 0,
        "against": 4
      },
      {
        "text": "Текст подзапроса должен быть заключен в скобки.",
        "votes": 4,
        "against": 0
      },
      {
        "text": "Подзапрос может быть только оператором INSERT или UPDATE.",
        "votes": 0,
        "against": 4
      },
      {
        "text": "Это законченный оператор SELECT, внедренный в тело другого оператора.",
        "votes": 4,
        "against": 0
      }
    ],
    "answer": [
      1,
      3
    ],
    "verified": [
      1,
      3
    ],
    "explanation": "Подзапрос в выражении или FROM записывается в скобках; обычно это SELECT внутри другого SQL-оператора.",
    "warning": "Описание относится к обычному вложенному SELECT в FROM или выражении. В более широком смысле вложенный запрос бывает VALUES/TABLE; запрос после AS в CREATE TABLE AS не требует скобок.",
    "sources": [
      {
        "title": "PostgreSQL: sql-expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Обычные подзапросы в FROM/выражениях заключают в скобки; SELECT может быть вложен в оператор. ORDER BY не обязателен, INSERT/UPDATE не единственные типы."
    }
  },
  {
    "id": 15,
    "type": "multi",
    "question": "Что является частью синтаксиса оператора IF?",
    "options": [
      {
        "text": "Условие после ключевого слова IF.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "Обязательное наличие блока ELSE.",
        "votes": 1,
        "against": 2
      },
      {
        "text": "Оператор GOTO для перехода к другой части кода.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Блок кода, который выполняется при истинности условия.",
        "votes": 2,
        "against": 1
      }
    ],
    "answer": [
      0,
      3
    ],
    "verified": [
      0,
      3
    ],
    "explanation": "IF содержит логическое условие и блок THEN. ELSE необязателен; GOTO к синтаксису IF не относится.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: plpgsql-control-structures",
        "url": "https://www.postgresql.org/docs/current/plpgsql-control-structures.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "IF проверяет условие и исполняет THEN. ELSE факультативен, GOTO не является частью синтаксиса IF."
    }
  },
  {
    "id": 16,
    "type": "multi",
    "question": "При каких условиях представление будет изменяемым?",
    "options": [
      {
        "text": "В определении представления отсутствуют предложения WITH, DISTINCT, GROUP BY, HAVING.",
        "votes": 2,
        "against": 1
      },
      {
        "text": "Список FROM в запросе содержит ровно один элемент (таблицу или изменяемое представление).",
        "votes": 2,
        "against": 1
      },
      {
        "text": "В представлении используются агрегатные функции, такие как SUM() или COUNT().",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Представление создано с опцией WITH CHECK OPTION.",
        "votes": 0,
        "against": 3
      }
    ],
    "answer": [
      0,
      1
    ],
    "verified": [
      0,
      1
    ],
    "explanation": "Для автоматически изменяемого VIEW нужен один изменяемый источник без запрещённых конструкций. CHECK OPTION проверяет, что изменённые строки остаются видимыми.",
    "warning": "Первые два признака не составляют полного перечня условий. CHECK OPTION не делает произвольное VIEW изменяемым, но PostgreSQL разрешает его только для автоматически изменяемых VIEW. Поэтому также принимается ответ с этим вариантом.",
    "sources": [
      {
        "title": "PostgreSQL: sql-createview",
        "url": "https://www.postgresql.org/docs/current/sql-createview.html"
      }
    ],
    "acceptedAnswers": [
      [
        0,
        1
      ],
      [
        0,
        1,
        3
      ]
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Критерии автоматической изменяемости подтверждены. CHECK OPTION не придаёт изменяемость, но успешное создание с ним свидетельствует о ней; приняты обе трактовки."
    }
  },
  {
    "id": 17,
    "type": "multi",
    "question": "Какие из перечисленных опций являются частью синтаксиса оконной функции OVER()?",
    "options": [
      {
        "text": "SELECT BY",
        "votes": 0,
        "against": 5
      },
      {
        "text": "GROUP BY",
        "votes": 0,
        "against": 5
      },
      {
        "text": "PARTITION BY",
        "votes": 5,
        "against": 0
      },
      {
        "text": "ORDER BY",
        "votes": 5,
        "against": 0
      }
    ],
    "answer": [
      2,
      3
    ],
    "verified": [
      2,
      3
    ],
    "explanation": "В OVER используются PARTITION BY, ORDER BY и рамка окна. GROUP BY — отдельная конструкция запроса.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: sql-expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "OVER допускает PARTITION BY и ORDER BY. SELECT BY отсутствует, GROUP BY не входит в определение окна."
    }
  },
  {
    "id": 18,
    "type": "single",
    "question": "Какое значение может принять внешний ключ, если для него не нашлось соответствующего первичного ключа в главной таблице?",
    "options": [
      {
        "text": "Пустую строку.",
        "votes": 0,
        "against": null
      },
      {
        "text": "Значение по умолчанию для данного типа.",
        "votes": 0,
        "against": null
      },
      {
        "text": "Полностью неопределенное значение (NULL).",
        "votes": 14,
        "against": null
      },
      {
        "text": "Нулевое значение (0).",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      2
    ],
    "verified": [
      2
    ],
    "explanation": "NULL может означать отсутствие ссылки, если столбец допускает NULL. Несуществующий ненулевой ключ нарушает ограничение.",
    "warning": "СУБД не подставляет NULL автоматически при любой неудачной ссылке: такой INSERT/UPDATE обычно завершается ошибкой. NULL допустим только при разрешённой пустой ссылке.",
    "sources": [
      {
        "title": "PostgreSQL: ddl-constraints",
        "url": "https://www.postgresql.org/docs/current/ddl-constraints.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "NULL допускается, если нет NOT NULL. Пустая строка, 0 и значение по умолчанию требуют подходящей ссылки и не заменяют её автоматически."
    }
  },
  {
    "id": 19,
    "type": "single",
    "question": "Кто считается автором первой работы по реляционной модели данных?",
    "options": [
      {
        "text": "К. Дж. Дейт",
        "votes": 0,
        "against": null
      },
      {
        "text": "Эдгар Кодд",
        "votes": 7,
        "against": null
      },
      {
        "text": "Исаева Мария Владимировна",
        "votes": 0,
        "against": null
      },
      {
        "text": "Билл Гейтс",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      1
    ],
    "verified": [
      1
    ],
    "explanation": "Эдгар Ф. Кодд предложил реляционную модель в работе A Relational Model of Data for Large Shared Data Banks.",
    "warning": "",
    "sources": [
      {
        "title": "IBM Research: статья Эдгара Кодда, 1970",
        "url": "https://research.ibm.com/publications/a-relational-model-of-data-for-large-shared-data-banks"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Первичный источник IBM Research указывает E. F. Codd как автора статьи."
    }
  },
  {
    "id": 20,
    "type": "multi",
    "question": "Какие ключевые слова используются в синтаксисе CASE?",
    "options": [
      {
        "text": "LOOP ... THEN",
        "votes": 0,
        "against": 6
      },
      {
        "text": "WHEN ... THEN",
        "votes": 6,
        "against": 0
      },
      {
        "text": "END",
        "votes": 6,
        "against": 0
      },
      {
        "text": "ELSE",
        "votes": 6,
        "against": 0
      }
    ],
    "answer": [
      1,
      2,
      3
    ],
    "verified": [
      1,
      2,
      3
    ],
    "explanation": "CASE использует WHEN … THEN, необязательный ELSE и завершающее END.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: functions-conditional",
        "url": "https://www.postgresql.org/docs/current/functions-conditional.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "WHEN/THEN, ELSE и END присутствуют в грамматике CASE; LOOP относится к циклу."
    }
  },
  {
    "id": 21,
    "type": "match",
    "question": "Сопоставьте часть OVER()-выражения с её функцией.",
    "options": [],
    "answer": [],
    "verified": [],
    "explanation": "PARTITION BY задаёт разделы, ORDER BY — порядок внутри раздела, ROWS/RANGE — рамку окна.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: sql-expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "pairs": [
      {
        "left": "PARTITION BY",
        "right": "Разбивает строки на группы.",
        "votes": 1
      },
      {
        "left": "ROWS/RANGE",
        "right": "Определяет границы окна.",
        "votes": 1
      },
      {
        "left": "ORDER BY",
        "right": "Определяет порядок строк в разделе.",
        "votes": 1
      }
    ],
    "choices": [
      "Определяет границы окна.",
      "Разбивает строки на группы.",
      "Определяет порядок строк в разделе."
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Все три сопоставления подтверждены грамматикой OVER; «группы» здесь означают разделы без свёртки строк."
    }
  },
  {
    "id": 22,
    "type": "match",
    "question": "Сопоставьте оператор DML с его назначением.",
    "options": [],
    "answer": [],
    "verified": [],
    "explanation": "DELETE удаляет строки, INSERT добавляет, UPDATE изменяет, MERGE выбирает операции модификации по условиям сопоставления.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: dml",
        "url": "https://www.postgresql.org/docs/current/dml.html"
      },
      {
        "title": "PostgreSQL: sql-merge",
        "url": "https://www.postgresql.org/docs/current/sql-merge.html"
      }
    ],
    "pairs": [
      {
        "left": "DELETE",
        "right": "Удаление записей из таблицы",
        "votes": 3
      },
      {
        "left": "INSERT",
        "right": "Добавление записей (строк) в таблицу",
        "votes": 3
      },
      {
        "left": "MERGE",
        "right": "Выполнение разных операций модификации",
        "votes": 3
      },
      {
        "left": "UPDATE",
        "right": "Обновление данных в столбце таблицы",
        "votes": 3
      }
    ],
    "choices": [
      "Обновление данных в столбце таблицы",
      "Добавление записей (строк) в таблицу",
      "Выполнение разных операций модификации",
      "Удаление записей из таблицы"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Все четыре сопоставления подтверждены командами DML: DELETE, INSERT, MERGE, UPDATE."
    }
  },
  {
    "id": 23,
    "type": "single",
    "question": "В каком году была опубликована основополагающая работа по реляционной модели данных?",
    "options": [
      {
        "text": "2001",
        "votes": 0,
        "against": null
      },
      {
        "text": "1970",
        "votes": 8,
        "against": null
      },
      {
        "text": "2025",
        "votes": 0,
        "against": null
      },
      {
        "text": "1945",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      1
    ],
    "verified": [
      1
    ],
    "explanation": "Основополагающая статья Эдгара Кодда о реляционной модели опубликована в 1970 году.",
    "warning": "",
    "sources": [
      {
        "title": "IBM Research: статья Эдгара Кодда, 1970",
        "url": "https://research.ibm.com/publications/a-relational-model-of-data-for-large-shared-data-banks"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Первичный источник датирует статью 1 июня 1970 года."
    }
  },
  {
    "id": 24,
    "type": "single",
    "question": "Какое требование гласит, что у любого отношения должен существовать первичный ключ без неопределенных значений?",
    "options": [
      {
        "text": "Требование атомарности транзакций",
        "votes": 0,
        "against": null
      },
      {
        "text": "Требование целостности сущности",
        "votes": 12,
        "against": null
      },
      {
        "text": "Требование целостности по ссылкам",
        "votes": 0,
        "against": null
      },
      {
        "text": "Требование нормализации данных",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      1
    ],
    "verified": [
      1
    ],
    "explanation": "Целостность сущности требует идентифицируемости строки: первичный ключ уникален и не содержит NULL.",
    "warning": "Это теоретическое требование модели; PostgreSQL технически разрешает создать таблицу без PRIMARY KEY.",
    "sources": [
      {
        "title": "PostgreSQL: ddl-constraints",
        "url": "https://www.postgresql.org/docs/current/ddl-constraints.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "PRIMARY KEY требует уникальность и NOT NULL; это целостность сущности, не ссылочная целостность, нормализация или атомарность."
    }
  },
  {
    "id": 25,
    "type": "multi",
    "question": "Какие утверждения об обобщённых табличных выражениях (СТЕ) верны?",
    "options": [
      {
        "text": "СТЕ обязательно должно быть рекурсивным.",
        "votes": 1,
        "against": 2
      },
      {
        "text": "СТЕ - это временный результирующий набор данных.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "СТЕ сохраняется в базе данных как постоянное представление (view).",
        "votes": 0,
        "against": 3
      },
      {
        "text": "СТЕ существует только в рамках текущего запроса и не сохраняется в базе данных.",
        "votes": 2,
        "against": 1
      }
    ],
    "answer": [
      1,
      3
    ],
    "verified": [
      1,
      3
    ],
    "explanation": "CTE — вспомогательное выражение WITH, доступное в пределах одного оператора; рекурсия необязательна.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: queries-with",
        "url": "https://www.postgresql.org/docs/current/queries-with.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "CTE существует в пределах одного оператора и не обязан быть рекурсивным; постоянным VIEW не становится."
    }
  },
  {
    "id": 26,
    "type": "multi",
    "question": "Каковы особенности простого цикла LOOP?",
    "options": [
      {
        "text": "Для его завершения необходимо использовать операторы EXIT или RETURN.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Цикл автоматически завершается после выполнения 1000 итераций.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Он организует бесконечный цикл.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Он требует указания условия в заголовке, как в WHILE.",
        "votes": 0,
        "against": 2
      }
    ],
    "answer": [
      0,
      2
    ],
    "verified": [
      0,
      2
    ],
    "explanation": "Простой LOOP повторяется без условия в заголовке. Обычно выход задают EXIT или RETURN из функции.",
    "warning": "EXIT/RETURN — обычные способы выхода. Цикл также может прерваться исключением или отменой выполнения, поэтому слово «необходимо» упрощает картину.",
    "sources": [
      {
        "title": "PostgreSQL: plpgsql-control-structures",
        "url": "https://www.postgresql.org/docs/current/plpgsql-control-structures.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Документация описывает LOOP как безусловный цикл до EXIT/RETURN. Нет лимита 1000 или обязательного условия в заголовке."
    }
  },
  {
    "id": 27,
    "type": "single",
    "question": "Что из перечисленного, согласно определению, является моделью данных?",
    "options": [
      {
        "text": "Набор программного кода для доступа к данным.",
        "votes": 0,
        "against": null
      },
      {
        "text": "Набор родовых понятий и признаков, которыми должны обладать СУБД.",
        "votes": 7,
        "against": null
      },
      {
        "text": "Физическая структура хранения данных на диске.",
        "votes": 0,
        "against": null
      },
      {
        "text": "Конкретная СУБД, например PostgreSQL.",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      1
    ],
    "verified": [
      1
    ],
    "explanation": "Модель данных — система понятий для описания данных, связей, ограничений и операций; она не равна конкретной СУБД.",
    "warning": "Формулировка варианта неточна. Модель данных описывает структуры данных, связи, ограничения и операции; это не просто список обязательных свойств продукта СУБД.",
    "sources": [
      {
        "title": "IBM: Data modeling",
        "url": "https://www.ibm.com/think/topics/data-modeling"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Выбран наиболее подходящий абстрактный набор понятий, а не программный код, физическое хранение или продукт СУБД. Терминология варианта неточная."
    }
  },
  {
    "id": 28,
    "type": "match",
    "question": "Сопоставьте функцию смещения с её назначением.",
    "options": [],
    "answer": [],
    "verified": [],
    "explanation": "LEAD и LAG читают последующие и предыдущие строки; FIRST_VALUE и LAST_VALUE возвращают крайние значения рамки окна.",
    "warning": "FIRST_VALUE и LAST_VALUE учитывают рамку окна, а не обязательно весь раздел. LAST_VALUE с рамкой по умолчанию часто не возвращает последнюю строку раздела.",
    "sources": [
      {
        "title": "PostgreSQL: functions-window",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      }
    ],
    "pairs": [
      {
        "left": "LEAD",
        "right": "Обращается к данным из следующих строк.",
        "votes": 2
      },
      {
        "left": "LAG",
        "right": "Обращается к данным из предыдущих строк.",
        "votes": 2
      },
      {
        "left": "FIRST_VALUE",
        "right": "Возвращает первое значение в окне.",
        "votes": 2
      },
      {
        "left": "LAST_VALUE",
        "right": "Возвращает последнее значение в окне.",
        "votes": 2
      }
    ],
    "choices": [
      "Возвращает последнее значение в окне.",
      "Обращается к данным из следующих строк.",
      "Возвращает первое значение в окне.",
      "Обращается к данным из предыдущих строк."
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Все сопоставления верны при понимании «окна» как рамки для FIRST_VALUE/LAST_VALUE; LAG/LEAD оперируют строками раздела."
    }
  },
  {
    "id": 29,
    "type": "multi",
    "question": "Какие вызовы PostgreSQL округляют значение num типа numeric до ближайшего целого?",
    "options": [
      {
        "text": "ROUND(num)",
        "votes": null,
        "against": null
      },
      {
        "text": "CEIL(num)",
        "votes": 2,
        "against": 2
      },
      {
        "text": "ROUND(num, 0)",
        "votes": null,
        "against": null
      },
      {
        "text": "FLOOR(num)",
        "votes": 0,
        "against": 4
      }
    ],
    "answer": [],
    "verified": [
      0,
      2
    ],
    "explanation": "ROUND(num) округляет до ближайшего целого. ROUND(num, 0) делает то же самое, задавая ноль знаков после запятой. CEIL округляет вверх, FLOOR — вниз.",
    "warning": "Формулировка и варианты уточнены после сверки с документацией PostgreSQL.",
    "sources": [
      {
        "title": "PostgreSQL: functions-math",
        "url": "https://www.postgresql.org/docs/current/functions-math.html"
      }
    ],
    "audit": {
      "date": "2026-11-14",
      "verdict": "corrected",
      "reason": "ROUND(num) округляет до ближайшего целого. ROUND(num, 0) делает то же самое, задавая ноль знаков после запятой. CEIL округляет вверх, FLOOR — вниз."
    },
    "original": {
      "question": "Какие функции выполняют округление числа до ближайшего целого?",
      "options": [
        {
          "text": "TRUNC(num)",
          "votes": 2,
          "against": 2
        },
        {
          "text": "CEIL(num)",
          "votes": 2,
          "against": 2
        },
        {
          "text": "ROUND(num, 1)",
          "votes": 0,
          "against": 4
        },
        {
          "text": "FLOOR(num)",
          "votes": 0,
          "against": 4
        }
      ],
      "answer": [
        0,
        1
      ]
    }
  },
  {
    "id": 30,
    "type": "multi",
    "question": "В каких случаях применяются подзапросы?",
    "options": [
      {
        "text": "Когда значение для сравнения в HAVING должно быть вычислено.",
        "votes": 3,
        "against": 1
      },
      {
        "text": "Когда значение для сравнения в WHERE заранее не определено.",
        "votes": 3,
        "against": 1
      },
      {
        "text": "Для создания постоянных таблиц в базе данных.",
        "votes": 0,
        "against": 4
      },
      {
        "text": "Когда необходимо сослаться на столбцы таблицы из внешнего запроса.",
        "votes": 2,
        "against": 2
      }
    ],
    "answer": [
      0,
      1,
      3
    ],
    "verified": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Подзапросы используются в WHERE/HAVING, могут ссылаться на внешний запрос и применяться при создании постоянной таблицы через CREATE TABLE AS.",
    "warning": "Вариант о создании таблиц также допустим: CREATE TABLE saved AS SELECT * FROM (SELECT 1 AS x) AS sub. Саму таблицу создаёт внешняя команда CREATE TABLE AS, а подзапрос вычисляет её данные.",
    "sources": [
      {
        "title": "PostgreSQL: sql-createtableas",
        "url": "https://www.postgresql.org/docs/current/sql-createtableas.html"
      },
      {
        "title": "PostgreSQL: functions-subquery",
        "url": "https://www.postgresql.org/docs/current/functions-subquery.html"
      },
      {
        "title": "PostgreSQL: sql-expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "corrected",
      "reason": "Добавлен вариант создания постоянной таблицы: CREATE TABLE AS SELECT допускает подзапросы. HAVING, WHERE и корреляция также допустимы."
    }
  },
  {
    "id": 31,
    "type": "match",
    "question": "Сопоставьте ранжирующую функцию с её особенностью.",
    "options": [],
    "answer": [],
    "verified": [],
    "explanation": "ROW_NUMBER нумерует строки; DENSE_RANK не оставляет пропусков рангов, RANK оставляет пропуски после одинаковых значений.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: functions-window",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      }
    ],
    "pairs": [
      {
        "left": "ROW_NUMBER()",
        "right": "Уникальный номер для каждой строки.",
        "votes": 4
      },
      {
        "left": "DENSE_RANK()",
        "right": "Ранги без пропусков.",
        "votes": 4
      },
      {
        "left": "RANK()",
        "right": "Пропускает ранг после «ничьей».",
        "votes": 4
      }
    ],
    "choices": [
      "Уникальный номер для каждой строки.",
      "Ранги без пропусков.",
      "Пропускает ранг после «ничьей»."
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "ROW_NUMBER уникален внутри раздела, DENSE_RANK без пропусков, RANK с пропусками после равных строк; все сопоставления верны."
    }
  },
  {
    "id": 32,
    "type": "multi",
    "question": "Какие результаты будут верными для функции ROUND?",
    "options": [
      {
        "text": "ROUND(1691.7, -1) вернет 1691.",
        "votes": 1,
        "against": 2
      },
      {
        "text": "ROUND(69.7171, 2) вернет 69.72.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "ROUND(69.499) вернет 69.",
        "votes": 2,
        "against": 1
      },
      {
        "text": "ROUND(1691.7, -2) вернет 1700.",
        "votes": 2,
        "against": 1
      }
    ],
    "answer": [
      1,
      2,
      3
    ],
    "verified": [
      1,
      2,
      3
    ],
    "explanation": "ROUND(1691.7, -1) даёт 1690. Остальные три приведённых результата верны; отрицательный масштаб округляет слева от запятой.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: functions-math",
        "url": "https://www.postgresql.org/docs/current/functions-math.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Пересчитано: 1690, 69.72, 69, 1700 соответственно. Первый вариант ошибочен, остальные три верны."
    }
  },
  {
    "id": 33,
    "type": "single",
    "question": "Что входит в состав программного обеспечения системы баз данных?",
    "options": [
      {
        "text": "Конечные пользователи и программисты",
        "votes": 0,
        "against": null
      },
      {
        "text": "СУБД, утилиты и средства разработки приложений",
        "votes": 5,
        "against": null
      },
      {
        "text": "Компьютеры и накопители информации",
        "votes": 0,
        "against": null
      },
      {
        "text": "Деревянные счеты и бумажные архивы",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      1
    ],
    "verified": [
      1
    ],
    "explanation": "Программная часть включает сервер СУБД, клиентские программы, утилиты и инструменты разработки. Люди и оборудование — другие компоненты системы.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: tutorial-arch",
        "url": "https://www.postgresql.org/docs/current/tutorial-arch.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "СУБД, утилиты и инструменты — программы. Люди, оборудование и бумажные носители программным обеспечением не являются."
    }
  },
  {
    "id": 34,
    "type": "multi",
    "question": "Какие задачи позволяют решать функции смещения?",
    "options": [
      {
        "text": "Создавать новые строки на основе смещения.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Обращаться к значениям в начале или в конце окна.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Обращаться к данным из предыдущих строк окна.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Вычислять среднее значение по всему окну.",
        "votes": 0,
        "against": 2
      }
    ],
    "answer": [
      1,
      2
    ],
    "verified": [
      1,
      2
    ],
    "explanation": "LAG/LEAD обращаются к соседним строкам, FIRST_VALUE/LAST_VALUE — к краям рамки. Среднее вычисляет AVG.",
    "warning": "Термин «функции смещения» используется широко: здесь включает FIRST_VALUE/LAST_VALUE. В узком смысле это LAG/LEAD; PostgreSQL не устанавливает такую учебную классификацию.",
    "sources": [
      {
        "title": "PostgreSQL: functions-window",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "В широкой учебной группе LAG/LEAD/FIRST_VALUE/LAST_VALUE доступны предыдущие строки и края рамки. Они не создают строки и не вычисляют AVG."
    }
  },
  {
    "id": 35,
    "type": "single",
    "question": "Какой тип ограничений определяется при создании таблиц с помощью языка определения данных (DDL)?",
    "options": [
      {
        "text": "Процедурные (Procedural Constraints)",
        "votes": 0,
        "against": null
      },
      {
        "text": "Пользовательские",
        "votes": 0,
        "against": null
      },
      {
        "text": "Декларативные (Declarative Constraints)",
        "votes": 9,
        "against": null
      },
      {
        "text": "Физические",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      2
    ],
    "verified": [
      2
    ],
    "explanation": "Ограничения PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK и NOT NULL задают декларативно в определении таблицы.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: ddl-constraints",
        "url": "https://www.postgresql.org/docs/current/ddl-constraints.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Ограничения в DDL определяют декларативно; процедуры и физические механизмы — другие способы/уровни реализации."
    }
  },
  {
    "id": 36,
    "type": "multi",
    "question": "В каких случаях предпочтительнее использовать функции, а в каких – процедуры?",
    "options": [
      {
        "text": "Функции предназначены для управления транзакциями.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Процедуры используются для создания ограничений целостности.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Процедуры больше подходят для выполнения последовательности действий и операций с данными.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Функции часто используются для вычислений и преобразования данных внутри запросов.",
        "votes": 2,
        "against": 0
      }
    ],
    "answer": [
      2,
      3
    ],
    "verified": [
      2,
      3
    ],
    "explanation": "Функции можно использовать в выражениях запросов. Процедуры вызываются CALL и подходят для последовательностей операций, включая допустимое управление транзакциями.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: xproc",
        "url": "https://www.postgresql.org/docs/current/xproc.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Функции применимы в выражениях, процедуры удобны для действий и управления транзакциями. Создание ограничений не их определяющее назначение."
    }
  },
  {
    "id": 37,
    "type": "match",
    "question": "Сопоставьте режим параметра хранимой процедуры с его описанием.",
    "options": [],
    "answer": [],
    "verified": [],
    "explanation": "IN передаёт входное значение, OUT возвращает результат, INOUT совмещает оба направления.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: sql-createprocedure",
        "url": "https://www.postgresql.org/docs/current/sql-createprocedure.html"
      }
    ],
    "pairs": [
      {
        "left": "OUT",
        "right": "Позволяет процедуре возвращать значения после выполнения",
        "votes": 3
      },
      {
        "left": "IN",
        "right": "Позволяет передавать значения в процедуру",
        "votes": 3
      },
      {
        "left": "INOUT",
        "right": "Может быть как входным, так и выходным параметром",
        "votes": 3
      }
    ],
    "choices": [
      "Позволяет процедуре возвращать значения после выполнения",
      "Может быть как входным, так и выходным параметром",
      "Позволяет передавать значения в процедуру"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "IN передаёт аргумент, OUT возвращает, INOUT совмещает оба направления. Сопоставления подтверждены."
    }
  },
  {
    "id": 38,
    "type": "multi",
    "question": "Как в PostgreSQL ограничить глубину рекурсивного CTE или прекратить обход при обнаружении цикла?",
    "options": [
      {
        "text": "Использовать ключевое слово LIMIT внутри рекурсивной части.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Реализовать в запросе условие, которое гарантированно остановит рекурсию.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Использовать предложение CYCLE для отслеживания повторного посещения узлов.",
        "votes": null,
        "against": null
      },
      {
        "text": "Изменить параметр конфигурации, например, max_recursive_steps.",
        "votes": 0,
        "against": 2
      }
    ],
    "answer": [],
    "verified": [
      1,
      2
    ],
    "explanation": "Условие с ограничением глубины завершает рекурсию по счётчику. CYCLE отслеживает повторы и прекращает дальнейший обход по ветви с обнаруженным циклом.",
    "warning": "Формулировка и варианты уточнены после сверки с документацией PostgreSQL.",
    "sources": [
      {
        "title": "PostgreSQL: queries-with",
        "url": "https://www.postgresql.org/docs/current/queries-with.html"
      }
    ],
    "audit": {
      "date": "2026-11-14",
      "verdict": "corrected",
      "reason": "Условие с ограничением глубины завершает рекурсию по счётчику. CYCLE отслеживает повторы и прекращает дальнейший обход по ветви с обнаруженным циклом."
    },
    "original": {
      "question": "Как можно управлять глубиной рекурсии?",
      "options": [
        {
          "text": "Использовать ключевое слово LIMIT внутри рекурсивной части.",
          "votes": 0,
          "against": 2
        },
        {
          "text": "Реализовать в запросе условие, которое гарантированно остановит рекурсию.",
          "votes": 0,
          "against": 2
        },
        {
          "text": "Использовать ключевое слово STOP RECURSION.",
          "votes": 0,
          "against": 2
        },
        {
          "text": "Изменить параметр конфигурации, например, max_recursive_steps.",
          "votes": 0,
          "against": 2
        }
      ],
      "answer": []
    }
  },
  {
    "id": 39,
    "type": "single",
    "question": "Какое ключевое преимущество имеет TRUNCATE по сравнению с DELETE для больших таблиц?",
    "options": [
      {
        "text": "TRUNCATE вызывает триггеры на удаление.",
        "votes": 0,
        "against": null
      },
      {
        "text": "TRUNCATE позволяет удалить только определённые строки.",
        "votes": 0,
        "against": null
      },
      {
        "text": "TRUNCATE значительно быстрее, так как не сканирует каждую строку.",
        "votes": 9,
        "against": null
      },
      {
        "text": "TRUNCATE сохраняет резервную копию удаленных данных.",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      2
    ],
    "verified": [
      2
    ],
    "explanation": "TRUNCATE удаляет содержимое без построчного сканирования, поэтому обычно быстрее DELETE без условия на больших таблицах.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: sql-truncate",
        "url": "https://www.postgresql.org/docs/current/sql-truncate.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "TRUNCATE обходит построчное сканирование. Не выполняет выборочное удаление/архивирование и не вызывает ON DELETE-триггеры."
    }
  },
  {
    "id": 40,
    "type": "multi",
    "question": "Чем материализованные представления отличаются от обычных?",
    "options": [
      {
        "text": "Они всегда содержат данные в реальном времени без задержек.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Для актуализации данных их необходимо периодически обновлять.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "Они не могут использоваться в сложных запросах с JOIN.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Они физически хранят результаты запроса.",
        "votes": 3,
        "against": 0
      }
    ],
    "answer": [
      1,
      3
    ],
    "verified": [
      1,
      3
    ],
    "explanation": "Материализованное представление хранит результат физически. Чтобы отразить изменения источника, нужно выполнить REFRESH.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: rules-materializedviews",
        "url": "https://www.postgresql.org/docs/current/rules-materializedviews.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Материализованный результат хранится физически и требует REFRESH для обновления; JOIN допустим, актуальность без обновления не гарантирована."
    }
  },
  {
    "id": 41,
    "question": "Сопоставьте объекты с их ролью в базе данных.",
    "options": [],
    "explanation": "Схемы с правами разграничивают доступ; ограничения поддерживают целостность; индексы ускоряют поиск.",
    "warning": "Хранимая процедура сама по себе не гарантирует ускорения: результат зависит от реализации.",
    "sources": [
      {
        "title": "Документация PostgreSQL: ddl-schemas",
        "url": "https://www.postgresql.org/docs/current/ddl-schemas.html"
      },
      {
        "title": "Документация PostgreSQL: ddl-constraints",
        "url": "https://www.postgresql.org/docs/current/ddl-constraints.html"
      },
      {
        "title": "Документация PostgreSQL: indexes",
        "url": "https://www.postgresql.org/docs/current/indexes.html"
      }
    ],
    "type": "match",
    "answer": [],
    "verified": [],
    "pairs": [
      {
        "left": "Схемы и разрешения",
        "right": "Управляют доступом к данным и обеспечивают безопасность",
        "votes": 2
      },
      {
        "left": "Ограничения и триггеры",
        "right": "Помогают поддерживать целостность данных",
        "votes": 2
      },
      {
        "left": "Индексы и хранимые процедуры",
        "right": "Ускоряют выполнение запросов и операций",
        "votes": 2
      }
    ],
    "choices": [
      "Помогают поддерживать целостность данных",
      "Управляют доступом к данным и обеспечивают безопасность",
      "Ускоряют выполнение запросов и операций"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Сопоставления верны как роли объектов; ускорение не является гарантией."
    }
  },
  {
    "id": 42,
    "question": "Какой тип условия в предложении WHERE проверяет, отвечает ли строковое значение заданному шаблону?",
    "options": [
      {
        "text": "Сравнение",
        "votes": 0,
        "against": null
      },
      {
        "text": "Принадлежность множеству",
        "votes": 0,
        "against": null
      },
      {
        "text": "Соответствие шаблону",
        "votes": 11,
        "against": null
      },
      {
        "text": "Проверка на NULL",
        "votes": 0,
        "against": null
      }
    ],
    "explanation": "LIKE и другие операции сопоставления проверяют строку по шаблону.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-matching",
        "url": "https://www.postgresql.org/docs/current/functions-matching.html"
      }
    ],
    "type": "single",
    "answer": [
      2
    ],
    "verified": [
      2
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Шаблон отличает LIKE от сравнения, IN и IS NULL."
    }
  },
  {
    "id": 43,
    "question": "Каково назначение операторов INSERT и MERGE?",
    "options": [
      {
        "text": "INSERT объединяет результаты разных запросов.",
        "votes": 0,
        "against": 4
      },
      {
        "text": "MERGE выполняет различные операции модификации в зависимости от условия.",
        "votes": 3,
        "against": 1
      },
      {
        "text": "MERGE используется для удаления таблиц.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "INSERT добавляет новые записи в таблицу.",
        "votes": 3,
        "against": 1
      }
    ],
    "explanation": "INSERT добавляет строки. MERGE выбирает изменение по условиям сопоставления.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: sql-insert",
        "url": "https://www.postgresql.org/docs/current/sql-insert.html"
      },
      {
        "title": "Документация PostgreSQL: sql-merge",
        "url": "https://www.postgresql.org/docs/current/sql-merge.html"
      }
    ],
    "type": "multi",
    "answer": [
      1,
      3
    ],
    "verified": [
      1,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "MERGE модифицирует строки; INSERT добавляет их. Удаление таблиц выполняет DROP."
    }
  },
  {
    "id": 44,
    "question": "Сопоставьте преимущество хранимых процедур с его причиной.",
    "options": [],
    "explanation": "Повторный вызов позволяет переиспользовать код, а выполнение на сервере сокращает обмен с клиентом.",
    "warning": "Для PL/pgSQL неверно, что процедуры компилируются один раз при создании: разбор и подготовка планов выполняются при использовании, планы могут перестраиваться. Проверенное сопоставление уточнено.",
    "sources": [
      {
        "title": "Документация PostgreSQL: plpgsql-implementation",
        "url": "https://www.postgresql.org/docs/current/plpgsql-implementation.html"
      }
    ],
    "type": "match",
    "answer": [],
    "verified": [],
    "pairs": [
      {
        "left": "Переиспользование кода",
        "right": "Одну созданную процедуру можно вызывать многократно",
        "votes": 4
      },
      {
        "left": "Ускорение выполнения",
        "right": "Процедуры компилируются один раз при создании",
        "votes": 4
      },
      {
        "left": "Снижение задержек",
        "right": "Хранятся и выполняются непосредственно на стороне базы данных",
        "votes": 4
      }
    ],
    "choices": [
      "Процедуры компилируются один раз при создании",
      "Одну созданную процедуру можно вызывать многократно",
      "Хранятся и выполняются непосредственно на стороне базы данных"
    ],
    "verifiedPairs": [
      {
        "left": "Переиспользование кода",
        "right": "Одну созданную процедуру можно вызывать многократно"
      },
      {
        "left": "Ускорение выполнения",
        "right": "Подготовка и повторное использование планов при выполнении"
      },
      {
        "left": "Снижение задержек",
        "right": "Хранятся и выполняются непосредственно на стороне базы данных"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Уточнённые verifiedPairs верны; исходное объяснение компиляции при создании ошибочно."
    }
  },
  {
    "id": 45,
    "question": "Какие утверждения о функциях и процедурах в PostgreSQL верны?",
    "options": [
      {
        "text": "Функции всегда выполняются медленнее процедур.",
        "votes": 0,
        "against": 8
      },
      {
        "text": "Процедуры вызываются командой CALL, а функции могут использоваться в SELECT запросах.",
        "votes": 8,
        "against": 0
      },
      {
        "text": "Процедура при допустимом вызове CALL может выполнить COMMIT или ROLLBACK, а функция не может.",
        "votes": null,
        "against": null
      },
      {
        "text": "Функции обязаны возвращать значение, тогда как процедуры могут не возвращать ничего.",
        "votes": 8,
        "against": 0
      }
    ],
    "explanation": "Процедуру вызывают через CALL, а функцию можно использовать в запросе. Процедура может завершить транзакцию при допустимом вызове, например через CALL вне явного блока транзакции. У функций PostgreSQL бывает тип результата void.",
    "warning": "Формулировка и варианты уточнены после сверки с документацией PostgreSQL.",
    "sources": [
      {
        "title": "PostgreSQL: xproc",
        "url": "https://www.postgresql.org/docs/current/xproc.html"
      },
      {
        "title": "PostgreSQL: datatype-pseudo",
        "url": "https://www.postgresql.org/docs/current/datatype-pseudo.html"
      },
      {
        "title": "PostgreSQL: xfunc-sql",
        "url": "https://www.postgresql.org/docs/current/xfunc-sql.html"
      }
    ],
    "type": "multi",
    "answer": [],
    "verified": [
      1,
      2
    ],
    "audit": {
      "date": "2026-11-14",
      "verdict": "corrected",
      "reason": "Процедуру вызывают через CALL, а функцию можно использовать в запросе. Процедура может завершить транзакцию при допустимом вызове, например через CALL вне явного блока транзакции. У функций PostgreSQL бывает тип результата void."
    },
    "original": {
      "question": "Каковы ключевые различия между функциями и хранимыми процедурами?",
      "options": [
        {
          "text": "Функции всегда выполняются медленнее процедур.",
          "votes": 0,
          "against": 8
        },
        {
          "text": "Процедуры вызываются командой CALL, а функции могут использоваться в SELECT запросах.",
          "votes": 8,
          "against": 0
        },
        {
          "text": "Процедуры могут содержать любые операторы SQL, включая DML, что часто ограничено в функциях.",
          "votes": 7,
          "against": 1
        },
        {
          "text": "Функции обязаны возвращать значение, тогда как процедуры могут не возвращать ничего.",
          "votes": 8,
          "against": 0
        }
      ],
      "answer": [
        1,
        2,
        3
      ]
    }
  },
  {
    "id": 46,
    "question": "Что является конечной целью проектирования БД?",
    "options": [
      {
        "text": "Закупка аппаратного обеспечения",
        "votes": 0,
        "against": null
      },
      {
        "text": "Построение конкретной базы данных, воплощающей представление о предметной области",
        "votes": 3,
        "against": null
      },
      {
        "text": "Написание программного кода для СУБД",
        "votes": 0,
        "against": null
      },
      {
        "text": "Игнорирование требований конечных пользователей",
        "votes": 0,
        "against": null
      }
    ],
    "explanation": "Проектирование переводит требования предметной области в структуру и реализацию базы данных.",
    "warning": "",
    "sources": [
      {
        "title": "University of Cape Town: Entity-Relationship Modelling",
        "url": "https://www.cs.uct.ac.za/mit_notes/database/htmls/chp06.html"
      }
    ],
    "type": "single",
    "answer": [
      1
    ],
    "verified": [
      1
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Результат проектирования — реализуемая база предметной области, не закупка или код самой СУБД."
    }
  },
  {
    "id": 47,
    "question": "Какие из перечисленных функций относятся к агрегатным оконным функциям?",
    "options": [
      {
        "text": "SUM",
        "votes": 2,
        "against": 0
      },
      {
        "text": "RANK",
        "votes": 0,
        "against": 2
      },
      {
        "text": "CREATE",
        "votes": 0,
        "against": 2
      },
      {
        "text": "COUNT",
        "votes": 2,
        "against": 0
      }
    ],
    "explanation": "SUM и COUNT являются агрегатами и становятся оконными с OVER; RANK относится к ранжированию.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-window",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      }
    ],
    "type": "multi",
    "answer": [
      0,
      3
    ],
    "verified": [
      0,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "SUM/COUNT агрегатны, RANK ранжирует, CREATE не функция."
    }
  },
  {
    "id": 48,
    "question": "Какие утверждения о коррелированном подзапросе верны?",
    "options": [
      {
        "text": "Он всегда возвращает скалярное значение.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Он является частным случаем обычного подзапроса.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Он позволяет решать сложные задачи, где требуется зависимость от каждой строки.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Он может замедлить выполнение запроса из-за многократного выполнения.",
        "votes": 2,
        "against": 0
      }
    ],
    "explanation": "Коррелированный подзапрос использует значения внешней строки и может потребовать повторных вычислений.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-subquery",
        "url": "https://www.postgresql.org/docs/current/functions-subquery.html"
      }
    ],
    "type": "multi",
    "answer": [
      1,
      2,
      3
    ],
    "verified": [
      1,
      2,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Все три положительные характеристики допустимы; скалярность не обязательна."
    }
  },
  {
    "id": 49,
    "question": "Выберите верные утверждения о ключевых словах ANY и ALL.",
    "options": [
      {
        "text": "ANY и SOME являются антонимами.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Условие с ANY считается выполненным, если оно верно хотя бы для одного значения из подзапроса.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Условие с ALL считается выполненным, если оно верно для всех значений из подзапроса.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "ALL и ANY можно использовать только с оператором =.",
        "votes": 0,
        "against": 2
      }
    ],
    "explanation": "ANY достаточно одного истинного сравнения; ALL требует истинности всех. SOME — синоним ANY.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-subquery",
        "url": "https://www.postgresql.org/docs/current/functions-subquery.html"
      }
    ],
    "type": "multi",
    "answer": [
      1,
      2
    ],
    "verified": [
      1,
      2
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "ANY/SOME синонимы; разрешены разные булевы операторы сравнения."
    }
  },
  {
    "id": 50,
    "question": "Какие элементы могут быть указаны в предложении OVER?",
    "options": [
      {
        "text": "Спецификация разделения PARTITION BY.",
        "votes": 4,
        "against": 0
      },
      {
        "text": "Спецификация сортировки ORDER BY.",
        "votes": 4,
        "against": 0
      },
      {
        "text": "Условие фильтрации WHERE.",
        "votes": 0,
        "against": 4
      },
      {
        "text": "Определение границ окна ROWS или RANGE.",
        "votes": 4,
        "against": 0
      }
    ],
    "explanation": "OVER допускает разделение, сортировку и рамку окна; WHERE не является его частью.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: sql-expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "type": "multi",
    "answer": [
      0,
      1,
      3
    ],
    "verified": [
      0,
      1,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "WHERE вне OVER; остальные три элемента предусмотрены грамматикой."
    }
  },
  {
    "id": 51,
    "question": "Сопоставьте способ кадрирования с его описанием.",
    "options": [],
    "explanation": "ROWS считает строки, GROUPS — группы равных ключей сортировки, RANGE — диапазон значений.",
    "warning": "GROUPS не ограничен только текущей группой: рамка может охватывать несколько групп.",
    "sources": [
      {
        "title": "Документация PostgreSQL: sql-expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "type": "match",
    "answer": [],
    "verified": [],
    "pairs": [
      {
        "left": "RANGE",
        "right": "Включает значения в определенном диапазоне.",
        "votes": 1
      },
      {
        "left": "GROUPS",
        "right": "Включает строки с одинаковым значением столбца.",
        "votes": 1
      },
      {
        "left": "ROWS",
        "right": "Задает фреймы по физическим строкам.",
        "votes": 1
      }
    ],
    "choices": [
      "Задает фреймы по физическим строкам.",
      "Включает строки с одинаковым значением столбца.",
      "Включает значения в определенном диапазоне."
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Соответствия корректны; GROUPS считает группы равных ключей, не одну фиксированную группу."
    }
  },
  {
    "id": 52,
    "question": "Что означают UNBOUNDED PRECEDING и UNBOUNDED FOLLOWING?",
    "options": [
      {
        "text": "UNBOUNDED FOLLOWING - от текущей строки до конца окна.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "UNBOUNDED PRECEDING - вся таблица до текущей строки.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "UNBOUNDED PRECEDING - от начала окна до текущей строки.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "UNBOUNDED FOLLOWING - бесконечное количество следующих строк.",
        "votes": 0,
        "against": 2
      }
    ],
    "explanation": "UNBOUNDED PRECEDING обозначает первую строку раздела, UNBOUNDED FOLLOWING — последнюю.",
    "warning": "Ответы теста описывают рамки в сочетании с CURRENT ROW. Сами ключевые слова задают одну границу, а не диапазон до текущей строки.",
    "sources": [
      {
        "title": "Документация PostgreSQL: sql-expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "type": "multi",
    "answer": [
      0,
      2
    ],
    "verified": [
      0,
      2
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Сохранены учебные описания типичных кадров; отдельный keyword задаёт только край."
    }
  },
  {
    "id": 53,
    "question": "Сопоставьте тип цикла с его характеристикой.",
    "options": [],
    "explanation": "LOOP требует выхода; WHILE проверяет условие; FOR перебирает диапазон или результат запроса.",
    "warning": "В PL/pgSQL для элементов массива применяется FOREACH; слово «коллекция» в варианте дано обобщённо.",
    "sources": [
      {
        "title": "Документация PostgreSQL: plpgsql-control-structures",
        "url": "https://www.postgresql.org/docs/current/plpgsql-control-structures.html"
      }
    ],
    "type": "match",
    "answer": [],
    "verified": [],
    "pairs": [
      {
        "left": "LOOP",
        "right": "Продолжается до прерывания операторами EXIT или RETURN",
        "votes": 1
      },
      {
        "left": "FOR",
        "right": "Перебирает значения в диапазоне или коллекции",
        "votes": 1
      },
      {
        "left": "WHILE",
        "right": "Выполняет блок кода, пока условие истинно",
        "votes": 1
      }
    ],
    "choices": [
      "Выполняет блок кода, пока условие истинно",
      "Продолжается до прерывания операторами EXIT или RETURN",
      "Перебирает значения в диапазоне или коллекции"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Все соответствия верны; «коллекция» — обобщённый термин."
    }
  },
  {
    "id": 54,
    "question": "Какие результаты вернут функции SUBSTRING из примера SUBSTRING('hello world' ...)?",
    "options": [
      {
        "text": "FROM 1 вернет 'h'.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "FROM 7 вернет 'world'.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "FROM 1 FOR 5 вернет 'hello'.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "FROM -5 вернет 'world'.",
        "votes": 1,
        "against": 2
      }
    ],
    "explanation": "SUBSTRING начинает отсчёт с 1. FROM 7 даёт 'world', FROM 1 FOR 5 — 'hello'.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-string",
        "url": "https://www.postgresql.org/docs/current/functions-string.html"
      }
    ],
    "type": "multi",
    "answer": [
      1,
      2
    ],
    "verified": [
      1,
      2
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Оба выделенных результата верны. FROM 1 без FOR не ограничивает результат одним символом; отрицательный FROM не считает от конца."
    }
  },
  {
    "id": 55,
    "question": "Какие операторы предназначены для изменения состояния данных в таблице?",
    "options": [
      {
        "text": "CREATE",
        "votes": 0,
        "against": 8
      },
      {
        "text": "UPDATE",
        "votes": 6,
        "against": 2
      },
      {
        "text": "SELECT",
        "votes": 0,
        "against": 8
      },
      {
        "text": "DELETE",
        "votes": 6,
        "against": 2
      }
    ],
    "explanation": "UPDATE изменяет значения строк, DELETE удаляет строки. SELECT читает данные, CREATE создаёт объекты.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: dml",
        "url": "https://www.postgresql.org/docs/current/dml.html"
      }
    ],
    "type": "multi",
    "answer": [
      1,
      3
    ],
    "verified": [
      1,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "UPDATE/DELETE меняют данные; SELECT читает, CREATE создаёт объекты."
    }
  },
  {
    "id": 56,
    "question": "Выберите верные описания аналитических функций.",
    "options": [
      {
        "text": "PERCENT_RANK вычисляет относительный ранг строки в окне.",
        "votes": 1,
        "against": 1
      },
      {
        "text": "CUME_DIST вычисляет кумулятивное распределение значений в окне.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "CUME_DIST вычисляет расстояние между значениями в окне.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Они возвращают информацию о распределении данных.",
        "votes": 2,
        "against": 0
      }
    ],
    "explanation": "PERCENT_RANK — относительный ранг, CUME_DIST — накопленная доля строк.",
    "warning": "По PERCENT_RANK голоса разделились 1:1. Документация подтверждает этот вариант; он включён в проверенный ответ.",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-window",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      }
    ],
    "type": "multi",
    "answer": [
      0,
      1,
      3
    ],
    "verified": [
      0,
      1,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Относительный ранг и накопленное распределение подтверждены; расстояние — нет."
    }
  },
  {
    "id": 57,
    "question": "Каковы ключевые характеристики представлений (VIEW)?",
    "options": [
      {
        "text": "Они не занимают дисковой памяти для хранения данных.",
        "votes": 4,
        "against": 1
      },
      {
        "text": "Содержимое выбирается из других таблиц с помощью запроса.",
        "votes": 4,
        "against": 1
      },
      {
        "text": "Данные в представлениях обновляются с задержкой.",
        "votes": 0,
        "against": 5
      },
      {
        "text": "Информация в них формируется динамически при обращении.",
        "votes": 4,
        "against": 1
      }
    ],
    "explanation": "Обычное VIEW хранит определение запроса, а результат вычисляет при обращении.",
    "warning": "Отсутствие хранения относится к данным результата; определение VIEW занимает место в системном каталоге.",
    "sources": [
      {
        "title": "Документация PostgreSQL: sql-createview",
        "url": "https://www.postgresql.org/docs/current/sql-createview.html"
      }
    ],
    "type": "multi",
    "answer": [
      0,
      1,
      3
    ],
    "verified": [
      0,
      1,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Обычное VIEW вычисляет результат при обращении и не хранит его копию."
    }
  },
  {
    "id": 58,
    "question": "В каком случае сущность определяется как слабая?",
    "options": [
      {
        "text": "Она не имеет никаких атрибутов вообще",
        "votes": 0,
        "against": null
      },
      {
        "text": "Она состоит из множества простых объектов",
        "votes": 0,
        "against": null
      },
      {
        "text": "Она удаляется из БД автоматически каждую минуту",
        "votes": 0,
        "against": null
      },
      {
        "text": "Ее существование зависит от другой сильной сущности",
        "votes": 3,
        "against": null
      }
    ],
    "explanation": "Слабая сущность зависит от сущности-владельца для идентификации и существования.",
    "warning": "Зависимость существования — ожидаемый ответ из предложенных. В строгом ER-определении существенна также идентификационная зависимость: собственного полного ключа недостаточно.",
    "sources": [
      {
        "title": "University of Cape Town: Weak and strong entities",
        "url": "https://www.cs.uct.ac.za/mit_notes/database/htmls/chp06.html"
      },
      {
        "title": "Database Design: Entity Relationship Model",
        "url": "https://opentextbc.ca/dbdesign01/chapter/chapter-8-entity-relationship-model/"
      }
    ],
    "type": "single",
    "answer": [
      3
    ],
    "verified": [
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Из четырёх вариантов зависимость от владельца описывает слабую сущность."
    }
  },
  {
    "id": 59,
    "question": "Какие аргументы может принимать функция LAG?",
    "options": [
      {
        "text": "Столбец, значение которого необходимо вернуть.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "Количество строк для смещения.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "Имя таблицы для смещения.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Условие WHERE для фильтрации смещаемых строк.",
        "votes": 0,
        "against": 3
      }
    ],
    "explanation": "LAG принимает выражение значения, смещение и необязательное значение по умолчанию.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-window",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      }
    ],
    "type": "multi",
    "answer": [
      0,
      1
    ],
    "verified": [
      0,
      1
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "LAG допускает значение и смещение; таблица и WHERE не параметры."
    }
  },
  {
    "id": 60,
    "question": "Какие два вида выражений CASE существуют?",
    "options": [
      {
        "text": "Простое выражение CASE, сравнивающее одно выражение с набором значений.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Вложенное выражение CASE, которое всегда содержит другое CASE.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Рекурсивное выражение CASE, ссылающееся само на себя.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Поисковое выражение CASE, вычисляющее набор логических выражений.",
        "votes": 2,
        "against": 0
      }
    ],
    "explanation": "Простой CASE сравнивает выражение со значениями, поисковый CASE проверяет условия WHEN.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-conditional",
        "url": "https://www.postgresql.org/docs/current/functions-conditional.html"
      }
    ],
    "type": "multi",
    "answer": [
      0,
      3
    ],
    "verified": [
      0,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Формы CASE — простая и поисковая; вложенность не третья форма."
    }
  },
  {
    "id": 61,
    "question": "Сопоставьте аналитическую функцию с её назначением.",
    "options": [],
    "explanation": "PERCENT_RANK даёт ранг, CUME_DIST — накопленную долю, PERCENTILE_CONT — интерполированный процентиль.",
    "warning": "В PostgreSQL PERCENTILE_CONT — ordered-set агрегат, не обычная оконная функция с OVER.",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-window",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      },
      {
        "title": "Документация PostgreSQL: functions-aggregate",
        "url": "https://www.postgresql.org/docs/current/functions-aggregate.html"
      }
    ],
    "type": "match",
    "answer": [],
    "verified": [],
    "pairs": [
      {
        "left": "PERCENT_RANK",
        "right": "Вычисляет относительный ранг строки.",
        "votes": 3
      },
      {
        "left": "PERCENTILE_CONT",
        "right": "Вычисляет процентиль (непрерывное распределение).",
        "votes": 3
      },
      {
        "left": "CUME_DIST",
        "right": "Вычисляет кумулятивное распределение.",
        "votes": 3
      }
    ],
    "choices": [
      "Вычисляет процентиль (непрерывное распределение).",
      "Вычисляет относительный ранг строки.",
      "Вычисляет кумулятивное распределение."
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Все соответствия верны; PERCENTILE_CONT — ordered-set aggregate."
    }
  },
  {
    "id": 62,
    "question": "Что отличает коррелированный подзапрос от обычного?",
    "options": [
      {
        "text": "Он выполняется один раз для всего внешнего запроса.",
        "votes": 0,
        "against": 5
      },
      {
        "text": "Он выполняется для каждой строки основного запроса.",
        "votes": 5,
        "against": 0
      },
      {
        "text": "Он не может содержать оператор JOIN.",
        "votes": 0,
        "against": 5
      },
      {
        "text": "Он может обращаться к данным из внешнего запроса.",
        "votes": 5,
        "against": 0
      }
    ],
    "explanation": "Корреляция означает ссылку на внешнюю строку; результат логически вычисляется в её контексте.",
    "warning": "Физически оптимизатор может преобразовать запрос: буквальное повторное выполнение для каждой строки не гарантировано.",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-subquery",
        "url": "https://www.postgresql.org/docs/current/functions-subquery.html"
      }
    ],
    "type": "multi",
    "answer": [
      1,
      3
    ],
    "verified": [
      1,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Сохранена логическая семантика корреляции; физическая декорреляция не делает учебную модель ложной."
    }
  },
  {
    "id": 63,
    "question": "Какие утверждения о ранжирующих функциях верны?",
    "options": [
      {
        "text": "ROW_NUMBER() может вернуть одинаковые номера для разных строк в одной партиции.",
        "votes": 2,
        "against": 1
      },
      {
        "text": "DENSE_RANK() присваивает ранги последовательно, без пропусков.",
        "votes": 1,
        "against": 2
      },
      {
        "text": "Ранжирующие функции ранжируют значение для каждой строки в окне.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "В разделе OVER для ранжирующих функций обязательно использование ORDER BY.",
        "votes": 3,
        "against": 0
      }
    ],
    "explanation": "ROW_NUMBER уникален внутри раздела; DENSE_RANK нумерует группы без пропусков.",
    "warning": "Большинство ошиблось. В PostgreSQL ORDER BY внутри OVER не обязателен синтаксически; без него порядок не определён.",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-window",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      },
      {
        "title": "Документация PostgreSQL: sql-expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "type": "multi",
    "answer": [
      0,
      2,
      3
    ],
    "verified": [
      1,
      2
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Уникальность ROW_NUMBER, отсутствие пропусков DENSE_RANK и необязательный ORDER BY подтверждены."
    }
  },
  {
    "id": 64,
    "question": "Выберите функции, относящиеся к «функциям смещения».",
    "options": [
      {
        "text": "SUM",
        "votes": 0,
        "against": 2
      },
      {
        "text": "FIRST_VALUE",
        "votes": 0,
        "against": 2
      },
      {
        "text": "LEAD",
        "votes": 2,
        "against": 0
      },
      {
        "text": "LAG",
        "votes": 2,
        "against": 0
      }
    ],
    "explanation": "К функциям смещения в широкой учебной классификации относят FIRST_VALUE, LEAD и LAG. SUM — агрегат.",
    "warning": "Термин не унифицирован: в узком смысле относительное смещение задают только LEAD/LAG. Здесь принят широкий смысл, согласованный с остальными заданиями этого теста.",
    "sources": [
      {
        "title": "Itzik Ben-Gan / Microsoft Press: SQL Windowing",
        "url": "https://www.microsoftpressstore.com/articles/article.aspx?p=2992602&seqNum=2"
      },
      {
        "title": "PostgreSQL: functions-window",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      }
    ],
    "type": "multi",
    "answer": [
      2,
      3
    ],
    "verified": [
      1,
      2,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "corrected",
      "reason": "Широкая классификация offset включает FIRST_VALUE; прежнее исключение было излишне узким."
    }
  },
  {
    "id": 65,
    "question": "В чем суть восходящего подхода при проектировании?",
    "options": [
      {
        "text": "Разработка процедур безопасности",
        "votes": 0,
        "against": null
      },
      {
        "text": "Проектирование от интерфейса пользователя к кабелям питания",
        "votes": 0,
        "against": null
      },
      {
        "text": "Работа начинается с самого нижнего уровня атрибутов, группируемых в отношения",
        "votes": 4,
        "against": null
      },
      {
        "text": "Приоритетная разработка концептуальной модели",
        "votes": 1,
        "against": null
      }
    ],
    "explanation": "Восходящее проектирование начинается с атрибутов, из которых формируют отношения.",
    "warning": "",
    "sources": [
      {
        "title": "National Open University of Nigeria: Database Design and Management, §3.5",
        "url": "https://nou.edu.ng/coursewarecontent/LIS%20318.pdf"
      }
    ],
    "type": "single",
    "answer": [
      2
    ],
    "verified": [
      2
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Восходящий подход начинает с атрибутов и группирует их."
    }
  },
  {
    "id": 66,
    "question": "Как ведут себя ANY и ALL, если подзапрос возвращает пустое множество?",
    "options": [
      {
        "text": "Для ALL будет сгенерирована ошибка.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Для ALL условие сравнения будет считаться выполненным.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "Обе конструкции вернут NULL.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Для ANY условие сравнения будет считаться невыполненным.",
        "votes": 3,
        "against": 0
      }
    ],
    "explanation": "На пустом результате ANY возвращает false, ALL — true.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-subquery",
        "url": "https://www.postgresql.org/docs/current/functions-subquery.html"
      }
    ],
    "type": "multi",
    "answer": [
      1,
      3
    ],
    "verified": [
      1,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Пустой подзапрос даёт ALL=true, ANY=false; не NULL/ошибку."
    }
  },
  {
    "id": 67,
    "question": "Что может произойти без условия остановки в рекурсивном CTE или при рекурсивном вызове функции в PostgreSQL?",
    "options": [
      {
        "text": "База данных автоматически остановит запрос после 10 итераций.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Запрос может продолжаться до достижения предела стека, что приведет к ошибке stack overflow.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Запрос может выполняться бесконечно, если условие выхода никогда не будет достигнуто.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Производительность запроса экспоненциально возрастет.",
        "votes": 0,
        "against": 2
      }
    ],
    "explanation": "Рекурсивный CTE вычисляется итеративно и может не завершиться. Рекурсивные вызовы функций расходуют стек и могут привести к ошибке превышения глубины стека.",
    "warning": "Формулировка уточнена после сверки с документацией PostgreSQL.",
    "sources": [
      {
        "title": "PostgreSQL: queries-with",
        "url": "https://www.postgresql.org/docs/current/queries-with.html"
      },
      {
        "title": "PostgreSQL: runtime-config-resource",
        "url": "https://www.postgresql.org/docs/current/runtime-config-resource.html"
      }
    ],
    "type": "multi",
    "answer": [
      1,
      2
    ],
    "verified": [
      1,
      2
    ],
    "audit": {
      "date": "2026-11-14",
      "verdict": "corrected",
      "reason": "Рекурсивный CTE вычисляется итеративно и может не завершиться. Рекурсивные вызовы функций расходуют стек и могут привести к ошибке превышения глубины стека."
    },
    "original": {
      "question": "Что может произойти, если глубина рекурсии не ограничена?",
      "options": [
        {
          "text": "База данных автоматически остановит запрос после 10 итераций.",
          "votes": 0,
          "against": 2
        },
        {
          "text": "Запрос может продолжаться до достижения предела стека, что приведет к ошибке stack overflow.",
          "votes": 2,
          "against": 0
        },
        {
          "text": "Запрос может выполняться бесконечно, если условие выхода никогда не будет достигнуто.",
          "votes": 2,
          "against": 0
        },
        {
          "text": "Производительность запроса экспоненциально возрастет.",
          "votes": 0,
          "against": 2
        }
      ],
      "answer": [
        1,
        2
      ]
    }
  },
  {
    "id": 68,
    "question": "Какие из утверждений описывают способы кадрирования?",
    "options": [
      {
        "text": "PARTITIONS используется для определения границ окна вместо ROWS или RANGE.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "ROWS задает фреймы по строкам и включает в себя определенное количество строк.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "RANGE включает в себя значения в определенном диапазоне значений столбца сортировки от текущей строки.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "GROUPS включает в себя все строки с одинаковым значением столбца сортировки.",
        "votes": 3,
        "against": 0
      }
    ],
    "explanation": "ROWS использует строки, RANGE — значения сортировки, GROUPS — группы равных ключей.",
    "warning": "GROUPS измеряет смещения группами и может включать несколько групп, а не только одну.",
    "sources": [
      {
        "title": "Документация PostgreSQL: sql-expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "type": "multi",
    "answer": [
      1,
      2,
      3
    ],
    "verified": [
      1,
      2,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Все три единицы кадрирования верны; PARTITIONS не предусмотрен."
    }
  },
  {
    "id": 69,
    "question": "Сопоставьте строковую функцию с ее назначением.",
    "options": [],
    "explanation": "CONCAT соединяет строки, LENGTH считает символы, LOWER переводит текст в нижний регистр.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-string",
        "url": "https://www.postgresql.org/docs/current/functions-string.html"
      }
    ],
    "type": "match",
    "answer": [],
    "verified": [],
    "pairs": [
      {
        "left": "CONCAT",
        "right": "Объединение строк",
        "votes": 1
      },
      {
        "left": "LENGTH",
        "right": "Определение длины строки",
        "votes": 1
      },
      {
        "left": "LOWER",
        "right": "Преобразование регистра",
        "votes": 1
      }
    ],
    "choices": [
      "Определение длины строки",
      "Объединение строк",
      "Преобразование регистра"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Все соответствия подтверждены назначением функций."
    }
  },
  {
    "id": 70,
    "question": "Что из перечисленного сделает представление неизменяемым?",
    "options": [
      {
        "text": "Включение в список выборки вычисляемых выражений.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Отсутствие в представлении столбцов с атрибутом NOT NULL.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Наличие в FROM более чем одной таблицы.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Использование операций с множествами, таких как UNION.",
        "votes": 2,
        "against": 0
      }
    ],
    "explanation": "Несколько источников FROM и операции UNION лишают VIEW автоматической изменяемости.",
    "warning": "Вычисляемый столбец только сам доступен для чтения; остальные столбцы VIEW могут оставаться изменяемыми. INSTEAD OF-триггеры могут обеспечить изменение сложного VIEW.",
    "sources": [
      {
        "title": "Документация PostgreSQL: sql-createview",
        "url": "https://www.postgresql.org/docs/current/sql-createview.html"
      }
    ],
    "type": "multi",
    "answer": [
      0,
      2,
      3
    ],
    "verified": [
      2,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Много источников и UNION отменяют автоматическую изменяемость; вычисляемая колонка не делает весь VIEW read-only."
    }
  },
  {
    "id": 71,
    "question": "Почему в подзапросе для EXISTS часто пишут SELECT 1 или SELECT *?",
    "options": [
      {
        "text": "Потому что это единственно верный синтаксис.",
        "votes": 0,
        "against": 4
      },
      {
        "text": "Потому что SELECT 1 работает быстрее, чем SELECT *.",
        "votes": 0,
        "against": 4
      },
      {
        "text": "Потому что важен сам факт наличия или отсутствия строк, а не их содержимое.",
        "votes": 4,
        "against": 0
      },
      {
        "text": "Потому что список выходных значений подзапроса обычно не имеет значения.",
        "votes": 4,
        "against": 0
      }
    ],
    "explanation": "EXISTS проверяет наличие строк; обычный список SELECT не влияет на результат.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-subquery",
        "url": "https://www.postgresql.org/docs/current/functions-subquery.html"
      }
    ],
    "type": "multi",
    "answer": [
      2,
      3
    ],
    "verified": [
      2,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "EXISTS проверяет существование; нет общего выигрыша SELECT 1 перед SELECT *."
    }
  },
  {
    "id": 72,
    "question": "Какие параметры принимает функция TO_DATE(текст, формат_даты)?",
    "options": [
      {
        "text": "Имя столбца, куда нужно записать результат.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Строку, описывающую формат даты в исходном тексте.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Текущее системное время.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "Строковый литерал с датой.",
        "votes": 2,
        "against": 0
      }
    ],
    "explanation": "TO_DATE получает текст даты и текст шаблона её разбора.",
    "warning": "Первый аргумент может быть не только литералом, но и любым текстовым выражением.",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-formatting",
        "url": "https://www.postgresql.org/docs/current/functions-formatting.html"
      }
    ],
    "type": "multi",
    "answer": [
      1,
      3
    ],
    "verified": [
      1,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Два текстовых аргумента — значение и шаблон; ни назначения, ни системного времени."
    }
  },
  {
    "id": 73,
    "question": "Сопоставьте ключевое слово для границ окна с его значением.",
    "options": [],
    "explanation": "Границы определяют начало и конец рамки относительно текущей позиции.",
    "warning": "Текст PDF упрощён: UNBOUNDED PRECEDING — начало раздела, не самостоятельный диапазон. «М строк» верно для ROWS; GROUPS считает группы. Проверенные формулировки уточнены.",
    "sources": [
      {
        "title": "Документация PostgreSQL: sql-expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "type": "match",
    "answer": [],
    "verified": [],
    "pairs": [
      {
        "left": "M FOLLOWING",
        "right": "М строк после текущей.",
        "votes": 2
      },
      {
        "left": "UNBOUNDED PRECEDING",
        "right": "От начала окна до текущей строки.",
        "votes": 2
      },
      {
        "left": "CURRENT ROW",
        "right": "Текущая строка.",
        "votes": 2
      }
    ],
    "choices": [
      "Текущая строка.",
      "От начала окна до текущей строки.",
      "М строк после текущей."
    ],
    "verifiedPairs": [
      {
        "left": "M FOLLOWING",
        "right": "Граница на M строк после текущей в режиме ROWS."
      },
      {
        "left": "UNBOUNDED PRECEDING",
        "right": "Первая строка раздела."
      },
      {
        "left": "CURRENT ROW",
        "right": "Текущая строка (в ROWS) или граница её группы равных строк (в RANGE/GROUPS)."
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Текущие уточнённые verifiedPairs соответствуют грамматике кадров."
    }
  },
  {
    "id": 74,
    "question": "Какие функции возвращают текущие дату и/или время?",
    "options": [
      {
        "text": "CURRENT_TIMESTAMP",
        "votes": 3,
        "against": 0
      },
      {
        "text": "CURRENT_DATE",
        "votes": 3,
        "against": 0
      },
      {
        "text": "NOW()",
        "votes": 3,
        "against": 0
      },
      {
        "text": "GETDATE()",
        "votes": 1,
        "against": 2
      }
    ],
    "explanation": "В PostgreSQL CURRENT_TIMESTAMP, CURRENT_DATE и NOW() возвращают текущие дату/время относительно начала транзакции.",
    "warning": "GETDATE() используется в других СУБД, например SQL Server, но не является встроенной функцией PostgreSQL.",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-datetime",
        "url": "https://www.postgresql.org/docs/current/functions-datetime.html"
      }
    ],
    "type": "multi",
    "answer": [
      0,
      1,
      2
    ],
    "verified": [
      0,
      1,
      2
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Три встроенных средства PostgreSQL подтверждены; GETDATE — другой диалект."
    }
  },
  {
    "id": 75,
    "question": "Какое действие невозможно выполнить после TRUNCATE, в отличие от DELETE?",
    "options": [
      {
        "text": "Добавить новые данные в таблицу.",
        "votes": 0,
        "against": null
      },
      {
        "text": "Удалить саму таблицу.",
        "votes": 0,
        "against": null
      },
      {
        "text": "Восстановить данные с помощью команды ROLLBACK.",
        "votes": 8,
        "against": null
      },
      {
        "text": "Изменить структуру таблицы.",
        "votes": 0,
        "against": null
      }
    ],
    "explanation": "В PostgreSQL TRUNCATE откатывается вместе с окружающей незавершённой транзакцией.",
    "warning": "В PDF популярный ответ ошибочен для PostgreSQL. Ни один из четырёх вариантов не является невозможным действием после TRUNCATE.",
    "sources": [
      {
        "title": "Документация PostgreSQL: sql-truncate",
        "url": "https://www.postgresql.org/docs/current/sql-truncate.html"
      }
    ],
    "type": "single",
    "answer": [
      2
    ],
    "verified": [],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "TRUNCATE transaction-safe. Остальные действия тоже доступны; корректного варианта в исходном наборе нет."
    }
  },
  {
    "id": 76,
    "question": "Что такое метаданные?",
    "options": [
      {
        "text": "Ключевые бизнес-объекты",
        "votes": 0,
        "against": null
      },
      {
        "text": "Данные о данных, описывающие структуру и смысл остальных категорий",
        "votes": 1,
        "against": null
      },
      {
        "text": "Документы со строгими таблицами",
        "votes": 0,
        "against": null
      },
      {
        "text": "Полностью неструктурированная визуальная информация",
        "votes": 0,
        "against": null
      }
    ],
    "explanation": "Метаданные описывают данные: их структуру, типы, происхождение и смысл.",
    "warning": "",
    "sources": [
      {
        "title": "IBM: метаданные",
        "url": "https://www.ibm.com/think/topics/metadata"
      }
    ],
    "type": "single",
    "answer": [
      1
    ],
    "verified": [
      1
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Данные о структуре/смысле данных — метаданные; остальные определения не подходят."
    }
  },
  {
    "id": 77,
    "question": "Какие утверждения о материализованных представлениях верны?",
    "options": [
      {
        "text": "Они создаются с помощью CREATE MATERIALIZED VIEW.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Они физически хранят данные на диске.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "Они могут улучшить производительность.",
        "votes": 1,
        "against": 1
      },
      {
        "text": "Они не занимают дискового пространства.",
        "votes": 0,
        "against": 2
      }
    ],
    "explanation": "Материализованное представление сохраняет результат на диске и может ускорять чтение.",
    "warning": "По ускорению голоса разделились 1:1, но документация подтверждает возможность улучшения производительности.",
    "sources": [
      {
        "title": "Документация PostgreSQL: rules-materializedviews",
        "url": "https://www.postgresql.org/docs/current/rules-materializedviews.html"
      }
    ],
    "type": "multi",
    "answer": [
      0,
      1,
      2
    ],
    "verified": [
      0,
      1,
      2
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Хранение результата и возможное ускорение прямо подтверждены."
    }
  },
  {
    "id": 78,
    "question": "Как выполняется PIVOT с помощью CASE WHEN?",
    "options": [
      {
        "text": "Используется агрегирующая функция, например SUM или MAX.",
        "votes": 5,
        "against": 0
      },
      {
        "text": "Для каждой новой колонки пишется свой CASE WHEN.",
        "votes": 5,
        "against": 0
      },
      {
        "text": "Требуется предварительное создание представления (VIEW) для каждой категории.",
        "votes": 0,
        "against": 5
      },
      {
        "text": "В конце запроса используется GROUP BY по столбцам, которые должны остаться строками.",
        "votes": 5,
        "against": 0
      }
    ],
    "explanation": "Условная агрегация создаёт столбец на категорию через CASE; GROUP BY сохраняет группы строк.",
    "warning": "GROUP BY нужен при группировке по исходным столбцам; для единственной итоговой строки он не обязателен.",
    "sources": [
      {
        "title": "PostgreSQL: functions-conditional",
        "url": "https://www.postgresql.org/docs/current/functions-conditional.html"
      },
      {
        "title": "PostgreSQL: queries-table-expressions",
        "url": "https://www.postgresql.org/docs/current/queries-table-expressions.html"
      }
    ],
    "type": "multi",
    "answer": [
      0,
      1,
      3
    ],
    "verified": [
      0,
      1,
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "CASE плюс агрегат и группировка — правильная схема pivot; VIEW на категорию не требуется."
    }
  },
  {
    "id": 79,
    "question": "Сопоставьте вид оконной функции с примером.",
    "options": [],
    "explanation": "RANK ранжирует, SUM агрегирует, LEAD возвращает значение со смещением вперёд.",
    "warning": "",
    "sources": [
      {
        "title": "Документация PostgreSQL: functions-window",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      }
    ],
    "type": "match",
    "answer": [],
    "verified": [],
    "pairs": [
      {
        "left": "Ранжирующие",
        "right": "RANK",
        "votes": 2
      },
      {
        "left": "Агрегатные",
        "right": "SUM",
        "votes": 2
      },
      {
        "left": "Функции смещения",
        "right": "LEAD",
        "votes": 2
      }
    ],
    "choices": [
      "RANK",
      "SUM",
      "LEAD"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "RANK, SUM и LEAD соответствуют указанным категориям."
    }
  },
  {
    "id": 80,
    "question": "Кто такой администратор данных (АД)?",
    "options": [
      {
        "text": "Механизм, автоматически генерирующий данные из интернета",
        "votes": 0,
        "against": null
      },
      {
        "text": "Специалист, пишущий прикладные программы",
        "votes": 0,
        "against": null
      },
      {
        "text": "Технический специалист, отвечающий за быстродействие",
        "votes": 0,
        "against": null
      },
      {
        "text": "Управляющий, который несет основную ответственность за данные предприятия",
        "votes": 1,
        "against": null
      }
    ],
    "explanation": "Администратор данных отвечает за управление данными организации и правила их использования.",
    "warning": "Это учебное различие ролей АД и администратора БД; названия должностей в организациях могут различаться.",
    "sources": [
      {
        "title": "University of Cape Town: The role of the data administrator",
        "url": "https://www.cs.uct.ac.za/mit_notes/database/htmls/chp01.html"
      }
    ],
    "type": "single",
    "answer": [
      3
    ],
    "verified": [
      3
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "АД управляет информационным ресурсом предприятия, DBA — технической эксплуатацией базы."
    }
  },
  {
    "id": 81,
    "type": "multi",
    "question": "Чем ROWS отличается от RANGE?",
    "options": [
      {
        "text": "RANGE используется только для числовых типов данных, а ROWS - для любых.",
        "votes": 1,
        "against": 3
      },
      {
        "text": "ROWS задает фреймы, основываясь на физическом положении строк.",
        "votes": 4,
        "against": 0
      },
      {
        "text": "ROWS всегда быстрее, чем RANGE.",
        "votes": 1,
        "against": 3
      },
      {
        "text": "RANGE определяет границы окна на основе значений столбцов, упорядоченных в ORDER BY.",
        "votes": 4,
        "against": 0
      }
    ],
    "answer": [
      1,
      3
    ],
    "verified": [
      1,
      3
    ],
    "explanation": "ROWS считает строки; RANGE задаёт границы через значения сортировки и группы равных значений.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Value Expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "ROWS использует позиционные смещения строк, RANGE — значения сортировки. RANGE допускает временные типы; универсального превосходства скорости нет."
    }
  },
  {
    "id": 82,
    "type": "single",
    "question": "Какова основная характеристика инфологической модели?",
    "options": [
      {
        "text": "Использование исключительно машинного бинарного кода",
        "votes": 0,
        "against": null
      },
      {
        "text": "Представление данных в виде физических блоков",
        "votes": 0,
        "against": null
      },
      {
        "text": "Независимость от физических параметров среды хранения данных",
        "votes": 3,
        "against": null
      },
      {
        "text": "Строгая привязка к конкретной СУБД",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      2
    ],
    "verified": [
      2
    ],
    "explanation": "Инфологическая модель описывает предметную область независимо от способа физического хранения.",
    "warning": "",
    "sources": [
      {
        "title": "University of Cape Town: Database Systems",
        "url": "https://www.cs.uct.ac.za/mit_notes/database/htmls/chp01.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Концептуальное описание отделено от физического хранения и конкретной СУБД; остальные варианты описывают реализацию."
    }
  },
  {
    "id": 83,
    "type": "multi",
    "question": "С какими подзапросами могут использоваться ANY и ALL?",
    "options": [
      {
        "text": "С подзапросами, которые могут вернуть несколько строк.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "С подзапросами, возвращающими несколько столбцов.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "С подзапросами, возвращающими один столбец значений.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "С подзапросами, использующими агрегатные функции.",
        "votes": 0,
        "against": 2
      }
    ],
    "answer": [
      0,
      2
    ],
    "verified": [
      0,
      1,
      2,
      3
    ],
    "explanation": "ANY и ALL работают с подзапросами, в том числе с агрегатами. Для сравнения скаляров нужен один столбец; для сравнения строк допускается несколько.",
    "warning": "Большинство выбрало только варианты 1 и 3. В PostgreSQL варианты 2 и 4 также допустимы: документация описывает сравнение row_constructor, а агрегатные функции не запрещены.",
    "sources": [
      {
        "title": "PostgreSQL: Subquery Expressions",
        "url": "https://www.postgresql.org/docs/current/functions-subquery.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Документация явно допускает row_constructor ANY/ALL с несколькими столбцами. Агрегаты в SELECT также допустимы; все четыре возможности реальны."
    }
  },
  {
    "id": 84,
    "type": "multi",
    "question": "Чем RANK() отличается от ROW_NUMBER()?",
    "options": [
      {
        "text": "ROW_NUMBER() суммирует значения в партиции.",
        "votes": 0,
        "against": 1
      },
      {
        "text": "ROW_NUMBER() присваивает уникальный номер каждой строке независимо от значений.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "RANK() не требует ORDER BY.",
        "votes": 0,
        "against": 1
      },
      {
        "text": "RANK() присваивает одинаковый ранг строкам с одинаковыми значениями.",
        "votes": 1,
        "against": 0
      }
    ],
    "answer": [
      1,
      3
    ],
    "verified": [
      1,
      2,
      3
    ],
    "explanation": "ROW_NUMBER нумерует строки, RANK объединяет равные значения в один ранг. Без ORDER BY все строки считаются равными по сортировке.",
    "warning": "Формулировка «чем отличается» неточна: ORDER BY необязателен и для RANK, и для ROW_NUMBER. Вариант 3 принят как верное утверждение PostgreSQL, а не как отличие. Без ORDER BY RANK() OVER() возвращает 1 всем строкам. Поэтому принимаются как варианты 2 и 4 (именно различия), так и 2, 3 и 4 (все истинные утверждения).",
    "sources": [
      {
        "title": "PostgreSQL: Window Functions",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Нумерация и одинаковый ранг подтверждены. OVER() без ORDER BY допустим, однако это общая возможность обеих функций, а не их различие."
    },
    "acceptedAnswers": [
      [
        1,
        2,
        3
      ],
      [
        1,
        3
      ]
    ]
  },
  {
    "id": 85,
    "type": "multi",
    "question": "В чем сходства и различия RANK() и DENSE_RANK()?",
    "options": [
      {
        "text": "DENSE_RANK() работает без PARTITION BY, в отличие от RANK().",
        "votes": 0,
        "against": 4
      },
      {
        "text": "Обе функции присваивают одинаковый ранг строкам с одинаковыми значениями.",
        "votes": 3,
        "against": 1
      },
      {
        "text": "DENSE_RANK() не пропускает следующий числовой ранг после «ничьей», а RANK() пропускает.",
        "votes": 3,
        "against": 1
      },
      {
        "text": "RANK() используется для вычисления плотности распределения, а DENSE_RANK() - для ранжирования.",
        "votes": 0,
        "against": 4
      }
    ],
    "answer": [
      1,
      2
    ],
    "verified": [
      1,
      2
    ],
    "explanation": "Обе функции дают равным значениям одинаковый ранг. RANK оставляет пропуски после ничьих, DENSE_RANK — нет.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Window Functions",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Оба ранга объединяют peers; только RANK оставляет пропуски. PARTITION BY необязателен для обеих функций, плотность распределения здесь не вычисляется."
    }
  },
  {
    "id": 86,
    "type": "multi",
    "question": "Каковы преимущества использования СТЕ?",
    "options": [
      {
        "text": "Значительно ускоряют выполнение любого запроса.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Позволяют разбить сложные запросы на более мелкие логические части.",
        "votes": 2,
        "against": 1
      },
      {
        "text": "Заменяют необходимость использования JOIN.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Улучшают читаемость и упрощают отладку запросов.",
        "votes": 2,
        "against": 1
      }
    ],
    "answer": [
      1,
      3
    ],
    "verified": [
      1,
      3
    ],
    "explanation": "CTE выделяет именованные части запроса и облегчает чтение. Ускорение любого запроса не гарантируется.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: WITH Queries",
        "url": "https://www.postgresql.org/docs/current/queries-with.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Именованные части WITH помогают декомпозиции. Они не заменяют JOIN и не гарантируют ускорения любого запроса."
    }
  },
  {
    "id": 87,
    "type": "multi",
    "question": "Как обновить данные в материализованном представлении?",
    "options": [
      {
        "text": "Данные обновляются автоматически при изменении базовых таблиц.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "С помощью стандартной DML-команды UPDATE.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Опция CONCURRENTLY позволяет обновить представление, не блокируя выборки из него.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "С помощью команды REFRESH MATERIALIZED VIEW.",
        "votes": 3,
        "against": 0
      }
    ],
    "answer": [
      2,
      3
    ],
    "verified": [
      2,
      3
    ],
    "explanation": "REFRESH MATERIALIZED VIEW обновляет данные. CONCURRENTLY разрешает одновременный SELECT, но требует заполненного представления и подходящего UNIQUE-индекса.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: REFRESH MATERIALIZED VIEW",
        "url": "https://www.postgresql.org/docs/current/sql-refreshmaterializedview.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Обновление выполняется REFRESH; CONCURRENTLY сохраняет SELECT. Прямой UPDATE и автоматическое обновление базовым PostgreSQL не предоставляются."
    }
  },
  {
    "id": 88,
    "type": "single",
    "question": "Какому требованию должен отвечать уникальный идентификатор сущности?",
    "options": [
      {
        "text": "Он должен быть одинаковым для всех объектов",
        "votes": 0,
        "against": null
      },
      {
        "text": "Он должен однозначно отличать любой экземпляр сущности от других",
        "votes": 4,
        "against": null
      },
      {
        "text": "Он вообще не должен присутствовать у сущностей",
        "votes": 0,
        "against": null
      },
      {
        "text": "Он должен обязательно состоять из 10 символов",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      1
    ],
    "verified": [
      1
    ],
    "explanation": "Идентификатор должен однозначно отличать один экземпляр сущности от остальных.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Primary Keys",
        "url": "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-PRIMARY-KEYS"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Уникальность означает различимость экземпляров; заданная длина десять символов и одинаковые значения не требуются."
    }
  },
  {
    "id": 89,
    "type": "multi",
    "question": "Какой результат вернут следующие выражения, если операция деления по умолчанию является целочисленной?",
    "options": [
      {
        "text": "5/3 вернет 1.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "1/3 вернет 0.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "5/3 вернет 1.66.",
        "votes": 0,
        "against": 1
      },
      {
        "text": "1/3 вернет 0.33.",
        "votes": 0,
        "against": 1
      }
    ],
    "answer": [
      0,
      1
    ],
    "verified": [
      0,
      1
    ],
    "explanation": "При целочисленном делении дробная часть отбрасывается: 5/3 = 1, 1/3 = 0.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Mathematical Functions",
        "url": "https://www.postgresql.org/docs/current/functions-math.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Оператор / на целочисленных операндах отбрасывает дробную часть; оба дробных результата отвергнуты правильно."
    }
  },
  {
    "id": 90,
    "type": "multi",
    "question": "Какие запросы возвращают тот же набор строк, что и VALUES (1, 'one'), (2, 'two'), если имена столбцов не учитывать?",
    "options": [
      {
        "text": "SELECT * FROM (VALUES (1, 'one'), (2, 'two')) AS t (num, letter)",
        "votes": 1,
        "against": 1
      },
      {
        "text": "CREATE TABLE temp (num int, letter text)",
        "votes": 0,
        "against": 2
      },
      {
        "text": "SELECT 1 AS column1, 'one' AS column2 UNION ALL SELECT 2, 'two'",
        "votes": 2,
        "against": 0
      },
      {
        "text": "INSERT INTO ... VALUES (1, 'one'), (2, 'two')",
        "votes": 0,
        "against": 2
      }
    ],
    "answer": [
      2
    ],
    "verified": [
      0,
      2
    ],
    "explanation": "Оба SELECT возвращают те же две строки. В первом запросе псевдонимы меняют имена столбцов. CREATE TABLE создаёт таблицу, а INSERT добавляет в неё строки.",
    "warning": "Формулировка уточнена после сверки с документацией PostgreSQL.",
    "sources": [
      {
        "title": "PostgreSQL: VALUES Lists",
        "url": "https://www.postgresql.org/docs/current/queries-values.html"
      }
    ],
    "audit": {
      "date": "2026-11-14",
      "verdict": "corrected",
      "reason": "Оба SELECT возвращают те же две строки. В первом запросе псевдонимы меняют имена столбцов. CREATE TABLE создаёт таблицу, а INSERT добавляет в неё строки."
    },
    "original": {
      "question": "Какой запрос равносилен конструкции VALUES (1, 'one'), (2, 'two')?",
      "options": [
        {
          "text": "SELECT * FROM (VALUES (1, 'one'), (2, 'two')) AS t (num, letter)",
          "votes": 1,
          "against": 1
        },
        {
          "text": "CREATE TABLE temp (num int, letter text)",
          "votes": 0,
          "against": 2
        },
        {
          "text": "SELECT 1 AS column1, 'one' AS column2 UNION ALL SELECT 2, 'two'",
          "votes": 2,
          "against": 0
        },
        {
          "text": "INSERT INTO ... VALUES (1, 'one'), (2, 'two')",
          "votes": 0,
          "against": 2
        }
      ],
      "answer": [
        2
      ]
    }
  },
  {
    "id": 91,
    "type": "single",
    "question": "В чем заключается одна из основных проблем файлового подхода?",
    "options": [
      {
        "text": "Наличие встроенных механизмов обеспечения целостности",
        "votes": 0,
        "against": null
      },
      {
        "text": "Безупречная работа с многопользовательским доступом",
        "votes": 0,
        "against": null
      },
      {
        "text": "Жесткая зависимость приложений от структуры данных",
        "votes": 2,
        "against": null
      },
      {
        "text": "Устранение дублирования данных",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      2
    ],
    "verified": [
      2
    ],
    "explanation": "В файловом подходе приложения сами знают формат файлов; изменение структуры требует изменений программ.",
    "warning": "",
    "sources": [
      {
        "title": "University of Cape Town: Database Systems",
        "url": "https://www.cs.uct.ac.za/mit_notes/database/htmls/chp01.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Прямая зависимость программ от формата файла документирована. Остальные утверждения — желаемые свойства, а не проблемы файлового подхода."
    }
  },
  {
    "id": 92,
    "type": "single",
    "question": "Что стремится объединить класс систем NewSQL?",
    "options": [
      {
        "text": "Хранение графов и медиаконтента",
        "votes": 0,
        "against": null
      },
      {
        "text": "Бумажные картотеки с цифровыми интерфейсами",
        "votes": 0,
        "against": null
      },
      {
        "text": "Иерархическую и сетевую модели данных",
        "votes": 0,
        "against": null
      },
      {
        "text": "Горизонтальную масштабируемость NoSQL с полными ACID-гарантиями SQL-баз",
        "votes": 2,
        "against": null
      }
    ],
    "answer": [
      3
    ],
    "verified": [
      3
    ],
    "explanation": "NewSQL стремится совместить масштабирование транзакционных нагрузок с реляционной моделью и гарантиями ACID.",
    "warning": "",
    "sources": [
      {
        "title": "Pavlo, Aslett: What’s Really New with NewSQL?",
        "url": "https://www.cs.cmu.edu/~pavlo/papers/pavlo-newsql-sigmodrec2016.pdf"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Первичный обзор авторов термина определяет NewSQL через SQL/реляционность, ACID и масштабирование OLTP; остальные варианты не определяют этот класс."
    }
  },
  {
    "id": 93,
    "type": "multi",
    "question": "Какие ключевые слова используются для определения границ окна относительно текущей строки?",
    "options": [
      {
        "text": "CURRENT ROW",
        "votes": 1,
        "against": 0
      },
      {
        "text": "TOTAL PARTITION",
        "votes": 0,
        "against": 1
      },
      {
        "text": "N PRECEDING",
        "votes": 1,
        "against": 0
      },
      {
        "text": "M FOLLOWING",
        "votes": 1,
        "against": 0
      }
    ],
    "answer": [
      0,
      2,
      3
    ],
    "verified": [
      0,
      2,
      3
    ],
    "explanation": "CURRENT ROW, PRECEDING и FOLLOWING задают границы кадра. В RANGE/GROUPS CURRENT ROW учитывает группу равных значений сортировки.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Value Expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "CURRENT ROW, offset PRECEDING и offset FOLLOWING входят в грамматику frame_clause; TOTAL PARTITION не входит."
    }
  },
  {
    "id": 94,
    "type": "multi",
    "question": "Как работает коррелированный подзапрос?",
    "options": [
      {
        "text": "Внутренний и внешний запросы выполняются параллельно и независимо.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Внутренний запрос использует значения из строк внешнего запроса.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "Внешний запрос ждет выполнения внутреннего запроса для каждой своей строки.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "Внутренний запрос выполняется полностью до начала внешнего.",
        "votes": 0,
        "against": 3
      }
    ],
    "answer": [
      1,
      2
    ],
    "verified": [
      1,
      2
    ],
    "explanation": "Коррелированный подзапрос использует значения текущей строки внешнего запроса. В учебной логической модели он вычисляется для каждой такой строки; реальный план и порядок выполнения определяет оптимизатор.",
    "warning": "Вариант о выполнении для каждой строки принят как учебная логическая модель. Он не гарантирует буквальный физический порядок: оптимизатор может преобразовать запрос.",
    "sources": [
      {
        "title": "PostgreSQL: Subquery Expressions",
        "url": "https://www.postgresql.org/docs/current/functions-subquery.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Корреляция означает зависимость от внешних значений. Построчная модель допустима как учебное объяснение, а независимость или полный предварительный расчёт неверны."
    }
  },
  {
    "id": 95,
    "type": "multi",
    "question": "Какие типы (режимы) параметров могут быть у хранимых процедур?",
    "options": [
      {
        "text": "RETURN для определения типа возвращаемого значения.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "INOUT для передачи и одновременного возврата значений.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "IN для передачи значений в процедуру.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "OUT для возврата значений из процедуры.",
        "votes": 0,
        "against": 2
      }
    ],
    "answer": [],
    "verified": [
      1,
      2,
      3
    ],
    "explanation": "IN передаёт значение, OUT возвращает его, INOUT делает и то и другое. RETURN не является режимом параметра.",
    "warning": "В PDF у всех вариантов 0 голосов «за» и 2 «против»: положительного большинства нет. Правильные варианты INOUT, IN и OUT установлены по документации.",
    "sources": [
      {
        "title": "PostgreSQL: CREATE PROCEDURE",
        "url": "https://www.postgresql.org/docs/current/sql-createprocedure.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Грамматика argmode содержит IN, OUT и INOUT; RETURN не является режимом параметра. VARIADIC существует, но среди вариантов отсутствует."
    }
  },
  {
    "id": 96,
    "type": "multi",
    "question": "Выберите верные утверждения о функциях округления.",
    "options": [
      {
        "text": "FLOOR округляет число к ближайшему целому в меньшую сторону.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "CEIL округляет число к ближайшему целому в большую сторону.",
        "votes": 2,
        "against": 0
      },
      {
        "text": "ROUND всегда округляет число в большую сторону.",
        "votes": 1,
        "against": 1
      },
      {
        "text": "CEIL и FLOOR являются синонимами.",
        "votes": 0,
        "against": 2
      }
    ],
    "answer": [
      0,
      1
    ],
    "verified": [
      0,
      1
    ],
    "explanation": "FLOOR округляет вниз, CEIL вверх. ROUND выбирает ближайшее значение, а не всегда большее.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Mathematical Functions",
        "url": "https://www.postgresql.org/docs/current/functions-math.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "FLOOR и CEIL направлены соответственно вниз и вверх. ROUND не всегда идёт вверх; CEIL и FLOOR не синонимы."
    }
  },
  {
    "id": 97,
    "type": "match",
    "question": "Сопоставьте тип подзапроса с его ключевой характеристикой.",
    "options": [],
    "answer": [],
    "verified": [],
    "explanation": "Табличный подзапрос даёт набор строк, скалярный — одно значение, коррелированный использует внешний запрос.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Value Expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "pairs": [
      {
        "left": "Табличный",
        "right": "Возвращает таблицу (набор строк)",
        "votes": 2
      },
      {
        "left": "Коррелированный",
        "right": "Ссылается на столбцы внешнего запроса",
        "votes": 2
      },
      {
        "left": "Скалярный",
        "right": "Возвращает единственное значение",
        "votes": 2
      }
    ],
    "choices": [
      "Возвращает таблицу (набор строк)",
      "Ссылается на столбцы внешнего запроса",
      "Возвращает единственное значение"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Все три пары точны; скалярный подзапрос из нуля строк даёт NULL, что не меняет сопоставления."
    }
  },
  {
    "id": 98,
    "type": "multi",
    "question": "Какие утверждения о предикате EXISTS верны?",
    "options": [
      {
        "text": "Аргументом EXISTS является табличный подзапрос.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "EXISTS всегда требует указания конкретных имен столбцов в SELECT.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "NOT EXISTS принимает значение TRUE, если подзапрос не содержит строк.",
        "votes": 3,
        "against": 0
      },
      {
        "text": "Результат предиката не зависит от содержимого возвращаемых строк, а только от их наличия.",
        "votes": 3,
        "against": 0
      }
    ],
    "answer": [
      0,
      2,
      3
    ],
    "verified": [
      0,
      2,
      3
    ],
    "explanation": "EXISTS проверяет наличие строк; NOT EXISTS — их отсутствие. Выходные столбцы обычно несущественны, поэтому часто пишут SELECT 1.",
    "warning": "Содержимое строк не участвует в проверке EXISTS, но может влиять на наличие строк внутри самого подзапроса, например при INTERSECT.",
    "sources": [
      {
        "title": "PostgreSQL: Subquery Expressions",
        "url": "https://www.postgresql.org/docs/current/functions-subquery.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "EXISTS проверяет наличие строк и допускает SELECT 1. NOT EXISTS истинен на пустом результате; содержимое результата само по себе не проверяется."
    }
  },
  {
    "id": 99,
    "type": "match",
    "question": "Сопоставьте функцию для работы с датами с ее назначением.",
    "options": [],
    "answer": [],
    "verified": [],
    "explanation": "TO_DATE разбирает строку по шаблону, AGE вычисляет интервал между датами, EXTRACT извлекает компонент даты.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Date/Time Functions",
        "url": "https://www.postgresql.org/docs/current/functions-datetime.html"
      },
      {
        "title": "PostgreSQL: Formatting Functions",
        "url": "https://www.postgresql.org/docs/current/functions-formatting.html"
      }
    ],
    "pairs": [
      {
        "left": "TO_DATE",
        "right": "Конвертирует строку в дату",
        "votes": 1
      },
      {
        "left": "AGE",
        "right": "Вычисляет разницу дат",
        "votes": 1
      },
      {
        "left": "EXTRACT",
        "right": "Извлекает часть даты",
        "votes": 1
      }
    ],
    "choices": [
      "Вычисляет разницу дат",
      "Извлекает часть даты",
      "Конвертирует строку в дату"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "TO_DATE преобразует text по шаблону; AGE возвращает символический interval; EXTRACT получает компонент. Все пары верны."
    }
  },
  {
    "id": 100,
    "type": "multi",
    "question": "Какова основная цель использования материализованных представлений?",
    "options": [
      {
        "text": "Значительно улучшить производительность для сложных запросов.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "Физически сохранить результат запроса на диске.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "Уменьшить объем используемой дисковой памяти.",
        "votes": 0,
        "against": 1
      },
      {
        "text": "Обеспечить автоматическое обновление данных каждую секунду.",
        "votes": 0,
        "against": 1
      }
    ],
    "answer": [
      0,
      1
    ],
    "verified": [
      0,
      1
    ],
    "explanation": "Материализованное представление хранит результат запроса, что может ускорить чтение сложных выборок; данные требуют обновления.",
    "warning": "Ускорение — цель материализации, а не гарантия для каждого запроса; результат занимает дополнительное место и требует обновления.",
    "sources": [
      {
        "title": "PostgreSQL: Materialized Views",
        "url": "https://www.postgresql.org/docs/current/rules-materializedviews.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Материализация сохраняет результат для повторного чтения и ускорения подходящих запросов. Не гарантирует экономию места или обновление раз в секунду."
    }
  },
  {
    "id": 101,
    "type": "multi",
    "question": "Выберите верные описания функций смещения.",
    "options": [
      {
        "text": "LAG обращается к данным из случайной строки в окне.",
        "votes": 0,
        "against": 2
      },
      {
        "text": "FIRST_VALUE возвращает первое значение в окне.",
        "votes": 1,
        "against": 1
      },
      {
        "text": "LEAD обращается к данным из следующих строк.",
        "votes": 1,
        "against": 1
      },
      {
        "text": "LAST_VALUE возвращает последнее значение в окне.",
        "votes": 1,
        "against": 1
      }
    ],
    "answer": [],
    "verified": [
      1,
      2,
      3
    ],
    "explanation": "LEAD читает следующую строку; FIRST_VALUE и LAST_VALUE берут крайние значения текущего кадра, а не обязательно всей партиции.",
    "warning": "По каждому верному варианту ничья 1:1. Выбор сделан по документации. Термин «окно» в вариантах FIRST_VALUE/LAST_VALUE точнее понимать как текущий кадр.",
    "sources": [
      {
        "title": "PostgreSQL: Window Functions",
        "url": "https://www.postgresql.org/docs/current/functions-window.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "LAG использует позиционное смещение, а не случайный выбор. Остальные определения верны при понимании окна FIRST/LAST как frame."
    }
  },
  {
    "id": 102,
    "type": "match",
    "question": "Сопоставьте строковую функцию с ее назначением.",
    "options": [],
    "answer": [],
    "verified": [],
    "explanation": "REPLACE заменяет вхождения, TRIM убирает крайние пробелы, SUBSTRING извлекает часть строки.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: String Functions",
        "url": "https://www.postgresql.org/docs/current/functions-string.html"
      }
    ],
    "pairs": [
      {
        "left": "REPLACE",
        "right": "Замена подстрок",
        "votes": 1
      },
      {
        "left": "TRIM",
        "right": "Удаление пробелов",
        "votes": 1
      },
      {
        "left": "SUBSTRING",
        "right": "Извлечение подстрок",
        "votes": 1
      }
    ],
    "choices": [
      "Замена подстрок",
      "Удаление пробелов",
      "Извлечение подстрок"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Все пары верны. TRIM по умолчанию удаляет крайние пробелы, не пробелы внутри строки."
    }
  },
  {
    "id": 103,
    "type": "multi",
    "question": "Что нужно сделать, чтобы операция деления в SQL вернула вещественный результат, а не целый?",
    "options": [
      {
        "text": "Использовать функцию CAST для одного из операндов, чтобы преобразовать его в DEC.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "Ничего, деление всегда возвращает вещественный результат.",
        "votes": 0,
        "against": 1
      },
      {
        "text": "Сделать один из операндов вещественным.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "Использовать специальный оператор // для вещественного деления.",
        "votes": 0,
        "against": 1
      }
    ],
    "answer": [
      0,
      2
    ],
    "verified": [
      0,
      2
    ],
    "explanation": "Приведение операнда к DEC/numeric или использование дробного операнда меняет тип деления.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Mathematical Functions",
        "url": "https://www.postgresql.org/docs/current/functions-math.html"
      },
      {
        "title": "PostgreSQL: Value Expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Один numeric/DEC или дробный операнд исключает целочисленное деление. // не является штатным оператором такого деления PostgreSQL."
    }
  },
  {
    "id": 104,
    "type": "single",
    "question": "Что находится на концептуальном уровне архитектуры ANSI/SPARC?",
    "options": [
      {
        "text": "Представления для конкретных приложений",
        "votes": 0,
        "against": null
      },
      {
        "text": "Описание физической организации данных",
        "votes": 0,
        "against": null
      },
      {
        "text": "Системный блок сервера баз данных",
        "votes": 0,
        "against": null
      },
      {
        "text": "Полная логическая структура всей базы данных без привязки к приложениям",
        "votes": 1,
        "against": null
      }
    ],
    "answer": [
      3
    ],
    "verified": [
      3
    ],
    "explanation": "Концептуальная схема описывает общую логическую структуру базы, независимо от пользовательских представлений и физического размещения.",
    "warning": "",
    "sources": [
      {
        "title": "University of Cape Town: Database Systems",
        "url": "https://www.cs.uct.ac.za/mit_notes/database/htmls/chp01.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Концептуальная схема — общая логическая структура; пользовательские представления относятся к внешнему уровню, размещение к внутреннему."
    }
  },
  {
    "id": 105,
    "type": "match",
    "question": "Сопоставьте функцию округления с ее описанием.",
    "options": [],
    "answer": [],
    "verified": [],
    "explanation": "ROUND округляет до ближайшего значения, CEIL вверх, FLOOR вниз.",
    "warning": "В PDF нет статистики. Соответствия установлены по документации.",
    "sources": [
      {
        "title": "PostgreSQL: Mathematical Functions",
        "url": "https://www.postgresql.org/docs/current/functions-math.html"
      }
    ],
    "pairs": [
      {
        "left": "ROUND",
        "right": "Математическое округление",
        "votes": 0
      },
      {
        "left": "CEIL",
        "right": "Округление в большую сторону",
        "votes": 0
      },
      {
        "left": "FLOOR",
        "right": "Округление в меньшую сторону",
        "votes": 0
      }
    ],
    "choices": [
      "Математическое округление",
      "Округление в большую сторону",
      "Округление в меньшую сторону"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Все три соответствия верны; детали округления половин зависят от типа, но направление CEIL/FLOOR неизменно."
    }
  },
  {
    "id": 106,
    "type": "multi",
    "question": "Что определяет синтаксис простого выражения CASE?",
    "options": [
      {
        "text": "CASE input_expression WHEN when_expression THEN result_expression",
        "votes": 2,
        "against": 0
      },
      {
        "text": "ELSE else_result_expression",
        "votes": 2,
        "against": 0
      },
      {
        "text": "WHEN condition DO result",
        "votes": 0,
        "against": 2
      },
      {
        "text": "CASE WHEN boolean_expression THEN result_expression",
        "votes": 0,
        "against": 2
      }
    ],
    "answer": [
      0,
      1
    ],
    "verified": [
      0,
      1
    ],
    "explanation": "Простой CASE сравнивает входное выражение с WHEN. ELSE необязателен; полная конструкция завершается END.",
    "warning": "Варианты показывают фрагменты синтаксиса, а не самостоятельные завершённые выражения. END в предложенных фрагментах отсутствует.",
    "sources": [
      {
        "title": "PostgreSQL: Conditional Expressions",
        "url": "https://www.postgresql.org/docs/current/functions-conditional.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Вопрос именно о простом CASE: входное выражение и необязательный ELSE подходят. CASE WHEN boolean — поисковая форма; WHEN ... DO неверен."
    }
  },
  {
    "id": 107,
    "type": "multi",
    "question": "Какие из приведенных синтаксических конструкций являются корректным использованием функции CAST или ее аналога в PostgreSQL?",
    "options": [
      {
        "text": "'123' :: INTEGER",
        "votes": 2,
        "against": 0
      },
      {
        "text": "CAST('123' AS INTEGER)",
        "votes": 2,
        "against": 0
      },
      {
        "text": "CONVERT(INTEGER, '123')",
        "votes": 0,
        "against": 2
      },
      {
        "text": "CAST('123', INTEGER)",
        "votes": 0,
        "against": 2
      }
    ],
    "answer": [
      0,
      1
    ],
    "verified": [
      0,
      1
    ],
    "explanation": "PostgreSQL поддерживает CAST(value AS type) и value::type. Два остальных варианта не являются этим синтаксисом.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Value Expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Оба синтаксиса приведения явно описаны. CONVERT(INTEGER, text) и CAST с запятой не являются приведением в PostgreSQL."
    }
  },
  {
    "id": 108,
    "type": "single",
    "question": "Что принято понимать под предметной областью?",
    "options": [
      {
        "text": "Часть реального мира, подлежащая изучению для организации управления",
        "votes": 1,
        "against": null
      },
      {
        "text": "Именованная совокупность интегрированных файлов",
        "votes": 0,
        "against": null
      },
      {
        "text": "Совокупность программного обеспечения СУБД",
        "votes": 0,
        "against": null
      },
      {
        "text": "Полный объем знаний человечества с момента его возникновения",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      0
    ],
    "verified": [
      0
    ],
    "explanation": "Предметная область — выбранная для моделирования часть реального мира, её объекты, свойства и связи.",
    "warning": "",
    "sources": [
      {
        "title": "IBM: Data modeling",
        "url": "https://www.ibm.com/think/topics/data-modeling"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Предметная область — моделируемая часть действительности, а не файловый набор, программный комплекс или все знания."
    }
  },
  {
    "id": 109,
    "type": "single",
    "question": "Для чего предназначены базы данных Key-value?",
    "options": [
      {
        "text": "Для рекурсивного поиска связей между узлами",
        "votes": 0,
        "against": null
      },
      {
        "text": "Для быстрых, почти мгновенных запросов для таких задач как кэш",
        "votes": 1,
        "against": null
      },
      {
        "text": "Для медленного хранения видеофайлов на кассетах",
        "votes": 0,
        "against": null
      },
      {
        "text": "Для хранения иерархических структур данных",
        "votes": 0,
        "against": null
      }
    ],
    "answer": [
      1
    ],
    "verified": [
      1
    ],
    "explanation": "Key-value обеспечивает доступ к значению по ключу и часто применяется для кэша. «Почти мгновенно» — описание низкой задержки, не гарантия времени.",
    "warning": "",
    "sources": [
      {
        "title": "Redis: Key-value databases",
        "url": "https://redis.io/nosql/key-value-databases/"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Быстрый доступ по ключу и кэш — характерное назначение; графовый обход, кассеты и иерархическая модель не определяют key-value."
    }
  },
  {
    "id": 110,
    "type": "multi",
    "question": "Каковы основные назначения функции CAST в SQL?",
    "options": [
      {
        "text": "Использование для форматирования вывода, например, при конкатенации строк с числами.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "Явное преобразование значения из одного типа данных в другой.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "Неявное, автоматическое преобразование типов данных.",
        "votes": 0,
        "against": 1
      },
      {
        "text": "Изменение типа данных столбца в таблице навсегда.",
        "votes": 0,
        "against": 1
      }
    ],
    "answer": [
      0,
      1
    ],
    "verified": [
      0,
      1
    ],
    "explanation": "CAST явно преобразует тип значения, например число в текст для вывода; схему таблицы он не меняет.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Value Expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "CAST — явное преобразование значения, пригодное для текстового вывода. Неявное преобразование и изменение определения столбца — другие операции."
    }
  },
  {
    "id": 111,
    "type": "multi",
    "question": "Что можно сделать с помощью CAST?",
    "options": [
      {
        "text": "Преобразовать число в строку.",
        "votes": 2,
        "against": 1
      },
      {
        "text": "Преобразовать строку в дату.",
        "votes": 2,
        "against": 1
      },
      {
        "text": "Создать новую таблицу с преобразованными типами.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Преобразовать строку в число.",
        "votes": 2,
        "against": 1
      }
    ],
    "answer": [
      0,
      1,
      3
    ],
    "verified": [
      0,
      1,
      3
    ],
    "explanation": "При допустимом содержимом CAST преобразует числа, строки и даты. Для создания таблицы нужна отдельная команда CREATE TABLE.",
    "warning": "CAST сам не создаёт таблицы, но его можно использовать в CREATE TABLE AS SELECT для создания таблицы с преобразованными типами. Из-за слов «с помощью» принимаются оба прочтения варианта 3.",
    "sources": [
      {
        "title": "PostgreSQL: Value Expressions",
        "url": "https://www.postgresql.org/docs/current/sql-expressions.html"
      },
      {
        "title": "PostgreSQL: CREATE TABLE AS",
        "url": "https://www.postgresql.org/docs/current/sql-createtableas.html"
      }
    ],
    "acceptedAnswers": [
      [
        0,
        1,
        3
      ],
      [
        0,
        1,
        2,
        3
      ]
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "ambiguous",
      "reason": "Преобразования числа, строки и даты подтверждены. Создать таблицу можно сочетанием CREATE TABLE AS и CAST; поскольку вопрос не говорит «только CAST», принят и расширенный набор."
    }
  },
  {
    "id": 112,
    "type": "multi",
    "question": "Какие операторы используются для прерывания или продолжения цикла LOOP?",
    "options": [
      {
        "text": "STOP",
        "votes": 0,
        "against": 1
      },
      {
        "text": "CONTINUE",
        "votes": 1,
        "against": 0
      },
      {
        "text": "EXIT",
        "votes": 1,
        "against": 0
      },
      {
        "text": "BREAK",
        "votes": 0,
        "against": 1
      }
    ],
    "answer": [
      1,
      2
    ],
    "verified": [
      1,
      2
    ],
    "explanation": "EXIT выходит из цикла, CONTINUE переходит к следующей итерации. STOP и BREAK не являются этими операторами PL/pgSQL.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: PL/pgSQL Control Structures",
        "url": "https://www.postgresql.org/docs/current/plpgsql-control-structures.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "В PL/pgSQL предусмотрены EXIT и CONTINUE; STOP и BREAK отсутствуют в грамматике управления циклом."
    }
  },
  {
    "id": 113,
    "type": "multi",
    "question": "Для чего используется кадрирование (определение границ окна)?",
    "options": [
      {
        "text": "Чтобы ограничить набор строк, для которых оконная функция выполняет вычисление.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "Чтобы отсортировать результаты внутри партиции.",
        "votes": 0,
        "against": 1
      },
      {
        "text": "Чтобы разделить строки на независимые группы.",
        "votes": 0,
        "against": 1
      },
      {
        "text": "Чтобы реализовать такие механики, как «скользящее среднее».",
        "votes": 1,
        "against": 0
      }
    ],
    "answer": [
      0,
      3
    ],
    "verified": [
      0,
      3
    ],
    "explanation": "Кадр ограничивает строки для функций, учитывающих кадр, например AVG при вычислении скользящего среднего.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Window Functions Tutorial",
        "url": "https://www.postgresql.org/docs/current/tutorial-window.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Frame ограничивает данные frame-sensitive функций и позволяет скользящее AVG. Сортировка и разделение задаются ORDER BY и PARTITION BY."
    }
  },
  {
    "id": 114,
    "type": "multi",
    "question": "Каковы преимущества CROSSTAB перед CASE WHEN?",
    "options": [
      {
        "text": "Не требует группировки (GROUP BY) в исходном запросе.",
        "votes": 2,
        "against": 1
      },
      {
        "text": "Эффективнее для большого числа колонок и лучше поддерживает динамические колонки.",
        "votes": 2,
        "against": 1
      },
      {
        "text": "Автоматически определяет типы данных для новых колонок.",
        "votes": 0,
        "against": 3
      },
      {
        "text": "Более читаемый код, особенно при большом количестве категорий.",
        "votes": 2,
        "against": 1
      }
    ],
    "answer": [
      0,
      1,
      3
    ],
    "verified": [
      0,
      1,
      3
    ],
    "explanation": "Тренажёр засчитывает варианты 1, 2 и 4 по ключу, заданному для этого задания.",
    "warning": "В PostgreSQL производительность зависит от запроса и данных. При прямом вызове crosstab число, имена и типы выходных столбцов задаются в вызывающем запросе. Утверждение про скорость и динамические столбцы засчитывается по ключу задания.",
    "sources": [
      {
        "title": "PostgreSQL: tablefunc",
        "url": "https://www.postgresql.org/docs/current/tablefunc.html"
      }
    ],
    "audit": {
      "date": "2026-11-14",
      "verdict": "ambiguous",
      "reason": "В PostgreSQL производительность зависит от запроса и данных. При прямом вызове crosstab число, имена и типы выходных столбцов задаются в вызывающем запросе. Утверждение про скорость и динамические столбцы засчитывается по ключу задания."
    },
    "gradingRevision": "114-original-key"
  },
  {
    "id": 115,
    "type": "match",
    "question": "Сопоставьте ключевое слово конструкции CASE с его ролью.",
    "options": [],
    "answer": [],
    "verified": [],
    "explanation": "WHEN задаёт условие/сравнение, THEN результат, ELSE запасной результат, END завершает CASE.",
    "warning": "В PDF нет статистики. Соответствия установлены по документации.",
    "sources": [
      {
        "title": "PostgreSQL: Conditional Expressions",
        "url": "https://www.postgresql.org/docs/current/functions-conditional.html"
      }
    ],
    "pairs": [
      {
        "left": "END",
        "right": "Завершение конструкции",
        "votes": 0
      },
      {
        "left": "WHEN",
        "right": "Проверка условия",
        "votes": 0
      },
      {
        "left": "THEN",
        "right": "Определение результата при истинности",
        "votes": 0
      },
      {
        "left": "ELSE",
        "right": "Определение результата по умолчанию",
        "votes": 0
      }
    ],
    "choices": [
      "Завершение конструкции",
      "Определение результата по умолчанию",
      "Определение результата при истинности",
      "Проверка условия"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Все четыре сопоставления соответствуют грамматике CASE; ELSE необязателен."
    }
  },
  {
    "id": 116,
    "type": "multi",
    "question": "Какие утверждения о PARTITION BY верны?",
    "options": [
      {
        "text": "Оконная функция вычисляется независимо для каждого раздела.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "Разбивает строки на группы (разделы).",
        "votes": 1,
        "against": 0
      },
      {
        "text": "Определяет порядок строк в каждом разделе.",
        "votes": 0,
        "against": 1
      },
      {
        "text": "Объединяет все строки в одну большую группу.",
        "votes": 0,
        "against": 1
      }
    ],
    "answer": [
      0,
      1
    ],
    "verified": [
      0,
      1
    ],
    "explanation": "PARTITION BY делит строки на разделы для независимых вычислений. Порядок задаёт ORDER BY.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Window Functions Tutorial",
        "url": "https://www.postgresql.org/docs/current/tutorial-window.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "PARTITION BY определяет независимые разделы. ORDER BY сортирует; единый раздел по умолчанию получается при отсутствии PARTITION BY."
    }
  },
  {
    "id": 117,
    "type": "match",
    "question": "Сопоставьте оператор для работы с табличным подзапросом с его назначением.",
    "options": [],
    "answer": [],
    "verified": [],
    "explanation": "ALL сравнивает со всеми значениями, EXISTS проверяет наличие строк, IN проверяет вхождение в набор.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: Subquery Expressions",
        "url": "https://www.postgresql.org/docs/current/functions-subquery.html"
      }
    ],
    "pairs": [
      {
        "left": "ALL",
        "right": "Условие верно для всех значений",
        "votes": 1
      },
      {
        "left": "EXISTS",
        "right": "Проверяет наличие хотя бы одной строки",
        "votes": 1
      },
      {
        "left": "IN",
        "right": "Сравнение со списком значений",
        "votes": 1
      }
    ],
    "choices": [
      "Сравнение со списком значений",
      "Условие верно для всех значений",
      "Проверяет наличие хотя бы одной строки"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Все три сопоставления верны. Для ALL пустой подзапрос даёт TRUE; NULL может дать UNKNOWN, не меняя назначения оператора."
    }
  },
  {
    "id": 118,
    "type": "multi",
    "question": "Какие утверждения о представлениях верны?",
    "options": [
      {
        "text": "Представления являются объектами базы данных.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "Если данные в основной таблице меняются, пользователь получает актуальные данные при обращении к представлению.",
        "votes": 1,
        "against": 0
      },
      {
        "text": "Представления - это физические копии таблиц.",
        "votes": 0,
        "against": 1
      },
      {
        "text": "Представления всегда доступны только для чтения и не могут изменять данные.",
        "votes": 0,
        "against": 1
      }
    ],
    "answer": [
      0,
      1
    ],
    "verified": [
      0,
      1
    ],
    "explanation": "Обычное представление хранит запрос, а не копию данных. При обращении запрос выполняется заново; простые представления могут обновляться.",
    "warning": "Актуальность определяется видимостью данных в текущем снимке транзакции.",
    "sources": [
      {
        "title": "PostgreSQL: CREATE VIEW",
        "url": "https://www.postgresql.org/docs/current/sql-createview.html"
      }
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "VIEW является объектом с определением запроса; результат вычисляется при обращении. Представление не физическая копия и может быть изменяемым."
    }
  },
  {
    "id": 119,
    "type": "match",
    "question": "Сопоставьте оператор управления потоком с его действием.",
    "options": [],
    "answer": [],
    "verified": [],
    "explanation": "LOOP повторяет блок до явного выхода; IF проверяет условие; CASE выбирает первую подходящую ветвь.",
    "warning": "",
    "sources": [
      {
        "title": "PostgreSQL: PL/pgSQL Control Structures",
        "url": "https://www.postgresql.org/docs/current/plpgsql-control-structures.html"
      }
    ],
    "pairs": [
      {
        "left": "LOOP",
        "right": "Организует бесконечный цикл",
        "votes": 1
      },
      {
        "left": "IF",
        "right": "Выполняет блок кода, если условие истинно",
        "votes": 1
      },
      {
        "left": "CASE",
        "right": "Выполняет блок кода, соответствующий первому совпавшему значению",
        "votes": 1
      }
    ],
    "choices": [
      "Выполняет блок кода, соответствующий первому совпавшему значению",
      "Организует бесконечный цикл",
      "Выполняет блок кода, если условие истинно"
    ],
    "audit": {
      "date": "2026-11-13",
      "verdict": "confirmed",
      "reason": "Все пары верны для простого LOOP, IF и простого CASE; цикл можно прервать явно."
    }
  }
];
