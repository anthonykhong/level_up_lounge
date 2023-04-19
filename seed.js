require("dotenv").config();
require("./config/database");

const Games = require("./models/game");

(async function () {
  await Games.deleteMany({});

  await Games.create([
    {
      title: "Overwatch 2",
      thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
      short_description:
        "A hero-focused first-person team shooter from Blizzard Entertainment.",
      game_url: "https://www.freetogame.com/open/overwatch-2",
    },
    {
      title: "PUBG: BATTLEGROUNDS",
      thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg",
      short_description:
        "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
      game_url: "https://www.freetogame.com/open/pubg",
    },
    {
      title: "Genshin Impact",
      thumbnail: "https://www.freetogame.com/g/475/thumbnail.jpg",
      short_description:
        "If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.",
      game_url: "https://www.freetogame.com/open/genshin-impact",
    },
    {
      title: "Fall Guys",
      thumbnail: "https://www.freetogame.com/g/523/thumbnail.jpg",
      short_description:
        "Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ",
      game_url: "https://www.freetogame.com/open/fall-guys",
    },
    {
      title: "Halo Infinite",
      thumbnail: "https://www.freetogame.com/g/515/thumbnail.jpg",
      short_description:
        "For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite’s multiplayer.",
      game_url: "https://www.freetogame.com/open/halo-infinite",
    },
    {
      title: "World of Warships",
      thumbnail: "https://www.freetogame.com/g/9/thumbnail.jpg",
      short_description:
        "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
      game_url: "https://www.freetogame.com/open/world-of-warships",
    },
    {
      title: "Valorant",
      thumbnail: "https://www.freetogame.com/g/466/thumbnail.jpg",
      short_description:
        "Test your mettle in Riot Games’ character-based FPS shooter Valorant.",
      game_url: "https://www.freetogame.com/open/valorant",
    },
    {
      title: "Call Of Duty: Warzone",
      thumbnail: "https://www.freetogame.com/g/452/thumbnail.jpg",
      short_description:
        "A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.",
      game_url: "https://www.freetogame.com/open/call-of-duty-warzone",
    },
    {
      title: "Destiny 2",
      thumbnail: "https://www.freetogame.com/g/21/thumbnail.jpg",
      short_description:
        "A free-to-play multiplayer Sci-Fi MMOFPS from Bungie.",
      game_url: "https://www.freetogame.com/open/destiny-2",
    },
    {
      title: "Apex Legends",
      thumbnail: "https://www.freetogame.com/g/23/thumbnail.jpg",
      short_description:
        "A free-to-play strategic battle royale game featuring 60-player matches and team-based play. ",
      game_url: "https://www.freetogame.com/open/apex-legends",
    },
    {
      title: "Fortnite",
      thumbnail: "https://www.freetogame.com/g/57/thumbnail.jpg",
      short_description:
        "A free-to-play, standalone mode of Epic Game's Fortnite. ",
      game_url: "https://www.freetogame.com/open/fortnite-battle-royale",
    },
    {
      title: "Brawlhalla",
      thumbnail: "https://www.freetogame.com/g/212/thumbnail.jpg",
      short_description:
        "A free-to-play 2D platform fighter inspired by the Smash Bros.",
      game_url: "https://www.freetogame.com/open/brawlhalla",
    },

    {
      title: "Guild Wars 2",
      thumbnail: "https://www.freetogame.com/g/13/thumbnail.jpg",
      short_description:
        "A free-to-play MMORPG, the follow-up to ArenaNet's popular Guild Wars. ",
      game_url: "https://www.freetogame.com/open/guild-wars-2",
    },
    {
      title: "Diablo Immortal",
      thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
      short_description:
        "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
      game_url: "https://www.freetogame.com/open/diablo-immortal",
    },
    {
      title: "Game Of Thrones Winter Is Coming",
      thumbnail: "https://www.freetogame.com/g/340/thumbnail.jpg",
      short_description:
        "A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.",
      game_url:
        "https://www.freetogame.com/open/game-of-thrones-winter-is-coming",
    },
    {
      title: "Rocket League",
      thumbnail: "https://www.freetogame.com/g/474/thumbnail.jpg",
      short_description:
        "Get your car-soccer gaming on for free with Psyonix’s Rocket League. The popular competitive multi-player game is a popular offering with over 57 million players.",
      game_url: "https://www.freetogame.com/open/rocket-league",
    },
    {
      title: "League of Legends",
      thumbnail: "https://www.freetogame.com/g/286/thumbnail.jpg",
      short_description:
        "A free-to-play MOBA game, and one of the most played pc game in the world.",
      game_url: "https://www.freetogame.com/open/league-of-legends",
    },
    {
      title: "Dungeons and Dragons Online",
      thumbnail: "https://www.freetogame.com/g/320/thumbnail.jpg",
      short_description:
        "A free-to-play MMORPG based on the beloved D&D RPG that started it all.",
      game_url: "https://www.freetogame.com/open/dungeons-dragons-online",
    },
    {
      title: "Gundam Evolution",
      thumbnail: "https://www.freetogame.com/g/537/thumbnail.jpg",
      short_description:
        "A 6v6 team-based shooter based on the Gundam multiverse",
      game_url: "https://www.freetogame.com/open/gundam-evolution",
    },
    {
      title: "Marvel Snap",
      thumbnail: "https://www.freetogame.com/g/541/thumbnail.jpg",
      short_description:
        "A fast paced strategy card game set in the Marvel universe.",
      game_url: "https://www.freetogame.com/open/marvel-snap",
    },
  ]);
  process.exit();
})();
