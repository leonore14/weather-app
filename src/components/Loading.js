import React from 'react';
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/core";

const override = css`
  margin: 30% auto 30% auto;
`;

const Loading =  ({ isLoading }) => {
    return(
    <BarLoader loading={isLoading} height={5} width={250} color={"#EC6D4C"} css={override} />
    )
}

export default Loading ;
