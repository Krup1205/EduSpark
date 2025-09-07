# EduSpark Faculty Feedback System

A comprehensive role-based faculty feedback system built with HTML, CSS, JavaScript, and Firebase.

## 🚀 Features

### **Authentication & Authorization**
- **Firebase Authentication** with email/password
- **Role-based access control** (Admin, Faculty, Student)
- **Secure user management** with Firebase Realtime Database

### **Three Role-Based Dashboards**

#### **1. Student Dashboard**
- Submit feedback for faculty members
- Rate 10 different parameters (Teaching, Communication, etc.)
- View feedback history
- Profile management
- Real-time statistics

#### **2. Faculty Dashboard**
- View anonymous student feedback
- Performance analytics and charts
- Feedback filtering by month
- Profile management
- Real-time statistics

#### **3. Admin Dashboard**
- User management (add/edit/delete faculty and students)
- System-wide analytics
- **Real-time statistics** (Total Students, Faculty, Feedback)
- **Top performing faculties** (Global ranking across all institutes)
- **Recent activity feed** (Real-time updates)
- User registration system
- Complete system overview

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Firebase
- **Authentication**: Firebase Authentication
- **Database**: Firebase Realtime Database
- **Analytics**: Firebase Analytics
- **Charts**: Chart.js
- **Icons**: Font Awesome

## 📋 Prerequisites

