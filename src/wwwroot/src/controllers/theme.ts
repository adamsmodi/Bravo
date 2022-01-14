/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
*/

import { Dispatchable } from '../helpers/dispatchable';
import { host, optionsController } from '../main';

export enum ThemeType {
    Auto = "Auto",
    Dark = "Dark",
    Light = "Light",
}

export interface ThemeChangeArg {
    theme: ThemeType,
    appliedTheme: ThemeType.Dark | ThemeType.Light
}
export class ThemeController extends Dispatchable {
    
    theme;
    deviceTheme;
    
    get appliedTheme() {
        if (this.theme == ThemeType.Auto) {
            return this.deviceTheme;
        } else {
            return this.theme;
        }
    }

    get isDark() {
        return this.appliedTheme == ThemeType.Dark;
    }
    get isLight() {
        return this.appliedTheme == ThemeType.Light;
    }
    
    constructor(initialTheme = ThemeType.Auto) {
        super();
        
        this.theme = initialTheme;

        if (window.matchMedia) {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

            this.deviceTheme = (mediaQuery.matches ? ThemeType.Dark : ThemeType.Light);

            mediaQuery.addEventListener("change", e => {
                this.deviceTheme = (e.matches ? ThemeType.Dark : ThemeType.Light);
                this.apply();
            });
        } else {
            this.deviceTheme = ThemeType.Light;
        }

        optionsController.on("change", (changedOptions: any) => {
            if ("theme" in changedOptions)
                this.apply(changedOptions.theme);
        });

        this.apply(this.theme);
    }

    change(theme: ThemeType) {
        optionsController.update("theme", theme);
        host.changeTheme(theme);
        this.apply(theme);
    }

    apply(theme?: ThemeType) {

        if (theme)
            this.theme = theme;

        this.trigger("change", <ThemeChangeArg>{ theme: this.theme, appliedTheme: this.appliedTheme });

        if (document.body.classList.contains("no-theme")) return;

        if (this.appliedTheme == ThemeType.Dark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }
}