type SquareProps = {
    value: string,
    onClick?: () => void; 
  };

function Square({ value, onClick }: SquareProps) {
    return <button aria-label="gameboard-square" className="square" onClick={onClick}>
        {value}
    </button>
 }

 export default Square
