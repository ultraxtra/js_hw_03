
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію
// `calculateEngravingPrice(message, pricePerWord)` приймаючу рядок (в рядку будуть
// тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну
// гравіювання всіх слів в рядку.

const calculateEngravingPrice = function (message, pricePerWord) {
        const words = message.split(' ');
        const amount = words.length;
        const price = amount * pricePerWord;
        return price;
  };
  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); 
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); // 160
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); // 240
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); // 120