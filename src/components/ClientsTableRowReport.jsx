import { Button, ButtonGroup, Grow, MenuItem, MenuList, Paper, Popper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function ClientsTableRowReport({ item, index }) {







    return (
        <>
            <TableRow >
                <TableCell>
                    {new Date((item.created_at * 1000)).toLocaleDateString()}
                    <br />
                    {item.src}
                </TableCell>
                <TableCell>
                    {item.status}
                    {item.comment && (
                        <>:
                            <br />
                            {/* <br /> */}
                            {item.comment}
                        </>
                    )}

                </TableCell>

            </TableRow>

        </>

    );
}

export default ClientsTableRowReport;