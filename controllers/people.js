const { NotFound } = require("http-errors")
const { successRes } = require("../utils/successRes")
const needle = require("needle")
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
  const { id } = req.params
  const apiRes = await needle("get", `${API_BASE_URL}/people/${id}`)
  const data = apiRes.body
  if (!data) {
    throw new NotFound("Not found")
  }
  successRes(res, data)
}

module.exports = {
  getAllPeople,
  getPeopleById,
}
