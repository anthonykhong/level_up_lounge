require("dotenv").config();
require("./config/database");

const Games = require("./models/game");

(async function () {
  await Games.deleteMany({});

  await Games.create([
    {
      title: "Fall Guys",
      thumbnail: "https://www.freetogame.com/g/523/thumbnail.jpg",
      short_description:
        "Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ",
      genre: "Battle Royale",
      publisher: "Mediatonic",
    },
    {
      title: "Overwatch 2",
      thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
      short_description:
        "A hero-focused first-person team shooter from Blizzard Entertainment.",
      genre: "Shooter",
      publisher: "Activision Blizzard",
    },
    {
      title: "League of Legends",
      thumbnail: "https://www.freetogame.com/g/286/thumbnail.jpg",
      short_description:
        "A free-to-play MOBA game, and one of the most played pc game in the world.",
      genre: "MOBA",
      publisher: "Riot Games",
    },
    {
      title: "Valorant",
      thumbnail: "https://www.freetogame.com/g/466/thumbnail.jpg",
      short_description:
        "Test your mettle in Riot Games’ character-based FPS shooter Valorant.",
      genre: "Shooter",
      publisher: "Riot Games",
    },
    {
      title: "PUBG: BATTLEGROUNDS",
      thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg",
      short_description:
        "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
      genre: "Shooter",
      publisher: "KRAFTON, Inc.",
    },
    {
      title: "Genshin Impact",
      thumbnail: "https://www.freetogame.com/g/475/thumbnail.jpg",
      short_description:
        "If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.",
      genre: "Action RPG",
      publisher: "miHoYo",
    },
    {
      title: "Halo Infinite",
      thumbnail: "https://www.freetogame.com/g/515/thumbnail.jpg",
      short_description:
        "For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite’s multiplayer.",
      genre: "Shooter",
      publisher: "Xbox Game Studios",
    },
    {
      title: "World of Warships",
      thumbnail: "https://www.freetogame.com/g/9/thumbnail.jpg",
      short_description:
        "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
      genre: "Shooter",
      publisher: "Wargaming",
    },
    {
      title: "Call Of Duty: Warzone",
      thumbnail: "https://www.freetogame.com/g/452/thumbnail.jpg",
      short_description:
        "A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.",
      genre: "Shooter",
      publisher: "Activision",
    },
    {
      title: "Destiny 2",
      thumbnail: "https://www.freetogame.com/g/21/thumbnail.jpg",
      short_description:
        "A free-to-play multiplayer Sci-Fi MMOFPS from Bungie.",
      genre: "Shooter",
      publisher: "Bungie",
    },
    {
      title: "Apex Legends",
      thumbnail: "https://www.freetogame.com/g/23/thumbnail.jpg",
      short_description:
        "A free-to-play strategic battle royale game featuring 60-player matches and team-based play. ",
      genre: "Shooter",
      publisher: "Electronic Arts",
    },
    {
      title: "Fortnite",
      thumbnail: "https://www.freetogame.com/g/57/thumbnail.jpg",
      short_description:
        "A free-to-play, standalone mode of Epic Game's Fortnite. ",
      genre: "Shooter",
      publisher: "Epic Games",
    },
    {
      title: "Brawlhalla",
      thumbnail: "https://www.freetogame.com/g/212/thumbnail.jpg",
      short_description:
        "A free-to-play 2D platform fighter inspired by the Smash Bros.",
      genre: "Fighting",
      publisher: "Blue Mammoth Games",
    },

    {
      title: "Guild Wars 2",
      thumbnail: "https://www.freetogame.com/g/13/thumbnail.jpg",
      short_description:
        "A free-to-play MMORPG, the follow-up to ArenaNet's popular Guild Wars. ",
      genre: "MMORPG",
      publisher: "NCsoft",
    },
    {
      title: "Diablo Immortal",
      thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
      short_description:
        "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
      genre: "MMOARPG",
      publisher: "Blizzard Entertainment",
    },
    {
      title: "Counter-Strike: Global Offensive",
      thumbnail: "https://www.freetogame.com/g/24/thumbnail.jpg",
      short_description: "The popular multiplayer shooter from Valve. ",
      genre: "Shooter",
      publisher: "Valve",
    },
    {
      title: "Game Of Thrones Winter Is Coming",
      thumbnail: "https://www.freetogame.com/g/340/thumbnail.jpg",
      short_description:
        "A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.",
      genre: "Strategy",
      publisher: "GTArcade",
    },
    {
      title: "Rocket League",
      thumbnail: "https://www.freetogame.com/g/474/thumbnail.jpg",
      short_description:
        "Get your car-soccer gaming on for free with Psyonix’s Rocket League. The popular competitive multi-player game is a popular offering with over 57 million players.",
      genre: "Sports",
      publisher: "Psyonix LLC",
    },
    {
      title: "Dungeons and Dragons Online",
      thumbnail: "https://www.freetogame.com/g/320/thumbnail.jpg",
      short_description:
        "A free-to-play MMORPG based on the beloved D&D RPG that started it all.",
      genre: "MMORPG",
      publisher: "Warner Bros. Interactive Entertainment",
    },
    {
      title: "Star Wars: The Old Republic",
      thumbnail: "https://www.freetogame.com/g/257/thumbnail.jpg",
      short_description:
        "A 3D sci-fi MMORPG based on the popular Star Wars universe and brought to you by Bioware. ",
      genre: "MMORPG",
      publisher: "Electronic Arts",
    },
    {
      title: "Gundam Evolution",
      thumbnail: "https://www.freetogame.com/g/537/thumbnail.jpg",
      short_description:
        "A 6v6 team-based shooter based on the Gundam multiverse",
      genre: "Shooter",
      publisher: "Bandai Namco",
    },
    {
      title: "Marvel Snap",
      thumbnail: "https://www.freetogame.com/g/541/thumbnail.jpg",
      short_description:
        "A fast paced strategy card game set in the Marvel universe.",
      genre: "Card Game",
      publisher: "Nuverse",
    },
    {
      title: "Florensia",
      thumbnail: "https://www.freetogame.com/g/295/thumbnail.jpg",
      short_description:
        "A free to play fantasy MMORPG with legendary worlds ashore and at \r\nsea.",
      genre: "MMORPG",
      publisher: "Netts Corporation",
    },
    {
      title: "Team Fortress 2",
      thumbnail: "https://www.freetogame.com/g/310/thumbnail.jpg",
      short_description:
        "Valve's iconic class-based free-to-play first-person shooter!",
      genre: "Shooter",
      publisher: "Jagex",
    },
  ]);
  process.exit();
})();
