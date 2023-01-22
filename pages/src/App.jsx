function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: '"Comic Sans MS", fantasy', color: '#4b9be1' }}>
        {"The programmer`s website"}
      </h1>
      <h2
        style={{
          fontFamily: 'Arial, Helvetica, cursive',
          color: 'rgb(243, 103, 123)',
          marginBottom: '10rem'
        }}
      >
        try clicking these buttons below
      </h2>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'lime',
          color: 'blue'
        }}
        onClick={() => alert('Hello there')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'brown',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            alert('it is good to see you, ' + name + '!');
          } else {
            alert('Nice to meet you, online player');
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
    
  );
}
<button>who are you?</button>
export default HomePage;
