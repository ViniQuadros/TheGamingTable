document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.querySelector('.next-button');
    const questionText = document.querySelector('.content h1');
    const answerBox = document.querySelector('.answer-box');
    const gameAnswerInput = document.getElementById('gameAnswer');
    let responses = []; // Array para armazenar as respostas
    let questions = []; // Array para armazenas as questões
    const gameOptions = Array.from(document.querySelectorAll('#games option')).map(option => option.value);
    const gameImages = {
        //"A Plague Tale: Innocence": "imagens/A Plague Tale Innocence.jpg",
        //"A Plague Tale: Requiem": "imagens/A Plague Tale Requiem.jpg",
        "Alien: Isolation": "images/AlienIsolation.jpg",
        "Among Us": "images/AmongUs.jpg",
        "Anthem": "images/Anthem.jpg",
        "Apex Legends": "images/ApexLegend.jpg",
        "Assassin's Creed": "images/AssassinsCreed.jpg",
        "Assassin's Creed Revelations": "images/AssassinsCreedRev.jpg",
    };

    // Oculta a caixa de texto inicialmente
    answerBox.style.display = 'none';

    nextButton.addEventListener('click', function () {
        if (questionText.textContent === "Welcome to your gaming table:") {
            questionText.textContent = "What is your favorite game?"
        }

        if (questionText.textContent === "What is your favorite game?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Favorite game:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What is the game with the best Storyline?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is the game with the best Storyline?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Best Storyline:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What is the game with the best Art Style?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is the game with the best Art Style?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Best Art Style:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What is the game that you will definitly beat some day?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is the game that you will definitly beat some day?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Will beat some day:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What is the game with the best combat system?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is the game with the best combat system?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Best combat system:"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What is the game that you like, but everyone does not?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is the game that you like, but everyone does not?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("You like, but everyone does not:"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What is the game that you don't like, but everyone does?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is the game that you don't like, but everyone does?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("You don't like, but everyone does:"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "Name a game that is underrated:"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "Name a game that is underrated:") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Underrated:"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "Name a game that is overrated:"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "Name a game that is overrated:") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Overrated:"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "'Why do I like that?'"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "'Why do I like that?'") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("'Why do I like that?'"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What game do you always come back playing?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What game do you always come back playing?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Always come back:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What is the best atmospheric game?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is the best atmospheric game?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Best atmosphere:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What is the game that will make you better after a bad day?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is the game that will make you better after a bad day?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Fell better after a bad day:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What game was the most desappointing?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What game was the most desappointing?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Most disappointing:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What is the most nostalgic game?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is the most nostalgic game?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Most nostalgic:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What game was forgotten but it shouldn't have been?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What game was forgotten but it shouldn't have been?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Shouldn't be forgotten:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What is the saddest game?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is the saddest game?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Saddest:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What is your favorite indie game?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is your favorite indie game?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Favorite indie:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "What is the game with the best soundtrack?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is the game with the best soundtrack?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Best soundtrack:\n"); //Armazena a pergunta
                gameAnswerInput.value = ''; // Limpa a caixa de texto
                answerBox.style.display = 'none'; // Esconde a caixa de texto
                questionText.textContent = "What is the best multiplayer game?"; // Altera o texto da pergunta
            } else {
                alert("Please, select a game.");
            }
        }
        else if (questionText.textContent === "What is the best multiplayer game?") {
            // Valida a resposta antes de permitir avançar
            if (gameOptions.includes(gameAnswerInput.value)) {
                responses.push(gameAnswerInput.value); // Armazena a resposta
                questions.push("Best multiplayer:\n"); //Armazena a pergunta

                gameAnswerInput.style.display = 'none';
                nextButton.style.display = 'none';

                gameAnswerInput.value = ''; // Limpa a caixa de texto
                questionText.textContent = "This is the result:"; // Altera o texto da pergunta
                displayResponses(gameImages);
            } else {
                alert("Please, select a game.");
            }
        }

        answerBox.style.display = 'block'; // Exibe a caixa de texto

        function displayResponses(gameImages) {
            // Adiciona um botão para salvar a tabela como uma imagem
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save Table';
            saveButton.classList.add('save-button'); // Adiciona a classe ao botão
            saveButton.addEventListener('click', saveTableAsImage);

            document.body.appendChild(saveButton);

            const table = document.createElement('table');
            table.classList.add('response-table');

            let currentRow;
            responses.forEach(function (response, index) {
                if (index % 5 === 0) {
                    currentRow = table.insertRow();
                }

                const cell = currentRow.insertCell();

                // Adiciona a imagem acima da pergunta
                if (gameImages[response]) {
                    const image = document.createElement('img');
                    image.src = gameImages[response];
                    image.alt = response;
                    image.style.width = '150px'; // Defina a largura da imagem como desejado
                    image.style.height = '200px'; // Defina a altura da imagem como desejado
                    cell.appendChild(image);
                }

                // Adiciona a pergunta
                const question = document.createElement('p');
                question.textContent = questions[index]; // Obtém a pergunta correspondente ao índice
                question.style.fontWeight = 'bold'; // Pode adicionar negrito à pergunta se desejar
                cell.appendChild(question);

                // Adiciona a resposta
                const answer = document.createElement('p');
                answer.textContent = response;
                cell.appendChild(answer);
            });

            // Adiciona estilos à tabela
            table.style.fontSize = '18px'; // Define o tamanho da fonte para 18 pixels
            table.style.borderCollapse = 'collapse'; // Colapsa as bordas da tabela
            table.style.width = '80%'; // Define a largura da tabela para 80% da largura da janela
            table.style.margin = '20px auto'; // Centraliza a tabela na página e adiciona margem

            // Adiciona espaçamento entre as colunas
            const cells = Array.from(table.querySelectorAll('td'));
            cells.forEach(cell => {
                cell.style.padding = '10px'; // Adiciona padding de 10 pixels às células
            });

            document.body.appendChild(table);
        }

        function saveTableAsImage() {
            // Selecione a tabela que você deseja salvar como imagem
            const table = document.querySelector('.response-table');

            // Use html2canvas para capturar o conteúdo da tabela como uma imagem
            html2canvas(table).then(canvas => {
                // Redimensione o canvas para a resolução desejada (1920x1080)
                const scaledCanvas = document.createElement('canvas');
                const scaleFactor = 2; // Fator de escala para atingir 1920x1080 (considerando a tela de retina)
                scaledCanvas.width = canvas.width * scaleFactor;
                scaledCanvas.height = canvas.height * scaleFactor;
                const scaledContext = scaledCanvas.getContext('2d');
                scaledContext.scale(scaleFactor, scaleFactor);
                scaledContext.drawImage(canvas, 0, 0);

                // Crie um elemento de link <a> para baixar a imagem
                const downloadLink = document.createElement('a');
                downloadLink.href = canvas.toDataURL('image/png'); // Converta o canvas para uma URL de imagem
                downloadLink.download = 'tabela.png'; // Nome do arquivo ao salvar
                downloadLink.click(); // Simule o clique no link para iniciar o download
            });
        }
    });
});