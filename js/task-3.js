function getElementWidth(content, padding, border) {
  const content_number = Number.parseFloat(content)
  const padding_number = Number.parseFloat(padding)
  const border_number = Number.parseFloat(border)

  return `${content_number + padding_number * 2 + border_number * 2} `
}

console.log(getElementWidth('50px', '8px', '4px')) // 74
console.log(getElementWidth('60px', '12px', '8.5px')) // 101
console.log(getElementWidth('200px', '0px', '0px')) // 200