1. **Firebase Account** - Create a project at [Firebase Console](https://console.firebase.google.com/)
2. **Web Browser** - Modern browser with JavaScript enabled
3. **Local Server** - For development (due to CORS policies)

## 🚀 Quick Start

### **1. Clone/Download Project**
```bash
git clone <repository-url>
cd eduspark-faculty-feedback
```

### **2. Firebase Setup**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password)
4. Enable Realtime Database
5. Enable Analytics
6. Copy your Firebase config to `app.js`

### **3. Seed Database**
1. Open `seed-database.js` in your browser
2. Open browser console (F12)
3. Run: `seedDatabase()`
4. This creates 11 pre-seeded users:
   - 1 Admin
   - 5 Faculty members
   - 5 Students

### **4. Start Application**
1. Serve files using a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
2. Open `http://localhost:8000` in your browser

## 🔐 Pre-Seeded Users

### **Admin Account**
- **Email**: `admin@piet.edu`
- **Password**: `Admin@123`
- **Role**: Admin
- **Institute**: PIET
- **Department**: CSE

### **Faculty Accounts**
- **Faculty One**: `faculty1@piet.edu` / `Faculty@123` (Data Structures)
- **Faculty Two**: `faculty2@piet.edu` / `Faculty@123` (Web Development)
- **Faculty Three**: `faculty3@pit.edu` / `Faculty@123` (Database Management)
- **Faculty Four**: `faculty4@pit.edu` / `Faculty@123` (Artificial Intelligence)
- **Faculty Five**: `faculty5@piet.edu` / `Faculty@123` (Operating Systems)

### **Student Accounts**
- **Student One**: `student1@piet.edu` / `Student@123` (CSE)
- **Student Two**: `student2@piet.edu` / `Student@123` (IT)
- **Student Three**: `student3@pit.edu` / `Student@123` (CSE)
- **Student Four**: `student4@pit.edu` / `Student@123` (IT)
- **Student Five**: `student5@piet.edu` / `Student@123` (CSE)

## 🗄️ Database Structure

### **Users Collection**
```json
{
  "users": {
    "uid123": {
      "name": "User Name",
      "email": "user@example.com",
      "role": "admin|faculty|student",
      "institute": "PIET|PIT",
      "department": "CSE|IT",
      "subject": "Subject Name" // Faculty only
    }
  }
}
```

### **Feedback Collection**
```json
{
  "feedback": {
    "feedbackId": {
      "studentId": "uid123",
      "studentName": "Student Name",
      "facultyId": "uid456",
      "facultyName": "Faculty Name",
      "ratings": {
        "teachingEffectiveness": 4,
        "communication": 5,
        "subjectKnowledge": 4,
        "engagement": 3,
        "clarityOfConcepts": 4,
        "punctuality": 5,
        "useOfTechnology": 4,
        "approachability": 4,
        "understandingStudents": 4,
        "overallExperience": 4
      },
      "comments": "Feedback text",
      "date": "2025-01-21",
      "averageRating": 4.1
    }
  }
}
```

## 🔧 Configuration

### **Firebase Config (`app.js`)**
```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.firebasestorage.app",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
```

### **Database Rules**
Set your Firebase Realtime Database rules to:
```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth != null && (auth.uid == $uid || root.child('users').child(auth.uid).child('role').val() == 'admin')",
        ".write": "auth != null && (auth.uid == $uid || root.child('users').child(auth.uid).child('role').val() == 'admin')"
      }
    },
    "feedback": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

## 📱 Features by Role

### **Student Features**
- ✅ Login with email/password
- ✅ View personalized dashboard
- ✅ Submit feedback for faculty
- ✅ Rate 10 different parameters
- ✅ View feedback history
- ✅ Delete own feedback
- ✅ Update profile information
- ✅ Real-time statistics

### **Faculty Features**
- ✅ Login with email/password
- ✅ View anonymous student feedback
- ✅ Performance analytics
- ✅ Feedback filtering by month
- ✅ Real-time statistics
- ✅ Update profile information
- ✅ View recent feedback

### **Admin Features**
- ✅ Login with email/password
- ✅ Complete user management
- ✅ Add new faculty/students
- ✅ Delete users
- ✅ System-wide analytics
- ✅ User registration system
- ✅ Top performing faculty tracking

## 🎨 UI Components

### **Responsive Design**
- Mobile-first approach
- Responsive navigation
- Adaptive layouts
- Touch-friendly interfaces

### **Modern UI Elements**
- Gradient backgrounds
- Smooth animations
- Interactive charts
- Real-time notifications
- Loading states
- Form validation

### **Color Scheme**
- **Primary**: Blue (#2563eb)
- **Secondary**: Teal (#0d9488)
- **Success**: Green (#16a34a)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#dc2626)

## 🔒 Security Features

- **Firebase Authentication** for secure login
- **Role-based access control**
- **Input validation** on all forms
- **Secure password handling**
- **Database security rules**
- **Anonymous feedback** for students

## 📊 Analytics & Reporting

### **Student Analytics**
- Feedback submission count
- Faculties rated count
- Average rating given
- Recent activity tracking

### **Faculty Analytics**
- Total feedback received
- Average rating across parameters
- Performance indicators
- Trend analysis
- Parameter breakdown

### **Admin Analytics**
- System-wide statistics
- User counts by role
- Feedback trends
- Department comparisons
- Top performing faculty

## ✨ New Features (Latest Update)

### **Real-Time Admin Dashboard**
The admin dashboard now includes real-time data fetching and new features:

#### **Statistics Section**
- **Total Students**: Real-time count from database
- **Total Faculty**: Real-time count from database  
- **Total Feedback**: Real-time count from database
- All statistics update automatically when data changes

#### **Top Performing Faculties**
- **Global Top 5**: Ranking across all institutes and departments
- **No filters applied**: Shows the best performing faculties system-wide
- **Performance metrics**: Based on average feedback scores
- **Visual ranking**: Trophy badges with color-coded ranks
- **Detailed info**: Name, department, institute, average rating, feedback count

#### **Recent Activity Feed**
- **Real-time updates**: Shows latest system activities
- **Feedback submissions**: New feedback with timestamps
- **User registrations**: New faculty/student registrations with timestamps
- **Activity icons**: Color-coded by activity type
- **Time formatting**: Human-readable relative timestamps

#### **Technical Implementation**
- **Firebase Realtime Database listeners** for instant updates
- **Efficient data processing** with optimized queries
- **Responsive design** for all screen sizes
- **Error handling** with graceful fallbacks
- **Performance optimized** with minimal database calls

## 🚧 Development Notes

### **File Structure**
```
project/
├── index.html          # Main application
├── app.js             # Firebase configuration
├── seed-database.js   # Database seeding script
├── script.js          # Main application logic
├── style.css          # Styling
└── README.md          # Documentation
```

### **Browser Compatibility**
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### **Performance**
- Lazy loading of dashboard components
- Efficient database queries
- Optimized chart rendering
- Minimal DOM manipulation

## 🐛 Troubleshooting

### **Common Issues**

1. **Firebase not initialized**
   - Check console for errors
   - Verify Firebase config in `app.js`
   - Ensure Firebase SDKs are loaded

2. **Authentication errors**
   - Check Firebase Console for Authentication settings
   - Verify email/password are correct
   - Check if user exists in database

3. **Database access denied**
   - Verify Firebase Database rules
   - Check if user is authenticated
   - Ensure proper role permissions

4. **Charts not displaying**
   - Check if Chart.js is loaded
   - Verify canvas elements exist
   - Check console for JavaScript errors

### **Debug Mode**
Enable debug logging by opening browser console and running:
```javascript
localStorage.setItem('debug', 'true');
```

## 🔮 Future Enhancements

- [ ] Email notifications
- [ ] Advanced analytics dashboard
- [ ] Export functionality (PDF/Excel)
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Advanced filtering options
- [ ] Real-time chat support
- [ ] File upload for feedback

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review Firebase documentation

## 🙏 Acknowledgments

- Firebase team for excellent documentation
- Chart.js for charting capabilities
- Font Awesome for icons
- Open source community for inspiration

---

**Made with ❤️ for educational institutions**
