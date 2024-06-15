"use strict";
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 1513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ modal),
  "d": () => (/* reexport */ useModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./common/recoil/modal/modal.atom.tsx


const modalAtom = (0,external_recoil_.atom)({
    key: "modal",
    default: {
        modal: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
        opened: false
    }
});

;// CONCATENATED MODULE: ./common/recoil/modal/modal.hooks.tsx



const useModal = ()=>{
    const setModal = (0,external_recoil_.useSetRecoilState)(modalAtom);
    const openModal = (modal)=>setModal({
            modal,
            opened: true
        })
    ;
    const closeModal = ()=>setModal({
            modal: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
            opened: false
        })
    ;
    return {
        openModal,
        closeModal
    };
};


;// CONCATENATED MODULE: ./common/recoil/modal/index.ts


/* harmony default export */ const modal = (modalAtom);



/***/ })

};
;