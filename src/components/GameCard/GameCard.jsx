import React from "react";

export default function GameCard({ game }) {
  return (
    <div className="flex flex-row mx-10 mb-10 border border rounded bg-neutral-800">
      <img src={game.thumbnail} alt={game.title} />
      <div className="text-white p-8">
        <h3 className="font-display animate-text bg-gradient-to-r from-red-700 via-purple-700 to-rose-800 bg-clip-text text-transparent text-xl mb-2">
          {game.title}
        </h3>
        <p>{game.short_description}</p>
        <div className="my-2">
          <p>Genre: {game.genre}</p>
          <p>Publisher: {game.publisher}</p>
        </div>
      </div>
    </div>
  );
}
