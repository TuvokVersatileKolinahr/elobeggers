"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
describe('Component: App', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
            .compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));
    /*it('should create the app', async(() => {
      expect(component).toBeTruthy();
    }));
  
    it('should display the navigation bar correctly', () => {
      const de = fixture.debugElement.queryAll(By.css('a'));
      expect(de.length).toBe(3);
      expect(de[0].nativeElement.textContent).toContain('Home');
      expect(de[1].nativeElement.textContent).toContain('About');
      expect(de[0].attributes['routerLink']).toBe('/');
      expect(de[1].attributes['routerLink']).toBe('/about');
    });*/
});
//# sourceMappingURL=app.component.spec.js.map