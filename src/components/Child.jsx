
function Child({ name, isHighlighted, handleMouseEnter, handleMouseLeave }) {
    return (
      <div
        style={{
          border: '5px solid black',
          padding: '10px',
          margin: '5px',
          cursor: 'pointer',
          borderColor: isHighlighted ? 'brown' : 'black',
  
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {name}
      </div>
    );
  }

export default Child;
