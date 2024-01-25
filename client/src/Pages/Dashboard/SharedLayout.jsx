import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Components";
import styled from "styled-components";
const SharedLayout = () => {
  return (
    <Wrapper>
    <Outlet/>
  </Wrapper>
  )
}

export default SharedLayout


//////// styles
const Wrapper = styled.main`
  border:1px solid green;

`