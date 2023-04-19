import React from "react";

export default function GameCard({ game }) {
  return (
    <div>
      <img src={game.thumbnail} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.short_description}</p>
      <a>{game.game_url}</a>
    </div>
  );
}
