import React from "react";
import {MenuItem, MenuItemProps, Select, SelectProps} from "@mui/material";

/**
 * Element representing an item in a dropdown
 * @param label - The label to display for the dropdown item
 * @param value - The value associated with the dropdown item
 * @param key - Optional key for the dropdown item, defaults to value if not provided
 */
export interface DropdownItem<T extends string | number> extends Omit<MenuItemProps, "value" | "key" | "children">{
    label: string;
    value: T;
    key?: string;
}

/**
 * Props for the Dropdown component
 * @param items - The items to display in the dropdown
 * @param visibleItemsCount - The number of items to display before scrolling
 */
export interface DropdownProps<T extends string | number> extends Omit<SelectProps<T>, "children"> {
    items: DropdownItem<T>[];
    visibleItemsCount?: number;
}

/**
 * Dropdown component
 * @param items - The items to display in the dropdown
 * @param visibleItemsCount - The number of items to display before scrolling
 * @param selectProps - Additional props to pass to the underlying Select component
 * @constructor
 */
export function Dropdown<T extends string | number>({items, visibleItemsCount, ...selectProps}: DropdownProps<T>): React.JSX.Element {
    const MenuProps: DropdownProps<T>["MenuProps"] = visibleItemsCount ? {
        slotProps: {
            paper: {
                style: {
                    maxHeight: 48 * visibleItemsCount + 8,
                },
            },
        },
    } : undefined;

    return (
        <Select {...selectProps} MenuProps={MenuProps ?? selectProps.MenuProps}>
            {items.map(({ label, value, key, ...menuItemProps }: DropdownItem<T>): React.JSX.Element => (
                <MenuItem key={key ?? value} value={value} {...menuItemProps}>
                    {label}
                </MenuItem>
            ))}
        </Select>
    )
}