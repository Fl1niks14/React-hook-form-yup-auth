# 🧩 Проект: Приложение с авторизацией и защищёнными маршрутами

## 🚀 Стек технологий

- **Frontend:** React (на TypeScript)
- **Сборщик:** Vite
- **Стилизация:** CSS / UI-библиотеки (по желанию)
- **Формы:** [`react-hook-form`](https://react-hook-form.com/)
- **Валидация:** [`yup`](https://github.com/jquense/yup) с [`@hookform/resolvers`](https://react-hook-form.com/get-started#SchemaValidation)
- **Роутинг:** `react-router-dom@6`
- **Хранилище:** `localStorage` для хранения токена
- **Типизация:** TypeScript

---

## 📁 Структура проекта
```bash
src/
├── components/
│ └── FormInput.tsx # Переиспользуемый input с валидацией
├── pages/
│ ├── Login.tsx # Страница входа
│ ├── Dashboard.tsx # Защищённая страница
│ └── Register.tsx # Страница регистрации (опционально)
├── routes/
│ └── ProtectedRoute.tsx # Обёртка для защищённых маршрутов
├──  index.ts 
├── App.tsx # Маршрутизация
└── main.tsx # Точка входа
```

## 🔐 Авторизация

- Пользователь вводит **email** и **пароль**.
- После успешной валидации:
  - В `localStorage` сохраняется фиктивный токен: `authToken`.
  - Происходит редирект на `/dashboard`.
- Все защищённые маршруты проверяют наличие токена.
  - Если токена нет — происходит перенаправление на `/login`.

---

## 📌 Заметки

- Проект легко расширяется: можно добавить регистрацию, сброс пароля, API-запросы и полноценный backend.
