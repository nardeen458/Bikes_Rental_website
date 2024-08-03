CREATE DATABASE  IF NOT EXISTS `bikes_rental` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_bin */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bikes_rental`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: bikes_rental
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bikes`
--

DROP TABLE IF EXISTS `bikes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bikes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `bike_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint unsigned NOT NULL,
  `suitable_age` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bikes_category_id_foreign` (`category_id`),
  CONSTRAINT `bikes_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bikes`
--

LOCK TABLES `bikes` WRITE;
/*!40000 ALTER TABLE `bikes` DISABLE KEYS */;
INSERT INTO `bikes` VALUES (1,'Ribble R872 Disc','Carbon Disc Road Bike - Lightweight endurance carbon at a great price',1,'12','bikes/1L9p22okscBTtwEFbt1skYBco1HDFSJVRYOOg8dA.avif',NULL,NULL),(2,'Avatar 2.0 Electric Bike','The Avatar 2.0 electric bike is a robust, updated design. It can handle rugged terrain or work as a nippy city bike.',3,'16','bikes/jmTsOunapYJ9isaQZIficiAbb1HP0i9ralI5HNZD.jpg',NULL,NULL),(3,'Ribble Ultra SL R','Carbon Disc Aero Road Bike - The world\'s most aerodynamically advanced road race bike',1,'12','bikes/i47i6SA4OFPMPW159PZhKC09tqFVfkQrCMVKv2VB.avif',NULL,NULL),(4,'Quintana Roo X-PR','The bike has tons of fit options—six sizes with lots of stack/reach overlap—and even fit assistance if you need it.',5,'16','bikes/OXgHreNy3aQeMebpJMOqkmqTeN1le7S01KY8Dlo7.webp',NULL,NULL),(5,'Cube Touring','Feature-rich flat-bar trekking bike',2,'16','bikes/s1WgPcOf3jJabEO4GPhgfaCBeFKlfGc9h4yK9fvZ.webp',NULL,NULL),(6,'VELOSTAR F011 Gravel 105','Our VELOSTAR Intec F011 Gravel 105 with its innovative frame geometry with a long wheelbase and significantly more tire clearance offers absolute smoothness and comfort off-road.',4,'18','bikes/vEsD9I3hcXRNufDtlpDptvCiz2QmoPkNUCJXtBOy.webp',NULL,NULL),(7,'Cadex Tri',' This is a surprisingly simple bike to travel with and fit—using a mostly modular front end atop that unusual fork design.',5,'18','bikes/6qjSdmx9Rpak6KmSSTE13snSGpSfNcFM4JbqLgBT.webp',NULL,NULL),(8,'Decathlon Riverside Touring','Good value forward-thinking light tourer',2,'12','bikes/LvZkbuuiD6pLuyO2Atpp7yB3sYEc4071imMFiorh.webp',NULL,NULL),(9,'Surly Bridge Club 700c ','Ultra-focused on simplicity, it only has the barnacles that matter most to the discerning bike tourist',4,'16','bikes/3JyHiSTByzthG0xzUNnqxqmdxxkPTGD3auBMIRAA.jpg',NULL,NULL),(10,'Ribble Endurance Ti Disc','Titanium Road Bike - Light Race and Endurance with pro level technology',1,'16','bikes/OkglGLSS4Cs2GCwPQvYKoBQQo9KXNptrzmi8h58A.avif',NULL,NULL),(11,'Happy Trails','The Happy Trails Ebike features an impressive 48 Volt 750 Watt Motor and 14 Amp Samsung Lithium-Ion Battery, which will take you up to 45+ miles on a single charge.',3,'18','bikes/66xBovgL55vu31dagPNiTVGQhHBB8A7AJlxpdNSd.webp',NULL,NULL);
/*!40000 ALTER TABLE `bikes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bikes_locations`
--

DROP TABLE IF EXISTS `bikes_locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bikes_locations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `bike_id` bigint unsigned NOT NULL,
  `location_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bikes_locations_category_id_foreign` (`bike_id`),
  KEY `bikes_locations_location_id_foreign` (`location_id`),
  CONSTRAINT `bikes_locations_category_id_foreign` FOREIGN KEY (`bike_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `bikes_locations_location_id_foreign` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bikes_locations`
--

LOCK TABLES `bikes_locations` WRITE;
/*!40000 ALTER TABLE `bikes_locations` DISABLE KEYS */;
INSERT INTO `bikes_locations` VALUES (1,1,1,NULL,NULL),(2,1,2,NULL,NULL),(3,1,3,NULL,NULL),(4,1,4,NULL,NULL),(5,2,1,NULL,NULL),(6,2,2,NULL,NULL),(7,2,3,NULL,NULL),(8,2,4,NULL,NULL),(9,3,1,NULL,NULL),(10,3,2,NULL,NULL),(11,3,3,NULL,NULL),(12,3,4,NULL,NULL);
/*!40000 ALTER TABLE `bikes_locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Road Bikes',NULL,NULL),(2,'Touring Bikes',NULL,NULL),(3,'Electric Bikes',NULL,NULL),(4,'Gravel Bikes',NULL,NULL),(5,'Triathlon Bikes',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credits`
--

DROP TABLE IF EXISTS `credits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credits` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `credit_number` int NOT NULL,
  `credit_password` int NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `credits_user_id_foreign` (`user_id`),
  CONSTRAINT `credits_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credits`
--

LOCK TABLES `credits` WRITE;
/*!40000 ALTER TABLE `credits` DISABLE KEYS */;
INSERT INTO `credits` VALUES (4,1234567890,1234567,18,'2024-07-06 09:49:44','2024-07-06 09:49:44'),(5,1234567890,123456789,21,'2024-07-07 07:09:08','2024-07-07 07:09:08'),(6,123456789,1234,22,'2024-07-07 13:20:51','2024-07-07 13:20:51'),(7,123456789,1234,27,'2024-07-13 13:21:41','2024-07-13 13:21:41');
/*!40000 ALTER TABLE `credits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `durations`
--

DROP TABLE IF EXISTS `durations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `durations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `duration_time` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `durations`
--

LOCK TABLES `durations` WRITE;
/*!40000 ALTER TABLE `durations` DISABLE KEYS */;
INSERT INTO `durations` VALUES (1,'1 to 5 hours',10.00,NULL,NULL),(2,'5 to 10 hours',16.00,NULL,NULL),(3,'10 to 15 hours',28.00,NULL,NULL),(4,'1 day',36.00,NULL,NULL),(5,'2 days',70.00,NULL,NULL);
/*!40000 ALTER TABLE `durations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `location_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'The Degla area in Maadi',NULL,NULL),(2,'Qasr El Nil Bridge',NULL,NULL),(3,'The Bike Bark in Ismailia',NULL,NULL),(4,'Sunrise City',NULL,NULL);
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `messages_user_id_foreign` (`user_id`),
  CONSTRAINT `messages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (4,22,'message','2024-07-07 13:23:20','2024-07-07 13:23:20'),(5,27,'message','2024-07-13 13:23:10','2024-07-13 13:23:10');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2024_06_21_122935_create_categories_table',1),(6,'2024_06_21_123557_create_bikes_table',2),(7,'2024_06_21_124322_create_locations_table',3),(8,'2024_06_21_124748_create_bikes_locations_table',4),(9,'2024_06_21_125547_create_credits_table',5),(10,'2024_06_21_130512_create_durations_table',6),(11,'2024_06_21_131217_create_rentals_table',7),(12,'2024_06_21_150614_rename_bikes_locations_column',8),(13,'2024_06_25_091928_add_offer_to_rentals',9),(14,'2024_06_25_204350_drop_column_role_from_table_users',10),(15,'2024_06_25_204527_add_column_role_to_users',11),(16,'2024_06_27_160326_create_offers_table',12),(17,'2024_06_29_135000_create_users_offers_table',13),(18,'2024_07_01_153651_add_percentage_to_offers',14),(19,'2024_07_02_104033_create_messages_table',15),(20,'2024_07_04_201023_drop_precentage_from_offers',16);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (1,'Get Your First Ride With Us For Free',NULL,NULL),(2,'Rent More Than 4 Times And Get 50% Discount.',NULL,NULL),(3,'Get The 3rd Rent With Discount 25%.',NULL,NULL);
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rentals`
--

DROP TABLE IF EXISTS `rentals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rentals` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `phone_number` int NOT NULL,
  `pickup_datetime` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration_id` bigint unsigned NOT NULL,
  `location_id` bigint unsigned NOT NULL,
  `bike_id` bigint unsigned NOT NULL,
  `payment_method` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `offer` double(8,2) NOT NULL,
  `total` double(8,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rentals_user_id_foreign` (`user_id`),
  KEY `rentals_duration_id_foreign` (`duration_id`),
  KEY `rentals_location_id_foreign` (`location_id`),
  KEY `rentals_bike_id_foreign` (`bike_id`),
  CONSTRAINT `rentals_bike_id_foreign` FOREIGN KEY (`bike_id`) REFERENCES `bikes` (`id`) ON DELETE CASCADE,
  CONSTRAINT `rentals_duration_id_foreign` FOREIGN KEY (`duration_id`) REFERENCES `durations` (`id`) ON DELETE CASCADE,
  CONSTRAINT `rentals_location_id_foreign` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`) ON DELETE CASCADE,
  CONSTRAINT `rentals_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentals`
--

LOCK TABLES `rentals` WRITE;
/*!40000 ALTER TABLE `rentals` DISABLE KEYS */;
INSERT INTO `rentals` VALUES (34,17,1234567891,'2024-07-08T16:20',2,1,9,'cash','2024-07-06 09:21:09','2024-07-06 09:21:09',16.00,0.00),(35,18,1234567890,'2024-07-11T16:00',5,3,2,'cash','2024-07-06 09:48:32','2024-07-06 09:48:32',70.00,0.00),(36,18,1234567890,'2024-07-15T15:49',1,4,5,'credit card','2024-07-06 09:50:03','2024-07-06 09:50:03',0.00,10.00),(37,18,1234567890,'2024-07-07T17:21',3,1,11,'cash','2024-07-06 11:21:29','2024-07-06 11:21:29',7.00,21.00),(38,18,1234567890,'2024-07-18T18:22',4,2,7,'cash','2024-07-06 11:22:56','2024-07-06 11:22:56',0.00,36.00),(39,20,1234567890,'2024-07-08T08:36',2,4,9,'cash','2024-07-06 20:37:16','2024-07-06 20:37:16',16.00,0.00),(40,21,1234567890,'2024-07-08T13:04',2,3,6,'credit card','2024-07-07 07:09:22','2024-07-07 07:09:22',16.00,0.00),(41,22,123456789,'2024-07-08T19:20',1,2,2,'credit card','2024-07-07 13:21:16','2024-07-07 13:21:16',10.00,0.00),(42,27,123456789,'2024-07-14T18:21',3,2,4,'credit card','2024-07-13 13:21:54','2024-07-13 13:21:54',28.00,0.00);
/*!40000 ALTER TABLE `rentals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (17,'Reem Ashraf','reem22@gmail.com',NULL,'$2y$10$/i.DEP8hPzAUh1Xtk9BGv.61erR8YZRwwesTm6q6.9nYv.mNOGyn6',23,NULL,'2024-07-06 09:18:30','2024-07-06 09:18:30','admin'),(18,'Nardeen Adel','nardeen22@gmail.com',NULL,'$2y$10$f2qUDkZGLhiZJYCIfHtJp.yeuUMFpqmlBKy/zkfRQG26kAseKbN/m',23,NULL,'2024-07-06 09:31:18','2024-07-06 09:31:18','user'),(20,'Hala Mahmoud','hala22@gmail.com',NULL,'$2y$10$xD7gjRtvX0EgB3UvyR22ZOqjJgdYR0vQuCmxDjbBNy9ae/k4nwf/e',27,NULL,'2024-07-06 16:38:17','2024-07-06 16:38:17','user'),(21,'Walaa Ali','walaa22@gmail.com',NULL,'$2y$10$84FFOV86p14qNTS0BuO7gebYjTu87h1K1sfuguRdwFrGOKKA9VxvS',19,NULL,'2024-07-07 06:59:38','2024-07-07 06:59:38','user'),(22,'Nardeen Adeell','nardeen33@gmail.com',NULL,'$2y$10$GRph.E9r4kvTXeuplScKQ.A5WZDvQKMqc2AoxbGkTnn2j.cLKDqB.',22,NULL,'2024-07-07 13:18:56','2024-07-07 13:18:56','user'),(27,'Reem Ashraff','reemashraf22@gmail.com',NULL,'$2y$10$skEpTjxxf9uOj0PLSyDuVeOjjhtZ0tQguOuMk3tLS/Y2yR8OSX1h6',23,NULL,'2024-07-13 13:01:44','2024-07-13 13:01:44','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_offers`
--

DROP TABLE IF EXISTS `users_offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_offers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `offer_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_offers_user_id_foreign` (`user_id`),
  KEY `users_offers_offer_id_foreign` (`offer_id`),
  CONSTRAINT `users_offers_offer_id_foreign` FOREIGN KEY (`offer_id`) REFERENCES `offers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `users_offers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_offers`
--

LOCK TABLES `users_offers` WRITE;
/*!40000 ALTER TABLE `users_offers` DISABLE KEYS */;
INSERT INTO `users_offers` VALUES (1,20,1,NULL,NULL),(2,21,1,NULL,NULL),(3,22,1,NULL,NULL),(4,27,1,NULL,NULL);
/*!40000 ALTER TABLE `users_offers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-03 16:37:48
