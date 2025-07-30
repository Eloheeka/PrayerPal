const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample prayers tagged by focus
const prayersByFocus = {
  Joy: [
    { text: "Dear Heavenly Father, I come before You with a humble heart, seeking Your joy to fill my spirit. Your Word says that the joy of the Lord is my strength (Nehemiah 8:10). Help me to find joy in Your presence and to trust in Your goodness, even in difficult times. May Your joy overflow in my life, bringing light to those around me. Thank You for the gift of joy that comes from knowing You. In Jesus' name, I pray, Amen.Fill my heart with joy, O Lord, that I may spread Your light to others.", source: "Inspired by Psalm 16:11" },
    { text: "The joy of the Lord is my strength.", source: "Nehemiah 8:10" }
  ],
  Anxiety: [
    { text: "Dear Lord, I come to You with my worries and fears. Your Word reminds me not to be anxious about anything, but to bring my requests to You in prayer (Philippians 4:6-7). Please calm my heart and mind, and fill me with Your peace that surpasses all understanding. Help me to trust in Your plan and to lean on You during this time of anxiety. Thank You for Your love and support. In Jesus' name, I pray, Amen.Grant me peace, Lord, and calm my anxious heart.", source: "Inspired by Philippians 4:6-7" },
    { text: "Cast all your anxiety on Him because He cares for you.", source: "1 Peter 5:7" }
  ],
  Strength: [
    { text: "Gracious Father, I come to You seeking strength in my weakness. Your Word assures me that I can do all things through Christ who strengthens me (Philippians 4:13). Please empower me with Your strength to face the challenges ahead and to persevere in faith. Help me to rely on You and to find courage in Your presence. Thank You for being my refuge and my source of strength. In Jesus' name, I pray, Amen.Lord, be my strength and shield in times of trial.", source: "Inspired by Psalm 28:7" },
    { text: "I can do all things through Christ who strengthens me.", source: "Philippians 4:13" }
  ],
  Gratitude: [
    { text: "Dear Heavenly Father, I thank You for Your countless blessings in my life. Your Word reminds me to give thanks in all circumstances (1 Thessalonians 5:18). Help me to cultivate a heart of gratitude, recognizing Your goodness and faithfulness each day. May I always remember to express my appreciation for the big and small things, and to share Your love with others. Thank You for Your grace and mercy. In Jesus' name, I pray, Amen.Thank You, God, for Your endless blessings and love.", source: "Traditional Prayer" },
    { text: "Give thanks in all circumstances, for this is God’s will for you.", source: "1 Thessalonians 5:18" }
  ],
  Faith: [
    { text: "Dear Lord, I come to You seeking to strengthen my faith. Your Word tells me that faith is the assurance of things hoped for, the conviction of things not seen (Hebrews 11:1). Help me to trust in Your promises and to rely on Your guidance in every aspect of my life. When doubts arise, remind me of Your faithfulness and love. Thank You for being my anchor and my hope. In Jesus' name, I pray, Amen.Increase my faith, Lord, to trust in Your perfect plan.", source: "Inspired by Luke 17:5" },
/*{ text: "Faith is the assurance of things hoped for, the conviction of things not seen.", source: "Hebrews 11:1" }*/
  ],
  Fear: [
    { text: "Dear Lord, I come to You seeking to strengthen my faith. Your Word tells me that faith is the assurance of things hoped for, the conviction of things not seen (Hebrews 11:1). Help me to trust in Your promises and to rely on Your guidance in every aspect of my life. When doubts arise, remind me of Your faithfulness and love. Thank You for being my anchor and my hope. In Jesus' name, I pray, Amen.Lord, replace my fear with Your perfect love.", source: "Inspired by 1 John 4:18" },
    { text: "When I am afraid, I put my trust in You.", source: "Psalm 56:3" }
  ],
  Studies: [
    { text: "Dear Heavenly Father, I lift my studies up to You. Please grant me wisdom and understanding as I learn and grow. Help me to focus and retain the knowledge I need, and give me the perseverance to overcome any challenges I may face. May I use my education to glorify You and serve others. Thank You for the opportunity to learn and for Your guidance along the way. In Jesus' name, I pray, Amen.Guide my mind, Lord, as I seek knowledge and wisdom.", source: "Inspired by James 1:5" },
    { text: "Let my studies glorify You in all I learn and do.", source: "Traditional Prayer" }
  ],
  Family: [
    { text: "Dear Lord, I thank You for the gift of my family. I ask for Your protection, love, and guidance over each member. Help us to grow closer together in faith and understanding, and to support one another through life's challenges. May our home be filled with Your peace and joy, and may we always seek to reflect Your love in our relationships. Thank You for the blessing of family. In Jesus' name, I pray, Amen.Bless my family, Lord, with love, unity, and protection.", source: "Traditional Prayer" },
    { text: "As for me and my house, we will serve the Lord.", source: "Joshua 24:15" }
  ],
  Peace: [
    { text: "Dear Heavenly Father, I come to You seeking Your peace that surpasses all understanding (Philippians 4:7). In times of turmoil and uncertainty, help me to find solace in Your presence. Calm my heart and mind, and fill me with Your tranquility. May Your peace guide my thoughts and actions, and may I be a vessel of Your peace to those around me. Thank You for Your constant love and support. In Jesus' name, I pray, Amen.Lord, let Your peace that surpasses understanding guard my heart.", source: "Inspired by Philippians 4:7" },
    { text: "Peace I leave with you; my peace I give you.", source: "John 14:27" }
  ],
  Salvation: [
    { text: "Dear Lord Jesus, I come to You with a humble heart, recognizing my need for Your grace and forgiveness. I believe that You are the Son of God and that You died for my sins and rose again. I ask You to cleanse me from all unrighteousness and to come into my heart as my Lord and Savior. Help me to follow You and to live a life that honors You. Thank You for the gift of salvation and for the hope of eternal life. In Your precious name, I pray, Amen.Thank You, Lord, for the gift of salvation through Your grace.", source: "Inspired by Ephesians 2:8" },
    { text: "For God so loved the world that He gave His only Son.", source: "John 3:16" }
  ]
};

// Endpoint to get a random prayer based on focus
app.post('/get-prayer', (req, res) => {
  const { focus } = req.body;
  if (!focus || !prayersByFocus[focus]) {
    return res.status(400).json({ error: 'Invalid or missing focus' });
  }

  const prayers = prayersByFocus[focus];
  const randomPrayer = prayers[Math.floor(Math.random() * prayers.length)];
  res.json(randomPrayer);
});

// Serve the frontend
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});