const encodingToEwok = (res, data, status = 200) => {
  const entries = Object.entries(data)
  const newData = entries.map(([key, value]) => {
    const valueEwok = value.toString().replace(/[aeiou]/gi, "i")
    const valueNewEwok = valueEwok
      .toString()
      .replace(/[bcdfghjklmnpqrstvwxyz]/gi, "b")
    const object = Object.assign(
      {},
      ...Object.entries({ key }).map(([a, b]) => ({ [b]: valueNewEwok }))
    )

    return object
  })
  const resultEncoded = Object.assign({}, ...newData)

  res.status(status).json({
    status: "success",
    code: status,
    data: resultEncoded,
  })
}

module.exports = encodingToEwok
