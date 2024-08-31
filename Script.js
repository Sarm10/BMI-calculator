
        function updateUnits() {
            const units = document.getElementById('units').value;
            const weightUnit = document.getElementById('weightUnit');
            const heightUnit = document.getElementById('heightUnit');

            if (units === 'metric') {
                weightUnit.textContent = 'kg';
                heightUnit.textContent = 'cm';
            } else {
                weightUnit.textContent = 'lbs';
                heightUnit.textContent = 'inches';
            }
        }

        function calculateBMI() {
            const age = document.getElementById('age').value;
            const gender = document.getElementById('gender').value;
            const units = document.getElementById('units').value;
            let weight = parseFloat(document.getElementById('weight').value);
            let height = parseFloat(document.getElementById('height').value);

            let bmi;
            if (units === 'metric') {
                height = height / 100; // convert cm to meters
                bmi = weight / (height * height);
            } else {
                bmi = (weight / (height * height)) * 703;
            }

            document.getElementById('bmiResult').textContent = bmi.toFixed(2);

            const historyList = document.getElementById('historyList');
            const historyItem = document.createElement('li');
            historyItem.textContent = `Age: ${age}, Gender: ${gender}, BMI: ${bmi.toFixed(2)}`;
            historyList.appendChild(historyItem);
        }

        function resetFormWithoutHistory() {
            document.getElementById('bmiForm').reset();
            document.getElementById('bmiResult').textContent = '';
            updateUnits(); // to reset the unit labels
        }

        function speak(text) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }

        document.getElementById('age').addEventListener('focus', function() {
            speak('Please enter your age');
        });
        document.getElementById('gender').addEventListener('focus', function() {
            speak('Please select your gender');
        });
        document.getElementById('units').addEventListener('focus', function() {
            speak('Please select the units');
        });
        document.getElementById('weight').addEventListener('focus', function() {
            speak('Please enter your weight');
        });
        
        document.getElementById('height').addEventListener('focus', function() {
            speak('Please enter your height');
        });
        document.getElementById('button').addEventListener('focus', function() {
            speak('Please press to calculate your BMI');
        })
    