$(document).ready(function () {
	blindfold_button_text = "👁";
	keyboard_move = document.getElementsByClassName("keyboard-move")[0];
	keyboard_move.innerHTML = '<button id="blindfold-toggle">'+ blindfold_button_text +'</button><input class="ready"><strong>Press &lt;enter&gt; to focus</strong>';
	document.getElementById("blindfold-toggle").addEventListener("click", toggle_blindfold);
	//maybe make the button a checkbox for toggling?
});


function toggle_blindfold() {
	board = document.getElementsByClassName("main-board")[0];
	keyboard_move = document.getElementsByClassName("keyboard-move")[0];
	is_blinded = board.classList.value.includes('blindfold');
	originalClass = board.classList;
	
	if (is_blinded) {
		board.classList.remove('blindfold');
		keyboard_move.classList.remove('blindfold')
	} else if (!is_blinded) {
		board.classList.add('blindfold');
		keyboard_move.classList.add('blindfold');
	}
}