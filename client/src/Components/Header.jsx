import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

export default function Header() {
  const testHeader = () => {
    return <Toolbar>This will be our Header</Toolbar>;
  };
  
  return (
    <header>
      <AppBar>{testHeader()}</AppBar>
    </header>
  );
}