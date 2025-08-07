// services/newsService.js

async function getMockNews(ticker) {
  return [
    {
      title: `${ticker} hits new high amid AI boom`,
      description: `${ticker} stock continues its climb as analysts praise its AI innovations.`,
      url: "#"
    },
    {
      title: `${ticker} quarterly earnings exceed expectations`,
      description: `Strong revenue growth and product launches are fueling investor confidence.`,
      url: "#"
    },
    {
      title: `Tech stocks rise, led by ${ticker}`,
      description: `${ticker} leads the tech rally as markets react positively to global cues.`,
      url: "#"
    },
    {
      title: `${ticker} announces new sustainability initiative`,
      description: `The company is investing in green tech, drawing praise from environmental groups.`,
      url: "#"
    },
    {
      title: `Wall Street bullish on ${ticker}`,
      description: `Several top firms have issued buy ratings on ${ticker} for the coming quarter.`,
      url: "#"
    }
  ];
}

module.exports = { getMockNews };
