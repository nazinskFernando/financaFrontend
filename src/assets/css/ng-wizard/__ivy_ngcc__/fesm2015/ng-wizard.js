import { __decorate, __param, __metadata } from 'tslib';
import { InjectionToken, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, Input, Type, HostBinding, Directive, ViewContainerRef, ComponentFactoryResolver, ViewChild, Component, forwardRef, EventEmitter, ContentChildren, QueryList, Output, NgModule } from '@angular/core';
import { Subject, of, isObservable } from 'rxjs';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NgWizardStepComponent_ng_template_2_Template(rf, ctx) { }
const _c0 = ["*"];
function NgWizardComponent_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 7);
    ɵngcc0.ɵɵlistener("click", function NgWizardComponent_li_2_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const step_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6._showSelectedStep($event, step_r3); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelement(2, "br");
    ɵngcc0.ɵɵelementStart(3, "small");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    const i_r4 = ctx_r9.index;
    const step_r3 = ctx_r9.$implicit;
    ɵngcc0.ɵɵpropertyInterpolate1("href", "#step-", i_r4, "", ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(step_r3.title);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(step_r3.description);
} }
function NgWizardComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 5);
    ɵngcc0.ɵɵtemplate(1, NgWizardComponent_li_2_a_1_Template, 5, 3, "a", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r3 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0._getStepCssClass(step_r3));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !step_r3.isHidden);
} }
function NgWizardComponent_div_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NgWizardComponent_div_3_button_2_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13._showPreviousStep($event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r10.styles.previousButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r10.config.lang.previous);
} }
function NgWizardComponent_div_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NgWizardComponent_div_3_button_3_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15._showNextStep($event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r11.styles.nextButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r11.config.lang.next);
} }
function NgWizardComponent_div_3_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NgWizardComponent_div_3_div_4_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r21); const button_r18 = ctx.$implicit; const ctx_r20 = ɵngcc0.ɵɵnextContext(3); return ctx_r20._extraButtonClicked(button_r18); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r18 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngClass", button_r18.class);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(button_r18.text);
} }
function NgWizardComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtemplate(1, NgWizardComponent_div_3_div_4_button_1_Template, 2, 2, "button", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r12.config.toolbarSettings.toolbarExtraButtons);
} }
function NgWizardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵelementStart(1, "div", 8);
    ɵngcc0.ɵɵtemplate(2, NgWizardComponent_div_3_button_2_Template, 2, 2, "button", 9);
    ɵngcc0.ɵɵtemplate(3, NgWizardComponent_div_3_button_3_Template, 2, 2, "button", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, NgWizardComponent_div_3_div_4_Template, 2, 1, "div", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.styles.toolbarTop);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.showPreviousButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.showNextButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.showExtraButtons);
} }
function NgWizardComponent_div_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NgWizardComponent_div_6_button_2_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25._showPreviousStep($event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r22.styles.previousButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r22.config.lang.previous);
} }
function NgWizardComponent_div_6_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NgWizardComponent_div_6_button_3_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r27 = ɵngcc0.ɵɵnextContext(2); return ctx_r27._showNextStep($event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r23.styles.nextButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r23.config.lang.next);
} }
function NgWizardComponent_div_6_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NgWizardComponent_div_6_div_4_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r33); const button_r30 = ctx.$implicit; const ctx_r32 = ɵngcc0.ɵɵnextContext(3); return ctx_r32._extraButtonClicked(button_r30); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r30 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngClass", button_r30.class);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(button_r30.text);
} }
function NgWizardComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtemplate(1, NgWizardComponent_div_6_div_4_button_1_Template, 2, 2, "button", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r24.config.toolbarSettings.toolbarExtraButtons);
} }
function NgWizardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵelementStart(1, "div", 8);
    ɵngcc0.ɵɵtemplate(2, NgWizardComponent_div_6_button_2_Template, 2, 2, "button", 9);
    ɵngcc0.ɵɵtemplate(3, NgWizardComponent_div_6_button_3_Template, 2, 2, "button", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, NgWizardComponent_div_6_div_4_Template, 2, 1, "div", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r2.styles.toolbarBottom);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.showPreviousButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.showNextButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.showExtraButtons);
} }
var TOOLBAR_POSITION;
(function (TOOLBAR_POSITION) {
    TOOLBAR_POSITION["none"] = "none";
    TOOLBAR_POSITION["top"] = "top";
    TOOLBAR_POSITION["bottom"] = "bottom";
    TOOLBAR_POSITION["both"] = "both";
})(TOOLBAR_POSITION || (TOOLBAR_POSITION = {}));
var TOOLBAR_BUTTON_POSITION;
(function (TOOLBAR_BUTTON_POSITION) {
    TOOLBAR_BUTTON_POSITION["start"] = "start";
    TOOLBAR_BUTTON_POSITION["end"] = "end";
})(TOOLBAR_BUTTON_POSITION || (TOOLBAR_BUTTON_POSITION = {}));
// export enum TRANSITION_EFFECT {
//     none = 'none',
//     slide = 'slide',
//     fade = 'fade'
// }
var THEME;
(function (THEME) {
    THEME["default"] = "default";
    THEME["arrows"] = "arrows";
    THEME["circles"] = "circles";
    THEME["dots"] = "dots";
})(THEME || (THEME = {}));
var STEP_STATE;
(function (STEP_STATE) {
    STEP_STATE["normal"] = "normal";
    STEP_STATE["disabled"] = "disabled";
    STEP_STATE["error"] = "error";
    STEP_STATE["hidden"] = "hidden";
})(STEP_STATE || (STEP_STATE = {}));
var STEP_STATUS;
(function (STEP_STATUS) {
    STEP_STATUS["untouched"] = "untouched";
    STEP_STATUS["done"] = "done";
    STEP_STATUS["active"] = "active";
})(STEP_STATUS || (STEP_STATUS = {}));
var STEP_DIRECTIN;
(function (STEP_DIRECTIN) {
    STEP_DIRECTIN["forward"] = "forward";
    STEP_DIRECTIN["backward"] = "backward";
})(STEP_DIRECTIN || (STEP_DIRECTIN = {}));
var STEP_POSITION;
(function (STEP_POSITION) {
    STEP_POSITION["first"] = "first";
    STEP_POSITION["final"] = "final";
    STEP_POSITION["middle"] = "middle";
})(STEP_POSITION || (STEP_POSITION = {}));

