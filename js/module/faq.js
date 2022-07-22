const hide = (elem, answer) => {
  if (!elem.classList.contains("faq__item_show")) return;

  answer.style.height = `${answer.offsetHeight}px`;

  answer.offsetHeight;
  answer.style.display = "block";
  const height = answer.offsetHeight;
  answer.style.height = 0;
  answer.style.overflow = "hidden";
  answer.style.transition = "height 0.36s ease-in-out";

  elem.classList.remove("faq__item_show");

  setTimeout(() => {
    elem.classList.add("faq__item_show");
    answer.style.display = "";
    answer.style.height = "";
    answer.style.overflow = " ";
    answer.style.transition = "";
  }, 360);
};

const show = (elem, answer) => {
  if (elem.classList.contains("faq__item_show")) return;

  answer.style.display = "block";
  const height = answer.offsetHeight;
  answer.style.height = 0;
  answer.style.overflow = "hidden";
  answer.style.transition = "height 0.36s ease-in-out";
  answer.offsetHeight;
  answer.style.height = `${height}px`;

  setTimeout(() => {
    elem.classList.add("faq__item_show");
    answer.style.display = "";
    answer.style.height = "";
    answer.style.overflow = " ";
    answer.style.transition = "";
  }, 360);
};

export const accordion = () => {
  const list = document.querySelector(".faq__list");

  list.addEventListener("click", (e) => {
    const button = e.target.closest(".faq__question");
    // console.log("button: ", button);

    if (button) {
      //   console.log(1);
      const item = button.closest(".faq__item");
      //   console.log("item: ," item);
      //   item.classList.toggle("faq__item_show"); /* резкое открытие */
      const answer = item.querySelector(".faq__answer");
      item.classList.contains("faq__item_show")
        ? hide(item, answer)
        : show(item);
    }
  });
};
