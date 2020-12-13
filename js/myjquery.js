function $(selector) {
    let element;
    if (typeof selector == "string") {
        element = document.querySelectorAll(selector);
    } else if (selector instanceof HTMLElement) {
        element = [ selector ]
    } else {
        element = null
    }
    return new jQ(element)
}

function jQ(params) {
    this.element = params;
    this.on = function (event, callBackFun) {
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener(event, callBackFun) 
        }
        return this
    }
    this.html = function (html) {
        if (typeof html =="string" || typeof html == "number") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].innerHTML = html;
            }
        }
        return this
    }
    this.css = function (styleName, value) {
        if (typeof styleName == "string" && (typeof value == "string" || typeof value == "number")) {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style = `${styleName}: ${value};`;
            }
        } else if (typeof styleName == "object" && styleName != null && !Array.isArray(styleName)) {
            for (let i = 0; i < this.element.length; i++) {
                for (const key in styleName) {
                    this.element[i].style[key] = styleName[key]
                }
            }
        }
        return this
    }
    this.toggleClass = function (className) {
        if (typeof className == "string") {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(className)) {
                    this.element[i].classList.remove(className)
                } else {
                    this.element[i].classList.add(className)
                }
            }
        }
        return this
    }

    /* Вашим домашним заданием будет сделать методы которые будут удалять и добавлять классы (addClass, removeClass). Также сделать методы которые будут изменять ширину и высоту элементов, при этом если вы получаете просто число, то сами добавляете “px”, а если получаете строку, то просто передаете для ширины, но если вы ничего не получаете, то возвращаете ширину или высоту первого элемента. (height, width) */

    this.addClass = function (className) {
        if (typeof className == "string") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].classList.add(className)
            }
        }
        return this
    }
    this.removeClass = function (className) {
        if (typeof className == "string") {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(className)) {
                    this.element[i].classList.remove(className)
                }
            }
        }
        return this
    }
    this.width = function (widthNum) {
        if (typeof widthNum == "number") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.width = widthNum + "px";
            }
        } else if (typeof widthNum == "string") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.width = widthNum;
            }
        } else {
            for (let i = 0; i < this.element.length; i++) {
                return this.element[0].style.width
            }
        }
        return this
    }
    this.height = function (heightNum) {
        if (typeof heightNum == "number") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.height = heightNum + "px";
            }
        } else if (typeof heightNum == "string") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.height = heightNum;
            }
        } else {
            for (let i = 0; i < this.element.length; i++) {
                return this.element[0].style.height
            }
        }
        return this
    }
}


