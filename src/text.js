import React, { Fragment } from "react"; // So it doesn't create a unnecessary node element. **Only available in react 16+

export const CustomText = (textInside) => <Fragment>{textInside}</Fragment>;
