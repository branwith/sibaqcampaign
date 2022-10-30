import {
    j as z,
    a as E,
    F as R,
    l as s,
    y as B,
    C as G,
    A as _,
    b as $,
    c as M,
    d as U,
    e as W,
    S as V
} from "./vendor.fa390c61.js";
const q = function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]')) o(t);
    new MutationObserver(t => {
        for (const r of t)
            if (r.type === "childList")
                for (const d of r.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && o(d)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function c(t) {
        const r = {};
        return t.integrity && (r.integrity = t.integrity), t.referrerpolicy && (r.referrerPolicy = t.referrerpolicy), t.crossorigin === "use-credentials" ? r.credentials = "include" : t.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function o(t) {
        if (t.ep) return;
        t.ep = !0;
        const r = c(t);
        fetch(t.href, r)
    }
};
q();
const e = z,  
    a = E,
    I = R;
let A = document.createElement("div");
var f;
let p = new Image,
    K = 1000,
    Y = 1000,
    N = 210,
    x = 100,
    L = 590,
    O = 750;

function J(g) {
    let n = document.createElement("input");
    const [c, o] = s(!1), [t, r] = s(null), [d, k] = s(null), [h, S] = s(null), [v, j] = s(null), [D, y] = s(null), [C, F] = s(null);
    p.src = "https://raw.githubusercontent.com/branwith/sibaqcampaign/main/Profile%20frame.png", p.onload = () => {
        r(1)
    };
    let w = new Image;
    w.src = d, w.onload = () => {
        S(1)
    };
    let m = document.createElement("canvas"),
        i = m.getContext("2d");
    m.width = K, m.height = Y, B(() => {
        H()
    }, [h, C]);

    function H() {
        if (t && h) {
            i.drawImage(w, N, x), i.drawImage(p, 0, 0), i.font = "600 30px Roboto", i.fillStyle = "white";
            let l = C.toLocaleUpperCase(),
                u = i.measureText(l).width;
            i.shadowBlur = 5, i.shadowColor = "black", i.fillText(l, N + L / 2 - u / 2, x + O + 50), j(m.toDataURL("image/jpeg"))
        } else console.log(t, h)
    }
    n.type = "file";
    let b;
    n.onchange = () => {
        let l = n.files[0],
            u = new FileReader;
        u.readAsDataURL(l), u.onload = () => {
            b = u.result, P()
        }
    };

    function P() {
        o(!0), f = new G(A, {
            url: b,
            viewport: {
                height: O,
                width: L
            }
        })
    }

    function T() {
        return e(I, {
            children: D && e("div", {
                onClick: () => {
                    y(!1)
                },
                className: "preview",
                children: e("img", {
                    src: v,
                    alt: "",
                    srcset: ""
                })
            })
        })
    }
    return a(I, {
        children: [e("div", {
            style: {
                backgroundImage: `url(${p.src ? p.src : ""})`
            },
            className: "Header"
        }), a("div", {
            className: "Cont",
            children: [e("h1", {
                children: "Generate Poster"
            }), a("div", {
                className: "Actions",
                children: [e("input", {
                    value: C,
                    onInput: l => {
                        F(l.target.value)
                    },
                    type: "text",
                    placeholder: "Your name here"
                }), e("button", {
                    onClick: () => {
                        n.click()
                    },
                    children: e(_, {
                        size: "30"
                    })
                })]
            }), v && a("div", {
                className: "GetAct",
                children: [e("a", {
                    href: v,
                    download: "campaign poster",
                    children: e("button", {
                        children: e($, {
                            size: "20"
                        })
                    })
                }), e("button", {
                    onClick: () => {
                        y(!0)
                    },
                    children: e(M, {
                        size: "20"
                    })
                })]
            })]
        }), e("div", {
            ref: l => {
                l && (l.innerHTML = "")
            }
        }), e(T, {}), e(Q, {
            setCroppedImg: k,
            visible: c,
            set: o
        })]
    })
}

function Q({
    visible: g,
    set: n,
    setCroppedImg: c
}) {
    return a("div", {
        className: g ? "vi" : "hi",
        children: [e("div", {
            ref: o => {
                o && (o.innerHTML = "", o.append(A))
            },
            className: "Crop"
        }), a("div", {
            className: "Tools",
            children: [e("button", {
                onClick: () => {
                    f.destroy(), n(!1)
                },
                children: e(U, {
                    size: "30"
                })
            }), e("button", {
                onClick: () => {
                    f.result().then(o => {
                        c(o), f.destroy(), n(!1)
                    })
                },
                children: e(W, {
                    size: "30"
                })
            })]
        })]
    })
}
V(e(J, {}), document.getElementById("app"));
