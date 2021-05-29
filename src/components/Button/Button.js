import styled, {keyframes} from 'styled-components';
import './Button.css'

const pulse = keyframes`
  0%{
    transform: scale(1);
  }

  100%{
    transform: scale(1.3);
    background: green;
    color: white;
  }
`

export const Button = (props) => {
    return(
      <button className="button">
        {props.name}
      </button>
    )  
}
    

export const ButtonSpecial = styled(Button)`
    color: gray;

    &:hover {
      transition: transform 350ms ease-out;  
      transform: scale(1.2);
    }
`