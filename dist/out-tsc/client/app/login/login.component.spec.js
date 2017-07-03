"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var login_component_1 = require("./login.component");
describe('LoginComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [login_component_1.LoginComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(login_component_1.LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    /*it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('should display the string "Login" in h4', () => {
      const el = fixture.debugElement.query(By.css('h4')).nativeElement;
      expect(el.textContent).toContain('Login');
    });*/
});
//# sourceMappingURL=login.component.spec.js.map