const { NotFound } = require("http-errors")
const { successRes, encodingToEwok } = require("../utils")
const needle = require("needle")
const url = require("url")
const API_BASE_URL = process.env.API_BASE_URL

const getAllPeople = async (req, res) => {
  const apiRes = await needle("get", `${API_BASE_URL}/people`)
  const data = apiRes.body
  if (!data) {
    throw new NotFound("Not found")
  }
  successRes(res, data)
}

const getPeopleById = async (req, res) => {
  const params = new URLSearchParams({
    ...url.parse(req.url, true).query,
  })
  const value = Object.values(url.parse(req.url, true).query)
  const { id } = req.params
  const apiRes = await needle("get", `${API_BASE_URL}/people/${id}?${params}`)
  const data = apiRes.body

  if (value.length !== 0) {
    encodingToEwok(res, data)
  }

  if (!data) {
    throw new NotFound("Not found")
  }
  successRes(res, data)
}

module.exports = {
  getAllPeople,
  getPeopleById,
}
