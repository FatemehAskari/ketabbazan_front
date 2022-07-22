import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  ButtonGroup,
  Button,
  ClickAwayListener,
  AppBar,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { Calculate } from '@mui/icons-material';

export default function SearchBar({open,close}) {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleSearch = (event) => {
    console.log(`/Searchbook/?q=${search}`);
    history.push(`/Searchbook/?q=${search}`);
    event.preventDefault();
  };
  return (
    <>
      {open && (
        <ClickAwayListener onClickAway={close}>
          <AppBar className="Searchbar_appbar" sx={{ zIndex: "25"}}>
            <Paper
              onSubmit={handleSearch}
              component="form"
              style={{
                display: "flex",
                padding: "0 7%",
                justifyContent: "center",
                alignItems: "center",
                height: "63px",
                width: "100%",
                marginTop: "63px",
              }}
            >
              <IconButton
                type="submit"
                sx={{ p: "10px", color: "#1565C0" }}
                aria-label="search"

              >
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="جستجوی کتاب و نویسنده"
                inputProps={{ "aria-label": "سرچ کتاب ها" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <IconButton
                sx={{ p: "10px", color: "#1565C0" }}
                aria-label="search"
                onClick={close}
              >
                <CloseIcon />
              </IconButton>
            </Paper>
          </AppBar>
        </ClickAwayListener>
      )}
    </>
  );
}
