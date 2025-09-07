// Seed Database Script for EduSpark Faculty Feedback System
// Run this script once to populate your Firebase Realtime Database

// Firebase services are already initialized in app.js
// Use the global auth and db variables
const seedAuth = window.auth;
const seedDb = window.db;

// Seed Data
const seedUsers = [
  // Admin User
  {
    name: "Super Admin",
    email: "admin@piet.edu",
    password: "Admin@123",
    role: "admin",
    institute: "PIET",
    department: "CSE"
  },
  
  // Faculty Users
  {
    name: "Faculty One",
    email: "faculty1@piet.edu",
    password: "Faculty@123",
    role: "faculty",
    institute: "PIET",
    department: "CSE",
    subject: "Data Structures"
  },
  {
    name: "Faculty Two",
    email: "faculty2@piet.edu",
    password: "Faculty@123",
    role: "faculty",
    institute: "PIET",
    department: "IT",
    subject: "Web Development"
  },
  {
    name: "Faculty Three",
    email: "faculty3@pit.edu",
    password: "Faculty@123",
    role: "faculty",
    institute: "PIT",
    department: "CSE",
    subject: "Database Management"
  },
  {
    name: "Faculty Four",
    email: "faculty4@pit.edu",
    password: "Faculty@123",
    role: "faculty",
    institute: "PIT",
    department: "IT",
    subject: "Artificial Intelligence"
  },
  {
    name: "Faculty Five",
    email: "faculty5@piet.edu",
    password: "Faculty@123",
    role: "faculty",
    institute: "PIET",
    department: "CSE",
    subject: "Operating Systems"
  },
  
  // Student Users
  {
    name: "Student One",
    email: "student1@piet.edu",
    password: "Student@123",
    role: "student",
    institute: "PIET",
    department: "CSE"
  },
  {
    name: "Student Two",
    email: "student2@piet.edu",
    password: "Student@123",
    role: "student",
    institute: "PIET",
    department: "IT"
  },
  {
    name: "Student Three",
    email: "student3@pit.edu",
    password: "Student@123",
    role: "student",
    institute: "PIT",
    department: "CSE"
  },
  {
    name: "Student Four",
    email: "student4@pit.edu",
    password: "Student@123",
    role: "student",
    institute: "PIT",
    department: "IT"
  },
  {
    name: "Student Five",
    email: "student5@piet.edu",
    password: "Student@123",
    role: "student",
    institute: "PIET",
    department: "CSE"
  }
];

// Function to create user and store in database
async function createUser(userData) {
  try {
    // Create user with Firebase Auth
    const userCredential = await seedAuth.createUserWithEmailAndPassword(
      userData.email, 
      userData.password
    );
    
    const user = userCredential.user;
    
    // Prepare user data for database (remove password)
    const { password, ...userInfo } = userData;
    
    // Store user info in Realtime Database
    await seedDb.ref(`users/${user.uid}`).set(userInfo);
    
    console.log(`✅ Created ${userData.role}: ${userData.name} (${userData.email})`);
    
    // Sign out after creation
    await seedAuth.signOut();
    
    return user.uid;
  } catch (error) {
    console.error(`❌ Error creating ${userData.role} ${userData.name}:`, error.message);
    return null;
  }
}

// Function to seed all users
async function seedDatabase() {
  console.log('🚀 Starting database seeding...');
  console.log('📝 This will create:', seedUsers.length, 'users');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const userData of seedUsers) {
    const uid = await createUser(userData);
    if (uid) {
      successCount++;
    } else {
      errorCount++;
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n🎉 Seeding completed!');
  console.log(`✅ Successfully created: ${successCount} users`);
  if (errorCount > 0) {
    console.log(`❌ Failed to create: ${errorCount} users`);
  }
  
  console.log('\n📋 Pre-seeded Users:');
  seedUsers.forEach((user, index) => {
    console.log(`${index + 1}. ${user.name} - ${user.email} (${user.role})`);
  });
  
  console.log('\n🔑 Default Passwords:');
  console.log('Admin: Admin@123');
  console.log('Faculty: Faculty@123');
  console.log('Student: Student@123');
}

// Function to check if users already exist
async function checkExistingUsers() {
  try {
    const snapshot = await seedDb.ref('users').once('value');
    const users = snapshot.val();
    
    if (users) {
      const userCount = Object.keys(users).length;
      console.log(`📊 Found ${userCount} existing users in database`);
      
      if (userCount > 0) {
        console.log('⚠️  Users already exist. Do you want to continue?');
        console.log('   This will create duplicate users if emails already exist.');
        return false;
      }
    }
    
    return true;
  } catch (error) {
    console.error('❌ Error checking existing users:', error.message);
    return true;
  }
}

// Main execution function
async function main() {
  try {
    console.log('🔥 EduSpark Database Seeder');
    console.log('=============================\n');
    
    // Check if users already exist
    const shouldContinue = await checkExistingUsers();
    
    if (!shouldContinue) {
      console.log('\n💡 To re-seed, manually delete users from Firebase Console first.');
      return;
    }
    
    // Start seeding
    await seedDatabase();
    
    console.log('\n🎯 Next Steps:');
    console.log('1. Test login with any of the created accounts');
    console.log('2. Check Firebase Console to verify users were created');
    console.log('3. Delete this seed script after successful seeding');
    
  } catch (error) {
    console.error('💥 Fatal error during seeding:', error.message);
  }
}

// Auto-execute if running in browser
if (typeof window !== 'undefined') {
  // Add to window for manual execution
  window.seedDatabase = seedDatabase;
  window.seedUsers = seedUsers;
  
  console.log('🌱 Seed script loaded!');
  console.log('💡 Run "seedDatabase()" in console to start seeding');
  console.log('💡 Or check "seedUsers" to see the data structure');
}

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { seedDatabase, seedUsers };
}
