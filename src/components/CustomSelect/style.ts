import { StylesConfig } from "react-select";
import { IOption } from "../../types";

export const customStyles: StylesConfig<IOption> = {
    control: (styles) => ({
      ...styles,
      borderRadius: "5px",
      marginLeft: "116px",
      marginRight: "20px",
      marginTop: "20px",
      width: "80px",
      height: "30px",
      fontSize: "12px",
      padding: "0"
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: "none",
    }),
    option: (styles) => ({
        ...styles,
        fontSize: "12px",
        textAlign: "center",
      })
  };
  