const DEFAULT_CONFIG = {
    selected: 0,
    keyNavigation: true,
    cycleSteps: false,
    lang: {
        next: 'Next',
        previous: 'Previous'
    },
    toolbarSettings: {
        toolbarPosition: TOOLBAR_POSITION.bottom,
        toolbarButtonPosition: TOOLBAR_BUTTON_POSITION.end,
        showNextButton: true,
        showPreviousButton: true,
        toolbarExtraButtons: []
    },
    anchorSettings: {
        anchorClickable: true,
        enableAllAnchors: false,
        markDoneStep: true,
        markAllPreviousStepsAsDone: true,
        removeDoneStepOnNavigateBack: false,
        enableAnchorOnDoneStep: true
    },
    theme: THEME.default,
};

const NG_WIZARD_CONFIG_TOKEN = new InjectionToken('ngWizardCustom.config');

// https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
// Merge a `source` object to a `target` recursively
function merge(target, source) {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (let key of Object.keys(source)) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], merge(target[key], source[key]));
        }
    }
    // Join `target` and modified `source`
    Object.assign(target || {}, source);
    return target;
}

let NgWizardDataService = class NgWizardDataService {
    constructor(config) {
        this.config = config;
        this._defaultConfig = Object.assign({}, DEFAULT_CONFIG);
        if (this.config) {
            this._defaultConfig = merge(this._defaultConfig, this.config);
        }
        // Observable sources
        this._resetWizard = new Subject();
        this._showNextStep = new Subject();
        this._showPreviousStep = new Subject();
        this._showStep = new Subject();
        this._setTheme = new Subject();
        this._stepChangedArgs = new Subject();
        // Observable streams
        this.resetWizard$ = this._resetWizard.asObservable();
        this.showNextStep$ = this._showNextStep.asObservable();
        this.showPreviousStep$ = this._showPreviousStep.asObservable();
        this.showStep$ = this._showStep.asObservable();
        this.setTheme$ = this._setTheme.asObservable();
        this.stepChangedArgs$ = this._stepChangedArgs.asObservable();
    }
    getDefaultConfig() {
        return Object.assign({}, this._defaultConfig);
    }
    resetWizard() {
        this._resetWizard.next();
    }
    showNextStep() {
        this._showNextStep.next();
    }
    showPreviousStep() {
        this._showPreviousStep.next();
    }
    showStep(index) {
        this._showStep.next(index);
    }
    setTheme(theme) {
        this._setTheme.next(theme);
    }
    stepChanged(args) {
        this._stepChangedArgs.next(args);
    }
};
NgWizardDataService.ɵfac = function NgWizardDataService_Factory(t) { return new (t || NgWizardDataService)(ɵngcc0.ɵɵinject(NG_WIZARD_CONFIG_TOKEN, 8)); };
NgWizardDataService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NG_WIZARD_CONFIG_TOKEN,] }] }
];
NgWizardDataService.ɵprov = ɵɵdefineInjectable({ factory: function NgWizardDataService_Factory() { return new NgWizardDataService(ɵɵinject(NG_WIZARD_CONFIG_TOKEN, 8)); }, token: NgWizardDataService, providedIn: "root" });
NgWizardDataService = __decorate([ __param(0, Optional()), __param(0, Inject(NG_WIZARD_CONFIG_TOKEN)),
    __metadata("design:paramtypes", [Object])
], NgWizardDataService);

