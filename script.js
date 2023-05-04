const keyboardKeys = [
  {
    row: 0, code: 'Backquote', en: '`', enShift: '~', ru: 'ё', ruShift: 'Ё',
  }, {
    row: 0, code: 'Digit1', en: '1', enShift: '!', ru: '1', ruShift: '!',
  }, {
    row: 0, code: 'Digit2', en: '2', enShift: '@', ru: '2', ruShift: '"',
  }, {
    row: 0, code: 'Digit3', en: '3', enShift: '#', ru: '3', ruShift: '№',
  }, {
    row: 0, code: 'Digit4', en: '4', enShift: '$', ru: '4', ruShift: ';',
  }, {
    row: 0, code: 'Digit5', en: '5', enShift: '%', ru: '5', ruShift: '%',
  }, {
    row: 0, code: 'Digit6', en: '6', enShift: '^', ru: '6', ruShift: ':',
  }, {
    row: 0, code: 'Digit7', en: '7', enShift: '&', ru: '7', ruShift: '?',
  }, {
    row: 0, code: 'Digit8', en: '8', enShift: '*', ru: '8', ruShift: '*',
  }, {
    row: 0, code: 'Digit9', en: '9', enShift: '(', ru: '9', ruShift: '(',
  }, {
    row: 0, code: 'Digit0', en: '0', enShift: ')', ru: '0', ruShift: ')',
  }, {
    row: 0, code: 'Minus', en: '-', enShift: '_', ru: '-', ruShift: '_',
  }, {
    row: 0, code: 'Equal', en: '=', enShift: '+', ru: '=', ruShift: '+',
  }, {
    row: 0, code: 'Backspace', serviceKey: true, en: 'backspace',
  },
  {
    row: 1, code: 'Tab', serviceKey: true, en: 'tab',
  }, {
    row: 1, code: 'KeyQ', en: 'q', enShift: 'Q', ru: 'й', ruShift: 'Й',
  }, {
    row: 1, code: 'KeyW', en: 'w', enShift: 'W', ru: 'ц', ruShift: 'Ц',
  }, {
    row: 1, code: 'KeyE', en: 'e', enShift: 'E', ru: 'у', ruShift: 'У',
  }, {
    row: 1, code: 'KeyR', en: 'r', enShift: 'R', ru: 'к', ruShift: 'К',
  }, {
    row: 1, code: 'KeyT', en: 't', enShift: 'T', ru: 'е', ruShift: 'Е',
  }, {
    row: 1, code: 'KeyY', en: 'y', enShift: 'Y', ru: 'н', ruShift: 'Н',
  }, {
    row: 1, code: 'KeyU', en: 'u', enShift: 'U', ru: 'г', ruShift: 'Г',
  }, {
    row: 1, code: 'KeyI', en: 'i', enShift: 'I', ru: 'ш', ruShift: 'Ш',
  }, {
    row: 1, code: 'KeyO', en: 'o', enShift: 'O', ru: 'щ', ruShift: 'Щ',
  }, {
    row: 1, code: 'KeyP', en: 'p', enShift: 'P', ru: 'з', ruShift: 'З',
  }, {
    row: 1, code: 'BracketLeft', en: '[', enShift: '{', ru: 'х', ruShift: 'Х',
  }, {
    row: 1, code: 'BracketRight', en: ']', enShift: '}', ru: 'ъ', ruShift: 'Ъ',
  }, {
    row: 1, code: 'Backslash', en: '\\', enShift: '|', ru: '\\', ruShift: '/',
  }, {
    row: 1, code: 'Delete', serviceKey: true, en: 'del',
  },
  {
    row: 2, code: 'CapsLock', serviceKey: true, en: 'capslock',
  }, {
    row: 2, code: 'KeyA', en: 'a', enShift: 'A', ru: 'ф', ruShift: 'Ф',
  }, {
    row: 2, code: 'KeyS', en: 's', enShift: 'S', ru: 'ы', ruShift: 'Ы',
  }, {
    row: 2, code: 'KeyD', en: 'd', enShift: 'D', ru: 'в', ruShift: 'В',
  }, {
    row: 2, code: 'KeyF', en: 'f', enShift: 'F', ru: 'а', ruShift: 'А',
  }, {
    row: 2, code: 'KeyG', en: 'g', enShift: 'G', ru: 'п', ruShift: 'П',
  }, {
    row: 2, code: 'KeyH', en: 'h', enShift: 'H', ru: 'р', ruShift: 'Р',
  }, {
    row: 2, code: 'KeyJ', en: 'j', enShift: 'J', ru: 'о', ruShift: 'О',
  }, {
    row: 2, code: 'KeyK', en: 'k', enShift: 'K', ru: 'л', ruShift: 'Л',
  }, {
    row: 2, code: 'KeyL', en: 'l', enShift: 'L', ru: 'д', ruShift: 'Д',
  }, {
    row: 2, code: 'Semicolon', en: ';', enShift: ':', ru: 'ж', ruShift: 'Ж',
  }, {
    row: 2, code: 'Quote', en: "'", enShift: '"', ru: 'э', ruShift: 'Э',
  }, {
    row: 2, code: 'Enter', serviceKey: true, en: 'enter',
  },
  {
    row: 3, code: 'ShiftLeft', serviceKey: true, en: 'shift',
  }, {
    row: 3, code: 'KeyZ', en: 'z', enShift: 'Z', ru: 'я', ruShift: 'Я',
  }, {
    row: 3, code: 'KeyX', en: 'x', enShift: 'X', ru: 'ч', ruShift: 'Ч',
  }, {
    row: 3, code: 'KeyC', en: 'c', enShift: 'C', ru: 'с', ruShift: 'С',
  }, {
    row: 3, code: 'KeyV', en: 'v', enShift: 'V', ru: 'м', ruShift: 'М',
  }, {
    row: 3, code: 'KeyB', en: 'b', enShift: 'B', ru: 'и', ruShift: 'И',
  }, {
    row: 3, code: 'KeyN', en: 'n', enShift: 'N', ru: 'т', ruShift: 'Т',
  }, {
    row: 3, code: 'KeyM', en: 'm', enShift: 'M', ru: 'ь', ruShift: 'Ь',
  }, {
    row: 3, code: 'Comma', en: ',', enShift: '<', ru: 'б', ruShift: 'Б',
  }, {
    row: 3, code: 'Period', en: '.', enShift: '>', ru: 'ю', ruShift: 'Ю',
  }, {
    row: 3, code: 'Slash', en: '/', enShift: '?', ru: '.', ruShift: ',',
  }, {
    row: 3, code: 'ArrowUp', serviceKey: true, en: '↑',
  }, {
    row: 3, code: 'ShiftRight', serviceKey: true, en: 'shift',
  },
  {
    row: 4, code: 'ControlLeft', serviceKey: true, en: 'ctrl',
  }, {
    row: 4, code: 'MetaLeft', serviceKey: true, en: 'win',
  }, {
    row: 4, code: 'AltLeft', serviceKey: true, en: 'alt',
  }, {
    row: 4, code: 'Space', serviceKey: true, en: 'space',
  }, {
    row: 4, code: 'ArrowLeft', serviceKey: true, en: '←',
  }, {
    row: 4, code: 'ArrowDown', serviceKey: true, en: '↓',
  }, {
    row: 4, code: 'ArrowRight', serviceKey: true, en: '→',
  }, {
    row: 4, code: 'AltRight', serviceKey: true, en: 'alt',
  }, {
    row: 4, code: 'ControlRight', serviceKey: true, en: 'ctrl',
  },
];

