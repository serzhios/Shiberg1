
export function catalogBtn(){
    if(document.querySelectorAll('.filter-content')){
        document.querySelectorAll('.catalog-btn ').forEach(button => {
            button.addEventListener('click', () => {
                // Удаляем активный класс с кнопок
                document.querySelectorAll('.catalog-btn').forEach(btn => btn.classList.remove('active'));

                // Добавляем активный класс на текущую нажатую кнопку
                button.classList.toggle('active');



            });
        });
    }
}

