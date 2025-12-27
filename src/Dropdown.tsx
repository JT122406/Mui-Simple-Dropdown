import React from "react";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";

/**
 * Element representing an item in a dropdown
 * @param label - The label to display for the dropdown item
 * @param value - The value associated with the dropdown item
 * @param key - Optional key for the dropdown item, defaults to value if not provided
 */
export interface DropdownItem<T extends string | number> {
    label: string;
    value: T;
    key?: string;
}

/**
 * Props for the Dropdown component
 * @param items - The items to display in the dropdown
 * @param value - The currently selected item
 * @param onChange - Callback function to invoke when an item is selected
 */
export interface DropdownProps<T extends string | number> {
    items: DropdownItem<T>[];
    value?: T;
    onChange: (value: T) => void;
}

/**
 * Dropdown component
 * @param items - The items to display in the dropdown
 * @param value - The currently selected item
 * @param onChange - Callback function to invoke when an item is selected
 * @param selectProps - Additional props to pass to the underlying Select component
 * @constructor
 */
export function Dropdown<T extends string | number>({items, value, onChange, ...selectProps}: DropdownProps<T>): React.JSX.Element {
    return (
        <Select {...selectProps} value={value} onChange={(e: SelectChangeEvent<T>): void => onChange(e.target.value as T)}>
            {items.map((item: DropdownItem<T>): React.JSX.Element =>
                <MenuItem key={item.key ?? item.value} value={item.value}>
                    {item.label}
                </MenuItem>
            )}
        </Select>
    )
}