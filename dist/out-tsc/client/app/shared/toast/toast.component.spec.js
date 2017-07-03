"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var toast_component_1 = require("./toast.component");
describe('ToastComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [toast_component_1.ToastComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(toast_component_1.ToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should not have message set nor DOM element', function () {
        expect(component.message.body).toBeFalsy();
        expect(component.message.type).toBeFalsy();
        var de = fixture.debugElement.query(platform_browser_1.By.css('div'));
        expect(de).toBeNull();
    });
    it('should set the message and create the DOM element', function () {
        var mockMessage = {
            body: 'test message',
            type: 'warning'
        };
        component.setMessage(mockMessage.body, mockMessage.type);
        expect(component.message.body).toBe(mockMessage.body);
        expect(component.message.type).toBe(mockMessage.type);
        fixture.detectChanges();
        var de = fixture.debugElement.query(platform_browser_1.By.css('div'));
        var el = de.nativeElement;
        expect(de).toBeDefined();
        expect(el.textContent).toContain(mockMessage.body);
        expect(el.className).toContain(mockMessage.type);
    });
});
//# sourceMappingURL=toast.component.spec.js.map