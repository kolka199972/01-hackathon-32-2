export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  const symbols = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)]
  }
  return color
}

export const soundsLinks = [
  'https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg',
  'https://rpg.hamsterrepublic.com/wiki-images/7/72/Metal_Hit.ogg',
  'https://rpg.hamsterrepublic.com/wiki-images/d/db/Crush8-Bit.ogg',
  'https://rpg.hamsterrepublic.com/wiki-images/2/21/Collision8-Bit.ogg',
  'http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/explosion.ogg',
  'http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/missile.ogg',
  'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/extralife.ogg',
  'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatpellet.ogg',
  'http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg'
]

export const words = [
  {
    text:
      "Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.",
    name: "Mosher’s Law of Software Engineering"
  },
  {
    text:
      "Иногда лучше остаться спать дома в понедельник, чем провести всю неделю в отладке написанного в понедельник кода.",
    name: "Christopher Thompson"
  },
  {
    text:
      "Иногда лучшие программы создаются на бумажке. Запрограммировать их — второстепенная вещь.",
    name: "Max Kanat-Alexander"
  },
  {
    text:
      "Программирование — это разбиение чего-то большого и невозможного на что-то маленькое и вполне реальное.",
    name: "Jazzwant"
  },
  {
    text: "Простота — залог надежности.",
    name: "Edsger W. Dijkstra"
  },
  {
    text: "Работает? Не трогай.",
    name: "Любой программист"
  },
  {
    text:
      "Молодые специалисты не умеют работать, а опытные специалисты умеют не работать.",
    name: "Alexander Golov"
  },
  {
    text: "Преждевременная оптимизация — корень всех зол.",
    name: "Donald Knuth"
  },
  {
    text:
      "Чтобы написать чистый код, мы сначала пишем грязный код, а затем рефакторим его.",
    name: "Robert Martin"
  },
  {
    text:
      "Для каждой сложной задачи существует решение, которое является быстрым, простым и неправильным.",
    name: "H. L. Mencken"
  },
  {
    text:
      "Тестирование не позволяет обнаружить такие ошибки, как создание не того приложения.",
    name: "Steve McConnell"
  },
  {
    text:
      "Ходить по воде и разрабатывать программы, следуя спецификации, очень просто… если они заморожены.",
    name: "Edward V Berard"
  },
  {
    text: "Нельзя доверять коду, который вы не написали полностью сами.",
    name: "Ken Thompson"
  },
  {
    text:
      "Модульность — фундаментальный аспект всех успешно работающих крупных систем.",
    name: "Bjarne Stroustrup"
  },
  {
    text: "Программирование — это не наука, а ремесло.",
    name: "Richard Stallman"
  }
]
