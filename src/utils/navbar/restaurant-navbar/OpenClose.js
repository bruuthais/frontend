import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const PurpleSwitch = withStyles({
  switchBase: {
    color: "#4054b2",
    "&$checked": {
      color: "#3b375d",
    },
    "&$checked + $track": {
      backgroundColor: blueGrey[600],
    },
  },
  checked: {},
  track: {},
})(Switch);



export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  };

  return (
    <FormGroup>
       <FormControlLabel
        control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA"/>}
      />
    </FormGroup>
  );
}
