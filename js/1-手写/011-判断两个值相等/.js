function looseEqual (a, b) {
    if (a === b) return true
    const isObjectA = isObject(a)
    const isObjectB = isObject(b)
    if (isObjectA && isObjectB) {
      try {
        const isArrayA = Array.isArray(a)
        const isArrayB = Array.isArray(b)
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every((e, i) => {
            return looseEqual(e, b[i]) // b 包含 a
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime() // 单独处理 Date 类型, 时间戳应该是一样的
        } else if ( 0 ) {
          // 如果需要考虑其它类型, 添加 if 即可
        } else if (!isArrayA && !isArrayB) {
          const keysA = Object.keys(a)
          const keysB = Object.keys(b)
          // 先判断 key 的长度, 再判断 a 包含于 b
          return keysA.length === keysB.length && keysA.every(key => {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }
  
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }
  
  const _toString = Object.prototype.toString