let language = localStorage.getItem('languageStored') || 'en';
let updated;
let capsLockOn = false;
let ctrlOn = false;
let altOn = false;

function createKeyboard(place) {
  let currentRow = -1;
  keyboardKeys.forEach((key) => {
    if (currentRow !== key.row) {
      const row = document.createElement('div');
      row.classList.add('keyboard_row');
      place.append(row);
      currentRow = key.row;
    }
    const button = document.createElement('button');
    button.classList.add(key.code);
    button.innerHTML = key.serviceKey ? key.en : key[language];
    place.querySelectorAll('.keyboard_row')[currentRow].append(button);
  });
}

function updateKeyboard(place, action) {
  updated = place.querySelectorAll('button');
  updated.forEach((button) => {
    const classListValue = button.classList.value.replace('active', '').trim();
    const info = keyboardKeys.find((key) => key.code === `${classListValue}`);
    if (action === 'Caps') {
      if (!info.serviceKey) {
        document.querySelector(`.${classListValue}`).innerHTML = info[language].toUpperCase();
      }
    }
    if (action === 'unCaps') {
      if (!info.serviceKey) {
        document.querySelector(`.${classListValue}`).innerHTML = info[language];
      }
    }
    if (action === 'Shift') {
      if (!info.serviceKey) {
        document.querySelector(`.${classListValue}`).innerHTML = info[language];
      }
    }
    if (action === 'unShift' && !capsLockOn) {
      if (!info.serviceKey) {
        document.querySelector(`.${classListValue}`).innerHTML = info[language];
      }
    }
    if (action === 'unShift' && capsLockOn) {
      if (!info.serviceKey) {
        document.querySelector(`.${classListValue}`).innerHTML = info[language].toUpperCase();
      }
    }
    if (action === 'lang' && !capsLockOn) {
      if (!info.serviceKey) {
        document.querySelector(`.${classListValue}`).innerHTML = info[language];
      }
    }
    if (action === 'lang' && capsLockOn) {
      if (!info.serviceKey) {
        document.querySelector(`.${classListValue}`).innerHTML = info[language].toUpperCase();
      }
    }
  });
}

