/**
 * Created by Carlos Malleux.
 */
let num = 0;
function _HtmlAdd() {
    let _pt = _HtmlAdd.prototype;
    let _h = function (tag, arg) {
        let n = document.createElement("DIV");
        let ele;
        let newEle = null;
        switch ( tag.toLowerCase() ){
            case "svg": case "stop": case "defs": case "rect": case "lineargradient" : case "circle" :
                case "g" : case "path" :
            newEle = document.createElementNS("http://www.w3.org/2000/svg", tag );
            break;
            default :
                newEle = document.createElement( tag.toUpperCase() );
                break;
        }
        let test = false;
        if(!arg){
            // return empty object
        }

        else if (test  && arg.length === 1) {
            if (typeof arg[0] === "object") {
                let nObj = arg[0];
                if (nObj.tagName || nObj.tagName === "INPUT") {
                    newEle.appendChild(nObj);
                } else {
                    for (let a in nObj) {
                        let t = document.createTextNode("");
                        newEle.appendChild(t);
                        switch ( tag.toLowerCase() ){
                            case "svg": case "stop": case "defs": case "rect": case "lineargradient" : case "circle" :
                            case "g" : case "path" :
                            newEle.setAttribute( a , nObj[a]);
                            break;
                            default :
                                newEle.setAttribute(a.toUpperCase(), nObj[a]);
                                break;
                        }
                    }
                }
            }
            else if (typeof arg[0] === "string") {
                newEle.innerHTML = arg[0];
            } else {
                newEle.appendChild(arg[0]);
            }
        }
        else {
            for (let i in arg) {
                if (typeof arg[i] === "object") {
                    let nObj = arg[i];
                    if (nObj.tagName  || arg[i].tagName === "INPUT") {
                        newEle.appendChild(arg[i]);
                    }
                    else {
                        Object.keys(nObj).forEach(function (k, i) {
                            if (typeof nObj[k] === "function") {
                                //eval( "var run = function(){ newEle." + k + " = function () { nObj[k](); }; }"); run();
                                newEle[k] = nObj[k];
                            }else {
                                switch ( tag.toLowerCase() ){
                                    case "svg": case "stop": case "defs": case "rect": case "lineargradient" : case "circle" :
                                    case "g" : case "path" :
                                    newEle.setAttribute( k, nObj[k] );
                                    break;
                                    default :
                                        newEle.setAttribute( k.toUpperCase(), nObj[k] );
                                        break;
                                }
                            }
                        })
                    }
                }
                else if (typeof arg[i] === "string") {
                    if(arg[i] !== ""){
                        newEle.innerHTML += arg[i];
                    }

                }
                else if (typeof arg[i] === "function") {
                    //eval( "var run = " + arg[i]);
                    newEle.onclick = arg[i];
                } else {
                    let t = document.createTextNode(arg[i]);
                    newEle.appendChild(t);
                }
            }
        }
        num++;
        /* newEle.function = function (func) {
            eval( "var run = "+func);
            newEle.function = run;
        }; */
        return newEle;
    };

    //The Root Element
    _pt.html = function (a) {
        return !arguments.length ? _h("html", a) : _h("html", arguments);
    };
    //Metadata
    _pt.head = function (a) {
        return !arguments.length ? _h("head", a) : _h("head", arguments);
    };
    _pt.title = function (a) {
        return !arguments.length ? _h("title", a) : _h("title", arguments);
    };
    _pt.base = function (a) {
        return !arguments.length ? _h("base", a) : _h("base", arguments);
    };
    _pt.link = function (a) {
        return !arguments.length ? _h("link", a) : _h("link", arguments);
    };
    _pt.meta = function (a) {
        return !arguments.length ? _h("meta", a) : _h("meta", arguments);
    };
    _pt.style = function (a) {
        return !arguments.length ? _h("style", a) : _h("style", arguments);
    };
    //Sections
    _pt.body = function (a) {
        return !arguments.length ? _h("body", a) : _h("body", arguments);
    };
    _pt.article = function (a) {
        return !arguments.length ? _h("article", a) : _h("article", arguments);
    };
    _pt.section = function (a) {
        return !arguments.length ? _h("section", a) : _h("section", arguments);
    };
    _pt.nav = function (a) {
        return !arguments.length ? _h("nav", a) : _h("nav", arguments);
    };
    _pt.aside = function (a) {
        return !arguments.length ? _h("aside", a) : _h("aside", arguments);
    };
    _pt.header = function (a) {
        return !arguments.length ? _h("header", a) : _h("header", arguments);
    };
    _pt.footer = function (a) {
        return !arguments.length ? _h("footer", a) : _h("footer", arguments);
    };
    _pt.address = function (a) {
        return !arguments.length ? _h("address", a) : _h("address", arguments);
    };
    _pt.div = function (a) {
        return !arguments.length ? _h("div", a) : _h("div", arguments);
    };
    _pt.h1 = function (a) {
        return !arguments.length ? _h("h1", a) : _h("h1", arguments);
    };
    _pt.h2 = function (a) {
        return !arguments.length ? _h("h2", a) : _h("h2", arguments);
    };
    _pt.h3 = function (a) {
        return !arguments.length ? _h("h3", a) : _h("h3", arguments);
    };
    _pt.h4 = function (a) {
        return !arguments.length ? _h("h4", a) : _h("h4", arguments);
    };
    _pt.h5 = function (a) {
        return !arguments.length ? _h("h5", a) : _h("h5", arguments);
    };
    _pt.h6 = function (a) {
        return !arguments.length ? _h("h6", a) : _h("h6", arguments);
    };
    //Grouping
    _pt.p = function (a) {
        return !arguments.length ? _h("p", a) : _h("p", arguments);
    };
    _pt.pre = function (a) {
        return !arguments.length ? _h("pre", a) : _h("pre", arguments);
    };
    _pt.blockquote = function (a) {
        return !arguments.length ? _h("blockquote", a) : _h("blockquote", arguments);
    };
    _pt.ol = function (a) {
        return !arguments.length ? _h("ol", a) : _h("ol", arguments);
    };
    _pt.ul = function (a) {
        return !arguments.length ? _h("ul", a) : _h("ul", arguments);
    };
    _pt.li = function (a) {
        return !arguments.length ? _h("li", a) : _h("li", arguments);
    };
    _pt.dl = function (a) {
        return !arguments.length ? _h("dl", a) : _h("dl", arguments);
    };
    _pt.dt = function (a) {
        return !arguments.length ? _h("dt", a) : _h("dt", arguments);
    };
    _pt.dd = function (a) {
        return !arguments.length ? _h("dd", a) : _h("dd", arguments);
    };
    _pt.figure = function (a) {
        return !arguments.length ? _h("figure", a) : _h("figure", arguments);
    };
    _pt.figcaption = function (a) {
        return !arguments.length ? _h("figcaption", a) : _h("figcaption", arguments);
    };
    _pt.main = function (a) {
        return !arguments.length ? _h("main", a) : _h("main", arguments);
    };
    _pt.hr = function (a) {
        return !arguments.length ? _h("hr", a) : _h("hr", arguments);
    };
    //Text
    _pt.a = function (a) {
        return !arguments.length ? _h("a", a) : _h("a", arguments);
    };
    _pt.em = function (a) {
        return !arguments.length ? _h("em", a) : _h("em", arguments);
    };
    _pt.strong = function (a) {
        return !arguments.length ? _h("strong", a) : _h("strong", arguments);
    };
    _pt.cite = function (a) {
        return !arguments.length ? _h("cite", a) : _h("cite", arguments);
    };
    _pt.q = function (a) {
        return !arguments.length ? _h("q", a) : _h("q", arguments);
    };
    _pt.dfn = function (a) {
        return !arguments.length ? _h("dfn", a) : _h("dfn", arguments);
    };
    _pt.abbr = function (a) {
        return !arguments.length ? _h("abbr", a) : _h("abbr", arguments);
    };
    _pt.data = function (a) {
        return !arguments.length ? _h("data", a) : _h("data", arguments);
    };
    _pt.time = function (a) {
        return !arguments.length ? _h("time", a) : _h("time", arguments);
    };
    _pt.code = function (a) {
        return !arguments.length ? _h("code", a) : _h("code", arguments);
    };
    _pt.var = function (a) {
        return !arguments.length ? _h("var", a) : _h("var", arguments);
    };
    _pt.samp = function (a) {
        return !arguments.length ? _h("samp", a) : _h("samp", arguments);
    };
    _pt.kbd = function (a) {
        return !arguments.length ? _h("kbd", a) : _h("kbd", arguments);
    };
    _pt.mark = function (a) {
        return !arguments.length ? _h("mark", a) : _h("mark", arguments);
    };
    _pt.ruby = function (a) {
        return !arguments.length ? _h("ruby", a) : _h("ruby", arguments);
    };
    _pt.rb = function (a) {
        return !arguments.length ? _h("rb", a) : _h("rb", arguments);
    };
    _pt.rt = function (a) {
        return !arguments.length ? _h("rt", a) : _h("rt", arguments);
    };
    _pt.rp = function (a) {
        return !arguments.length ? _h("rp", a) : _h("rp", arguments);
    };
    _pt.rtc = function (a) {
        return !arguments.length ? _h("rtc", a) : _h("rtc", arguments);
    };
    _pt.bdi = function (a) {
        return !arguments.length ? _h("bdi", a) : _h("bdi", arguments);
    };
    _pt.bdo = function (a) {
        return !arguments.length ? _h("bdo", a) : _h("bdo", arguments);
    };
    _pt.span = function (a) {
        return !arguments.length ? _h("span", a) : _h("span", arguments);
    };
    _pt.br = function (a) {
        return !arguments.length ? _h("br", a) : _h("br", arguments);
    };
    _pt.wbr = function (a) {
        return !arguments.length ? _h("wbr", a) : _h("wbr", arguments);
    };
    _pt.small = function (a) {
        return !arguments.length ? _h("small", a) : _h("small", arguments);
    };
    _pt.i = function (a) {
        return !arguments.length ? _h("i", a) : _h("i", arguments);
    };
    _pt.b = function (a) {
        return !arguments.length ? _h("b", a) : _h("b", arguments);
    };
    _pt.u = function (a) {
        return !arguments.length ? _h("u", a) : _h("u", arguments);
    };
    _pt.s = function (a) {
        return !arguments.length ? _h("s", a) : _h("s", arguments);
    };
    _pt.sub = function (a) {
        return !arguments.length ? _h("sub", a) : _h("sub", arguments);
    };
    _pt.sup = function (a) {
        return !arguments.length ? _h("sup", a) : _h("sup", arguments);
    };
    //Edits
    _pt.ins = function (a) {
        return !arguments.length ? _h("ins", a) : _h("ins", arguments);
    };
    _pt.del = function (a) {
        return !arguments.length ? _h("del", a) : _h("del", arguments);
    };
    //Embedded Content
    _pt.img = function (a) {
        return !arguments.length ? _h("img", a) : _h("img", arguments);
    };
    _pt.picture = function (a) {
        return !arguments.length ? _h("picture", a) : _h("picture", arguments);
    };
    _pt.embed = function (a) {
        return !arguments.length ? _h("embed", a) : _h("embed", arguments);
    };
    _pt.object = function (a) {
        return !arguments.length ? _h("object", a) : _h("object", arguments);
    };
    _pt.param = function (a) {
        return !arguments.length ? _h("param", a) : _h("param", arguments);
    };
    _pt.video = function (a) {
        return !arguments.length ? _h("video", a) : _h("video", arguments);
    };
    _pt.audio = function (a) {
        return !arguments.length ? _h("audio", a) : _h("audio", arguments);
    };
    _pt.source = function (a) {
        return !arguments.length ? _h("source", a) : _h("source", arguments);
    };
    _pt.track = function (a) {
        return !arguments.length ? _h("track", a) : _h("track", arguments);
    };
    _pt.map = function (a) {
        return !arguments.length ? _h("map", a) : _h("map", arguments);
    };
    _pt.area = function (a) {
        return !arguments.length ? _h("area", a) : _h("area", arguments);
    };
    _pt.iframe = function (a) {
        return !arguments.length ? _h("iframe", a) : _h("iframe", arguments);
    };
    //Tables
    _pt.table = function (a) {
        return !arguments.length ? _h("table", a) : _h("table", arguments);
    };
    _pt.tr = function (a) {
        return !arguments.length ? _h("tr", a) : _h("tr", arguments);
    };
    _pt.td = function (a) {
        return !arguments.length ? _h("td", a) : _h("td", arguments);
    };
    _pt.th = function (a) {
        return !arguments.length ? _h("th", a) : _h("th", arguments);
    };
    _pt.caption = function (a) {
        return !arguments.length ? _h("caption", a) : _h("caption", arguments);
    };
    _pt.tbody = function (a) {
        return !arguments.length ? _h("tbody", a) : _h("tbody", arguments);
    };
    _pt.thead = function (a) {
        return !arguments.length ? _h("thead", a) : _h("thead", arguments);
    };
    _pt.tfoot = function (a) {
        return !arguments.length ? _h("tfoot", a) : _h("tfoot", arguments);
    };
    _pt.colgroup = function (a) {
        return !arguments.length ? _h("colgroup", a) : _h("colgroup", arguments);
    };
    _pt.col = function (a) {
        return !arguments.length ? _h("col", a) : _h("col", arguments);
    };
    //Forms
    _pt.form = function (a) {
        return !arguments.length ? _h("form", a) : _h("form", arguments);
    };
    _pt.input = function (a) {
        return !arguments.length ? _h("input", a) : _h("input", arguments);
    };
    _pt.textarea = function (a) {
        return !arguments.length ? _h("textarea", a) : _h("textarea", arguments);
    };
    _pt.select = function (a) {
        return !arguments.length ? _h("select", a) : _h("select", arguments);
    };
    _pt.option = function (a) {
        return !arguments.length ? _h("option", a) : _h("option", arguments);
    };
    _pt.optgroup = function (a) {
        return !arguments.length ? _h("optgroup", a) : _h("optgroup", arguments);
    };
    _pt.datalist = function (a) {
        return !arguments.length ? _h("datalist", a) : _h("datalist", arguments);
    };
    _pt.label = function (a) {
        return !arguments.length ? _h("label", a) : _h("label", arguments);
    };
    _pt.fieldset = function (a) {
        return !arguments.length ? _h("fieldset", a) : _h("fieldset", arguments);
    };
    _pt.legend = function (a) {
        return !arguments.length ? _h("legend", a) : _h("legend", arguments);
    };
    _pt.button = function (a) {
        return !arguments.length ? _h("button", a) : _h("button", arguments);
    };
    _pt.output = function (a) {
        return !arguments.length ? _h("output", a) : _h("output", arguments);
    };
    _pt.progress = function (a) {
        return !arguments.length ? _h("progress", a) : _h("progress", arguments);
    };
    _pt.meter = function (a) {
        return !arguments.length ? _h("meter", a) : _h("meter", arguments);
    };
    _pt.keygen = function (a) {
        return !arguments.length ? _h("keygen", a) : _h("keygen", arguments);
    };
    _pt.style = function (a) {
        return !arguments.length ? _h("STYLE", a) : _h("STYLE", arguments);
    };
    //Scripting
    _pt.script = function (a) {
        return !arguments.length ? _h("script", a) : _h("script", arguments);
    };
    _pt.noscript = function (a) {
        return !arguments.length ? _h("noscript", a) : _h("noscript", arguments);
    };
    _pt.template = function (a) {
        return !arguments.length ? _h("template", a) : _h("template", arguments);
    };
    _pt.canvas = function (a) {
        return !arguments.length ? _h("canvas", a) : _h("canvas", arguments);
    };
    _pt.add = function (tag) {
        delete arguments[0];
        return _h(tag, arguments);
    };

    //-----| createElementNS |-----//---|
    _pt.svg = function (a) {
        return !arguments.length ? _h("svg", a) : _h("svg", arguments);
    };
    _pt.stop = function (a) {
        return !arguments.length ? _h("stop", a) : _h("stop", arguments);
    };
    _pt.defs = function (a) {
        return !arguments.length ? _h("defs", a) : _h("defs", arguments);
    };
    _pt.rect = function (a) {
        return !arguments.length ? _h("rect", a) : _h("rect", arguments);
    };
    _pt.path = function (a) {
        return !arguments.length ? _h("path", a) : _h("path", arguments);
    };
    _pt.g = function (a) {
        return !arguments.length ? _h("g", a) : _h("g", arguments);
    };
    _pt.linearGradient = function (a) {
        return !arguments.length ? _h("linearGradient", a) : _h("linearGradient", arguments);
    };
    _pt.circle = function (a) {
        return !arguments.length ? _h("circle", a) : _h("circle", arguments);
    };
}


let _h = new _HtmlAdd();