let NgWizardService = class NgWizardService {
    constructor(ngWizardDataService) {
        this.ngWizardDataService = ngWizardDataService;
    }
    reset() {
        this.ngWizardDataService.resetWizard();
    }
    next() {
        this.ngWizardDataService.showNextStep();
    }
    previous() {
        this.ngWizardDataService.showPreviousStep();
    }
    show(index) {
        this.ngWizardDataService.showStep(index);
    }
    theme(theme) {
        this.ngWizardDataService.setTheme(theme);
    }
    stepChanged() {
        return this.ngWizardDataService.stepChangedArgs$;
    }
};
NgWizardService.ɵfac = function NgWizardService_Factory(t) { return new (t || NgWizardService)(ɵngcc0.ɵɵinject(NgWizardDataService)); };
NgWizardService.ctorParameters = () => [
    { type: NgWizardDataService }
];
NgWizardService.ɵprov = ɵɵdefineInjectable({ factory: function NgWizardService_Factory() { return new NgWizardService(ɵɵinject(NgWizardDataService)); }, token: NgWizardService, providedIn: "root" });
NgWizardService = __decorate([ __metadata("design:paramtypes", [NgWizardDataService])
], NgWizardService);

let NgWizardStep = class NgWizardStep {
    get hidden() {
        return this.status != STEP_STATUS.active;
    }
};
NgWizardStep.ɵfac = function NgWizardStep_Factory(t) { return new (t || NgWizardStep)(); };
NgWizardStep.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgWizardStep, hostVars: 1, hostBindings: function NgWizardStep_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("hidden", ctx.hidden);
    } }, inputs: { title: "title", description: "description", state: "state", component: "component", canEnter: "canEnter", canExit: "canExit" } });
__decorate([
    Input(),
    __metadata("design:type", String)
], NgWizardStep.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgWizardStep.prototype, "description", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgWizardStep.prototype, "state", void 0);
__decorate([
    Input(),
    __metadata("design:type", Type)
], NgWizardStep.prototype, "component", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgWizardStep.prototype, "canEnter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgWizardStep.prototype, "canExit", void 0);
__decorate([
    HostBinding('hidden'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], NgWizardStep.prototype, "hidden", null);

let NgWizardStepContentDirective = class NgWizardStepContentDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
NgWizardStepContentDirective.ɵfac = function NgWizardStepContentDirective_Factory(t) { return new (t || NgWizardStepContentDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
NgWizardStepContentDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgWizardStepContentDirective, selectors: [["", "ngWizardStepContent", ""]] });
NgWizardStepContentDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
NgWizardStepContentDirective = __decorate([ __metadata("design:paramtypes", [ViewContainerRef])
], NgWizardStepContentDirective);

var NgWizardStepComponent_1;
let NgWizardStepComponent = NgWizardStepComponent_1 = class NgWizardStepComponent extends NgWizardStep {
    constructor(componentFactoryResolver) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        this.loadComponent();
    }
    loadComponent() {
        if (!this.component) {
            return;
        }
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        this.stepContent.viewContainerRef.clear();
        this.componentRef = this.stepContent.viewContainerRef.createComponent(componentFactory);
    }
    get isHidden() {
        return this.state == STEP_STATE.hidden;
    }
};
NgWizardStepComponent.ɵfac = function NgWizardStepComponent_Factory(t) { return new (t || NgWizardStepComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver)); };
NgWizardStepComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgWizardStepComponent, selectors: [["ng-wizard-step"]], viewQuery: function NgWizardStepComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(NgWizardStepContentDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.stepContent = _t.first);
    } }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: NgWizardStep, useExisting: forwardRef(() => NgWizardStepComponent_1) }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "tab-pane", "step-content", 2, "display", "block"], ["ngWizardStepContent", ""]], template: function NgWizardStepComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, NgWizardStepComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } }, directives: [NgWizardStepContentDirective], styles: [""] });
NgWizardStepComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
__decorate([
    ViewChild(NgWizardStepContentDirective, { static: true }),
    __metadata("design:type", NgWizardStepContentDirective)
], NgWizardStepComponent.prototype, "stepContent", void 0);
NgWizardStepComponent = NgWizardStepComponent_1 = __decorate([ __metadata("design:paramtypes", [ComponentFactoryResolver])
], NgWizardStepComponent);

let NgWizardComponent = class NgWizardComponent {
    constructor(ngWizardDataService) {
        this.ngWizardDataService = ngWizardDataService;
        this.stepChanged = new EventEmitter();
        this.themeChanged = new EventEmitter();
        this.reseted = new EventEmitter();
        this.styles = {};
        this.showToolbarTop = false;
        this.showPreviousButton = false;
        this.showNextButton = false;
        this.showToolbarBottom = false;
        this.showExtraButtons = false;
        this.currentStepIndex = null; // Active step index
    }
    get pConfig() {
        return this._pConfig || {};
    }
    set pConfig(config) {
        this._pConfig = config;
    }
    ngAfterContentInit() {
        this._backupStepStates();
        this._init();
        // Set toolbar
        this._setToolbar();
        // Assign plugin events
        this._setEvents();
        this.resetWizardWatcher = this.ngWizardDataService.resetWizard$.subscribe(() => this._reset());
        this.showNextStepWatcher = this.ngWizardDataService.showNextStep$.subscribe(() => this._showNextStep());
        this.showPreviousStepWatcher = this.ngWizardDataService.showPreviousStep$.subscribe(() => this._showPreviousStep());
        this.showStepWatcher = this.ngWizardDataService.showStep$.subscribe(index => this._showStep(index));
        this.setThemeWatcher = this.ngWizardDataService.setTheme$.subscribe(theme => this._setTheme(theme));
    }
    _init() {
        // set config
        let defaultConfig = this.ngWizardDataService.getDefaultConfig();
        this.config = merge(defaultConfig, this.pConfig);
        // set step states
        this._initSteps();
        // Set the elements
        this._initStyles();
        // Show the initial step
        this._showStep(this.config.selected);
    }
    _initSteps() {
        this.steps.forEach((step, index) => {
            step.index = index;
            step.status = step.status || STEP_STATUS.untouched;
            step.state = step.state || STEP_STATE.normal;
        });
        // Mark previous steps of the active step as done
        if (this.config.selected > 0
            && this.config.anchorSettings.markDoneStep
            && this.config.anchorSettings.markAllPreviousStepsAsDone) {
            this.steps.forEach(step => {
                if (step.state != STEP_STATE.disabled && step.state != STEP_STATE.hidden) {
                    step.status = step.index < this.config.selected ? STEP_STATUS.done : step.status;
                }
            });
        }
    }
    _backupStepStates() {
        this.steps.forEach(step => {
            step.initialStatus = step.status;
            step.initialState = step.state;
        });
    }
    _restoreStepStates() {
        this.steps.forEach(step => {
            step.status = step.initialStatus;
            step.state = step.initialState;
        });
    }
    // PRIVATE FUNCTIONS
    _initStyles() {
        // Set the main element
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
        // Set anchor elements
        this.styles.step = 'nav-item'; // li
        // Make the anchor clickable
        if (this.config.anchorSettings.enableAllAnchors && this.config.anchorSettings.anchorClickable) {
            this.styles.step += ' clickable';
        }
        // Set the toolbar styles
        this.styles.toolbarTop = 'btn-toolbar ng-wizard-toolbar ng-wizard-toolbar-top justify-content-' + this.config.toolbarSettings.toolbarButtonPosition;
        this.styles.toolbarBottom = 'btn-toolbar ng-wizard-toolbar ng-wizard-toolbar-bottom justify-content-' + this.config.toolbarSettings.toolbarButtonPosition;
        // Set previous&next buttons 
        this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev';
        this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next';
    }
    _setToolbar() {
        this.showToolbarTop = this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.top ||
            this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.both;
        this.showToolbarBottom = this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.bottom ||
            this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.both;
        this.showPreviousButton = this.config.toolbarSettings.showPreviousButton;
        this.showNextButton = this.config.toolbarSettings.showNextButton;
        this.showExtraButtons = this.config.toolbarSettings.toolbarExtraButtons && this.config.toolbarSettings.toolbarExtraButtons.length > 0;
    }
    _setEvents() {
        //TODO: keyNavigation
        // Keyboard navigation event
        if (this.config.keyNavigation) {
            // $(document).keyup(function (e) {
            //   mi._keyNav(e);
            // });
        }
    }
    _getStepCssClass(selectedStep) {
        let stepClass = this.styles.step;
        switch (selectedStep.state) {
            case STEP_STATE.disabled:
                stepClass += ' disabled';
                break;
            case STEP_STATE.error:
                stepClass += ' danger';
                break;
            case STEP_STATE.hidden:
                stepClass += ' hidden';
                break;
        }
        switch (selectedStep.status) {
            case STEP_STATUS.done:
                stepClass += ' done';
                break;
            case STEP_STATUS.active:
                stepClass += ' active';
                break;
        }
        return stepClass;
    }
    _showSelectedStep(event, selectedStep) {
        event.preventDefault();
        if (!this.config.anchorSettings.anchorClickable) {
            return;
        }
        if (!this.config.anchorSettings.enableAnchorOnDoneStep && selectedStep.status == STEP_STATUS.done) {
            return true;
        }
        if (selectedStep.index != this.currentStepIndex) {
            if (this.config.anchorSettings.enableAllAnchors && this.config.anchorSettings.anchorClickable) {
                this._showStep(selectedStep.index);
            }
            else {
                if (selectedStep.status == STEP_STATUS.done) {
                    this._showStep(selectedStep.index);
                }
            }
        }
    }
    _showNextStep(event) {
        if (event) {
            event.preventDefault();
        }
        // Find the next not disabled & hidden step
        let filteredSteps = this.steps.filter(step => {
            return step.index > (this.currentStepIndex == null ? -1 : this.currentStepIndex)
                && step.state != STEP_STATE.disabled
                && step.state != STEP_STATE.hidden;
        });
        if (filteredSteps.length == 0) {
            if (!this.config.cycleSteps) {
                return;
            }
            this._showStep(0);
        }
        else {
            this._showStep(filteredSteps.shift().index);
        }
    }
    _showPreviousStep(event) {
        if (event) {
            event.preventDefault();
        }
        // Find the previous not disabled & hidden step
        let filteredSteps = this.steps.filter(step => {
            return step.index < (this.currentStepIndex == null && this.config.cycleSteps ? this.steps.length : this.currentStepIndex)
                && step.state != STEP_STATE.disabled
                && step.state != STEP_STATE.hidden;
        });
        if (filteredSteps.length == 0) {
            if (!this.config.cycleSteps) {
                return;
            }
            this._showStep(this.steps.length - 1);
        }
        else {
            this._showStep(filteredSteps.pop().index);
        }
    }
    _showStep(selectedStepIndex) {
        // If step not found, skip
        if (selectedStepIndex >= this.steps.length || selectedStepIndex < 0) {
            return;
        }
        // If current step is requested again, skip
        if (selectedStepIndex == this.currentStepIndex) {
            return;
        }
        let selectedStep = this.steps.toArray()[selectedStepIndex];
        // If it is a disabled or hidden step, skip
        if (selectedStep.state == STEP_STATE.disabled || selectedStep.state == STEP_STATE.hidden) {
            return;
        }
        this._showLoader();
        return this._isStepChangeValid(selectedStep, this.currentStep && this.currentStep.canExit).toPromise()
            .then(isValid => {
            if (isValid) {
                return this._isStepChangeValid(selectedStep, selectedStep.canEnter).toPromise();
            }
            return of(isValid).toPromise();
        })
            .then(isValid => {
            if (isValid) {
                // Load step content
                this._loadStepContent(selectedStep);
            }
        })
            .finally(() => this._hideLoader());
    }
    _isStepChangeValid(selectedStep, condition) {
        if (typeof condition === typeof true) {
            return of(condition);
        }
        else if (condition instanceof Function) {
            let direction = this._getStepDirection(selectedStep.index);
            let result = condition({ direction: direction, fromStep: this.currentStep, toStep: selectedStep });
            if (isObservable(result)) {
                return result;
            }
            else if (typeof result === typeof true) {
                return of(result);
            }
            else {
                return of(false);
            }
        }
        return of(true);
    }
    _loadStepContent(selectedStep) {
        // Update controls
        this._setAnchor(selectedStep);
        // Set the buttons based on the step
        this._setButtons(selectedStep.index);
        // Trigger "stepChanged" event
        const args = {
            step: selectedStep,
            previousStep: this.currentStep,
            direction: this._getStepDirection(selectedStep.index),
            position: this._getStepPosition(selectedStep.index)
        };
        this.stepChanged.emit(args);
        this.ngWizardDataService.stepChanged(args);
        // Update the current index
        this.currentStepIndex = selectedStep.index;
        this.currentStep = selectedStep;
    }
    _setAnchor(selectedStep) {
        // Current step anchor > Remove other classes and add done class
        if (this.currentStep) {
            this.currentStep.status = STEP_STATUS.untouched;
            if (this.config.anchorSettings.markDoneStep) {
                this.currentStep.status = STEP_STATUS.done;
                if (this.config.anchorSettings.removeDoneStepOnNavigateBack) {
                    this.steps.forEach(step => {
                        if (step.index > selectedStep.index) {
                            step.status = STEP_STATUS.untouched;
                        }
                    });
                }
            }
        }
        // Next step anchor > Remove other classes and add active class
        selectedStep.status = STEP_STATUS.active;
    }
    _setButtons(index) {
        // Previous/Next Button enable/disable based on step
        if (!this.config.cycleSteps) {
            if (0 >= index) {
                this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev disabled';
            }
            else {
                this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev';
            }
            if (this.steps.length - 1 <= index) {
                this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next disabled';
            }
            else {
                this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next';
            }
        }
    }
    _extraButtonClicked(button) {
        if (button.event) {
            button.event();
        }
    }
    // HELPER FUNCTIONS
    _keyNav(event) {
        // Keyboard navigation
        switch (event.which) {
            case 37:
                // left
                this._showPreviousStep(event);
                event.preventDefault();
                break;
            case 39:
                // right
                this._showNextStep(event);
                event.preventDefault();
                break;
            default:
                return; // exit this handler for other keys
        }
    }
    _showLoader() {
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme + ' ng-wizard-loading';
    }
    _hideLoader() {
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
    }
    _getStepDirection(selectedStepIndex) {
        return (this.currentStepIndex != null && this.currentStepIndex != selectedStepIndex) ?
            (this.currentStepIndex < selectedStepIndex ? STEP_DIRECTIN.forward : STEP_DIRECTIN.backward) : null;
    }
    _getStepPosition(selectedStepIndex) {
        return (selectedStepIndex == 0) ? STEP_POSITION.first : (selectedStepIndex == this.steps.length - 1 ? STEP_POSITION.final : STEP_POSITION.middle);
    }
    // PUBLIC FUNCTIONS
    _setTheme(theme) {
        if (this.config.theme == theme) {
            return false;
        }
        this.config.theme = theme;
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
        // Trigger "themeChanged" event
        this.themeChanged.emit(this.config.theme);
    }
    _reset() {
        // Reset all elements and classes
        this.currentStepIndex = null;
        this.currentStep = null;
        this._restoreStepStates();
        this._init();
        // Trigger "reseted" event
        this.reseted.emit();
    }
    ngOnDestroy() {
        if (this.resetWizardWatcher) {
            this.resetWizardWatcher.unsubscribe();
        }
        if (this.showNextStepWatcher) {
            this.showNextStepWatcher.unsubscribe();
        }
        if (this.showPreviousStepWatcher) {
            this.showPreviousStepWatcher.unsubscribe();
        }
        if (this.showStepWatcher) {
            this.showStepWatcher.unsubscribe();
        }
        if (this.setThemeWatcher) {
            this.setThemeWatcher.unsubscribe();
        }
    }
};
NgWizardComponent.ɵfac = function NgWizardComponent_Factory(t) { return new (t || NgWizardComponent)(ɵngcc0.ɵɵdirectiveInject(NgWizardDataService)); };
NgWizardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgWizardComponent, selectors: [["ng-wizard"]], contentQueries: function NgWizardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgWizardStep, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.steps = _t);
    } }, inputs: { pConfig: ["config", "pConfig"] }, outputs: { stepChanged: "stepChanged", themeChanged: "themeChanged", reseted: "reseted" }, ngContentSelectors: _c0, decls: 7, vars: 4, consts: [["id", "ngwizard", 3, "ngClass"], [1, "nav", "nav-tabs", "step-anchor"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngIf"], [1, "ng-wizard-container", "tab-content"], [3, "ngClass"], ["class", "nav-link", 3, "href", "click", 4, "ngIf"], [1, "nav-link", 3, "href", "click"], ["role", "group", 1, "btn-group", "mr-2", "ng-wizard-btn-group"], ["type", "button", 3, "ngClass", "click", 4, "ngIf"], ["class", "btn-group mr-2 ng-wizard-btn-group-extra", "role", "group", 4, "ngIf"], ["type", "button", 3, "ngClass", "click"], ["role", "group", 1, "btn-group", "mr-2", "ng-wizard-btn-group-extra"], ["type", "button", 3, "ngClass", "click", 4, "ngFor", "ngForOf"]], template: function NgWizardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ul", 1);
        ɵngcc0.ɵɵtemplate(2, NgWizardComponent_li_2_Template, 2, 2, "li", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, NgWizardComponent_div_3_Template, 5, 4, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NgWizardComponent_div_6_Template, 5, 4, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.styles.main);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.steps);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showToolbarTop);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showToolbarBottom);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf], styles: [""] });
