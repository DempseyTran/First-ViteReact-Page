import React from "react";

const Suicide = ({ Characters }) => {
  return (
    <div className="Suicide-Wrapper mb-28">
      <h2 className="text-5xl font-GretaBold px-44">
        SUICIDE SQUAD: KILL THE JUSTICE LEAGUE
      </h2>
      <div className="Suicide-Container grid grid-cols-4 w-full px-40 py-8">
        {Characters.map((item) => (
          <div className="Card-Container mx-4" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2 className="name w-full text-3xl text-center p-3 font-GretaBold">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suicide;
