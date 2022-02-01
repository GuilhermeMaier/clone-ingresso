import type { NextApiRequest, NextApiResponse } from "next";

async function Cities(request: NextApiRequest, response: NextApiResponse) {
  // const result = await axios.get(
  //   "https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home"
  // );
  const mockedCities = [
    {
      stateID: 1,
      name: "São Paulo",
      value: 1,
    },
    {
      stateID: 2,
      name: "Rio de Janeiro",
      value: 2,
    },
  ];
  response
    .status(200)
    .json(
      mockedCities.filter(
        (currentCity) => currentCity.stateID == Number(request.query.stateID)
      )
    );
}

export default Cities;
