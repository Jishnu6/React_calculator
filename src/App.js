import './App.css';
import React from 'react';
import PropTypes from "prop-types";

const App = () => {

  const inputRef = React.useRef('');

  const operation = (value) => {

    if (value === 'DEL') {

      inputRef.current.value = inputRef.current.value.slice(0, -1);
    }
    else if (value === 'RESET') {
      inputRef.current.value = "0";
    }
    else if (value === '=') {

      inputRef.current.value = eval(inputRef.current.value);
    }
    else {
      inputRef.current.value += value;
    }

  }


  return (
    <div className="App">

      <div className="calculator">

        <Title className="calculator">Calculator</Title>

        <div className="body">

          <InputBox className="input" type="text" placeholder="0" ref={inputRef}></InputBox>

          <div className="button-wrapper">
            <div className="button-wrapper1">

              <Button className="Number" value="7" func={operation}>7</Button>
              <Button className="Number" value="8" func={operation} >8</Button>
              <Button className="Number" value="9" func={operation}>9</Button>
              <Button className="del" value="DEL" func={operation} >DEL</Button>
              <Button className="Number" value="4" func={operation}>4</Button>
              <Button className="Number" value="5" func={operation}>5</Button>
              <Button className="Number" value="6" func={operation}>6</Button>
              <Button className="Operator" value="+" func={operation}>+</Button>
              <Button className="Number" value="1" func={operation}>1</Button>
              <Button className="Number" value="2" func={operation}>2</Button>
              <Button className="Number" value="3" func={operation}>3</Button>
              <Button className="Operator" value="-" func={operation}>-</Button>
              <Button className="Number" value="." func={operation}>.</Button>
              <Button className="Number" value="0" func={operation}>0</Button>
              <Button className="Operator" value="/" func={operation}>/</Button>
              <Button className="Operator" value="X" func={operation}>X</Button>

              <div className="button-wrapper2">

                <Button className="reset" value="RESET" func={operation} >RESET</Button>
                <Button className="equal" value="=" func={operation}>=</Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

const Title = ({ className, children }) => {

  return (
    <div>
      <h1 className={className}>{children}</h1>
    </div>
  )

}

const InputBox = React.forwardRef((props, ref) => {
  return (
    <div>
      <input {...props} ref={ref}></input>
    </div>
  )
}
)
InputBox.displayName = "InputBox";


const Button = ({ className, value, func }) => {

  return (
    <div>

      <button className={className} onClick={() => func(value)} > {value} </button>

    </div>

  );

}
Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  func: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

Title.propTypes = {

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string.isRequired
}

export default App;
