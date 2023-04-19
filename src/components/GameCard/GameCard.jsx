import React from "react";

export default function GameCard({ game }) {
  return (
    <div>
      <img src={game.thumbnail} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.short_description}</p>
      <p>{game.game_url}</p>
    </div>
  );
}
