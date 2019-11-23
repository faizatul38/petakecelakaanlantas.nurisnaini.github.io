// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:jimu/dijit/templates/CoordinateControl.html":"\x3cdiv class\x3d'coordinateContainer'\x3e\r\n  \x3cdiv class\x3d'coordLabel' data-dojo-attach-point\x3d'coordNameContainer' data-a11y-label-id\x3d'coordLabel'\x3e\r\n    \x3cspan data-dojo-type\x3d'dijit/InlineEditBox' width\x3d'75px' data-dojo-props\x3d\"editor:'dijit/form/TextBox', autoSave:true\"\r\n      data-dojo-attach-point\x3d'coordName'\x3e${type}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d'add-with-icon coordInput'\x3e\r\n    \x3ctextarea data-a11y-label-by\x3d'coordLabel' tabindex\x3d\"0\" aria-multiline\x3d\"true\" role\x3d\"textbox\" id\x3d'${uid}' type\x3d'text' rows\x3d'1' class\x3d'ta' data-dojo-attach-point\x3d'coordtext' spellcheck\x3d'false'\r\n    placeholder\x3d'${nls.coordinateInputLabel}'\x3e\x3c/textarea\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d'coordactions'\x3e\r\n    \x3cdiv class\x3d'add-with-icon'\x3e\r\n      \x3cspan tabindex\x3d\"0\" role\x3d\"button\" id\x3d'${uid}_cpbtn' aria-label\x3d'${nls.copyToClipboard}' title\x3d'${nls.copyToClipboard}' data-dojo-attach-point\x3d'cpbtn' class\x3d'cpbtn'\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d'add-with-icon'\x3e\r\n      \x3cspan tabindex\x3d\"0\" role\x3d\"button\" title\x3d\"${nls.formatOutput}\" class\x3d'settingBtn' data-dojo-attach-point\x3d'formatButton'\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d'add-with-icon'\x3e\r\n      \x3cspan tabindex\x3d\"0\" role\x3d\"button\" aria-label\x3d'${nls.zoomLabel}' title\x3d'${nls.zoomLabel}' class\x3d'zoomBtn' data-dojo-attach-point\x3d'zoomButton'\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d'add-with-icon'\x3e\r\n      \x3cspan tabindex\x3d\"0\" role\x3d\"button\" aria-label\x3d'${nls.addPointLabel}' title\x3d'${nls.addPointLabel}' class\x3d'drawPointBtn' data-dojo-attach-point\x3d'drawPointButton'\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d'add-with-icon'\x3e\r\n      \x3cspan tabindex\x3d\"0\" role\x3d\"button\" aria-label\x3d'${nls.removeCoordinate}' title\x3d'${nls.removeCoordinate}' class\x3d'jimu-icon jimu-icon-close' data-dojo-attach-point\x3d'removeControlBtn'\r\n        data-dojo-attach-event\x3d'onclick: remove'\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d'add-with-icon'\x3e\r\n      \x3cspan tabindex\x3d\"0\" role\x3d\"button\" aria-label\x3d\"${nls.expandOutput}\" aria-expanded \x3d \"false\" title\x3d\"${nls.expandOutput}\" class\x3d'expandBtn' data-dojo-attach-point\x3d'expandButton'\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d'coordcontrols' class\x3d'coordarea' style\x3d\"display: none\"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d'sub1' class\x3d'coordformat'\x3e\r\n      \x3cdiv class\x3d'crdfrmtlabel'\x3e\r\n        \x3cspan data-dojo-attach-point\x3d'sub1label' data-a11y-label-id\x3d'sub1Label'/\x3e\r\n      \x3c/div\x3e\r\n      \x3cinput data-a11y-label-by\x3d'sub1Label' tabindex\x3d\"-1\" role\x3d\"textbox\" readonly data-dojo-attach-point\x3d'${uid}sub1val' class\x3d'jimu-input crds'\x3e\x3c/input\x3e\r\n      \x3cdiv class\x3d'add-with-icon'\x3e\r\n        \x3cspan tabindex\x3d\"-1\" role\x3d\"button\" id\x3d'${uid}sub1val~cpbtn' aria-label\x3d'${nls.copyToClipboard}' title\x3d'${nls.copyToClipboard}' data-dojo-attach-point\x3d'subVal1CpBtn' class\x3d'jimu-icon cpbtn'\x3e\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d'sub2' class\x3d'coordformat'\x3e\r\n      \x3cdiv class\x3d'crdfrmtlabel'\x3e\r\n        \x3cspan data-dojo-attach-point\x3d'sub2label' data-a11y-label-id\x3d'sub2Label'/\x3e\r\n      \x3c/div\x3e\r\n      \x3cinput data-a11y-label-by\x3d'sub2Label' tabindex\x3d\"-1\" role\x3d\"textbox\" readonly data-dojo-attach-point\x3d'${uid}sub2val' class\x3d'jimu-input crds'\x3e\x3c/input\x3e\r\n      \x3cdiv class\x3d'add-with-icon'\x3e\r\n        \x3cspan tabindex\x3d\"-1\" role\x3d\"button\" id\x3d'${uid}sub2val~cpbtn' aria-label\x3d'${nls.copyToClipboard}' title\x3d'${nls.copyToClipboard}' data-dojo-attach-point\x3d'subVal2CpBtn' class\x3d'jimu-icon cpbtn'\x3e\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d'sub3' class\x3d'coordformat sub3'\x3e\r\n      \x3cdiv class\x3d'crdfrmtlabel'\x3e\r\n        \x3cspan data-dojo-attach-point\x3d'sub3label' data-a11y-label-id\x3d'sub3Label'/\x3e\r\n      \x3c/div\x3e\r\n      \x3cinput data-a11y-label-by\x3d'sub3Label' tabindex\x3d\"-1\" role\x3d\"textbox\" readonly data-dojo-attach-point\x3d'${uid}sub3val' class\x3d'jimu-input crds'\x3e\r\n      \x3c/input\x3e\r\n      \x3cdiv class\x3d'add-with-icon'\x3e\r\n        \x3cspan tabindex\x3d\"-1\" role\x3d\"button\" id\x3d'${uid}sub3val~cpbtn' aria-label\x3d'$${nls.copyToClipboard}' title\x3d'$${nls.copyToClipboard}' data-dojo-attach-point\x3d'subVal3CpBtn' class\x3d'jimu-icon cpbtn'\x3e\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d'sub4' class\x3d'coordformat sub4'\x3e\r\n      \x3cdiv class\x3d'crdfrmtlabel'\x3e\r\n        \x3cspan data-dojo-attach-point\x3d'sub4label' data-a11y-label-id\x3d'sub4Label' /\x3e\r\n      \x3c/div\x3e\r\n      \x3cinput data-a11y-label-by\x3d'sub4Label' tabindex\x3d\"-1\" role\x3d\"textbox\" readonly data-dojo-attach-point\x3d'${uid}sub4val' class\x3d'jimu-input crds'\x3e\r\n      \x3c/input\x3e\r\n      \x3cdiv class\x3d'add-with-icon'\x3e\r\n        \x3cspan tabindex\x3d\"-1\" role\x3d\"button\" id\x3d'${uid}sub4val~cpbtn' aria-label\x3d'${nls.copyToClipboard} title\x3d'${nls.copyToClipboard}' data-dojo-attach-point\x3d'subVal4CpBtn' class\x3d'jimu-icon cpbtn'\x3e\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d\"line-separator\"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e"}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/on dojo/has dojo/query dojo/dom-attr dojo/dom-class dojo/dom-style dojo/string dojo/topic dojo/keys dojo/Deferred dojo/Evented dojo/dom dojo/dom-construct dojo/aspect jimu/BaseWidget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/registry dijit/Tooltip dijit/TooltipDialog dijit/popup dojo/text!./templates/CoordinateControl.html esri/geometry/webMercatorUtils esri/graphic esri/geometry/Point esri/request esri/SpatialReference esri/tasks/GeometryService esri/tasks/ProjectParameters esri/toolbars/draw jimu/dijit/Message ./_CoordinateControlFormatNotation ./_CoordinateControlConfirmNotation dojo/_base/sniff dijit/form/TextBox dijit/form/Textarea dijit/form/Select dijit/InlineEditBox".split(" "),
function(A,y,e,f,z,B,k,h,l,p,m,g,q,I,J,K,v,L,M,N,C,D,O,n,P,u,E,Q,F,w,R,G,H,x,S,T){return A([L,M,N,I],{templateString:P,baseClass:"jimu-coordinate-control",parentWidget:null,input:!0,label:null,showCopyButton:!1,showFormatButton:!1,zoomScale:null,showDeleteButton:!0,showExpandButton:!0,showDrawPoint:!0,drawButtonLabel:null,drawToolTip:null,graphicsLayer:null,type:"DD",inputFromText:!0,addSign:!1,hasCustomLabel:!1,postMixInProperties:function(){this.nls=window.jimuNls.coordinateControl;this.isRenderIdForAttrs=
!0},constructor:function(a){A.safeMixin(this,a);this.uid=a.id||C.getUniqueId("cc");null===this.parentWidget&&console.error("No parentWidget parameter supplied: Parameter is mandatory");null===this.label&&console.info("No label parameter supplied (optional): Coordinate Control will have no label");null===this.zoomScale&&console.info("No zoomScale parameter supplied (optional): Coordinate Control will have no zoom button");null===this.drawButtonLabel&&console.info("No drawButtonLabel parameter supplied (optional): Coordinate Control will have no draw button");
null===this.graphicsLayer&&console.info("No graphicsLayer parameter supplied: Input graphics will not be shown on map")},postCreate:function(){this._frmtdlg=new O({id:this.uid+"_formatCoordinateTooltip",content:new S({nls:this.nls,ct:this.type}),style:"width: 400px",onClose:e.hitch(this,this.popupDidClose)});v.after(this._frmtdlg,"onShow",e.hitch(this,function(){this._frmtdlg.content.frmtSelect.focus()}));v.after(this._frmtdlg,"onClose",e.hitch(this,function(){this.formatButton.focus()}));this.own(f(this._frmtdlg,
"keydown",e.hitch(this,function(a){a.keyCode===g.ESCAPE&&n.close(this._frmtdlg)})));"DartTheme"===this.parentWidget.appConfig.theme.name&&h.add(this._frmtdlg.domNode,"coordinateControlDialog");this.defaultFormat&&(this._frmtdlg.content.formats[this.type].defaultFormat=this.defaultFormat);this.geomsrvc=new R(this.parentWidget.appConfig.geometryService);this.dt=new H(this.parentWidget.map);this.initUI();this.setUIListeners()},initUI:function(){null===this.label?this.setHidden(this.coordNameContainer,
!1):this.coordName.setValue(this.label);this.input?(this.zoomButton.parentNode.style.display="none",this.setHidden(this.expandButton,!0),this.setHidden(this.removeControlBtn,!0),this.coordName.set("disabled","disabled"),this.coordName.set("value",this.label+" ("+this._frmtdlg.content.ct+")"),this.showDrawPoint?(this.drawPointButton.title=this.drawButtonLabel,null===this.drawToolTip&&(this.drawToolTip=this.nls.tooltip)):this.setHidden(this.drawPointButton,!0)):(this.coordtext.disabled=!0,this.setHidden(this.drawPointButton,
!0),this.showExpandButton||(this.setHidden(this.expandButton,!0),h.remove(this.domNode,"coordinateContainer"),h.add(this.domNode,"outputCoordinateContainer"),h.add(this.cpbtn,"outputCopyBtn"),this.coordtext.readOnly=!0),this.showDeleteButton||this.setHidden(this.removeControlBtn,!0));this.showCopyButton||(this.setHidden(this.cpbtn,!0),h.add(this.cpbtn,"inputCopyBtn"),k.set(this.cpbtn,"title",this.nls.copyAll));this.showFormatButton||this.setHidden(this.formatButton,!0);null===this.zoomScale&&this.setHidden(this.zoomButton,
!0);this.formatButton.title=this.input?this.nls.formatInput:this.nls.formatOutput;k.set(this.formatButton,"aria-label",this.formatButton.title)},setUIListeners:function(){this.input||m.subscribe("INPUTPOINTDIDCHANGE",e.hitch(this,this.mapWasClicked));m.subscribe("INPUTERROR",e.hitch(this,this.inputError));this.own(f(this.expandButton,"click",e.hitch(this,this.expandButtonWasClicked)));this.own(f(this.expandButton,"keydown",e.hitch(this,function(a){if(a.keyCode===g.ENTER||a.keyCode===g.SPACE)this.expandButtonWasClicked(a),
a.preventDefault()})));this.own(f(this.zoomButton,"click",e.hitch(this,this.zoomButtonWasClicked)));this.own(f(this.zoomButton,"keydown",e.hitch(this,function(a){a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this.zoomButtonWasClicked(a)})));this.own(f(this.coordName,"blur",e.hitch(this,this.coordNameDidChange)));this.cpbtn.addEventListener("click",e.hitch(this,this.cpBtnWasClicked));this.own(f(this.cpbtn,"keydown",e.hitch(this,function(a){a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this.cpBtnWasClicked(a)})));
this.subVal1CpBtn.addEventListener("click",e.hitch(this,this.cpSubBtnWasClicked));this.own(f(this.subVal1CpBtn,"keydown",e.hitch(this,function(a){a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this.cpSubBtnWasClicked(a)})));this.subVal2CpBtn.addEventListener("click",e.hitch(this,this.cpSubBtnWasClicked));this.own(f(this.subVal2CpBtn,"keydown",e.hitch(this,function(a){a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this.cpSubBtnWasClicked(a)})));this.subVal3CpBtn.addEventListener("click",e.hitch(this,this.cpSubBtnWasClicked));
this.own(f(this.subVal3CpBtn,"keydown",e.hitch(this,function(a){a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this.cpSubBtnWasClicked(a)})));this.subVal4CpBtn.addEventListener("click",e.hitch(this,this.cpSubBtnWasClicked));this.own(f(this.subVal4CpBtn,"keydown",e.hitch(this,function(a){a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this.cpSubBtnWasClicked(a)})));this.own(f(this.formatButton,"click",e.hitch(this,this.formatButtonWasClicked)));this.own(f(this.formatButton,"keydown",e.hitch(this,function(a){a.keyCode!==
g.ENTER&&a.keyCode!==g.SPACE||this.formatButtonWasClicked(a)})));this.own(f(this.drawPointButton,"click",e.hitch(this,this.drawPointButtonWasClicked)));this.own(f(this.drawPointButton,"keydown",e.hitch(this,function(a){a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this.drawPointButtonWasClicked(a)})));this.own(f(this.removeControlBtn,"keydown",e.hitch(this,function(a){a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this.remove()})));this.own(f(this._frmtdlg.content.applyButton,"click",e.hitch(this,this.formatDialogApplyButtonClicked)));
this.own(f(this._frmtdlg.content.applyButton,"keydown",e.hitch(this,function(a){a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this.formatDialogApplyButtonClicked()})));this.own(f(this._frmtdlg.content.cancelButton,"click",e.hitch(this,function(){n.close(this._frmtdlg)})));this.own(f(this._frmtdlg.content.cancelButton,"keydown",e.hitch(this,function(a){a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||n.close(this._frmtdlg)})));this.own(f(this.coordtext,"keydown",e.hitch(this,this.coordTextInputKeyWasPressed)));
this.own(f(this.coordtext,"input",e.hitch(this,function(){this.currentClickPointDD=null;this.zoomButton.parentNode.style.display="none";this.emit("coordinates-deleted",{})})));this.own(this.geomsrvc.on("error",e.hitch(this,this.geomSrvcDidFail)));this.own(f(this.dt,"draw-complete",e.hitch(this,this.drawComplete)));this.own(v.after(this.parentWidget,"onClose",e.hitch(this,function(){this.input&&h.contains(this.drawPointButton,"drawPointBtn-active")&&this.deactivateDrawTool();this._frmtdlg&&this._frmtdlg.domNode.offsetParent&&
"closed"===this.parentWidget.state&&n.close(this._frmtdlg)})));this.own(v.after(this.parentWidget,"onOpen",e.hitch(this,function(){var a=this.parentWidget.getParent().getParent().domNode;this.own(f(a,"click",e.hitch(this,function(a){"settingBtn"!==a.target.className&&this._frmtdlg&&this._frmtdlg.domNode.offsetParent&&"active"===this.parentWidget.state&&n.close(this._frmtdlg)})))})))},formatDialogApplyButtonClicked:function(){this.type=this._frmtdlg.content.ct;this.updateDisplay();this.hasCustomLabel||
this._frmtdlg.content.formats[this._frmtdlg.content.ct].useCustom||this.input?this.coordName.set("value",this.label+" ("+this._frmtdlg.content.ct+")"):this.coordName.set("value",this._frmtdlg.content.ct);n.close(this._frmtdlg)},popupDidClose:function(){if(this._frmtdlg.content.isCanceled)this.addSign!==this._frmtdlg.content.addSignChkBox.checked&&(this._frmtdlg.content.addSignChkBox.checked=this.addSign);else{this.addSign=this._frmtdlg.content.addSignChkBox.checked;var a=this._frmtdlg.content.ct;
this.type!==a&&(this.type=a,this.updateDisplay())}},coordNameDidChange:function(){this.hasCustomLabel=!0},cpSubBtnWasClicked:function(a){var d;this[a.currentTarget.id.split("~")[0]].select();try{d=document.execCommand("copy")}catch(b){d=!1}this.showToolTip(a.currentTarget.id,d?this.nls.copySuccessful:this.nls.copyFailed)},cpBtnWasClicked:function(a){a.preventDefault();var d,b;if(this.input){a=C.toArray().filter(function(a){return"jimu-coordinate-control"===a.baseClass&&!a.input});b=a.map(function(a){if(a.coordtext)return a.coordtext.value}).join("\r\n");
a=this.coordtext.value;this.coordtext.value=a+"\r\n"+b;this.selectText(this.coordtext);try{d=document.execCommand("copy")}catch(c){d=!1}this.coordtext.value=a}else{this.selectText(this.coordtext);try{d=document.execCommand("copy")}catch(c){d=!1}}this.showToolTip(this.cpbtn.id,d?this.nls.copySuccessful:this.nls.copyFailed)},selectText:function(a){var d=document.getSelection();d.removeAllRanges();a.focus();var b=/Edge/.test(navigator.userAgent),c=!!window.MSInputMethodContext&&!!document.documentMode;
if(z("ff")||z("chrome")||z("safari"))!this.input&&this.coordtext.disabled?(this.coordtext.disabled=!1,a.select(),this.coordtext.disabled=!0):a.select();b&&a.select();c&&(b=document.createRange(),b.selectNode(a),d.addRange(b))},showToolTip:function(a,d){var b=J.byId(a);D.show(d,b);setTimeout(function(){D.hide(b)},1E3)},geomSrvcDidComplete:function(a){0>=a[0].length?(new x({message:this.nls.parseCoordinatesError}),m.publish("INPUTERROR")):(this.currentClickPointDD=this.currentClickPoint=new Q(a[0][0],
a[0][1],new w({wkid:4326})),this.input&&(this.parentWidget.map.centerAt(this.currentClickPointDD),this.updateDisplay(),m.publish("INPUTPOINTDIDCHANGE",{mapPoint:this.currentClickPointDD,inputFromText:!0})))},geomSrvcDidFail:function(){new x({message:this.nls.parseCoordinatesError});m.publish("INPUTERROR")},coordTextInputKeyWasPressed:function(a){if(a.keyCode===g.ENTER){a.preventDefault();var d=this.getCleanInput(a.currentTarget.value);this.getCoordinateType(d).then(e.hitch(this,function(a){if(a)if(1===
a.length){var b=this.processCoordTextInput(d,a[0],!1);this.getXYNotation(b,a[0].conversionType).then(e.hitch(this,function(a){0<a[0].length?this.geomSrvcDidComplete(a):this.geomSrvcDidFail()}))}else this.confirmNotationDialog||(this.confirmNotationDialog=new T({title:this.nls.comfirmInputNotation,nls:this.nls,options:a,style:"width: 400px",hasSkipCheckBox:!1,theme:this.parentWidget.appConfig.theme.name})),this.confirmNotationDialog.show().then(e.hitch(this,function(){var b=y.filter(a,function(a){return a.name===
this.confirmNotationDialog.comboOptions.get("value")},this),c=this.processCoordTextInput(d,b[0],!1);this.getXYNotation(c,b[0].conversionType).then(e.hitch(this,function(a){0<a[0].length?this.geomSrvcDidComplete(a):this.geomSrvcDidFail()}))},function(){}));else new x({message:this.nls.parseCoordinatesError}),m.publish("INPUTERROR")}));k.set(this.coordtext,"value",d);this.emit("get-coordinate-complete",d);this.currentClickPoint=null;this.zoomButton.parentNode.style.display="inline-block"}if(a.keyCode===
g.BACKSPACE||a.keyCode===g.DELETE)this.clear(),this.currentClickPointDD=null,this.zoomButton.parentNode.style.display="none",this.emit("coordinates-deleted",{})},getFormattedCoordinateText:function(){return this.coordtext.value},getCurrentMapCoordinate:function(){return this.currentClickPoint},getMapCoordinateDD:function(){return this.currentClickPointDD},deactivateDrawTool:function(){this.dt.deactivate();h.remove(this.drawPointButton,"drawPointBtn-active")},processCoordTextInput:function(a,d,b){var c=
d.pattern.exec(a),e,g,f,h,k,r,l,m,n,p,q=!1,t=d.name;switch(d.name){case "DD":e=c[2];g=c[7];f=c[10];h=c[16];k=c[3].replace(/[,:]/,".");r=c[11].replace(/[,:]/,".");t="DD";break;case "DDrev":e=c[11];g=c[16];f=c[2];h=c[8];k=c[12].replace(/[,:]/,".");r=c[3].replace(/[,:]/,".");t="DD";break;case "DDM":e=c[2];g=c[7];f=c[10];h=c[15];k=c[3];l=c[4].replace(/[,:]/,".");r=c[11];m=c[12].replace(/[,:]/,".");t="DDM";break;case "DDMrev":e=c[10];g=c[15];f=c[2];h=c[7];k=c[11];l=c[12].replace(/[,:]/,".");r=c[3];m=c[4].replace(/[,:]/,
".");t="DDM";break;case "DMS":e=c[2];g=c[8];f=c[11];h=c[17];k=c[3];l=c[4];n=c[5].replace(/[,:]/,".");r=c[12];m=c[13];p=c[14].replace(/[,:]/,".");t="DMS";break;case "DMSrev":e=c[11],g=c[17],f=c[2],h=c[8],k=c[12],l=c[13],n=c[14].replace(/[,:]/,"."),r=c[3],m=c[4],p=c[5].replace(/[,:]/,"."),t="DMS"}e&&g?(q=!0,e=(new RegExp(/[Ss-]/)).test(e)?"-":"+"):e=e&&(new RegExp(/[Ss-]/)).test(e)?"-":g&&(new RegExp(/[Ss-]/)).test(g)?"-":"+";f&&h?(q=!0,f=(new RegExp(/[Ww-]/)).test(f)?"-":"+"):f=f&&(new RegExp(/[Ww-]/)).test(f)?
"-":h&&(new RegExp(/[Ww-]/)).test(h)?"-":"+";q&&(b||new x({message:this.nls.latLongWarningMessage}));switch(t){case "DD":a=e+k+","+f+r;break;case "DDM":a=e+k+" "+l+","+f+r+" "+m;break;case "DMS":a=e+k+" "+l+" "+n+","+f+r+" "+m+" "+p}return a},zoomButtonWasClicked:function(){this.currentClickPointDD&&(this.parentWidget.map.getZoom()<this.zoomScale?this.parentWidget.map.centerAt(this.currentClickPointDD).then(e.hitch(this,function(){this.parentWidget.map.setScale(this.zoomScale)})):this.parentWidget.map.centerAt(this.currentClickPointDD))},
setHidden:function(a,d){l.set(a,"display","none");d&&K.destroy(a.parentNode)},setVisible:function(a){l.set(a,"display","inline-flex")},remove:function(){this.destroyRecursive();this.emit("removeCoordsControl")},mapWasClicked:function(a){this.currentClickPoint=a.mapPoint;this.getDDPoint(a.mapPoint).then(e.hitch(this,function(d){this.currentClickPointDDDD=this.currentClickPointDD=d;this.inputFromText=a.inputFromText?!0:!1;this.updateDisplay()}),e.hitch(this,function(a){console.error(a)}))},getDDPoint:function(a){var d=
new q,b=new w(3857);u.canProject(a,b)?d.resolve(u.webMercatorToGeographic(u.project(a,b))):(b={url:this.geomsrvc.url+"/findTransformations",content:{f:"json",inSR:a.spatialReference.wkid,outSR:4326,extentOfInterest:JSON.stringify(this.parentWidget.map.extent)},handleAs:"json",callbackParamName:"callback"},(new F(b,{usePost:!1})).then(e.hitch(this,function(b){b=(b=b&&b.transformations?b.transformations:void 0)&&0<b.length?b[0].wkid:void 0;var c=new G;c.outSR=new w(4326);c.geometries=[a];c.transformForward=
!0;c.transformation=b;this.geomsrvc.project(c,e.hitch(this,function(a){d.resolve(a[0])}),function(a){d.reject(a)})}),e.hitch(this,function(a){d.reject(a)})));return d},getProjectedPoint:function(a){var d=new q;if(u.canProject(a,this.parentWidget.map))d.resolve(u.geographicToWebMercator(a));else{var b={url:this.geomsrvc.url+"/findTransformations",content:{f:"json",inSR:4326,outSR:this.parentWidget.map.spatialReference.wkid,extentOfInterest:JSON.stringify(this.parentWidget.map.extent)},handleAs:"json",
callbackParamName:"callback"};(new F(b,{usePost:!1})).then(e.hitch(this,function(b){b=(b=b&&b.transformations?b.transformations:void 0)&&0<b.length?b[0].geoTransforms[0].wkid:void 0;var c=new G;c.outSR=new w(this.parentWidget.map.spatialReference);c.geometries=[a];c.transformForward=!0;c.transformation=b;this.geomsrvc.project(c,e.hitch(this,function(a){d.resolve(a[0])}),function(a){d.reject(a)})}),e.hitch(this,function(a){d.reject(a)}))}return d},expandButtonWasClicked:function(){h.toggle(this.coordcontrols,
"expanded");h.contains(this.coordcontrols,"expanded")?(h.remove(this.expandButton,"expandBtn"),h.add(this.expandButton,"collapseBtn"),k.set(this.expandButton,"aria-expanded","true")):(h.remove(this.expandButton,"collapseBtn"),h.add(this.expandButton,"expandBtn"),k.set(this.expandButton,"aria-expanded","false"));this.setSubCoordUI(h.contains(this.coordcontrols,"expanded"));this._setCoordControlsTabindex(h.contains(this.coordcontrols,"expanded"));this.emit("expandButtonClicked",h.contains(this.coordcontrols,
"expanded"))},_setCoordControlsTabindex:function(a){var d,b=[];a?(d=0,a=-1):(d=-1,a=0);b=B("input[tabindex\x3d'"+a+"']",this.coordcontrols);b=b.concat(B("span[tabindex\x3d'"+a+"']",this.coordcontrols));y.forEach(b,e.hitch(this,function(a){k.set(a,"tabindex",d)}))},formatButtonWasClicked:function(){this._frmtdlg.content.setCt(this.type);n.open({popup:this._frmtdlg,around:this.formatButton})},drawPointButtonWasClicked:function(){if(h.contains(this.drawPointButton,"drawPointBtn-active"))this.dt.deactivate(),
this.parentWidget.map.enableMapNavigation();else{this.parentWidget.map.disableMapNavigation();this.dt.activate(H.POINT);var a=this.dt._tooltip;a&&(a.innerHTML=this.drawToolTip)}h.toggle(this.drawPointButton,"drawPointBtn-active")},drawComplete:function(a){var d={};d.mapPoint=a.geometry;this.parentWidget.map.enableMapNavigation();this.mapWasClicked(d)},setSubCoordUI:function(a){if(a){a="165px";switch(this.type){case "DD":case "DMS":case "DDM":this.sub1label.innerHTML="Lat";this.sub2label.innerHTML=
"Lon";this.setHidden(this.sub3,!1);this.setHidden(this.sub4,!1);a="90px";break;case "GARS":this.sub1label.innerHTML="Lon";this.sub2label.innerHTML="Lat";this.sub3label.innerHTML="Quadrant";this.sub4label.innerHTML="Key";this.setVisible(this.sub3);this.setVisible(this.sub4);break;case "GEOREF":this.sub1label.innerHTML="15\u00b0 Quad";this.sub2label.innerHTML="1\u00b0 Quad";this.sub3label.innerHTML="Easting";this.setVisible(this.sub3);this.sub4label.innerHTML="Northing";this.setVisible(this.sub4);break;
case "USNG":case "MGRS":this.sub1label.innerHTML="GZD";this.sub2label.innerHTML="Grid Sq";this.sub3label.innerHTML="Easting";this.sub4label.innerHTML="Northing";this.setVisible(this.sub3);this.setVisible(this.sub4);break;case "UTM":this.sub1label.innerHTML="Zone";this.sub2label.innerHTML="Band";this.sub3label.innerHTML="Easting";this.sub4label.innerHTML="Northing";this.setVisible(this.sub3);this.setVisible(this.sub4);break;case "UTM_H":this.sub1label.innerHTML="Zone",this.sub2label.innerHTML="Hemisphere",
this.sub3label.innerHTML="Easting",this.sub4label.innerHTML="Northing",this.setVisible(this.sub3),this.setVisible(this.sub4)}l.set(this.coordcontrols,"display","block");l.set(this.coordcontrols,"height",a);l.set(this.coordcontrols,"width","300px")}else l.set(this.coordcontrols,"display","none"),l.set(this.coordcontrols,"height","0px");a=this.uid.split("_")[1];k.set(this["cc_"+a+"sub1val"],"aria-label",this.sub1label.innerHTML);k.set(this["cc_"+a+"sub2val"],"aria-label",this.sub2label.innerHTML);k.set(this["cc_"+
a+"sub3val"],"aria-label",this.sub3label.innerHTML);k.set(this["cc_"+a+"sub4val"],"aria-label",this.sub4label.innerHTML)},setCoordUI:function(a){var d;if(a){var b=this.uid.split("_")[1];if(!this["cc_"+b+"sub1val"]||this.input&&this.inputFromText)return;var c;c=this._frmtdlg.content.formats[this.type];c=c.useCustom?c.customFormat:c.defaultFormat;switch(this.type){case "DD":a=this.getFormattedDDStr(a,c,this.addSign);this["cc_"+b+"sub1val"].value=p.substitute("${xcrd}",{xcrd:a.latdeg});this["cc_"+b+
"sub2val"].value=p.substitute("${ycrd}",{ycrd:a.londeg});d=a.formatResult;break;case "DDM":a=this.getFormattedDDMStr(a,c,this.addSign);this["cc_"+b+"sub1val"].value=p.substitute("${latd} ${latm}",{latd:a.latdeg,latm:a.latmin});this["cc_"+b+"sub2val"].value=p.substitute("${lond} ${lonm}",{lond:a.londeg,lonm:a.lonmin});d=a.formatResult;break;case "DMS":a=this.getFormattedDMSStr(a,c,this.addSign);this["cc_"+b+"sub1val"].value=p.substitute("${latd} ${latm} ${lats}",{latd:a.latdeg,latm:a.latmin,lats:a.latsec});
this["cc_"+b+"sub2val"].value=p.substitute("${lond} ${lonm} ${lons}",{lond:a.londeg,lonm:a.lonmin,lons:a.lonsec});d=a.formatResult;break;case "USNG":a=this.getFormattedUSNGStr(a,c,!1);this["cc_"+b+"sub1val"].value=a.gzd;this["cc_"+b+"sub2val"].value=a.grdsq;this["cc_"+b+"sub3val"].value=a.easting;this["cc_"+b+"sub4val"].value=a.northing;d=a.formatResult;break;case "MGRS":a=this.getFormattedMGRSStr(a,c,!1);this["cc_"+b+"sub1val"].value=a.gzd;this["cc_"+b+"sub2val"].value=a.grdsq;this["cc_"+b+"sub3val"].value=
a.easting;this["cc_"+b+"sub4val"].value=a.northing;d=a.formatResult;break;case "GARS":a=this.getFormattedGARSStr(a,c,!1);this["cc_"+b+"sub1val"].value=a.lon;this["cc_"+b+"sub2val"].value=a.lat;this["cc_"+b+"sub3val"].value=a.quadrant;this["cc_"+b+"sub4val"].value=a.key;d=a.formatResult;break;case "GEOREF":a=this.getFormattedGEOREFStr(a,c,!1);this["cc_"+b+"sub1val"].value=a.lon+a.lat;this["cc_"+b+"sub2val"].value=a.quadrant15lon+a.quadrant15lat;this["cc_"+b+"sub3val"].value=a.quadrant1lon;this["cc_"+
b+"sub4val"].value=a.quadrant1lat;d=a.formatResult;break;case "UTM":a=this.getFormattedUTMStr(a,c,!1);a.bandLetter.match(/^[AaBbYyZz]/)?(this["cc_"+b+"sub1val"].value="",this["cc_"+b+"sub2val"].value="",this["cc_"+b+"sub3val"].value="",this["cc_"+b+"sub4val"].value="",a.formatResult=""):(this["cc_"+b+"sub1val"].value=a.zone,this["cc_"+b+"sub2val"].value=a.bandLetter,this["cc_"+b+"sub3val"].value=a.easting,this["cc_"+b+"sub4val"].value=a.westing);d=a.formatResult;break;case "UTM_H":a=this.getFormattedUTMHStr(a,
c,!1),a.hemisphere.match(/^[AaBbYyZz]/)?(this["cc_"+b+"sub1val"].value="",this["cc_"+b+"sub2val"].value="",this["cc_"+b+"sub3val"].value="",this["cc_"+b+"sub4val"].value="",a.formatResult=""):(this["cc_"+b+"sub1val"].value=a.zone,this["cc_"+b+"sub2val"].value=a.hemisphere,this["cc_"+b+"sub3val"].value=a.easting,this["cc_"+b+"sub4val"].value=a.westing),d=a.formatResult}}else d="";this.coordcontrols&&this.setSubCoordUI(h.contains(this.coordcontrols,"expanded"));this.coordtext&&(k.set(this.coordtext,
"value",d),this.emit("get-coordinate-complete",d))},getFormattedCoordinates:function(){this.getCoordValues(this.currentClickPointDD,this.type,4).then(e.hitch(this,function(a){this.setCoordUI(a)}),e.hitch(this,function(a){console.log(a)}))},updateDisplay:function(){this.currentClickPoint&&(this.currentClickPointDD||(this.currentClickPointDD=this.currentClickPoint),this.getFormattedCoordinates(this.currentClickPointDD),this.input&&(null!==this.graphicsLayer&&(this.graphicsLayer.clear(),this.currentClickPoint.spatialReference.wkid===
this.parentWidget.map.spatialReference.wkid?this.graphicsLayer.add(new E(this.currentClickPoint)):this.getProjectedPoint(this.currentClickPointDD).then(e.hitch(this,function(a){this.graphicsLayer.add(new E(a))}),e.hitch(this,function(a){console.error(a)}))),m.publish("INPUTPOINTDIDCHANGE",{mapPoint:this.currentClickPointDD,inputFromText:!0}),this.zoomButton.parentNode.style.display="inline-block"))},clear:function(){this.coordtext.value="";this.currentClickPointDDDD=this.currentClickPointDD=this.currentClickPoint=
null;this.graphicsLayer.clear()},inputError:function(){this.setCoordUI()},getCleanInput:function(a){a=a.replace(/\n/g,"");a=a.replace(/\s+/g," ").trim();return a.toUpperCase()},getCoordValues:function(a,d,b){var c=new q;a={sr:4326,coordinates:[[a.x,a.y]],conversionType:d.name?d.name:d,numOfDigits:b||6,rounding:!0,addSpaces:!1};switch(d){case "DD":a.numOfDigits=6;break;case "USNG":a.numOfDigits=5;break;case "MGRS":a.conversionMode="mgrsDefault";a.numOfDigits=5;break;case "UTM_H":a.conversionType="utm";
a.conversionMode="utmNorthSouth";a.addSpaces=!0;break;case "UTM":a.conversionType="utm";a.conversionMode="utmDefault";a.addSpaces=!0;break;case "GARS":a.conversionMode="garsDefault"}this.geomsrvc.toGeoCoordinateString(a).then(function(a){c.resolve(a)},function(){c.resolve(null)});return c.promise},getXYNotation:function(a,d){var b=new q,c;c=d.name?d.name:d;d={sr:4326,conversionType:c,strings:[]};switch(c){case "DD":case "DDM":case "DMS":d.numOfDigits=2;a=a.replace(/[\u00b0\u02da\u00ba^~*"'\u2032\u00a8\u02dd]/g,
"");d.strings.push(a);break;case "DDrev":d.conversionType="DD";d.numOfDigits=2;a=a.replace(/[\u00b0\u02da\u00ba^~*"'\u2032\u00a8\u02dd]/g,"");d.strings.push(a);break;case "DDMrev":d.conversionType="DDM";d.numOfDigits=2;a=a.replace(/[\u00b0\u02da\u00ba^~*"'\u2032\u00a8\u02dd]/g,"");d.strings.push(a);break;case "DMSrev":d.conversionType="DMS";d.numOfDigits=2;a=a.replace(/[\u00b0\u02da\u00ba^~*"'\u2032\u00a8\u02dd]/g,"");d.strings.push(a);break;case "USNG":d.strings.push(a);d.addSpaces="false";break;
case "MGRS":d.conversionMode="mgrsNewStyle";d.strings.push(a);d.addSpaces="false";break;case "UTM_H":d.conversionType="utm";d.conversionMode="utmNorthSouth";d.strings.push(a);break;case "UTM":d.conversionType="utm";d.conversionMode="utmDefault";d.strings.push(a);break;case "GARS":d.conversionMode="garsCenter";d.strings.push(a);break;case "GEOREF":d.strings.push(a)}this.geomsrvc.fromGeoCoordinateString(d).then(function(a){b.resolve(a)},function(){b.resolve(null)});return b.promise},getNotations:function(){return[{name:"DD",
pattern:new RegExp([/^(([NS\+\-\s])*([0-8]?\d([,.]\d*)?|90([,.]0*)?)([\u00b0\u02da\u00ba^~*]*)([NS\+\-\s])*)([,:;\s|\/\\]+)/,/(([EW\+\-\s])*([0]?\d?\d([,.]\d*)?|1[0-7]\d([,.]\d*)?|180([,.]0*)?)([\u00b0\u02da\u00ba^~*]*)([EW\+\-\s])*)$/].map(function(a){return a.source}).join("")),notationType:this.nls.DDLatLongNotation,conversionType:"DD"},{name:"DDrev",pattern:new RegExp([/^(([EW\+\-\s])*([0]?\d?\d([,.]\d*)?|1[0-7]\d([,.]\d*)?|180([,.]0*)?)([\u00b0\u02da\u00ba^~*]*)([EW\+\-\s])*)/,/([,:;\s|\/\\]+)(([NS\+\-\s])*([0-8]?\d([,.]\d*)?|90([,.]0*)?)([\u00b0\u02da\u00ba^~*]*)([NS\+\-\s])*)$/].map(function(a){return a.source}).join("")),
notationType:this.nls.DDLongLatNotation,conversionType:"DD"},{name:"DDM",pattern:new RegExp([/^(([NS\+\-\s])*([0-8]?\d|90)[\u00b0\u02da\u00ba^~*\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)['\u2032\s_]*([NS\+\-\s])*)/,/([,:;\s|\/\\]+)/,/(([EW\+\-\s])*([0]?\d?\d|1[0-7]\d|180)[\u00b0\u02da\u00ba^~*\s\-_]+(([0-5]\d|\d)([,.]\d*)?)['\u2032\s_]*([EW\+\-\s])*)/,/[\s]*$/].map(function(a){return a.source}).join("")),notationType:this.nls.DDMLatLongNotation,conversionType:"DDM"},{name:"DDMrev",pattern:new RegExp([/^(([EW\+\-\s])*([0]?\d?\d|1[0-7]\d|180)[\u00b0\u02da\u00ba^~*\s\-_]+(([0-5]\d|\d)([,.]\d*)?)['\u2032\s_]*([EW\+\-\s])*)/,
/([,:;\s|\/\\]+)/,/(([NS\+\-\s])*([0-8]?\d|90)[\u00b0\u02da\u00ba^~*\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)['\u2032\s_]*([NS\+\-\s])*)[\s]*$/].map(function(a){return a.source}).join("")),notationType:this.nls.DDMLongLatNotation,conversionType:"DDM"},{name:"DMS",pattern:new RegExp([/^(([NS\+\-\s])*([0-8]?\d|90)[\u00b0\u02da\u00ba^~*\s\-_]+([0-5]?\d|\d)['\u2032\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)["\u00a8\u02dd\s_]*([NS\+\-\s])*)/,/([,:;\s|\/\\]+)/,/(([EW\+\-\s])*([0]?\d?\d|1[0-7]\d|180)[\u00b0\u02da\u00ba^~*\s\-_]+([0-5]\d|\d)['\u2032\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)["\u00a8\u02dd\s_]*([EW\+\-\s])*)[\s]*$/].map(function(a){return a.source}).join("")),
notationType:this.nls.DMSLatLongNotation,conversionType:"DMS"},{name:"DMSrev",pattern:new RegExp([/^(([EW\+\-\s])*([0]?\d?\d|1[0-7]\d|180)[\u00b0\u02da\u00ba^~*\s\-_]+([0-5]\d|\d)['\u2032\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)["\u00a8\u02dd\s_]*([EW\+\-\s])*)/,/([,:;\s|\/\\]+)/,/(([NS\+\-\s])*([0-8]?\d|90)[\u00b0\u02da\u00ba^~*\s\-_]+([0-5]?\d|\d)['\u2032\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)["\u00a8\u02dd\s_]*([NS\+\-\s])*)[\s]*$/].map(function(a){return a.source}).join("")),notationType:this.nls.DMSLongLatNotation,
conversionType:"DMS"},{name:"GARS",pattern:/^\d{3}[a-zA-Z]{2}[1-4]?[1-9]?$/,notationType:this.nls.GARSNotation,conversionType:"GARS"},{name:"GEOREF",pattern:/^[a-zA-Z]{4}\d{1,8}$/,notationType:this.nls.GEOREFNotation,conversionType:"GEOREF"},{name:"MGRS",pattern:new RegExp([/^\d{1,2}[-,;:\s]*[C-HJ-NP-X][-,;:\s]*[A-HJ-NP-Z]{2}[-,;:\s]*/,/(\d[-,;:\s]+\d|\d{2}[-,;:\s]+\d{2}|\d{3}[-,;:\s]+\d{3}|\d{4}[-,;:\s]+\d{4}|\d{5}[-,;:\s]+\d{5})/,/$|^(\d{1,2}[-,;:\s]*[C-HJ-NP-X][-,;:\s]*[A-HJ-NP-Z]{2}[-,;:\s]*)/,
/(\d{2}|\d{4}|\d{6}|\d{8}|\d{10})?$|^[ABYZ][-,;:\s]*[A-HJ-NP-Z]{2}[-,;:\s]*/,/(\d[-,;:\s]+\d|\d{2}[-,;:\s]+\d{2}|\d{3}[-,;:\s]+\d{3}|\d{4}[-,;:\s]+\d{4}|\d{5}[-,;:\s]+\d{5})/,/$|^[ABYZ][-,;:\s]*[A-HJ-NP-Z]{2}[-,;:\s]*(\d{2}|\d{4}|\d{6}|\d{8}|\d{10})?$/].map(function(a){return a.source}).join("")),notationType:this.nls.MGRSNotation,conversionType:"MGRS"},{name:"UTM",pattern:new RegExp([/^\d{1,2}[-,;:\s]*[c-hj-np-xC-HJ-NP-X][-,;:\s]*\d{1,6}\.?\d*[mM]?[-,;:\s]?\d{1,7}\.?\d*[mM]?$/].map(function(a){return a.source}).join("")),
notationType:this.nls.UTMBandNotation,conversionType:"UTM"},{name:"UTM (H)",pattern:new RegExp([/^\d{1,2}[-,;:\s]*[NnSs][-,;:\s]*\d{1,6}\.?\d*[mM]?[-,;:\s]+\d{1,7}\.?\d*[mM]?$/].map(function(a){return a.source}).join("")),notationType:this.nls.UTMHemNotation,conversionType:"UTM_H"}]},getCoordinateType:function(a){var d=this.getCleanInput(a);a=new q;var b=this.getNotations(),d=y.filter(b,function(a){return a.pattern.test(this.v)},{v:d});0<d.length?a.resolve(d):a.resolve(null);return a.promise},getFormattedDDStr:function(a,
d,b){var c={};c.sourceValue=a;c.sourceFormatString=d;a=a[0].split(/[ ,]+/);c.latdeg=a[0].replace(/[nNsS]/,"");c.londeg=a[1].replace(/[eEwW]/,"");b&&("N"===a[0].slice(-1)?c.latdeg="+"+c.latdeg:c.latdeg="-"+c.latdeg,"W"===a[1].slice(-1)?c.londeg="-"+c.londeg:c.londeg="+"+c.londeg);d=d.replace(/X/,c.londeg);d=d.replace(/[eEwW]/,a[1].slice(-1));d=d.replace(/[nNsS]/,a[0].slice(-1));d=d.replace(/Y/,c.latdeg);c.formatResult=d;return c},getFormattedDDMStr:function(a,d,b){var c={};c.sourceValue=a;c.sourceFormatString=
d;c.parts=a[0].split(/[ ,]+/);c.latdeg=c.parts[0];c.latmin=c.parts[1].replace(/[nNsS]/,"");c.londeg=c.parts[2];c.lonmin=c.parts[3].replace(/[eEwW]/,"");b&&("N"===c.parts[1].slice(-1)?c.latdeg="+"+c.latdeg:c.latdeg="-"+c.latdeg,"W"===c.parts[3].slice(-1)?c.londeg="-"+c.londeg:c.londeg="+"+c.londeg);a=d.replace(/[EeWw]/,c.parts[3].slice(-1));a=a.replace(/Y/,c.lonmin);a=a.replace(/X/,c.londeg);a=a.replace(/[NnSs]/,c.parts[1].slice(-1));a=a.replace(/B/,c.latmin);a=a.replace(/A/,c.latdeg);c.formatResult=
a;return c},getFormattedDMSStr:function(a,d,b){var c={};c.sourceValue=a;c.sourceFormatString=d;c.parts=a[0].split(/[ ,]+/);c.latdeg=c.parts[0];c.latmin=c.parts[1];c.latsec=c.parts[2].replace(/[NnSs]/,"");c.londeg=c.parts[3];c.lonmin=c.parts[4];c.parts[5]&&(c.lonsec=c.parts[5].replace(/[EWew]/,""));b&&("N"===c.parts[2].slice(-1)?c.latdeg="+"+c.latdeg:c.latdeg="-"+c.latdeg,"W"===c.parts[5].slice(-1)?c.londeg="-"+c.londeg:c.londeg="+"+c.londeg);a=d.replace(/A/,c.latdeg);a=a.replace(/B/,c.latmin);a=a.replace(/C/,
c.latsec);a=a.replace(/X/,c.londeg);a=a.replace(/Y/,c.lonmin);a=a.replace(/Z/,c.lonsec);a=a.replace(/[NnSs]/,c.parts[2].slice(-1));c.parts[5]&&(a=a.replace(/[EeWw]/,c.parts[5].slice(-1)));c.formatResult=a;return c},getFormattedUSNGStr:function(a,d){var b={};b.sourceValue=a;b.sourceFormatString=d;a[0].match(/^[ABYZ]/)?b.gzd=a[0].match(/[ABYZ]/)[0].trim():b.gzd=a[0].match(/\d{1,2}[C-HJ-NP-X]/)[0].trim();a[0].replace(b.gzd,"").match(/[a-hJ-zA-HJ-Z]{2}/)&&(b.grdsq=a[0].replace(b.gzd,"").match(/[a-hJ-zA-HJ-Z]{2}/)[0].trim());
a[0].replace(b.gzd+b.grdsq,"").match(/^\d{1,5}/)&&(b.easting=a[0].replace(b.gzd+b.grdsq,"").match(/^\d{1,5}/)[0].trim());a[0].replace(b.gzd+b.grdsq,"").match(/\d{1,5}$/)&&(b.northing=a[0].replace(b.gzd+b.grdsq,"").match(/\d{1,5}$/)[0].trim());a=d.replace(/Y/,b.northing);a=a.replace(/X/,b.easting);a=a.replace(/S/,b.grdsq);a=a.replace(/Z/,b.gzd);b.formatResult=a;return b},getFormattedMGRSStr:function(a,d){var b={};b.sourceValue=a;b.sourceFormatString=d;a[0].match(/^[ABYZ]/)?b.gzd=a[0].match(/[ABYZ]/)[0].trim():
b.gzd=a[0].match(/\d{1,2}[C-HJ-NP-X]/)[0].trim();b.grdsq=a[0].replace(b.gzd,"").match(/[a-hJ-zA-HJ-Z]{2}/)[0].trim();b.easting=a[0].replace(b.gzd+b.grdsq,"").match(/^\d{1,5}/)[0].trim();b.northing=a[0].replace(b.gzd+b.grdsq,"").match(/\d{1,5}$/)[0].trim();a=d.replace(/Y/,b.northing);a=a.replace(/X/,b.easting);a=a.replace(/S/,b.grdsq);a=a.replace(/Z/,b.gzd);b.formatResult=a;return b},getFormattedGARSStr:function(a,d){var b={};b.sourceValue=a;b.sourceFormatString=d;b.lon=a[0].match(/\d{3}/);b.lat=a[0].match(/[a-zA-Z]{2}/);
a=a[0].match(/\d*$/);b.quadrant=a[0][0];b.key=a[0][1];d=d.replace(/K/,b.key);d=d.replace(/Q/,b.quadrant);d=d.replace(/Y/,b.lat);d=d.replace(/X/,b.lon);b.formatResult=d;return b},getFormattedGEOREFStr:function(a,d){var b={};b.sourceValue=a;b.sourceFormatString=d;b.lon=a[0].match(/[a-zA-Z]{1}/)[0].trim();b.lat=a[0].replace(b.lon,"").match(/[a-zA-Z]{1}/)[0].trim();b.quadrant15lon=a[0].replace(b.lon+b.lat,"").match(/[a-zA-Z]{1}/)[0].trim();b.quadrant15lat=a[0].replace(b.lon+b.lat+b.quadrant15lon,"").match(/[a-zA-Z]{1}/)[0].trim();
a=a[0].replace(b.lon+b.lat+b.quadrant15lon+b.quadrant15lat,"");b.quadrant1lon=a.substr(0,a.length/2);b.quadrant1lat=a.substr(a.length/2,a.length);d=d.replace(/Y/,b.quadrant1lat);d=d.replace(/X/,b.quadrant1lon);d=d.replace(/D/,b.quadrant15lat);d=d.replace(/C/,b.quadrant15lon);d=d.replace(/B/,b.lat);d=d.replace(/A/,b.lon);b.formatResult=d;return b},getFormattedUTMStr:function(a,d){var b={};b.sourceValue=a;b.sourceFormatString=d;b.parts=a[0].split(/[ ,]+/);b.zone=b.parts[0].replace(/[A-Z]/,"");b.bandLetter=
b.parts[0].slice(-1);b.easting=b.parts[1];b.westing=b.parts[2];a=d.replace(/Y/,b.westing);a=a.replace(/X/,b.easting);a=a.replace(/B/,b.bandLetter);a=a.replace(/Z/,b.zone);b.formatResult=a;return b},getFormattedUTMHStr:function(a,d){var b={};b.sourceValue=a;b.sourceFormatString=d;b.parts=a[0].split(/[ ,]+/);b.zone=b.parts[0].replace(/[A-Z]/,"");b.hemisphere=b.parts[0].slice(-1);b.easting=b.parts[1];b.westing=b.parts[2];a=d.replace(/Y/,b.westing);a=a.replace(/X/,b.easting);a=a.replace(/H/,b.hemisphere);
a=a.replace(/Z/,b.zone);b.formatResult=a;return b}})});