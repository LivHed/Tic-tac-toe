type ResetProps = {
    onClick?: () => void; 
  };

function ResetButton({ onClick }: ResetProps) {
    return <button aria-label="reset-button" className="resetButton" onClick={onClick}>
        Reset
    </button>
 }

 export default ResetButton