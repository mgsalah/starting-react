import pokemon from './pokemon.json'
import './App.css';

const App = (): React.ReactElement | JSX.Element => {
  return (
    <div
    style={{
      margin: 'auto',
      width: 800,
      paddingTop: "1rem"
    }}
    >
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
        </thead>
        <tbody>
          {
            pokemon.slice(0,20).map((p: any) => (
              <tr key={`${p.id}, ${p.name.english}`}>
                <td>{p.name.english}</td>
                <td>{p.type.join(", ")}</td>
              </tr>
            ))
          }
        </tbody>
        
      </table>
    </div>
  );
}

export default App;
