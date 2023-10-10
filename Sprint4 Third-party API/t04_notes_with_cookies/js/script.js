const addCookies = () => {
    const textOutInput = document.getElementById('txt').value;
    if (textOutInput === '') {
      alert('Enter text');
      return;
    }
    histr(textOutInput);

    const currentDate = new Date();
  
    const expirationDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
 
    const expires = expirationDate.toUTCString();

    document.cookie = `${textOutInput}=-> ${textOutInput}; expires=${expires}`;
  };

  const deleteCookies = () => {
    const child = document.getElementById('h_text');
    const a = document.cookie.split(' ');
  
    const b = a
      .map((val, i) => (!(i % 2 === 0) && val !== null ? val : ''))
      .filter((val) => val !== '');
    const c = b.map((val, i) =>
      i !== b.length - 1
        ? (document.cookie =
            val.slice(0, -1) + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;')
        : (document.cookie = val + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;')
    );
    console.log(c);
    while (child.firstChild) {
      child.removeChild(child.firstChild);
    }
  };

  const histr = (text) => {
    if (text === '') {
      return;
    }
    const textBlock = document.getElementById('h_text');
    const textInput = document.createElement('p');
    textInput.className = 'txt';
    textInput.innerHTML = `-> ${text}`;
  
    textBlock.appendChild(textInput);
    if (textBlock.firstChild.innerHTML === '[Empty]') {
      textBlock.removeChild(textBlock.firstChild);
    }
    document.getElementsByClassName('txt').value = '';
  };
