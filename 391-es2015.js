(self.webpackChunknote=self.webpackChunknote||[]).push([[391],{17391:function(e,t,r){"use strict";r.r(t),r.d(t,{DepartmentDetailModule:function(){return b}});var n=r(61116),a=r(14969),i=r(35366);let c=(()=>{class e{constructor(){this.departments=[{Id:1,Name:".net",Description:".Net"},{Id:2,Name:"HR",Description:"HR"},{Id:3,Name:"Admin",Description:"Admin"},{Id:4,Name:"PHP",Description:"PHP"}]}getAllDepartments(){return this.departments}getDepartmentById(e){var t;return this.departments.forEach(r=>{r.Id===e&&(t=r)}),t}getDepartmentByName(e){var t;return this.departments.forEach(r=>{r.Name===e&&(t=r)}),t}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var o=r(50052),s=r(1026);let p=(()=>{class e{constructor(e){this.routeStateService=e,this.items=[]}ngOnInit(){this.routeStateService.getAll().forEach(e=>{this.items.push({label:e.title,command:()=>{this.onClickBreadcrumb(e.id)}})}),this.home={icon:"pi pi-home"}}onClickBreadcrumb(e){this.routeStateService.loadById(e)}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(o.v))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-header-breadcrumb"]],decls:1,vars:2,consts:[["styleClass","header-breadcrumb",3,"model","home"]],template:function(e,t){1&e&&i._UZ(0,"p-breadcrumb",0),2&e&&i.Q6J("model",t.items)("home",t.home)},directives:[s.a],styles:[""]}),e})();var m=r(81357),u=r(28451),d=r(94217);const l=[{path:"",component:(()=>{class e{constructor(e,t){this.departmentService=e,this.routeStateService=t}ngOnInit(){var e=this.routeStateService.getCurrent();this.department=this.departmentService.getDepartmentById(e.data)}back(){this.routeStateService.loadPrevious()}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(c),i.Y36(o.v))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-department-detail"]],decls:12,vars:2,consts:[["header","Department Details"],["pButton","","type","button","label","Back",1,"ui-button-secondary","prime-button",3,"click"]],template:function(e,t){1&e&&(i._UZ(0,"app-header-breadcrumb"),i.TgZ(1,"p-panel",0),i.TgZ(2,"p"),i.TgZ(3,"b"),i._uU(4,"Department Name :"),i.qZA(),i._uU(5),i.qZA(),i.TgZ(6,"p"),i.TgZ(7,"b"),i._uU(8,"Department Description :"),i.qZA(),i._uU(9),i.qZA(),i.TgZ(10,"p-footer"),i.TgZ(11,"button",1),i.NdJ("click",function(){return t.back()}),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(5),i.hij(" ",t.department.Name," "),i.xp6(4),i.hij(" ",t.department.Description," "))},directives:[p,m.s,u.$_,d.Hq],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({factory:function(t){return new(t||e)},imports:[[a.Bz.forChild(l)],a.Bz]}),e})();var f=r(35119),v=r(49635);let b=(()=>{class e{}return e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({factory:function(t){return new(t||e)},imports:[[n.ez,h,f.n,v.U]]}),e})()}}]);