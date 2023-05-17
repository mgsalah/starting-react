import React from "react";
import PropTypes from "prop-types";

enum BaseStats {
    'HP',
    'Attack',
    'Defence',
    'Sp. Attack',
    'Sp. Defence',
    'Speed',
}

const PokemonPropType = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defence: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defence": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }).isRequired,
};

type PokemonInfoType = PropTypes.InferProps<typeof PokemonPropType>;

function PokemonInfo({ name, base }: PokemonInfoType) {
  return (
    <>
      <h1>{name?.english}</h1>
      <table>
        {Object.keys(base).map((key: string) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key as keyof typeof BaseStats]}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

PokemonInfo.propTypes = PokemonPropType;
export default PokemonInfo;
