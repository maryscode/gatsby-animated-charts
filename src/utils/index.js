
export const widthLookup = {
  'small': 'w-full md:w-small',
  'regular': 'w-[calc(100%-2rem)] lg:w-regular',
  'large': 'lg:w-large',
  'full': 'w-full lg:mx-0 lg:max-w-full',
  'custom': 'w-full',
  'xlarge':'w-full lg:w-[954px]', // for charts
}
export const bgColorLookup = {
  'white': 'bg-white',
  'heated-gold': 'bg-heated-gold/20',
  'transparent': 'bg-transparent p-0 lg:px-0 tablet:w-[calc(100%)]',
  'transparent-white': 'bg-white/60',
}

export const roundedLookup = {
  'sm': 'rounded-sm',
  'regular': 'rounded',
  'full': 'rounded-full lg:px-0',
  'none': '',
}

export const paddingLookup = {
  'regular': 'p-4 lg:p-8 ', // p-4 = 16px | lg:p-8 = 36px
  'large': 'lg:px-0',
  'none': 'p-0',
  'lg-none': 'py-0 px-4 lg:p-0',
  'medium': 'pt-[21px] pb-[26px] lg:py-[28px] ',
}

/**
 * Changes XML to JSON
 * Modified version from here: http://davidwalsh.name/convert-xml-json
 * @param {string} xml XML DOM tree
 */
export const xmlToJson = (xml) =>{
  // Create the return object
  let obj = {};

  if (xml.nodeType === 1) {
    // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (let j = 0; j < xml.attributes.length; j++) {
        const attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) {
    // text
    obj = xml.nodeValue;
  }

  // do children
  // If all text nodes inside, get concatenated text from them.
  const textNodes = [].slice.call(xml.childNodes).filter(function(node) {
    return node.nodeType === 3;
  });
  if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
    obj = [].slice.call(xml.childNodes).reduce(function(text, node) {
      return text + node.nodeValue;
    }, "");
  } else if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      const item = xml.childNodes.item(i);
      const nodeName = item.nodeName;
      if (typeof obj[nodeName] === "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push === "undefined") {
          const old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}