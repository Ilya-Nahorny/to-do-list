
let dNow = new Date();
let actDate = dNow.getDate();
let actDay = dNow.getDay();
let month = dNow.getMonth();
let year = dNow.getFullYear();
//let firstWeekDay = new Date(dNow.getFullYear(), dNow.getMonth(), 1).getDay();
//let daysInMonth = new Date(year, month, 0).getDate();


    function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
        let day = date.getDay();
        if (day == 0) day = 7; // сделать воскресенье (0) последним днем
        return day - 1;
    }
    
    
    function createCalendar(year, month) {
        
        let dNow = new Date(year, month);
        
        let stringMonth = dNow.toLocaleString("ru-ru", { month: "long" });
            
        let titleMonth = document.querySelector('#span-month');
        let titleYear = document.querySelector('#span-year');
        titleMonth.innerHTML = `${stringMonth}`;
        titleYear.innerHTML = `${year}`;
        
        let tableStr = '<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

        // пробелы для первого ряда
        // с понедельника до первого дня месяца
        // * * * 1  2  3  4
        for (let i = 0; i < getDay(dNow); i++) {
            tableStr += '<td></td>';
        }

        // <td> ячейки календаря с датами
        while (dNow.getMonth() == month) {
            tableStr += '<td>' + dNow.getDate() + '</td>';

            if (getDay(dNow) % 7 == 6) { // вс, последний день - перевод строки
            tableStr += '</tr><tr>';
        }
        dNow.setDate(dNow.getDate() + 1);
        
        }

        // добить таблицу пустыми ячейками, если нужно
        // 29 30 31 * * * *
        if (getDay(dNow) != 0) {
        for (let i = getDay(dNow); i < 7; i++) {
            tableStr += '<td></td>';
        }
        }

        // закрыть таблицу
        tableStr += '</tr>';
        let calBlock = document.querySelector("#calendar__table");
        calBlock.innerHTML = tableStr;

        let tds = document.querySelectorAll('td');  

    for(var i=0;i<tds.length;i++){
        tds[i].addEventListener('click',function(){
            if(this.classList.contains('td_active')){
                this.classList.remove('td_active')}
            else this.classList.add('td_active');
            tds[i].addEventListener('dblclick', function(){
                myModal.classList.toggle('modal-open');
            })
            closeModal.addEventListener('click', function(){
                myModal.classList.toggle('modal-open');
            })
        });
/*     if (dNow.getFullYear() && dNow.getMonth()){
        tds[actDate + actDay].classList.add('td_actualDay');
    } */
    };
}
createCalendar(year, month);

    let prevYear = document.querySelector('#arrow_prev-year');

    prevYear.addEventListener("click", function () {
        --year;
        createCalendar(year, month);

    });
    
    let nextYear = document.querySelector('#arrow_next-year');
    nextYear.addEventListener("click", function () {
        ++year;
        createCalendar(year, month);

    });

    let prevMonth = document.querySelector('#arrow-prev_month');
    prevMonth.addEventListener('click', function () {
        if(month < 1){
            month = 11;
            --year;
        }else{
        --month;
        }
        createCalendar(year, month); 

    });

    let nextMonth = document.querySelector('#arrow-next_month');
    nextMonth.addEventListener('click', function () {
        if(month > 10){
            month = 0;
            ++year;
        }else{
        ++month;
        }
        createCalendar(year, month); 

    });

    

/*     let tds = document.querySelectorAll('td');  
    for(var i=0;i<tds.length;i++){
        tds[i].addEventListener('click',function(){
            if(this.classList.contains('td_active')){
                this.classList.remove('td_active')}
            else this.classList.add('td_active');       
        });
    if(tds[i].innerHTML == actDate){
        tds[i].classList.add('td_actualDay');
    }
    }; */

