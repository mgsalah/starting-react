import React from 'react';
import pokemon from './pokemon.json'
import './App.css';
import PokemonRow from './components/PokemonRow';
import PokemonInfo from './components/PokemonInfo';

const App = (): React.ReactElement | JSX.Element => {
  const [filter, setFilter] = React.useState<string>('')
  const [selectedItem, setSelectedItem] = React.useState<any | null | undefined>(null)
  return (
    <div
      style={{
        margin: 'auto',
        width: 800,
        paddingTop: "1rem"
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '80% 20%',
          columnGap: '1rem',
        }}>
        <div>
          <input value={filter} onChange={(e) => setFilter(e.target.value)}></input>
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {
                pokemon.slice(0, 20)
                  .filter((p: any) => (p.name.english as string).toLowerCase().includes(filter.toLowerCase()))
                  .map((p: any) => (<PokemonRow pokemon={p} onSelect={(p) => setSelectedItem(p)} key={p.id} />))
              }
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
    </div>
  );
}

export default App;
