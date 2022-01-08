const timestampToStr = (timestamp) => {
  const date = new Date(timestamp)

  const zero = (num) => {
    num += ""
    if (num.length === 1) {
      num = "0" + num
    }
    return num
  }

  const y = zero(date.getFullYear())
  const m = zero(date.getMonth() + 1)
  const d = zero(date.getDate())
  const h = zero(date.getHours())
  const mi = zero(date.getMinutes())
  const w = [ "日", "月", "火", "水", "木", "金", "土" ][date.getDay()]
  
  
  const format_str = `${y}/${m}/${d}(${w}) ${h}:${mi}`

  return format_str

}

export default timestampToStr