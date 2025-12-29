import React from "react";
import {MenuItem, Select, SelectProps} from "@mui/material";

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
 */
export interface DropdownProps<T extends string | number> extends Omit<SelectProps<T>, "children"> {
    items: DropdownItem<T>[];
}

/**
 * Dropdown component
 * @param items - The items to display in the dropdown
 * @param selectProps - Additional props to pass to the underlying Select component
 * @constructor
 */
export function Dropdown<T extends string | number>({items, ...selectProps}: DropdownProps<T>): React.JSX.Element {
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