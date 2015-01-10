/*
 * Class Lang.
 *
 * Copyright (c) 2010 Jorge Morgado
 * GPL license
 */

 /*****************************************************************************
 * Class		Lang
 * Description	Instantiates a new language object.
 * Parameters 	lang - the language ISO code
 * Returns		nothing
 */
function Lang(iso) {
	this.iso = iso == null ? 'en' : iso;

	this.lang = new Array();
	this.setLang(this.iso);
}

/*****************************************************************************
 * Function		setLang
 * Description	Define the language strings.
 * Parameters	lang - the language ISO code
 * Returns		nothing
 */
Lang.prototype.setLang = function setLang(iso) {	
	if (iso == null) iso = this.iso;

	// language strings
	switch (iso) {
		case 'pt':
			this.lang = Array(
				'Jogador actual: ',
				'Bust!!! Perdeste a tua vez.',
				'Boa seta!',
				'Parabens, ganhaste!!!',
				'Queres comecar um novo jogo?',
				'O ultimo dardo tem de ser um duplo ou 50.',
				'Dardos',
				'vez',
				'Por favor, introduza o novo nome do jogador.',
				'O jogo esta parado. Pressione <Enter> para continuar.',
				'Jogador 1',
				'Jogador 2',
				'Nenhum vencedor depois de 30 jogadas. O jogo termina empatado.'
			);
			break;

		default:
			this.lang = Array(
		/*0*/	'Now playing: ',
				'Bust!!! You lost your turn.',
				'Good arrow!',
				'Congratulations, you won!!!',
				'Are you sure you want to start a new game?',
		/*5*/	'Last arrow should be a double or 50.',
				'Darts',
				'turn',
				'Please, enter the player\'s new name.',
				'The game is paused. Press <Enter> to resume.',
		/*10*/	'Player 1',
				'Player 2',
				'No winner after 30 turns. Game is a draw - could be worst...'
			);
	}
}

/*****************************************************************************
 * Function		str
 * Description	Returns a language strings.
 * Parameters	id - the string ID
 * Returns		The respective language string.
 */
Lang.prototype.str = function str(id) {
	return this.lang[id];
}