/**************************************
 * REOPEN THE INTERFACE AND USE CASES *
 **************************************/

// Homepage Interface Declaration
interface Settings {
    readonly theme: boolean;
    font: string;
}

// Articles page interface reopening
interface Settings {
    sidebar: boolean;
}

interface Settings {
    external: boolean;
}

// Create an object 'userSettings' that adheres to the merged 'Settings' interface
const userSettings: Settings = {
    theme: true,
    font: 'Open Sans',
    sidebar: false,
    external: false,
}