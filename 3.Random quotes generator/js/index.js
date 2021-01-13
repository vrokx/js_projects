function generateQuote(){
    const quotes = ['The only right is what is after my constitution; the only wrong is what is against it.—  Ralph Waldo Emerson',
                    'Every man, as long as he does not violate the laws of justice, is left perfectly free to pursue his own interest his own way, and to bring both his industry and capital into competition with those of any other man or order of men.—  Adam Smith',
                    'Creativity can be a social contribution, but only in so far as society is free to use the results.—  Richard Matthew Stallman',
                    'Illustrious acts high raptures do infuse, And every conqueror creates a muse.—  Edmund Waller',
                    'How can I believe in God when just last week I got my tongue caught in the roller of an electric typewriter?—  Woody Allen',
                    'Know from whence you came. If you know whence you came, there are absolutely no limitations to where you can go.—  James Baldwin',
                    'Politeness is one half good nature and the other half good lying.—  Mary Wilson Little',
                    "Explaining why he refused induction into the Army. I ain't got no quarrel with them Viet Congs.—  Muhammad Ali",
                    'There are two kinds of people who blow through life like a breeze, And one kind is gossipers, and the other kind is gossipees.—  Ogden Nash',
                    'Sometimes the things that hold you down are the things that hold you up.—  David Oman McKay',];

    const text = document.querySelector("#quote");
    for(i = 0; i < quotes.length; i++){

        var random = Math.floor(Math.random()*(quotes.length));
        text.innerHTML = quotes[random] ;
    }
}