type SquareProps = {
    value: string,
    onClick?: () => void; 
  };

function Square({ value, onClick }: SquareProps) {
    return <button data-testid="square-button" aria-label="gameboard-square" className="square" onClick={onClick}>
        {value}
    </button>
 }

 export default Square
