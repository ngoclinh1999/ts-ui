(this["webpackJsonpreact-social"]=this["webpackJsonpreact-social"]||[]).push([[30],{1148:function(e,t,a){"use strict";a.r(t);var n,r=a(15),o=a(8),l=a(43),u=a(49),c=a(45),i=a(86),s=a(48),d=a(800),m=a(1128),b=a(824),p=a(1135),h=a(1129),g=a(524),f=a(1112),O=a(473),v=a(308),j=a(471),E=a(292),I=a.n(E),D=a(178),A=a(546),y=a.n(A),w=a(1100),P=a.n(w),C=a(1101),k=a.n(C),S=a(553),M=a(608),N=a(521),x=a(258),T=a.n(x),L=a(690),R=a(0),U=a.n(R),q=a(1037),G=a.n(q),H=a(604),J=a.n(H),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).handleClosePictureDialog=function(){a.setState({pictureDialogOpen:!1})},a.handleOpenPictureDialog=function(){a.setState({pictureDialogOpen:!0})},a.renderGrid=function(e){var t=a.props,n=t.images,r=t.classes,o=t.onDelete,l=t.isOwner,u=q.transitions.scaleDown;return U.a.createElement(G.a,{monitorImagesLoaded:!0,columnWidth:300,duration:600,gutterWidth:15,gutterHeight:15,easing:q.easings.cubicOut,appearDelay:60,appear:u.appear,appeared:u.appeared,enter:u.enter,entered:u.entered,leaved:u.leaved},n.map((function(t,a){return U.a.createElement("figure",{key:t.src,className:"image-stack"},U.a.createElement(L.a,{src:t.url,width:"300px",height:"300px",onClick:function(){console.log("index",a),e(a)}}),l&&U.a.createElement("div",{className:r.deleteIcon},void 0!==t.url?U.a.createElement(g.a,{className:r.icon,onClick:function(){return o(t)}},U.a.createElement(T.a,{style:{color:"white"}})):U.a.createElement(N.a,{className:r.progress,size:30,style:{color:"white",marginLeft:10}})),U.a.createElement("figcaption",null,t.caption))})))},a.state={pictureDialogOpen:!1},a.handleClosePictureDialog=a.handleClosePictureDialog.bind(Object(i.a)(a)),a.handleOpenPictureDialog=a.handleOpenPictureDialog.bind(Object(i.a)(a)),a.renderGrid=a.renderGrid.bind(Object(i.a)(a)),a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.images,n=t.classes;return U.a.createElement(J.a,{images:a,renderImageFunc:function(t){return U.a.createElement("div",{className:n.root},e.renderGrid(t))}})}}]),t}(R.Component),z=I()((function(e){return{gridList:{overflowY:"hidden"},deleteIcon:{position:"absolute",top:0,right:0,backgroundColor:"#b3b3b347",borderRadius:"50%"}}}))(W),F=a(106),B=a(554),Y=a(1099),Z=a(95),K=a(551),Q=a(61),V=a(102),X=a(39),$=a(22),_=a(46),ee=a(5),te=a(50),ae=a(33),ne=a(539),re=a(19),oe=a(184),le=function(e,t){return{deleteImage:function(t,a){return e(_.dbDeleteImage(t,$.a.data.imageFolderPath,a))},setHomeTitle:function(t){return e(ee.setHeaderTitle(t||""))},showTopLoading:function(){return e(ee.showTopLoading())},hideTopLoading:function(){return e(ee.hideTopLoading())}}},ue=function(){var e=X.a.selectCurrentUser(),t=oe.a.selectMoreImages(),a=ne.a.selectRequest(),n=V.b.selectSearchPosts();return function(r,o){var l=e(r).toJS(),u=te.a.createServerRequestId(ae.a.SearchPosts,l.userId),c=a(r,{requestId:u}),i=t(r,{albumId:o.currentAlbum.id}),s=n(r);return{hasMorePhotos:i,currentUser:l,searchRequestStatus:c?c.status:re.a.NoAction,posts:s,requestId:u}}},ce=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).loader=function(){var e=a.props.loadPhotos;e&&e(0)},a.handleDelete=function(e){var t=a.props,n=t.deleteImage,r=t.onDelete;n&&n(e.objectId,e.fileName),r&&r(e.objectId)},a.renderGallery=function(){var e=a.props,t=e.images,n=e.currentUser,r=e.currentAlbum,o=a.state.width;return U.a.createElement(Y.a,{bounds:!0,onResize:function(e){return a.setState({width:e.bounds.width})}},(function(e){var l=e.measureRef;if(o<1)return U.a.createElement("div",{ref:l});var u=1;return o>=480&&(u=2),o>=1024&&(u=3),o>=1824&&(u=4),U.a.createElement("div",{ref:l},U.a.createElement(z,{isOwner:!(!r||!n)&&r.ownerUserId===n.userId,images:t,cols:u,onDelete:a.handleDelete}))}))},a.state={lightboxIsOpen:!1,currentImage:0,width:-1},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.hasMorePhotos;return U.a.createElement(B.a,{dataLength:t?t.length:0,next:this.loader,hasMore:a,endMessage:"",loader:U.a.createElement(K.a,{key:"stream-load-more-progress"})},this.renderGallery())}}]),t}(R.Component),ie=Object(F.c)("translations")(ce),se=Object(Z.withRouter)((n=I()((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450,transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"}}}))(ie),Object(Q.connect)(ue,le)(n))),de=a(4),me=a(202),be=a(122),pe=a.n(be),he=a(181),ge=a(17),fe=a(133),Oe=function(e,t){var a=t.match.params,n=a.userId,r=a.albumId;return{updateAlbum:function(t,a){return e(ge.f.dbUpdatePost(t,a))},loadImages:function(){return e(ge.e.dbFetchAlbumImages(n,r))},loadAlbum:function(){return e(ge.f.dbGetPostById(n,r))},uploadImage:function(t,a){return e(ge.e.dbUploadImage(t,a))},deleteAlbum:function(t){return e(ge.f.dbDeletePost(t))},setHomeTitle:function(t){return e(ge.d.setHeaderTitle(t||""))},showTopLoading:function(){return e(ge.d.showTopLoading())},hideTopLoading:function(){return e(ge.d.hideTopLoading())},openAlbum:function(){return e(ge.d.openDialog(he.a.Album))},closeAlbum:function(){return e(ge.d.closeDialog(he.a.Album))}}},ve=function(){var e=X.a.selectCurrentUser(),t=oe.a.selectMoreImages(),a=ne.a.selectRequest(),n=oe.a.selectAlbumImages(),r=V.b.selectPost(),o=fe.a.selectDialogState(),l=fe.a.selectProgress();return function(u,c){var i=c.match.params,s=(i.userId,i.albumId),d=e(u).toJS(),m=o(u,{type:he.a.Album}),b=l(u),p=te.a.createServerRequestId(ae.a.StreamGetPosts,d.userId),h=a(u,{requestId:p}),g=t(u,s),f=n(u,{albumId:s}).toJS(),O=r(u,{postId:s}).toJS(),v=O.ownerUserId===d.userId;return{hasMoreImages:g,currentUser:d,streamRequestStatus:h?h.status:re.a.NoAction,images:f,requestId:p,currentAlbum:O,progress:b,albumDialogOpen:m,isOwner:v}}};function je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).selectedPhotos=[],a.handleCloseMenu=function(){a.setState({anchorElMenu:null})},a.handleOpenMenu=function(e){a.setState({anchorElMenu:e.currentTarget})},a.closeAlbumDialog=function(){var e=a.props.closeAlbum;e&&e()},a.openAlbumDialog=function(){var e=a.props.openAlbum;e&&e()},a.onUploadAlbumChange=function(e){var t=a.props.uploadImage;if(t){for(var n=e.currentTarget.files,r=[],o=0;o<n.length;o++){var l=n[o],u=S.a.getExtension(l.name),c="".concat(pe()(),".").concat(u);r.push({file:URL.createObjectURL(l),fileName:c}),t(l,c)}a.selectedPhotos=r,a.openAlbumDialog(),e.currentTarget.value=null}},a.handleDeleteImage=function(e){var t=a.props,n=t.updateAlbum,o=t.currentAlbum,l=t.images;if(o&&o.album&&o.album.photos&&n&&l&&l.length>0){var u=[];l.slice(0,4).forEach((function(t){t.id!==e&&u.push({url:t.url,fileId:t.id,fileName:t.fileName})})),o.album.photos=u.map((function(e){return e.url})),u.length>0?(o.image=u[0].url,o.album.cover=u[0].url,o.album.coverId=u[0].fileId):(o.image="",o.album.cover="",o.album.coverId=""),n(Object(de.fromJS)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?je(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):je(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o)),(function(){console.log("Album Deleted!")}))}},a.handleDeleteAlbum=function(){var e=a.props,t=e.deleteAlbum,n=e.currentAlbum;t&&n&&(t(n.id),a.setState({anchorElMenu:null}))},a.state={anchorElMenu:null},a.loadData=a.loadData.bind(Object(i.a)(a)),a.handleCloseMenu=a.handleCloseMenu.bind(Object(i.a)(a)),a.handleOpenMenu=a.handleOpenMenu.bind(Object(i.a)(a)),a.handleDeleteAlbum=a.handleDeleteAlbum.bind(Object(i.a)(a)),a.handleDeleteImage=a.handleDeleteImage.bind(Object(i.a)(a)),a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this.props;(0,e.setHomeTitle)((0,e.t)("header.home"))}},{key:"loadData",value:function(){var e=this.props,t=e.loadImages,a=e.loadAlbum;t&&a&&(a(),t())}},{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this.props,t=e.images,a=e.t,n=e.classes,r=e.currentAlbum,o=e.albumDialogOpen,l=e.isOwner,u=e.progress,c=this.state.anchorElMenu,i=r&&r.album?r.album:{title:""},s=void 0!==o&&o,E=U.a.createElement("div",null,U.a.createElement(g.a,{"aria-owns":c?"circle-menu":"","aria-haspopup":"true",onClick:this.handleOpenMenu},U.a.createElement(y.a,null)),U.a.createElement(j.a,{id:"current-user-menu-root",anchorEl:c,open:Boolean(c),onClose:this.handleCloseMenu,PaperProps:{style:{maxHeight:900,boxShadow:"0 1px 4px 0 rgba(0,0,0,0.14)"}}},U.a.createElement(O.a,{role:"menu"},U.a.createElement(f.a,{onClick:this.handleDeleteAlbum}," ",a("album.deleteAlbum")," ")))),I=U.a.createElement(b.a,null,U.a.createElement("input",{accept:"image/*",className:n.input,id:"album-button-file",multiple:!0,onChange:this.onUploadAlbumChange,type:"file"}),U.a.createElement("div",{className:n.header},U.a.createElement("label",{htmlFor:"album-button-file"},U.a.createElement(d.a,{component:"span",color:"primary"},U.a.createElement(P.a,null),a("album.addPhotos"))))),A=U.a.createElement("div",null,U.a.createElement(m.a,{className:n.card},U.a.createElement(h.a,{avatar:U.a.createElement(me.a,{fileName:r&&r.image?r.image:"",fullName:i.title}),action:l&&E,title:i.title,subheader:r&&r.body?r.body:""}),l&&I,U.a.createElement(p.a,null,U.a.createElement(se,{loadPhotos:this.loadData,onDelete:this.handleDeleteImage,images:t,currentAlbum:r}))),s?U.a.createElement(M.a,{currentAlbum:r,open:s,progress:u,photos:this.selectedPhotos,onClose:this.closeAlbumDialog}):"");return r&&Object.keys(r).length>0?A:U.a.createElement(v.a,{className:n.noAlbumRoot},U.a.createElement(k.a,{className:n.noAlbumIcon}),U.a.createElement(D.a,{variant:"body1",className:n.noAlbumText},a("album.noExistAlbum")))}}]),t}(R.Component),Ie=Object(F.c)("translations")(Ee),De=Object(Z.withRouter)(function(e){return Object(Q.connect)(ve,Oe)(e)}(I()((function(e){return{root:{},gridCell:Object(r.a)({},e.breakpoints.down("sm"),{maxWidth:"100% !important",width:"100%"}),noAlbumRoot:{maxWidth:500,textAlign:"center",margin:"0 auto",minHeight:150},noAlbumIcon:{color:"#afafaf",fontSize:74},noAlbumText:{}}}))(Ie)));t.default=De},551:function(e,t,a){"use strict";var n=a(8),r=a(43),o=a(49),l=a(45),u=a(48),c=a(631),i=a(521),s=a(0),d=a.n(s),m=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.theme;return d.a.createElement("div",{key:"load-more-progress",className:"g-load-more"},d.a.createElement(i.a,{size:30,thickness:5,style:{color:e.palette.primary.light}}))}}]),t}(s.Component),b=Object(c.a)(m);t.a=b}}]);