$(function() {
   let button = $("button")
// Проверка на целое число
function isInteger(num) {
  return (num ^ 0) === num;
}
// Эвент нажатия на кнопку
button.on("click", () => {
	// Счетчик ошибок
	let countError = 0
  // значение первого инпута
  let one = $('#one').val()
  // значение второго инпута
  let two = $('#two').val()
  //Проверка на целое число первого инпута с преобразованием в число
  //Если не целое число - вешаем класс, увеличиваем счетчик ошибок и
	//скрываем результат
  if (!isInteger(Number(one))) {
  countError++
  $('#forOne').addClass('errorDisplay')  
  $('#result').text(null)
  }
  //Проверка на целое число второго инпута с преобразованием в число
  //Если не целое число - вешаем класс, увеличиваем счетчик ошибок и
	//скрываем результат
  if(!isInteger(Number(two))){
  countError++    
  	 $('#forTwo').addClass('errorDisplay')
  		$('#result').text(null)
    }
    // Если счетчик = 0 => ошибок не нашли, то удаляем класс ошибки
    //Выводим результат на экран
    if (countError === 0) {
    $('#forOne').removeClass('errorDisplay')
    $('#forTwo').removeClass('errorDisplay')
    $('#result').text(Number(one) + Number(two))
    }
})
});

