import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as gamesAPI from "../../utilities/games-api";
import GameList from "../GameList/GameList";

export default function HomePage() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGames() {
      const games = await gamesAPI.getGames();
      setGames(games);
    }
    fetchGames();
  }, []);

  function handleRenderPosts() {
    navigate("/posts");
  }

  return (
    <div className="flex justify-center flex-col items-center mt-28">
      <h1 className="font-display animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
        Level Up Lounge
      </h1>
      <div className="mt-16 px-20 text-gray-400 text-bold text-xl mx-10">
        <p>
          Join our vibrant community of gamers and connect with like-minded
          individuals from all over the world. Whether you're a casual player or
          a serious gamer,{" "}
          <span className="font-display animate-text bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Level Up Lounge
          </span>
          , is the perfect place for you to share your passion for gaming.
          <br />
          Join us and become part of our community of passionate gamers who love
          to play, connect, and{" "}
          <span className="font-display animate-text bg-gradient-to-r from-yellow-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
            level up
          </span>{" "}
          together!
        </p>
        <img className="p-16" src="./public/images/homepagegif.gif" />
      </div>
      <div className="flex justify-center w-full bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 py-28">
        <div>
          <h2 className="font-display animate-text bg-gradient-to-r from-red-700 via-purple-700 to-rose-800 bg-clip-text text-transparent text-4xl font-black">
            Share your Experience Below!
          </h2>
          <div className="flex items-center justify-center pt-16">
            <button
              onClick={handleRenderPosts}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-white rounded-lg group bg-gradient-to-br from-red-600 to-purple-600 group-hover:from-purple-300 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-700 rounded-md group-hover:bg-opacity-0">
                Click Here to Start Gamer
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="my-20 mx-10">
        <h2 className="flex justify-center font-display animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl mb-20">
          Collection
        </h2>
        <div className="">
          <GameList games={games} />
        </div>
      </div>
    </div>
  );
}
