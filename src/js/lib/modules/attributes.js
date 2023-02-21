import $ from "../core";

$.prototype.addAttribute = function(attributeName, attributeValue) { 
  for (let i = 0; i < this.length; i++) {
    if (!this[i].setAttribute(attributeName, attributeValue)) {
      this[i].setAttribute(attributeName, attributeValue);
    }
  }
  return this;
};

$.prototype.deleteAttribute = function(attributeName) { 
  for (let i = 0; i < this.length; i++) {
    if (!this[i].removeAttribute(attributeName)) {
      this[i].removeAttribute(attributeName);
    }
  }
  return this;
};

$.prototype.toggleAttribute = function(attributeName, attributeValue) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(attributeName)) {
      this[i].setAttribute(attributeName, attributeValue);
    } else {
      this[i].removeAttribute(attributeName);
    }
  }
  return this;
};