NgWizardComponent.ctorParameters = () => [
    { type: NgWizardDataService }
];
__decorate([
    ContentChildren(NgWizardStep),
    __metadata("design:type", QueryList)
], NgWizardComponent.prototype, "steps", void 0);
__decorate([
    Input('config'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgWizardComponent.prototype, "pConfig", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgWizardComponent.prototype, "stepChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgWizardComponent.prototype, "themeChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgWizardComponent.prototype, "reseted", void 0);
NgWizardComponent = __decorate([ __metadata("design:paramtypes", [NgWizardDataService])
], NgWizardComponent);

var NgWizardModule_1;
let NgWizardModule = NgWizardModule_1 = class NgWizardModule {
    /**
     * forRoot
     * @returns A module with its provider dependencies
     */
    static forRoot(ngWizardConfig) {
        return {
            ngModule: NgWizardModule_1,
            providers: [
                {
                    provide: NG_WIZARD_CONFIG_TOKEN,
                    useValue: ngWizardConfig
                }
            ]
        };
    }
};
NgWizardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgWizardModule });
NgWizardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgWizardModule_Factory(t) { return new (t || NgWizardModule)(); }, imports: [[CommonModule]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgWizardDataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NG_WIZARD_CONFIG_TOKEN]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgWizardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: NgWizardDataService }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgWizardStep, [{
        type: Directive
    }], null, { hidden: [{
            type: HostBinding,
            args: ['hidden']
        }], title: [{
            type: Input
        }], description: [{
            type: Input
        }], state: [{
            type: Input
        }], component: [{
            type: Input
        }], canEnter: [{
            type: Input
        }], canExit: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgWizardStepContentDirective, [{
        type: Directive,
        args: [{
                selector: '[ngWizardStepContent]'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgWizardStepComponent, [{
        type: Component,
        args: [{
                selector: 'ng-wizard-step',
                template: "<div class=\"tab-pane step-content\" style=\"display: block\">\r\n    <ng-content></ng-content>\r\n    <ng-template ngWizardStepContent></ng-template>\r\n</div>",
                providers: [
                    { provide: NgWizardStep, useExisting: forwardRef(() => NgWizardStepComponent_1) }
                ],
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }]; }, { stepContent: [{
            type: ViewChild,
            args: [NgWizardStepContentDirective, { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgWizardComponent, [{
        type: Component,
        args: [{
                selector: 'ng-wizard',
                template: "<div id=\"ngwizard\" [ngClass]=\"styles.main\">\r\n    <ul class=\"nav nav-tabs step-anchor\">\r\n        <li *ngFor=\"let step of steps; let i = index\" [ngClass]=\"_getStepCssClass(step)\">\r\n            <a href=\"#step-{{ i }}\" (click)=\"_showSelectedStep($event, step)\" *ngIf=\"!step.isHidden\"\r\n                class=\"nav-link\">{{ step.title }}<br /><small>{{ step.description }}</small></a>\r\n        </li>\r\n    </ul>\r\n\r\n    <div *ngIf=\"showToolbarTop\" [ngClass]=\"styles.toolbarTop\">\r\n        <div class=\"btn-group mr-2 ng-wizard-btn-group\" role=\"group\">\r\n            <button *ngIf=\"showPreviousButton\" [ngClass]=\"styles.previousButton\" type=\"button\"\r\n                (click)=\"_showPreviousStep($event)\">{{ config!.lang!.previous }}</button>\r\n            <button *ngIf=\"showNextButton\" [ngClass]=\"styles.nextButton\" type=\"button\"\r\n                (click)=\"_showNextStep($event)\">{{ config!.lang!.next }}</button>\r\n        </div>\r\n\r\n        <div *ngIf=\"showExtraButtons\" class=\"btn-group mr-2 ng-wizard-btn-group-extra\" role=\"group\">\r\n            <button *ngFor=\"let button of config!.toolbarSettings!.toolbarExtraButtons; let j = index\"\r\n                [ngClass]=\"button.class\" type=\"button\" (click)=\"_extraButtonClicked(button)\">{{ button.text }}</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ng-wizard-container tab-content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n\r\n    <div *ngIf=\"showToolbarBottom\" [ngClass]=\"styles.toolbarBottom\">\r\n        <div class=\"btn-group mr-2 ng-wizard-btn-group\" role=\"group\">\r\n            <button *ngIf=\"showPreviousButton\" [ngClass]=\"styles.previousButton\" type=\"button\"\r\n                (click)=\"_showPreviousStep($event)\">{{ config!.lang!.previous }}</button>\r\n            <button *ngIf=\"showNextButton\" [ngClass]=\"styles.nextButton\" type=\"button\"\r\n                (click)=\"_showNextStep($event)\">{{ config!.lang!.next }}</button>\r\n        </div>\r\n\r\n        <div *ngIf=\"showExtraButtons\" class=\"btn-group mr-2 ng-wizard-btn-group-extra\" role=\"group\">\r\n            <button *ngFor=\"let button of config!.toolbarSettings!.toolbarExtraButtons; let j = index\"\r\n                [ngClass]=\"button.class\" type=\"button\" (click)=\"_extraButtonClicked(button)\">{{ button.text }}</button>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [""]
            }]
    }], function () { return [{ type: NgWizardDataService }]; }, { stepChanged: [{
            type: Output
        }], themeChanged: [{
            type: Output
        }], reseted: [{
            type: Output
        }], pConfig: [{
            type: Input,
            args: ['config']
        }], steps: [{
            type: ContentChildren,
            args: [NgWizardStep]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgWizardModule, { declarations: function () { return [NgWizardComponent, NgWizardStepComponent, NgWizardStepContentDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgWizardComponent, NgWizardStepComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgWizardModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [NgWizardComponent, NgWizardStepComponent, NgWizardStepContentDirective],
                exports: [NgWizardComponent, NgWizardStepComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-wizard
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgWizardComponent, NgWizardModule, NgWizardService, NgWizardStep, NgWizardStepComponent, STEP_DIRECTIN, STEP_POSITION, STEP_STATE, THEME, TOOLBAR_BUTTON_POSITION, TOOLBAR_POSITION, NgWizardDataService as ɵa, NG_WIZARD_CONFIG_TOKEN as ɵb, NgWizardStepContentDirective as ɵc };

//# sourceMappingURL=ng-wizard.js.map