# 🌍 Wanderlust – Travel Listing Web Application

Wanderlust is a full-stack travel listing web application where users can explore travel destinations, create their own listings, share experiences, and write reviews.

🔗 **Live Demo:** https://wanderlust-o5dn.onrender.com/

💻 **GitHub Repository:** https://github.com/himaniyadav-git/Wanderlust

## ✨ Features

- **User Authentication:** Secure user registration and login using Passport.js.
- **Explore Listings:** Browse available travel destinations and accommodation listings.
- **Create Listings:** Authenticated users can add new travel listings.
- **Manage Listings:** Users can edit and delete their own listings.
- **Reviews & Ratings:** Users can share their experiences through reviews.
- **Image Uploads:** Upload and store listing images using Cloudinary.
- **Session Management:** Maintain user sessions using MongoDB session storage.
- **Flash Messages:** Display success and error notifications.
- **Form Validation:** Validate user input using Joi.
- **Responsive UI:** User-friendly interface for browsing listings.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling |
| JavaScript | Client-side functionality |
| EJS | Dynamic templating |
| Node.js | Backend runtime |
| Express.js | Server-side framework |
| MongoDB Atlas | Database |
| Mongoose | Database modeling |
| Passport.js | Authentication |
| Cloudinary | Image storage |
| Multer | File uploads |
| Bootstrap | UI styling |

## 📂 Project Structure

```text
Wanderlust/
│
├── controllers/       # Application logic
├── init/              # Initial data and database setup
├── models/            # Mongoose models
├── public/            # CSS, JavaScript and static files
├── routes/            # Application routes
├── utils/             # Utility functions
├── views/             # EJS templates
│
├── app.js             # Main application file
├── cloudConfig.js     # Cloudinary configuration
├── middleware.js     # Custom middleware
├── schema.js          # Validation schemas
├── package.json       # Dependencies
└── .gitignore
```

## ⚙️ Installation & Setup

Follow these steps to run Wanderlust locally.

**1. Clone the repository**

```bash
git clone https://github.com/himaniyadav-git/Wanderlust.git
```

**2. Navigate to the project folder**

```bash
cd Wanderlust
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the root directory and add:

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

Replace the placeholder values with your actual credentials.

**5. Start the application**

```bash
node app.js
```

Open your browser and visit:

```text
http://localhost:8080
```

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| ATLASDB_URL | MongoDB Atlas connection string |
| SECRET | Secret key for session management |
| CLOUD_NAME | Cloudinary cloud name |
| CLOUD_API_KEY | Cloudinary API key |
| CLOUD_API_SECRET | Cloudinary API secret |

**Important:** Never upload your `.env` file or expose your private credentials on GitHub.

## 🚀 Deployment

The application is deployed using **Render**, with MongoDB Atlas for database hosting and Cloudinary for image storage.

🔗 Live Application: https://wanderlust-o5dn.onrender.com/

## 📚 Learning Outcomes

Through this project, I gained practical experience in:

- Building a full-stack web application using Node.js and Express.js.
- Implementing authentication and authorization.
- Working with MongoDB and Mongoose.
- Developing RESTful routes and CRUD operations.
- Managing sessions and cookies.
- Integrating Cloudinary for image uploads.
- Handling form validation and error handling.
- Deploying a web application using Render.

## 👩‍💻 Author

**Himani Yadav**

- GitHub: [himaniyadav-git](https://github.com/himaniyadav-git)
- LinkedIn: [Himani Yadav](https://www.linkedin.com/in/himani-yadav1098/)

---

⭐ If you find this project interesting, feel free to explore the repository and share your feedback!

