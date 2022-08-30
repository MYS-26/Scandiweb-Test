-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2022 at 10:22 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `sku` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `type` varchar(255) NOT NULL,
  `attribute` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `sku`, `name`, `price`, `type`, `attribute`) VALUES
(1, 'JVC200123', 'Acme DISC', '1.00', 'DVD', '700'),
(2, 'GGWP0007', 'War and Peace', '20.00', 'Book', '2'),
(3, 'TR120555', 'Chair', '40.00', 'Furniture', '24x45x15'),
(40, 'ASDW2229', 'The Lord of the Rings', '15.00', 'Book', '2'),
(41, 'GY257959', 'Hamlet', '18.00', 'Book', '2'),
(42, 'Len12345', 'LENON Dining Table', '325.00', 'Furniture', '82x90x190'),
(43, 'DOOR6220', 'Maple Leaf Wardrobe', '545.00', 'Furniture', '220x60x240'),
(44, 'IMDB1972', 'Verbatim DVD', '5.00', 'DVD', '4000'),
(45, 'MX635117', 'Maxell', '6.00', 'DVD', '5000'),
(46, 'T2578090', 'Extendable Dining Table', '257.00', 'Furniture', '80x90x200'),
(47, 'RJWS5998', 'Romeo and Juliet', '14.50', 'Book', '3'),
(48, 'FSMS1818', 'Frankenstein', '16.76', 'Book', '2'),
(49, 'ALICE190', 'The Wonderful Wizard of OZ', '15.00', 'Book', '2'),
(50, 'ABCD1500', 'ABC DISC', '1.00', 'DVD', '500'),
(51, 'XYZ15000', 'XYZ DISC', '10.00', 'DVD', '5000'),
(53, 'SOFA3829', 'Sofa 3 Seater', '655.00', 'Furniture', '82x90x228'),
(54, 'SOFA1218', 'Sofa 1 Seater', '218.00', 'Furniture', '6x84x74'),
(61, 'RIHLA325', 'A Masterpiece to Those Who Contemplate the Wonders of Cities and the Marvels of Travelling', '20.00', 'Book', '3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Unique_SKU` (`sku`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
