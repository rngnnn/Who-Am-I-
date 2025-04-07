import admin from 'firebase-admin';

// Firebase Admin SDK yapılandırması
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "who-am-i-8f278",
      clientEmail: "firebase-adminsdk-fbsvc@who-am-i-8f278.iam.gserviceaccount.com",
      privateKey: "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----".replace(/\\n/g, '\n'),
    }),
    databaseURL: "https://who-am-i-8f278.firebaseio.com",
  });
}

const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Firestore'a veri yazma
      await db.collection('submissions').add({
        name,
        email,
        message,
        date: new Date(),
      });
      return res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error saving submission:', error);
      return res.status(500).json({ error: 'Failed to save submission.' });
    }
  } else if (req.method === 'GET') {
    try {
      // Firestore'dan veri okuma
      const submissions = [];
      const querySnapshot = await db.collection('submissions').get();
      querySnapshot.forEach((doc) => {
        submissions.push({ id: doc.id, ...doc.data() });
      });
      return res.status(200).json(submissions);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      return res.status(500).json({ error: 'Failed to fetch submissions.' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}