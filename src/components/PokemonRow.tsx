
import PropTypes from 'prop-types'

const PokemonPropType = {
    pokemon: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.shape({
        english: PropTypes.string.isRequired
      }).isRequired,
      type: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    onSelect: PropTypes.func.isRequired
  }
  type PokemonTypes = PropTypes.InferProps<typeof PokemonPropType>
  
  const PokemonRow = ({pokemon, onSelect} : PokemonTypes) => (
    <tr key={`${pokemon.id}, ${pokemon.name.english}`}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td><button onClick={(e) => onSelect(pokemon)}>Select!</button></td>
    </tr>
  )
  
  PokemonRow.propTypes = PokemonPropType
  export default PokemonRow