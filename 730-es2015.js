(self.webpackChunknote=self.webpackChunknote||[]).push([[730],{19730:function(e,t,r){"use strict";r.r(t),r.d(t,{DepartmentListModule:function(){return J}});var s=r(61116),n=r(14969),i=r(8361),o=r(11462),a=r(35366),p=r(50052),l=r(65916),u=r(28451),c=r(94217),d=r(81357),m=r(49783),h=r(14313),g=r(5590),Z=r(13682),f=r(28302);function b(e,t){1&e&&(a.TgZ(0,"tr"),a.TgZ(1,"th"),a._uU(2),a.ALo(3,"translate"),a.qZA(),a.TgZ(4,"th"),a._uU(5),a.ALo(6,"translate"),a.qZA(),a.TgZ(7,"th"),a._uU(8),a.ALo(9,"translate"),a.qZA(),a.TgZ(10,"th"),a._uU(11),a.ALo(12,"translate"),a.qZA(),a.qZA()),2&e&&(a.xp6(2),a.Oqu(a.lcZ(3,4,"name")),a.xp6(3),a.Oqu(a.lcZ(6,6,"phone")),a.xp6(3),a.Oqu(a.lcZ(9,8,"description")),a.xp6(3),a.Oqu(a.lcZ(12,10,"update")))}function q(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"tr"),a.TgZ(1,"td"),a._uU(2),a.qZA(),a.TgZ(3,"td"),a._uU(4),a.qZA(),a.TgZ(5,"td"),a._uU(6),a.qZA(),a.TgZ(7,"td"),a.TgZ(8,"button",25),a.NdJ("click",function(){a.CHM(e);const r=t.$implicit;return a.oxw().update(r)}),a.ALo(9,"translate"),a.qZA(),a.qZA(),a.qZA()}if(2&e){const e=t.$implicit;a.xp6(2),a.hij(" ",e.name," "),a.xp6(2),a.hij(" ",e.phone," "),a.xp6(2),a.hij(" ",e.description," "),a.xp6(2),a.s9C("label",a.lcZ(9,4,"update"))}}function A(e,t){1&e&&a._UZ(0,"p-message",26)}function T(e,t){1&e&&a._UZ(0,"p-message",30)}function D(e,t){1&e&&a._UZ(0,"p-message",31)}function v(e,t){if(1&e&&(a.TgZ(0,"div",27),a.YNc(1,T,1,0,"p-message",28),a.YNc(2,D,1,0,"p-message",29),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.userform.controls.phoneNumber.errors.required),a.xp6(1),a.Q6J("ngIf",e.userform.controls.phoneNumber.errors.pattern)}}const x=function(){return{width:"50vw"}},y=function(){return{width:"30vw"}},N=[{path:"",component:(()=>{class e{constructor(e,t,r,s){this.routeStateService=e,this.poolService=t,this.fb=r,this.router=s,this.registerDepartment=!1,this.updateDepartment=!1,this.newDepartment={name:"",phone:"",description:""},this.iserror=!1,this.responseTitle="",this.responseDialog=!1,this.responseMesssage="",this.responseStyle="",this.mobNumberPattern="^((\\+251-?)|0)?[0-9]{10}$"}ngOnInit(){this.loading=!1,this.getDepartment(),this.userform=this.fb.group({name:new o.NI("",o.kI.required),description:new o.NI("",o.kI.required),phoneNumber:new o.NI("",[o.kI.required,o.kI.pattern(this.mobNumberPattern)])})}getDepartment(){this.loading=!0,this.poolService.getDepartment().then(e=>{this.departments=e,this.loading=!1})}RegisterDepartment(){this.userform.reset(),this.display=!0,this.registerDepartment=!0,this.updateDepartment=!1,this.dialogTitle="registerDepartmentForm"}update(e){this.registerDepartment=!1,this.updateDepartment=!0,this.dialogTitle="updateDepartmentForm",this.display=!0,this.Id=e.departmentId,this.newDepartment.description=e.description,this.newDepartment.name=e.name,this.newDepartment.phone=e.phone}goToDepartmentDetails(e){this.routeStateService.add("Department details","/main/departments/department-detail",e,!1)}onClickRegisterDepartment(){this.registerDepartment?this.poolService.RegisterDepartment(this.newDepartments).subscribe(e=>{this.iserror=!1,this.responseStyle="success",this.responseDialog=!0,this.responseTitle="SUCCESS!!!",this.responseMesssage="Information Registered successfully ",this.display=!1},e=>{this.iserror=!0,this.responseTitle="Error!!!",this.responseDialog=!0,this.responseMesssage="",this.display=!1,this.responseStyle="error";for(const[t,r]of Object.entries(e))this.responseMesssage=this.responseMesssage+r}):this.updateDepartment&&this.poolService.updateDepartment(this.newDepartments,this.Id).subscribe(e=>{this.iserror=!1,this.responseStyle="success",this.responseDialog=!0,this.responseTitle="SUCCESS!!!",this.responseMesssage="Information Updated successfully ",this.display=!1},e=>{this.iserror=!0,this.responseTitle="Error!!!",this.responseDialog=!0,this.responseMesssage="",this.display=!1,this.responseStyle="error";for(const[t,r]of Object.entries(e))this.responseMesssage=this.responseMesssage+r})}get newDepartments(){return this.newDepartment.name=this.userform.controls.name.value,this.newDepartment.phone=this.userform.controls.phoneNumber.value,this.newDepartment.description=this.userform.controls.description.value,this.newDepartment}Okonclick(){this.responseDialog=!1,location.reload()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(p.v),a.Y36(i.q),a.Y36(o.qu),a.Y36(n.F0))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-department-list"]],decls:46,vars:58,consts:[[3,"visible","modal","visibleChange"],["type","button","pButton","","icon","pi pi-check",3,"label","click"],[3,"header"],[1,"ui-g-10","ui-sm-8",2,"margin-bottom","5%"],[2,"float","right"],["pButton","","type","button",1,"p-button-success",3,"label","click"],["styleClass","p-datatable-gridlines",3,"value","paginator","rows","loading","autoLayout"],["pTemplate","header"],["pTemplate","body"],[3,"header","visible","transitionOptions","modal","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","p-grid"],[1,"p-field","p-col-12","p-md-12"],["for","firstname"],["id","firstname","type","text","formControlName","name","pInputText","","required","",3,"ngModel","ngModelChange"],["severity","error","text","Name is required",4,"ngIf"],["for","lastname"],["id","phone","type","text","formControlName","phoneNumber","pInputText","","required","",3,"ngModel","ngModelChange"],["class","p-col-12",4,"ngIf"],[1,"p-field","p-col-12"],["for","address"],["type","text","rows","4","formControlName","description","pInputTextarea","","required","",3,"ngModel","ngModelChange"],[1,"p-field","p-col-6"],["pButton","","type","button",1,"ui-button-raised",3,"label","disabled","click"],["pButton","","type","button",1,"ui-button-raised",3,"label","click"],["pButton","","type","button",3,"label","click"],["severity","error","text","Name is required"],[1,"p-col-12"],["severity","error","text","phoneNumber number is required",4,"ngIf"],["severity","error","text","invalid phone number format please fill correct phone number format",4,"ngIf"],["severity","error","text","phoneNumber number is required"],["severity","error","text","invalid phone number format please fill correct phone number format"]],template:function(e,t){1&e&&(a.TgZ(0,"p-dialog",0),a.NdJ("visibleChange",function(e){return t.responseDialog=e}),a.TgZ(1,"p-header"),a.TgZ(2,"p"),a._uU(3),a.qZA(),a.qZA(),a.TgZ(4,"p"),a._uU(5),a.qZA(),a.TgZ(6,"p-footer"),a.TgZ(7,"button",1),a.NdJ("click",function(){return t.Okonclick()}),a.ALo(8,"translate"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"p-panel",2),a.ALo(10,"translate"),a.TgZ(11,"div",3),a.TgZ(12,"label",4),a.TgZ(13,"button",5),a.NdJ("click",function(){return t.RegisterDepartment()}),a.ALo(14,"translate"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(15,"p-table",6),a.YNc(16,b,13,12,"ng-template",7),a.YNc(17,q,10,6,"ng-template",8),a.qZA(),a.qZA(),a.TgZ(18,"p-dialog",9),a.NdJ("visibleChange",function(e){return t.display=e}),a.ALo(19,"translate"),a.TgZ(20,"form",10),a.NdJ("ngSubmit",function(){return t.onClickRegisterDepartment()}),a.TgZ(21,"div",11),a.TgZ(22,"div",12),a.TgZ(23,"label",13),a._uU(24),a.ALo(25,"translate"),a.qZA(),a.TgZ(26,"input",14),a.NdJ("ngModelChange",function(e){return t.newDepartment.name=e}),a.qZA(),a.YNc(27,A,1,0,"p-message",15),a.qZA(),a.TgZ(28,"div",12),a.TgZ(29,"label",16),a._uU(30),a.ALo(31,"translate"),a.qZA(),a.TgZ(32,"input",17),a.NdJ("ngModelChange",function(e){return t.newDepartment.phone=e}),a.qZA(),a.qZA(),a.YNc(33,v,3,2,"div",18),a.TgZ(34,"div",19),a.TgZ(35,"label",20),a._uU(36),a.ALo(37,"translate"),a.qZA(),a.TgZ(38,"textarea",21),a.NdJ("ngModelChange",function(e){return t.newDepartment.description=e}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(39,"div",11),a.TgZ(40,"div",22),a.TgZ(41,"button",23),a.NdJ("click",function(){return t.onClickRegisterDepartment()}),a.ALo(42,"translate"),a.qZA(),a.qZA(),a.TgZ(43,"div",22),a.TgZ(44,"button",24),a.NdJ("click",function(){return t.display=!1}),a.ALo(45,"translate"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.Akn(a.DdM(56,x)),a.Q6J("visible",t.responseDialog)("modal",!0),a.xp6(2),a.Tol(t.responseStyle),a.xp6(1),a.hij(" ",t.responseTitle," "),a.xp6(1),a.Tol(t.responseStyle),a.xp6(1),a.hij(" ",t.responseMesssage," "),a.xp6(2),a.s9C("label",a.lcZ(8,38,"ok")),a.xp6(2),a.s9C("header",a.lcZ(10,40,"departmentList")),a.xp6(4),a.s9C("label",a.lcZ(14,42,"register")),a.xp6(2),a.Q6J("value",t.departments)("paginator",!0)("rows",10)("loading",t.loading)("autoLayout",!0),a.xp6(3),a.Akn(a.DdM(57,y)),a.s9C("header",a.lcZ(19,44,t.dialogTitle)),a.Q6J("visible",t.display)("transitionOptions","0ms")("modal",!0),a.xp6(2),a.Q6J("formGroup",t.userform),a.xp6(4),a.Oqu(a.lcZ(25,46,"name")),a.xp6(2),a.Q6J("ngModel",t.newDepartment.name),a.xp6(1),a.Q6J("ngIf",!t.userform.controls.name.valid&&t.userform.controls.name.dirty),a.xp6(3),a.Oqu(a.lcZ(31,48,"phone")),a.xp6(2),a.Q6J("ngModel",t.newDepartment.phone),a.xp6(1),a.Q6J("ngIf",t.userform.controls.phoneNumber.errors&&t.userform.controls.phoneNumber.dirty&&t.userform.controls.phoneNumber.touched),a.xp6(3),a.Oqu(a.lcZ(37,50,"description")),a.xp6(2),a.Q6J("ngModel",t.newDepartment.description),a.xp6(3),a.s9C("label",a.lcZ(42,52,"save")),a.Q6J("disabled",!t.userform.valid),a.xp6(3),a.s9C("label",a.lcZ(45,54,"cancel")))},directives:[l.V,u.h4,u.$_,c.Hq,d.s,m.iA,u.jx,o.vK,o.JL,o.sg,o.Fj,o.JJ,o.u,h.o,o.Q7,s.O5,g.g,Z.q],pipes:[f.X$],styles:[""]}),e})()}];let w=(()=>{class e{}return e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({factory:function(t){return new(t||e)},imports:[[n.Bz.forChild(N)],n.Bz]}),e})();var C=r(35119),k=r(49635);let J=(()=>{class e{}return e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({factory:function(t){return new(t||e)},imports:[[s.ez,w,C.n,k.U]]}),e})()}}]);