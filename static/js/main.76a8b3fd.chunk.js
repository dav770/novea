(this.webpackJsonpnovea=this.webpackJsonpnovea||[]).push([[0],{137:function(e,t,a){e.exports=a(429)},141:function(e,t,a){},142:function(e,t,a){},429:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a.n(i),o=(a(141),a(7)),c=a(8),s=a(10),u=a(9),m=(a(142),a(83),r.a.createContext()),d=a(54),p=a(135),h=a(143),v=function(){console.log("Done!!!!")};var f=function(){return r.a.createElement("div",{className:"row justifyCenter "},r.a.createElement(h,{sitekey:"6LcywK4ZAAAAAMmuGNCcw5rwEAOqxZszGwH8N5PB",render:"explicit",onloadCallback:v}))};var g=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),i=a[0],l=a[1];return r.a.createElement(m.Consumer,null,(function(t){var a;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("label",null,r.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",onClick:function(e){return function(e){e.target.checked?l(!0):l(!1)}(e)}}),"I agree to the"," ",r.a.createElement("u",null,r.a.createElement("a",{href:"http://"},"Terms and Conditions"))),r.a.createElement("div",{className:"row row-center"},e.leState.notYou&&r.a.createElement(f,null)),r.a.createElement("div",{className:"row justifyCenter"},i?r.a.createElement("button",(a={type:"button",className:"btn btn-outline-primary form-control",style:{width:"200px"}},Object(d.a)(a,"style",{marginLeft:"20%",width:"200px"}),Object(d.a)(a,"onClick",(function(){return function(t){if(t.urlValide&&t.nameValide&&t.emailValide&&t.identNameValide)return e.validateAccount(!0)}(t)})),a),"Create My Account"):r.a.createElement("button",Object(d.a)({type:"button",className:"btn btn-outline-primary form-control",style:{width:"200px"},disabled:!0},"style",{marginLeft:"20%",width:"200px"}),"Create My Account"),r.a.createElement("u",null,r.a.createElement("a",{href:"",style:{alignText:"right",marginLeft:"20%"}},"All read have one")))),console.log("hg",t))}))};var E=function(e){return"signUp"===e.page&&r.a.createElement("h6",{className:"inf-note"},"SignUp to JTI!",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae facere at reiciendis veritatis dignissimos quos aliquid repellat mollitia ratione pariatur odit, quaerat molestias, quod est minus suscipit sunt animi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem vel quis velit nihil tempore aperiam repellendus dolor esse, blanditiis illum dolorum a sit deleniti sapiente suscipit id nulla iste qui quam hic voluptatem magnam accusamus fugiat saepe! Excepturi neque molestias nam placeat sed minus dolorum ullam nemo nisi, impedit iure aliquid laboriosam accusamus obcaecati odio inventore, veniam amet architecto beatae aut. Vero maxime dolores deserunt! Vel sed iure dolor earum, illum in aliquid laboriosam iste ad sint dicta tempore nulla saepe perspiciatis, cum incidunt libero recusandae, assumenda nisi deleniti labore? Saepe, reprehenderit dolor molestias aliquam exercitationem delectus dicta beatae officiis numquam nostrum incidunt eligendi sint consequatur eum, possimus vero hic repudiandae officia aliquid iste commodi maiores nemo. Quo enim reprehenderit quia nihil reiciendis quibusdam voluptatibus beatae eveniet voluptas eos asperiores aspernatur ex voluptates dicta excepturi exercitationem veritatis corrupti, tenetur laudantium cupiditate sit iste eligendi optio. Architecto incidunt earum corporis maxime quas debitis eligendi facere dolores aliquid, sunt enim sit possimus. Nisi quo consequuntur voluptatem nemo neque, aut consectetur numquam illum fugit aliquid, sit quisquam. Odio autem aperiam, odit nulla laboriosam, minima ipsa ducimus pariatur corrupti a architecto ab asperiores tempora porro rerum nemo quod eveniet. Aperiam itaque cumque enim omnis assumenda at id corporis ipsam deserunt, nihil sit esse quaerat mollitia fugiat cupiditate quis, ex beatae magni ratione! Id iure est quis ratione temporibus")},b=a(76),y=a(136),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={code:"77ojw7m0uyp573",errorMessage:"",dataConnect:!1},e.handleSuccess=function(t){e.setState({code:"",errorMessage:"",dataConnect:!0})},e.handleFailure=function(t){e.setState({code:"",errorMessage:t.errorMessage,status:!1})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.props.recieveLinkedin(!0)}),8e3)}},{key:"render",value:function(){var e=this.props.leState.dataConnect,t=e.status;Object(y.a)(e,["status"]);return console.log("Linkedin",t),r.a.createElement("div",{className:"App"},r.a.createElement(b.a,{clientId:"77ojw7m0uyp573",onFailure:this.handleFailure,onSuccess:this.handleSuccess,redirectUri:"http://inkedin.com/company/david770"}))}}]),a}(n.Component),C=a(128),N=a.n(C),O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).actionConnect=function(e){n.setState((function(t,a){var n=Object.assign({},t.dataConnect);return n.status=e,{dataConnect:n}})),n.props.recieveDetails("YourDetails",!0)},n.state=n.props.leState,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(N.a,{leState:this.state})),r.a.createElement("div",{className:"col"},r.a.createElement(w,{leState:this.state,recieveLinkedin:this.actionConnect}))),r.a.createElement("div",{id:"space-form"}),r.a.createElement("div",{className:"inf-note2"},"or signUp by ",r.a.createElement("u",null,r.a.createElement("a",{href:"#"},"Email"))))}}]),a}(n.Component),j=(a(150),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).OtherIdentity=function(){n.props.recieveDetails("YourDetailsConfirmConnect",!0)},n.state=n.props.leState,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},"Successfully connected as :",r.a.createElement("img",{className:"Ajust-Image",src:"/dav770/novea.github.io.git/avatar.png",alt:"avatar"}),r.a.createElement("div",null,this.state.dataConnect.name)),r.a.createElement("div",{className:"col-9"},r.a.createElement("u",null,r.a.createElement("p",{onClick:this.OtherIdentity,style:{alignText:"right",marginLeft:"20%"},id:"simul-a"},"Not You ?")))),r.a.createElement("div",{id:"space-form"}),r.a.createElement("div",{className:"inf-note2"},"or signUp by ",r.a.createElement("u",null,r.a.createElement("a",{href:"#"},"Email"))))}}]),a}(n.Component)),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).returnHandleBlur=function(e){n.props.handleBlur(e)},n.state=n.props.leState,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("label",{id:"Mylabel"},"Name"),r.a.createElement("input",{name:"nameOther",type:"text",className:"form-control",placeholder:"First name",onBlur:this.returnHandleBlur}),r.a.createElement("b",{style:{color:"red"}},this.props.leState.warningIdentName)),r.a.createElement("div",{className:"col"},r.a.createElement("label",{id:"Mylabel"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Compagny Email",onBlur:this.returnHandleBlur}),r.a.createElement("b",{style:{color:"red"}},this.props.leState.warningEmail))))}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).returnHandleBlur=function(e){n.props.handleBlur(e)},n.state=n.props.leState,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("label",{id:"Mylabel"},"Name"),r.a.createElement("input",{name:"nameCompagny",type:"text",className:"form-control",placeholder:"First name",onBlur:this.returnHandleBlur}),r.a.createElement("b",{style:{color:"red"}},this.props.leState.warningName)),r.a.createElement("div",{className:"col"},r.a.createElement("label",{id:"Mylabel"},"Website"),r.a.createElement("input",{type:"url",className:"form-control",placeholder:"Compagny Website",onBlur:this.returnHandleBlur}),r.a.createElement("b",{style:{color:"red"}},this.props.leState.warningUrl))))}}]),a}(n.Component);var q=function(){return r.a.createElement("div",null,"Great! You did it :) Hi Yedidia and welcome aboard! An email has been sent to your inbox (yhaouzi@company.com) with your connection details and platform link. Don't forget to confirm your email so you can continue to use JTI services. Now you'll be automatically redirected... Enjoy! Redirecting in... 10 seconds")},x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).callBackValidate=function(e){n.setState((function(t,a){return{validate:e}}))},n.handleBlur=function(e){var t=!1,a=!1;if("url"===e.target.type){if(new RegExp("^((http|https)://){1}(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|/|=|?)?]+)+$").test(e.target.value))t=!0;else new RegExp("^((http|https)://)?(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|/|=|?)?]+)+$").test(e.target.value)&&(a=!0);t||a?(e.target.classList.add("error-field"),n.setState({urlValide:!0,warningUrl:""})):(e.target.classList.add("error-field"),n.setState({urlValide:!1,warningUrl:"Url format not valid"}))}if("email"===e.target.type){var r=e.target.value.lastIndexOf("@"),i=e.target.value.lastIndexOf(".");return r<=0||i<=0?(e.target.classList.add("error-field"),void n.setState({emailValide:!1,warningEmail:"Email format not valid"})):(e.target.classList.remove("error-field"),void n.setState({emailValide:!0,warningEmail:""}))}"text"===e.target.type&&e.target.value.length<3?(e.target.classList.add("error-field"),"nameCompagny"===e.target.name?n.setState({nameValide:!1,warningName:"At least 3 chars"}):n.setState({identNameValide:!1,warningIdentName:"At least 3 chars"})):(e.target.classList.remove("error-field"),"nameCompagny"===e.target.name?n.setState({nameValide:!0,warningName:""}):n.setState({identNameValide:!0,warningIdentName:""}))},n.actionConnect=function(e,t){"YourDetails"===e&&n.setState((function(e,a){var n=Object.assign({},e.dataConnect);return n.status=t,{dataConnect:n}})),"YourDetailsConfirmConnect"===e&&n.setState((function(e,t){return{notYou:!0}}))},n.state=n.props.leState,n.state.dataConnect=n.props.dataConnect,n}return Object(c.a)(a,[{key:"componentDidMount",value:function(e,t,a){}},{key:"componentDidUpdate",value:function(e,t){if(console.log("redirect",this.state.validate),this.state.validate)setTimeout((function(){return r.a.createElement(i.Redirect,{to:"/SignIn"})}),1e4)}},{key:"render",value:function(){return console.log("signup",this.state),r.a.createElement(m.Provider,{value:this.state},!this.state.validate&&r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row justifyCenter"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(E,{page:"signUp"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("fieldset",null,r.a.createElement("legend",{id:"Mylegend"},"Your Compagny detail's:"),r.a.createElement(k,{leState:this.state,handleBlur:this.handleBlur}))),r.a.createElement("div",{id:"space-form"}),r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("legend",{id:"Mylegend"},"Your details:"),!this.state.dataConnect.status&&!this.state.notYou&&r.a.createElement(O,{leState:this.state,recieveDetails:this.actionConnect}),this.state.dataConnect.status&&!this.state.notYou&&r.a.createElement(j,{leState:this.state,recieveDetails:this.actionConnect}),this.state.notYou&&r.a.createElement(S,{leState:this.state,handleBlur:this.handleBlur}))))),r.a.createElement("div",{className:"form-check"},r.a.createElement(g,{leState:this.state,validateAccount:this.callBackValidate}))),this.state.validate&&r.a.createElement(q,null))}}]),a}(n.Component),A=a(133),B=a(3),V=a(79),I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"en cours !!!!!")}}]),a}(n.Component),L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={validate:!1,googleId:null,agreeterms:!1,urlValide:!1,nameValide:!1,warningName:"",warningUrl:"",notYou:!1,emailValide:!1,identNameValide:!1,warningIdentName:"",warningEmail:"",dataConnect:[]},n.state.dataConnect=Object.keys(V).map((function(e){return[String(e),V[e]]})),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(A.a,null,r.a.createElement(B.c,null,r.a.createElement(B.a,{exact:!0,path:"/",component:function(){return r.a.createElement(x,{leState:e.state,dataConnect:e.state.dataConnect[0][1][0]})}}),r.a.createElement(B.a,{path:"/SignIn",component:I})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e){e.exports=JSON.parse('{"users":[{"id":1,"name":"roy","status":false,"avatar":"/src/asset/avatar.png","email":"roy@hotmail.com","contactList":[{"name":"Andre","email":"andre@io.com"},{"name":"Anne","email":"Anne@io.com"},{"name":"Felix","email":"Felix@io.com"}],"phone":"01.25.25.25.89","title":"director"}]}')},83:function(e,t,a){}},[[137,1,2]]]);
//# sourceMappingURL=main.76a8b3fd.chunk.js.map