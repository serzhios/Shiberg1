



const questions = document.querySelectorAll(".kwis-main");
const nextBtn = document.querySelectorAll("kwis-button");

export function kwis(index){
    if(document.querySelectorAll(".kwis-main")){
        questions.forEach((q, i) => {
            q.style.display = i === index ? "block" : "none";
          });
          nextBtn.textContent =
          index === questions.length - 1 ? "Получить подбор" : "Далее";

}
}
