import React from "react";

export default function GameCard({ game }) {
  return (
    <div className="flex m-10 border border rounded">
      <img src={game.thumbnail} alt={game.title} />
      <div className="text-white p-8">
        <h3 className="font-display font-bold text-xl mb-2">{game.title}</h3>
        <p>{game.short_description}</p>
        <div className="my-2">
          <p>Genre: {game.genre}</p>
          <p>Publisher: {game.publisher}</p>
        </div>
      </div>
    </div>
  );
}
