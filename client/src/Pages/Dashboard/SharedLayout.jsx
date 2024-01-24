import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Components";
const SharedLayout = () => {
  return (
    <main>
    <Outlet/>
  </main>
  )
}

export default SharedLayout