(self.webpackChunknote=self.webpackChunknote||[]).push([[204],{27204:function(e,t,s){"use strict";s.r(t),s.d(t,{VehicleModule:function(){return V}});var i=s(61116),r=s(14969),n=s(11462),o=s(8361),a=s(35366),l=s(28302),p=s(65916),u=s(28451),d=s(94217),c=s(49783),h=s(23625),g=s(14313),Z=s(5590),m=s(89548),q=s(13682);function v(e,t){1&e&&(a.TgZ(0,"tr",30),a.TgZ(1,"th"),a._uU(2),a.ALo(3,"translate"),a.qZA(),a.TgZ(4,"th"),a._uU(5),a.ALo(6,"translate"),a.qZA(),a.TgZ(7,"th"),a._uU(8),a.ALo(9,"translate"),a.qZA(),a.TgZ(10,"th"),a._uU(11),a.ALo(12,"translate"),a.qZA(),a.TgZ(13,"th"),a._uU(14),a.ALo(15,"translate"),a.qZA(),a.TgZ(16,"th"),a._uU(17),a.ALo(18,"translate"),a.qZA(),a.TgZ(19,"th"),a._uU(20),a.ALo(21,"translate"),a.qZA(),a.TgZ(22,"th"),a._uU(23),a.ALo(24,"translate"),a.qZA(),a.qZA()),2&e&&(a.xp6(2),a.Oqu(a.lcZ(3,8,"name")),a.xp6(3),a.Oqu(a.lcZ(6,10,"plateNumber")),a.xp6(3),a.Oqu(a.lcZ(9,12,"seatCapacity")),a.xp6(3),a.Oqu(a.lcZ(12,14,"driver")),a.xp6(3),a.Oqu(a.lcZ(15,16,"status")),a.xp6(3),a.Oqu(a.lcZ(18,18,"useFor")),a.xp6(3),a.Oqu(a.lcZ(21,20,"owner")),a.xp6(3),a.Oqu(a.lcZ(24,22,"update")))}function f(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"tr",31),a.TgZ(1,"td"),a._uU(2),a.qZA(),a.TgZ(3,"td"),a._uU(4),a.qZA(),a.TgZ(5,"td"),a._uU(6),a.qZA(),a.TgZ(7,"td"),a._uU(8),a.ALo(9,"translate"),a._UZ(10,"br"),a._uU(11),a.ALo(12,"translate"),a.qZA(),a.TgZ(13,"td"),a._uU(14),a.qZA(),a.TgZ(15,"td"),a._uU(16),a.qZA(),a.TgZ(17,"td"),a._uU(18),a.qZA(),a.TgZ(19,"td"),a._UZ(20,"p-menu",32,33),a.TgZ(22,"button",34),a.NdJ("click",function(t){return a.CHM(e),a.MAs(21).toggle(t)}),a.ALo(23,"translate"),a.qZA(),a.qZA(),a.qZA()}if(2&e){const e=t.$implicit,s=a.oxw();a.xp6(2),a.Oqu(e.name),a.xp6(2),a.Oqu(e.platenumber),a.xp6(2),a.Oqu(e.seatCapacity),a.xp6(2),a.AsE("",a.lcZ(9,13,"name"),": ",e.driverName," "),a.xp6(3),a.AsE("",a.lcZ(12,15,"phone")," : ",e.driverPhone," "),a.xp6(3),a.Oqu(e.status),a.xp6(2),a.Oqu(e.usedFor),a.xp6(2),a.hij(" ",e.owner.name," "),a.xp6(2),a.Q6J("popup",!0)("model",s.getRowData(e)),a.xp6(2),a.s9C("label",a.lcZ(23,17,"update"))}}function A(e,t){1&e&&a._UZ(0,"p-message",35)}function T(e,t){1&e&&a._UZ(0,"p-message",38)}function b(e,t){if(1&e&&(a.TgZ(0,"div",36),a.YNc(1,T,1,0,"p-message",37),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.userform.controls.seatCapacity.errors.required)}}const w=function(){return{width:"50vw"}},y=function(){return{width:"40vw"}},C=function(){return{width:"30vw"}},x=[{path:"",component:(()=>{class e{constructor(e,t,s){this.poolService=e,this.fb=t,this.translateService=s,this.registerVehicle=!1,this.statusUpdateDisplay=!1,this.statusUpdateDialogTitle="statusUpdateReson",this.updateVehicle=!1,this.newVehicleStatus={status:"",statusChangeReason:""},this.newVehicle={name:"",model:"",platenumber:"",seatCapacity:0,status:"active",driverName:"",usedFor:"indoor",driverPhone:"",ownerId:""},this.statusUpdatesubmitted=!1,this.iserror=!1,this.responseTitle="",this.responseDialog=!1,this.responseMesssage="",this.responseStyle="",this.vehicleUse=[{name:"For Indoor",value:"indoor"},{name:"For Field",value:"field"},{name:"For Home Service",value:"home"}],this.vehicleStatus=[{name:"Active",value:"active"},{name:"Working",value:"working"},{name:"InActive",value:"inactive"}],this.mobNumberPattern="^((\\+251-?)|0)?[0-9]{10}$"}ngOnInit(){this.loading=!1,this.display=!1,this.statusUpdatesubmitted=!1,this.getVehicle(),this.getVehicleOwner(),this.userform=this.fb.group({owner:new n.NI("",n.kI.required),use:new n.NI("",n.kI.required),name:new n.NI("",n.kI.required),model:new n.NI("",n.kI.required),seatCapacity:new n.NI("",n.kI.required),platenumber:new n.NI("",n.kI.required),driverPhone:new n.NI(""),driverName:new n.NI("")}),this.statusUpdateform=this.fb.group({vehiclestatus:new n.NI("",n.kI.required),reason:new n.NI("",n.kI.required)})}getVehicle(){this.loading=!0,this.poolService.getCar().then(e=>{this.car=e,this.loading=!1})}getVehicleOwner(){this.poolService.getOwner().then(e=>{this.states=e})}register(){this.userform.reset(),this.display=!0,this.registerVehicle=!0,this.updateVehicle=!1,this.dialogTitle="registerVehicleForm"}update(e){this.registerVehicle=!1,this.updateVehicle=!0,this.dialogTitle="updateVehicleForm",this.display=!0,this.Id=e.vehicleId,this.newVehicle.name=e.name,this.newVehicle.model=e.model,this.newVehicle.platenumber=e.platenumber,this.newVehicle.seatCapacity=e.seatCapacity,this.newVehicle.driverName=e.driverName,this.newVehicle.driverPhone=e.driverPhone,this.selectedType=this.states.filter(t=>t.ownerId==e.owner.ownerId)[0],this.selectedUse=this.vehicleUse.filter(t=>t.value==e.usedFor)[0]}onClickRegisterVehicle(){this.registerVehicle?this.poolService.RegisterVehicle(this.vehicles).subscribe(e=>{this.iserror=!1,this.responseStyle="success",this.responseDialog=!0,this.responseTitle="SUCCESS!!!",this.responseMesssage="Information Registered successfully ",this.display=!1},e=>{this.iserror=!0,this.responseTitle="Error!!!",this.responseDialog=!0,this.responseMesssage="",this.display=!1,this.responseStyle="error";for(const[t,s]of Object.entries(e))this.responseMesssage=this.responseMesssage+s}):this.updateVehicle&&this.poolService.updateVehicle(this.vehicles,this.Id).subscribe(e=>{this.iserror=!1,this.responseStyle="success",this.responseDialog=!0,this.responseTitle="SUCCESS!!!",this.responseMesssage="Information Updated successfully ",this.display=!1},e=>{this.iserror=!0,this.responseTitle="Error!!!",this.responseDialog=!0,this.responseMesssage="",this.display=!1,this.responseStyle="error";for(const[t,s]of Object.entries(e))this.responseMesssage=this.responseMesssage+s})}get vehicles(){return this.newVehicle.name=this.userform.controls.name.value,this.newVehicle.model=this.userform.controls.model.value,this.newVehicle.platenumber=this.userform.controls.platenumber.value,this.newVehicle.seatCapacity=this.userform.controls.seatCapacity.value,this.newVehicle.driverPhone=this.userform.controls.driverPhone.value,this.newVehicle.driverName=this.userform.controls.driverName.value,this.newVehicle.ownerId=this.selectedType.ownerId,this.newVehicle.usedFor=this.selectedUse.value,this.newVehicle}Okonclick(){this.responseDialog=!1,location.reload()}getRowData(e){return this.items=[{label:this.translateService.instant("updateData"),icon:"pi pi-fw pi-check",command:t=>{this.update(e)}},{label:this.translateService.instant("updateStatus"),command:t=>{this.getVehicleStatusUpdate(e)},icon:"pi pi-fw pi-times"}]}getVehicleStatusUpdate(e){this.statusUpdateDisplay=!0,this.statusUpdateDialogTitle="statusUpdateResonForm",this.statusUpdateData=e,this.Id=e.vehicleId}onClickstatusUpdate(){this.newVehicleStatus.statusChangeReason=this.statusUpdateform.controls.reason.value,this.newVehicleStatus.status=this.selectedStatus.value,this.statusUpdateDisplay=!1,this.poolService.updateVehicleStatus(this.newVehicleStatus,this.Id).subscribe(e=>{this.iserror=!1,this.responseStyle="success",this.responseDialog=!0,this.responseTitle="SUCCESS!!!",this.responseMesssage="Information Updated successfully ",this.display=!1},e=>{this.iserror=!0,this.responseTitle="Error!!!",this.responseDialog=!0,this.responseMesssage="",this.display=!1,this.responseStyle="error";for(const[t,s]of Object.entries(e))this.responseMesssage=this.responseMesssage+s})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(o.q),a.Y36(n.qu),a.Y36(l.sK))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-vehicle"]],decls:88,vars:100,consts:[[3,"visible","modal","visibleChange"],["type","button","pButton","","icon","pi pi-check",3,"label","click"],[2,"text-align","right"],["pButton","","type","button",1,"p-button-success",3,"label","click"],["styleClass","p-datatable-gridlines",3,"value","autoLayout","loading"],["pTemplate","header"],["pTemplate","body"],[3,"header","visible","transitionOptions","modal","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","p-grid"],[1,"p-field","p-col-6","p-md-6"],["formControlName","owner","placeholder","Select","optionLabel","name","required","",3,"options","ngModel","ngModelChange"],["formControlName","use","placeholder","Select","optionLabel","name","required","",3,"options","ngModel","ngModelChange"],["type","text","formControlName","name","pInputText","","required","",3,"ngModel","ngModelChange"],["severity","error","text","Name is required",4,"ngIf"],["type","text","formControlName","model","pInputText","","required","",3,"ngModel","ngModelChange"],["type","text","formControlName","platenumber","pInputText","","required","",3,"ngModel","ngModelChange"],["type","number","formControlName","seatCapacity","pInputText","","required","",3,"ngModel","ngModelChange"],["class","p-col-12",4,"ngIf"],[1,"p-field","p-col-12","p-md-12"],["id","phone","type","text","formControlName","driverName","pInputText","",3,"ngModel","ngModelChange"],["type","text","formControlName","driverPhone","pInputText","",3,"ngModel","ngModelChange"],[1,"p-field","p-col-6"],["pButton","","type","button",1,"ui-button-raised",3,"label","disabled","click"],["pButton","","type","reset",1,"ui-button-raised",3,"label"],["formControlName","vehiclestatus","placeholder","Select","optionLabel","name","required","",3,"options","ngModel","ngModelChange"],[1,"p-field","p-col-12"],["for","address"],["type","text","rows","4","formControlName","reason","pInputTextarea","","required",""],["pButton","",1,"ui-button-raised",3,"label","click"],[1,"header-row"],[1,"body-row"],["appendTo","body",3,"popup","model"],["menu",""],["pButton","","icon","pi pi-list","type","button",3,"label","click"],["severity","error","text","Name is required"],[1,"p-col-12"],["severity","error","text","seat capacity is required",4,"ngIf"],["severity","error","text","seat capacity is required"]],template:function(e,t){1&e&&(a.TgZ(0,"p-dialog",0),a.NdJ("visibleChange",function(e){return t.responseDialog=e}),a.TgZ(1,"p-header"),a.TgZ(2,"p"),a._uU(3),a.qZA(),a.qZA(),a.TgZ(4,"p"),a._uU(5),a.qZA(),a.TgZ(6,"p-footer"),a.TgZ(7,"button",1),a.NdJ("click",function(){return t.Okonclick()}),a.ALo(8,"translate"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"div",2),a.TgZ(10,"button",3),a.NdJ("click",function(){return t.register()}),a.ALo(11,"translate"),a.qZA(),a.qZA(),a.TgZ(12,"p-table",4),a.YNc(13,v,25,24,"ng-template",5),a.YNc(14,f,24,19,"ng-template",6),a.qZA(),a.TgZ(15,"p-dialog",7),a.NdJ("visibleChange",function(e){return t.display=e}),a.ALo(16,"translate"),a.TgZ(17,"form",8),a.NdJ("ngSubmit",function(){return t.onClickRegisterVehicle()}),a.TgZ(18,"div",9),a.TgZ(19,"div",10),a.TgZ(20,"label"),a._uU(21),a.ALo(22,"translate"),a.qZA(),a.TgZ(23,"p-dropdown",11),a.NdJ("ngModelChange",function(e){return t.selectedType=e}),a.qZA(),a.qZA(),a.TgZ(24,"div",10),a.TgZ(25,"label"),a._uU(26),a.ALo(27,"translate"),a.qZA(),a.TgZ(28,"p-dropdown",12),a.NdJ("ngModelChange",function(e){return t.selectedUse=e}),a.qZA(),a.qZA(),a.TgZ(29,"div",10),a.TgZ(30,"label"),a._uU(31),a.ALo(32,"translate"),a.qZA(),a.TgZ(33,"input",13),a.NdJ("ngModelChange",function(e){return t.newVehicle.name=e}),a.qZA(),a.YNc(34,A,1,0,"p-message",14),a.qZA(),a.TgZ(35,"div",10),a.TgZ(36,"label"),a._uU(37),a.ALo(38,"translate"),a.qZA(),a.TgZ(39,"input",15),a.NdJ("ngModelChange",function(e){return t.newVehicle.model=e}),a.qZA(),a.qZA(),a.TgZ(40,"div",10),a.TgZ(41,"label"),a._uU(42),a.ALo(43,"translate"),a.qZA(),a.TgZ(44,"input",16),a.NdJ("ngModelChange",function(e){return t.newVehicle.platenumber=e}),a.qZA(),a.qZA(),a.TgZ(45,"div",10),a.TgZ(46,"label"),a._uU(47),a.ALo(48,"translate"),a.qZA(),a.TgZ(49,"input",17),a.NdJ("ngModelChange",function(e){return t.newVehicle.seatCapacity=e}),a.qZA(),a.qZA(),a.YNc(50,b,2,1,"div",18),a.TgZ(51,"div",19),a.TgZ(52,"label"),a._uU(53),a.ALo(54,"translate"),a.qZA(),a.TgZ(55,"input",20),a.NdJ("ngModelChange",function(e){return t.newVehicle.driverName=e}),a.qZA(),a.qZA(),a.TgZ(56,"div",19),a.TgZ(57,"label"),a._uU(58),a.ALo(59,"translate"),a.qZA(),a.TgZ(60,"input",21),a.NdJ("ngModelChange",function(e){return t.newVehicle.driverPhone=e}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(61,"div",9),a.TgZ(62,"div",22),a.TgZ(63,"button",23),a.NdJ("click",function(){return t.onClickRegisterVehicle()}),a.ALo(64,"translate"),a.qZA(),a.qZA(),a.TgZ(65,"div",22),a._UZ(66,"button",24),a.ALo(67,"translate"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(68,"p-dialog",7),a.NdJ("visibleChange",function(e){return t.statusUpdateDisplay=e}),a.ALo(69,"translate"),a.TgZ(70,"form",8),a.NdJ("ngSubmit",function(){return t.onClickstatusUpdate()}),a.TgZ(71,"div",9),a.TgZ(72,"div",19),a.TgZ(73,"label"),a._uU(74),a.ALo(75,"translate"),a.qZA(),a.TgZ(76,"p-dropdown",25),a.NdJ("ngModelChange",function(e){return t.selectedStatus=e}),a.qZA(),a.qZA(),a.TgZ(77,"div",26),a.TgZ(78,"label",27),a._uU(79),a.ALo(80,"translate"),a.qZA(),a._UZ(81,"textarea",28),a.qZA(),a.TgZ(82,"div",22),a.TgZ(83,"button",23),a.NdJ("click",function(){return t.onClickstatusUpdate()}),a.ALo(84,"translate"),a.qZA(),a.qZA(),a.TgZ(85,"div",22),a.TgZ(86,"button",29),a.NdJ("click",function(){return t.statusUpdateDisplay=!1}),a.ALo(87,"translate"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.Akn(a.DdM(97,w)),a.Q6J("visible",t.responseDialog)("modal",!0),a.xp6(2),a.Tol(t.responseStyle),a.xp6(1),a.hij(" ",t.responseTitle," "),a.xp6(1),a.Tol(t.responseStyle),a.xp6(1),a.hij(" ",t.responseMesssage," "),a.xp6(2),a.s9C("label",a.lcZ(8,61,"ok")),a.xp6(3),a.s9C("label",a.lcZ(11,63,"register")),a.xp6(2),a.Q6J("value",t.car)("autoLayout",!0)("loading",t.loading),a.xp6(3),a.Akn(a.DdM(98,y)),a.s9C("header",a.lcZ(16,65,t.dialogTitle)),a.Q6J("visible",t.display)("transitionOptions","0ms")("modal",!0),a.xp6(2),a.Q6J("formGroup",t.userform),a.xp6(4),a.Oqu(a.lcZ(22,67,"vehicleOwner")),a.xp6(2),a.Q6J("options",t.states)("ngModel",t.selectedType),a.xp6(3),a.Oqu(a.lcZ(27,69,"vehicleUse")),a.xp6(2),a.Q6J("options",t.vehicleUse)("ngModel",t.selectedUse),a.xp6(3),a.Oqu(a.lcZ(32,71,"name")),a.xp6(2),a.Q6J("ngModel",t.newVehicle.name),a.xp6(1),a.Q6J("ngIf",!t.userform.controls.name.valid&&t.userform.controls.name.dirty),a.xp6(3),a.Oqu(a.lcZ(38,73,"model")),a.xp6(2),a.Q6J("ngModel",t.newVehicle.model),a.xp6(3),a.Oqu(a.lcZ(43,75,"plateNumber")),a.xp6(2),a.Q6J("ngModel",t.newVehicle.platenumber),a.xp6(3),a.Oqu(a.lcZ(48,77,"seatCapacity")),a.xp6(2),a.Q6J("ngModel",t.newVehicle.seatCapacity),a.xp6(1),a.Q6J("ngIf",t.userform.controls.seatCapacity.errors&&t.userform.controls.seatCapacity.dirty&&t.userform.controls.seatCapacity.touched),a.xp6(3),a.Oqu(a.lcZ(54,79,"driverName")),a.xp6(2),a.Q6J("ngModel",t.newVehicle.driverName),a.xp6(3),a.Oqu(a.lcZ(59,81,"driverPhone")),a.xp6(2),a.Q6J("ngModel",t.newVehicle.driverPhone),a.xp6(3),a.s9C("label",a.lcZ(64,83,"register")),a.Q6J("disabled",!t.userform.valid),a.xp6(3),a.s9C("label",a.lcZ(67,85,"reset")),a.xp6(2),a.Akn(a.DdM(99,C)),a.s9C("header",a.lcZ(69,87,t.statusUpdateDialogTitle)),a.Q6J("visible",t.statusUpdateDisplay)("transitionOptions","0ms")("modal",!0),a.xp6(2),a.Q6J("formGroup",t.statusUpdateform),a.xp6(4),a.Oqu(a.lcZ(75,89,"status")),a.xp6(2),a.Q6J("options",t.vehicleStatus)("ngModel",t.selectedStatus),a.xp6(3),a.Oqu(a.lcZ(80,91,"reason")),a.xp6(4),a.s9C("label",a.lcZ(84,93,"register")),a.Q6J("disabled",!t.statusUpdateform.valid||t.statusUpdatesubmitted),a.xp6(3),a.s9C("label",a.lcZ(87,95,"cancel")))},directives:[p.V,u.h4,u.$_,d.Hq,c.iA,u.jx,n.vK,n.JL,n.sg,h.Lt,n.JJ,n.u,n.Q7,n.Fj,g.o,i.O5,n.wV,Z.g,m.v2,q.q],pipes:[l.X$],styles:[""]}),e})()}];let U=(()=>{class e{}return e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({factory:function(t){return new(t||e)},imports:[[r.Bz.forChild(x)],r.Bz]}),e})();var N=s(35119);let V=(()=>{class e{}return e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({factory:function(t){return new(t||e)},imports:[[i.ez,U,N.n]]}),e})()}}]);