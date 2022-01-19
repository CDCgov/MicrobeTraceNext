import { Injectable } from '@angular/core';
import { UiCustomizationSettingsDto } from '@shared/service-proxies/service-proxies';

@Injectable()
export class AppUiCustomizationService {

    private _theme: UiCustomizationSettingsDto;

    init(theme: UiCustomizationSettingsDto): void {
        this._theme = theme;
    }

    getContainerClass() {
        if (this._theme.baseSettings.layout.layoutType === 'fluid') {
            return 'm-container--fluid';
        }

        return 'm-container--responsive m-container--xxl';
    }

    private isLeftMenuUsed(): boolean {
        return this._theme.baseSettings.menu.position === 'left';
    }

    getAppModuleBodyClass(): string {
        let topMenuUsed = this._theme.baseSettings.menu.position === 'top';

        return 'm-page--' + this._theme.baseSettings.layout.layoutType + ' m--skin-' + this._theme.baseSettings.layout.contentSkin + ' ' +
            (this._theme.baseSettings.layout.contentSkin !== '' ? ('m-content--skin-' + this._theme.baseSettings.layout.contentSkin) : '') + ' ' +
            'm-header--' + (this._theme.baseSettings.header.desktopFixedHeader ? 'fixed' : 'static') + ' ' +
            (this._theme.baseSettings.header.mobileFixedHeader ? 'm-header--fixed-mobile' : '') + ' ' +
            ((this._theme.baseSettings.menu.fixedAside && !topMenuUsed ? 'm-aside-left--fixed' : '')) + ' ' +
            (this._theme.baseSettings.menu.defaultMinimizedAside ? 'm-aside-left--minimize m-brand--minimize' : '') + ' ' +
            (this._theme.baseSettings.menu.defaultHiddenAside || this._theme.baseSettings.menu.position === 'top' ? 'm-aside-left--hide' : '') + ' ' +
            (this.isLeftMenuUsed() ? 'm-aside-left--enabled' : '') + ' ' +
            'm-aside-left--skin-' + this._theme.baseSettings.menu.asideSkin + ' ' +
            'm-aside-left--offcanvas' + ' ' +
            (this._theme.baseSettings.footer.fixedFooter && this._theme.baseSettings.layout.layoutType !== 'boxed' ? 'm-footer--fixed' : '') + ' ' +
            (this._theme.baseSettings.layout.fixedBody ? 'm-body--fixed' : '') + ' ' +
            (this._theme.baseSettings.layout.mobileFixedBody ? 'm-body--mobile-fixed' : '');
    }

    getAccountModuleBodyClass() {
        return 'm--skin- m-header--fixed m-header--fixed-mobile ' + (this.isLeftMenuUsed() ? ' m-aside-left--enabled' : '') + ' m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }

    getSelectEditionBodyClass() {
        return 'm--skin-';
    }

    getSideBarMenuClass(): string {
        let menuCssClass = 'm-aside-menu m-aside-menu--skin-' + this._theme.baseSettings.menu.asideSkin;

        menuCssClass += ' m-aside-menu--submenu-skin-';
        menuCssClass += this._theme.baseSettings.menu.asideSkin;

        if (!this._theme.baseSettings.menu.fixedAside && this._theme.baseSettings.menu.submenuToggle === 'Dropdown') {
            menuCssClass += ' m-aside-menu--dropdown';
        }

        return menuCssClass;
    }

    getMenuListClass(): string {
        return 'm-menu__nav--dropdown-submenu-arrow';
    }

    getTopBarMenuContainerClass(): string {
        let menuCssClass = 'm-header__bottom m-header-menu--skin-' + this._theme.baseSettings.menu.asideSkin + ' m-container m-container--full-height m-container--responsive';
        if (this._theme.baseSettings.layout.layoutType === 'boxed') {
            return menuCssClass + ' m-container--xxl';
        }

        return menuCssClass;
    }

    getIsMenuScrollable(): boolean {
        return this._theme.allowMenuScroll && this._theme.baseSettings.menu.fixedAside;
    }

    getSideBarMenuItemClass(item, isMenuActive) {
        let menuCssClass = 'm-menu__item';

        if (item.items.length) {
            menuCssClass += ' m-menu__item--submenu';
        }

        if (isMenuActive) {
            menuCssClass += ' m-menu__item--open m-menu__item--expanded m-menu__item--active';
        }

        return menuCssClass;
    }
}
