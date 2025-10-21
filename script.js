//your code here
  const input = document.getElementById('input');
    for (let i = 0; i <= 9; i++) {
      document.getElementById('block' + i).addEventListener('click', () => {
        input.value += i;
      });
    }
    document.getElementById('plus').addEventListener('click', () => input.value += '+');
    document.getElementById('minus').addEventListener('click', () => input.value += '-');
    document.getElementById('multiply').addEventListener('click', () => input.value += '*');
    document.getElementById('divide').addEventListener('click', () => input.value += '/');
    document.getElementById('dot').addEventListener('click', () => input.value += '.');
    document.getElementById('leftParen').addEventListener('click', () => input.value += '(');
    document.getElementById('rightParen').addEventListener('click', () => input.value += ')');

    document.getElementById('ans').addEventListener('click', () => {
      try {
        input.value = eval(input.value);
      } catch (e) {
        input.value = 'Error';
      }
    });

    document.getElementById('clr').addEventListener('click', () => {
      input.value = '';
    });

    document.getElementById('backspace').addEventListener('click', () => {
      input.value = input.value.slice(0, -1);
    });