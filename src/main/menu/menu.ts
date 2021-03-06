import { Menu } from "electron";

import { getMenuTemplate } from "./template";

const DISABLED_MENU_ITEMS = [
	"exportJsonMiniDiary",
	"exportMd",
	"exportPdf",
	"exportTxtDayOne",
	"importJsonDayOne",
	"importJsonJrnl",
	"importJsonMiniDiary",
	"importTxtDayOne",
	"lock",
	"previousDay",
	"nextDay",
	"previousMonth",
	"nextMonth",
];

let menu: Menu;

export function disableMenuItems(): void {
	DISABLED_MENU_ITEMS.forEach(id => {
		menu.getMenuItemById(id).enabled = false;
	});
}

export function enableMenuItems(): void {
	DISABLED_MENU_ITEMS.forEach(id => {
		menu.getMenuItemById(id).enabled = true;
	});
}

// Build menu
const template = getMenuTemplate();
menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
