const characters = [
  {
    id: 1,
    name: "Aang",
    affiliation: "Air Nomads",
    element: "Air",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png",
  },
  {
    id: 2,
    name: "Amon",
    affiliation: "Equalists",
    element: "Water",
    show: "The Legend of Korra",
    image:
      "https://static.wikia.nocookie.net/avatar/images/0/00/Amon_and_his_Equalists.png",
  },
  {
    id: 3,
    name: "Appa",
    affiliation: "Air Nomads",
    element: "Air",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/6/65/Appa_flying.png",
  },
  {
    id: 4,
    name: "Arnook",
    affiliation: "Water Tribe",
    element: "Water",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/0/0c/Chief.png",
  },
  {
    id: 5,
    name: "Asami Sato",
    affiliation: "Republic City",
    element: "None",
    show: "The Legend of Korra",
    image:
      "https://static.wikia.nocookie.net/avatar/images/b/b6/Asami_Sato.png",
  },
  {
    id: 6,
    name: "Azula",
    affiliation: "Fire Nation",
    element: "Fire",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/1/12/Azula.png",
  },
  {
    id: 7,
    name: "Bolin",
    affiliation: "Republic City",
    element: "Earth",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/d/d4/Bolin.png",
  },
  {
    id: 8,
    name: "Bumi",
    affiliation: "Air Nomads",
    element: "None",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/0/06/Bumi.png",
  },
  {
    id: 9,
    name: "Bumi",
    affiliation: "Earth Kingdom",
    element: "Earth",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/e/e8/King_Bumi.png",
  },
  {
    id: 10,
    name: "Cabbage Merchant",
    affiliation: "Earth Kingdom",
    element: "None",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/2/2f/Cabbage_merchant.png",
  },
  {
    id: 11,
    name: "Great Sage",
    affiliation: "Fire Nation",
    element: "Fire",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/1/15/Great_Sage.png",
  },
  {
    id: 12,
    name: "Gyatso",
    affiliation: "Air Nomads",
    element: "Air",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/a/a4/Monk_Gyatso.png",
  },
  {
    id: 13,
    name: "Hakoda",
    affiliation: "Water Tribe",
    element: "Water",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/4/4e/Hakoda_smiling.png",
  },
  {
    id: 14,
    name: "Hama",
    affiliation: "Water Tribe",
    element: "Water",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/4/4d/Sinister_Hama.png",
  },
  {
    id: 15,
    name: "Haru",
    affiliation: "Earth Kingdom",
    element: "Earth",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/d/da/Haru.png",
  },
  {
    id: 16,
    name: "Hiroshi Sato",
    affiliation: "Republic City",
    element: "None",
    show: "The Legend of Korra",
    image:
      "https://static.wikia.nocookie.net/avatar/images/a/a6/Old_Hiroshi_Sato.png",
  },
  {
    id: 17,
    name: "Hong Li",
    affiliation: "Earth Kingdom",
    element: "Earth",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/a/a9/Hong_Li.png",
  },
  {
    id: 18,
    name: "Huu",
    affiliation: "Water Tribe",
    element: "Water",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/8/85/Huu.png",
  },
  {
    id: 19,
    name: "Ikki",
    affiliation: "Air Nomad",
    element: "Air",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/4/49/Ikki.png",
  },
  {
    id: 20,
    name: "Iroh",
    affiliation: "Fire Nation",
    element: "Fire",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png",
  },
  {
    id: 21,
    name: "Iroh (Korra)",
    affiliation: "Republic City",
    element: "Fire",
    show: "The Legend of Korra",
    image:
      "https://static.wikia.nocookie.net/avatar/images/3/34/Iroh_%28United_Forces_general%29.png",
  },
  {
    id: 22,
    name: "Izumi",
    affiliation: "Fire Nation",
    element: "Fire",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/1/10/Izumi.png",
  },
  {
    id: 23,
    name: "Jet",
    affiliation: "Earth Kingdom",
    element: "None",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/1/1e/Jet.png",
  },
  {
    id: 24,
    name: "Jin Wei",
    affiliation: "Earth Kingdom",
    element: "Earth",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/9/9c/Jin_Wei.png",
  },
  {
    id: 25,
    name: "Jinora",
    affiliation: "Air Nomads",
    element: "Air",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/0/01/Jinora.png",
  },
  {
    id: 26,
    name: "Katara",
    affiliation: "Water Tribe",
    element: "Water",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/7/7a/Katara_smiles_at_coronation.png",
  },
  {
    id: 27,
    name: "Korra",
    affiliation: "Water Tribe",
    element: "Water",
    show: "The Legend of Korra",
    image:
      "https://static.wikia.nocookie.net/avatar/images/3/31/Korra_smiling.png",
  },
  {
    id: 28,
    name: "Lin Beifong",
    affiliation: "Republic City",
    element: "Earth",
    show: "The Legend of Korra",
    image:
      "https://static.wikia.nocookie.net/avatar/images/8/83/Lin_Beifong.png",
  },
  {
    id: 29,
    name: "Longshot",
    affiliation: "Earth Kingdom",
    element: "None",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/e/e7/Longshot.png",
  },
  {
    id: 30,
    name: "Mai",
    affiliation: "Fire Nation",
    element: "None",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/4/40/Mai.png",
  },
  {
    id: 31,
    name: "Mako",
    affiliation: "Republic City",
    element: "Fire",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/a/a6/Mako.png",
  },
  {
    id: 32,
    name: "Mechanist",
    affiliation: "Earth Kingdom",
    element: "None",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/b/b7/Mechanist.png",
  },
  {
    id: 33,
    name: "Ming",
    affiliation: "Fire Nation",
    element: "Fire",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/a/a5/Ming.png",
  },
  {
    id: 34,
    name: "Momo",
    affiliation: "Air Nomads",
    element: "None",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/8/80/Momo_staring.png",
  },
  {
    id: 35,
    name: "Naga",
    affiliation: "Water Tribe",
    element: "None",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/3/35/Naga.png",
  },
  {
    id: 36,
    name: "Opal",
    affiliation: "Air Nomads",
    element: "Air",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/3/3c/Opal.png",
  },
  {
    id: 37,
    name: "Ozai",
    affiliation: "Fire Nation",
    element: "Fire",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/4/4a/Ozai.png",
  },
  {
    id: 38,
    name: "Pakku",
    affiliation: "Water Tribe",
    element: "Water",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/b/bb/Pakku_looking_smug.png",
  },
  {
    id: 39,
    name: "Pema",
    affiliation: "Air Nomads",
    element: "None",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/1/1d/Pema.png",
  },
  {
    id: 40,
    name: "Roku",
    affiliation: "Fire Nation",
    element: "Fire",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/f/f6/Roku.png",
  },
  {
    id: 41,
    name: "Senna",
    affiliation: "Water Tribe",
    element: "Water",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/5/5e/Senna.png",
  },
  {
    id: 42,
    name: "Sokka",
    affiliation: "Water Tribe",
    element: "None",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/c/cc/Sokka.png",
  },
  {
    id: 43,
    name: "Sozin",
    affiliation: "Fire Nation",
    element: "Fire",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/a/aa/Old_Sozin.png",
  },
  {
    id: 44,
    name: "Suki",
    affiliation: "Earth Kingdom",
    element: "None",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/1/14/Suki.png",
  },
  {
    id: 45,
    name: "Tarrlok",
    affiliation: "Water Tribe",
    element: "Water",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/d/d1/Tarrlok.png",
  },
  {
    id: 46,
    name: "Tenzin",
    affiliation: "Air Nomads",
    element: "Air",
    show: "The Legend of Korra",
    image: "https://static.wikia.nocookie.net/avatar/images/d/d6/Tenzin.png",
  },
  {
    id: 47,
    name: "Teo",
    affiliation: "Earth Kingdom",
    element: "None",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/7/77/Teo.png",
  },
  {
    id: 48,
    name: "Toph",
    affiliation: "Earth Kingdom",
    element: "Earth",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png",
  },
  {
    id: 49,
    name: "Ty Lee",
    affiliation: "Fire Nation",
    element: "None",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/6/6d/Ty_Lee.png",
  },
  {
    id: 50,
    name: "Yue",
    affiliation: "Water Tribe",
    element: "Water",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/9/9d/Kind_Yue.png",
  },
  {
    id: 51,
    name: "Zhao",
    affiliation: "Fire Nation",
    element: "Fire",
    show: "Avatar, The Last Airbender",
    image:
      "https://static.wikia.nocookie.net/avatar/images/e/e1/Commander_Zhao.png",
  },
  {
    id: 52,
    name: "Zuko",
    affiliation: "Fire Nation",
    element: "Fire",
    show: "Avatar, The Last Airbender",
    image: "https://static.wikia.nocookie.net/avatar/images/4/4b/Zuko.png",
  },
];

export function fetchCharacters() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(characters), 500);
  });
}
