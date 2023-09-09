const apiKey = '5ae0fab399e17bec4ca2930c2b099ab0'; // Замените на ваш ключ API
const username = 'sasanazarenko538@gmail.com'; // Замените на ваше имя пользователя

const fileInput = document.querySelector('#file-input'); // Элемент input для выбора файла

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    fetch(`https://neocities.org/api/upload/${username}`, {
      method: 'POST',
      headers: {
        'Authorization': apiKey,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result === 'success') {
          console.log('Файл успешно загружен на Neocities');
        } else {
          console.error('Ошибка при загрузке файла на Neocities');
        }
      })
      .catch((error) => {
        console.error('Ошибка при выполнении запроса:', error);
      });
  }
});