window.onload = () => {
  const heading = document.createElement('h1');
  heading.innerHTML = 'Virtual keyboard';
  heading.classList.add('heading');
  document.body.append(heading);

  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  document.body.append(textarea);

  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard_wrapper');
  document.body.append(keyboardWrapper);

  createKeyboard(keyboardWrapper);

  const tip = document.createElement('h3');
  tip.innerHTML = 'Переключение языка ввода: Alt + Ctrl';
  tip.classList.add('tip');
  document.body.append(tip);
  textarea.focus();
  textarea.addEventListener('blur', () => {
    textarea.focus();
  });
  let command;

  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
      capsLockOn = !capsLockOn;
      command = capsLockOn ? 'Caps' : 'unCaps';
      updateKeyboard(keyboardWrapper, command);
    }
    if (event.key === 'Shift') {
      command = 'Shift';
      language = `${language}Shift`;
      updateKeyboard(keyboardWrapper, command);
    }
    if (event.key === 'Control') {
      ctrlOn = true;
    }
    if (event.key === 'Alt') {
      altOn = true;
    }
    if (ctrlOn && altOn) {
      language = language.slice(0, 2) === 'en' ? 'ru' : 'en';
      localStorage.setItem('languageStored', language.slice(0, 2));
      command = 'lang';
      updateKeyboard(keyboardWrapper, command);
      ctrlOn = false;
      altOn = false;
    }
    const keyPressed = keyboardKeys.find((key) => key.code === event.code);
    if (keyPressed != null) {
      const buttonPressed = document.querySelector(`.${keyPressed.code}`);
      buttonPressed.classList.add('active');
      if (!keyPressed.serviceKey) {
        event.preventDefault();
        textarea.value += capsLockOn ? keyPressed[language].toUpperCase() : keyPressed[language];
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') {
      command = 'unShift';
      language = language.slice(0, 2);
      updateKeyboard(keyboardWrapper, command);
    }
    if (event.key === 'Control') {
      ctrlOn = false;
    }
    if (event.key === 'Alt') {
      altOn = false;
    }
    const keyUnpressed = keyboardKeys.find((key) => key.code === event.code);
    if (keyUnpressed != null) {
      const buttonUnpressed = document.querySelector(`.${keyUnpressed.code}`);
      if (keyUnpressed.code !== 'CapsLock' || (keyUnpressed.code === 'CapsLock' && !capsLockOn)) {
        buttonUnpressed.classList.remove('active');
      }
    }
  });
  keyboardWrapper.addEventListener('mousedown', (event) => {
    let mouseEvent = event.target.classList.value;
    mouseEvent = mouseEvent === 'CapsLock active' ? 'CapsLock' : mouseEvent;
    if (mouseEvent === 'CapsLock') {
      capsLockOn = !capsLockOn;
      command = capsLockOn ? 'Caps' : 'unCaps';
      updateKeyboard(keyboardWrapper, command);
    }
    if (mouseEvent.includes('Shift')) {
      command = 'Shift';
      language = `${language}Shift`;
      updateKeyboard(keyboardWrapper, command);
    }
    if (mouseEvent.includes('Control')) {
      ctrlOn = true;
    }
    if (mouseEvent.includes('Alt')) {
      altOn = true;
    }
    if (ctrlOn && altOn) {
      language = language.slice(0, 2) === 'en' ? 'ru' : 'en';
      localStorage.setItem('languageStored', language.slice(0, 2));
      command = 'lang';
      updateKeyboard(keyboardWrapper, command);
      ctrlOn = false;
      altOn = false;
    }
    const keyPressed = keyboardKeys.find((key) => key.code === mouseEvent);
    if (keyPressed != null) {
      const buttonPressed = document.querySelector(`.${keyPressed.code}`);
      buttonPressed.classList.add('active');
      if (!keyPressed.serviceKey) {
        textarea.value += capsLockOn ? keyPressed[language].toUpperCase() : keyPressed[language];
      }
      if (keyPressed.code === 'Space') {
        textarea.value += ' ';
      }
      if (keyPressed.code === 'Backspace') {
        if (textarea.value.length > 0) {
          textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        }
      }
    }
  });
  keyboardWrapper.addEventListener('mouseup', (event) => {
    const mouseUpEvent = event.target.classList.value.replace('active', '').trim();
    if (mouseUpEvent.includes('Shift')) {
      command = 'unShift';
      language = language.slice(0, 2);
      updateKeyboard(keyboardWrapper, command);
    }
    if (mouseUpEvent.includes('Control')) {
      ctrlOn = false;
    }
    if (mouseUpEvent.includes('Alt')) {
      altOn = false;
    }
    const keyUnpressed = keyboardKeys.find((key) => key.code === mouseUpEvent);
    if (keyUnpressed != null) {
      const buttonUnpressed = document.querySelector(`.${keyUnpressed.code}`);
      if (keyUnpressed.code !== 'CapsLock' || (keyUnpressed.code === 'CapsLock' && !capsLockOn)) {
        buttonUnpressed.classList.remove('active');
      }
    }
  });
};
