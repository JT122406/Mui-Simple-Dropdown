import React from "react";
import {MenuItem, Select} from "@mui/material";

export interface DropdownItem<T extends string | number> {
    label: string;
    value: T;
    key?: string;
}

export interface DropdownProps<T extends string | number> {
    items: DropdownItem<T>[];
    onChange: (value: T) => void;
}

export function Dropdown<T extends string | number>({items, onChange, ...selectProps}: DropdownProps<T>): React.JSX.Element {
    return (
        <Select {...selectProps}>
            {items.map((item: DropdownItem<T>): React.JSX.Element =>
                <MenuItem key={item.key ?? item.value} value={item.value}>
                    {item.label}
                </MenuItem>
            )}
        </Select>
    )
}