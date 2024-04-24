import  { useState } from 'react';
import Parent from './components/Parent';
import Child from './components/Child';

function App() {
  const [isSuperParentHighlighted, setIsSuperParentHighlighted] = useState(false);
  const [isParentHighlighted, setIsParentHighlighted] = useState(false);
  const [isChildHiglishted, setIsChildHighlighted] = useState(false);

  const handleSuperParentMouseEnter = () => {
    setIsSuperParentHighlighted(true);
    setIsParentHighlighted(true);
    setIsChildHighlighted(true);
  };

  const handleSuperParentMouseLeave = () => {
    setIsSuperParentHighlighted(false);
    setIsParentHighlighted(false);
    setIsChildHighlighted(false);
  };

  const handleParentMouseEnter = () => {
    setIsParentHighlighted(true);
    setIsSuperParentHighlighted(false);
  };

  const handleParentMouseLeave = () => {
    setIsSuperParentHighlighted(true);
  };

  const handleChildMouseEnter = () => {
    setIsChildHighlighted(true)
    setIsParentHighlighted(false);
    setIsSuperParentHighlighted(false);
  };

  const handleChildMouseLeave = () => {
    setIsParentHighlighted(true);
  };

  const data = {
    name: 'Super Parent',
    children: [
      {
        name: 'Parent',
        children: [
          { name: 'Child' },
        ]
      },
    ]
  };

  return (
    <div style={{margin: '0 30%', textAlign: 'center' }}>
      <Parent
        name={data.name}
        isHighlighted={isSuperParentHighlighted}
        handleMouseEnter={handleSuperParentMouseEnter}
        handleMouseLeave={handleSuperParentMouseLeave}
      >
        {data.children.map((parent, index) => (
          <Parent
            key={index}
            name={parent.name}
            isHighlighted={isParentHighlighted}
            handleMouseEnter={handleParentMouseEnter}
            handleMouseLeave={handleParentMouseLeave}
          >
            {
              parent.children.map((child,idx) => (
                <Child
                  key={idx}
                  name={child.name}
                  isHighlighted={isChildHiglishted}
                  handleMouseEnter={handleChildMouseEnter}
                  handleMouseLeave={handleChildMouseLeave}
                />
              ))
            }
          </Parent>
        ))}
      </Parent>
    </div>
  );
}

export default App;
