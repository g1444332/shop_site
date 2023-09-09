import requests
import os
import random

# Замените на свой токен доступа
api_token = "5ae0fab399e17bec4ca2930c2b099ab0"

# Замените на имя вашего сайта на Neocities
site_name = "shop-g1444332"


# Функция для получения списка файлов на сайте
def get_site_files():
    response = requests.get(f"https://neocities.org/api/info?sitename={site_name}")
    if response.status_code == 200:
        data = response.json()
        if 'listing' in data:
            return data['listing']
        else:
            print("На сайте нет файлов.")
            return []
    else:
        print(f"Ошибка при получении информации о сайте: {response.status_code}")
        return []


# Функция для перемешивания файлов
def shuffle_files(files):
    random.shuffle(files)
    return files


# Функция для обновления файлов на сайте
def update_site_files(files):
    data = {'files': files}
    response = requests.post(f"https://neocities.org/api/update?sitename={site_name}",
                             headers={'Authorization': f'Bearer {api_token}'},
                             json=data)
    if response.status_code == 200:
        print("Файлы успешно перемешаны и обновлены на сайте.")
    else:
        print(f"Ошибка при обновлении файлов: {response.status_code}")


if __name__ == "__main__":
    # Получаем список файлов на сайте
    site_files = get_site_files()

    if site_files:
        # Перемешиваем файлы
        shuffled_files = shuffle_files(site_files)

        # Обновляем файлы на сайте
        update_site_files(shuffled_files)
    else:
        print("Не удалось получить список файлов на сайте.")