import React from 'react'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

const Addquestion = () => {
    return ( 
        <div style={{ marginTop: "25px" }}>
        <TextField
          variant="outlined"
          InputLabelProps={{
            style: { width: "50vw" },
          }}
          style={{ width: "80%" }}
          rows={2}
          id="outlined-basic"
          label="سوال.."
          multiline
          dir="rtl !important"
          margin="normal"
        />
        <FormControl style={{ width: "100%" }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <TextField
              id="outlined-basic"
              placeholder="گزینه اول"
              variant="outlined"
              size="small"
              style={{
                width: "80%",
                borderRadius: "20%",
                marginTop: "16px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label=""
                    />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="outlined-basic"
              placeholder="گزینه دوم"
              variant="outlined"
              size="small"
              style={{
                width: "80%",
                borderRadius: "20%",
                marginTop: "16px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FormControlLabel
                      value="female1"
                      control={<Radio />}
                      label=""
                    />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="outlined-basic"
              placeholder="گزینه سوم"
              variant="outlined"
              size="small"
              style={{
                width: "80%",
                borderRadius: "20%",
                marginTop: "16px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FormControlLabel
                      value="female2"
                      control={<Radio />}
                      label=""
                      //   style={{backgroundColor:"blue"}}
                    />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="outlined-basic"
              placeholder="گزینه چهارم"
              variant="outlined"
              size="small"
              style={{
                width: "80%",
                borderRadius: "20%",
                marginTop: "16px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FormControlLabel
                      value="female3"
                      control={<Radio />}
                      label=""
                    />
                  </InputAdornment>
                ),
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>
     );
}
 
export default Addquestion;