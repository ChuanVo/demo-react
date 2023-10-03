import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components"

const WrapperMenu = styled(RadioGroup)`
    display: block !important;
`

function Menu(props) {

    const {selectedMenu, menu, handleMenuChange} = props
  
    return (
    <WrapperMenu
        row
        defaultValue="female"
        name="radio-buttons-group"
        onChange={handleMenuChange} value={selectedMenu}
      >
        {menu.map((item) => (
            <FormControlLabel key={item.key} value={item.key} control={<Radio />} label={item.name} />
        ))}
      </WrapperMenu>
    )
  }
  
  export default Menu