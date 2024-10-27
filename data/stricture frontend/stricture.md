instagram-clone/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   ├── v1/
│   │   │   │   ├── auth/
│   │   │   │   │   ├── login.py
│   │   │   │   │   ├── register.py
│   │   │   │   │   ├── jwt_manager.py
│   │   │   │   ├── users/
│   │   │   │   │   ├── models.py
│   │   │   │   │   ├── routes.py
│   │   │   │   │   ├── schemas.py
│   │   │   │   ├── posts/
│   │   │   │   │   ├── models.py
│   │   │   │   │   ├── routes.py
│   │   │   │   │   ├── schemas.py
│   │   │   │   ├── comments/
│   │   │   │   │   ├── models.py
│   │   │   │   │   ├── routes.py
│   │   │   │   │   ├── schemas.py
│   │   │   │   ├── likes/
│   │   │   │   │   ├── models.py
│   │   │   │   │   ├── routes.py
│   │   │   │   │   ├── schemas.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   ├── database.py
│   │   │   ├── security.py
│   │   ├── main.py
│   │   ├── requirements.txt
│   ├── tests/
│   │   ├── test_auth.py
│   │   ├── test_users.py
│   │   ├── test_posts.py
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Post.js
│   │   │   ├── Profile.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useFetchPosts.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Profile.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   ├── tailwind.config.js (if using Tailwind)
├── media/
│   ├── uploads/
│   │   ├── profile_pics/
│   │   ├── post_images/
├── docs/
│   ├── architecture.md
│   ├── api_endpoints.md
│   ├── db_schema.md
└── README.md
