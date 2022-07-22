const exchangeRatesList = document.querySelector(".exchange-rates__list");

const socket = new WebSocket("ws://web-socket-current.herokuapp.com");

const renderExchange = (wrapper, data) => {
  const { from, to, rate, change } = JSON.parse(data);
  console.log(from, to, rate, change);

  const listItem = document.createElement("li");
  listItem.classList.add(
    "exchange-rates__item",
    change === 1 ? "exchange-rates__item-down" : "exchange-rates__item-down"
  );

  const currency = document.createElement("span");
  currency.classList.add("exchange-rates__currency");
  currency.textContent = `${from}/${to}`;

  const value = document.createElement("span");
  value.classList.add("exchange-rates__value");
  value.textContent = rate;

  listItem.append(currency, value);
  wrapper.prepend(listItem);

  if (wrapper.children.length > 4) {
    wrapper.children[4].remove();
  }
};

socket.addEventListener("message", (event) => {
  //   console.log(event.data); = #1
  // console.log(JSON.parse(event.data)) = #2
  renderExchange(exchangeRatesList, event.data);
});

socket.addEventListener("error", (err) => {
  console.log(err);
});
